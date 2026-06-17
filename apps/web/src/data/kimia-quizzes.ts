import type { ChapterQuiz, QuizQuestion } from "./quizzes";

const q = (id: string, question: string, options: [string, string][], correctKey: string, explanation: string): QuizQuestion => ({
  id, question, options: options.map(([key, text]) => ({ key, text })), correctKey, explanation,
});

// ── Kimia Kelas X ──────────────────────────────────────

const kim01: ChapterQuiz = {
  chapterId: "kim-01",
  questions: [
    q("kim01-1", "Ilmu kimia mempelajari ...",
      [["A", "materi dan perubahannya"], ["B", "gerak benda"], ["C", "makhluk hidup"], ["D", "bumi dan atmosfer"], ["E", "angka dan bilangan"]],
      "A", "Kimia adalah ilmu yang mempelajari materi, struktur, sifat, dan perubahannya."),
    q("kim01-2", "Langkah pertama dalam metode ilmiah adalah ...",
      [["A", "observasi"], ["B", "kesimpulan"], ["C", "hipotesis"], ["D", "eksperimen"], ["E", "publikasi"]],
      "A", "Observasi (pengamatan) adalah langkah pertama dalam metode ilmiah."),
    q("kim01-3", "Keselamatan kerja di laboratorium meliputi penggunaan ...",
      [["A", "jas lab, kacamata pelindung, sarung tangan"], ["B", "sandal jepit"], ["C", "perhiasan"], ["D", "baju lengan pendek saja"], ["E", "tidak perlu pelindung"]],
      "A", "Alat pelindung: jas lab, kacamata pelindung, sarung tangan, sepatu tertutup."),
  ],
};

const kim02: ChapterQuiz = {
  chapterId: "kim-02",
  questions: [
    q("kim02-1", "Partikel penyusun inti atom adalah ...",
      [["A", "proton dan neutron"], ["B", "elektron dan proton"], ["C", "elektron dan neutron"], ["D", "proton saja"], ["E", "neutron saja"]],
      "A", "Inti atom terdiri dari proton dan neutron (nukleon)."),
    q("kim02-2", "Nomor atom (Z) menunjukkan jumlah ...",
      [["A", "proton"], ["B", "neutron"], ["C", "elektron valensi"], ["D", "massa atom"], ["E", "isotop"]],
      "A", "Nomor atom (Z) = jumlah proton dalam inti atom."),
    q("kim02-3", "Isotop adalah atom-atom dengan ...",
      [["A", "Z sama, A berbeda"], ["B", "A sama, Z berbeda"], ["C", "Z dan A sama"], ["D", "Z dan A berbeda"], ["E", "jumlah neutron sama"]],
      "A", "Isotop: nomor atom (Z) sama, nomor massa (A) berbeda."),
    q("kim02-4", "Konfigurasi elektron Na (Z=11) adalah ...",
      [["A", "2, 8, 1"], ["B", "2, 8, 8"], ["C", "2, 8"], ["D", "2, 1"], ["E", "2, 9"]],
      "A", "Na: 2, 8, 1 (kulit K=2, L=8, M=1)."),
  ],
};

const kim03: ChapterQuiz = {
  chapterId: "kim-03",
  questions: [
    q("kim03-1", "Dalam tabel periodik, unsur-unsur disusun berdasarkan kenaikan ...",
      [["A", "nomor atom"], ["B", "massa atom relatif"], ["C", "jumlah neutron"], ["D", "jari-jari atom"], ["E", "elektronegativitas"]],
      "A", "Tabel periodik modern disusun berdasarkan kenaikan nomor atom."),
    q("kim03-2", "Unsur golongan VIIA disebut ...",
      [["A", "halogen"], ["B", "alkali"], ["C", "gas mulia"], ["D", "alkali tanah"], ["E", "transisi"]],
      "A", "Golongan VIIA = halogen (F, Cl, Br, I, At)."),
    q("kim03-3", "Sifat periodik yang meningkat dari kiri ke kanan dalam satu periode adalah ...",
      [["A", "elektronegativitas"], ["B", "jari-jari atom"], ["C", "sifat logam"], ["D", "energi ionisasi menurun"], ["E", "afinitas elektron menurun"]],
      "A", "Dari kiri ke kanan: elektronegativitas dan energi ionisasi meningkat, jari-jari atom mengecil."),
  ],
};

const kim04: ChapterQuiz = {
  chapterId: "kim-04",
  questions: [
    q("kim04-1", "Ikatan ion terjadi antara ...",
      [["A", "logam dan non-logam"], ["B", "non-logam dan non-logam"], ["C", "logam dan logam"], ["D", "gas mulia"], ["E", "atom yang sama"]],
      "A", "Ikatan ion: logam (melepas elektron) + non-logam (menerima elektron)."),
    q("kim04-2", "Ikatan kovalen melibatkan ...",
      [["A", "pemakaian bersama pasangan elektron"], ["B", "pelepasan elektron"], ["C", "penerimaan elektron"], ["D", "lautan elektron"], ["E", "gaya Van der Waals"]],
      "A", "Ikatan kovalen: pemakaian bersama pasangan elektron antara atom non-logam."),
    q("kim04-3", "Senyawa NaCl memiliki jenis ikatan ...",
      [["A", "ionik"], ["B", "kovalen polar"], ["C", "kovalen non-polar"], ["D", "logam"], ["E", "hidrogen"]],
      "A", "NaCl = Na (logam) + Cl (non-logam) → ikatan ionik."),
  ],
};

const kim05: ChapterQuiz = {
  chapterId: "kim-05",
  questions: [
    q("kim05-1", "1 mol zat mengandung ... partikel (bilangan Avogadro).",
      [["A", "6,02×10²³"], ["B", "6,02×10²²"], ["C", "3,01×10²³"], ["D", "1,0×10²⁴"], ["E", "6,02×10²⁴"]],
      "A", "Bilangan Avogadro = 6,02 × 10²³ partikel/mol."),
    q("kim05-2", "Massa molar H₂O (Ar H=1, O=16) = ...",
      [["A", "18 g/mol"], ["B", "17 g/mol"], ["C", "16 g/mol"], ["D", "20 g/mol"], ["E", "34 g/mol"]],
      "A", "Mr H₂O = 2(1) + 16 = 18 g/mol."),
    q("kim05-3", "Jumlah mol dari 36 gram air (Mr=18) = ...",
      [["A", "2 mol"], ["B", "0,5 mol"], ["C", "18 mol"], ["D", "36 mol"], ["E", "1 mol"]],
      "A", "n = m/Mr = 36/18 = 2 mol."),
    q("kim05-4", "Dalam reaksi 2H₂ + O₂ → 2H₂O, perbandingan mol H₂ : O₂ = ...",
      [["A", "2 : 1"], ["B", "1 : 2"], ["C", "1 : 1"], ["D", "2 : 2"], ["E", "4 : 1"]],
      "A", "Koefisien: 2 mol H₂ : 1 mol O₂."),
  ],
};

// ── Kimia Kelas XI ──────────────────────────────────────

const kim06: ChapterQuiz = {
  chapterId: "kim-06",
  questions: [
    q("kim06-1", "Senyawa hidrokarbon yang hanya mengandung ikatan tunggal C-C disebut ...",
      [["A", "alkana"], ["B", "alkena"], ["C", "alkuna"], ["D", "alkohol"], ["E", "ester"]],
      "A", "Alkana: hidrokarbon jenuh dengan ikatan tunggal saja (CnH2n+2)."),
    q("kim06-2", "Rumus umum alkena adalah ...",
      [["A", "CnH2n"], ["B", "CnH2n+2"], ["C", "CnH2n-2"], ["D", "CnHn"], ["E", "CnH2n+1"]],
      "A", "Alkena: CnH2n (mengandung satu ikatan rangkap dua)."),
    q("kim06-3", "CH₃-CH₂-CH₃ adalah rumus struktur dari ...",
      [["A", "propana"], ["B", "etana"], ["C", "butana"], ["D", "metana"], ["E", "pentana"]],
      "A", "3 atom C berurutan = propana (C₃H₈)."),
  ],
};

const kim07: ChapterQuiz = {
  chapterId: "kim-07",
  questions: [
    q("kim07-1", "Reaksi eksoterm adalah reaksi yang ...",
      [["A", "melepaskan kalor"], ["B", "menyerap kalor"], ["C", "tidak melibatkan kalor"], ["D", "memerlukan katalis"], ["E", "berlangsung lambat"]],
      "A", "Eksoterm: ΔH < 0, melepaskan kalor ke lingkungan."),
    q("kim07-2", "Entalpi pembakaran standar (ΔH°c) selalu bernilai ...",
      [["A", "negatif"], ["B", "positif"], ["C", "nol"], ["D", "bergantung zat"], ["E", "tak terhingga"]],
      "A", "Pembakaran selalu eksoterm → ΔH°c negatif."),
    q("kim07-3", "Hukum Hess menyatakan bahwa perubahan entalpi reaksi bergantung pada ...",
      [["A", "keadaan awal dan akhir saja"], ["B", "jalur reaksi"], ["C", "waktu reaksi"], ["D", "katalis"], ["E", "jumlah tahapan"]],
      "A", "Hukum Hess: ΔH hanya bergantung pada keadaan awal dan akhir, tidak bergantung jalur."),
  ],
};

const kim08: ChapterQuiz = {
  chapterId: "kim-08",
  questions: [
    q("kim08-1", "Faktor yang mempengaruhi laju reaksi, KECUALI ...",
      [["A", "warna zat"], ["B", "konsentrasi"], ["C", "suhu"], ["D", "katalis"], ["E", "luas permukaan"]],
      "A", "Warna tidak mempengaruhi laju reaksi. Faktor: konsentrasi, suhu, katalis, luas permukaan."),
    q("kim08-2", "Menaikkan suhu akan ... laju reaksi.",
      [["A", "mempercepat"], ["B", "memperlambat"], ["C", "tidak mengubah"], ["D", "menghentikan"], ["E", "membalik"]],
      "A", "Suhu naik → energi kinetik meningkat → tumbukan efektif lebih sering → laju naik."),
    q("kim08-3", "Katalis berfungsi untuk ...",
      [["A", "menurunkan energi aktivasi"], ["B", "menaikkan energi aktivasi"], ["C", "mengubah ΔH"], ["D", "menghentikan reaksi"], ["E", "menambah produk"]],
      "A", "Katalis menurunkan energi aktivasi sehingga reaksi lebih cepat."),
  ],
};

const kim09: ChapterQuiz = {
  chapterId: "kim-09",
  questions: [
    q("kim09-1", "Pada kesetimbangan, jika konsentrasi produk ditambah, kesetimbangan bergeser ke ...",
      [["A", "kiri (reaktan)"], ["B", "kanan (produk)"], ["C", "tidak bergeser"], ["D", "ke atas"], ["E", "berhenti"]],
      "A", "Prinsip Le Chatelier: penambahan produk → geser ke kiri (reaktan)."),
    q("kim09-2", "Kenaikan tekanan pada reaksi gas akan menggeser kesetimbangan ke arah ...",
      [["A", "jumlah mol gas lebih sedikit"], ["B", "jumlah mol gas lebih banyak"], ["C", "produk selalu"], ["D", "reaktan selalu"], ["E", "tidak bergeser"]],
      "A", "Tekanan naik → bergeser ke arah jumlah mol gas lebih sedikit."),
    q("kim09-3", "Tetapan kesetimbangan Kc untuk reaksi aA + bB ⇌ cC + dD adalah ...",
      [["A", "[C]^c[D]^d / [A]^a[B]^b"], ["B", "[A]^a[B]^b / [C]^c[D]^d"], ["C", "[C][D] / [A][B]"], ["D", "c+d / a+b"], ["E", "[C]+[D] / [A]+[B]"]],
      "A", "Kc = [produk]^koefisien / [reaktan]^koefisien."),
  ],
};

const kim10: ChapterQuiz = {
  chapterId: "kim-10",
  questions: [
    q("kim10-1", "Menurut Arrhenius, asam adalah zat yang dalam air menghasilkan ...",
      [["A", "ion H⁺"], ["B", "ion OH⁻"], ["C", "ion Na⁺"], ["D", "ion Cl⁻"], ["E", "gas O₂"]],
      "A", "Asam Arrhenius: zat yang menghasilkan ion H⁺ dalam air."),
    q("kim10-2", "pH larutan asam kuat 0,01 M HCl = ...",
      [["A", "2"], ["B", "1"], ["C", "3"], ["D", "4"], ["E", "12"]],
      "A", "[H⁺] = 0,01 = 10⁻² → pH = 2."),
    q("kim10-3", "Larutan penyangga (buffer) berfungsi untuk ...",
      [["A", "mempertahankan pH"], ["B", "menaikkan pH"], ["C", "menurunkan pH"], ["D", "mempercepat reaksi"], ["E", "mengendapkan zat"]],
      "A", "Buffer mempertahankan pH meskipun ditambahkan sedikit asam atau basa."),
  ],
};

const kim11: ChapterQuiz = {
  chapterId: "kim-11",
  questions: [
    q("kim11-1", "Larutan penyangga terdiri dari ...",
      [["A", "asam lemah + basa konjugasinya"], ["B", "asam kuat + basa kuat"], ["C", "garam saja"], ["D", "air saja"], ["E", "asam kuat + asam lemah"]],
      "A", "Buffer = asam lemah + basa konjugasi (atau basa lemah + asam konjugasi)."),
    q("kim11-2", "Campuran CH₃COOH dan CH₃COONa membentuk larutan ...",
      [["A", "penyangga asam"], ["B", "penyangga basa"], ["C", "bukan penyangga"], ["D", "asam kuat"], ["E", "basa kuat"]],
      "A", "CH₃COOH (asam lemah) + CH₃COONa (basa konjugasi) = buffer asam."),
    q("kim11-3", "Jika buffer ditambahkan sedikit asam kuat, pH akan ...",
      [["A", "hampir tidak berubah"], ["B", "naik drastis"], ["C", "turun drastis"], ["D", "menjadi 7"], ["E", "menjadi 14"]],
      "A", "Buffer mempertahankan pH → perubahan sangat kecil."),
  ],
};

const kim12: ChapterQuiz = {
  chapterId: "kim-12",
  questions: [
    q("kim12-1", "Hasil kali kelarutan (Ksp) AgCl = 1,6×10⁻¹⁰. Kelarutan AgCl = ...",
      [["A", "1,26×10⁻⁵ M"], ["B", "1,6×10⁻⁵ M"], ["C", "1,6×10⁻¹⁰ M"], ["D", "8×10⁻⁵ M"], ["E", "4×10⁻⁵ M"]],
      "A", "Ksp = s² → s = √(1,6×10⁻¹⁰) ≈ 1,26×10⁻⁵ M."),
    q("kim12-2", "Endapan terbentuk jika Qc ... Ksp.",
      [["A", ">"], ["B", "<"], ["C", "="], ["D", "≤"], ["E", "tidak berhubungan"]],
      "A", "Qc > Ksp → larutan lewat jenuh → endapan terbentuk."),
    q("kim12-3", "Efek ion bersama menyebabkan kelarutan ...",
      [["A", "berkurang"], ["B", "bertambah"], ["C", "tetap"], ["D", "nol"], ["E", "tak terhingga"]],
      "A", "Penambahan ion senama mengurangi kelarutan (prinsip Le Chatelier)."),
  ],
};

const kim13: ChapterQuiz = {
  chapterId: "kim-13",
  questions: [
    q("kim13-1", "Sistem koloid terdiri dari ...",
      [["A", "fase terdispersi dan medium pendispersi"], ["B", "zat terlarut dan pelarut"], ["C", "dua zat padat"], ["D", "zat tunggal"], ["E", "campuran homogen"]],
      "A", "Koloid: fase terdispersi (1-100 nm) dalam medium pendispersi."),
    q("kim13-2", "Efek Tyndall adalah ...",
      [["A", "penghamburan cahaya oleh partikel koloid"], ["B", "penyerapan cahaya"], ["C", "pemantulan cahaya"], ["D", "pembiasan cahaya"], ["E", "polarisasi cahaya"]],
      "A", "Efek Tyndall: penghamburan berkas cahaya oleh partikel koloid."),
    q("kim13-3", "Contoh koloid tipe emulsi adalah ...",
      [["A", "susu"], ["B", "asap"], ["C", "busa"], ["D", "sol emas"], ["E", "kabut"]],
      "A", "Susu = emulsi (cair dalam cair)."),
  ],
};

// ── Kimia Kelas XII ─────────────────────────────────────

const kim14: ChapterQuiz = {
  chapterId: "kim-14",
  questions: [
    q("kim14-1", "Sifat koligatif yang bergantung pada jumlah partikel terlarut, BUKAN jenisnya, adalah ...",
      [["A", "penurunan tekanan uap"], ["B", "kenaikan titik didih"], ["C", "keduanya benar"], ["D", "keduanya salah"], ["E", "hanya penurunan tekanan uap"]],
      "A", "Semua sifat koligatif bergantung pada jumlah partikel, bukan jenis."),
    q("kim14-2", "Penurunan titik beku larutan 1 molal NaCl (Kf=1,86 °C/m, i=2) = ...",
      [["A", "3,72 °C"], ["B", "1,86 °C"], ["C", "0,93 °C"], ["D", "7,44 °C"], ["E", "2 °C"]],
      "A", "ΔTf = m × Kf × i = 1 × 1,86 × 2 = 3,72 °C."),
    q("kim14-3", "Tekanan osmotik π = ... (M = molaritas, R = tetapan gas, T = suhu Kelvin)",
      [["A", "MRT"], ["B", "MRTi"], ["C", "MR/T"], ["D", "M/RT"], ["E", "RT/M"]],
      "A", "π = MRT untuk non-elektrolit, π = MRTi untuk elektrolit."),
  ],
};

const kim15: ChapterQuiz = {
  chapterId: "kim-15",
  questions: [
    q("kim15-1", "Bilangan oksidasi Mn dalam KMnO₄ adalah ...",
      [["A", "+7"], ["B", "+2"], ["C", "+4"], ["D", "+6"], ["E", "+5"]],
      "A", "K=+1, O=-2: +1 + Mn + 4(-2) = 0 → Mn = +7."),
    q("kim15-2", "Dalam reaksi redoks, oksidasi adalah proses ...",
      [["A", "pelepasan elektron"], ["B", "penerimaan elektron"], ["C", "penambahan proton"], ["D", "pelepasan proton"], ["E", "pengurangan neutron"]],
      "A", "Oksidasi = pelepasan elektron (biloks naik)."),
    q("kim15-3", "Zat yang mengalami reduksi dalam reaksi redoks disebut ...",
      [["A", "oksidator"], ["B", "reduktor"], ["C", "katalis"], ["D", "indikator"], ["E", "elektrolit"]],
      "A", "Oksidator = zat yang mengalami reduksi (menerima elektron)."),
  ],
};

const kim16: ChapterQuiz = {
  chapterId: "kim-16",
  questions: [
    q("kim16-1", "Pada sel elektrolisis, reaksi yang terjadi di anoda adalah ...",
      [["A", "oksidasi"], ["B", "reduksi"], ["C", "netralisasi"], ["D", "presipitasi"], ["E", "sublimasi"]],
      "A", "Anoda = tempat oksidasi (baik sel volta maupun elektrolisis)."),
    q("kim16-2", "Hukum Faraday I: massa zat yang diendapkan berbanding lurus dengan ...",
      [["A", "muatan listrik (Q)"], ["B", "suhu"], ["C", "tekanan"], ["D", "volume"], ["E", "konsentrasi"]],
      "A", "m ∝ Q = It (massa berbanding lurus dengan muatan listrik)."),
    q("kim16-3", "Arus 5 A mengalir selama 2 jam. Muatan listrik = ...",
      [["A", "36.000 C"], ["B", "10 C"], ["C", "600 C"], ["D", "3.600 C"], ["E", "7.200 C"]],
      "A", "Q = It = 5 × (2×3600) = 5 × 7200 = 36.000 C."),
  ],
};

const kim17: ChapterQuiz = {
  chapterId: "kim-17",
  questions: [
    q("kim17-1", "Unsur golongan alkali (IA) memiliki sifat ...",
      [["A", "sangat reaktif dengan air"], ["B", "inert"], ["C", "non-logam"], ["D", "gas mulia"], ["E", "tidak bereaksi"]],
      "A", "Alkali (Li, Na, K, ...) sangat reaktif, bereaksi hebat dengan air."),
    q("kim17-2", "Gas mulia (VIIIA) bersifat inert karena ...",
      [["A", "konfigurasi elektron penuh (oktet)"], ["B", "memiliki 1 elektron valensi"], ["C", "bermuatan positif"], ["D", "bersifat radioaktif"], ["E", "memiliki ikatan rangkap"]],
      "A", "Gas mulia memiliki konfigurasi elektron oktet (stabil), sehingga sulit bereaksi."),
    q("kim17-3", "Logam transisi memiliki warna karena ...",
      [["A", "orbital d yang terisi sebagian"], ["B", "orbital s penuh"], ["C", "tidak memiliki elektron"], ["D", "orbital p kosong"], ["E", "ikatan logam"]],
      "A", "Elektron di orbital d yang terisi sebagian memungkinkan transisi elektron → warna."),
  ],
};

const kim18: ChapterQuiz = {
  chapterId: "kim-18",
  questions: [
    q("kim18-1", "Gugus fungsi -OH terdapat pada senyawa ...",
      [["A", "alkohol"], ["B", "aldehid"], ["C", "keton"], ["D", "ester"], ["E", "eter"]],
      "A", "Alkohol memiliki gugus fungsi -OH (hidroksil)."),
    q("kim18-2", "Reaksi esterifikasi menghasilkan ...",
      [["A", "ester dan air"], ["B", "alkohol saja"], ["C", "asam karboksilat"], ["D", "alkena"], ["E", "polimer"]],
      "A", "Asam karboksilat + alkohol → ester + air (esterifikasi)."),
    q("kim18-3", "CH₃-O-CH₃ adalah senyawa ...",
      [["A", "eter (metoksimetana)"], ["B", "alkohol"], ["C", "aldehid"], ["D", "keton"], ["E", "asam karboksilat"]],
      "A", "R-O-R' = eter. CH₃-O-CH₃ = dimetil eter (metoksimetana)."),
  ],
};

const kim19: ChapterQuiz = {
  chapterId: "kim-19",
  questions: [
    q("kim19-1", "Benzena (C₆H₆) memiliki struktur ...",
      [["A", "cincin heksagonal dengan ikatan rangkap berselang-seling"], ["B", "rantai lurus"], ["C", "rantai bercabang"], ["D", "lingkaran tanpa ikatan rangkap"], ["E", "struktur tetrahedral"]],
      "A", "Benzena: cincin 6 atom C dengan 3 ikatan rangkap berselang-seling (terdelokalisasi)."),
    q("kim19-2", "Reaksi substitusi pada benzena contohnya adalah ...",
      [["A", "nitrasi (penggantian H dengan NO₂)"], ["B", "adisi H₂"], ["C", "polimerisasi"], ["D", "pembakaran"], ["E", "fermentasi"]],
      "A", "Benzena mengalami substitusi elektrofilik, misalnya nitrasi, halogenasi, sulfonasi."),
    q("kim19-3", "Fenol adalah turunan benzena dengan gugus ...",
      [["A", "-OH"], ["B", "-COOH"], ["C", "-NH₂"], ["D", "-CHO"], ["E", "-CH₃"]],
      "A", "Fenol = C₆H₅OH (benzena dengan gugus -OH)."),
  ],
};

const kim20: ChapterQuiz = {
  chapterId: "kim-20",
  questions: [
    q("kim20-1", "Makromolekul yang tersusun dari asam amino adalah ...",
      [["A", "protein"], ["B", "karbohidrat"], ["C", "lipid"], ["D", "nukleotida"], ["E", "glukosa"]],
      "A", "Protein = polimer asam amino yang dihubungkan ikatan peptida."),
    q("kim20-2", "Polisakarida yang merupakan cadangan makanan pada tumbuhan adalah ...",
      [["A", "amilum (pati)"], ["B", "glikogen"], ["C", "selulosa"], ["D", "kitin"], ["E", "laktosa"]],
      "A", "Amilum (pati) = cadangan makanan tumbuhan. Glikogen = cadangan pada hewan."),
    q("kim20-3", "Polimer adisi terbentuk dari monomer yang memiliki ...",
      [["A", "ikatan rangkap"], ["B", "gugus -OH"], ["C", "gugus -COOH"], ["D", "ikatan ionik"], ["E", "gugus -NH₂ saja"]],
      "A", "Polimerisasi adisi terjadi pada monomer dengan ikatan rangkap (contoh: etena → polietena)."),
  ],
};

export const kimiaQuizzes: ChapterQuiz[] = [
  kim01, kim02, kim03, kim04, kim05, kim06, kim07, kim08, kim09, kim10,
  kim11, kim12, kim13, kim14, kim15, kim16, kim17, kim18, kim19, kim20,
];
