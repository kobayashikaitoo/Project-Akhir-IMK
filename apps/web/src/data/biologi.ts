import type { Chapter } from "./types";
export type { Chapter } from "./types";

// ── Kelas X (Grade 10) ─────────────────────────────────

const ch01: Chapter = {
  id: "bio-01", title: "Keanekaragaman Hayati", grade: 10, order: 1,
  description: "Tingkat gen, spesies, ekosistem; persebaran fauna Indonesia; pelestarian.",
  content: `
<h2>Tingkat Keanekaragaman Hayati</h2>
<ul>
<li><strong>Gen</strong>: variasi dalam satu spesies (warna bunga mawar: merah, putih, kuning)</li>
<li><strong>Spesies</strong>: perbedaan antarspesies (harimau, singa, cheetah)</li>
<li><strong>Ekosistem</strong>: perbedaan komunitas dan lingkungan (hutan hujan, padang rumput, terumbu karang)</li>
</ul>

<h2>Persebaran Fauna Indonesia</h2>
<ul>
<li><strong>Wallace</strong> (barat): fauna Asiatis — gajah, harimau, badak (Sumatera, Jawa, Kalimantan)</li>
<li><strong>Weber</strong> (tengah): fauna peralihan — komodo, anoa, babi rusa (Sulawesi, Nusa Tenggara)</li>
<li><strong>Lydekker</strong> (timur): fauna Australis — kanguru pohon, cendrawasih (Papua)</li>
</ul>

<h2>Ancaman dan Pelestarian</h2>
<ul>
<li><strong>In-situ</strong>: pelestarian di habitat asli (taman nasional, cagar alam)</li>
<li><strong>Ex-situ</strong>: pelestarian di luar habitat (kebun binatang, bank biji)</li>
</ul>`,
};

const ch02: Chapter = {
  id: "bio-02", title: "Klasifikasi Makhluk Hidup", grade: 10, order: 2,
  description: "Binomial nomenklatur, kunci determinasi, sistem 5 kingdom.",
  content: `
<h2>Sistem Klasifikasi</h2>
<p>Taksonomi: ilmu pengelompokan makhluk hidup berdasarkan persamaan ciri.</p>
<p><strong>Takson</strong> (dari tertinggi): Kingdom → Filum/Divisi → Kelas → Ordo → Famili → Genus → Spesies</p>

<h2>Binomial Nomenklatur</h2>
<p>Sistem penamaan dua kata oleh Carolus Linnaeus: <em>Genus species</em>.</p>
<p>Contoh: <em>Homo sapiens</em> (manusia), <em>Oryza sativa</em> (padi).</p>

<h2>Sistem 5 Kingdom (Whittaker)</h2>
<ol>
<li><strong>Monera</strong>: prokariotik (bakteri, cyanobacteria)</li>
<li><strong>Protista</strong>: eukariotik uniseluler/sederhana (amoeba, paramecium)</li>
<li><strong>Fungi</strong>: eukariotik heterotrof, dinding sel kitin (jamur)</li>
<li><strong>Plantae</strong>: eukariotik autotrof fotosintetik (tumbuhan)</li>
<li><strong>Animalia</strong>: eukariotik heterotrof multiseluler (hewan)</li>
</ol>

<h2>Kunci Determinasi</h2>
<p>Alat identifikasi menggunakan pasangan pernyataan berlawanan (dikotom). Dimulai dari ciri umum, semakin spesifik.</p>`,
};

const ch03: Chapter = {
  id: "bio-03", title: "Virus", grade: 10, order: 3,
  description: "Ciri virus, struktur, replikasi (litik & lisogenik), peran bagi manusia.",
  content: `
<h2>Ciri Virus</h2>
<ul>
<li>Aseluler (bukan sel), berukuran sangat kecil (20–300 nm)</li>
<li>Hanya memiliki 1 jenis asam nukleat: DNA atau RNA</li>
<li>Tidak memiliki organel, tidak bisa bereproduksi sendiri</li>
<li>Bersifat parasit obligat intraseluler</li>
</ul>

<h2>Struktur Virus</h2>
<p><strong>Kepala</strong>: mengandung asam nukleat (DNA/RNA), dilindungi kapsid (protein). Beberapa virus memiliki selubung lipid (envelope).</p>
<p><strong>Ekor</strong> (pada bakteriofag): serabut ekor untuk menempel pada sel inang.</p>

<h2>Replikasi Virus</h2>
<h3>Siklus Litik</h3>
<ol><li>Adsorpsi (menempel) → <li>Injeksi (memasukkan DNA) → <li>Sintesis → <li>Perakitan → <li>Lisis (pecahnya sel inang)</li></ol>

<h3>Siklus Lisogenik</h3>
<p>DNA virus menyisip ke DNA inang (profag) dan ikut bereplikasi bersama sel. Dapat berubah menjadi litik jika terpicu.</p>

<h2>Contoh Virus</h2>
<p>HIV (AIDS), Influenza, SARS-CoV-2, Dengue (DBD), HPV, Ebola. Vaksin: virus yang dilemahkan/dimatikan untuk memicu imun.</p>`,
};

const ch04: Chapter = {
  id: "bio-04", title: "Bakteri & Archaebacteria", grade: 10, order: 4,
  description: "Struktur sel bakteri, reproduksi, peran bagi manusia.",
  content: `
<h2>Struktur Bakteri</h2>
<p>Prokariotik (tidak memiliki membran inti). Komponen: dinding sel (peptidoglikan), membran sel, sitoplasma, ribosom, DNA sirkuler (nukleoid), plasmid, flagel, pili, kapsul.</p>

<h2>Penggolongan Bakteri</h2>
<ul>
<li><strong>Bentuk</strong>: kokus (bulat), basil (batang), spirillum (spiral)</li>
<li><strong>Pewarnaan Gram</strong>: Gram positif (dinding tebal, ungu), Gram negatif (dinding tipis, merah)</li>
<li><strong>Oksigen</strong>: aerob, anaerob, fakultatif</li>
</ul>

<h2>Reproduksi</h2>
<ul>
<li><strong>Aseksual</strong>: pembelahan biner (1 sel → 2 sel identik)</li>
<li><strong>Paraseksual</strong>: konjugasi (transfer plasmid), transduksi (via bakteriofag), transformasi (ambil DNA dari lingkungan)</li>
</ul>

<h2>Archaebacteria</h2>
<p>Prokariotik tanpa peptidoglikan. Hidup di lingkungan ekstrem: metanogen (rawa), halofil (air asin), termofil (sumber panas).</p>

<h2>Peran Bakteri</h2>
<ul>
<li><strong>Menguntungkan</strong>: Lactobacillus (yogurt), Rhizobium (fiksasi N₂), E. coli (vitamin K)</li>
<li><strong>Merugikan</strong>: Mycobacterium tuberculosis (TBC), Salmonella (keracunan makanan)</li>
</ul>`,
};

const ch05: Chapter = {
  id: "bio-05", title: "Protista dan Fungi", grade: 10, order: 5,
  description: "Protista mirip hewan/tumbuhan/jamur, struktur jamur, mikoriza.",
  content: `
<h2>Protista</h2>
<p>Eukariotik, sebagian besar uniseluler. Tiga kelompok:</p>
<ul>
<li><strong>Protozoa</strong> (mirip hewan): bergerak dengan pseudopodia (Amoeba), silia (Paramecium), flagela (Euglena)</li>
<li><strong>Alga</strong> (mirip tumbuhan): fotosintetik, menghasilkan O₂. Chlorophyta (alga hijau), Rhodophyta (merah), Phaeophyta (coklat)</li>
<li><strong>Protista mirip jamur</strong>: Oomycota (jamur air), Myxomycota (jamur lendir)</li>
</ul>

<h2>Fungi (Jamur)</h2>
<p>Eukariotik, heterotrof, dinding sel dari <strong>kitin</strong>. Tubuh terdiri dari benang <strong>hifa</strong> yang membentuk <strong>miselium</strong>.</p>

<h2>Klasifikasi Fungi</h2>
<ul>
<li><strong>Zygomycota</strong>: reproduksi dengan zigospora (jamur roti, Rhizopus)</li>
<li><strong>Ascomycota</strong>: askospora dalam askus (ragi, Penicillium)</li>
<li><strong>Basidiomycota</strong>: basidiospora pada basidium (jamur merang, jamur kuping)</li>
<li><strong>Deuteromycota</strong>: fungi imperfecti (belum diketahui reproduksi seksual)</li>
</ul>

<h2>Simbiosis Mikoriza</h2>
<p>Jamur bersimbiosis dengan akar tumbuhan: jamur mendapat gula, tumbuhan mendapat air dan mineral lebih efisien.</p>`,
};

const ch06: Chapter = {
  id: "bio-06", title: "Ekologi & Lingkungan", grade: 10, order: 6,
  description: "Komponen ekosistem, rantai makanan, daur biogeokimia, pencemaran.",
  content: `
<h2>Komponen Ekosistem</h2>
<ul>
<li><strong>Biotik</strong>: produsen, konsumen (I, II, III), dekomposer</li>
<li><strong>Abiotik</strong>: cahaya, suhu, air, tanah, udara</li>
</ul>

<h2>Rantai dan Jaring Makanan</h2>
<p>Rantai makanan: alur perpindahan energi dari satu organisme ke organisme lain.</p>
<p><strong>Produsen → Konsumen I → Konsumen II → Konsumen III → Dekomposer</strong></p>
<p>Jaring makanan: kumpulan rantai makanan yang saling berhubungan.</p>

<h2>Piramida Ekologi</h2>
<p>Piramida jumlah, biomassa, dan energi. Energi berkurang ±90% setiap tingkat trofik (hanya 10% yang diteruskan).</p>

<h2>Daur Biogeokimia</h2>
<ul>
<li><strong>Daur karbon</strong>: CO₂ → fotosintesis → senyawa organik → respirasi/pembusukan → CO₂</li>
<li><strong>Daur nitrogen</strong>: N₂ → fiksasi (bakteri) → NH₃ → nitrifikasi → NO₃⁻ → denitrifikasi → N₂</li>
<li><strong>Daur air</strong>: evaporasi → kondensasi → presipitasi → infiltrasi → transpirasi</li>
</ul>

<h2>Pencemaran</h2>
<p>Masuknya zat/energi ke lingkungan yang merugikan. Jenis: pencemaran air (limbah, eutrofikasi), udara (CO, SO₂), tanah (plastik, pestisida).</p>`,
};

// ── Kelas XI (Grade 11) ─────────────────────────────────

const ch07: Chapter = {
  id: "bio-07", title: "Struktur Sel & Transpor", grade: 11, order: 7,
  description: "Organel sel, sel hewan vs tumbuhan, transpor pasif & aktif.",
  content: `
<h2>Organel Sel</h2>
<ul>
<li><strong>Nukleus</strong>: pusat kendali, mengandung DNA</li>
<li><strong>Membran sel</strong>: fosfolipid bilayer, selektif permeabel</li>
<li><strong>Ribosom</strong>: sintesis protein</li>
<li><strong>Retikulum Endoplasma</strong>: RE kasar (protein), RE halus (lipid)</li>
<li><strong>Badan Golgi</strong>: modifikasi, sortasi, pengemasan protein</li>
<li><strong>Mitokondria</strong>: respirasi seluler → ATP</li>
<li><strong>Lisosom</strong>: pencernaan intraseluler</li>
<li><strong>Dinding sel</strong> (tumbuhan): selulosa, memberi bentuk kaku</li>
<li><strong>Kloroplas</strong> (tumbuhan): fotosintesis</li>
<li><strong>Vakuola</strong>: besar pada tumbuhan (cadangan), kecil pada hewan</li>
</ul>

<h2>Sel Hewan vs Tumbuhan</h2>
<table border="1" style="width:100%">
<tr><th>Ciri</th><th>Hewan</th><th>Tumbuhan</th></tr>
<tr><td>Dinding sel</td><td>Tidak ada</td><td>Ada (selulosa)</td></tr>
<tr><td>Kloroplas</td><td>Tidak ada</td><td>Ada</td></tr>
<tr><td>Vakuola</td><td>Kecil</td><td>Besar (sentral)</td></tr>
<tr><td>Sentriol</td><td>Ada</td><td>Tidak ada</td></tr>
</table>

<h2>Transpor Membran</h2>
<ul>
<li><strong>Pasif</strong>: difusi (zat tinggi→rendah), osmosis (air dari hipotonik→hipertonik)</li>
<li><strong>Aktif</strong>: membutuhkan ATP (pompa Na⁺/K⁺), endositosis, eksositosis</li>
</ul>`,
};

const ch08: Chapter = {
  id: "bio-08", title: "Jaringan Tumbuhan", grade: 11, order: 8,
  description: "Jaringan meristem, epidermis, parenkim, kolenkim, sklerenkim, xilem, floem.",
  content: `
<h2>Jaringan Meristem</h2>
<p>Jaringan yang sel-selnya aktif membelah. Meristem primer (ujung akar/batang → pertumbuhan memanjang), meristem sekunder (kambium → pertumbuhan melebar).</p>

<h2>Jaringan Dewasa</h2>
<ul>
<li><strong>Epidermis</strong>: lapisan pelindung terluar, dilapisi kutikula</li>
<li><strong>Parenkim</strong>: jaringan dasar, mengisi sebagian besar tubuh tumbuhan, tempat fotosintesis (mesofil) dan penyimpanan</li>
<li><strong>Kolenkim</strong>: penguat pada organ muda, dinding sel tebal tidak merata</li>
<li><strong>Sklerenkim</strong>: penguat pada organ dewasa, dinding tebal berlignin (serat & sklereid)</li>
</ul>

<h2>Jaringan Pengangkut</h2>
<ul>
<li><strong>Xilem</strong>: mengangkut air dan mineral dari akar ke daun (ke atas). Trakea dan trakeid (sel mati).</li>
<li><strong>Floem</strong>: mengangkut hasil fotosintesis dari daun ke seluruh tubuh (ke segala arah). Sel tapis (sel hidup).</li>
</ul>

<h2>Organ Tumbuhan</h2>
<p>Akar (menyerap air, menambatkan), batang (penopang, pengangkut), daun (fotosintesis), bunga (reproduksi).</p>`,
};

const ch09: Chapter = {
  id: "bio-09", title: "Jaringan Hewan", grade: 11, order: 9,
  description: "Jaringan epitel, ikat, otot, saraf.",
  content: `
<h2>Jaringan Epitel</h2>
<p>Menutupi permukaan tubuh dan melapisi rongga. Jenis berdasarkan bentuk: pipih, kubus, silindris. Berdasarkan lapis: sederhana (1 lapis), berlapis.</p>
<p>Fungsi: pelindung, sekresi (kelenjar), absorpsi (usus), filtrasi (ginjal).</p>

<h2>Jaringan Ikat</h2>
<ul>
<li><strong>Ikat longgar</strong>: mengisi ruang antar organ</li>
<li><strong>Ikat padat</strong>: tendon (otot-tulang), ligamen (tulang-tulang)</li>
<li><strong>Tulang rawan</strong>: hialin (sendi), elastis (telinga), fibrosa (diskus intervertebralis)</li>
<li><strong>Tulang keras</strong>: osteosit dalam matriks kalsium fosfat</li>
<li><strong>Darah</strong>: eritrosit, leukosit, trombosit dalam plasma</li>
<li><strong>Lemak</strong>: cadangan energi, isolasi panas, bantalan</li>
</ul>

<h2>Jaringan Otot</h2>
<ul>
<li><strong>Polos</strong>: involunter, organ dalam (lambung, pembuluh darah)</li>
<li><strong>Lurik</strong>: voluntar, melekat pada tulang (gerak sadar)</li>
<li><strong>Jantung</strong>: involunter, bercabang, hanya di jantung</li>
</ul>

<h2>Jaringan Saraf</h2>
<p>Terdiri dari <strong>neuron</strong> (sel saraf): dendrit (menerima impuls), badan sel, akson (mengirimkan impuls). Sel glia: pendukung neuron.</p>`,
};

const ch10: Chapter = {
  id: "bio-10", title: "Sistem Gerak Manusia", grade: 11, order: 10,
  description: "Rangka aksial/apendikular, sendi, mekanisme kerja otot.",
  content: `
<h2>Rangka</h2>
<ul>
<li><strong>Aksial</strong>: tulang tengkorak, tulang belakang, tulang rusuk, tulang dada</li>
<li><strong>Apendikular</strong>: tulang lengan, kaki, gelang bahu, gelang panggul</li>
</ul>

<h2>Sendi</h2>
<ul>
<li><strong>Peluru</strong>: gerakan bebas ke segala arah (bahu, panggul)</li>
<li><strong>Engsel</strong>: satu arah (siku, lutut)</li>
<li><strong>Putar</strong>: rotasi (atlas-axis di leher)</li>
<li><strong>Pelana</strong>: dua arah (ibu jari)</li>
</ul>

<h2>Otot</h2>
<p>Otot bekerja secara <strong>antagonis</strong>: satu berkontraksi, lawannya relaksasi.</p>
<ul>
<li><strong>Fleksi-Ekstensi</strong>: menekuk-meluruskan</li>
<li><strong>Abduksi-Adduksi</strong>: menjauhi-mendekati sumbu tubuh</li>
</ul>

<h2>Mekanisme Kontraksi Otot</h2>
<p>Teori <strong>filamen geser</strong>: saat otot berkontraksi, filamen aktin meluncur di atas miosin → sarkomer memendek → otot memendek. Membutuhkan ATP dan ion Ca²⁺.</p>`,
};

const ch11: Chapter = {
  id: "bio-11", title: "Sistem Sirkulasi Darah", grade: 11, order: 11,
  description: "Komponen darah, jantung, pembuluh darah, golongan darah.",
  content: `
<h2>Komponen Darah</h2>
<ul>
<li><strong>Plasma</strong> (55%): air, protein, nutrisi, hormon</li>
<li><strong>Eritrosit</strong>: sel darah merah, mengandung hemoglobin (mengikat O₂)</li>
<li><strong>Leukosit</strong>: sel darah putih, pertahanan tubuh (neutrofil, limfosit, monosit, eosinofil, basofil)</li>
<li><strong>Trombosit</strong>: keping darah, pembekuan darah</li>
</ul>

<h2>Pembekuan Darah</h2>
<p>Trombosit pecah → trombokinase → protrombin → trombin → fibrinogen → fibrin (jaring bekuan).</p>

<h2>Jantung</h2>
<p>4 ruang: serambi kanan/kiri (atrium) dan bilik kanan/kiri (ventrikel). Katup mencegah aliran balik.</p>
<p><strong>Peredaran darah kecil</strong>: jantung → paru-paru → jantung.<br/><strong>Peredaran darah besar</strong>: jantung → seluruh tubuh → jantung.</p>

<h2>Pembuluh Darah</h2>
<ul>
<li><strong>Arteri</strong>: membawa darah dari jantung, dinding tebal, tekanan tinggi</li>
<li><strong>Vena</strong>: membawa darah ke jantung, dinding tipis, ada katup</li>
<li><strong>Kapiler</strong>: tempat pertukaran zat (dinding sangat tipis)</li>
</ul>

<h2>Golongan Darah (ABO)</h2>
<p>A, B, AB (resipien universal), O (donor universal). Faktor Rh: Rh⁺ dan Rh⁻.</p>`,
};

const ch12: Chapter = {
  id: "bio-12", title: "Sistem Pencernaan", grade: 11, order: 12,
  description: "Zat makanan, organ pencernaan, enzim pencernaan.",
  content: `
<h2>Zat Makanan</h2>
<ul>
<li><strong>Karbohidrat</strong>: sumber energi utama (4 kkal/g). Pati, gula</li>
<li><strong>Lemak</strong>: cadangan energi (9 kkal/g), pelarut vitamin ADEK</li>
<li><strong>Protein</strong>: pembangun dan perbaikan jaringan (4 kkal/g)</li>
<li><strong>Vitamin & Mineral</strong>: regulasi metabolisme</li>
</ul>

<h2>Organ Pencernaan</h2>
<ol>
<li><strong>Mulut</strong>: pencernaan mekanik (gigi) dan kimiawi (amilase/ptialin → memecah pati)</li>
<li><strong>Kerongkongan</strong>: gerak peristaltik mendorong makanan</li>
<li><strong>Lambung</strong>: HCl (membunuh kuman, mengaktifkan pepsin), pepsin (protein → pepton), renin</li>
<li><strong>Usus halus</strong>: duodenum (empedu + enzim pankreas), jejunum & ileum (penyerapan). Villi memperluas permukaan.</li>
<li><strong>Usus besar</strong>: penyerapan air, pembentukan feses oleh bakteri E. coli</li>
<li><strong>Rektum & Anus</strong>: penyimpanan dan pengeluaran feses</li>
</ol>

<h2>Enzim Pencernaan</h2>
<table border="1" style="width:100%">
<tr><th>Enzim</th><th>Asal</th><th>Fungsi</th></tr>
<tr><td>Amilase</td><td>Mulut</td><td>Pati → maltosa</td></tr>
<tr><td>Pepsin</td><td>Lambung</td><td>Protein → pepton</td></tr>
<tr><td>Tripsin</td><td>Pankreas</td><td>Protein → asam amino</td></tr>
<tr><td>Lipase</td><td>Pankreas</td><td>Lemak → asam lemak + gliserol</td></tr>
</table>`,
};

const ch13: Chapter = {
  id: "bio-13", title: "Sistem Respirasi", grade: 11, order: 13,
  description: "Struktur pernapasan, mekanisme pernapasan, kapasitas paru-paru.",
  content: `
<h2>Struktur Sistem Pernapasan</h2>
<ol>
<li><strong>Hidung</strong>: menyaring, menghangatkan, melembabkan udara</li>
<li><strong>Faring</strong>: persimpangan saluran napas dan makanan</li>
<li><strong>Laring</strong>: pita suara, epiglotis menutup saat menelan</li>
<li><strong>Trakea</strong>: pipa berkartilago C, bersilia</li>
<li><strong>Bronkus</strong>: cabang ke paru kanan dan kiri</li>
<li><strong>Bronkiolus</strong>: cabang lebih kecil</li>
<li><strong>Alveolus</strong>: tempat pertukaran O₂ dan CO₂ (dinding sangat tipis)</li>
</ol>

<h2>Mekanisme Pernapasan</h2>
<h3>Pernapasan Dada</h3>
<p>Otot antartulang rusuk kontraksi → rusuk terangkat → rongga dada membesar → tekanan turun → udara masuk.</p>
<h3>Pernapasan Perut</h3>
<p>Diafragma kontraksi (mendatar) → rongga dada membesar → udara masuk.</p>

<h2>Pertukaran Gas</h2>
<p>Di alveolus: O₂ berdifusi ke darah, CO₂ berdifusi dari darah ke alveolus. O₂ diangkut oleh hemoglobin (HbO₂).</p>

<h2>Kapasitas Paru-paru</h2>
<ul>
<li>Volume tidal: ±500 mL (napas biasa)</li>
<li>Volume komplementer: ±1500 mL (tarik napas dalam)</li>
<li>Volume suplementer: ±1500 mL (hembuskan kuat)</li>
<li>Volume residu: ±1000 mL (sisa setelah hembus maksimal)</li>
<li><strong>Kapasitas vital</strong>: 500 + 1500 + 1500 = <strong>3500 mL</strong></li>
</ul>`,
};

const ch14: Chapter = {
  id: "bio-14", title: "Sistem Ekskresi", grade: 11, order: 14,
  description: "Ginjal (nefron), hati, kulit, paru-paru.",
  content: `
<h2>Ginjal</h2>
<p>Fungsi: menyaring darah, membuang zat sisa (urea), mengatur keseimbangan air dan elektrolit.</p>
<h3>Struktur Nefron</h3>
<ol>
<li><strong>Filtrasi</strong>: di glomerulus → menghasilkan urine primer (air, glukosa, garam, urea)</li>
<li><strong>Reabsorpsi</strong>: di tubulus proksimal → menyerap kembali glukosa, garam, air → urine sekunder</li>
<li><strong>Augmentasi</strong>: di tubulus distal → sekresi zat sisa tambahan → urine akhir</li>
</ol>
<p>Urine mengalir: nefron → pelvis ginjal → ureter → kandung kemih → uretra.</p>

<h2>Hati</h2>
<p>Menghasilkan <strong>empedu</strong> (pemecahan hemoglobin dari sel darah merah tua). Zat warna empedu (bilirubin) memberi warna feses.</p>

<h2>Kulit</h2>
<p>Mengeluarkan <strong>keringat</strong> (air + garam) melalui kelenjar keringat. Fungsi: pengeluaran, pengaturan suhu.</p>

<h2>Paru-paru</h2>
<p>Mengeluarkan <strong>CO₂</strong> dan uap air sebagai hasil respirasi sel.</p>`,
};

const ch15: Chapter = {
  id: "bio-15", title: "Sistem Regulasi", grade: 11, order: 15,
  description: "Sel saraf, sinapsis, sistem saraf pusat/tepi, organ indra, hormon.",
  content: `
<h2>Sel Saraf (Neuron)</h2>
<p><strong>Dendrit</strong> (menerima impuls) → <strong>Badan sel</strong> → <strong>Akson</strong> (mengirimkan impuls). Akson dilapisi selubung mielin (mempercepat).</p>

<h2>Sinapsis</h2>
<p>Celah antara dua neuron. Impuls diteruskan oleh <strong>neurotransmitter</strong> (asetilkolin, dopamin, serotonin).</p>

<h2>Sistem Saraf</h2>
<ul>
<li><strong>Pusat</strong>: otak (berpikir, koordinasi), sumsum tulang belakang (refleks, penghubung)</li>
<li><strong>Tepi</strong>: 12 pasang saraf otak (kranial), 31 pasang saraf sumsum tulang belakang</li>
<li><strong>Otonom</strong>: simpatik (fight/flight), parasimpatik (rest/digest)</li>
</ul>

<h2>Organ Indra</h2>
<ul>
<li><strong>Mata</strong>: fotoreseptor (sel batang & kerucut di retina)</li>
<li><strong>Telinga</strong>: mekanoreseptor (koklea untuk pendengaran, saluran setengah lingkaran untuk keseimbangan)</li>
<li><strong>Kulit</strong>: mekanoreseptor (sentuhan, tekanan), termoreseptor (suhu), nosiseptor (nyeri)</li>
</ul>

<h2>Sistem Endokrin (Hormon)</h2>
<p>Kelenjar: hipofisis (master gland), tiroid (metabolisme), pankreas (insulin/glukagon), adrenal (adrenalin), gonad (hormon seks).</p>`,
};

const ch16: Chapter = {
  id: "bio-16", title: "Sistem Imunitas", grade: 11, order: 16,
  description: "Imunitas non-spesifik & spesifik, antigen, antibodi, imunisasi.",
  content: `
<h2>Imunitas Non-Spesifik (Bawaan)</h2>
<ul>
<li><strong>Pertahanan fisik</strong>: kulit (lapisan pelindung), mukosa (lendir menjebak patogen)</li>
<li><strong>Pertahanan kimiawi</strong>: asam lambung, lisozim (air mata), sebum</li>
<li><strong>Seluler</strong>: fagositosis oleh makrofag dan neutrofil, sel NK (Natural Killer)</li>
<li><strong>Respons inflamasi</strong>: kemerahan, bengkak, panas → menarik sel imun ke lokasi infeksi</li>
</ul>

<h2>Imunitas Spesifik (Adaptif)</h2>
<ul>
<li><strong>Sel B</strong>: memproduksi <strong>antibodi</strong> (imunoglobulin) yang mengenali antigen tertentu</li>
<li><strong>Sel T</strong>: sel T helper (mengaktivasi sel B dan sel T lain), sel T sitotoksik (membunuh sel terinfeksi)</li>
</ul>

<h2>Antigen dan Antibodi</h2>
<p><strong>Antigen</strong>: molekul asing yang memicu respons imun.<br/><strong>Antibodi</strong>: protein berbentuk Y yang diproduksi sel B, mengikat antigen secara spesifik.</p>

<h2>Imunisasi</h2>
<ul>
<li><strong>Aktif</strong>: tubuh memproduksi antibodi sendiri (vaksinasi → antigen dilemahkan)</li>
<li><strong>Pasif</strong>: menerima antibodi dari luar (serum anti-rabies, ASI → IgA)</li>
</ul>`,
};

// ── Kelas XII (Grade 12) ────────────────────────────────

const ch17: Chapter = {
  id: "bio-17", title: "Tumbuh & Kembang Tumbuhan", grade: 12, order: 17,
  description: "Pertumbuhan primer/sekunder, faktor internal & eksternal.",
  content: `
<h2>Pertumbuhan Primer</h2>
<p>Terjadi di <strong>meristem apikal</strong> (ujung akar dan batang). Menghasilkan pemanjangan tanaman.</p>

<h2>Pertumbuhan Sekunder</h2>
<p>Terjadi di <strong>kambium</strong>. Menghasilkan penebalan batang (kayu). Kambium vaskuler → xilem sekunder (dalam) dan floem sekunder (luar). Kambium gabus → melindungi permukaan.</p>

<h2>Faktor Internal (Hormon)</h2>
<ul>
<li><strong>Auksin</strong>: pemanjangan sel, fototropisme, dominansi apikal</li>
<li><strong>Giberelin</strong>: pemanjangan batang, perkecambahan, pembungaan</li>
<li><strong>Sitokinin</strong>: pembelahan sel, pertumbuhan tunas samping</li>
<li><strong>Etilen</strong>: pematangan buah, pengguguran daun</li>
<li><strong>Asam absisat (ABA)</strong>: menghambat pertumbuhan, menutup stomata saat kekeringan</li>
</ul>

<h2>Faktor Eksternal</h2>
<ul>
<li><strong>Cahaya</strong>: diperlukan untuk fotosintesis; fotoperiodisme mengatur pembungaan</li>
<li><strong>Air</strong>: pelarut, turgor sel, fotosintesis</li>
<li><strong>Suhu</strong>: mempengaruhi laju enzim dan metabolisme</li>
<li><strong>Nutrisi</strong>: makro (N, P, K, Ca, Mg, S) dan mikro (Fe, Mn, Zn, Cu, B, Mo)</li>
</ul>`,
};

const ch18: Chapter = {
  id: "bio-18", title: "Metabolisme & Enzim", grade: 12, order: 18,
  description: "Karakteristik enzim, katabolisme (respirasi), anabolisme (fotosintesis).",
  content: `
<h2>Enzim</h2>
<p>Biokatalisator protein yang mempercepat reaksi tanpa ikut bereaksi. Sifat: spesifik (kunci-gembok), dapat digunakan berulang, dipengaruhi suhu dan pH.</p>

<h2>Katabolisme (Respirasi Seluler)</h2>
<p>Pemecahan glukosa untuk menghasilkan ATP (energi).</p>
<h3>Respirasi Aerob</h3>
<ol>
<li><strong>Glikolisis</strong> (sitoplasma): glukosa → 2 piruvat + 2 ATP + 2 NADH</li>
<li><strong>Dekarboksilasi oksidatif</strong>: piruvat → asetil-KoA + CO₂ + NADH</li>
<li><strong>Siklus Krebs</strong> (matriks mitokondria): asetil-KoA → CO₂ + NADH + FADH₂ + ATP</li>
<li><strong>Transpor elektron</strong> (krista mitokondria): NADH & FADH₂ → ATP + H₂O</li>
</ol>
<p>Total: <strong>1 glukosa → 36–38 ATP</strong></p>

<h3>Fermentasi (Anaerob)</h3>
<p>Tanpa O₂. Fermentasi alkohol (ragi): glukosa → etanol + CO₂ + 2 ATP.</p>

<h2>Anabolisme (Fotosintesis)</h2>
<p><strong>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</strong></p>
<ul>
<li><strong>Reaksi terang</strong> (tilakoid): cahaya → ATP + NADPH + O₂</li>
<li><strong>Reaksi gelap / Siklus Calvin</strong> (stroma): CO₂ + ATP + NADPH → glukosa</li>
</ul>`,
};

const ch19: Chapter = {
  id: "bio-19", title: "Genetika & Sintesis Protein", grade: 12, order: 19,
  description: "DNA, RNA, kode genetik, transkripsi, translasi.",
  content: `
<h2>DNA</h2>
<p>Double helix: dua rantai polinukleotida saling melengkapi. Basa: Adenin-Timin (A=T), Guanin-Sitosin (G≡C). Gula: deoksiribosa.</p>

<h2>RNA</h2>
<p>Untai tunggal. Basa: Adenin-Urasil (A=U), Guanin-Sitosin (G≡C). Gula: ribosa.</p>
<ul>
<li><strong>mRNA</strong>: membawa kode genetik dari DNA ke ribosom</li>
<li><strong>tRNA</strong>: membawa asam amino sesuai kode (antikodon)</li>
<li><strong>rRNA</strong>: komponen ribosom</li>
</ul>

<h2>Kode Genetik</h2>
<p>Setiap 3 basa (kodon) mengkode 1 asam amino. Contoh: AUG = metionin (kodon start). Ada 64 kodon, 3 di antaranya kodon stop (UAA, UAG, UGA).</p>

<h2>Transkripsi (DNA → mRNA)</h2>
<ol>
<li>RNA polimerase membuka heliks DNA</li>
<li>mRNA dibentuk berdasarkan cetakan DNA (untaian sense)</li>
<li>mRNA diproses dan keluar dari inti menuju ribosom</li>
</ol>

<h2>Translasi (mRNA → Protein)</h2>
<ol>
<li>Ribosom membaca kodon mRNA</li>
<li>tRNA dengan antikodon yang sesuai membawa asam amino</li>
<li>Asam amino dirangkai membentuk rantai polipeptida (protein)</li>
</ol>`,
};

const ch20: Chapter = {
  id: "bio-20", title: "Pembelahan Sel", grade: 12, order: 20,
  description: "Mitosis, meiosis, gametogenesis.",
  content: `
<h2>Mitosis</h2>
<p>Pembelahan sel yang menghasilkan 2 sel anak identik (diploid → diploid). Untuk pertumbuhan dan perbaikan.</p>
<ol>
<li><strong>Profase</strong>: kromosom memadat, selubung inti menghilang</li>
<li><strong>Metafase</strong>: kromosom berjejer di bidang ekuator</li>
<li><strong>Anafase</strong>: kromatid berpisah menuju kutub berlawanan</li>
<li><strong>Telofase</strong>: selubung inti terbentuk kembali, sitokinesis (pembelahan sitoplasma)</li>
</ol>

<h2>Meiosis</h2>
<p>Pembelahan yang menghasilkan 4 sel anak haploid (untuk gamet). Terdiri dari 2 tahap:</p>
<ul>
<li><strong>Meiosis I</strong>: kromosom homolog berpisah (reduksi), terjadi pindah silang → variasi genetik</li>
<li><strong>Meiosis II</strong>: mirip mitosis, kromatid berpisah</li>
</ul>

<h2>Gametogenesis</h2>
<ul>
<li><strong>Spermatogenesis</strong>: di testis, 1 spermatosit → 4 spermatozoa (fungsi semua)</li>
<li><strong>Oogenesis</strong>: di ovarium, 1 oosit → 1 ovum + 3 badan polar (tidak berfungsi)</li>
</ul>`,
};

const ch21: Chapter = {
  id: "bio-21", title: "Pewarisan Sifat Mendel", grade: 12, order: 21,
  description: "Hukum Mendel I & II, monohibrid, dihibrid, penyimpangan semu.",
  content: `
<h2>Hukum Mendel I (Segregasi)</h2>
<p>Pada pembentukan gamet, pasangan alel berpisah (segregasi) sehingga setiap gamet hanya membawa 1 alel.</p>

<h2>Hukum Mendel II (Asortasi Bebas)</h2>
<p>Gen-gen yang terletak pada kromosom berbeda bersegregasi secara bebas satu sama lain.</p>

<h2>Persilangan Monohibrid</h2>
<p>Satu sifat beda. Aa × Aa → F₂: AA : Aa : aa = <strong>1 : 2 : 1</strong> (genotipe), Dominan : Resesif = <strong>3 : 1</strong> (fenotipe).</p>

<h2>Persilangan Dihibrid</h2>
<p>Dua sifat beda. AaBb × AaBb → F₂: <strong>9 : 3 : 3 : 1</strong> (AB : Ab : aB : ab).</p>

<h2>Penyimpangan Semu Hukum Mendel</h2>
<ul>
<li><strong>Interaksi gen (atavisme)</strong>: beberapa gen mempengaruhi satu sifat (jengger ayam: 9:3:3:1)</li>
<li><strong>Epistasis-Hipostasis</strong>: gen menutupi gen lain</li>
<li><strong>Kriptomeri</strong>: gen tersembunyi jika tidak bersama gen lain (9:3:4)</li>
<li><strong>Polimeri</strong>: beberapa gen dengan efek kumulatif (15:1)</li>
<li><strong>Kodominansi</strong>: kedua alel terekspresi (golongan darah AB)</li>
</ul>`,
};

const ch22: Chapter = {
  id: "bio-22", title: "Hereditas Manusia & Mutasi", grade: 12, order: 22,
  description: "Golongan darah ABO, penyakit menurun, mutasi gen & kromosom.",
  content: `
<h2>Golongan Darah ABO</h2>
<p>Dikendalikan oleh gen I dengan 3 alel: I<sup>A</sup>, I<sup>B</sup>, i (resesif).</p>
<ul>
<li>A: I<sup>A</sup>I<sup>A</sup> atau I<sup>A</sup>i</li>
<li>B: I<sup>B</sup>I<sup>B</sup> atau I<sup>B</sup>i</li>
<li>AB: I<sup>A</sup>I<sup>B</sup> (kodominan)</li>
<li>O: ii</li>
</ul>

<h2>Penyakit Menurun</h2>
<ul>
<li><strong>Autosomal resesif</strong>: albinisme, fenilketonuria, thalassemia</li>
<li><strong>Terpaut kromosom X</strong>: buta warna (X<sup>cb</sup>), hemofilia (X<sup>h</sup>)</li>
</ul>

<h2>Mutasi</h2>
<h3>Mutasi Gen</h3>
<p>Perubahan urutan basa pada DNA. Jenis: substitusi (sickle cell anemia), insersi, delesi.</p>

<h3>Mutasi Kromosom</h3>
<ul>
<li><strong>Aneuploidi</strong>: perubahan jumlah kromosom (Down syndrome: trisomi 21, Klinefelter: XXY, Turner: XO)</li>
<li><strong>Poliploidi</strong>: penggandaan seluruh set kromosom (umum pada tumbuhan)</li>
<li><strong>Aberrasi</strong>: perubahan struktur kromosom (delesi, duplikasi, inversi, translokasi)</li>
</ul>

<h2>Mutagen</h2>
<p>Faktor penyebab mutasi: radiasi (sinar UV, X, gamma), bahan kimia (pestisida, rokok), virus.</p>`,
};

const ch23: Chapter = {
  id: "bio-23", title: "Evolusi", grade: 12, order: 23,
  description: "Teori evolusi Darwin, Lamarck, Hardy-Weinberg, spesiasi.",
  content: `
<h2>Teori Evolusi</h2>
<ul>
<li><strong>Lamarck</strong>: sifat yang diperoleh selama hidup diwariskan (use and disuse) — sudah ditolak</li>
<li><strong>Darwin</strong>: seleksi alam — individu dengan variasi yang menguntungkan bertahan hidup dan bereproduksi lebih banyak (survival of the fittest)</li>
<li><strong>Weismann</strong>: evolusi berkaitan dengan pewarisan gen melalui sel kelamin, bukan perubahan tubuh</li>
</ul>

<h2>Bukti Evolusi</h2>
<ul>
<li>Fosil (catatan evolusi bertahap)</li>
<li>Organ homolog (struktur sama, fungsi berbeda → nenek moyang sama)</li>
<li>Organ analog (fungsi sama, struktur berbeda → evolusi konvergen)</li>
<li>Embriologi perbandingan</li>
<li>Bukti biokimia (DNA, protein)</li>
</ul>

<h2>Hukum Hardy-Weinberg</h2>
<p><strong>p² + 2pq + q² = 1</strong></p>
<p>p = frekuensi alel dominan, q = frekuensi alel resesif. Berlaku jika: populasi besar, tidak ada migrasi, mutasi, seleksi, dan perkawinan acak.</p>

<h2>Spesiasi</h2>
<p>Proses terbentuknya spesies baru. Mekanisme: isolasi geografi → isolasi reproduksi → spesies baru.</p>`,
};

const ch24: Chapter = {
  id: "bio-24", title: "Bioteknologi", grade: 12, order: 24,
  description: "Bioteknologi konvensional & modern, kultur jaringan, DNA rekombinan.",
  content: `
<h2>Bioteknologi Konvensional</h2>
<p>Memanfaatkan mikroorganisme secara langsung tanpa rekayasa genetik.</p>
<ul>
<li>Tempe (Rhizopus oligosporus), tape (Saccharomyces)</li>
<li>Yogurt (Lactobacillus bulgaricus), keju (Lactobacillus)</li>
<li>Kecap (Aspergillus oryzae)</li>
</ul>

<h2>Bioteknologi Modern</h2>
<h3>Kultur Jaringan</h3>
<p>Menumbuhkan sel/jaringan tumbuhan dalam media buatan (in vitro). Prinsip: totipotensi (setiap sel berpotensi menjadi tumbuhan utuh). Keuntungan: perbanyakan massal, bebas penyakit.</p>

<h3>DNA Rekombinan (Rekayasa Genetika)</h3>
<ol>
<li>Isolasi gen target</li>
<li>Pemotongan DNA dengan enzim restriksi</li>
<li>Penyisipan gen ke vektor (plasmid)</li>
<li>Transformasi ke organisme target</li>
</ol>
<p>Contoh: insulin rekombinan, tanaman transgenik (Bt corn, golden rice).</p>

<h3>Kloning</h3>
<p>Membuat salinan genetik identik. Dolly (domba) = kloning pertama (1996). Teknik: transfer inti sel somatik ke sel telur tanpa inti.</p>

<h2>Dampak Bioteknologi</h2>
<ul>
<li><strong>Positif</strong>: peningkatan produksi pangan, obat-obatan, tanaman tahan hama</li>
<li><strong>Negatif</strong>: kekhawatiran dampak ekologis (aliran gen), etika kloning manusia</li>
</ul>`,
};

export const biologiChapters: Chapter[] = [
  ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08, ch09, ch10,
  ch11, ch12, ch13, ch14, ch15, ch16, ch17, ch18, ch19, ch20,
  ch21, ch22, ch23, ch24,
];

export const biologiMap = new Map(biologiChapters.map((c) => [c.id, c]));

export function getBiologiChapter(id: string): Chapter | undefined {
  return biologiMap.get(id);
}
