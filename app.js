// Sholawat & Qosidah Database
const sholawatData = [
  {
    id: "addinu-lana",
    title: "Addinu Lana (Agama Bagi Kita)",
    category: "qosidah",
    isPopular: true,
    source: "https://pecintahabibana.wordpress.com/2014/09/04/addinu-lana/",
    background: "Qosidah 'Addinu Lana' (Agama bagi kita) mengisahkan keteguhan iman para sahabat Nabi, salah satunya Sayyidina Bilal bin Rabah yang rela disiksa demi mempertahankan kalimat Tauhid. Qosidah ini menegaskan keindahan Islam sebagai agama pembawa kebenaran, keadilan, serta cahaya kedamaian bagi seluruh alam semesta.",
    lyrics: [
      {
        arabic: "الدِّيْنُ لَنَا وَالْحَقُّ لَنَا ، وَالْعَدْلُ لَنَا وَالْكُلُّ لَنَا",
        latin: "Addînu lanâ wal haqqu lanâ, wal 'adlu lanâ wal kullu lanâ",
        translation: "Agama adalah milik kami, kebenaran adalah milik kami, keadilan adalah milik kami, dan segala sesuatu adalah milik kami."
      },
      {
        arabic: "أَضْحَى الْإِسْلَامُ لَنَا دِيْنَا ، وَجَمِيْعُ الْكَوْنِ لَنَا وَطَنَا",
        latin: "Adlhâl islâmu lanâ dînâ, wa jamî'ul kawni lanâ wathonâ",
        translation: "Islam telah menjadi agama kami, dan seluruh alam semesta adalah tanah air kami."
      },
      {
        arabic: "تَوْحِيْدُ اللهِ لَنَا نُوْرٌ ، أَعْدَدْنَا الرُّوحَ لَهُ سَكَنَا",
        latin: "Tawhîdullâhi lanâ nûrun, a'dadnâr-rûha lahu sakanâ",
        translation: "Tauhid kepada Allah bagi kami adalah cahaya, kami menyiapkan jiwa kami untuk-Nya sebagai tempat tinggal."
      },
      {
        arabic: "هُوَ أَوَّلُ بَيْتٍ نَحْفَظُهُ ، بِحَيَاةِ الرُّوحِ وَيَحْفَظُنَا",
        latin: "Huwa awwalu baitin nahfadhuhu, bihayâtir-rûhi wa yahfadhunâ",
        translation: "Dia adalah rumah pertama yang kami jaga, dengan kehidupan jiwa yang menjaga kami."
      },
      {
        arabic: "عَلَمُ الْإِسْلَامِ عَلَى الْأَيَّامِ ، شِعَارُ الْمَجْدِ لِمِلَّتِنَا",
        latin: "‘Alamul islâmi ‘alâl ayyâm, syi‘ârul majdi limillatinâ",
        translation: "Bendera Islam di sepanjang masa, simbol kejayaan bagi umat kami."
      },
      {
        arabic: "الْكَوْنُ يَزُوْلُ وَلَا تُمْحَى ، بِالدَّهْرِ صَحَائِفُ سُؤْدُدِنَا",
        latin: "Alkawnu yazûlu walâ tumhâ, biddahri shohâ-if su'dadinâ",
        translation: "Semesta akan berlalu dan tidak akan terlupakan, di sepanjang waktu tercatatlah catatan kemuliaan kami."
      }
    ]
  },
  {
    id: "busyro-lana",
    title: "Busyro Lana (Kabar Gembira)",
    category: "qosidah",
    isPopular: true,
    source: "https://pecintahabibana.wordpress.com/2013/01/01/busyro-lana-%d8%a8%d8%b4%d8%b1%db%8c-%d9%84%d9%86%d8%a7/",
    background: "Qosidah 'Busyro Lana' berisi ungkapan rasa bahagia luar biasa dari seorang hamba atas kedatangan atau kedekatannya dengan Rasulullah SAW. Kabar gembira itu menghapus segala duka lara karena bertatap pandang secara spiritual maupun langsung dengan sang kekasih hati, Muhammad Al-Musthofa.",
    lyrics: [
      {
        arabic: "بُشْرَى لَنَا نِلْنَا الْمُنَى ، زَالَ الْعَنَى وَافَى الْهَنَا",
        latin: "Busyrô lanâ nilnâl munâ, zâlal 'anâ wa falhanâ",
        translation: "Kebahagiaan milik kami karena kami memperoleh harapan kami, dan hilanglah penderitaan, telah datang kegembiraan."
      },
      {
        arabic: "وَالدَّهْرُ أَنْجَزَ وَعْدَهُ ، وَالْبِشْرُ أَضْحَى مُعْلَنَا",
        latin: "Waddahru anjaza wa'dahu, wal bisyru adlhâ mu'lanâ",
        translation: "Dan waktu telah menepati janjinya, dan kabar gembira kini tampak nyata."
      },
      {
        arabic: "يَا نَفْسُ طِيْبِي بِاللِّقَا ، يَا عَيْنُ قَرِّي أَعْيُنَا",
        latin: "Yâ nafsu thîbî billiqô, yâ 'ainu qorrî a'yunâ",
        translation: "Wahai jiwa bahagialah dengan pertemuan ini, wahai mata sejukkanlah pandangan kami."
      },
      {
        arabic: "هَذَا جَمَالُ الْمُصْطَفَى ، أَنْوَارُهُ لَاحَتْ لَنَا",
        latin: "Hâdzâ jamâlul Mushthofâ, anwâruhu lâhat lanâ",
        translation: "Ini adalah keindahan Al-Musthofa (Rasulullah SAW), cahayanya telah bersinar terang untuk kami."
      },
      {
        arabic: "يَا طَيْبَةُ مَاذَا نَقُوْلُ ، وَفِيْكِ قَدْ حَلَّ الرَّسُوْلُ",
        latin: "Yâ Thoybatu mâdzâ naqûlu, wa fîki qod hallar-Rosûlu",
        translation: "Wahai Thoybah (Madinah) apakah yang dapat kami katakan, sedangkan di dalammu telah tinggal sang Utusan Allah."
      },
      {
        arabic: "وَكُلُّنَا نَرْجُو الْوُصُوْلُ ، لِقَبْرِهِ لَا نُحْرَمَنَا",
        latin: "Wa kullunâ narjûl wushûlu, liqobrihi lâ nuhromanâ",
        translation: "Dan kami semua berharap dapat sampai ke makamnya, janganlah kiranya kami terhalang."
      }
    ]
  },
  {
    id: "man-ana",
    title: "Man Ana (Siapakah Diriku)",
    category: "qosidah",
    isPopular: true,
    source: "https://pecintahabibana.wordpress.com/2016/09/04/qosidah-man-ana/",
    background: "Qosidah 'Man Ana' ditulis oleh ulama dan biasa dibawakan untuk menunjukkan rasa takzim, cinta, serta pengakuan ketidakberdayaan seorang murid tanpa bimbingan dan cinta dari para gurunya, utamanya kepada para keluarga suci Nabi (Ahlul Bait) yang menuntun akhlak umat.",
    lyrics: [
      {
        arabic: "مَنْ أَنَا مَنْ أَنَا لَوْلَاكُم ، كَيْفَ مَا حُبِّيْ وَكَيْفَ مَا أَهْوَاكُم",
        latin: "Man ana man ana laulakum, kaifa mâ hubbî wa kaifa mâ ahwâkum",
        translation: "Siapakah diriku, siapakah diriku jika tanpa kalian (para guru), bagaimana mungkin aku tidak mencintai kalian dan bagaimana mungkin aku tidak mengharapkan kalian."
      },
      {
        arabic: "أَنْتُمُ طِبِّيْ وَأَنْتُمُ سُؤْلِيْ ، أَنْتُمُ أَقْصَى مُرَادِيْ فِيْ رِضَاكُم",
        latin: "Antumu thibbî wa antumu su'lî, antumu aqshô murâdî fî ridhâkum",
        translation: "Kalianlah obat penawar hatiku dan kalianlah tujuanku, kalianlah puncak cita-citaku untuk memperoleh keridhaan kalian."
      },
      {
        arabic: "يَا حَبِيْبِيْ يَا رَسُوْلَ اللهِ ، يَا سَنَدِيْ وَمَلَاذِيْ فِيْ حِمَاكُم",
        latin: "Yâ habîbî yâ Rosûlallâh, yâ sanadî wa malâdzî fî himâkum",
        translation: "Wahai kekasihku, wahai Utusan Allah, wahai sandaranku dan tempat perlindunganku di bawah naunganmu."
      },
      {
        arabic: "تَبَاشَرَتِ الدُّنْيَا بِيَوْمِ مَوْلِدِكُم ، وَأَشْرَقَتِ الْأَنْوَارُ مِنْ سَنَاكُم",
        latin: "Tabâsyarotid-dunyâ biyaumi maulidikum, wa asyroqotil-anwâru min sanâkum",
        translation: "Dunia saling memberi kabar gembira pada hari kelahiranmu, dan cahaya memancar dari keagunganmu."
      }
    ]
  },
  {
    id: "alqolbu-mutayyam",
    title: "Alqolbu Mutayyam (Hati yang Rindu)",
    category: "qosidah",
    isPopular: false,
    source: "https://pecintahabibana.wordpress.com/2013/01/09/alqolbu-mutayyam-%d8%a7%d9%84%d9%82%d9%84%d8%a8-%d9%85%d8%aa%d9%8a%d9%85/",
    background: "Teks 'Alqolbu Mutayyam' mengungkapkan rasa cinta membara yang merasuki hati seseorang kepada Nabi Muhammad SAW. Hati yang telah tertawan ini selalu mengharapkan syafaat dan syafaat tersebut sangat dibutuhkan kelak di hari kiamat.",
    lyrics: [
      {
        arabic: "اَلْقَلْبُ مُتَيَّمْ بِطٰهَ النَّبِی ، صَلَّی عَلَیْهِ وسَلَّمَ حَبِیْبِی",
        latin: "Alqolbu mutayyam bi Thôhân-nabî, shollâ 'alaihi wa sallama habîbî",
        translation: "Hati ini terpikat oleh Thoha sang Nabi, sholawat dan salam baginya kekasihku."
      },
      {
        arabic: "يَا حَبِيْبَ اللهِ يَا خَيْرَ الْبَرِيَّهْ ، أَنْتَ لِيْ مَلَاذٌ يَوْمَ الزُّحَامِ",
        latin: "Yâ habîballâh yâ khoirol bariyyah, anta lî malâdzun yaumaz-zuhami",
        translation: "Wahai kekasih Allah, wahai sebaik-baik makhluk, engkaulah perlindunganku di hari kiamat."
      },
      {
        arabic: "يَا نَبِيَّ اللهِ يَا هَادِيَ الْأَنَامِ ، أَنْتَ شَافِعِيْ فِيْ يَوْمِ الْقِيَامِ",
        latin: "Yâ nabiyyallâh yâ hâdiyal anâm, anta syâfi'î fî yaumil qiyâm",
        translation: "Wahai Nabi Allah, wahai penunjuk jalan manusia, engkaulah pemberi syafaat bagiku di hari kiamat."
      },
      {
        arabic: "صَلَاةُ اللهِ عَلَيْكَ يَا نُوْرَ الْعَيْنِ ، وَآلِكَ وَصَحْبِكَ الْكِرَامِ",
        latin: "Sholâtullâhi 'alaika yâ nûrol 'ain, wa âlika wa shohbikal kirâm",
        translation: "Sholawat rahmat Allah semoga tercurah atasmu wahai cahaya mata, serta atas keluarga dan sahabatmu yang mulia."
      }
    ]
  },
  {
    id: "ya-hanana",
    title: "Ya Hanana (Betapa Beruntungnya Kami)",
    category: "sholawat",
    isPopular: true,
    source: "https://pecintahabibana.wordpress.com/2013/01/13/dhoharoddinul-muayyad-ya-hanana/",
    background: "Qosidah 'Ya Hanana' dipopulerkan oleh Habib Syech bin Abdul Qodir Assegaf. Menggambarkan sukacita luar biasa umat Muslim atas kelahiran Rasulullah yang membawa akhlak mulia dan petunjuk syariat bagi seluruh alam.",
    lyrics: [
      {
        arabic: "ظَهَرَ الدِّيْنُ الْمُؤَيَّدْ ، بِظُهُوْرِ النَّبِی اَحْمَدْ",
        latin: "Dhoharod-dînul mu'ayyad, bidhuhûrin-nabî Ahmad",
        translation: "Telah tampak agama yang kuat dengan lahirnya sang Nabi Ahmad (Muhammad)."
      },
      {
        arabic: "يَا هَنَانَا بِالْمُحَمَّدْ ، ذَلِكَ الْفَضْلُ مِنَ الله",
        latin: "Yâ hanânâ bi-Muhammad, dzâlikal fadhlu minallâh",
        translation: "Betapa beruntungnya kami dengan adanya Muhammad, itulah karunia besar dari Allah."
      },
      {
        arabic: "خَصَّهُ الرَّحْمَنُ بِالْفَضْلِ الْعَظِيْمِ ، وَحَبَاهُ بِالْخُلُقِ الْكَرِيْمِ",
        latin: "Khosshohur-rohmânu bil fadhli-'adhîm, wa habâhu bil khuluqil karîm",
        translation: "Allah Yang Maha Pengasih mengistimewakannya dengan karunia yang agung, dan menghiasinya dengan akhlak yang mulia."
      },
      {
        arabic: "يَا هَنَانَا يَا هَنَانَا ، يَا هَنَانَا يَا هَنَانَا",
        latin: "Yâ hanânâ yâ hanânâ, yâ hanânâ yâ hanânâ",
        translation: "Betapa beruntungnya kami, betapa beruntungnya kami."
      },
      {
        arabic: "وَانْجَلَى بَدْرُ التَّمَامِ ، فِى لَيَالِى الْمَوْلِدِ",
        latin: "Wanjalâ badrut-tamâmi, fî layâlîl maulidi",
        translation: "Dan tersingkaplah purnama yang sempurna di malam-malam kelahiran (Rasulullah)."
      }
    ]
  },
  {
    id: "huwan-nur",
    title: "Huwan Nur (Dialah Cahaya)",
    category: "qosidah",
    isPopular: true,
    source: "https://pecintahabibana.wordpress.com/2012/12/09/qosidah-huwan-nur/",
    background: "Qosidah 'Huwan Nur' merupakan pujian mendalam kepada baginda Nabi Muhammad SAW sebagai pembawa lentera hidup. Ditulis oleh Habib Ali Al-Habsyi (penyusun Maulid Simtudduror), liriknya meresap dalam menggambarkan syafaat Nabi di Padang Mahsyar kelak.",
    lyrics: [
      {
        arabic: "هُوَ النُّوْرُ يَهْدِي الْحَائِرِيْنَ ضِيَاؤُهُ ، وَفِي الْحَشْرِ ظِلُّ الْمُرْسَلِيْنَ لِوَاؤُهُ",
        latin: "Huwan-nûru yahdîl hâ-irîna dliyâ-uhu, wa fîl hasyri dhillul mursalîna liwâ-uhu",
        translation: "Dialah cahaya yang petunjuknya menuntun orang yang kebingungan, dan di padang Mahsyar benderanya menjadi naungan para Rasul."
      },
      {
        arabic: "تَلَقَّى مِنَ الْغَيْبِ الْمُجَرَّدِ حِكْمَةً ، بِهَا أَمْطَرَتْ فِي الْخَافِقَيْنِ سَمَاؤُهُ",
        latin: "Talaqqo minal ghoibil mujarrodi hikmatan, biha amthorot fil khofiqoini samauhu",
        translation: "Dia menerima hikmah langsung dari alam ghaib murni, yang dengannya langitnya mencurahkan hujan rahmat ke timur dan barat."
      },
      {
        arabic: "نَبِيٌّ حَبَاهُ اللهُ بِالْفَضْلِ وَالْعُلَا ، وَأَنْعَمَ فِي كُلِّ الْأَنَامِ عَطَاؤُهُ",
        latin: "Nabiyyun habahullahu bil fadhli wal 'ula, wa an'ama fî kullil anâmi 'atô-uhu",
        translation: "Seorang Nabi yang dianugerahi Allah dengan keutamaan dan derajat yang tinggi, dan pemberiannya menjadi kenikmatan bagi seluruh manusia."
      },
      {
        arabic: "فَيَا رَبِّ بِالْمُخْتَارِ اَقْبَلْ دُعَاءَنَا ، وَهَبْ لَنَا مَا نَرْتَجِيْهِ سَخَاؤُهُ",
        latin: "Fa yâ Robbi bil mukhtâri aqbal du'â-anâ, wa hab lanâ mâ nartajîhi sakhô-uhu",
        translation: "Maka wahai Tuhanku, demi Al-Mukhtar (Nabi pilihan) kabulkanlah doa kami, dan anugerahkanlah apa yang kami harapkan dari kedermawanan-Mu."
      }
    ]
  },
  {
    id: "kalamun-qodim",
    title: "Kalamun Qodim (Pujian Al-Qur'an)",
    category: "sholawat",
    isPopular: false,
    source: "https://pecintahabibana.wordpress.com/2012/12/07/kalamun-qodim/",
    background: "Qosidah 'Kalamun Qodim' berisi sanjungan keagungan ayat suci Al-Qur'an yang diturunkan kepada Nabi Muhammad SAW. Biasa dibaca sebelum memulai pengajian Al-Qur'an untuk memohon keberkahan ilmu dan ketenangan batin.",
    lyrics: [
      {
        arabic: "كَلَامٌ قَدِيْمٌ لَا يُمَلُّ سَمَاعُهُ ، تَنَزَّهَ عَنْ قَوْلٍ وَفِعْلٍ وَنِيَّةٍ",
        latin: "Kalâmun qodîmun lâ yumallu samâ'uhu, tanzahâ 'an qoulin wa fi'lin wa niyyatin",
        translation: "Kalam (Al-Qur'an) yang dahulu tiada bosan mendengarnya, yang suci dari ucapan, perbuatan, dan niat."
      },
      {
        arabic: "بِهِ أَشْتَفِيْ مِنْ كُلِّ دَاءٍ وَنُوْرُهُ ، دَلِيْلٌ لِقَلْبِيْ عِنْدَ جَهْلِيْ وَحَيْرَتِيْ",
        latin: "Bihi asytafî min kulli dâ-in wa nûruhu, dalîlun liqolbî 'inda jahlî wa hoirotî",
        translation: "Dengan Al-Qur'an itu aku memohon kesembuhan dari segala penyakit, dan cahayanya adalah petunjuk bagi hatiku di saat kebodohan dan kebingunganku."
      },
      {
        arabic: "فَيَا رَبِّ مَتِّعْنِيْ بِسِرِّ حُرُوْفِهِ ، وَنَوِّرْ بِهِ قَلْبِيْ وَسَمْعِيْ وَمُقْلَتِيْ",
        latin: "Fayâ robbi matti'nî bisirri hurûfihi, wa nawwir bihi qolbî wa sam'î wa muqlatî",
        translation: "Wahai Tuhanku, berilah aku kesenangan dengan rahasia huruf-hurufnya, dan sinarilah dengannya hatiku, pendengaranku, dan pandangan mataku."
      }
    ]
  },
  {
    id: "annabi-shollu-alaih",
    title: "Annabi Shollu 'Alaih",
    category: "sholawat",
    isPopular: false,
    source: "https://pecintahabibana.wordpress.com/2013/05/08/annabi-shollu-alaih/",
    background: "Sholawat 'Annabi Shollu 'Alaih' mengajak seluruh umat Muslim untuk selalu membasahi lidahnya dengan sholawat ke atas Rasulullah SAW karena sholawat tersebut mendatangkan keberkahan yang tak terhingga di dunia dan akhirat.",
    lyrics: [
      {
        arabic: "اَلنَّبِی صَلُّوْا عَلَيْه ، صَلَوَاتُ اللهِ عَلَيْه",
        latin: "An-nabî shollû 'alaih, sholawâtullâhi 'alaih",
        translation: "Wahai Nabi, bersholawatlah kepadanya, sholawat (rahmat) Allah semoga senantiasa tercurah kepadanya."
      },
      {
        arabic: "وَيَنَالُ الْبَرَكَات ، كُلُّ مَنْ صَلَّى عَلَيْه",
        latin: "Wa yanâlul barokât, kullu man shollâ 'alaih",
        translation: "Dan keberkahan akan diperoleh oleh setiap orang yang bersholawat kepadanya."
      },
      {
        arabic: "أَنْتَ يَا رَسُولَ الله ، كُنْ شَفِيعِي يَوْمَ الزُّحَام",
        latin: "Anta yâ Rosûlallâh, kun syafî'î yaumaz-zuhami",
        translation: "Engkaulah wahai Rasulullah, jadilah pemberi syafaatku di hari kiamat."
      },
      {
        arabic: "اَلْمَدِيْنَة فِيهَا الْخَيْرَات ، لِأَجْلِ الْمُصْطَفَى صَلُّوْا عَلَيْه",
        latin: "Al-madînah fîhâl khoirôt, li-ajlil Mushthofâ shollû 'alaih",
        translation: "Madinah dipenuhi dengan kebaikan-kebaikan, demi Al-Musthofa bersholawatlah kepadanya."
      }
    ]
  },
  {
    id: "qod-kafani",
    title: "Qod Kafani (Cukuplah Bagiku)",
    category: "qosidah",
    isPopular: false,
    source: "https://pecintahabibana.wordpress.com/2012/12/07/qod-kafani/",
    background: "Karya agung Imam Abdullah bin Alwi Al-Haddad. Teks ini merupakan munajat ketundukan dan kepasrahan total seorang hamba kepada ilmu Allah yang meliputi segala kebutuhannya. Hamba tersebut mengaku faqir dan hanya meminta pertolongan kepada Tuhannya.",
    lyrics: [
      {
        arabic: "قَدْ كَفَانِي عِلْمُ رَبِّي ، مِنْ سُؤَالِي وَاخْتِيَارِي",
        latin: "Qod kafânî 'ilmu robbî, min su-âlî wakhtiyârî",
        translation: "Sungguh telah cukup bagiku pengetahuan Tuhanku, dari permintaanku dan usahaku."
      },
      {
        arabic: "فَدُعَائِي وَابْتِهَالِي ، شَاهِدٌ لِي بِافْتِقَارِي",
        latin: "Fadu'â-î wabtihâlî, syâhidun lî biftiqôrî",
        translation: "Maka doa dan permohonanku adalah saksi bagiku atas kefakiranku (di hadapan-Mu)."
      },
      {
        arabic: "فَلِهَذَا السِّرِّ أَدْعُو ، فِي يَسَارِي وَعَسَارِي",
        latin: "Falihâdzâs-sirri ad'û, fî yasârî wa 'asârî",
        translation: "Maka demi rahasia ini aku berdoa, di waktu kemudahanku dan kesulitanku."
      },
      {
        arabic: "أَنَا عَبْدٌ صَارَ فَخْرِي ، ضِمْنَ فَقْرِي وَانْكِسَارِي",
        latin: "Ana 'abdun shôro fakhrî, dlimna faqrî wankisârî",
        translation: "Aku adalah hamba yang menjadi kebanggaanku terletak di dalam kefakiran dan kepasrahanku."
      }
    ]
  },
  {
    id: "sholawat-asyghil",
    title: "Sholawat Asyghil",
    category: "sholawat",
    isPopular: true,
    source: "https://pecintahabibana.wordpress.com/teks-qosidah/",
    background: "Sholawat Asyghil (atau sholawat Habib Ahmad bin Umar Al-Hinduan Ba 'Alawi) dibaca untuk memohon rahmat bagi Nabi Muhammad sekaligus memohon keselamatan diri dari kejahatan kaum yang zalim dengan menyibukkan sesama orang zalim.",
    lyrics: [
      {
        arabic: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ ، وَأَشْغِلِ الظَّالِمِينَ بِالظَّالِمِينَ",
        latin: "Allâhumma sholli 'alâ Sayyidinâ Muhammad, wa asy-ghiliz-zhôlimîna biz-zhôlimîn",
        translation: "Ya Allah, berikanlah rahmat kepada junjungan kami Nabi Muhammad, dan sibukkanlah orang-orang zalim dengan sesama orang zalim."
      },
      {
        arabic: "وَأَخْرِجْنَا مِنْ بَيْنِهِمْ سَالِمِينَ ، وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ",
        latin: "Wa akhrijnâ min bainihim sâlimîn, wa 'alâ âlihi wa sohbihi ajma'în",
        translation: "Dan keluarkanlah kami dari tengah-tengah mereka dengan selamat, serta berikanlah rahmat kepada keluarga dan sahabatnya sekalian."
      }
    ]
  },
  {
    id: "sholawat-nariyah",
    title: "Sholawat Nariyah",
    category: "sholawat",
    isPopular: true,
    source: "https://pecintahabibana.wordpress.com/teks-qosidah/",
    background: "Sholawat Nariyah (atau Sholawat Tafrijiyah) disusun oleh Syekh Ibrahim Al-Tazi. Dikenal memiliki keutamaan luar biasa untuk melapangkan dada, melepaskan ikatan kesulitan, dan melancarkan segala urusan bagi siapa saja yang istiqomah mengamalkannya.",
    lyrics: [
      {
        arabic: "اللَّهُمَّ صَلِّ صَلَاةً كَامِلَةً وَسَلِّمْ سَلَامًا تَامًّا عَلَى سَيِّدِنَا مُحَمَّدٍ الَّذِي تَنْحَلُّ بِهِ الْعُقَدُ",
        latin: "Allâhumma sholli sholâtan kâmilatan wa sallim salâman tâmman 'alâ sayyidinâ Muhammadinilladzî tanhallu bihil 'uqodu",
        translation: "Ya Allah, limpahkanlah sholawat yang sempurna dan salam yang utuh kepada junjungan kami Nabi Muhammad, yang dengan perantaraannya segala kesulitan dapat terpecahkan."
      },
      {
        arabic: "وَتَنْفَرِجُ بِهِ الْكُرَبُ وَتُقْضَى بِهِ الْحَوَائِجُ",
        latin: "Wa tanfariju bihil kurobu wa tuqdho bihil hawâ-iju",
        translation: "Dan segala kesedihan dapat dihilangkan, segala kebutuhan dapat terpenuhi."
      },
      {
        arabic: "وَتُنَالُ بِهِ الرَّغَائِبُ وَحُSْنُ الْخَوَاتِمِ وَيُسْتَسْقَى الْغَمَامُ بِوَجْهِهِ الْكَرِيمِ",
        latin: "Wa tunâlu bihir-roghô-ibu wa husnul khowâtimi wa yustasqol ghomâmu biwajhihil karîmi",
        translation: "Dan segala keinginan serta akhir hayat yang baik (husnul khotimah) dapat dicapai, dan awan mendung menurunkan hujan berkat wajahnya yang mulia."
      },
      {
        arabic: "وَعَلَى آلِهِ وَصَحْبِهِ فِي كُلِّ لَمْحَةٍ وَنَفَسٍ بِعَدَدِ كُلِّ مَعْلُومٍ لَكَ",
        latin: "Wa 'alâ âlihi wa sohbihi fî kulli lamhatin wa nafasin bi'adadi kulli ma'lûmin lak",
        translation: "Serta limpahkanlah pula kepada keluarga dan sahabatnya di setiap kedipan mata dan hembusan nafas, sebanyak jumlah semua yang Engkau ketahui."
      }
    ]
  },
  {
    id: "sholawat-jibril",
    title: "Sholawat Jibril",
    category: "sholawat",
    isPopular: true,
    source: "https://pecintahabibana.wordpress.com/teks-qosidah/",
    background: "Sholawat Jibril adalah sholawat yang paling singkat namun sarat khasiat. Konon diijazahkan oleh Malaikat Jibril kepada Nabi Adam AS. Amalan sholawat ini diyakini oleh kaum sholihin dapat mempermudah terbukanya pintu rezeki yang berkah.",
    lyrics: [
      {
        arabic: "صَلَّى اللهُ عَلَى مُحَمَّدٍ",
        latin: "Shollallâhu 'alâ Muhammad",
        translation: "Semoga Allah memberikan rahmat kepada Nabi Muhammad."
      },
      {
        arabic: "صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ",
        latin: "Shollallâhu 'alaihi wa sallam",
        translation: "Semoga Allah melimpahkan rahmat dan keselamatan kepadanya."
      }
    ]
  },
  {
    id: "tholaal-badru",
    title: "Thola'al Badru 'Alayna",
    category: "maulid",
    isPopular: true,
    source: "https://pecintahabibana.wordpress.com/2013/04/04/asyroqol-badru-alaina/",
    background: "Lagu penyambutan tertua dalam sejarah Islam yang dinyanyikan oleh penduduk Madinah (kaum Anshar) saat menyambut kedatangan Rasulullah SAW dan para sahabatnya ketika berhijrah dari Makkah.",
    lyrics: [
      {
        arabic: "طَلَعَ الْبَدْرُ عَلَيْنَا ، مِنْ ثَنِيَّاتِ الْوَدَاعِ",
        latin: "Thola'al badru 'alaynâ, min tsaniyyâtil wadâ'i",
        translation: "Telah terbit bulan purnama bagi kami, dari lembah Tsaniyyatul Wada'."
      },
      {
        arabic: "وَجَبَ الشُّكْرُ عَلَيْنَا ، مَا دَعَا لِلَّهِ دَاعِ",
        latin: "Wajabasy-syukru 'alaynâ, mâ da'â lillâhi dâ'i",
        translation: "Dan wajiblah rasa syukur atas kami, selama para penyeru menyeru kepada Allah."
      },
      {
        arabic: "أَيُّهَا الْمَبْعُوْثُ فِيْنَا ، جِئْتَ بِالْأَمْرِ الْمُطَاعِ",
        latin: "Ayyuhal mab'ûtsu fînâ, ji'ta bil amril muthô'i",
        translation: "Wahai yang diutus kepada kami, engkau datang dengan membawa perintah yang ditaati."
      },
      {
        arabic: "جِئْتَ شَرَّفْتَ الْمَدِيْنَة ، مَرْحَبًا يَا خَيْرَ دَاعِ",
        latin: "Ji'ta syarroftal madînah, marhaban yâ khoiro dâ'i",
        translation: "Engkau datang dan memuliakan kota Madinah, selamat datang wahai juru dakwah terbaik."
      }
    ]
  }
];

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
