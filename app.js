// Sholawat & Qosidah Database
// sholawatData is loaded from data.js

// App State Management
let appState = {
  selectedId: null,
  currentCategory: "all",
  searchQuery: "",
  favorites: [],
  fontSize: "medium", // small, medium, large, xlarge
  showTranslit: true,
  showTranslation: true
};

// DOM Elements
const elements = {
  themeToggle: document.getElementById("theme-toggle"),
  searchInput: document.getElementById("search-input"),
  clearSearch: document.getElementById("clear-search"),
  categoryTabs: document.getElementById("category-tabs"),
  sholawatList: document.getElementById("sholawat-list"),
  listTitle: document.getElementById("list-title"),
  itemsCount: document.getElementById("items-count"),
  
  // Detail Panel
  detailPanel: document.getElementById("detail-panel"),
  detailEmpty: document.getElementById("detail-empty-state"),
  detailContent: document.getElementById("detail-content"),
  btnBack: document.getElementById("back-to-list"),
  favToggleBtn: document.getElementById("fav-toggle-btn"),
  detailCategory: document.getElementById("detail-category"),
  detailTitle: document.getElementById("detail-title"),
  detailSourceLink: document.getElementById("detail-source-link"),
  
  // Reading Control
  btnSizes: document.querySelectorAll(".btn-size"),
  toggleTranslit: document.getElementById("toggle-translit"),
  toggleTranslation: document.getElementById("toggle-translation"),
  
  // Tabs & Views
  detailTabs: document.querySelectorAll(".detail-tab-btn"),
  tabPanels: document.querySelectorAll(".tab-panel"),
  lyricsContainer: document.getElementById("lyrics-container"),
  detailHistoryText: document.getElementById("detail-history-text"),
  
  // Action Buttons
  copyAllBtn: document.getElementById("copy-all-btn"),
  searchYoutubeBtn: document.getElementById("search-youtube-btn"),
  
  // Parent layout wrapper
  listSection: document.querySelector(".list-section")
};

// Initialize Application
function init() {
  loadFavorites();
  loadThemePreference();
  setupEventListeners();
  renderList();
  
  // Adjust screen state
  handleResponsiveView();
}

// Local Storage for Favorites
function loadFavorites() {
  const saved = localStorage.getItem("reposholawat_favs");
  if (saved) {
    try {
      appState.favorites = JSON.parse(saved);
    } catch (e) {
      appState.favorites = [];
    }
  }
}

function saveFavorites() {
  localStorage.setItem("reposholawat_favs", JSON.stringify(appState.favorites));
}

// Light/Dark Theme Handling
function loadThemePreference() {
  const isLight = localStorage.getItem("reposholawat_theme") === "light";
  if (isLight) {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    elements.themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    elements.themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

function toggleTheme() {
  const isLight = document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme", !isLight);
  localStorage.setItem("reposholawat_theme", isLight ? "light" : "dark");
  elements.themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
}

// Event Listeners setup
function setupEventListeners() {
  // Theme Switcher
  elements.themeToggle.addEventListener("click", toggleTheme);
  
  // Search Input
  elements.searchInput.addEventListener("input", (e) => {
    appState.searchQuery = e.target.value.toLowerCase().trim();
    if (appState.searchQuery.length > 0) {
      elements.clearSearch.classList.remove("hidden");
    } else {
      elements.clearSearch.classList.add("hidden");
    }
    renderList();
  });
  
  // Clear search button
  elements.clearSearch.addEventListener("click", () => {
    elements.searchInput.value = "";
    appState.searchQuery = "";
    elements.clearSearch.classList.add("hidden");
    renderList();
  });
  
  // Category Filtering Tabs
  elements.categoryTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    
    // Set active tab styling
    document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));
    btn.classList.add("active");
    
    appState.currentCategory = btn.dataset.category;
    renderList();
  });

  // Reading Options (Arabic font size changer)
  elements.btnSizes.forEach(btn => {
    btn.addEventListener("click", () => {
      elements.btnSizes.forEach(el => el.classList.remove("active"));
      btn.classList.add("active");
      appState.fontSize = btn.dataset.size;
      updateFontSize();
    });
  });

  // Show/Hide Latin Transliteration
  elements.toggleTranslit.addEventListener("change", (e) => {
    appState.showTranslit = e.target.checked;
    updateLyricsDisplay();
  });

  // Show/Hide Translation
  elements.toggleTranslation.addEventListener("change", (e) => {
    appState.showTranslation = e.target.checked;
    updateLyricsDisplay();
  });

  // Detail panel tab switching (Lyrics vs Background)
  elements.detailTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      elements.detailTabs.forEach(el => el.classList.remove("active"));
      tab.classList.add("active");
      
      elements.tabPanels.forEach(panel => panel.classList.remove("active"));
      document.getElementById(tab.dataset.target).classList.add("active");
    });
  });

  // Favorite toggle in detail view
  elements.favToggleBtn.addEventListener("click", () => {
    if (!appState.selectedId) return;
    toggleFavorite(appState.selectedId);
  });

  // Back Button for mobile view
  elements.btnBack.addEventListener("click", () => {
    appState.selectedId = null;
    handleResponsiveView();
    // Remove active styling from list
    document.querySelectorAll(".sholawat-card").forEach(el => el.classList.remove("active"));
  });

  // Copy button handler
  elements.copyAllBtn.addEventListener("click", copyToClipboard);

  // Responsive design listener
  window.addEventListener("resize", handleResponsiveView);
}

// Font size modifier
function updateFontSize() {
  let sizeVal = "2.2rem";
  switch (appState.fontSize) {
    case "small": sizeVal = "1.6rem"; break;
    case "medium": sizeVal = "2.2rem"; break;
    case "large": sizeVal = "2.8rem"; break;
    case "xlarge": sizeVal = "3.4rem"; break;
  }
  document.documentElement.style.setProperty('--arabic-font-size', sizeVal);
}

// Translit / Translation toggler
function updateLyricsDisplay() {
  const latinLines = document.querySelectorAll(".lyric-latin");
  const transLines = document.querySelectorAll(".lyric-translation");
  
  latinLines.forEach(line => {
    if (appState.showTranslit) line.classList.remove("hidden");
    else line.classList.add("hidden");
  });
  
  transLines.forEach(line => {
    if (appState.showTranslation) line.classList.remove("hidden");
    else line.classList.add("hidden");
  });
}

// Render list of Sholawat (left-side pane)
function renderList() {
  elements.sholawatList.innerHTML = "";
  
  // Filter Data
  const filtered = sholawatData.filter(item => {
    // 1. Filter by category
    if (appState.currentCategory === "populer" && !item.isPopular) return false;
    if (appState.currentCategory === "sholawat" && item.category !== "sholawat") return false;
    if (appState.currentCategory === "qosidah" && item.category !== "qosidah") return false;
    if (appState.currentCategory === "maulid" && item.category !== "maulid") return false;
    if (appState.currentCategory === "favorites" && !appState.favorites.includes(item.id)) return false;
    
    // 2. Filter by search query
    if (appState.searchQuery) {
      const matchTitle = item.title.toLowerCase().includes(appState.searchQuery);
      const matchHistory = item.background.toLowerCase().includes(appState.searchQuery);
      const matchLyrics = item.lyrics.some(verse => 
        verse.latin.toLowerCase().includes(appState.searchQuery) ||
        verse.translation.toLowerCase().includes(appState.searchQuery)
      );
      return matchTitle || matchHistory || matchLyrics;
    }
    
    return true;
  });

  // Update Section Title & Items Count
  let catTitle = "Semua Teks";
  switch(appState.currentCategory) {
    case "populer": catTitle = "Teks Terpopuler"; break;
    case "sholawat": catTitle = "Daftar Sholawat"; break;
    case "qosidah": catTitle = "Daftar Qosidah"; break;
    case "maulid": catTitle = "Daftar Maulid"; break;
    case "favorites": catTitle = "Koleksi Favorit"; break;
  }
  elements.listTitle.innerText = catTitle;
  elements.itemsCount.innerText = `${filtered.length} Teks`;

  if (filtered.length === 0) {
    elements.sholawatList.innerHTML = `
      <div class="empty-state" style="padding: 2rem 1rem;">
        <i class="fa-solid fa-face-frown empty-icon" style="font-size: 2.5rem;"></i>
        <h3>Tidak Ditemukan</h3>
        <p>Lirik yang Anda cari tidak ada dalam repository ini.</p>
      </div>
    `;
    return;
  }

  // Create list item cards
  filtered.forEach(item => {
    const isFav = appState.favorites.includes(item.id);
    const firstVerse = item.lyrics[0] ? item.lyrics[0].arabic : "";
    const isActive = appState.selectedId === item.id;
    
    const card = document.createElement("div");
    card.className = `sholawat-card glass-container ${isActive ? 'active' : ''}`;
    card.dataset.id = item.id;
    
    card.innerHTML = `
      <div class="card-top">
        <span class="category-badge">${item.category}</span>
        <button class="card-fav-btn ${isFav ? 'active' : ''}" aria-label="Favorite">
          <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-star"></i>
        </button>
      </div>
      <h3>${item.title}</h3>
      <p class="card-preview">${firstVerse}</p>
      <div class="card-meta">
        <span>${item.lyrics.length} bait</span>
        ${item.isPopular ? '<span><i class="fa-solid fa-fire text-gold"></i> Populer</span>' : ''}
      </div>
    `;
    
    // Click on Card selects it
    card.addEventListener("click", (e) => {
      // Prevent click triggers when clicking favorite button on the card
      if (e.target.closest(".card-fav-btn")) {
        e.stopPropagation();
        toggleFavorite(item.id);
        return;
      }
      
      selectSholawat(item.id);
    });
    
    elements.sholawatList.appendChild(card);
  });
}

// Select Sholawat and update details pane
function selectSholawat(id) {
  appState.selectedId = id;
  
  // Highlight card in list
  document.querySelectorAll(".sholawat-card").forEach(el => {
    el.classList.toggle("active", el.dataset.id === id);
  });
  
  const data = sholawatData.find(item => item.id === id);
  if (!data) return;

  // Render detail view
  elements.detailCategory.innerText = data.category;
  elements.detailTitle.innerText = data.title;
  elements.detailSourceLink.href = data.source;
  elements.detailHistoryText.innerHTML = data.background;
  
  // Render verses
  elements.lyricsContainer.innerHTML = "";
  data.lyrics.forEach(verse => {
    const verseDiv = document.createElement("div");
    verseDiv.className = "lyric-verse";
    verseDiv.innerHTML = `
      <p class="lyric-arabic">${verse.arabic}</p>
      <p class="lyric-latin ${appState.showTranslit ? '' : 'hidden'}">${verse.latin}</p>
      <p class="lyric-translation ${appState.showTranslation ? '' : 'hidden'}">${verse.translation}</p>
    `;
    elements.lyricsContainer.appendChild(verseDiv);
  });
  
  // Update favorite button status
  updateFavBtn(id);

  // Update YouTube Link
  elements.searchYoutubeBtn.href = `https://www.youtube.com/results?search_query=sholawat+${encodeURIComponent(data.title)}`;

  // Show details panel
  elements.detailEmpty.classList.add("hidden");
  elements.detailContent.classList.remove("hidden");
  
  // Reset tab to Lyrics view
  elements.detailTabs[0].click();
  
  handleResponsiveView();
}

// Update state of favorited icons
function updateFavBtn(id) {
  const isFav = appState.favorites.includes(id);
  if (isFav) {
    elements.favToggleBtn.classList.add("active");
    elements.favToggleBtn.innerHTML = '<i class="fa-solid fa-star text-gold"></i>';
  } else {
    elements.favToggleBtn.classList.remove("active");
    elements.favToggleBtn.innerHTML = '<i class="fa-regular fa-star"></i>';
  }
}

// Toggle Bookmark favorites in array and storage
function toggleFavorite(id) {
  const index = appState.favorites.indexOf(id);
  if (index === -1) {
    appState.favorites.push(id);
  } else {
    appState.favorites.splice(index, 1);
  }
  
  saveFavorites();
  
  // Update list cards state
  renderList();
  
  // Update detail icon state if current item toggled
  if (appState.selectedId === id) {
    updateFavBtn(id);
  }
}

// Copy full lyrics text utility
function copyToClipboard() {
  if (!appState.selectedId) return;
  const data = sholawatData.find(item => item.id === appState.selectedId);
  if (!data) return;

  let textToCopy = `=== ${data.title.toUpperCase()} ===\n`;
  textToCopy += `Kategori: ${data.category.toUpperCase()}\n`;
  textToCopy += `Sumber: ${data.source}\n\n`;
  
  data.lyrics.forEach((verse, idx) => {
    textToCopy += `[Bait ${idx + 1}]\n`;
    textToCopy += `${verse.arabic}\n`;
    textToCopy += `${verse.latin}\n`;
    textToCopy += `Artinya: "${verse.translation}"\n\n`;
  });
  
  textToCopy += `Amalkan dengan ikhlas, semoga berkah.`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    // Show user-friendly custom toast notification (temporary alert)
    showToast("Teks lirik berhasil disalin!");
  }).catch(err => {
    alert("Gagal menyalin teks: " + err);
  });
}

// Show feedback alert toast
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: var(--color-accent);
      color: #07130e;
      padding: 0.8rem 1.8rem;
      border-radius: 30px;
      font-weight: 600;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      z-index: 1000;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;
    document.body.appendChild(toast);
  }
  
  toast.innerText = message;
  // Trigger layout recalculation to initiate transitions
  toast.offsetHeight; 
  toast.style.transform = "translateX(-50%) translateY(0)";
  
  setTimeout(() => {
    toast.style.transform = "translateX(-50%) translateY(100px)";
  }, 2500);
}

// Adjust view for mobile sizes
function handleResponsiveView() {
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    if (appState.selectedId) {
      // Mobile & Selected: Show Details pane, Hide Lists pane
      elements.listSection.classList.add("hidden-mobile");
      elements.detailPanel.classList.add("active-mobile");
    } else {
      // Mobile & None Selected: Show Lists pane, Hide Details pane
      elements.listSection.classList.remove("hidden-mobile");
      elements.detailPanel.classList.remove("active-mobile");
    }
  } else {
    // Desktop View resets standard display
    elements.listSection.classList.remove("hidden-mobile");
    elements.detailPanel.classList.remove("active-mobile");
  }
}

// Run init on Page Load
window.addEventListener("DOMContentLoaded", init);
