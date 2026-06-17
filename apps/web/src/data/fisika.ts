import type { Chapter } from "./types";
export type { Chapter } from "./types";

// ── Kelas X (Grade 10) ─────────────────────────────────

const ch01: Chapter = {
  id: "fis-01",
  title: "Pengukuran dalam Kerja Ilmiah",
  grade: 10,
  order: 1,
  description: "Besaran pokok & turunan, dimensi, ketidakpastian pengukuran, angka penting, jangka sorong & mikrometer.",
  content: `
<h2>Besaran dan Satuan</h2>
<p><strong>Besaran pokok</strong> adalah besaran yang satuannya didefinisikan tersendiri. Ada 7 besaran pokok dalam SI:</p>
<ul>
<li><strong>Panjang</strong> — meter (m)</li>
<li><strong>Massa</strong> — kilogram (kg)</li>
<li><strong>Waktu</strong> — sekon (s)</li>
<li><strong>Arus listrik</strong> — ampere (A)</li>
<li><strong>Suhu</strong> — kelvin (K)</li>
<li><strong>Intensitas cahaya</strong> — kandela (cd)</li>
<li><strong>Jumlah zat</strong> — mol</li>
</ul>
<p><strong>Besaran turunan</strong> diturunkan dari besaran pokok, contoh: kecepatan (m/s), gaya (kg·m/s² = Newton).</p>

<h2>Dimensi</h2>
<p>Dimensi menyatakan sifat suatu besaran dalam bentuk kombinasi besaran pokok:</p>
<ul>
<li>[L] = panjang, [M] = massa, [T] = waktu</li>
<li>Kecepatan: [L][T]⁻¹</li>
<li>Percepatan: [L][T]⁻²</li>
<li>Gaya: [M][L][T]⁻²</li>
</ul>

<h2>Angka Penting</h2>
<p>Angka penting (AP) adalah semua angka yang diperoleh dari hasil pengukuran:</p>
<ul>
<li>Semua angka bukan nol adalah AP</li>
<li>Angka nol di antara angka bukan nol adalah AP</li>
<li>Angka nol di depan angka bukan nol bukan AP</li>
</ul>
<h3>Contoh</h3>
<p>0,003050 memiliki <strong>4 angka penting</strong> (3, 0, 5, 0).</p>

<h2>Alat Ukur</h2>
<h3>Jangka Sorong</h3>
<p>Ketelitian: 0,01 cm (0,1 mm). Cara baca: skala utama + skala nonius.</p>
<h3>Mikrometer Sekrup</h3>
<p>Ketelitian: 0,01 mm. Cara baca: skala utama + skala putar × 0,01.</p>
`,
};

const ch02: Chapter = {
  id: "fis-02",
  title: "Energi Terbarukan",
  grade: 10,
  order: 2,
  description: "Sumber energi fosil vs alternatif, konversi energi, efisiensi energi.",
  content: `
<h2>Sumber Energi</h2>
<p><strong>Energi fosil</strong> (tidak terbarukan): batu bara, minyak bumi, gas alam. Cadangan terbatas, menghasilkan emisi CO₂.</p>
<p><strong>Energi terbarukan</strong>: matahari, angin, air (hidro), panas bumi (geotermal), biomassa, gelombang laut.</p>

<h2>Konversi Energi</h2>
<p>Energi tidak dapat diciptakan atau dimusnahkan, hanya dapat berubah bentuk (<strong>Hukum Kekekalan Energi</strong>).</p>
<ul>
<li><strong>Panel surya</strong>: energi cahaya → energi listrik</li>
<li><strong>Turbin angin</strong>: energi kinetik angin → energi mekanik → energi listrik</li>
<li><strong>PLTA</strong>: energi potensial air → energi kinetik → energi mekanik → listrik</li>
<li><strong>PLTU</strong>: energi kimia batu bara → panas → uap → mekanik → listrik</li>
</ul>

<h2>Efisiensi Energi</h2>
<p>Efisiensi (η) adalah perbandingan energi keluaran yang berguna terhadap energi masukan:</p>
<p><strong>η = (E<sub>keluaran</sub> / E<sub>masukan</sub>) × 100%</strong></p>
<h3>Contoh</h3>
<p>Sebuah lampu LED menggunakan daya 10 W dan menghasilkan cahaya setara lampu pijar 60 W. Efisiensi energi ≈ 10/60 × 100% = <strong>16,7%</strong> dari konsumsi daya.</p>

<h2>Dampak Lingkungan</h2>
<p>Pembakaran bahan bakar fosil menghasilkan gas rumah kaca (CO₂, CH₄) yang menyebabkan pemanasan global. Energi terbarukan menghasilkan emisi jauh lebih rendah.</p>
`,
};

const ch03: Chapter = {
  id: "fis-03",
  title: "Pemanasan Global",
  grade: 10,
  order: 3,
  description: "Mekanisme efek rumah kaca, gas rumah kaca, dampak perubahan iklim, solusi dekarbonisasi.",
  content: `
<h2>Efek Rumah Kaca</h2>
<p>Sinar matahari menembus atmosfer dan memanaskan permukaan bumi. Permukaan bumi memancarkan kembali radiasi inframerah. Gas rumah kaca di atmosfer menyerap radiasi ini dan memantulkannya kembali ke permukaan, menyebabkan suhu bumi naik.</p>

<h2>Gas Rumah Kaca (GRK)</h2>
<ul>
<li><strong>CO₂</strong> (karbon dioksida) — pembakaran bahan bakar fosil, deforestasi</li>
<li><strong>CH₄</strong> (metana) — peternakan, lahan basah, tambang batu bara</li>
<li><strong>N₂O</strong> (dinitrogen oksida) — pupuk kimia, pembakaran</li>
<li><strong>CFC</strong> (klorofluorokarbon) — pendingin lama, aerosol</li>
</ul>

<h2>Dampak Pemanasan Global</h2>
<ul>
<li>Kenaikan suhu rata-rata bumi (±1,1°C sejak era pra-industri)</li>
<li>Mencairnya es kutub dan gletser → kenaikan permukaan laut</li>
<li>Pola cuaca ekstrem (badai, banjir, kekeringan)</li>
<li>Kerusakan ekosistem laut (pemutihan terumbu karang)</li>
<li>Ancaman ketahanan pangan dan air bersih</li>
</ul>

<h2>Solusi</h2>
<ul>
<li><strong>Dekarbonisasi</strong>: beralih dari bahan bakar fosil ke energi terbarukan</li>
<li><strong>Reforestasi</strong>: menanam pohon untuk menyerap CO₂</li>
<li><strong>Efisiensi energi</strong>: teknologi hemat energi</li>
<li><strong>Perjanjian internasional</strong>: Protokol Kyoto, Perjanjian Paris (target ≤ 1,5°C)</li>
</ul>
`,
};

// ── Kelas XI (Grade 11) ─────────────────────────────────

const ch04: Chapter = {
  id: "fis-04",
  title: "Kinematika Gerak Lurus",
  grade: 11,
  order: 4,
  description: "GLB, GLBB, gerak jatuh bebas, gerak parabola.",
  content: `
<h2>Gerak Lurus Beraturan (GLB)</h2>
<p>Kecepatan konstan, percepatan = 0.</p>
<p><strong>s = v × t</strong></p>

<h2>Gerak Lurus Berubah Beraturan (GLBB)</h2>
<p>Percepatan konstan (a).</p>
<ul>
<li><strong>v = v₀ + at</strong></li>
<li><strong>s = v₀t + ½at²</strong></li>
<li><strong>v² = v₀² + 2as</strong></li>
</ul>

<h2>Gerak Jatuh Bebas (GJB)</h2>
<p>Kasus khusus GLBB dengan v₀ = 0 dan a = g ≈ 9,8 m/s².</p>
<ul>
<li><strong>v = gt</strong></li>
<li><strong>h = ½gt²</strong></li>
<li><strong>v = √(2gh)</strong></li>
</ul>
<h3>Contoh</h3>
<p>Bola dijatuhkan dari ketinggian 20 m. Waktu sampai tanah: t = √(2h/g) = √(40/9,8) ≈ <strong>2,02 s</strong></p>

<h2>Gerak Parabola</h2>
<p>Gerak dengan komponen horizontal (GLB) dan vertikal (GLBB).</p>
<ul>
<li><strong>x = v₀ cos α × t</strong></li>
<li><strong>y = v₀ sin α × t − ½gt²</strong></li>
<li>Tinggi maksimum: <strong>h<sub>max</sub> = v₀² sin²α / (2g)</strong></li>
<li>Jangkauan maksimum: <strong>R = v₀² sin 2α / g</strong></li>
</ul>
`,
};

const ch05: Chapter = {
  id: "fis-05",
  title: "Dinamika Gerak Partikel",
  grade: 11,
  order: 5,
  description: "Hukum Newton I, II, III, gaya gesek, gaya sentripetal.",
  content: `
<h2>Hukum Newton</h2>
<h3>Hukum I (Kelembaman)</h3>
<p>Jika resultan gaya = 0, benda tetap diam atau bergerak lurus beraturan.</p>
<p><strong>ΣF = 0</strong></p>

<h3>Hukum II</h3>
<p>Percepatan benda berbanding lurus dengan resultan gaya dan berbanding terbalik dengan massa.</p>
<p><strong>ΣF = m × a</strong></p>

<h3>Hukum III (Aksi-Reaksi)</h3>
<p>Setiap aksi menimbulkan reaksi yang sama besar dan berlawanan arah.</p>
<p><strong>F<sub>aksi</sub> = −F<sub>reaksi</sub></strong></p>

<h2>Gaya Gesek</h2>
<ul>
<li><strong>Gesek statis</strong>: f<sub>s</sub> ≤ μ<sub>s</sub> × N (benda belum bergerak)</li>
<li><strong>Gesek kinetis</strong>: f<sub>k</sub> = μ<sub>k</sub> × N (benda sudah bergerak)</li>
</ul>
<p>N = gaya normal. Pada bidang datar: N = mg.</p>

<h2>Gaya Sentripetal</h2>
<p>Gaya yang bekerja pada benda yang bergerak melingkar, mengarah ke pusat lingkaran:</p>
<p><strong>F<sub>s</sub> = mv²/r = mω²r</strong></p>
<h3>Contoh</h3>
<p>Mobil 1000 kg menikung dengan r = 50 m pada v = 10 m/s:<br/>F = 1000 × 100/50 = <strong>2000 N</strong></p>
`,
};

const ch06: Chapter = {
  id: "fis-06",
  title: "Usaha dan Energi",
  grade: 11,
  order: 6,
  description: "Usaha, energi kinetik, energi potensial, hukum kekekalan energi mekanik.",
  content: `
<h2>Usaha (Work)</h2>
<p><strong>W = F × s × cos θ</strong></p>
<p>W = usaha (Joule), F = gaya (N), s = perpindahan (m), θ = sudut antara gaya dan perpindahan.</p>

<h2>Energi Kinetik</h2>
<p>Energi yang dimiliki benda karena geraknya:</p>
<p><strong>EK = ½mv²</strong></p>
<p>Teorema usaha-energi kinetik: <strong>W = ΔEK = ½mv₂² − ½mv₁²</strong></p>

<h2>Energi Potensial Gravitasi</h2>
<p><strong>EP = mgh</strong></p>
<p>m = massa (kg), g = percepatan gravitasi (m/s²), h = ketinggian (m).</p>

<h2>Hukum Kekekalan Energi Mekanik</h2>
<p>Jika hanya gaya konservatif (gravitasi) yang bekerja:</p>
<p><strong>EM₁ = EM₂</strong> → <strong>EK₁ + EP₁ = EK₂ + EP₂</strong></p>
<h3>Contoh</h3>
<p>Bola 0,5 kg jatuh bebas dari h = 10 m. Kecepatan saat sampai tanah:<br/>mgh = ½mv² → v = √(2gh) = √(2 × 9,8 × 10) = <strong>14 m/s</strong></p>
`,
};

const ch07: Chapter = {
  id: "fis-07",
  title: "Momentum dan Impuls",
  grade: 11,
  order: 7,
  description: "Momentum, impuls, hukum kekekalan momentum, jenis tumbukan.",
  content: `
<h2>Momentum</h2>
<p><strong>p = m × v</strong></p>
<p>Momentum adalah ukuran "kesulitan" untuk menghentikan benda yang bergerak.</p>

<h2>Impuls</h2>
<p><strong>I = F × Δt = Δp</strong></p>
<p>Impuls adalah perubahan momentum akibat gaya yang bekerja dalam selang waktu tertentu.</p>

<h2>Hukum Kekekalan Momentum</h2>
<p>Jika tidak ada gaya luar, total momentum sistem sebelum dan sesudah tumbukan sama:</p>
<p><strong>m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'</strong></p>

<h2>Jenis Tumbukan</h2>
<ul>
<li><strong>Lenting sempurna</strong> (e = 1): EK kekal, momentum kekal</li>
<li><strong>Lenting sebagian</strong> (0 &lt; e &lt; 1): EK berkurang, momentum kekal</li>
<li><strong>Tidak lenting sama sekali</strong> (e = 0): kedua benda menyatu, v' sama</li>
</ul>
<h3>Contoh</h3>
<p>Peluru 10 g ditembakkan ke balok 2 kg yang diam. Peluru tertanam (tumbukan tak lenting):<br/>0,01 × 200 = (0,01 + 2) × v' → v' = 2/2,01 ≈ <strong>0,995 m/s</strong></p>
`,
};

const ch08: Chapter = {
  id: "fis-08",
  title: "Dinamika Rotasi & Benda Tegar",
  grade: 11,
  order: 8,
  description: "Momen inersia, torsi, momentum sudut, keseimbangan benda tegar, titik berat.",
  content: `
<h2>Torsi (Momen Gaya)</h2>
<p><strong>τ = r × F × sin θ</strong></p>
<p>τ = torsi (N·m), r = jarak dari poros ke titik kerja gaya, θ = sudut antara r dan F.</p>

<h2>Momen Inersia</h2>
<p><strong>I = Σmᵢrᵢ²</strong> — ukuran kelembaman benda terhadap rotasi.</p>
<ul>
<li>Batang tipis (poros di pusat): I = ⅓mL² atau ¹⁄₁₂mL²</li>
<li>Silinder pejal: I = ½mR²</li>
<li>Bola pejal: I = ⅖mR²</li>
</ul>

<h2>Hukum Newton Rotasi</h2>
<p><strong>τ = I × α</strong> (analog ΣF = ma)</p>

<h2>Momentum Sudut</h2>
<p><strong>L = I × ω</strong> (analog p = mv)</p>
<p>Kekekalan momentum sudut: <strong>I₁ω₁ = I₂ω₂</strong></p>

<h2>Titik Berat</h2>
<p>Titik di mana seluruh berat benda dapat dianggap terkonsentrasi. Untuk benda homogen simetris, titik berat berada di pusat geometri.</p>
`,
};

const ch09: Chapter = {
  id: "fis-09",
  title: "Elastisitas Bahan",
  grade: 11,
  order: 9,
  description: "Tegangan, regangan, Modulus Young, Hukum Hooke, susunan pegas.",
  content: `
<h2>Tegangan dan Regangan</h2>
<p><strong>Tegangan (σ) = F/A</strong> — gaya per satuan luas penampang (Pa)</p>
<p><strong>Regangan (ε) = ΔL/L₀</strong> — perubahan panjang relatif (tanpa satuan)</p>

<h2>Modulus Young</h2>
<p><strong>E = σ/ε = (F × L₀)/(A × ΔL)</strong></p>
<p>Ukuran kekakuan bahan. Semakin besar E, semakin kaku (sulit diregangkan).</p>

<h2>Hukum Hooke</h2>
<p><strong>F = k × Δx</strong></p>
<p>F = gaya (N), k = konstanta pegas (N/m), Δx = pertambahan panjang pegas (m).</p>
<p>Energi potensial pegas: <strong>EP = ½k(Δx)²</strong></p>

<h2>Susunan Pegas</h2>
<ul>
<li><strong>Seri</strong>: 1/k<sub>tot</sub> = 1/k₁ + 1/k₂ + ...</li>
<li><strong>Paralel</strong>: k<sub>tot</sub> = k₁ + k₂ + ...</li>
</ul>
<h3>Contoh</h3>
<p>Dua pegas identik (k = 200 N/m) disusun seri: k<sub>tot</sub> = 1/(1/200 + 1/200) = <strong>100 N/m</strong></p>
`,
};

const ch10: Chapter = {
  id: "fis-10",
  title: "Mekanika Fluida",
  grade: 11,
  order: 10,
  description: "Tekanan hidrostatis, Hukum Pascal, Archimedes, kontinuitas, Bernoulli.",
  content: `
<h2>Tekanan Hidrostatis</h2>
<p><strong>P<sub>h</sub> = ρ × g × h</strong></p>
<p>ρ = massa jenis fluida (kg/m³), g = gravitasi (m/s²), h = kedalaman (m).</p>

<h2>Hukum Pascal</h2>
<p>Tekanan yang diberikan pada fluida dalam ruang tertutup diteruskan sama besar ke segala arah.</p>
<p><strong>F₁/A₁ = F₂/A₂</strong></p>

<h2>Hukum Archimedes</h2>
<p>Benda yang dicelupkan ke fluida mengalami gaya angkat ke atas sebesar berat fluida yang dipindahkan:</p>
<p><strong>F<sub>A</sub> = ρ<sub>f</sub> × g × V<sub>celup</sub></strong></p>
<ul>
<li>Terapung: ρ<sub>benda</sub> &lt; ρ<sub>fluida</sub></li>
<li>Melayang: ρ<sub>benda</sub> = ρ<sub>fluida</sub></li>
<li>Tenggelam: ρ<sub>benda</sub> &gt; ρ<sub>fluida</sub></li>
</ul>

<h2>Asas Kontinuitas</h2>
<p><strong>A₁v₁ = A₂v₂</strong> — debit fluida tetap di sepanjang pipa.</p>

<h2>Hukum Bernoulli</h2>
<p><strong>P + ½ρv² + ρgh = konstan</strong></p>
<p>Penerapan: gaya angkat pesawat, venturimeter, penyemprot.</p>
`,
};

const ch11: Chapter = {
  id: "fis-11",
  title: "Suhu dan Kalor",
  grade: 11,
  order: 11,
  description: "Termometer, pemuaian zat, kalor jenis, Asas Black, perpindahan kalor.",
  content: `
<h2>Suhu dan Termometer</h2>
<p>Skala suhu: Celsius (°C), Fahrenheit (°F), Kelvin (K), Reaumur (°R).</p>
<p><strong>K = °C + 273,15</strong></p>

<h2>Pemuaian Zat</h2>
<ul>
<li><strong>Panjang</strong>: ΔL = L₀ × α × ΔT</li>
<li><strong>Luas</strong>: ΔA = A₀ × β × ΔT (β ≈ 2α)</li>
<li><strong>Volume</strong>: ΔV = V₀ × γ × ΔT (γ ≈ 3α)</li>
</ul>

<h2>Kalor</h2>
<p><strong>Q = m × c × ΔT</strong></p>
<p>Q = kalor (J), m = massa (kg), c = kalor jenis (J/kg·°C), ΔT = perubahan suhu.</p>
<p>Kalor laten: <strong>Q = m × L</strong> (saat perubahan wujud, suhu tetap).</p>

<h2>Asas Black</h2>
<p>Pada pencampuran dua zat: <strong>Q<sub>lepas</sub> = Q<sub>terima</sub></strong></p>
<p>m₁c₁(T₁ − T<sub>c</sub>) = m₂c₂(T<sub>c</sub> − T₂)</p>

<h2>Perpindahan Kalor</h2>
<ul>
<li><strong>Konduksi</strong>: Q/t = kAΔT/L</li>
<li><strong>Konveksi</strong>: Q/t = hAΔT</li>
<li><strong>Radiasi</strong>: Q/t = εσAT⁴</li>
</ul>
`,
};

const ch12: Chapter = {
  id: "fis-12",
  title: "Teori Kinetik Gas",
  grade: 11,
  order: 12,
  description: "Gas ideal, persamaan keadaan, tekanan gas, energi kinetik partikel.",
  content: `
<h2>Gas Ideal</h2>
<p>Asumsi gas ideal: partikel titik, tidak ada gaya antarmolekul, tumbukan lenting sempurna.</p>

<h2>Persamaan Keadaan Gas Ideal</h2>
<p><strong>PV = nRT</strong> atau <strong>PV = NkT</strong></p>
<ul>
<li>P = tekanan (Pa), V = volume (m³)</li>
<li>n = jumlah mol, R = 8,314 J/(mol·K)</li>
<li>N = jumlah partikel, k = 1,38 × 10⁻²³ J/K (konstanta Boltzmann)</li>
<li>T = suhu mutlak (K)</li>
</ul>

<h2>Tekanan Gas</h2>
<p><strong>P = (2/3)(N/V) × EK<sub>rata-rata</sub></strong></p>

<h2>Energi Kinetik Rata-rata</h2>
<p><strong>EK = (3/2)kT</strong> — bergantung hanya pada suhu.</p>
<p>Kecepatan RMS: <strong>v<sub>rms</sub> = √(3kT/m) = √(3RT/M)</strong></p>

<h2>Hukum-hukum Gas</h2>
<ul>
<li><strong>Boyle</strong>: PV = konstan (T tetap)</li>
<li><strong>Charles</strong>: V/T = konstan (P tetap)</li>
<li><strong>Gay-Lussac</strong>: P/T = konstan (V tetap)</li>
</ul>
`,
};

// ── Kelas XII (Grade 12) ────────────────────────────────

const ch13: Chapter = {
  id: "fis-13",
  title: "Listrik Arus Searah (DC)",
  grade: 12,
  order: 13,
  description: "Hukum Ohm, hambatan kawat, Hukum Kirchhoff, daya listrik DC.",
  content: `
<h2>Hukum Ohm</h2>
<p><strong>V = I × R</strong></p>
<p>V = beda potensial (Volt), I = kuat arus (Ampere), R = hambatan (Ohm).</p>

<h2>Hambatan Kawat</h2>
<p><strong>R = ρ × L/A</strong></p>
<p>ρ = hambatan jenis (Ω·m), L = panjang kawat (m), A = luas penampang (m²).</p>

<h2>Rangkaian Hambatan</h2>
<ul>
<li><strong>Seri</strong>: R<sub>tot</sub> = R₁ + R₂ + R₃ + ...</li>
<li><strong>Paralel</strong>: 1/R<sub>tot</sub> = 1/R₁ + 1/R₂ + 1/R₃ + ...</li>
</ul>

<h2>Hukum Kirchhoff</h2>
<ul>
<li><strong>Kirchhoff I</strong> (arus): ΣI<sub>masuk</sub> = ΣI<sub>keluar</sub> di setiap titik percabangan</li>
<li><strong>Kirchhoff II</strong> (tegangan): ΣV = 0 dalam loop tertutup</li>
</ul>

<h2>Daya Listrik</h2>
<p><strong>P = V × I = I²R = V²/R</strong></p>
<p>Energi listrik: <strong>W = P × t</strong> (Joule)</p>
`,
};

const ch14: Chapter = {
  id: "fis-14",
  title: "Listrik Statis (Elektrostatika)",
  grade: 12,
  order: 14,
  description: "Hukum Coulomb, medan listrik, potensial listrik, kapasitor.",
  content: `
<h2>Hukum Coulomb</h2>
<p><strong>F = k × q₁q₂/r²</strong></p>
<p>k = 9 × 10⁹ N·m²/C², q = muatan (C), r = jarak (m).</p>

<h2>Medan Listrik</h2>
<p><strong>E = F/q = k × Q/r²</strong></p>
<p>Arah: menjauhi muatan positif, menuju muatan negatif.</p>

<h2>Potensial Listrik</h2>
<p><strong>V = k × Q/r</strong> (Volt)</p>
<p>Usaha memindahkan muatan: <strong>W = q × ΔV</strong></p>

<h2>Energi Potensial Listrik</h2>
<p><strong>EP = k × q₁q₂/r</strong></p>

<h2>Kapasitor</h2>
<p><strong>C = Q/V</strong> — kapasitansi (Farad)</p>
<p>Kapasitor keping sejajar: <strong>C = ε₀A/d</strong></p>
<p>Energi tersimpan: <strong>W = ½CV²</strong></p>
<ul>
<li>Seri: 1/C<sub>tot</sub> = 1/C₁ + 1/C₂</li>
<li>Paralel: C<sub>tot</sub> = C₁ + C₂</li>
</ul>
`,
};

const ch15: Chapter = {
  id: "fis-15",
  title: "Medan Magnet & Induksi",
  grade: 12,
  order: 15,
  description: "Induksi magnetik, gaya Lorentz, Hukum Faraday & Lenz, transformator.",
  content: `
<h2>Medan Magnet oleh Arus</h2>
<p><strong>Kawat lurus panjang</strong>: B = μ₀I/(2πr)</p>
<p><strong>Solenoida</strong>: B = μ₀nI (n = N/L)</p>
<p>μ₀ = 4π × 10⁻⁷ T·m/A</p>

<h2>Gaya Lorentz</h2>
<p><strong>F = BIL sin θ</strong> (kawat berarus dalam medan magnet)</p>
<p><strong>F = qvB sin θ</strong> (muatan bergerak dalam medan magnet)</p>

<h2>Hukum Faraday</h2>
<p><strong>ε = −N × dΦ/dt</strong></p>
<p>GGL induksi timbul akibat perubahan fluks magnetik. Tanda negatif sesuai Hukum Lenz (melawan perubahan).</p>

<h2>Transformator</h2>
<p><strong>V<sub>p</sub>/V<sub>s</sub> = N<sub>p</sub>/N<sub>s</sub> = I<sub>s</sub>/I<sub>p</sub></strong></p>
<ul>
<li>Step-up: N<sub>s</sub> &gt; N<sub>p</sub> → tegangan naik</li>
<li>Step-down: N<sub>s</sub> &lt; N<sub>p</sub> → tegangan turun</li>
</ul>
`,
};

const ch16: Chapter = {
  id: "fis-16",
  title: "Listrik Arus Bolak-Balik (AC)",
  grade: 12,
  order: 16,
  description: "Nilai efektif/maksimum AC, impedansi RLC, resonansi.",
  content: `
<h2>Arus dan Tegangan AC</h2>
<p><strong>V(t) = V<sub>max</sub> sin(ωt)</strong></p>
<p><strong>I(t) = I<sub>max</sub> sin(ωt + φ)</strong></p>
<p>Nilai efektif (RMS): <strong>V<sub>eff</sub> = V<sub>max</sub>/√2</strong></p>

<h2>Impedansi Rangkaian RLC Seri</h2>
<p><strong>Z = √(R² + (X<sub>L</sub> − X<sub>C</sub>)²)</strong></p>
<ul>
<li>Reaktansi induktif: <strong>X<sub>L</sub> = ωL = 2πfL</strong></li>
<li>Reaktansi kapasitif: <strong>X<sub>C</sub> = 1/(ωC) = 1/(2πfC)</strong></li>
</ul>

<h2>Resonansi</h2>
<p>Terjadi saat X<sub>L</sub> = X<sub>C</sub>, impedansi minimum Z = R:</p>
<p><strong>f<sub>res</sub> = 1/(2π√(LC))</strong></p>
<p>Pada resonansi, arus maksimum dan daya rata-rata maksimum.</p>

<h2>Daya Rata-rata AC</h2>
<p><strong>P = V<sub>eff</sub> × I<sub>eff</sub> × cos φ</strong></p>
<p>cos φ = faktor daya.</p>
`,
};

const ch17: Chapter = {
  id: "fis-17",
  title: "Relativitas Khusus",
  grade: 12,
  order: 17,
  description: "Postulat Einstein, dilatasi waktu, kontraksi panjang, energi relativistik.",
  content: `
<h2>Postulat Einstein</h2>
<ol>
<li>Hukum fisika sama di semua kerangka acuan inersia.</li>
<li>Kecepatan cahaya dalam vakum (c = 3 × 10⁸ m/s) sama bagi semua pengamat.</li>
</ol>

<h2>Faktor Lorentz</h2>
<p><strong>γ = 1/√(1 − v²/c²)</strong></p>

<h2>Dilatasi Waktu</h2>
<p><strong>Δt = γ × Δt₀</strong></p>
<p>Waktu yang diukur pengamat bergerak lebih lama (waktu melambat).</p>

<h2>Kontraksi Panjang</h2>
<p><strong>L = L₀/γ = L₀√(1 − v²/c²)</strong></p>
<p>Panjang benda yang bergerak tampak lebih pendek.</p>

<h2>Massa dan Energi Relativistik</h2>
<p><strong>E = mc²</strong></p>
<p>Massa relativistik: <strong>m = γm₀</strong></p>
<p>Energi total: <strong>E = γm₀c²</strong></p>
<p>Energi kinetik relativistik: <strong>EK = (γ − 1)m₀c²</strong></p>
`,
};

const ch18: Chapter = {
  id: "fis-18",
  title: "Fisika Kuantum & Atom",
  grade: 12,
  order: 18,
  description: "Radiasi benda hitam, efek fotolistrik, efek Compton, dualisme gelombang-partikel.",
  content: `
<h2>Radiasi Benda Hitam</h2>
<p>Benda hitam menyerap dan memancarkan semua radiasi. Hukum Planck:</p>
<p><strong>E = nhf</strong> — energi dipancarkan dalam paket (kuanta), n = 1, 2, 3, ...</p>
<p>h = 6,626 × 10⁻³⁴ J·s (konstanta Planck).</p>

<h2>Efek Fotolistrik</h2>
<p>Cahaya dengan frekuensi cukup (f ≥ f₀) dapat melepaskan elektron dari permukaan logam:</p>
<p><strong>EK<sub>max</sub> = hf − W₀</strong></p>
<p>W₀ = hf₀ = fungsi kerja logam (energi minimum untuk melepaskan elektron).</p>

<h2>Efek Compton</h2>
<p>Foton yang bertumbukan dengan elektron mengalami perubahan panjang gelombang:</p>
<p><strong>Δλ = (h/mc)(1 − cos θ)</strong></p>

<h2>Dualisme Gelombang-Partikel (de Broglie)</h2>
<p><strong>λ = h/(mv) = h/p</strong></p>
<p>Partikel bermassa juga memiliki sifat gelombang.</p>

<h2>Model Atom</h2>
<ul>
<li><strong>Bohr</strong>: elektron beredar pada orbit tertentu, memancarkan foton saat berpindah orbit</li>
<li><strong>Mekanika Kuantum</strong>: elektron berada dalam orbital (awan probabilitas), bukan orbit pasti</li>
</ul>
`,
};

const ch19: Chapter = {
  id: "fis-19",
  title: "Fisika Inti & Radioaktivitas",
  grade: 12,
  order: 19,
  description: "Defek massa, energi ikat inti, fisi & fusi nuklir, waktu paruh.",
  content: `
<h2>Struktur Inti Atom</h2>
<p>Inti atom terdiri dari <strong>proton</strong> (Z) dan <strong>neutron</strong> (N). Nomor massa: <strong>A = Z + N</strong>.</p>

<h2>Defek Massa dan Energi Ikat Inti</h2>
<p>Massa inti selalu lebih kecil dari jumlah massa proton + neutron:</p>
<p><strong>Δm = Zm<sub>p</sub> + Nm<sub>n</sub> − m<sub>inti</sub></strong></p>
<p>Energi ikat: <strong>E = Δm × c²</strong> atau <strong>E = Δm × 931,5 MeV/u</strong></p>

<h2>Radioaktivitas</h2>
<p>Peluruhan spontan inti tidak stabil, memancarkan:</p>
<ul>
<li><strong>Sinar α</strong>: inti helium (⁴₂He), daya tembus rendah</li>
<li><strong>Sinar β</strong>: elektron (β⁻) atau positron (β⁺), daya tembus sedang</li>
<li><strong>Sinar γ</strong>: gelombang elektromagnetik energi tinggi, daya tembus tinggi</li>
</ul>

<h2>Waktu Paruh</h2>
<p><strong>N(t) = N₀ × (½)<sup>t/T½</sup></strong></p>
<p>T½ = waktu paruh, waktu yang diperlukan agar setengah zat radioaktif meluruh.</p>

<h2>Fisi dan Fusi Nuklir</h2>
<ul>
<li><strong>Fisi</strong>: pembelahan inti berat (²³⁵U) → energi besar (PLTN, bom atom)</li>
<li><strong>Fusi</strong>: penggabungan inti ringan (H → He) → energi sangat besar (matahari, bom hidrogen)</li>
</ul>
`,
};

export const fisikaChapters: Chapter[] = [
  ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08, ch09, ch10,
  ch11, ch12, ch13, ch14, ch15, ch16, ch17, ch18, ch19,
];

export const fisikaMap = new Map(fisikaChapters.map((c) => [c.id, c]));

export function getFisikaChapter(id: string): Chapter | undefined {
  return fisikaMap.get(id);
}
