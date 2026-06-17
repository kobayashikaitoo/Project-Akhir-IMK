import type { ChapterQuiz, QuizQuestion } from "./quizzes";

const q = (id: string, question: string, options: [string, string][], correctKey: string, explanation: string): QuizQuestion => ({
  id, question, options: options.map(([key, text]) => ({ key, text })), correctKey, explanation,
});

// ── Fisika Kelas X ─────────────────────────────────────

const fis01: ChapterQuiz = {
  chapterId: "fis-01",
  questions: [
    q("fis01-1", "Satuan SI untuk besaran panjang adalah ...",
      [["A", "meter"], ["B", "kilogram"], ["C", "sekon"], ["D", "ampere"], ["E", "kelvin"]],
      "A", "Meter (m) adalah satuan SI untuk panjang."),
    q("fis01-2", "Alat ukur yang memiliki ketelitian hingga 0,01 mm adalah ...",
      [["A", "mikrometer sekrup"], ["B", "jangka sorong"], ["C", "mistar"], ["D", "neraca"], ["E", "stopwatch"]],
      "A", "Mikrometer sekrup memiliki ketelitian 0,01 mm (0,001 cm)."),
    q("fis01-3", "Besaran turunan kecepatan memiliki dimensi ...",
      [["A", "[L][T]⁻¹"], ["B", "[L][T]⁻²"], ["C", "[M][L]²[T]⁻²"], ["D", "[M][L][T]⁻²"], ["E", "[L][T]"]],
      "A", "Kecepatan = jarak/waktu → dimensi [L][T]⁻¹."),
    q("fis01-4", "Hasil pengukuran 3,25 cm memiliki angka penting sebanyak ...",
      [["A", "3 angka"], ["B", "2 angka"], ["C", "4 angka"], ["D", "5 angka"], ["E", "1 angka"]],
      "A", "3,25 memiliki 3 angka penting."),
  ],
};

const fis02: ChapterQuiz = {
  chapterId: "fis-02",
  questions: [
    q("fis02-1", "Energi yang tidak dapat diperbarui contohnya adalah ...",
      [["A", "batu bara"], ["B", "energi surya"], ["C", "energi angin"], ["D", "energi air"], ["E", "biomassa"]],
      "A", "Batu bara adalah sumber energi fosil yang tidak dapat diperbarui."),
    q("fis02-2", "Panel surya mengubah energi ... menjadi energi listrik.",
      [["A", "cahaya"], ["B", "panas bumi"], ["C", "kinetik"], ["D", "nuklir"], ["E", "kimia"]],
      "A", "Panel surya mengubah energi cahaya matahari menjadi listrik."),
    q("fis02-3", "Hukum kekekalan energi menyatakan bahwa energi ...",
      [["A", "tidak dapat diciptakan atau dimusnahkan"], ["B", "selalu bertambah"], ["C", "selalu berkurang"], ["D", "dapat diciptakan"], ["E", "tidak dapat diubah bentuknya"]],
      "A", "Energi tidak dapat diciptakan atau dimusnahkan, hanya dapat diubah bentuknya."),
  ],
};

const fis03: ChapterQuiz = {
  chapterId: "fis-03",
  questions: [
    q("fis03-1", "Gas rumah kaca utama penyebab pemanasan global adalah ...",
      [["A", "CO₂"], ["B", "O₂"], ["C", "N₂"], ["D", "H₂"], ["E", "He"]],
      "A", "Karbon dioksida (CO₂) adalah gas rumah kaca utama."),
    q("fis03-2", "Efek rumah kaca menyebabkan ...",
      [["A", "kenaikan suhu bumi"], ["B", "penurunan suhu bumi"], ["C", "penipisan ozon"], ["D", "hujan asam"], ["E", "badai salju"]],
      "A", "Efek rumah kaca menyebabkan suhu permukaan bumi meningkat."),
    q("fis03-3", "Salah satu upaya mengurangi pemanasan global adalah ...",
      [["A", "mengurangi penggunaan bahan bakar fosil"], ["B", "menebang hutan"], ["C", "membakar sampah"], ["D", "menambah industri"], ["E", "menggunakan CFC"]],
      "A", "Mengurangi bahan bakar fosil menurunkan emisi CO₂."),
  ],
};

// ── Fisika Kelas XI ─────────────────────────────────────

const fis04: ChapterQuiz = {
  chapterId: "fis-04",
  questions: [
    q("fis04-1", "Sebuah mobil bergerak 60 km ke timur dalam 2 jam. Kecepatan rata-ratanya adalah ...",
      [["A", "30 km/jam"], ["B", "60 km/jam"], ["C", "120 km/jam"], ["D", "15 km/jam"], ["E", "90 km/jam"]],
      "A", "v = s/t = 60/2 = 30 km/jam."),
    q("fis04-2", "Benda jatuh bebas dari ketinggian 20 m (g=10 m/s²). Waktu sampai tanah = ...",
      [["A", "2 s"], ["B", "4 s"], ["C", "1 s"], ["D", "3 s"], ["E", "5 s"]],
      "A", "h = ½gt² → 20 = ½(10)t² → t² = 4 → t = 2 s."),
    q("fis04-3", "Benda dilempar ke atas dengan v₀ = 20 m/s (g=10 m/s²). Tinggi maksimum = ...",
      [["A", "20 m"], ["B", "40 m"], ["C", "10 m"], ["D", "30 m"], ["E", "50 m"]],
      "A", "h_max = v₀²/(2g) = 400/20 = 20 m."),
  ],
};

const fis05: ChapterQuiz = {
  chapterId: "fis-05",
  questions: [
    q("fis05-1", "Hukum Newton I menyatakan bahwa benda akan ... jika resultan gaya = 0.",
      [["A", "diam atau bergerak lurus beraturan"], ["B", "berpercepat"], ["C", "berperlambat"], ["D", "berbelok"], ["E", "berhenti"]],
      "A", "Hukum Newton I (inersia): benda tetap diam atau GLB jika ΣF = 0."),
    q("fis05-2", "Gaya 10 N bekerja pada benda bermassa 2 kg. Percepatan benda = ...",
      [["A", "5 m/s²"], ["B", "20 m/s²"], ["C", "0,2 m/s²"], ["D", "12 m/s²"], ["E", "8 m/s²"]],
      "A", "F = ma → a = F/m = 10/2 = 5 m/s²."),
    q("fis05-3", "Berat benda di bumi (g=10 m/s²) jika massanya 5 kg adalah ...",
      [["A", "50 N"], ["B", "5 N"], ["C", "0,5 N"], ["D", "15 N"], ["E", "500 N"]],
      "A", "W = mg = 5 × 10 = 50 N."),
  ],
};

const fis06: ChapterQuiz = {
  chapterId: "fis-06",
  questions: [
    q("fis06-1", "Usaha yang dilakukan gaya 20 N yang memindahkan benda sejauh 5 m searah gaya = ...",
      [["A", "100 J"], ["B", "4 J"], ["C", "25 J"], ["D", "15 J"], ["E", "200 J"]],
      "A", "W = F × s = 20 × 5 = 100 J."),
    q("fis06-2", "Energi kinetik benda bermassa 4 kg yang bergerak 3 m/s adalah ...",
      [["A", "18 J"], ["B", "12 J"], ["C", "36 J"], ["D", "6 J"], ["E", "24 J"]],
      "A", "Ek = ½mv² = ½ × 4 × 9 = 18 J."),
    q("fis06-3", "Energi potensial benda 2 kg pada ketinggian 10 m (g=10 m/s²) = ...",
      [["A", "200 J"], ["B", "20 J"], ["C", "100 J"], ["D", "40 J"], ["E", "2000 J"]],
      "A", "Ep = mgh = 2 × 10 × 10 = 200 J."),
  ],
};

const fis07: ChapterQuiz = {
  chapterId: "fis-07",
  questions: [
    q("fis07-1", "Momentum benda bermassa 3 kg yang bergerak 4 m/s adalah ...",
      [["A", "12 kg⋅m/s"], ["B", "7 kg⋅m/s"], ["C", "0,75 kg⋅m/s"], ["D", "1,33 kg⋅m/s"], ["E", "16 kg⋅m/s"]],
      "A", "p = mv = 3 × 4 = 12 kg⋅m/s."),
    q("fis07-2", "Pada tumbukan lenting sempurna, yang kekal adalah ...",
      [["A", "momentum dan energi kinetik"], ["B", "momentum saja"], ["C", "energi kinetik saja"], ["D", "energi potensial"], ["E", "tidak ada yang kekal"]],
      "A", "Pada tumbukan lenting sempurna, momentum dan energi kinetik keduanya kekal."),
    q("fis07-3", "Impuls yang dihasilkan gaya 50 N selama 0,2 s adalah ...",
      [["A", "10 N⋅s"], ["B", "250 N⋅s"], ["C", "50 N⋅s"], ["D", "0,004 N⋅s"], ["E", "100 N⋅s"]],
      "A", "I = FΔt = 50 × 0,2 = 10 N⋅s."),
  ],
};

const fis08: ChapterQuiz = {
  chapterId: "fis-08",
  questions: [
    q("fis08-1", "Momen inersia partikel bermassa 2 kg yang berjarak 3 m dari sumbu putar = ...",
      [["A", "18 kg⋅m²"], ["B", "6 kg⋅m²"], ["C", "9 kg⋅m²"], ["D", "12 kg⋅m²"], ["E", "5 kg⋅m²"]],
      "A", "I = mr² = 2 × 9 = 18 kg⋅m²."),
    q("fis08-2", "Torsi yang dihasilkan gaya 10 N pada lengan 0,5 m (tegak lurus) = ...",
      [["A", "5 N⋅m"], ["B", "20 N⋅m"], ["C", "0,5 N⋅m"], ["D", "10 N⋅m"], ["E", "15 N⋅m"]],
      "A", "τ = F × r = 10 × 0,5 = 5 N⋅m."),
    q("fis08-3", "Syarat benda dalam kesetimbangan statis adalah ...",
      [["A", "ΣF = 0 dan Στ = 0"], ["B", "ΣF = 0 saja"], ["C", "Στ = 0 saja"], ["D", "ΣF ≠ 0"], ["E", "Στ ≠ 0"]],
      "A", "Kesetimbangan statis memerlukan resultan gaya = 0 dan resultan torsi = 0."),
  ],
};

const fis09: ChapterQuiz = {
  chapterId: "fis-09",
  questions: [
    q("fis09-1", "Modulus elastisitas (Young) didefinisikan sebagai perbandingan antara ...",
      [["A", "tegangan dan regangan"], ["B", "gaya dan massa"], ["C", "panjang dan luas"], ["D", "energi dan waktu"], ["E", "tekanan dan volume"]],
      "A", "E = tegangan (stress) / regangan (strain)."),
    q("fis09-2", "Pegas dengan k = 200 N/m ditarik 0,1 m. Gaya pegas = ...",
      [["A", "20 N"], ["B", "200 N"], ["C", "2 N"], ["D", "2000 N"], ["E", "0,2 N"]],
      "A", "F = kx = 200 × 0,1 = 20 N (Hukum Hooke)."),
    q("fis09-3", "Energi potensial pegas yang diregangkan 0,05 m dengan k = 400 N/m = ...",
      [["A", "0,5 J"], ["B", "1 J"], ["C", "10 J"], ["D", "20 J"], ["E", "2 J"]],
      "A", "Ep = ½kx² = ½ × 400 × 0,0025 = 0,5 J."),
  ],
};

const fis10: ChapterQuiz = {
  chapterId: "fis-10",
  questions: [
    q("fis10-1", "Tekanan hidrostatis pada kedalaman 5 m di air (ρ=1000 kg/m³, g=10 m/s²) = ...",
      [["A", "50.000 Pa"], ["B", "5.000 Pa"], ["C", "500 Pa"], ["D", "100.000 Pa"], ["E", "1.000 Pa"]],
      "A", "P = ρgh = 1000 × 10 × 5 = 50.000 Pa."),
    q("fis10-2", "Hukum Archimedes menyatakan benda dalam fluida mendapat gaya angkat sebesar ...",
      [["A", "berat fluida yang dipindahkan"], ["B", "massa benda"], ["C", "volume benda"], ["D", "tekanan atmosfer"], ["E", "gaya gravitasi"]],
      "A", "F_archimedes = ρ_fluida × g × V_tercelup = berat fluida yang dipindahkan."),
    q("fis10-3", "Menurut Hukum Bernoulli, pada aliran fluida yang kecepatannya tinggi, tekanannya ...",
      [["A", "rendah"], ["B", "tinggi"], ["C", "sama"], ["D", "nol"], ["E", "tidak tentu"]],
      "A", "Bernoulli: kecepatan tinggi → tekanan rendah (dan sebaliknya)."),
  ],
};

const fis11: ChapterQuiz = {
  chapterId: "fis-11",
  questions: [
    q("fis11-1", "Suhu 37°C jika dikonversi ke Kelvin = ...",
      [["A", "310 K"], ["B", "37 K"], ["C", "273 K"], ["D", "347 K"], ["E", "100 K"]],
      "A", "T(K) = T(°C) + 273 = 37 + 273 = 310 K."),
    q("fis11-2", "Kalor yang diperlukan untuk memanaskan 2 kg air dari 20°C ke 70°C (c=4200 J/kg°C) = ...",
      [["A", "420.000 J"], ["B", "42.000 J"], ["C", "420 J"], ["D", "840.000 J"], ["E", "84.000 J"]],
      "A", "Q = mcΔT = 2 × 4200 × 50 = 420.000 J."),
    q("fis11-3", "Perpindahan kalor tanpa medium perantara disebut ...",
      [["A", "radiasi"], ["B", "konduksi"], ["C", "konveksi"], ["D", "isolasi"], ["E", "evaporasi"]],
      "A", "Radiasi adalah perpindahan kalor tanpa medium (melalui gelombang elektromagnetik)."),
  ],
};

const fis12: ChapterQuiz = {
  chapterId: "fis-12",
  questions: [
    q("fis12-1", "Hukum Boyle menyatakan pada suhu tetap, PV = ...",
      [["A", "konstan"], ["B", "nol"], ["C", "bertambah"], ["D", "berkurang"], ["E", "berubah-ubah"]],
      "A", "Hukum Boyle: pada suhu tetap, P × V = konstan."),
    q("fis12-2", "Gas ideal pada tekanan 2 atm dan volume 3 L. Jika tekanan menjadi 6 atm (suhu tetap), volume = ...",
      [["A", "1 L"], ["B", "9 L"], ["C", "0,5 L"], ["D", "6 L"], ["E", "18 L"]],
      "A", "P₁V₁ = P₂V₂ → 2×3 = 6×V₂ → V₂ = 1 L."),
    q("fis12-3", "Energi kinetik rata-rata partikel gas ideal bergantung pada ...",
      [["A", "suhu mutlak"], ["B", "volume saja"], ["C", "tekanan saja"], ["D", "massa partikel saja"], ["E", "jumlah partikel"]],
      "A", "Ek rata-rata = (3/2)kT, bergantung pada suhu mutlak T."),
  ],
};

// ── Fisika Kelas XII ────────────────────────────────────

const fis13: ChapterQuiz = {
  chapterId: "fis-13",
  questions: [
    q("fis13-1", "Hukum Ohm menyatakan bahwa V = ...",
      [["A", "IR"], ["B", "I/R"], ["C", "R/I"], ["D", "I+R"], ["E", "I²R"]],
      "A", "V = IR (tegangan = arus × hambatan)."),
    q("fis13-2", "Dua hambatan 6 Ω dan 3 Ω disusun paralel. Hambatan pengganti = ...",
      [["A", "2 Ω"], ["B", "9 Ω"], ["C", "4,5 Ω"], ["D", "3 Ω"], ["E", "1,5 Ω"]],
      "A", "1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 → Rp = 2 Ω."),
    q("fis13-3", "Daya listrik pada hambatan 10 Ω yang dialiri arus 2 A = ...",
      [["A", "40 W"], ["B", "20 W"], ["C", "5 W"], ["D", "100 W"], ["E", "200 W"]],
      "A", "P = I²R = 4 × 10 = 40 W."),
  ],
};

const fis14: ChapterQuiz = {
  chapterId: "fis-14",
  questions: [
    q("fis14-1", "Hukum Coulomb: gaya antara dua muatan q₁ dan q₂ berbanding lurus dengan ...",
      [["A", "q₁ × q₂ dan berbanding terbalik dengan r²"], ["B", "q₁ + q₂"], ["C", "r²"], ["D", "q₁ × q₂ × r²"], ["E", "q₁/r"]],
      "A", "F = kq₁q₂/r² (berbanding lurus dengan hasil kali muatan, berbanding terbalik dengan kuadrat jarak)."),
    q("fis14-2", "Muatan 4 μC dan 2 μC terpisah 0,3 m. Gaya Coulomb = ... (k = 9×10⁹)",
      [["A", "0,8 N"], ["B", "8 N"], ["C", "80 N"], ["D", "0,08 N"], ["E", "800 N"]],
      "A", "F = kq₁q₂/r² = 9×10⁹ × 4×10⁻⁶ × 2×10⁻⁶ / 0,09 = 0,8 N."),
    q("fis14-3", "Medan listrik di suatu titik didefinisikan sebagai ...",
      [["A", "gaya per satuan muatan positif"], ["B", "muatan per satuan gaya"], ["C", "energi per satuan volume"], ["D", "potensial per satuan jarak"], ["E", "arus per satuan luas"]],
      "A", "E = F/q (gaya listrik per satuan muatan uji positif)."),
  ],
};

const fis15: ChapterQuiz = {
  chapterId: "fis-15",
  questions: [
    q("fis15-1", "Gaya Lorentz pada kawat berarus dalam medan magnet: F = ...",
      [["A", "BIL sin θ"], ["B", "BIL cos θ"], ["C", "BI/L"], ["D", "BL/I"], ["E", "B²IL"]],
      "A", "Gaya Lorentz: F = BIL sin θ."),
    q("fis15-2", "Kawat panjang 0,5 m berarus 4 A dalam medan magnet 0,2 T (tegak lurus). Gaya = ...",
      [["A", "0,4 N"], ["B", "4 N"], ["C", "0,04 N"], ["D", "40 N"], ["E", "1 N"]],
      "A", "F = BIL sin 90° = 0,2 × 4 × 0,5 × 1 = 0,4 N."),
    q("fis15-3", "Arah gaya Lorentz ditentukan oleh ...",
      [["A", "kaidah tangan kanan"], ["B", "kaidah tangan kiri"], ["C", "hukum Ohm"], ["D", "hukum Faraday"], ["E", "hukum Ampere"]],
      "A", "Arah gaya Lorentz ditentukan dengan kaidah tangan kanan."),
  ],
};

const fis16: ChapterQuiz = {
  chapterId: "fis-16",
  questions: [
    q("fis16-1", "Pada rangkaian RLC seri resonansi, impedansi minimum terjadi saat ...",
      [["A", "XL = XC"], ["B", "XL > XC"], ["C", "XL < XC"], ["D", "R = 0"], ["E", "f = 0"]],
      "A", "Pada resonansi, reaktansi induktif = reaktansi kapasitif (XL = XC), sehingga Z = R."),
    q("fis16-2", "Tegangan efektif (RMS) dari tegangan puncak 220√2 V adalah ...",
      [["A", "220 V"], ["B", "220√2 V"], ["C", "110 V"], ["D", "440 V"], ["E", "110√2 V"]],
      "A", "V_eff = V_puncak / √2 = 220√2 / √2 = 220 V."),
    q("fis16-3", "Transformator step-up berfungsi untuk ...",
      [["A", "menaikkan tegangan"], ["B", "menurunkan tegangan"], ["C", "menaikkan arus"], ["D", "menurunkan daya"], ["E", "mengubah frekuensi"]],
      "A", "Transformator step-up menaikkan tegangan (Ns > Np)."),
  ],
};

const fis17: ChapterQuiz = {
  chapterId: "fis-17",
  questions: [
    q("fis17-1", "Menurut teori relativitas khusus Einstein, kecepatan cahaya adalah ...",
      [["A", "sama untuk semua pengamat"], ["B", "bergantung pada kecepatan sumber"], ["C", "bergantung pada medium saja"], ["D", "berbeda untuk pengamat bergerak"], ["E", "tak terhingga"]],
      "A", "Postulat Einstein: kecepatan cahaya dalam vakum sama untuk semua pengamat."),
    q("fis17-2", "Faktor Lorentz γ = 1/√(1-v²/c²). Jika v = 0,8c, maka γ = ...",
      [["A", "5/3"], ["B", "3/5"], ["C", "1"], ["D", "5/4"], ["E", "4/5"]],
      "A", "γ = 1/√(1-0,64) = 1/√0,36 = 1/0,6 = 5/3."),
    q("fis17-3", "Dilatasi waktu berarti waktu bagi pengamat yang bergerak ...",
      [["A", "lebih lambat"], ["B", "lebih cepat"], ["C", "sama"], ["D", "berhenti"], ["E", "mundur"]],
      "A", "Dilatasi waktu: waktu berjalan lebih lambat bagi pengamat yang bergerak relatif."),
  ],
};

const fis18: ChapterQuiz = {
  chapterId: "fis-18",
  questions: [
    q("fis18-1", "Efek fotolistrik menunjukkan bahwa cahaya bersifat ...",
      [["A", "partikel (kuantum)"], ["B", "gelombang saja"], ["C", "tidak memiliki energi"], ["D", "memiliki massa"], ["E", "statis"]],
      "A", "Efek fotolistrik membuktikan cahaya bersifat partikel (foton) dengan energi E = hf."),
    q("fis18-2", "Energi foton dengan frekuensi 6×10¹⁴ Hz (h = 6,6×10⁻³⁴ J⋅s) = ...",
      [["A", "3,96×10⁻¹⁹ J"], ["B", "6,6×10⁻²⁰ J"], ["C", "3,96×10⁻²¹ J"], ["D", "1,1×10⁻¹⁹ J"], ["E", "6,6×10⁻³⁴ J"]],
      "A", "E = hf = 6,6×10⁻³⁴ × 6×10¹⁴ = 3,96×10⁻¹⁹ J."),
    q("fis18-3", "Panjang gelombang de Broglie partikel: λ = ...",
      [["A", "h/mv"], ["B", "mv/h"], ["C", "hv/m"], ["D", "m/hv"], ["E", "h²/mv"]],
      "A", "λ = h/(mv) = h/p, di mana p = momentum partikel."),
  ],
};

const fis19: ChapterQuiz = {
  chapterId: "fis-19",
  questions: [
    q("fis19-1", "Reaksi fusi nuklir adalah proses ...",
      [["A", "penggabungan inti atom ringan"], ["B", "pembelahan inti atom berat"], ["C", "peluruhan radioaktif"], ["D", "penangkapan elektron"], ["E", "pemancaran neutron"]],
      "A", "Fusi = penggabungan inti ringan (contoh: hidrogen → helium di matahari)."),
    q("fis19-2", "Waktu paruh suatu isotop adalah 10 tahun. Setelah 30 tahun, sisa = ... dari jumlah awal.",
      [["A", "1/8"], ["B", "1/4"], ["C", "1/2"], ["D", "1/3"], ["E", "1/6"]],
      "A", "30 tahun = 3 waktu paruh. Sisa = (½)³ = 1/8."),
    q("fis19-3", "Dalam reaksi inti, yang kekal adalah ...",
      [["A", "nomor massa dan nomor atom"], ["B", "energi saja"], ["C", "massa saja"], ["D", "kecepatan"], ["E", "volume"]],
      "A", "Nomor massa (A) dan nomor atom (Z) kekal dalam reaksi inti."),
  ],
};

export const fisikaQuizzes: ChapterQuiz[] = [
  fis01, fis02, fis03, fis04, fis05, fis06, fis07, fis08, fis09, fis10,
  fis11, fis12, fis13, fis14, fis15, fis16, fis17, fis18, fis19,
];
