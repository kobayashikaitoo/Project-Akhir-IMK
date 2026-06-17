import type { Chapter } from "./types";
export type { Chapter } from "./types";

// ── Kelas X (Grade 10) ─────────────────────────────────

const ch01: Chapter = {
  id: "mat-01",
  title: "Eksponen dan Logaritma",
  grade: 10,
  order: 1,
  description: "Sifat-sifat eksponen, bentuk akar, fungsi eksponensial, dan konsep logaritma.",
  content: `
<h2>Pengertian Eksponen</h2>
<p>Eksponen (perpangkatan) adalah operasi matematika yang melibatkan perkalian berulang. Notasi <strong>a<sup>n</sup></strong> berarti mengalikan <em>a</em> sebanyak <em>n</em> kali.</p>
<h3>Sifat-Sifat Eksponen</h3>
<ul>
<li><strong>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></strong> — perkalian pangkat</li>
<li><strong>a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup></strong> — pembagian pangkat</li>
<li><strong>(a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup></strong> — pangkat dari pangkat</li>
<li><strong>(ab)<sup>n</sup> = a<sup>n</sup> b<sup>n</sup></strong></li>
<li><strong>a<sup>0</sup> = 1</strong> (untuk a ≠ 0)</li>
<li><strong>a<sup>−n</sup> = 1/a<sup>n</sup></strong></li>
</ul>
<h3>Contoh Soal</h3>
<p>Sederhanakan: 2³ × 2⁴</p>
<p><strong>Penyelesaian:</strong> 2³ × 2⁴ = 2<sup>3+4</sup> = 2⁷ = 128</p>

<h2>Bentuk Akar</h2>
<p>Bentuk akar adalah kebalikan dari perpangkatan. Notasi <strong>ⁿ√a</strong> berarti bilangan yang jika dipangkatkan n menghasilkan a.</p>
<h3>Sifat Bentuk Akar</h3>
<ul>
<li><strong>√(ab) = √a × √b</strong></li>
<li><strong>√(a/b) = √a / √b</strong></li>
<li><strong>a<sup>1/n</sup> = ⁿ√a</strong></li>
</ul>
<h3>Contoh</h3>
<p>Sederhanakan: √72</p>
<p><strong>Penyelesaian:</strong> √72 = √(36 × 2) = 6√2</p>

<h2>Logaritma</h2>
<p>Logaritma adalah kebalikan dari eksponen. <strong>log<sub>a</sub> b = c</strong> berarti <strong>a<sup>c</sup> = b</strong>.</p>
<h3>Sifat-Sifat Logaritma</h3>
<ul>
<li><strong>log<sub>a</sub> (bc) = log<sub>a</sub> b + log<sub>a</sub> c</strong></li>
<li><strong>log<sub>a</sub> (b/c) = log<sub>a</sub> b − log<sub>a</sub> c</strong></li>
<li><strong>log<sub>a</sub> b<sup>n</sup> = n · log<sub>a</sub> b</strong></li>
<li><strong>log<sub>a</sub> a = 1</strong></li>
<li><strong>log<sub>a</sub> 1 = 0</strong></li>
</ul>
<h3>Contoh Soal</h3>
<p>Hitung: log 100</p>
<p><strong>Penyelesaian:</strong> log 100 = log 10² = 2 log 10 = 2 × 1 = <strong>2</strong></p>
`,
};

const ch02: Chapter = {
  id: "mat-02",
  title: "Barisan dan Deret",
  grade: 10,
  order: 2,
  description: "Barisan aritmetika, deret aritmetika, barisan geometri, deret geometri tak hingga.",
  content: `
<h2>Barisan Aritmetika</h2>
<p>Barisan aritmetika adalah barisan bilangan yang selisih dua suku berurutan selalu tetap (disebut <strong>beda</strong>, dilambangkan <em>b</em>).</p>
<h3>Rumus</h3>
<ul>
<li>Suku ke-n: <strong>U<sub>n</sub> = a + (n−1)b</strong></li>
<li>Jumlah n suku pertama: <strong>S<sub>n</sub> = n/2 × (2a + (n−1)b)</strong> atau <strong>S<sub>n</sub> = n/2 × (a + U<sub>n</sub>)</strong></li>
</ul>
<h3>Contoh</h3>
<p>Barisan: 3, 7, 11, 15, ... Tentukan U₁₀ dan S₁₀.</p>
<p><strong>Penyelesaian:</strong><br/>a = 3, b = 4<br/>U₁₀ = 3 + (10−1)×4 = 3 + 36 = <strong>39</strong><br/>S₁₀ = 10/2 × (3 + 39) = 5 × 42 = <strong>210</strong></p>

<h2>Barisan Geometri</h2>
<p>Barisan geometri adalah barisan bilangan yang perbandingan dua suku berurutan selalu tetap (disebut <strong>rasio</strong>, dilambangkan <em>r</em>).</p>
<h3>Rumus</h3>
<ul>
<li>Suku ke-n: <strong>U<sub>n</sub> = a × r<sup>n−1</sup></strong></li>
<li>Jumlah n suku pertama: <strong>S<sub>n</sub> = a(r<sup>n</sup> − 1)/(r − 1)</strong> untuk r &gt; 1</li>
<li>Deret geometri tak hingga (|r| &lt; 1): <strong>S<sub>∞</sub> = a / (1 − r)</strong></li>
</ul>
<h3>Contoh</h3>
<p>Barisan: 2, 6, 18, 54, ... Tentukan U₅.</p>
<p><strong>Penyelesaian:</strong><br/>a = 2, r = 3<br/>U₅ = 2 × 3⁴ = 2 × 81 = <strong>162</strong></p>

<h2>Penerapan: Bunga Majemuk</h2>
<p>Bunga majemuk menggunakan konsep barisan geometri. Modal awal M₀ dengan bunga i per periode setelah n periode:</p>
<p><strong>M<sub>n</sub> = M₀ × (1 + i)<sup>n</sup></strong></p>
`,
};

const ch03: Chapter = {
  id: "mat-03",
  title: "Vektor dan Operasinya",
  grade: 10,
  order: 3,
  description: "Notasi vektor, panjang vektor, operasi penjumlahan/pengurangan, perkalian skalar.",
  content: `
<h2>Pengertian Vektor</h2>
<p>Vektor adalah besaran yang memiliki <strong>nilai (besar)</strong> dan <strong>arah</strong>. Vektor ditulis sebagai kolom atau baris bilangan, misalnya:</p>
<p><strong>a⃗ = (3, 4)</strong> atau dalam notasi kolom: <strong>a⃗ = [3, 4]<sup>T</sup></strong></p>

<h2>Panjang Vektor</h2>
<p>Panjang (modulus) vektor <strong>a⃗ = (x, y)</strong> dihitung dengan:</p>
<p><strong>|a⃗| = √(x² + y²)</strong></p>
<h3>Contoh</h3>
<p>Vektor a⃗ = (3, 4), maka |a⃗| = √(9 + 16) = √25 = <strong>5</strong></p>

<h2>Operasi Vektor</h2>
<h3>Penjumlahan</h3>
<p><strong>a⃗ + b⃗ = (x₁ + x₂, y₁ + y₂)</strong></p>
<h3>Pengurangan</h3>
<p><strong>a⃗ − b⃗ = (x₁ − x₂, y₁ − y₂)</strong></p>
<h3>Perkalian Skalar</h3>
<p><strong>k · a⃗ = (kx, ky)</strong> — mengalikan setiap komponen dengan skalar k.</p>
<h3>Contoh</h3>
<p>a⃗ = (2, 3), b⃗ = (1, 5)<br/>a⃗ + b⃗ = (3, 8)<br/>2a⃗ = (4, 6)</p>

<h2>Vektor Satuan</h2>
<p>Vektor satuan adalah vektor yang panjangnya 1. Vektor satuan dari a⃗:</p>
<p><strong>â = a⃗ / |a⃗|</strong></p>
`,
};

const ch04: Chapter = {
  id: "mat-04",
  title: "Trigonometri",
  grade: 10,
  order: 4,
  description: "Perbandingan trigonometri, sudut istimewa, sudut berelasi di kuadran I–IV.",
  content: `
<h2>Perbandingan Trigonometri</h2>
<p>Pada segitiga siku-siku, perbandingan trigonometri didefinisikan sebagai:</p>
<ul>
<li><strong>sin α = sisi depan / sisi miring</strong></li>
<li><strong>cos α = sisi samping / sisi miring</strong></li>
<li><strong>tan α = sisi depan / sisi samping = sin α / cos α</strong></li>
</ul>
<p>Kebalikannya: <strong>csc α = 1/sin α</strong>, <strong>sec α = 1/cos α</strong>, <strong>cot α = 1/tan α</strong>.</p>

<h2>Sudut Istimewa</h2>
<table>
<tr><th>Sudut</th><th>sin</th><th>cos</th><th>tan</th></tr>
<tr><td>0°</td><td>0</td><td>1</td><td>0</td></tr>
<tr><td>30°</td><td>½</td><td>½√3</td><td>⅓√3</td></tr>
<tr><td>45°</td><td>½√2</td><td>½√2</td><td>1</td></tr>
<tr><td>60°</td><td>½√3</td><td>½</td><td>√3</td></tr>
<tr><td>90°</td><td>1</td><td>0</td><td>∞</td></tr>
</table>

<h2>Relasi Sudut di Kuadran</h2>
<p>Untuk sudut di kuadran II, III, dan IV, gunakan aturan:</p>
<ul>
<li><strong>Kuadran II (90°–180°):</strong> sin positif, cos dan tan negatif</li>
<li><strong>Kuadran III (180°–270°):</strong> tan positif, sin dan cos negatif</li>
<li><strong>Kuadran IV (270°–360°):</strong> cos positif, sin dan tan negatif</li>
</ul>
<h3>Contoh</h3>
<p>sin 150° = sin(180° − 30°) = sin 30° = <strong>½</strong><br/>cos 210° = cos(180° + 30°) = −cos 30° = <strong>−½√3</strong></p>

<h2>Identitas Trigonometri</h2>
<ul>
<li><strong>sin²α + cos²α = 1</strong></li>
<li><strong>1 + tan²α = sec²α</strong></li>
<li><strong>1 + cot²α = csc²α</strong></li>
</ul>
`,
};

const ch05: Chapter = {
  id: "mat-05",
  title: "SPLDV dan SPLTV",
  grade: 10,
  order: 5,
  description: "Sistem Persamaan Linear Dua dan Tiga Variabel, metode penyelesaian.",
  content: `
<h2>Sistem Persamaan Linear Dua Variabel (SPLDV)</h2>
<p>SPLDV terdiri dari dua persamaan linear dengan dua variabel. Bentuk umum:</p>
<p><strong>a₁x + b₁y = c₁</strong><br/><strong>a₂x + b₂y = c₂</strong></p>

<h3>Metode Penyelesaian</h3>
<ol>
<li><strong>Substitusi:</strong> Nyatakan satu variabel dari persamaan pertama, substitusikan ke persamaan kedua.</li>
<li><strong>Eliminasi:</strong> Kalikan persamaan agar koefisien salah satu variabel sama, lalu kurangkan/tambahkan.</li>
<li><strong>Campuran:</strong> Kombinasi eliminasi dan substitusi.</li>
</ol>
<h3>Contoh</h3>
<p>x + y = 7 dan 2x − y = 5</p>
<p><strong>Eliminasi:</strong> (x+y) + (2x−y) = 7+5 → 3x = 12 → x = 4<br/>y = 7 − 4 = <strong>3</strong></p>

<h2>Sistem Persamaan Linear Tiga Variabel (SPLTV)</h2>
<p>SPLTV terdiri dari tiga persamaan linear dengan tiga variabel. Diselesaikan dengan eliminasi bertahap:</p>
<ol>
<li>Eliminasi satu variabel dari dua pasang persamaan → dapatkan SPLDV.</li>
<li>Selesaikan SPLDV tersebut.</li>
<li>Substitusi balik untuk mencari variabel ketiga.</li>
</ol>
<h3>Contoh</h3>
<p>x + y + z = 6, 2x − y + z = 3, x + 2y − z = 4</p>
<p><strong>Penyelesaian:</strong> Eliminasi z dari persamaan (1)+(3): 2x + 3y = 10<br/>Eliminasi z dari persamaan (2)+(3): 3x + y = 7<br/>Selesaikan SPLDV: x = 1, y = 2, z = <strong>3</strong></p>
`,
};

const ch06: Chapter = {
  id: "mat-06",
  title: "Fungsi Kuadrat",
  grade: 10,
  order: 6,
  description: "Grafik fungsi kuadrat, titik puncak, menyusun persamaan fungsi kuadrat.",
  content: `
<h2>Bentuk Umum Fungsi Kuadrat</h2>
<p><strong>f(x) = ax² + bx + c</strong> dengan a ≠ 0.</p>
<p>Grafiknya berupa <strong>parabola</strong>:</p>
<ul>
<li>a &gt; 0 → parabola terbuka ke atas (memiliki titik minimum)</li>
<li>a &lt; 0 → parabola terbuka ke bawah (memiliki titik maksimum)</li>
</ul>

<h2>Titik Puncak (Vertex)</h2>
<p>Koordinat titik puncak:</p>
<p><strong>x<sub>p</sub> = −b/(2a)</strong><br/><strong>y<sub>p</sub> = f(x<sub>p</sub>) = −D/(4a)</strong></p>
<p>di mana <strong>D = b² − 4ac</strong> (diskriminan).</p>

<h2>Memotong Sumbu</h2>
<ul>
<li><strong>Sumbu Y:</strong> di titik (0, c)</li>
<li><strong>Sumbu X:</strong> di akar-akar ax² + bx + c = 0 (jika D ≥ 0)</li>
</ul>

<h3>Contoh</h3>
<p>f(x) = x² − 4x + 3</p>
<p>Titik puncak: x<sub>p</sub> = 4/2 = 2, y<sub>p</sub> = 4 − 8 + 3 = −1 → <strong>(2, −1)</strong><br/>Akar: x² − 4x + 3 = (x−1)(x−3) = 0 → x = 1 dan x = 3</p>

<h2>Menyusun Persamaan</h2>
<p>Jika diketahui titik puncak (p, q): <strong>f(x) = a(x − p)² + q</strong><br/>Jika diketahui akar x₁ dan x₂: <strong>f(x) = a(x − x₁)(x − x₂)</strong></p>
`,
};

const ch07: Chapter = {
  id: "mat-07",
  title: "Statistika",
  grade: 10,
  order: 7,
  description: "Penyajian data, ukuran pemusatan (mean, median, modus), ukuran penyebaran.",
  content: `
<h2>Penyajian Data</h2>
<p>Data dapat disajikan dalam berbagai bentuk:</p>
<ul>
<li><strong>Tabel distribusi frekuensi</strong> — mengelompokkan data ke dalam kelas interval</li>
<li><strong>Histogram</strong> — diagram batang untuk data berkelompok</li>
<li><strong>Ogive</strong> — grafik frekuensi kumulatif</li>
</ul>

<h2>Ukuran Pemusatan</h2>
<h3>Mean (Rata-rata)</h3>
<p><strong>x̄ = Σxᵢ / n</strong> (data tunggal) atau <strong>x̄ = Σ(fᵢ · xᵢ) / Σfᵢ</strong> (data berkelompok)</p>

<h3>Median (Nilai Tengah)</h3>
<p>Data tunggal: urutkan data, ambil nilai tengah.<br/>Data berkelompok: <strong>Me = Tb + p × ((n/2 − F) / f)</strong></p>
<p>Tb = tepi bawah kelas median, p = panjang kelas, F = frekuensi kumulatif sebelum kelas median, f = frekuensi kelas median.</p>

<h3>Modus (Nilai Paling Sering Muncul)</h3>
<p>Data berkelompok: <strong>Mo = Tb + p × (d₁ / (d₁ + d₂))</strong></p>
<p>d₁ = selisih frekuensi kelas modus dengan kelas sebelumnya, d₂ = selisih dengan kelas sesudahnya.</p>

<h2>Ukuran Penyebaran</h2>
<ul>
<li><strong>Jangkauan (Range):</strong> R = data terbesar − data terkecil</li>
<li><strong>Simpangan baku:</strong> s = √(Σ(xᵢ − x̄)² / n)</li>
<li><strong>Variansi:</strong> s² = Σ(xᵢ − x̄)² / n</li>
</ul>
`,
};

const ch08: Chapter = {
  id: "mat-08",
  title: "Peluang",
  grade: 10,
  order: 8,
  description: "Konsep dasar peluang, frekuensi harapan, komplemen suatu kejadian.",
  content: `
<h2>Ruang Sampel dan Kejadian</h2>
<p><strong>Ruang sampel (S)</strong> adalah himpunan semua hasil yang mungkin dari suatu percobaan.<br/><strong>Kejadian (A)</strong> adalah himpunan bagian dari ruang sampel.</p>

<h2>Peluang Suatu Kejadian</h2>
<p><strong>P(A) = n(A) / n(S)</strong></p>
<p>di mana n(A) = banyak anggota kejadian A, n(S) = banyak anggota ruang sampel.</p>
<p>Sifat: <strong>0 ≤ P(A) ≤ 1</strong></p>

<h3>Contoh</h3>
<p>Peluang muncul mata dadu genap saat melempar satu dadu:<br/>S = {1,2,3,4,5,6}, A = {2,4,6}<br/>P(A) = 3/6 = <strong>½</strong></p>

<h2>Komplemen Kejadian</h2>
<p>Komplemen A (ditulis A') adalah kejadian "bukan A":</p>
<p><strong>P(A') = 1 − P(A)</strong></p>

<h2>Frekuensi Harapan</h2>
<p>Jika percobaan dilakukan n kali, frekuensi harapan kejadian A:</p>
<p><strong>f(A) = n × P(A)</strong></p>
<h3>Contoh</h3>
<p>Dua dadu dilempar 180 kali. Frekuensi harapan jumlah mata dadu = 7:<br/>n(S) = 36, A = {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)} → n(A) = 6<br/>P(A) = 6/36 = 1/6<br/>f(A) = 180 × 1/6 = <strong>30 kali</strong></p>
`,
};

// ── Kelas XI (Grade 11) ─────────────────────────────────

const ch09: Chapter = {
  id: "mat-09",
  title: "Fungsi Komposisi dan Invers",
  grade: 11,
  order: 9,
  description: "Konsep relasi dan fungsi, komposisi fungsi, dan invers fungsi.",
  content: `
<h2>Komposisi Fungsi</h2>
<p>Komposisi fungsi <strong>(f ∘ g)(x) = f(g(x))</strong> berarti memasukkan hasil g(x) ke dalam f.</p>
<h3>Sifat</h3>
<ul>
<li><strong>Tidak komutatif:</strong> (f ∘ g) ≠ (g ∘ f)</li>
<li><strong>Asosiatif:</strong> ((f ∘ g) ∘ h) = (f ∘ (g ∘ h))</li>
<li><strong>Identitas:</strong> (f ∘ I) = (I ∘ f) = f, di mana I(x) = x</li>
</ul>
<h3>Contoh</h3>
<p>f(x) = 2x + 1, g(x) = x²<br/>(f ∘ g)(x) = f(g(x)) = f(x²) = 2x² + 1<br/>(g ∘ f)(x) = g(f(x)) = g(2x+1) = (2x+1)² = 4x² + 4x + 1</p>

<h2>Invers Fungsi</h2>
<p>Invers fungsi <strong>f⁻¹(x)</strong> adalah fungsi yang membalikkan f. Syarat: f harus bijektif.</p>
<h3>Cara Mencari Invers</h3>
<ol>
<li>Misalkan y = f(x)</li>
<li>Nyatakan x dalam y</li>
<li>Ganti y dengan x → itulah f⁻¹(x)</li>
</ol>
<h3>Contoh</h3>
<p>f(x) = 3x − 5<br/>y = 3x − 5 → x = (y + 5)/3<br/><strong>f⁻¹(x) = (x + 5)/3</strong></p>

<h2>Sifat Invers Komposisi</h2>
<p><strong>(f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹</strong></p>
`,
};

const ch10: Chapter = {
  id: "mat-10",
  title: "Geometri Lingkaran",
  grade: 11,
  order: 10,
  description: "Sudut pusat, sudut keliling, panjang busur, luas juring, garis singgung.",
  content: `
<h2>Unsur Lingkaran</h2>
<ul>
<li><strong>Jari-jari (r):</strong> jarak pusat ke tepi</li>
<li><strong>Diameter (d):</strong> d = 2r</li>
<li><strong>Keliling:</strong> K = 2πr</li>
<li><strong>Luas:</strong> L = πr²</li>
</ul>

<h2>Sudut Pusat dan Sudut Keliling</h2>
<p><strong>Sudut pusat</strong> adalah sudut yang titik sudutnya di pusat lingkaran.<br/><strong>Sudut keliling</strong> adalah sudut yang titik sudutnya di keliling lingkaran.</p>
<p>Hubungan: <strong>Sudut pusat = 2 × Sudut keliling</strong> (jika menghadap busur yang sama).</p>

<h2>Panjang Busur dan Luas Juring</h2>
<p>Jika sudut pusat = α°:</p>
<ul>
<li><strong>Panjang busur = (α/360) × 2πr</strong></li>
<li><strong>Luas juring = (α/360) × πr²</strong></li>
</ul>

<h2>Garis Singgung Lingkaran</h2>
<h3>Garis Singgung Persekutuan Luar</h3>
<p><strong>d = √(p² − (R − r)²)</strong><br/>p = jarak pusat, R dan r = jari-jari kedua lingkaran.</p>
<h3>Garis Singgung Persekutuan Dalam</h3>
<p><strong>d = √(p² − (R + r)²)</strong></p>
`,
};

const ch11: Chapter = {
  id: "mat-11",
  title: "Statistika Bivariat",
  grade: 11,
  order: 11,
  description: "Diagram pencar, regresi linear, korelasi Pearson, koefisien determinasi.",
  content: `
<h2>Data Bivariat</h2>
<p>Data bivariat melibatkan dua variabel (X dan Y) untuk melihat hubungan antar keduanya.</p>

<h2>Diagram Pencar (Scatter Plot)</h2>
<p>Setiap pasangan data (xᵢ, yᵢ) digambarkan sebagai titik pada bidang koordinat. Pola titik menunjukkan jenis hubungan:</p>
<ul>
<li>Naik dari kiri ke kanan → <strong>korelasi positif</strong></li>
<li>Turun dari kiri ke kanan → <strong>korelasi negatif</strong></li>
<li>Acak → <strong>tidak ada korelasi</strong></li>
</ul>

<h2>Regresi Linear Sederhana</h2>
<p>Persamaan garis regresi: <strong>ŷ = a + bx</strong></p>
<p>di mana:<br/><strong>b = (nΣxy − ΣxΣy) / (nΣx² − (Σx)²)</strong><br/><strong>a = ȳ − bx̄</strong></p>

<h2>Korelasi Pearson</h2>
<p><strong>r = (nΣxy − ΣxΣy) / √((nΣx² − (Σx)²)(nΣy² − (Σy)²))</strong></p>
<p>Nilai r berkisar −1 sampai 1: mendekati ±1 = korelasi kuat, mendekati 0 = korelasi lemah.</p>

<h2>Koefisien Determinasi</h2>
<p><strong>r²</strong> menunjukkan persentase variasi Y yang dapat dijelaskan oleh X.</p>
`,
};

const ch12: Chapter = {
  id: "mat-12",
  title: "Matriks",
  grade: 11,
  order: 12,
  description: "Operasi matriks, transpose, determinan, dan invers matriks.",
  content: `
<h2>Pengertian Matriks</h2>
<p>Matriks adalah susunan bilangan dalam baris dan kolom. Matriks berordo m×n memiliki m baris dan n kolom.</p>

<h2>Operasi Matriks</h2>
<h3>Penjumlahan/Pengurangan</h3>
<p>Dua matriks berordo sama: <strong>C = A ± B</strong> di mana cᵢⱼ = aᵢⱼ ± bᵢⱼ.</p>
<h3>Perkalian Skalar</h3>
<p><strong>kA</strong> = kalikan setiap elemen A dengan k.</p>
<h3>Perkalian Matriks</h3>
<p>A(m×n) × B(n×p) = C(m×p). Elemen: <strong>cᵢⱼ = Σ aᵢₖ bₖⱼ</strong></p>

<h2>Transpose</h2>
<p><strong>A<sup>T</sup></strong> = baris menjadi kolom, kolom menjadi baris.</p>

<h2>Determinan (Ordo 2×2)</h2>
<p><strong>det(A) = ad − bc</strong> untuk A = [[a,b],[c,d]]</p>

<h2>Invers Matriks 2×2</h2>
<p><strong>A⁻¹ = (1/det(A)) × [[d, −b], [−c, a]]</strong></p>
<h3>Contoh</h3>
<p>A = [[2, 1], [3, 4]], det(A) = 8−3 = 5<br/>A⁻¹ = 1/5 × [[4, −1], [−3, 2]]</p>
`,
};

const ch13: Chapter = {
  id: "mat-13",
  title: "Transformasi Geometri",
  grade: 11,
  order: 13,
  description: "Translasi, refleksi, rotasi, dan dilatasi pada titik dan bangun datar.",
  content: `
<h2>Translasi (Pergeseran)</h2>
<p>Titik (x, y) ditranslasi oleh vektor (a, b): <strong>(x', y') = (x+a, y+b)</strong></p>

<h2>Refleksi (Pencerminan)</h2>
<table>
<tr><th>Cermin</th><th>Bayangan</th></tr>
<tr><td>Sumbu X</td><td>(x, −y)</td></tr>
<tr><td>Sumbu Y</td><td>(−x, y)</td></tr>
<tr><td>Garis y = x</td><td>(y, x)</td></tr>
<tr><td>Titik asal (0,0)</td><td>(−x, −y)</td></tr>
</table>

<h2>Rotasi (Perputaran)</h2>
<p>Rotasi sudut α berpusat di (0,0):</p>
<p><strong>x' = x cos α − y sin α</strong><br/><strong>y' = x sin α + y cos α</strong></p>
<h3>Rotasi 90°:</strong> (x, y) → (−y, x)<br/><strong>Rotasi 180°:</strong> (x, y) → (−x, −y)</p>

<h2>Dilatasi (Perkalian Skala)</h2>
<p>Dilatasi berpusat di (0,0) dengan faktor k: <strong>(x', y') = (kx, ky)</strong></p>
<ul>
<li>|k| &gt; 1 → diperbesar</li>
<li>0 &lt; |k| &lt; 1 → diperkecil</li>
<li>k &lt; 0 → berlawanan arah</li>
</ul>
`,
};

const ch14: Chapter = {
  id: "mat-14",
  title: "Polinomial",
  grade: 11,
  order: 14,
  description: "Teorema sisa, teorema faktor, pembagian polinomial.",
  content: `
<h2>Pengertian Polinomial</h2>
<p>Polinomial (suku banyak) berderajat n: <strong>P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀</strong></p>

<h2>Operasi Polinomial</h2>
<p>Penjumlahan, pengurangan, dan perkalian dilakukan seperti aljabar biasa dengan mengelompokkan suku sejenis.</p>

<h2>Pembagian Polinomial</h2>
<p><strong>P(x) = H(x) × Q(x) + S(x)</strong><br/>P(x) = yang dibagi, H(x) = pembagi, Q(x) = hasil bagi, S(x) = sisa.</p>

<h2>Teorema Sisa</h2>
<p>Jika P(x) dibagi (x − a), maka sisanya = <strong>P(a)</strong>.</p>
<h3>Contoh</h3>
<p>P(x) = x³ − 2x² + 3x − 4 dibagi (x − 2):<br/>Sisa = P(2) = 8 − 8 + 6 − 4 = <strong>2</strong></p>

<h2>Teorema Faktor</h2>
<p>Jika P(a) = 0, maka (x − a) adalah faktor dari P(x).</p>
<h3>Contoh</h3>
<p>P(x) = x² − 5x + 6. P(2) = 4 − 10 + 6 = 0 → (x−2) adalah faktor.<br/>P(x) = (x−2)(x−3), akar-akarnya x = 2 dan x = 3.</p>
`,
};

const ch15: Chapter = {
  id: "mat-15",
  title: "Limit Fungsi Aljabar",
  grade: 11,
  order: 15,
  description: "Konsep limit, metode substitusi, faktorisasi, dan perkalian sekawan.",
  content: `
<h2>Konsep Limit</h2>
<p>Limit menggambarkan perilaku fungsi saat x mendekati suatu nilai: <strong>lim(x→a) f(x) = L</strong></p>
<p>Artinya: saat x semakin dekat ke a, nilai f(x) semakin dekat ke L.</p>

<h2>Metode Menghitung Limit</h2>
<h3>1. Substitusi Langsung</h3>
<p>Jika f(a) terdefinisi dan bukan bentuk tak tentu, langsung substitusi.</p>
<h3>Contoh</h3>
<p>lim(x→3) (2x + 1) = 2(3) + 1 = <strong>7</strong></p>

<h3>2. Faktorisasi (untuk bentuk 0/0)</h3>
<p>Faktorkan pembilang dan penyebut, lalu coret faktor yang sama.</p>
<h3>Contoh</h3>
<p>lim(x→2) (x²−4)/(x−2) = lim(x→2) (x−2)(x+2)/(x−2) = lim(x→2) (x+2) = <strong>4</strong></p>

<h3>3. Perkalian Sekawan (untuk bentuk akar)</h3>
<p>Kalikan dengan sekawan untuk menghilangkan bentuk akar.</p>
<h3>Contoh</h3>
<p>lim(x→0) (√(x+4) − 2)/x × (√(x+4)+2)/(√(x+4)+2) = lim(x→0) x/(x(√(x+4)+2)) = 1/(2+2) = <strong>¼</strong></p>

<h2>Limit di Tak Hingga</h2>
<p>lim(x→∞) (axⁿ + ...)/(bxⁿ + ...) = <strong>a/b</strong> (jika pangkat tertinggi sama)</p>
`,
};

const ch16: Chapter = {
  id: "mat-16",
  title: "Turunan Fungsi Aljabar",
  grade: 11,
  order: 16,
  description: "Rumus turunan, aturan rantai, garis singgung, nilai stasioner.",
  content: `
<h2>Rumus Dasar Turunan</h2>
<p>Jika <strong>f(x) = axⁿ</strong>, maka <strong>f'(x) = naxⁿ⁻¹</strong></p>
<table>
<tr><th>f(x)</th><th>f'(x)</th></tr>
<tr><td>c (konstanta)</td><td>0</td></tr>
<tr><td>x</td><td>1</td></tr>
<tr><td>x²</td><td>2x</td></tr>
<tr><td>x³</td><td>3x²</td></tr>
<tr><td>xⁿ</td><td>nxⁿ⁻¹</td></tr>
</table>

<h2>Sifat Turunan</h2>
<ul>
<li><strong>(f ± g)' = f' ± g'</strong></li>
<li><strong>(kf)' = kf'</strong></li>
<li><strong>(fg)' = f'g + fg'</strong> (aturan perkalian)</li>
<li><strong>(f/g)' = (f'g − fg')/g²</strong> (aturan pembagian)</li>
</ul>

<h2>Aturan Rantai</h2>
<p>Jika y = f(g(x)), maka <strong>dy/dx = f'(g(x)) × g'(x)</strong></p>
<h3>Contoh</h3>
<p>y = (2x+1)³ → y' = 3(2x+1)² × 2 = <strong>6(2x+1)²</strong></p>

<h2>Persamaan Garis Singgung</h2>
<p>Garis singgung kurva y = f(x) di titik (a, f(a)):<br/><strong>y − f(a) = f'(a)(x − a)</strong></p>

<h2>Nilai Stasioner</h2>
<p>Titik stasioner terjadi saat <strong>f'(x) = 0</strong>.<br/>Jenis: maksimum (f'' &lt; 0), minimum (f'' &gt; 0), atau titik belok.</p>
`,
};

// ── Kelas XII (Grade 12) ─────────────────────────────────

const ch17: Chapter = {
  id: "mat-17",
  title: "Transformasi Fungsi",
  grade: 12,
  order: 17,
  description: "Translasi, refleksi, dilatasi, dan rotasi kurva grafik fungsi.",
  content: `
<h2>Transformasi Grafik Fungsi</h2>
<p>Transformasi mengubah grafik fungsi f(x) menjadi grafik baru.</p>

<h2>Translasi Grafik</h2>
<ul>
<li><strong>f(x) + k</strong> → geser ke atas sejauh k (k &gt; 0) atau ke bawah (k &lt; 0)</li>
<li><strong>f(x − h)</strong> → geser ke kanan sejauh h (h &gt; 0) atau ke kiri (h &lt; 0)</li>
</ul>
<h3>Contoh</h3>
<p>y = x² → y = (x−3)² + 2: parabola bergeser 3 ke kanan dan 2 ke atas. Puncak baru di (3, 2).</p>

<h2>Refleksi Grafik</h2>
<ul>
<li><strong>−f(x)</strong> → cerminkan terhadap sumbu X</li>
<li><strong>f(−x)</strong> → cerminkan terhadap sumbu Y</li>
</ul>

<h2>Dilatasi (Peregangan)</h2>
<ul>
<li><strong>kf(x)</strong> → regangkan vertikal sebesar k kali (k &gt; 1) atau kompresi (0 &lt; k &lt; 1)</li>
<li><strong>f(kx)</strong> → kompresi horizontal sebesar k kali</li>
</ul>

<h2>Kombinasi Transformasi</h2>
<p>Urutan: lakukan peregangan/refleksi terlebih dahulu, lalu translasi.</p>
<p><strong>y = a·f(b(x − h)) + k</strong><br/>a = regangan vertikal & refleksi, b = regangan horizontal, h = geser horizontal, k = geser vertikal.</p>
`,
};

const ch18: Chapter = {
  id: "mat-18",
  title: "Kaidah Pencacahan",
  grade: 12,
  order: 18,
  description: "Aturan pengisian tempat, permutasi, kombinasi, ekspansi binomial.",
  content: `
<h2>Aturan Perkalian (Filling Slots)</h2>
<p>Jika suatu kejadian dapat terjadi dalam n₁ cara dan kejadian kedua dalam n₂ cara, maka kedua kejadian dapat terjadi dalam <strong>n₁ × n₂</strong> cara.</p>
<h3>Contoh</h3>
<p>Memilih baju (3 pilihan) dan celana (4 pilihan) = 3 × 4 = <strong>12</strong> kombinasi.</p>

<h2>Faktorial</h2>
<p><strong>n! = n × (n−1) × (n−2) × ... × 1</strong>, dan 0! = 1.</p>

<h2>Permutasi</h2>
<p>Susunan yang memperhatikan urutan:</p>
<p><strong>P(n, r) = n! / (n−r)!</strong></p>
<h3>Contoh</h3>
<p>Memilih ketua dan wakil dari 5 calon: P(5,2) = 5!/3! = 20</p>

<h2>Kombinasi</h2>
<p>Susunan tanpa memperhatikan urutan:</p>
<p><strong>C(n, r) = n! / (r!(n−r)!)</strong></p>
<h3>Contoh</h3>
<p>Memilih 3 dari 7 siswa: C(7,3) = 7!/(3!4!) = <strong>35</strong></p>

<h2>Binomial Newton</h2>
<p><strong>(a + b)ⁿ = Σ C(n,k) × aⁿ⁻ᵏ × bᵏ</strong> untuk k = 0, 1, ..., n</p>
<h3>Contoh</h3>
<p>(x + 2)³ = C(3,0)x³ + C(3,1)x²(2) + C(3,2)x(4) + C(3,3)(8)<br/>= x³ + 6x² + 12x + 8</p>
`,
};

const ch19: Chapter = {
  id: "mat-19",
  title: "Peluang Kejadian Majemuk",
  grade: 12,
  order: 19,
  description: "Peluang kejadian saling lepas, saling bebas, dan peluang bersyarat.",
  content: `
<h2>Gabungan Dua Kejadian</h2>
<p><strong>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</strong></p>

<h2>Kejadian Saling Lepas</h2>
<p>Dua kejadian yang tidak bisa terjadi bersamaan (A ∩ B = ∅):</p>
<p><strong>P(A ∪ B) = P(A) + P(B)</strong></p>
<h3>Contoh</h3>
<p>Dadu: A = mata 1, B = mata 2. P(A∪B) = 1/6 + 1/6 = <strong>1/3</strong></p>

<h2>Kejadian Saling Bebas</h2>
<p>Dua kejadian yang tidak saling mempengaruhi:</p>
<p><strong>P(A ∩ B) = P(A) × P(B)</strong></p>
<h3>Contoh</h3>
<p>Dua dadu: A = dadu pertama genap, B = dadu kedua ganjil.<br/>P(A∩B) = 1/2 × 1/2 = <strong>1/4</strong></p>

<h2>Peluang Bersyarat</h2>
<p>Peluang A dengan syarat B sudah terjadi:</p>
<p><strong>P(A|B) = P(A ∩ B) / P(B)</strong></p>
<h3>Contoh</h3>
<p>Dari 10 bola (6 merah, 4 biru). Ambil 2 tanpa pengembalian.<br/>P(biru kedua | merah pertama) = P(M₁∩B₂)/P(M₁) = (6/10 × 4/9) / (6/10) = <strong>4/9</strong></p>
`,
};

const ch20: Chapter = {
  id: "mat-20",
  title: "Dimensi Tiga (Geometri Ruang)",
  grade: 12,
  order: 20,
  description: "Jarak antar titik, titik ke garis, titik ke bidang pada bangun ruang.",
  content: `
<h2>Jarak Dua Titik</h2>
<p>Jarak titik A(x₁, y₁, z₁) ke B(x₂, y₂, z₂):</p>
<p><strong>d = √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²)</strong></p>

<h2>Jarak Titik ke Garis</h2>
<p>Jarak titik P ke garis AB = panjang ruas garis tegak lurus dari P ke AB.</p>
<p>Pada kubus ABCD.EFGH dengan rusuk a, jarak titik ke garis sering dihitung dengan proyeksi atau menggunakan segitiga siku-siku.</p>

<h3>Contoh (Kubus rusuk 6)</h3>
<p>Jarak A ke diagonal ruang CE:<br/>Diagonal ruang = 6√3. Proyeksi A ke CE menghasilkan jarak = <strong>6√6 / 3 = 2√6</strong>.</p>

<h2>Jarak Titik ke Bidang</h2>
<p>Jarak titik P ke bidang α = panjang ruas tegak lurus dari P ke bidang α.</p>
<h3>Contoh (Kubus rusuk a)</h3>
<p>Jarak titik A ke bidang BDE:<br/>Tinggi dari A ke bidang BDE = <strong>a√3 / 3</strong>.</p>

<h2>Sudut dalam Dimensi Tiga</h2>
<ul>
<li><strong>Sudut antara dua garis:</strong> gunakan vektor arah</li>
<li><strong>Sudut antara garis dan bidang:</strong> 90° dikurangi sudut antara garis dan normal bidang</li>
<li><strong>Sudut antara dua bidang:</strong> sudut antara normal kedua bidang</li>
</ul>
`,
};

const ch21: Chapter = {
  id: "mat-21",
  title: "Geometri Analitik",
  grade: 12,
  order: 21,
  description: "Persamaan garis, lingkaran, elips, parabola, dan hiperbola.",
  content: `
<h2>Persamaan Garis Lurus</h2>
<ul>
<li><strong>y = mx + c</strong> (gradien m, potong sumbu Y di c)</li>
<li>Melalui 2 titik: <strong>(y−y₁)/(y₂−y₁) = (x−x₁)/(x₂−x₁)</strong></li>
<li>Gradien garis sejajar: m₁ = m₂</li>
<li>Gradien garis tegak lurus: m₁ × m₂ = −1</li>
</ul>

<h2>Persamaan Lingkaran</h2>
<p>Pusat (a, b), jari-jari r:</p>
<p><strong>(x − a)² + (y − b)² = r²</strong></p>
<h3>Bentuk Umum</h3>
<p><strong>x² + y² + Ax + By + C = 0</strong><br/>Pusat: (−A/2, −B/2), r = √(A²/4 + B²/4 − C)</p>

<h2>Elips</h2>
<p>Pusat (0,0): <strong>x²/a² + y²/b² = 1</strong> (a &gt; b → sumbu utama horizontal)</p>
<p>Fokus: c = √(a² − b²), fokus di (±c, 0).</p>

<h2>Parabola</h2>
<p><strong>y² = 4px</strong> — terbuka ke kanan (p &gt; 0). Fokus di (p, 0), direktris x = −p.</p>

<h2>Hiperbola</h2>
<p><strong>x²/a² − y²/b² = 1</strong>. Asimtot: y = ±(b/a)x.</p>
`,
};

const ch22: Chapter = {
  id: "mat-22",
  title: "Kalkulus Lanjut (Integral)",
  grade: 12,
  order: 22,
  description: "Integral tak tentu, integral tentu, luas daerah, volume benda putar.",
  content: `
<h2>Integral Tak Tentu</h2>
<p>Kebalikan dari turunan:</p>
<p><strong>∫ xⁿ dx = xⁿ⁺¹/(n+1) + C</strong> (untuk n ≠ −1)</p>
<p><strong>∫ 1/x dx = ln|x| + C</strong></p>

<h3>Contoh</h3>
<p>∫ 3x² dx = x³ + C</p>

<h2>Integral Tentu</h2>
<p><strong>∫[a,b] f(x) dx = F(b) − F(a)</strong><br/>di mana F(x) adalah antiturunan f(x).</p>
<h3>Contoh</h3>
<p>∫[1,3] 2x dx = [x²]₁³ = 9 − 1 = <strong>8</strong></p>

<h2>Luas Daerah di Bawah Kurva</h2>
<p>Luas daerah antara kurva y = f(x) dan sumbu X dari x = a ke x = b:</p>
<p><strong>L = ∫[a,b] |f(x)| dx</strong></p>
<p>Luas antara dua kurva y₁ = f(x) dan y₂ = g(x):</p>
<p><strong>L = ∫[a,b] |f(x) − g(x)| dx</strong></p>

<h2>Volume Benda Putar</h2>
<p>Kurva y = f(x) diputar mengelilingi sumbu X dari a ke b:</p>
<p><strong>V = π ∫[a,b] [f(x)]² dx</strong></p>
<h3>Contoh</h3>
<p>y = x, diputar dari x = 0 sampai x = 2:<br/>V = π ∫[0,2] x² dx = π [x³/3]₀² = <strong>8π/3</strong></p>
`,
};

export const matematikaChapters: Chapter[] = [
  ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08,
  ch09, ch10, ch11, ch12, ch13, ch14, ch15, ch16,
  ch17, ch18, ch19, ch20, ch21, ch22,
];

export const matematikaMap = new Map(matematikaChapters.map((c) => [c.id, c]));

export function getChapter(id: string): Chapter | undefined {
  return matematikaMap.get(id);
}
