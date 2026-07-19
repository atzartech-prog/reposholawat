import re
import urllib.request
import json
import time
from html import unescape
from concurrent.futures import ThreadPoolExecutor, as_completed

# Path to the downloaded index file to extract all links
index_path = "/data/data/com.termux/files/home/.gemini/antigravity-cli/brain/ffc0c7db-14c2-4e8e-a443-643d0ae0da93/.system_generated/steps/14/content.md"

with open(index_path, "r", encoding="utf-8") as f:
    index_content = f.read()

# Extract all links
all_links = re.findall(r'<li><a[^>]+href="(https://pecintahabibana\.wordpress\.com/\d{4}/\d{2}/\d{2}/[^"]+)"[^>]*>([^<]+)</a>', index_content)

print(f"Total links found: {len(all_links)}")

# Remove duplicates
unique_links = []
seen = set()
for url, title in all_links:
    if url not in seen:
        seen.add(url)
        unique_links.append((url, title.strip()))

print(f"Unique links to crawl: {len(unique_links)}")

# Headers for crawling
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def clean_html(text):
    text = re.sub(r'<[^>]+>', '', text)
    return unescape(text).strip()

def has_arabic(text):
    # Only match actual Arabic letters (from Hamza \u0621 to Ya \u064A)
    # This prevents matching Arabic digits (۰) or ayah separators (۞) used in Latin/Indonesian lines
    return any('\u0621' <= char <= '\u064A' for char in text)

def scrape_page(url, index_title):
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as response:
            html = response.read().decode('utf-8')
            
        # Get Title from HTML
        title_match = re.search(r'<title>([^|]+)', html)
        title = unescape(title_match.group(1)).strip() if title_match else index_title
        # Remove suffix " | Thobiby Qolby" or similar if present
        title = title.split('|')[0].strip()
        
        # Get entry container
        entry_match = re.search(r'<div class="entry">([\s\S]+?)</div>\s*<div class="postinfo">', html)
        if not entry_match:
            entry_match = re.search(r'<div class="entry">([\s\S]+?)</div>', html)
            
        if not entry_match:
            return None
            
        entry_html = entry_match.group(1)
        # Clean scripts, styles, comments
        entry_html = re.sub(r'<script[\s\S]+?</script>', '', entry_html)
        entry_html = re.sub(r'<style[\s\S]+?</style>', '', entry_html)
        entry_html = re.sub(r'<!--[\s\S]+?-->', '', entry_html)
        
        # Extract PDF download links
        pdf_links = re.findall(r'href="([^"]+\.pdf)"', entry_html)
        pdf_link = pdf_links[0] if pdf_links else ""
        
        # Find paragraphs
        paragraphs = re.findall(r'<p[^>]*>([\s\S]+?)</p>', entry_html)
        
        # Determine background story vs lyrics
        background_paragraphs = []
        lyrics = []
        
        # Search for first paragraph containing Arabic text.
        # Everything before the first Arabic paragraph (excluding header titles) is background.
        first_arabic_idx = -1
        for idx, p in enumerate(paragraphs):
            p_clean = clean_html(p)
            if has_arabic(p_clean):
                # Check if it's just a label like "هذه القصيدة..." or similar
                if "هذه" in p_clean or "القصيدة" in p_clean or "قصيدة" in p_clean:
                    if first_arabic_idx == -1:
                        first_arabic_idx = idx
                else:
                    if first_arabic_idx == -1:
                        first_arabic_idx = idx
                    break
        
        if first_arabic_idx == -1:
            # If no Arabic paragraph found, let's treat the entire content as background
            first_arabic_idx = len(paragraphs)
            
        # Collect background
        for p in paragraphs[:first_arabic_idx]:
            p_clean = clean_html(p)
            if p_clean and p_clean != "***" and p_clean != "---" and not p_clean.startswith("*)"):
                background_paragraphs.append(f"<p>{p_clean}</p>")
                
        background = "\n".join(background_paragraphs)
        if not background:
            background = f"Teks Qosidah/Sholawat {title} lengkap dengan lirik bahasa Arab, latin, dan terjemahan bahasa Indonesia."
            
        # Parse Lyrics
        # We loop from the first Arabic paragraph onwards
        i = first_arabic_idx
        while i < len(paragraphs):
            p = paragraphs[i]
            p_clean = clean_html(p)
            
            # Skip if it's separator, disclaimer, or PDF download text
            if p_clean == "***" or p_clean == "---" or "download" in p_clean.lower() or p_clean.startswith("*)") or "mohon maaf" in p_clean.lower():
                i += 1
                continue
                
            # If this paragraph contains Arabic
            if has_arabic(p_clean):
                # Check if there is a line break <br /> separating Arabic and Latin
                parts = re.split(r'<br\s*/?>', p, flags=re.IGNORECASE)
                if len(parts) >= 2:
                    arabic_text = clean_html(parts[0])
                    latin_text = clean_html(parts[1])
                else:
                    # No line break, see if we can split by newline or just treat as arabic only
                    p_lines = [l for l in p.split('\n') if l.strip()]
                    if len(p_lines) >= 2:
                        arabic_text = clean_html(p_lines[0])
                        latin_text = clean_html(p_lines[1])
                    else:
                        arabic_text = p_clean
                        latin_text = ""
                
                # Check if the next paragraph is the translation (doesn't contain Arabic and exists)
                translation_text = ""
                if i + 1 < len(paragraphs):
                    next_p = paragraphs[i+1]
                    next_p_clean = clean_html(next_p)
                    if not has_arabic(next_p_clean) and next_p_clean != "***" and next_p_clean != "---" and "download" not in next_p_clean.lower() and not next_p_clean.startswith("*)"):
                        translation_text = next_p_clean
                        i += 1 # Consume translation paragraph
                
                # If we parsed a valid Arabic line
                if arabic_text:
                    lyrics.append({
                        "arabic": arabic_text,
                        "latin": latin_text,
                        "translation": translation_text
                    })
            i += 1
            
        # Classify Category
        cat_lower = title.lower()
        category = "qosidah"
        if any(kw in cat_lower for kw in ["sholawat", "shollallahu", "sholli", "sallim", "allahumma", "nariyah", "asyghil", "jibril", "tibbil"]):
            category = "sholawat"
        elif any(kw in cat_lower for kw in ["maulid", "simthud", "diba", "barzanji", "dhiya", "mahallul"]):
            category = "maulid"
            
        # Is Popular (We can mark some well-known ones as popular)
        popular_keywords = [
            "addinu lana", "busyro lana", "man ana", "alqolbu mutayyam", "ya hanana", 
            "huwan nur", "kalamun qodim", "annabi shollu", "qod kafani", "asyghil",
            "nariyah", "jibril", "thola'al", "yasir lana", "ya asyiqol", "assalamu 'alaika",
            "sholatun", "turi putih", "lir ilir", "padang bulan", "ya habibal qolbi"
        ]
        is_popular = any(kw in cat_lower for kw in popular_keywords)
        
        return {
            "id": url.rstrip('/').split('/')[-1],
            "title": title,
            "category": category,
            "isPopular": is_popular,
            "source": url,
            "background": background,
            "lyrics": lyrics,
            "pdfLink": pdf_link
        }
    except Exception as e:
        print(f"Error scraping {url}: {e}")
        return None

# Crawling function
def start_crawl(limit=None):
    links_to_crawl = unique_links
    if limit:
        links_to_crawl = unique_links[:limit]
        print(f"Running in TEST mode: crawling {limit} pages...")
    else:
        print(f"Running in FULL mode: crawling {len(links_to_crawl)} pages...")
        
    results = []
    start_time = time.time()
    
    # Run with ThreadPoolExecutor
    with ThreadPoolExecutor(max_workers=20) as executor:
        futures = {executor.submit(scrape_page, url, title): url for url, title in links_to_crawl}
        
        completed_count = 0
        for future in as_completed(futures):
            res = future.result()
            if res:
                results.append(res)
            completed_count += 1
            if completed_count % 10 == 0 or completed_count == len(links_to_crawl):
                print(f"Progress: {completed_count}/{len(links_to_crawl)} completed ({(completed_count/len(links_to_crawl))*100:.1f}%)")
                
    elapsed = time.time() - start_time
    print(f"\nCrawling finished! Successfully crawled {len(results)} out of {len(links_to_crawl)} in {elapsed:.2f} seconds.")
    
    # Save to JSON
    with open("sholawat_db.json", "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
        
    print("Database written to sholawat_db.json successfully.")

if __name__ == "__main__":
    import sys
    # If "test" is passed, run a limit of 10
    if len(sys.argv) > 1 and sys.argv[1] == "test":
        start_crawl(limit=10)
    else:
        start_crawl()
