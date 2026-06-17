import type { ChapterQuiz, QuizQuestion } from "./quizzes";

const q = (id: string, question: string, options: [string, string][], correctKey: string, explanation: string): QuizQuestion => ({
  id, question, options: options.map(([key, text]) => ({ key, text })), correctKey, explanation,
});

// ── Biologi Kelas X ─────────────────────────────────────

const bio01: ChapterQuiz = {
  chapterId: "bio-01",
  questions: [
    q("bio01-1", "Keanekaragaman hayati tingkat gen terdapat pada ...",
      [["A", "variasi warna bunga mawar"], ["B", "perbedaan kucing dan anjing"], ["C", "hutan dan padang rumput"], ["D", "ikan dan burung"], ["E", "jagung dan padi"]],
      "A", "Tingkat gen = variasi dalam satu spesies (warna bunga mawar berbeda)."),
    q("bio01-2", "Garis Wallace memisahkan fauna ...",
      [["A", "Asiatis dan peralihan"], ["B", "Australis dan peralihan"], ["C", "Asiatis dan Australis"], ["D", "darat dan air"], ["E", "tropis dan subtropis"]],
      "A", "Garis Wallace memisahkan fauna Asiatis (barat) dengan fauna peralihan (tengah)."),
    q("bio01-3", "Pelestarian ex-situ contohnya adalah ...",
      [["A", "kebun binatang"], ["B", "taman nasional"], ["C", "cagar alam"], ["D", "suaka margasatwa"], ["E", "hutan lindung"]],
      "A", "Ex-situ = pelestarian di luar habitat asli (kebun binatang, bank biji)."),
  ],
};

const bio02: ChapterQuiz = {
  chapterId: "bio-02",
  questions: [
    q("bio02-1", "Sistem klasifikasi lima kingdom meliputi Monera, Protista, Fungi, Plantae, dan ...",
      [["A", "Animalia"], ["B", "Virus"], ["C", "Archaea"], ["D", "Bacteria"], ["E", "Algae"]],
      "A", "Lima kingdom: Monera, Protista, Fungi, Plantae, Animalia."),
    q("bio02-2", "Tata nama binomial nomenklatur menggunakan ...",
      [["A", "nama genus + spesies"], ["B", "nama famili + genus"], ["C", "nama ordo + famili"], ["D", "nama kelas + ordo"], ["E", "nama kingdom + kelas"]],
      "A", "Binomial: Genus species (contoh: Homo sapiens)."),
    q("bio02-3", "Urutan takson dari tertinggi ke terendah adalah ...",
      [["A", "Kingdom-Phylum-Class-Order-Family-Genus-Species"], ["B", "Kingdom-Class-Phylum-Order-Family-Genus-Species"], ["C", "Species-Genus-Family-Order-Class-Phylum-Kingdom"], ["D", "Kingdom-Family-Order-Class-Phylum-Genus-Species"], ["E", "Kingdom-Order-Class-Phylum-Family-Genus-Species"]],
      "A", "Urutan: K-P-C-O-F-G-S."),
  ],
};

const bio03: ChapterQuiz = {
  chapterId: "bio-03",
  questions: [
    q("bio03-1", "Virus bukan termasuk sel karena ...",
      [["A", "tidak memiliki organel sel"], ["B", "memiliki DNA saja"], ["C", "berukuran besar"], ["D", "dapat berdiri sendiri"], ["E", "memiliki membran sel"]],
      "A", "Virus tidak memiliki struktur sel (tidak ada membran sel, sitoplasma, organel)."),
    q("bio03-2", "Reproduksi virus secara litik ditandai dengan ...",
      [["A", "sel inang pecah (lisis)"], ["B", "DNA virus bergabung dengan inang"], ["C", "sel inang tetap hidup"], ["D", "virus menjadi dorman"], ["E", "tidak menghasilkan virus baru"]],
      "A", "Siklus litik: virus memperbanyak diri → sel inang pecah (lisis) → virus baru keluar."),
    q("bio03-3", "HIV menyerang sel ...",
      [["A", "limfosit T (CD4)"], ["B", "sel darah merah"], ["C", "sel otot"], ["D", "sel saraf"], ["E", "sel tulang"]],
      "A", "HIV menyerang limfosit T CD4+, merusak sistem imun."),
  ],
};

const bio04: ChapterQuiz = {
  chapterId: "bio-04",
  questions: [
    q("bio04-1", "Bakteri Gram positif memiliki dinding sel yang ...",
      [["A", "tebal peptidoglikan"], ["B", "tipis peptidoglikan"], ["C", "tanpa dinding sel"], ["D", "berlapis lilin"], ["E", "terbuat dari selulosa"]],
      "A", "Gram positif: lapisan peptidoglikan tebal (berwarna ungu saat pewarnaan Gram)."),
    q("bio04-2", "Archaebacteria berbeda dari Eubacteria karena ...",
      [["A", "hidup di lingkungan ekstrem"], ["B", "memiliki inti sejati"], ["C", "berukuran besar"], ["D", "fotosintetik"], ["E", "multiseluler"]],
      "A", "Archaea hidup di lingkungan ekstrem (panas, asin, asam) dan memiliki perbedaan biokimia."),
    q("bio04-3", "Reproduksi aseksual bakteri terjadi melalui ...",
      [["A", "pembelahan biner"], ["B", "mitosis"], ["C", "meiosis"], ["D", "tunas"], ["E", "fragmentasi"]],
      "A", "Bakteri bereproduksi secara aseksual melalui pembelahan biner (binary fission)."),
  ],
};

const bio05: ChapterQuiz = {
  chapterId: "bio-05",
  questions: [
    q("bio05-1", "Protista yang bersifat autotrof contohnya adalah ...",
      [["A", "alga (ganggang)"], ["B", "Amoeba"], ["C", "Paramecium"], ["D", "Plasmodium"], ["E", "Trypanosoma"]],
      "A", "Alga (ganggang) memiliki klorofil dan berfotosintesis (autotrof)."),
    q("bio05-2", "Fungi memperoleh makanan secara ...",
      [["A", "heterotrof (absorpsi)"], ["B", "autotrof"], ["C", "fagositosis"], ["D", "fotosintesis"], ["E", "kemosintesis"]],
      "A", "Fungi = heterotrof: mengeluarkan enzim untuk menguraikan makanan, lalu menyerapnya."),
    q("bio05-3", "Jamur yang digunakan untuk membuat tempe adalah ...",
      [["A", "Rhizopus oryzae"], ["B", "Saccharomyces cerevisiae"], ["C", "Aspergillus oryzae"], ["D", "Penicillium"], ["E", "Neurospora crassa"]],
      "A", "Rhizopus oryzae (Rhizopus oligosporus) digunakan untuk membuat tempe."),
  ],
};

const bio06: ChapterQuiz = {
  chapterId: "bio-06",
  questions: [
    q("bio06-1", "Komponen biotik dalam ekosistem meliputi ...",
      [["A", "tumbuhan, hewan, mikroorganisme"], ["B", "cahaya, air, tanah"], ["C", "suhu dan kelembapan"], ["D", "mineral dan batuan"], ["E", "atmosfer"]],
      "A", "Biotik = makhluk hidup (produsen, konsumen, dekomposer). Abiotik = cahaya, air, tanah, dll."),
    q("bio06-2", "Dalam rantai makanan, organisme yang menguraikan materi organik disebut ...",
      [["A", "dekomposer"], ["B", "produsen"], ["C", "konsumen primer"], ["D", "konsumen sekunder"], ["E", "predator"]],
      "A", "Dekomposer (bakteri, jamur) menguraikan materi organik menjadi anorganik."),
    q("bio06-3", "Piramida energi selalu berbentuk ...",
      [["A", "tegak (mengecil ke atas)"], ["B", "terbalik"], ["C", "seimbang"], ["D", "berfluktuasi"], ["E", "datar"]],
      "A", "Energi selalu berkurang di setiap tingkatan trofik → piramida selalu tegak."),
  ],
};

// ── Biologi Kelas XI ─────────────────────────────────────

const bio07: ChapterQuiz = {
  chapterId: "bio-07",
  questions: [
    q("bio07-1", "Organel sel yang berfungsi sebagai pusat pengendali sel adalah ...",
      [["A", "nukleus"], ["B", "mitokondria"], ["C", "ribosom"], ["D", "retikulum endoplasma"], ["E", "lisosom"]],
      "A", "Nukleus = inti sel, mengandung DNA, mengendalikan aktivitas sel."),
    q("bio07-2", "Transpor aktif memerlukan ...",
      [["A", "energi (ATP)"], ["B", "gradien konsentrasi saja"], ["C", "tidak memerlukan energi"], ["D", "difusi"], ["E", "osmosis"]],
      "A", "Transpor aktif melawan gradien konsentrasi → memerlukan energi (ATP)."),
    q("bio07-3", "Sel tumbuhan memiliki ... yang tidak dimiliki sel hewan.",
      [["A", "dinding sel dan kloroplas"], ["B", "mitokondria"], ["C", "ribosom"], ["D", "membran sel"], ["E", "nukleus"]],
      "A", "Sel tumbuhan: dinding sel (selulosa), kloroplas, vakuola besar. Sel hewan tidak punya."),
  ],
};

const bio08: ChapterQuiz = {
  chapterId: "bio-08",
  questions: [
    q("bio08-1", "Jaringan meristem pada tumbuhan berfungsi untuk ...",
      [["A", "pembelahan dan pertumbuhan"], ["B", "fotosintesis"], ["C", "pengangkutan air"], ["D", "penyimpanan cadangan makanan"], ["E", "perlindungan"]],
      "A", "Meristem = jaringan muda yang aktif membelah → pertumbuhan primer dan sekunder."),
    q("bio08-2", "Xilem berfungsi mengangkut ...",
      [["A", "air dan mineral dari akar ke daun"], ["B", "hasil fotosintesis"], ["C", "oksigen"], ["D", "karbon dioksida"], ["E", "hormon"]],
      "A", "Xilem: mengangkut air dan mineral dari akar ke daun (ke atas)."),
    q("bio08-3", "Floem mengangkut ...",
      [["A", "hasil fotosintesis (glukosa) dari daun ke seluruh tubuh"], ["B", "air"], ["C", "mineral"], ["D", "udara"], ["E", "getah"]],
      "A", "Floem: transpor hasil fotosintesis dari daun ke seluruh tubuh tumbuhan."),
  ],
};

const bio09: ChapterQuiz = {
  chapterId: "bio-09",
  questions: [
    q("bio09-1", "Jaringan epitel yang melapisi saluran pencernaan adalah ...",
      [["A", "epitel selapis silindris"], ["B", "epitel berlapis pipih"], ["C", "epitel kubus"], ["D", "epitel transisional"], ["E", "epitel kelenjar"]],
      "A", "Saluran pencernaan dilapisi epitel selapis silindris (absorpsi nutrisi)."),
    q("bio09-2", "Jaringan ikat longgar berfungsi sebagai ...",
      [["A", "pengisi dan penghubung antarorgan"], ["B", "pelindung keras"], ["C", "kontraksi otot"], ["D", "penghantar impuls"], ["E", "penghasil hormon"]],
      "A", "Jaringan ikat longgar mengisi ruang antarorgan, menyokong, dan menghubungkan."),
    q("bio09-3", "Tiga jenis jaringan otot adalah ...",
      [["A", "lurik, polos, jantung"], ["B", "lurik, polos, tulang"], ["C", "polos, saraf, jantung"], ["D", "lurik, ikat, saraf"], ["E", "polos, epitel, jantung"]],
      "A", "Otot: lurik (rangka), polos (organ dalam), jantung (miokardium)."),
  ],
};

const bio10: ChapterQuiz = {
  chapterId: "bio-10",
  questions: [
    q("bio10-1", "Tulang yang menyusun rangka aksial meliputi ...",
      [["A", "tengkorak, tulang belakang, tulang rusuk"], ["B", "tulang lengan dan kaki"], ["C", "tulang panggul"], ["D", "tulang belikat"], ["E", "tulang selangka"]],
      "A", "Rangka aksial: tengkorak, kolumna vertebralis, tulang rusuk, tulang dada."),
    q("bio10-2", "Sendi yang memungkinkan gerakan ke segala arah adalah sendi ...",
      [["A", "peluru"], ["B", "engsel"], ["C", "putar"], ["D", "pelana"], ["E", "geser"]],
      "A", "Sendi peluru (ball and socket): gerakan ke segala arah (bahu, panggul)."),
    q("bio10-3", "Osteoporosis disebabkan oleh ...",
      [["A", "kekurangan kalsium dan penurunan hormon"], ["B", "infeksi bakteri"], ["C", "kelebihan vitamin D"], ["D", "kecelakaan"], ["E", "kelebihan kalsium"]],
      "A", "Osteoporosis: tulang keropos akibat kekurangan kalsium dan penurunan hormon (terutama pada lansia)."),
  ],
};

const bio11: ChapterQuiz = {
  chapterId: "bio-11",
  questions: [
    q("bio11-1", "Komponen utama darah yang berfungsi mengangkut oksigen adalah ...",
      [["A", "eritrosit (sel darah merah)"], ["B", "leukosit"], ["C", "trombosit"], ["D", "plasma darah"], ["E", "monosit"]],
      "A", "Eritrosit mengandung hemoglobin yang mengikat O₂."),
    q("bio11-2", "Peredaran darah besar (sistemik) mengalir dari ...",
      [["A", "jantung ke seluruh tubuh"], ["B", "jantung ke paru-paru"], ["C", "paru-paru ke jantung"], ["D", "seluruh tubuh ke paru-paru"], ["E", "tubuh ke tubuh"]],
      "A", "Peredaran besar: ventrikel kiri → aorta → seluruh tubuh → vena cava → atrium kanan."),
    q("bio11-3", "Golongan darah AB disebut resipien universal karena ...",
      [["A", "tidak memiliki antibodi anti-A dan anti-B"], ["B", "tidak memiliki antigen"], ["C", "memiliki semua antibodi"], ["D", "hanya memiliki antigen A"], ["E", "hanya memiliki antigen B"]],
      "A", "AB: tidak punya antibodi anti-A maupun anti-B → dapat menerima semua golongan darah."),
  ],
};

const bio12: ChapterQuiz = {
  chapterId: "bio-12",
  questions: [
    q("bio12-1", "Enzim amilase dalam mulut berfungsi mencerna ...",
      [["A", "karbohidrat (amilum)"], ["B", "protein"], ["C", "lemak"], ["D", "vitamin"], ["E", "mineral"]],
      "A", "Amilase memecah amilum (karbohidrat) menjadi maltosa."),
    q("bio12-2", "Penyerapan nutrisi terjadi terutama di ...",
      [["A", "usus halus (villi)"], ["B", "lambung"], ["C", "usus besar"], ["D", "kerongkongan"], ["E", "mulut"]],
      "A", "Villi di usus halus meningkatkan luas permukaan untuk penyerapan nutrisi."),
    q("bio12-3", "Lambung menghasilkan HCl yang berfungsi ...",
      [["A", "membunuh bakteri dan mengaktifkan pepsinogen"], ["B", "mencerna lemak"], ["C", "menyerap glukosa"], ["D", "menghasilkan empedu"], ["E", "menetralkan makanan"]],
      "A", "HCl: membunuh kuman, mengubah pepsinogen menjadi pepsin (pencernaan protein)."),
  ],
};

const bio13: ChapterQuiz = {
  chapterId: "bio-13",
  questions: [
    q("bio13-1", "Pertukaran gas O₂ dan CO₂ terjadi di ...",
      [["A", "alveolus"], ["B", "trakea"], ["C", "bronkus"], ["D", "laring"], ["E", "faring"]],
      "A", "Alveolus = tempat pertukaran gas (difusi O₂ ke darah, CO₂ keluar)."),
    q("bio13-2", "Otot utama pernapasan adalah ...",
      [["A", "diafragma"], ["B", "otot perut"], ["C", "otot lengan"], ["D", "otot jantung"], ["E", "otot leher"]],
      "A", "Diafragma = otot utama inspirasi. Kontraksi → rongga dada membesar → udara masuk."),
    q("bio13-3", "Volume udara tidal pada manusia dewasa ± ...",
      [["A", "500 mL"], ["B", "1500 mL"], ["C", "3000 mL"], ["D", "100 mL"], ["E", "5000 mL"]],
      "A", "Volume tidal (napas biasa) ≈ 500 mL."),
  ],
};

const bio14: ChapterQuiz = {
  chapterId: "bio-14",
  questions: [
    q("bio14-1", "Organ utama ekskresi pada manusia adalah ...",
      [["A", "ginjal"], ["B", "jantung"], ["C", "paru-paru"], ["D", "lambung"], ["E", "limpa"]],
      "A", "Ginjal menyaring darah dan menghasilkan urine (ekskresi zat sisa)."),
    q("bio14-2", "Unit fungsional ginjal disebut ...",
      [["A", "nefron"], ["B", "neuron"], ["C", "alveolus"], ["D", "villi"], ["E", "hepatosit"]],
      "A", "Nefron = unit fungsional ginjal (filtrasi, reabsorpsi, sekresi)."),
    q("bio14-3", "Kulit berfungsi sebagai organ ekskresi karena mengeluarkan ...",
      [["A", "keringat"], ["B", "hormon"], ["C", "enzim"], ["D", "antibodi"], ["E", "sel darah"]],
      "A", "Kulit mengeluarkan keringat (air, urea, garam) melalui kelenjar keringat."),
  ],
};

const bio15: ChapterQuiz = {
  chapterId: "bio-15",
  questions: [
    q("bio15-1", "Sistem saraf pusat terdiri dari ...",
      [["A", "otak dan sumsum tulang belakang"], ["B", "saraf tepi"], ["C", "saraf otonom"], ["D", "otak kecil saja"], ["E", "ganglion"]],
      "A", "SSP = otak + medula spinalis. SST = saraf-saraf tepi."),
    q("bio15-2", "Hormon insulin diproduksi oleh ...",
      [["A", "pankreas (pulau Langerhans)"], ["B", "kelenjar tiroid"], ["C", "kelenjar adrenal"], ["D", "hipofisis"], ["E", "hati"]],
      "A", "Insulin diproduksi sel beta pulau Langerhans di pankreas → menurunkan glukosa darah."),
    q("bio15-3", "Refleks adalah gerakan ...",
      [["A", "otomatis tanpa disadari"], ["B", "sadar dan disengaja"], ["C", "volunter"], ["D", "berdasarkan pemikiran"], ["E", "terlambat"]],
      "A", "Refleks: respons otomatis, cepat, tanpa disadari (contoh: menarik tangan dari api)."),
  ],
};

const bio16: ChapterQuiz = {
  chapterId: "bio-16",
  questions: [
    q("bio16-1", "Sel darah putih yang berperan dalam imunitas adaptif adalah ...",
      [["A", "limfosit"], ["B", "eritrosit"], ["C", "trombosit"], ["D", "neutrofil"], ["E", "basofil"]],
      "A", "Limfosit (sel T dan sel B) berperan dalam imunitas adaptif (spesifik)."),
    q("bio16-2", "Vaksinasi termasuk jenis imunitas ...",
      [["A", "adaptif buatan (aktif)"], ["B", "bawaan"], ["C", "pasif alami"], ["D", "nonspesifik"], ["E", "insting"]],
      "A", "Vaksinasi: memicu respons imun adaptif dengan antigen yang dilemahkan → imunitas aktif buatan."),
    q("bio16-3", "Antibodi diproduksi oleh sel ...",
      [["A", "plasma (turunan sel B)"], ["B", "sel T killer"], ["C", "makrofag"], ["D", "neutrofil"], ["E", "eritrosit"]],
      "A", "Sel B teraktivasi → berdiferensiasi menjadi sel plasma → menghasilkan antibodi."),
  ],
};

// ── Biologi Kelas XII ────────────────────────────────────

const bio17: ChapterQuiz = {
  chapterId: "bio-17",
  questions: [
    q("bio17-1", "Hormon yang berperan dalam perpanjangan batang tumbuhan adalah ...",
      [["A", "auksin"], ["B", "giberelin saja"], ["C", "sitokinin"], ["D", "asam absisat"], ["E", "etilen"]],
      "A", "Auksin: merangsang perpanjangan sel batang, fototropisme, geotropisme."),
    q("bio17-2", "Perkecambahan ditandai dengan ...",
      [["A", "munculnya radikula (akar embrio)"], ["B", "bunga mekar"], ["C", "daun gugur"], ["D", "buah matang"], ["E", "penyerbukan"]],
      "A", "Perkecambahan dimulai saat radikula menembus kulit biji."),
    q("bio17-3", "Faktor yang mempengaruhi pertumbuhan tumbuhan meliputi ...",
      [["A", "cahaya, suhu, air, hormon"], ["B", "gravitasi saja"], ["C", "angin saja"], ["D", "tanah saja"], ["E", "CO₂ saja"]],
      "A", "Pertumbuhan dipengaruhi cahaya, suhu, kelembapan, air, nutrisi, dan hormon."),
  ],
};

const bio18: ChapterQuiz = {
  chapterId: "bio-18",
  questions: [
    q("bio18-1", "Enzim mempercepat reaksi dengan cara ...",
      [["A", "menurunkan energi aktivasi"], ["B", "menaikkan energi aktivasi"], ["C", "menambah substrat"], ["D", "mengubah produk"], ["E", "menaikkan suhu"]],
      "A", "Enzim menurunkan energi aktivasi sehingga reaksi lebih cepat."),
    q("bio18-2", "Fotosintesis terjadi di ...",
      [["A", "kloroplas"], ["B", "mitokondria"], ["C", "ribosom"], ["D", "nukleus"], ["E", "lisosom"]],
      "A", "Fotosintesis terjadi di kloroplas (reaksi terang di tilakoid, reaksi gelap di stroma)."),
    q("bio18-3", "ATP dihasilkan paling banyak pada tahap ...",
      [["A", "rantai transpor elektron"], ["B", "glikolisis"], ["C", "siklus Krebs"], ["D", "fermentasi"], ["E", "dekarboksilasi"]],
      "A", "Rantai transpor elektron menghasilkan ~34 ATP (paling banyak)."),
  ],
};

const bio19: ChapterQuiz = {
  chapterId: "bio-19",
  questions: [
    q("bio19-1", "DNA tersusun dari unit-unit yang disebut ...",
      [["A", "nukleotida"], ["B", "asam amino"], ["C", "glukosa"], ["D", "lipid"], ["E", "monosakarida"]],
      "A", "DNA = polimer nukleotida (gula deoksiribosa + fosfat + basa nitrogen)."),
    q("bio19-2", "Proses pembuatan RNA dari DNA disebut ...",
      [["A", "transkripsi"], ["B", "translasi"], ["C", "replikasi"], ["D", "mutasi"], ["E", "fotosintesis"]],
      "A", "Transkripsi: DNA → mRNA (di nukleus). Translasi: mRNA → protein (di ribosom)."),
    q("bio19-3", "Kodon adalah triplet basa pada ...",
      [["A", "mRNA"], ["B", "DNA"], ["C", "tRNA"], ["D", "rRNA"], ["E", "protein"]],
      "A", "Kodon = 3 basa berurutan pada mRNA yang mengkode satu asam amino."),
  ],
};

const bio20: ChapterQuiz = {
  chapterId: "bio-20",
  questions: [
    q("bio20-1", "Pembelahan sel yang menghasilkan 2 sel anak identik disebut ...",
      [["A", "mitosis"], ["B", "meiosis"], ["C", "amitosis"], ["D", "sitokinesis"], ["E", "fertilisasi"]],
      "A", "Mitosis: 1 sel → 2 sel anak identik (diploid → diploid)."),
    q("bio20-2", "Meiosis terjadi pada ...",
      [["A", "sel kelamin (gamet)"], ["B", "sel tubuh"], ["C", "sel otot"], ["D", "sel saraf"], ["E", "sel darah merah"]],
      "A", "Meiosis terjadi pada sel kelamin → menghasilkan 4 sel haploid."),
    q("bio20-3", "Profase I meiosis ditandai dengan ...",
      [["A", "pemasangan kromosom homolog dan pindah silang"], ["B", "pemisahan kromatid"], ["C", "pembentukan membran inti"], ["D", "sitokinesis"], ["E", "replikasi DNA"]],
      "A", "Profase I: kromosom homolog berpasangan (sinapsis) dan terjadi pindah silang (crossing over)."),
  ],
};

const bio21: ChapterQuiz = {
  chapterId: "bio-21",
  questions: [
    q("bio21-1", "Menurut hukum Mendel I (segregasi), ...",
      [["A", "pasangan alel memisah saat pembentukan gamet"], ["B", "gen saling mempengaruhi"], ["C", "semua sifat dominan"], ["D", "gen terikat pada kromosom X"], ["E", "tidak ada pemisahan"]],
      "A", "Hukum Segregasi: alel memisah secara bebas saat pembentukan gamet (meiosis)."),
    q("bio21-2", "Persilangan monohibrid Aa × Aa menghasilkan perbandingan genotipe ...",
      [["A", "1 AA : 2 Aa : 1 aa"], ["B", "3 AA : 1 aa"], ["C", "1 AA : 1 Aa : 1 aa"], ["D", "2 AA : 2 aa"], ["E", "semua Aa"]],
      "A", "Aa × Aa → 1AA : 2Aa : 1aa (perbandingan genotipe 1:2:1)."),
    q("bio21-3", "Hukum Mendel II (asortasi bebas) berlaku untuk gen yang ...",
      [["A", "terletak pada kromosom berbeda"], ["B", "terpaut pada kromosom yang sama"], ["C", "berada di mitokondria"], ["D", "selalu dominan"], ["E", "selalu resesif"]],
      "A", "Asortasi bebas: gen pada kromosom berbeda memisah secara independen."),
  ],
};

const bio22: ChapterQuiz = {
  chapterId: "bio-22",
  questions: [
    q("bio22-1", "Penyakit hemofilia diwariskan melalui ...",
      [["A", "kromosom X (resesif)"], ["B", "kromosom Y"], ["C", "autosom dominan"], ["D", "autosom resesif"], ["E", "mitokondria"]],
      "A", "Hemofilia: terpaut kromosom X, resesif (lebih sering pada pria)."),
    q("bio22-2", "Mutasi gen dapat disebabkan oleh ...",
      [["A", "radiasi, bahan kimia, kesalahan replikasi"], ["B", "fotosintesis"], ["C", "respirasi"], ["D", "transpirasi"], ["E", "fermentasi"]],
      "A", "Mutagen: radiasi (UV, sinar X), bahan kimia (formalin, benzopirena), kesalahan replikasi DNA."),
    q("bio22-3", "Sindrom Down disebabkan oleh ...",
      [["A", "trisomi kromosom 21"], ["B", "monosomi X"], ["C", "kelebihan kromosom X"], ["D", "delesi kromosom 5"], ["E", "duplikasi kromosom 7"]],
      "A", "Sindrom Down = trisomi 21 (3 kromosom nomor 21, total 47 kromosom)."),
  ],
};

const bio23: ChapterQuiz = {
  chapterId: "bio-23",
  questions: [
    q("bio23-1", "Teori evolusi Darwin didasarkan pada konsep ...",
      [["A", "seleksi alam (survival of the fittest)"], ["B", "pewarisan sifat yang diperoleh"], ["C", "kreasi spontan"], ["D", "mutasi acak saja"], ["E", "migrasi"]],
      "A", "Darwin: seleksi alam — individu yang adaptif bertahan hidup dan mewariskan sifat."),
    q("bio23-2", "Homologi (contoh: tangan manusia, sayap kelelawar, sirip paus) menunjukkan ...",
      [["A", "nenek moyang yang sama"], ["B", "fungsi yang sama"], ["C", "tidak ada hubungan"], ["D", "konvergensi evolusi"], ["E", "evolusi terpisah"]],
      "A", "Homologi: struktur berbeda fungsi tetapi berasal dari nenek moyang yang sama."),
    q("bio23-3", "Bukti evolusi dari fosil menunjukkan ...",
      [["A", "perubahan spesies dari waktu ke waktu"], ["B", "spesies tidak berubah"], ["C", "semua spesies muncul bersamaan"], ["D", "fosil tidak relevan"], ["E", "evolusi mundur"]],
      "A", "Fosil menunjukkan perubahan bertahap spesies selama jutaan tahun."),
  ],
};

const bio24: ChapterQuiz = {
  chapterId: "bio-24",
  questions: [
    q("bio24-1", "Bioteknologi konvensional contohnya adalah ...",
      [["A", "pembuatan tempe dan yogurt"], ["B", "kloning gen"], ["C", "rekayasa genetika"], ["D", "PCR"], ["E", "terapi gen"]],
      "A", "Bioteknologi konvensional: fermentasi tradisional (tempe, yogurt, kecap, roti)."),
    q("bio24-2", "Prinsip kultur jaringan tumbuhan adalah ...",
      [["A", "totipotensi (setiap sel dapat menjadi tumbuhan utuh)"], ["B", "fotosintesis"], ["C", "respirasi anaerob"], ["D", "fermentasi"], ["E", "mutasi acak"]],
      "A", "Totipotensi: setiap sel tumbuhan memiliki potensi menjadi tumbuhan utuh dalam media yang tepat."),
    q("bio24-3", "Organisme transgenik (GMO) adalah organisme yang ...",
      [["A", "telah disisipkan gen dari spesies lain"], ["B", "hasil perkawinan silang"], ["C", "hasil seleksi alam"], ["D", "tidak bermutasi"], ["E", "berasal dari kloning"]],
      "A", "Transgenik: organisme yang mengandung gen asing dari spesies lain (rekayasa genetika)."),
  ],
};

export const biologiQuizzes: ChapterQuiz[] = [
  bio01, bio02, bio03, bio04, bio05, bio06, bio07, bio08, bio09, bio10,
  bio11, bio12, bio13, bio14, bio15, bio16, bio17, bio18, bio19, bio20,
  bio21, bio22, bio23, bio24,
];
