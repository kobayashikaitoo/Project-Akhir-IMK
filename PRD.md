# PRD: Pijar — Pembelajaran Interaktif Pelajar (Khusus SMA)

## Problem Statement

Siswa SMA di Indonesia sering kali menghadapi tekanan akademis yang sangat besar dalam mempersiapkan ujian sekolah, ujian kelulusan, dan seleksi masuk perguruan tinggi negeri (UTBK/SNBT). Kendala utama yang mereka hadapi dalam proses belajar meliputi:
- **Tingginya Beban Kognitif**: Materi pembelajaran SMA sangat teoretis dan padat rumus (terutama rumpun sains seperti Fisika, Kimia, dan Biologi, serta Matematika tingkat lanjut). Buku teks panjang tanpa visualisasi yang memadai membuat materi sulit dicerna.
- **Ketidakseimbangan Antara Teori dan Latihan**: Siswa sering kali harus membaca materi di buku fisik kemudian mencari soal latihan di lembar terpisah, memaksa mereka membagi fokus secara berulang-ulang yang menurunkan efisiensi belajar.
- **Kurangnya Penjelasan Instan**: Ketika mengerjakan latihan soal mandiri di rumah dan menemui kendala pada rumus yang rumit, tidak ada asisten belajar yang dapat memberikan jawaban terstruktur secara langsung.
- **Tingkat Kejenuhan Tinggi**: Metode belajar yang monoton memicu stres akademis (*academic burnout*), sehingga siswa membutuhkan media interaktif tergamifikasi untuk meredakan kejenuhan sekaligus menjaga konsistensi belajar.

## Solution

**Pijar** dirancang sebagai aplikasi pembelajaran interaktif untuk siswa SMA berbasis gamifikasi yang menerapkan prinsip-prinsip Interaksi Manusia dan Komputer (IMK) secara optimal untuk menyelesaikan kendala belajar siswa:
1. **Onboarding Cepat & Sederhana**: Proses pendaftaran intuitif di mana siswa cukup memilih jenjang Kelas SMA (Kelas 10, 11, atau 12) dan jurusan (IPA/IPS) melalui antarmuka kartu tebal visual.
2. **Modul & Latihan Soal Side-by-Side**: Menyajikan ringkasan materi pelajaran/rumus di kolom kiri dan kuis interaktif pilihan ganda di kolom kanan. Struktur ini menghemat ruang kognitif siswa dan menerapkan prinsip **Efficiency** karena siswa tidak perlu berganti halaman untuk melihat rumus saat menghitung soal kuis.
3. **Asisten Belajar (Tutor AI)**: Chatbot asisten cerdas yang siaga membantu memecahkan dan menjelaskan rumus sains, teori biologi, atau tata bahasa Inggris secara terstruktur, ramah, dan adaptif berdasarkan tingkat kesulitan soal.
4. **Rapor Belajar Tergamifikasi**: Dashboard perkembangan belajar yang mencatat akumulasi poin XP harian, perolehan bintang emas latihan, progress bar ketuntasan bab, serta diagram radar kemampuan subjek untuk meningkatkan motivasi.

## Target Audience

Karakteristik pengguna aplikasi Pijar dirancang secara spesifik untuk mendukung kelompok berikut:

- **Siswa SMA (Usia 15-18 tahun)**
  - **Karakteristik**: Mengalami beban tugas yang padat, mandiri dalam belajar, mempersiapkan kelulusan sekolah dan UTBK/SNBT. Mereka menyukai tantangan belajar yang kasual namun terstruktur, serta rentan mengalami kejenuhan akademis (*burnout*).
  - **Tingkat Kemampuan Teknologi**: Sangat mahir menggunakan laptop, smartphone, browser modern, dan aplikasi media sosial. Mereka mengharapkan antarmuka yang modern, responsif, minimalis, dan bebas hambatan fungsional (*seamless UX*).
- **Guru Pengajar SMA**
  - **Karakteristik**: Membutuhkan media latihan interaktif yang dapat diakses mandiri oleh siswa untuk menguji pemahaman konsep dasar setelah kelas teori selesai.
- **Orang Tua**
  - **Karakteristik**: Memerlukan dashboard pelaporan perkembangan belajar anak yang transparan dan mudah dipahami untuk memantau kesiapan ujian anak.

## Core Use Cases

Aplikasi Pijar dirancang dengan alur penggunaan yang efisien bagi siswa SMA:

### 1. Masuk & Onboarding
Siswa masuk ke aplikasi -> Memilih profil atau masuk via Google/GitHub -> Melakukan onboarding cepat dengan menyetel kelas (Kelas 10, 11, 12 SMA) dan rumpun peminatan (IPA/IPS) -> Memilih mata pelajaran aktif yang ingin dilatih pada beranda.

### 2. Membaca Ringkasan & Mengerjakan Soal Latihan (Side-by-Side)
Siswa memilih bab pelajaran -> Antarmuka split-screen diaktifkan -> Di sisi kiri, siswa membaca ringkasan materi inti, tabel rumus, atau grafik eksperimen -> Di sisi kanan, siswa mengerjakan kuis latihan pilihan ganda secara real-time -> Skor kuis langsung dihitung secara otomatis (auto-grade) dengan ulasan kunci jawaban yang terperinci.

### 3. Konsultasi dengan Tutor AI
Siswa menemui soal kuis kalkulus atau fisika yang sulit dipecahkan -> Menekan tombol "Tanya Tutor" -> Tutor AI membedah langkah demi langkah penyelesaian rumus secara terstruktur dan santun, serta menyediakan latihan soal sejenis untuk melatih pemahaman baru siswa.

### 4. Evaluasi Mandiri di Rapor Kemajuan
Siswa membuka tab Rapor Belajar -> Melihat total Bintang Emas dan XP yang diraih, memantau persentase ketuntasan bab pelajaran, dan membaca grafik radar performa subjek untuk mengetahui mata pelajaran mana yang perlu ditingkatkan lagi.

## Core Features

### 1. Landing Page & Onboarding Interaktif
- **Tampilan Beranda Ceria**: Desain visual modern bergaya Clay dengan maskot interaktif yang menyapa siswa secara dinamis berdasarkan waktu belajar (pagi/siang/malam).
- **Pemilih Peminatan & Kelas**: Formulir visual untuk memilih kelas (10 s.d. 12 SMA) dan jurusan yang mengaktifkan silabus mata pelajaran relevan secara otomatis.

### 2. Modul & Kuis Interaktif (Split-Screen)
- **Tampilan Side-by-Side**: Wadah kolom seimbang yang menaruh ringkasan materi/rumus di sisi kiri dan lembar kuis di sisi kanan untuk memotong pemborosan waktu scroll bolak-balik (**Efficiency**).
- **Interactive Quiz Player**: Kuis pilihan ganda interaktif dengan tombol taktil besar, efek penekanan, dan ulasan penjelasan jawaban instan begitu kuis selesai disubmit.
- **Koreksi Instan & Penjelasan Rumus**: Memberikan feedback jawaban benar/salah dengan warna hijau/merah disertai penjabaran langkah hitungan yang logis.

### 3. Tutor AI (Asisten Belajar)
- **Fitur Tanya Tutor**: Chatbot asisten belajar SMA yang siaga memecahkan masalah teori atau rumus sains (Matematika, Fisika, Kimia, Biologi) dan materi bahasa (Bahasa Inggris) dengan bahasa yang cerdas dan suportif.
- **Generator Latihan Kustom**: Siswa dapat meminta Tutor AI memformulasikan kuis latihan tambahan acak secara instan berdasarkan topik yang dirasa masih sulit.

### 4. Rapor Kemajuan (Gamified Dashboard)
- **Status Bintang & Poin XP**: Reward belajar di mana setiap latihan kuis yang tuntas di atas KKM memberikan bintang emas dan poin XP.
- **Progress Bar Visual**: Penunjuk persentase ketuntasan bab materi pelajaran secara linear untuk membantu manajemen waktu belajar mandiri.
- **Grafik Nilai**: Visualisasi tingkat penguasaan kompetensi siswa menggunakan grafik radar dan grafik batang interaktif.

## Kurikulum & Materi Pembelajaran Lengkap (SMA Kelas X, XI, XII)

Pijar memuat materi sekolah lengkap berdasarkan silabus nasional Kurikulum Merdeka untuk SMA Kelas X (Fase E), Kelas XI (Fase F), dan Kelas XII (Fase F Lanjutan) sebagai berikut:

### 1. Matematika (SMA Kelas X, XI, XII)

| Jenjang Kelas | Bab | Judul Bab | Pokok Pembahasan Utama |
|---|---|---|---|
| **Kelas X** | Bab 1 | Eksponen dan Logaritma | Sifat-sifat eksponen, bentuk akar, fungsi eksponensial, konsep logaritma. |
| | Bab 2 | Barisan dan Deret | Barisan aritmetika, deret aritmetika, barisan geometri, deret geometri tak hingga, penerapan bunga majemuk. |
| | Bab 3 | Vektor dan Operasinya | Notasi vektor, panjang vektor, operasi penjumlahan/pengurangan vektor, perkalian skalar vektor. |
| | Bab 4 | Trigonometri | Perbandingan trigonometri segitiga siku-siku, sudut istimewa, sudut berelasi di kuadran I-IV. |
| | Bab 5 | SPLDV & SPLTV | Sistem Persamaan Linear Dua Variabel (SPLDV) dan Tiga Variabel (SPLTV), Pertidaksamaan Linear Dua Variabel. |
| | Bab 6 | Fungsi Kuadrat | Menggambar grafik fungsi kuadrat, menentukan titik puncak, menyusun persamaan fungsi kuadrat baru. |
| | Bab 7 | Statistika | Penyajian data histogram, ogive, ukuran pemusatan (mean, median, modus), ukuran penyebaran data kelompok. |
| | Bab 8 | Peluang | Konsep dasar peluang, frekuensi harapan, komplemen suatu kejadian. |
| **Kelas XI** | Bab 9 | Fungsi Komposisi & Invers | Konsep relasi dan fungsi, operasi aljabar fungsi, komposisi fungsi ($f \circ g$), invers fungsi ($f^{-1}$). |
| | Bab 10 | Geometri Lingkaran | Hubungan sudut pusat dan sudut keliling, panjang busur, luas juring, garis singgung lingkaran luar & dalam. |
| | Bab 11 | Statistika Bivariat | Diagram pencar (scatter plot), regresi linear sederhana, korelasi Pearson dan koefisien determinasi. |
| | Bab 12 | Matriks | Operasi penjumlahan & perkalian matriks, transpose matriks, determinan dan invers matriks orde $2 \times 2$ & $3 \times 3$. |
| | Bab 13 | Transformasi Geometri | Translasi (pergeseran), refleksi (pencerminan), rotasi (perputaran), dan dilatasi (perkalian skala) titik/garis. |
| | Bab 14 | Polinomial | Teorema sisa, teorema faktor, operasi pembagian polinomial (metode Horner dan pembagian bersusun). |
| | Bab 15 | Limit Fungsi Aljabar | Konsep limit mendekati nilai tertentu, metode substitusi, faktorisasi, dan perkalian sekawan. |
| | Bab 16 | Turunan Fungsi Aljabar | Rumus turunan fungsi aljabar, aturan rantai, persamaan garis singgung kurva, nilai stasioner (maksimum/minimum). |
| **Kelas XII** | Bab 17 | Transformasi Fungsi | Translasi, refleksi, dilatasi, dan rotasi kurva grafik fungsi matematika. |
| | Bab 18 | Kaidah Pencacahan | Aturan pengisian tempat (filling slots), permutasi unsur berbeda/sama, kombinasi, ekspansi binomial. |
| | Bab 19 | Peluang Kejadian Majemuk | Peluang kejadian saling lepas, saling bebas, dan peluang bersyarat ($P(A \mid B)$). |
| | Bab 20 | Dimensi Tiga (Geometri Ruang) | Menghitung jarak antartitik, titik ke garis, titik ke bidang pada bangun ruang kubus dan balok. |
| | Bab 21 | Geometri Analitik | Persamaan garis, persamaan lingkaran, karakteristik elips, parabola, dan hiperbola. |
| | Bab 22 | Kalkulus Lanjut (Integral) | Integral tak tentu aljabar, integral tentu, aplikasi menghitung luas daerah di bawah kurva dan volume benda putar. |

### 2. Fisika (SMA Kelas X, XI, XII)

| Jenjang Kelas | Bab | Judul Bab | Pokok Pembahasan Utama |
|---|---|---|---|
| **Kelas X** | Bab 1 | Pengukuran dalam Kerja Ilmiah | Besaran pokok & turunan, dimensi, ketidakpastian pengukuran, angka penting, penggunaan jangka sorong & mikrometer. |
| | Bab 2 | Energi Terbarukan | Sumber energi fosil vs alternatif, konversi energi (mekanik, listrik, panas), efisiensi energi. |
| | Bab 3 | Pemanasan Global | Mekanisme efek rumah kaca, gas rumah kaca (CO2, CH4), dampak perubahan iklim global, solusi dekarbonisasi. |
| **Kelas XI** | Bab 4 | Kinematika Gerak Lurus | Gerak Lurus Beraturan (GLB), Gerak Lurus Berubah Beraturan (GLBB), Gerak Jatuh Bebas, Gerak Parabola. |
| | Bab 5 | Dinamika Gerak Partikel | Penerapan Hukum Newton I, II, III, gaya gesek statis/kinetis, gaya sentripetal pada gerak melingkar. |
| | Bab 6 | Usaha dan Energi | Konsep usaha fisik ($W = F \cdot s$), energi kinetik, energi potensial gravitasi, Hukum Kekekalan Energi Mekanik. |
| | Bab 7 | Momentum dan Impuls | Konsep momentum ($p = m \cdot v$) dan impuls ($I = F \cdot \Delta t$), Hukum Kekekalan Momentum, jenis tumbukan. |
| | Bab 8 | Dinamika Rotasi & Benda Tegar | Momen inersia, momen gaya (torsi), momentum sudut, syarat keseimbangan benda tegar, titik berat benda homogen. |
| | Bab 9 | Elastisitas Bahan | Tegangan (stress), regangan (strain), Modulus Young, Hukum Hooke pada pegas, susunan seri & paralel pegas. |
| | Bab 10 | Mekanika Fluida | Tekanan hidrostatis, Hukum Pascal, Hukum Archimedes (terapung/melayang/tenggelam), asas kontinuitas, Hukum Bernoulli. |
| | Bab 11 | Suhu dan Kalor | Termometer, pemuaian zat (panjang/luas/volume), kalor jenis, kapasitas kalor, Asas Black, perpindahan kalor. |
| | Bab 12 | Teori Kinetik Gas | Sifat gas ideal, persamaan keadaan gas ideal ($PV = nRT$), tekanan gas, energi kinetik rata-rata partikel gas. |
| **Kelas XII** | Bab 13 | Listrik Arus Searah (DC) | Hukum Ohm, hambatan kawat, Hukum I & II Kirchhoff pada rangkaian loop tunggal/ganda, daya listrik DC. |
| | Bab 14 | Listrik Statis (Elektrostatika) | Hukum Coulomb, medan listrik, potensial listrik, energi potensial listrik, kapasitas kapasitor keping sejajar. |
| | Bab 15 | Medan Magnet & Induksi | Induksi magnetik kawat lurus/melingkar, solenoida, gaya Lorentz, aplikasi transformator, Hukum Faraday & Lenz. |
| | Bab 16 | Listrik Arus Bolak-Balik (AC) | Nilai efektif/maksimum arus AC, impedansi rangkaian RLC, resonansi rangkaian AC. |
| | Bab 17 | Relativitas Khusus | Postulat relativitas khusus Einstein, dilatasi waktu, kontraksi panjang, momentum dan energi relativistik. |
| | Bab 18 | Fisika Kuantum & Atom | Teori radiasi benda hitam, efek fotolistrik, efek Compton, dualisme gelombang-partikel de Broglie, teori atom. |
| | Bab 19 | Fisika Inti & Radioaktivitas | Defek massa, energi ikat inti, reaksi pembelahan (fisi) & penggabungan (fusi) nuklir, waktu paruh zat radioaktif. |

### 3. Kimia (SMA Kelas X, XI, XII)

| Jenjang Kelas | Bab | Judul Bab | Pokok Pembahasan Utama |
|---|---|---|---|
| **Kelas X** | Bab 1 | Pengenalan Kimia & Metode Ilmiah | Peran kimia di kehidupan, metode ilmiah, simbol bahaya bahan kimia, keselamatan laboratorium. |
| | Bab 2 | Struktur Atom & Konfigurasi | Perkembangan model atom (Dalton s.d. Mekanika Kuantum), partikel subatomik, nomor atom/massa, konfigurasi Bohr/SPO. |
| | Bab 3 | Tabel Periodik Unsur | Struktur tabel periodik, golongan dan periode, tren sifat periodik unsur (jari-jari, ionisasi, elektronegativitas). |
| | Bab 4 | Ikatan Kimia | Pembentukan ikatan ion, kovalen tunggal/rangkap/koordinasi, ikatan logam, gaya antarmolekul (ikatan hidrogen). |
| | Bab 5 | Stoikiometri & Hukum Dasar | Hukum kekekalan massa, hukum perbandingan tetap, konsep mol, massa molar, rumus empiris/molekul, hitungan reaksi. |
| **Kelas XI** | Bab 6 | Hidrokarbon & Minyak Bumi | Kekhasan atom karbon, tata nama alkana, alkena, alkuna, isomer senyawa karbon, proses fraksionasi minyak bumi. |
| | Bab 7 | Termokimia | Sistem dan lingkungan, entalpi ($H$), eksoterm dan endoterm, kalorimeter, Hukum Hess, energi ikatan rata-rata. |
| | Bab 8 | Laju Reaksi | Pengertian laju reaksi, teori tumbukan, faktor laju reaksi (konsentrasi, suhu, luas permukaan, katalis). |
| | Bab 9 | Kesetimbangan Kimia | Reaksi reversibel, tetapan kesetimbangan ($Kc$ dan $Kp$), asas Le Chatelier tentang pergeseran kesetimbangan. |
| | Bab 10 | Teori Asam Basa & pH | Asam basa menurut Arrhenius, Brønsted-Lowry, Lewis; menghitung pH asam/basa kuat dan lemah, titrasi asam basa. |
| | Bab 11 | Penyangga & Hidrolisis | Larutan buffer asam/basa, kapasitas buffer, garam terhidrolisis parsial/total, menghitung pH larutan garam. |
| | Bab 12 | Kelarutan & Ksp | Konsep kelarutan ($s$), tetapan hasil kali kelarutan ($Ksp$), hubungan kelarutan dan Ksp, pengaruh ion senama. |
| | Bab 13 | Sistem Koloid | Perbedaan larutan/koloid/suspensi, jenis koloid, sifat koloid (efek Tyndall, gerak Brown, adsorpsi, koagulasi). |
| **Kelas XII** | Bab 14 | Sifat Koligatif Larutan | Penurunan tekanan uap, kenaikan titik didih, penurunan titik beku, tekanan osmotik larutan elektrolit/nonelektrolit. |
| | Bab 15 | Reaksi Redoks & Sel Volta | Penyetaraan reaksi redoks (metode setengah reaksi), susunan sel Volta, deret Volta, korosi logam dan pencegahannya. |
| | Bab 16 | Sel Elektrolisis | Reaksi di katoda & anoda sel elektrolisis, Hukum Faraday I & II tentang jumlah zat hasil elektrolisis, elektroplating. |
| | Bab 17 | Kimia Unsur | Sifat unsur Gas Mulia, Halogen, Alkali, Alkali Tanah, unsur periode 3 & 4, pembuatan dan manfaat logam/non-logam. |
| | Bab 18 | Senyawa Turunan Alkana | Alkohol, eter, aldehid, keton, asam karboksilat, ester (tata nama IUPAC/trivial, sifat, reaksi identifikasi). |
| | Bab 19 | Benzena dan Turunannya | Tata nama benzena monosubstitusi/disubstitusi, sifat benzena, kegunaan senyawa turunan benzena (asam benzoat, dll). |
| | Bab 20 | Makromolekul | Struktur dan penggolongan polimer alami/sintetis, karbohidrat (monosakarida/polisakarida), protein (asam amino), lipid. |

### 4. Biologi (SMA Kelas X, XI, XII)

| Jenjang Kelas | Bab | Judul Bab | Pokok Pembahasan Utama |
|---|---|---|---|
| **Kelas X** | Bab 1 | Keanekaragaman Hayati | Tingkat gen, spesies, ekosistem; persebaran fauna Indonesia (Wallace, Weber); ancaman dan pelestarian (in-situ/ex-situ). |
| | Bab 2 | Klasifikasi Makhluk Hidup | Prinsip klasifikasi binomial nomenklatur, penggunaan kunci determinasi sederhana, sistem klasifikasi 5 kingdom. |
| | Bab 3 | Virus | Ciri virus, struktur kepala/kapsid/ekor, replikasi virus (siklus litik dan lisogenik), peran virus bagi manusia & vaksin. |
| | Bab 4 | Bakteri & Archaebacteria | Struktur sel bakteri, reproduksi bakteri (konjugasi, transduksi), peran bakteri menguntungkan/merugikan bagi manusia. |
| | Bab 5 | Protista dan Fungi | Ciri protista mirip hewan/tumbuhan/jamur, struktur jamur (hifa/miselium), zigospora/askospora, simbiosis mikoriza. |
| | Bab 6 | Ekologi & Lingkungan | Komponen ekosistem, rantai & jaring makanan, daur biogeokimia (karbon, nitrogen, air), pencemaran air/udara/tanah. |
| **Kelas XI** | Bab 7 | Struktur Sel & Transpor | Organel sel (nukleus, ribosom, mitokondria, dinding sel), perbedaan sel hewan & tumbuhan, transpor pasif & aktif. |
| | Bab 8 | Jaringan Tumbuhan | Struktur jaringan meristem (aktif membelah) dan dewasa (epidermis, parenkim, kolenkim, sklerenkim, xilem, floem). |
| | Bab 9 | Jaringan Hewan | Struktur jaringan epitel, jaringan ikat (tulang, darah, lemak), jaringan otot (polos/lurik/jantung), jaringan saraf. |
| | Bab 10 | Sistem Gerak Manusia | Tulang penyusun rangka (aksial/apendikular), sendi peluru/engsel/putar, mekanisme kerja otot (aktin & miosin). |
| | Bab 11 | Sistem Sirkulasi Darah | Komponen plasma & sel darah (eritrosit, leukosit, trombosit), pembekuan darah, jantung & pembuluh, golongan darah. |
| | Bab 12 | Sistem Pencernaan | Zat makanan (karbohidrat, lemak, protein, vitamin), organ mulut, lambung, usus halus, usus besar; enzim pencernaan. |
| | Bab 13 | Sistem Respirasi | Struktur hidung, trakea, bronkus, alveolus; mekanisme pernapasan dada & perut; kapasitas paru-paru. |
| | Bab 14 | Sistem Ekskresi | Struktur nefron ginjal (filtrasi, reabsorpsi, augmentasi), hati (empedu), kulit (keringat), paru-paru (CO2). |
| | Bab 15 | Sistem Regulasi | Sel saraf (neuron), sinapsis, sistem saraf pusat & tepi, organ indra (mata, telinga, kulit), hormon endokrin. |
| | Bab 16 | Sistem Imunitas | Kekebalan tubuh non-spesifik (kulit, mukosa) dan spesifik (sel T & B), antigen & antibodi, imunisasi aktif/pasif. |
| **Kelas XII** | Bab 17 | Tumbuh & Kembang Tumbuhan | Pertumbuhan primer & sekunder, faktor internal (auksin, giberelin, sitokinin) dan eksternal (air, cahaya, suhu). |
| | Bab 18 | Metabolisme & Enzim | Karakteristik enzim, faktor kerja enzim, katabolisme respirasi aerob (glikolis, siklus Krebs) dan anabolisme fotosintesis. |
| | Bab 19 | Genetika & Sintesis Protein | Struktur DNA, RNA (mRNA, tRNA, rRNA), kromosom, kode genetik, tahap transkripsi dan translasi protein. |
| | Bab 20 | Pembelahan Sel | Tahapan mitosis (profase s.d. telofase), tahapan meiosis I & II, gametogenesis (spermatogenesis & oogenesis). |
| | Bab 21 | Pewarisan Sifat Mendel | Hukum Mendel I (segregasi) & II (asortasi), persilangan monohibrid & dihibrid, penyimpangan semu hukum Mendel. |
| | Bab 22 | Hereditas Manusia & Mutasi | Golongan darah ABO, penyakit menurun terpaut kromosom (buta warna, hemofilia), jenis mutasi gen & kromosom. |
| | Bab 23 | Evolusi | Teori evolusi Darwin, Lamarck, Weismann; hukum Hardy-Weinberg tentang frekuensi gen, spesiasi isolasi geografi. |
| | Bab 24 | Bioteknologi | Perbedaan konvensional & modern, teknik kultur jaringan, kloning, bayi tabung, DNA rekombinan, dampak bioteknologi. |

### 5. Bahasa Inggris (SMA Kelas X, XI, XII)

| Jenjang Kelas | Bab | Judul Bab | Pokok Pembahasan Utama |
|---|---|---|---|
| **Kelas X** | Bab 1 | Descriptive Text | Social function, structure of describing tourism spots, historical places, and people. Grammar: adjectives & noun phrases. |
| | Bab 2 | Recount Text | Telling past events, personal experiences, biographies. Grammar: Simple Past Tense, time connectors (then, after that). |
| | Bab 3 | Narrative Text | Folktales, legends, fables, identifying conflict, moral value. Grammar: Direct speech, past continuous. |
| | Bab 4 | Procedure Text | Writing recipes, technology manuals, listing steps, ingredients. Grammar: Imperative verbs, action verbs. |
| | Bab 5 | Social Interaction | Congratulations and compliments, expressing intention and future plans ("be going to" vs "would like to"). |
| **Kelas XI** | Bab 6 | Analytical Exposition Text | Defending opinions on social topics, thesis statement, arguments, reiteration. Grammar: causal conjunctions, passive voice. |
| | Bab 7 | Report Text | General description of animals, space, technology, plants. Difference from descriptive text. Grammar: Simple Present Tense. |
| | Bab 8 | Explanation Text | Detailing how and why natural or social phenomena happen. Grammar: passive voice, cause-and-effect connectors. |
| | Bab 9 | Formal & Informal Correspondence | Writing invitation letters, personal letters, card invitations, accepting and declining invitations formally. |
| | Bab 10 | Offers and Suggestions | Expressions of offering help ("May I..."), asking/giving suggestions ("You should..."), opinions and thoughts. |
| **Kelas XII** | Bab 11 | Discussion Text | Discussing controversial topics from pro and con sides, recommendation. Grammar: contrastive conjunctions (however, on the other hand). |
| | Bab 12 | News Item Text | Reporting newsworthy events, headlines, background events, sources, quotes. Grammar: saying verbs, passive voice. |
| | Bab 13 | Job Application Letters | Writing application letters (cover letters), CV formatting, responding to job advertisements, interview preparation. |
| | Bab 14 | Grammar Focus: Advanced Clauses | Noun clauses, relative clauses (adjective clauses), causative verbs (have, get, let, make), reported speech (indirect questions). |

---

## Format Kuis

Format pertanyaan kuis dirancang agar representatif dengan soal ujian sekolah dan UTBK:
- **Pilihan Ganda (Multiple Choice)**: Format standar ujian kelulusan dengan 5 opsi pilihan (A, B, C, D, E).
- **Benar atau Salah (True or False)**: Pernyataan analisis konsep materi dengan tombol centang hijau (Benar) dan silang merah (Salah).
- **Isian Singkat (Fill in the Blank)**: Mengisi nilai hasil akhir hitungan rumus matematika/sains.
- **Mencocokkan Hubungan (Matching)**: Menghubungkan pernyataan teori dengan nama hukum/tokoh sains yang sesuai.

## Keputusan Implementasi

### Stack Teknologi
- **Frontend**: React 19 + Vite + TanStack Router (SPA) + TanStack Query + Tailwind CSS 4 + `@labas/ui` (shadcn/ui shared package dengan penyesuaian gaya Clay).
- **Backend**: Hono + tRPC.
- **Autentikasi**: Better Auth (Email/Password, Google OAuth).
- **Database**: PostgreSQL + Drizzle ORM.
- **AI Engine**: OpenAI-compatible API dengan agen penyusun soal terintegrasi.
- **Manajemen Repositori**: Turborepo + Bun workspaces.

### Struktur Database (Drizzle Schema di `packages/db/src/schema/schema.ts`)
Struktur database disesuaikan untuk sistem kelas SMA:
- `subject`: Menyimpan nama mata pelajaran (Matematika, Fisika, dll.), jenjang kelas SMA (10 s.d. 12), dan penjurusan (IPA/IPS).
- `module`: Menyimpan modul materi pembelajaran, berisi teks materi, rumus inti, gambar diagram, dan referensi mata pelajaran.
- `quiz`: Menyimpan kumpulan kuis latihan yang terhubung dengan bab modul.
- `question`: Menyimpan butir pertanyaan, opsi jawaban, kunci jawaban, dan pembahasan rumus.
- `student_progress`: Menyimpan status penyelesaian materi oleh siswa.
- `student_score`: Menyimpan skor kuis, total bintang emas, dan XP siswa.
- `chat_history`: Menyimpan riwayat percakapan antara siswa dan Tutor AI.

### Alur Asisten Tutor AI
1. **Analisis Konteks**: Tutor AI membaca topik kuis atau materi terakhir yang dikerjakan siswa.
2. **Generasi Ramah Anak**: AI merumuskan jawaban atau soal baru dengan menghindari istilah teknis yang terlalu rumit.
3. **Penyusunan Kuis**: Soal kuis tambahan divalidasi formatnya (Zod schema) untuk memastikan pilihan ganda memiliki kunci jawaban yang valid sebelum disajikan ke siswa.

### Algoritma Analisis Kemajuan Belajar
1. Kelompokkan nilai kuis berdasarkan mata pelajaran.
2. Hitung persentase ketuntasan modul (jumlah modul selesai dibagi total modul).
3. Identifikasi mata pelajaran dengan akurasi terendah di bawah KKM (Kriteria Ketuntasan Minimal, default 70%).
4. Tampilkan rekomendasi bab materi yang harus diulang beserta kuis pengayaan dari Tutor AI pada dashboard dashboard visual Rapor Kemajuan.
