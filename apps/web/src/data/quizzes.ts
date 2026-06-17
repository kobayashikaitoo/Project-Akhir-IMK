export interface QuizQuestion {
  id: string;
  question: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
}

export interface ChapterQuiz {
  chapterId: string;
  questions: QuizQuestion[];
}

const q = (id: string, question: string, options: [string, string][], correctKey: string, explanation: string): QuizQuestion => ({
  id,
  question,
  options: options.map(([key, text]) => ({ key, text })),
  correctKey,
  explanation,
});

// ── Bab 1: Eksponen dan Logaritma ─────────────────────

const quiz01: ChapterQuiz = {
  chapterId: "mat-01",
  questions: [
    q("mat01-1", "Sederhanakan: 2³ × 2⁵",
      [["A", "2⁸"], ["B", "2¹⁵"], ["C", "4⁸"], ["D", "2²"], ["E", "4¹⁵"]],
      "A", "2³ × 2⁵ = 2^(3+5) = 2⁸ = 256. Gunakan sifat aᵐ × aⁿ = aᵐ⁺ⁿ."),
    q("mat01-2", "Nilai dari 5⁰ + 3⁻¹ adalah ...",
      [["A", "1⅓"], ["B", "4/3"], ["C", "2"], ["D", "0"], ["E", "1"]],
      "A", "5⁰ = 1 dan 3⁻¹ = 1/3. Jadi 1 + 1/3 = 1⅓."),
    q("mat01-3", "Sederhanakan: √50",
      [["A", "5√2"], ["B", "2√5"], ["C", "25√2"], ["D", "10√5"], ["E", "5√5"]],
      "A", "√50 = √(25×2) = 5√2."),
    q("mat01-4", "log 1000 = ...",
      [["A", "3"], ["B", "10"], ["C", "100"], ["D", "1000"], ["E", "0"]],
      "A", "log 1000 = log 10³ = 3 log 10 = 3 × 1 = 3."),
    q("mat01-5", "Jika log 2 = 0,301 dan log 3 = 0,477, maka log 6 = ...",
      [["A", "0,778"], ["B", "0,602"], ["C", "1,477"], ["D", "0,176"], ["E", "0,954"]],
      "A", "log 6 = log(2×3) = log 2 + log 3 = 0,301 + 0,477 = 0,778."),
  ],
};

// ── Bab 2: Barisan dan Deret ──────────────────────────

const quiz02: ChapterQuiz = {
  chapterId: "mat-02",
  questions: [
    q("mat02-1", "Suku ke-12 dari barisan aritmetika 5, 9, 13, 17, ... adalah ...",
      [["A", "49"], ["B", "45"], ["C", "53"], ["D", "41"], ["E", "57"]],
      "A", "a=5, b=4. U₁₂ = 5 + (12−1)×4 = 5 + 44 = 49."),
    q("mat02-2", "Jumlah 10 suku pertama dari deret aritmetika 2 + 5 + 8 + ... adalah ...",
      [["A", "155"], ["B", "140"], ["C", "170"], ["D", "145"], ["E", "160"]],
      "A", "a=2, b=3. S₁₀ = 10/2 × (2×2 + 9×3) = 5 × (4+27) = 5 × 31 = 155."),
    q("mat02-3", "Suku ke-6 dari barisan geometri 3, 6, 12, 24, ... adalah ...",
      [["A", "96"], ["B", "48"], ["C", "192"], ["D", "64"], ["E", "72"]],
      "A", "a=3, r=2. U₆ = 3 × 2⁵ = 3 × 32 = 96."),
    q("mat02-4", "Jumlah deret geometri tak hingga: 8 + 4 + 2 + 1 + ... = ...",
      [["A", "16"], ["B", "15"], ["C", "12"], ["D", "20"], ["E", "14"]],
      "A", "a=8, r=½. S∞ = 8/(1−½) = 8/(½) = 16."),
    q("mat02-5", "Modal Rp1.000.000 dengan bunga majemuk 10% per tahun. Jumlah setelah 3 tahun adalah ...",
      [["A", "Rp1.331.000"], ["B", "Rp1.300.000"], ["C", "Rp1.210.000"], ["D", "Rp1.330.000"], ["E", "Rp1.250.000"]],
      "A", "M₃ = 1.000.000 × (1,1)³ = 1.000.000 × 1,331 = Rp1.331.000."),
  ],
};

// ── Bab 3: Vektor ─────────────────────────────────────

const quiz03: ChapterQuiz = {
  chapterId: "mat-03",
  questions: [
    q("mat03-1", "Panjang vektor a⃗ = (5, 12) adalah ...",
      [["A", "13"], ["B", "17"], ["C", "7"], ["D", "15"], ["E", "10"]],
      "A", "|a⃗| = √(25 + 144) = √169 = 13."),
    q("mat03-2", "Jika a⃗ = (3, −2) dan b⃗ = (1, 4), maka a⃗ + b⃗ = ...",
      [["A", "(4, 2)"], ["B", "(2, −6)"], ["C", "(4, −2)"], ["D", "(2, 2)"], ["E", "(3, 2)"]],
      "A", "(3+1, −2+4) = (4, 2)."),
    q("mat03-3", "Jika a⃗ = (2, 3), maka 4a⃗ = ...",
      [["A", "(8, 12)"], ["B", "(6, 7)"], ["C", "(2, 12)"], ["D", "(8, 3)"], ["E", "(4, 6)"]],
      "A", "4 × (2, 3) = (8, 12)."),
    q("mat03-4", "Vektor satuan dari v⃗ = (6, 8) adalah ...",
      [["A", "(3/5, 4/5)"], ["B", "(6/10, 8/10)"], ["C", "(1, 1)"], ["D", "(3, 4)"], ["E", "(6/14, 8/14)"]],
      "A", "|v⃗| = √(36+64) = √100 = 10. v̂ = (6/10, 8/10) = (3/5, 4/5)."),
    q("mat03-5", "a⃗ = (4, 1) dan b⃗ = (2, 5). a⃗ − b⃗ = ...",
      [["A", "(2, −4)"], ["B", "(6, 6)"], ["C", "(2, 4)"], ["D", "(−2, 4)"], ["E", "(8, 5)"]],
      "A", "(4−2, 1−5) = (2, −4)."),
  ],
};

// ── Bab 4: Trigonometri ───────────────────────────────

const quiz04: ChapterQuiz = {
  chapterId: "mat-04",
  questions: [
    q("mat04-1", "Nilai sin 30° + cos 60° = ...",
      [["A", "1"], ["B", "0"], ["C", "½"], ["D", "√3"], ["E", "½√3"]],
      "A", "sin 30° = ½, cos 60° = ½. Jadi ½ + ½ = 1."),
    q("mat04-2", "Nilai tan 45° × cos 0° = ...",
      [["A", "1"], ["B", "0"], ["C", "2"], ["D", "½"], ["E", "√2"]],
      "A", "tan 45° = 1, cos 0° = 1. Jadi 1 × 1 = 1."),
    q("mat04-3", "sin 150° = ...",
      [["A", "½"], ["B", "−½"], ["C", "½√3"], ["D", "−½√3"], ["E", "1"]],
      "A", "sin 150° = sin(180°−30°) = sin 30° = ½."),
    q("mat04-4", "Jika sin α = 3/5 dan α di kuadran I, maka cos α = ...",
      [["A", "4/5"], ["B", "3/4"], ["C", "5/3"], ["D", "−4/5"], ["E", "5/4"]],
      "A", "sin²α + cos²α = 1 → cos²α = 1 − 9/25 = 16/25 → cos α = 4/5."),
    q("mat04-5", "cos 240° = ...",
      [["A", "−½"], ["B", "½"], ["C", "−½√3"], ["D", "½√3"], ["E", "−1"]],
      "A", "cos 240° = cos(180°+60°) = −cos 60° = −½."),
  ],
};

// ── Bab 5: SPLDV dan SPLTV ───────────────────────────

const quiz05: ChapterQuiz = {
  chapterId: "mat-05",
  questions: [
    q("mat05-1", "Penyelesaian dari x + y = 8 dan x − y = 2 adalah ...",
      [["A", "x=5, y=3"], ["B", "x=4, y=4"], ["C", "x=6, y=2"], ["D", "x=3, y=5"], ["E", "x=7, y=1"]],
      "A", "Jumlahkan: 2x = 10 → x = 5. y = 8−5 = 3."),
    q("mat05-2", "Penyelesaian dari 2x + 3y = 12 dan x − y = 1 adalah ...",
      [["A", "x=3, y=2"], ["B", "x=2, y=3"], ["C", "x=4, y=1"], ["D", "x=1, y=4"], ["E", "x=5, y=0"]],
      "A", "Dari persamaan 2: x = y+1. Substitusi: 2(y+1)+3y=12 → 5y+2=12 → y=2, x=3."),
    q("mat05-3", "Jika 3x − 2y = 7 dan x + y = 4, maka x = ...",
      [["A", "3"], ["B", "2"], ["C", "1"], ["D", "4"], ["E", "5"]],
      "A", "y = 4−x. 3x − 2(4−x) = 7 → 3x − 8 + 2x = 7 → 5x = 15 → x = 3."),
    q("mat05-4", "Harga 3 buku dan 2 pensil Rp15.000. Harga 1 buku dan 4 pensil Rp11.000. Harga 1 buku adalah ...",
      [["A", "Rp3.800"], ["B", "Rp3.000"], ["C", "Rp4.000"], ["D", "Rp2.500"], ["E", "Rp3.500"]],
      "A", "3b+2p=15000 dan b+4p=11000. Kalikan pers.2 dengan 3: 3b+12p=33000. Kurangkan: 10p=18000, p=1800. b=11000−7200=3800."),
    q("mat05-5", "Penyelesaian SPLTV: x+y+z=6, x−y+z=2, x+y−z=0 adalah ...",
      [["A", "x=1, y=2, z=3"], ["B", "x=2, y=1, z=3"], ["C", "x=3, y=2, z=1"], ["D", "x=2, y=3, z=1"], ["E", "x=1, y=3, z=2"]],
      "A", "(1)+(2): 2x+2z=8→x+z=4. (1)+(3): 2x+2y=6→x+y=3. Dari x+z=4 dan x+y=3 dan x+y+z=6: z=3, y=2, x=1."),
  ],
};

// ── Bab 6: Fungsi Kuadrat ─────────────────────────────

const quiz06: ChapterQuiz = {
  chapterId: "mat-06",
  questions: [
    q("mat06-1", "Titik puncak dari f(x) = x² − 6x + 5 adalah ...",
      [["A", "(3, −4)"], ["B", "(3, 4)"], ["C", "(−3, −4)"], ["D", "(6, 5)"], ["E", "(−3, 4)"]],
      "A", "xp = 6/2 = 3. yp = 9−18+5 = −4. Puncak: (3, −4)."),
    q("mat06-2", "Akar-akar persamaan x² − 5x + 6 = 0 adalah ...",
      [["A", "2 dan 3"], ["B", "−2 dan −3"], ["C", "1 dan 6"], ["D", "−1 dan −6"], ["E", "3 dan −2"]],
      "A", "x²−5x+6 = (x−2)(x−3) = 0. Jadi x=2 atau x=3."),
    q("mat06-3", "Grafik f(x) = −x² + 4 terbuka ke ...",
      [["A", "Bawah"], ["B", "Atas"], ["C", "Kanan"], ["D", "Kiri"], ["E", "Tidak tentu"]],
      "A", "a = −1 < 0, sehingga parabola terbuka ke bawah."),
    q("mat06-4", "Diskriminan dari f(x) = 2x² + 3x − 5 adalah ...",
      [["A", "49"], ["B", "−31"], ["C", "31"], ["D", "−49"], ["E", "19"]],
      "A", "D = b²−4ac = 9−4(2)(−5) = 9+40 = 49."),
    q("mat06-5", "Fungsi kuadrat yang melalui titik (1,0), (3,0), dan (0,6) adalah ...",
      [["A", "f(x) = 2(x−1)(x−3)"], ["B", "f(x) = (x−1)(x−3)"], ["C", "f(x) = 2(x+1)(x+3)"], ["D", "f(x) = (x−1)(x+3)"], ["E", "f(x) = −2(x−1)(x−3)"]],
      "A", "Akar di x=1 dan x=3: f(x)=a(x−1)(x−3). f(0)=a(−1)(−3)=3a=6→a=2. f(x)=2(x−1)(x−3)."),
  ],
};

// ── Bab 7: Statistika ─────────────────────────────────

const quiz07: ChapterQuiz = {
  chapterId: "mat-07",
  questions: [
    q("mat07-1", "Mean dari data 4, 6, 8, 10, 12 adalah ...",
      [["A", "8"], ["B", "7"], ["C", "9"], ["D", "10"], ["E", "6"]],
      "A", "Mean = (4+6+8+10+12)/5 = 40/5 = 8."),
    q("mat07-2", "Median dari data 3, 7, 2, 9, 5, 1, 8 adalah ...",
      [["A", "5"], ["B", "7"], ["C", "3"], ["D", "8"], ["E", "9"]],
      "A", "Urutkan: 1, 2, 3, 5, 7, 8, 9. Median (data ke-4) = 5."),
    q("mat07-3", "Modus dari data 2, 3, 3, 5, 5, 5, 7, 8 adalah ...",
      [["A", "5"], ["B", "3"], ["C", "2"], ["D", "7"], ["E", "8"]],
      "A", "Nilai 5 muncul paling sering (3 kali)."),
    q("mat07-4", "Jangkauan dari data 12, 5, 8, 15, 3, 20 adalah ...",
      [["A", "17"], ["B", "12"], ["C", "15"], ["D", "8"], ["E", "20"]],
      "A", "Range = 20 − 3 = 17."),
    q("mat07-5", "Variansi dari data 2, 4, 6 (mean = 4) adalah ...",
      [["A", "8/3"], ["B", "4"], ["C", "8"], ["D", "2"], ["E", "16/3"]],
      "A", "s² = ((2−4)² + (4−4)² + (6−4)²)/3 = (4+0+4)/3 = 8/3."),
  ],
};

// ── Bab 8: Peluang ────────────────────────────────────

const quiz08: ChapterQuiz = {
  chapterId: "mat-08",
  questions: [
    q("mat08-1", "Peluang muncul mata dadu prima saat melempar satu dadu adalah ...",
      [["A", "½"], ["B", "⅓"], ["C", "⅔"], ["D", "¼"], ["E", "⅙"]],
      "A", "Prima: {2, 3, 5} → 3 dari 6 = ½."),
    q("mat08-2", "Peluang komplemen: jika P(A) = 0,3 maka P(A') = ...",
      [["A", "0,7"], ["B", "0,3"], ["C", "1"], ["D", "0"], ["E", "0,5"]],
      "A", "P(A') = 1 − P(A) = 1 − 0,3 = 0,7."),
    q("mat08-3", "Dua koin dilempar. Peluang keduanya gambar = ...",
      [["A", "¼"], ["B", "½"], ["C", "¾"], ["D", "⅓"], ["E", "1"]],
      "A", "S = {AA, AG, GA, GG}. P(GG) = 1/4."),
    q("mat08-4", "Dari 52 kartu, peluang terambil kartu As = ...",
      [["A", "1/13"], ["B", "1/4"], ["C", "1/52"], ["D", "4/13"], ["E", "1/26"]],
      "A", "Ada 4 kartu As dari 52 kartu. P = 4/52 = 1/13."),
    q("mat08-5", "Frekuensi harapan muncul angka genap dalam 200 lemparan dadu = ...",
      [["A", "100"], ["B", "50"], ["C", "200"], ["D", "66"], ["E", "150"]],
      "A", "P(genap) = 3/6 = ½. f = 200 × ½ = 100."),
  ],
};

// ── Bab 9: Fungsi Komposisi & Invers ─────────────────

const quiz09: ChapterQuiz = {
  chapterId: "mat-09",
  questions: [
    q("mat09-1", "f(x) = 2x+1, g(x) = x². (f∘g)(3) = ...",
      [["A", "19"], ["B", "49"], ["C", "7"], ["D", "10"], ["E", "13"]],
      "A", "g(3)=9. f(9) = 2(9)+1 = 19."),
    q("mat09-2", "f(x) = 3x−2. Invers f⁻¹(x) = ...",
      [["A", "(x+2)/3"], ["B", "(x−2)/3"], ["C", "3x+2"], ["D", "x/3+2"], ["E", "(2−x)/3"]],
      "A", "y = 3x−2 → x = (y+2)/3. f⁻¹(x) = (x+2)/3."),
    q("mat09-3", "f(x)=x+3, g(x)=2x. (g∘f)(x) = ...",
      [["A", "2x+6"], ["B", "2x+3"], ["C", "x+6"], ["D", "2x−6"], ["E", "x+3"]],
      "A", "(g∘f)(x) = g(f(x)) = g(x+3) = 2(x+3) = 2x+6."),
    q("mat09-4", "Jika f⁻¹(x) = (x−1)/2, maka f(x) = ...",
      [["A", "2x+1"], ["B", "2x−1"], ["C", "x/2+1"], ["D", "(x+1)/2"], ["E", "x−1"]],
      "A", "y=(x−1)/2 → x=2y+1. Jadi f(x)=2x+1."),
    q("mat09-5", "f(x)=x², g(x)=x+1. (f∘g)(2) = ...",
      [["A", "9"], ["B", "5"], ["C", "4"], ["D", "8"], ["E", "3"]],
      "A", "g(2)=3. f(3)=9."),
  ],
};

// ── Bab 10-16 skeleton quizzes (3 questions each) ────

const quiz10: ChapterQuiz = {
  chapterId: "mat-10",
  questions: [
    q("mat10-1", "Keliling lingkaran dengan jari-jari 7 cm adalah ... (π = 22/7)",
      [["A", "44 cm"], ["B", "154 cm"], ["C", "22 cm"], ["D", "88 cm"], ["E", "28 cm"]],
      "A", "K = 2πr = 2 × 22/7 × 7 = 44 cm."),
    q("mat10-2", "Luas juring dengan sudut pusat 90° dan jari-jari 14 cm adalah ... (π = 22/7)",
      [["A", "154 cm²"], ["B", "616 cm²"], ["C", "77 cm²"], ["D", "308 cm²"], ["E", "44 cm²"]],
      "A", "L = (90/360) × πr² = ¼ × 22/7 × 196 = ¼ × 616 = 154 cm²."),
    q("mat10-3", "Sudut pusat yang menghadap busur sama dengan sudut keliling 35° adalah ...",
      [["A", "70°"], ["B", "35°"], ["C", "17.5°"], ["D", "105°"], ["E", "140°"]],
      "A", "Sudut pusat = 2 × sudut keliling = 2 × 35° = 70°."),
  ],
};

const quiz12: ChapterQuiz = {
  chapterId: "mat-12",
  questions: [
    q("mat12-1", "Determinan matriks A = [[3,1],[2,4]] adalah ...",
      [["A", "10"], ["B", "14"], ["C", "5"], ["D", "−2"], ["E", "12"]],
      "A", "det = 3×4 − 1×2 = 12 − 2 = 10."),
    q("mat12-2", "Transpose dari matriks [[1,2],[3,4]] adalah ...",
      [["A", "[[1,3],[2,4]]"], ["B", "[[4,2],[3,1]]"], ["C", "[[1,2],[3,4]]"], ["D", "[[4,3],[2,1]]"], ["E", "[[2,1],[4,3]]"]],
      "A", "Transpose: baris jadi kolom. [[1,2],[3,4]]^T = [[1,3],[2,4]]."),
    q("mat12-3", "Invers dari matriks [[2,1],[5,3]] adalah ...",
      [["A", "[[3,−1],[−5,2]]"], ["B", "[[3,1],[5,2]]"], ["C", "[[2,−1],[−5,3]]"], ["D", "[[−3,1],[5,−2]]"], ["E", "Tidak ada invers"]],
      "A", "det = 6−5 = 1. A⁻¹ = [[3,−1],[−5,2]]."),
  ],
};

const quiz15: ChapterQuiz = {
  chapterId: "mat-15",
  questions: [
    q("mat15-1", "lim(x→2) (x²−4)/(x−2) = ...",
      [["A", "4"], ["B", "0"], ["C", "2"], ["D", "∞"], ["E", "Tidak ada"]],
      "A", "Faktorkan: (x−2)(x+2)/(x−2) = x+2. Substitusi x=2: 4."),
    q("mat15-2", "lim(x→0) sin(3x)/x = ...",
      [["A", "3"], ["B", "0"], ["C", "1"], ["D", "1/3"], ["E", "∞"]],
      "A", "lim sin(3x)/x = lim 3·sin(3x)/(3x) = 3 × 1 = 3."),
    q("mat15-3", "lim(x→∞) (3x²+1)/(2x²−5) = ...",
      [["A", "3/2"], ["B", "1"], ["C", "0"], ["D", "∞"], ["E", "2/3"]],
      "A", "Pangkat tertinggi sama (x²), jadi = koefisien/koefisien = 3/2."),
  ],
};

const quiz16: ChapterQuiz = {
  chapterId: "mat-16",
  questions: [
    q("mat16-1", "Turunan dari f(x) = 3x⁴ adalah ...",
      [["A", "12x³"], ["B", "3x³"], ["C", "4x³"], ["D", "12x⁴"], ["E", "x³"]],
      "A", "f'(x) = 4 × 3x³ = 12x³."),
    q("mat16-2", "Jika f(x) = x² + 3x − 5, maka f'(1) = ...",
      [["A", "5"], ["B", "3"], ["C", "−1"], ["D", "1"], ["E", "7"]],
      "A", "f'(x) = 2x+3. f'(1) = 2+3 = 5."),
    q("mat16-3", "Titik stasioner dari f(x) = x² − 4x + 1 terjadi di x = ...",
      [["A", "2"], ["B", "−2"], ["C", "4"], ["D", "1"], ["E", "0"]],
      "A", "f'(x) = 2x−4 = 0 → x = 2."),
  ],
};

const quiz18: ChapterQuiz = {
  chapterId: "mat-18",
  questions: [
    q("mat18-1", "Nilai dari 5! adalah ...",
      [["A", "120"], ["B", "60"], ["C", "24"], ["D", "720"], ["E", "20"]],
      "A", "5! = 5×4×3×2×1 = 120."),
    q("mat18-2", "C(6,2) = ...",
      [["A", "15"], ["B", "30"], ["C", "12"], ["D", "36"], ["E", "6"]],
      "A", "C(6,2) = 6!/(2!4!) = (6×5)/(2×1) = 15."),
    q("mat18-3", "P(4,3) = ...",
      [["A", "24"], ["B", "12"], ["C", "4"], ["D", "64"], ["E", "6"]],
      "A", "P(4,3) = 4!/1! = 24."),
    q("mat18-4", "Dari 8 orang dipilih ketua, wakil, dan sekretaris. Banyak cara = ...",
      [["A", "336"], ["B", "56"], ["C", "512"], ["D", "24"], ["E", "120"]],
      "A", "P(8,3) = 8×7×6 = 336."),
    q("mat18-5", "Koefisien x² dalam ekspansi (1+x)⁴ adalah ...",
      [["A", "6"], ["B", "4"], ["C", "12"], ["D", "1"], ["E", "24"]],
      "A", "C(4,2) = 6."),
  ],
};

const quiz22: ChapterQuiz = {
  chapterId: "mat-22",
  questions: [
    q("mat22-1", "∫ 2x dx = ...",
      [["A", "x² + C"], ["B", "2x² + C"], ["C", "x + C"], ["D", "2 + C"], ["E", "x²/2 + C"]],
      "A", "∫ 2x dx = 2 × x²/2 + C = x² + C."),
    q("mat22-2", "∫[0,2] 3x² dx = ...",
      [["A", "8"], ["B", "12"], ["C", "6"], ["D", "4"], ["E", "24"]],
      "A", "[x³]₀² = 8 − 0 = 8."),
    q("mat22-3", "Luas daerah di bawah kurva y = x dari x=0 sampai x=4 adalah ...",
      [["A", "8"], ["B", "16"], ["C", "4"], ["D", "12"], ["E", "2"]],
      "A", "L = ∫[0,4] x dx = [x²/2]₀⁴ = 16/2 = 8."),
    q("mat22-4", "∫ (3x² + 2x − 1) dx = ...",
      [["A", "x³ + x² − x + C"], ["B", "6x + 2 + C"], ["C", "x³ + 2x + C"], ["D", "3x³ + x² + C"], ["E", "x³ + x − 1 + C"]],
      "A", "∫3x² dx = x³, ∫2x dx = x², ∫(−1) dx = −x. Hasil: x³ + x² − x + C."),
    q("mat22-5", "Volume benda putar y=x dari x=0 ke x=2 diputar mengelilingi sumbu X = ...",
      [["A", "8π/3"], ["B", "4π/3"], ["C", "2π"], ["D", "4π"], ["E", "π"]],
      "A", "V = π∫[0,2] x² dx = π[x³/3]₀² = π(8/3) = 8π/3."),
  ],
};

// ── Combine all quizzes ───────────────────────────────

import { fisikaQuizzes } from "./fisika-quizzes";
import { kimiaQuizzes } from "./kimia-quizzes";
import { biologiQuizzes } from "./biologi-quizzes";
import { bingQuizzes } from "./bahasa-inggris-quizzes";

export const allQuizzes: ChapterQuiz[] = [
  quiz01, quiz02, quiz03, quiz04, quiz05, quiz06, quiz07, quiz08,
  quiz09, quiz10, quiz12, quiz15, quiz16, quiz18, quiz22,
  ...fisikaQuizzes,
  ...kimiaQuizzes,
  ...biologiQuizzes,
  ...bingQuizzes,
];

export const quizMap = new Map(allQuizzes.map((q) => [q.chapterId, q]));

export function getQuiz(chapterId: string): ChapterQuiz | undefined {
  return quizMap.get(chapterId);
}
