import type { Chapter } from "./types";
export type { Chapter } from "./types";

// ── Kelas X (Grade 10) ─────────────────────────────────

const ch01: Chapter = {
  id: "kim-01",
  title: "Pengenalan Kimia & Metode Ilmiah",
  grade: 10,
  order: 1,
  description: "Peran kimia, metode ilmiah, simbol bahaya, keselamatan laboratorium.",
  content: `
<h2>Peran Kimia</h2>
<p>Kimia mempelajari komposisi, struktur, sifat, dan perubahan materi. Penerapan: obat-obatan, plastik, pupuk, bahan makanan, kosmetik, pengolahan limbah.</p>

<h2>Metode Ilmiah</h2>
<ol>
<li>Mengamati fenomena</li>
<li>Merumuskan masalah/pertanyaan</li>
<li>Membuat hipotesis</li>
<li>Melakukan eksperimen</li>
<li>Menganalisis data</li>
<li>Menarik kesimpulan</li>
</ol>

<h2>Simbol Bahaya Bahan Kimia</h2>
<ul>
<li>☠ <strong>Toksik</strong> — beracun</li>
<li>🔥 <strong>Flammable</strong> — mudah terbakar</li>
<li>⚠ <strong>Korosif</strong> — merusak jaringan/logam</li>
<li>☢ <strong>Radioaktif</strong> — memancarkan radiasi</li>
<li>🌿 <strong>Berbahaya bagi lingkungan</strong></li>
</ul>

<h2>Keselamatan Laboratorium</h2>
<p>Selalu gunakan jas lab, kacamata pelindung, dan sarung tangan. Kenali lokasi alat pemadam api, shower darurat, dan eye wash. Jangan makan/minum di laboratorium.</p>
`,
};

const ch02: Chapter = {
  id: "kim-02",
  title: "Struktur Atom & Konfigurasi",
  grade: 10,
  order: 2,
  description: "Model atom, partikel subatomik, nomor atom/massa, konfigurasi elektron.",
  content: `
<h2>Partikel Subatomik</h2>
<ul>
<li><strong>Proton</strong> (+): massa ≈ 1 sma, di inti atom</li>
<li><strong>Neutron</strong> (0): massa ≈ 1 sma, di inti atom</li>
<li><strong>Elektron</strong> (−): massa ≈ 0, mengelilingi inti</li>
</ul>
<p><strong>Nomor atom (Z)</strong> = jumlah proton. <strong>Nomor massa (A)</strong> = proton + neutron.</p>

<h2>Perkembangan Model Atom</h2>
<ul>
<li><strong>Dalton</strong>: atom bola pejal tak terbagi</li>
<li><strong>Thomson</strong>: model roti kismis (elektron tersebar)</li>
<li><strong>Rutherford</strong>: inti kecil positif, elektron mengelilingi</li>
<li><strong>Bohr</strong>: elektron pada kulit/orbit tertentu</li>
<li><strong>Mekanika Kuantum</strong>: elektron dalam orbital (awan probabilitas)</li>
</ul>

<h2>Konfigurasi Elektron (Bohr)</h2>
<p>Kulit K(2), L(8), M(18), N(32). Rumus maksimum: <strong>2n²</strong></p>
<h3>Contoh</h3>
<p>Na (Z=11): K=2, L=8, M=1 → elektron valensi = 1</p>
<p>Cl (Z=17): K=2, L=8, M=7 → elektron valensi = 7</p>

<h2>Konfigurasi SPO (Mekanika Kuantum)</h2>
<p>Subkulit: s(2), p(6), d(10), f(14). Urutan: 1s 2s 2p 3s 3p 4s 3d 4p 5s ...</p>
<h3>Contoh</h3>
<p>Fe (Z=26): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶</p>
`,
};

const ch03: Chapter = {
  id: "kim-03",
  title: "Tabel Periodik Unsur",
  grade: 10,
  order: 3,
  description: "Golongan, periode, tren sifat periodik unsur.",
  content: `
<h2>Struktur Tabel Periodik</h2>
<p><strong>Golongan</strong> (kolom vertikal): unsur dengan elektron valensi sama → sifat kimia mirip.</p>
<p><strong>Periode</strong> (baris horizontal): unsur dengan jumlah kulit sama.</p>

<h2>Golongan Utama</h2>
<ul>
<li>IA — Alkali (Li, Na, K ...): sangat reaktif, 1 elektron valensi</li>
<li>IIA — Alkali tanah (Be, Mg, Ca ...): reaktif, 2 elektron valensi</li>
<li>VIIA — Halogen (F, Cl, Br ...): nonlogam reaktif, 7 elektron valensi</li>
<li>VIIIA — Gas mulia (He, Ne, Ar ...): stabil, kulit penuh</li>
</ul>

<h2>Tren Sifat Periodik</h2>
<table border="1" style="width:100%; text-align:center">
<tr><th>Sifat</th><th>Dalam satu golongan (↓)</th><th>Dalam satu periode (→)</th></tr>
<tr><td>Jari-jari atom</td><td>Bertambah</td><td>Berkurang</td></tr>
<tr><td>Energi ionisasi</td><td>Berkurang</td><td>Bertambah</td></tr>
<tr><td>Afinitas elektron</td><td>Berkurang</td><td>Bertambah</td></tr>
<tr><td>Elektronegativitas</td><td>Berkurang</td><td>Bertambah</td></tr>
<tr><td>Sifat logam</td><td>Bertambah</td><td>Berkurang</td></tr>
</table>
`,
};

const ch04: Chapter = {
  id: "kim-04",
  title: "Ikatan Kimia",
  grade: 10,
  order: 4,
  description: "Ikatan ion, kovalen, logam, gaya antarmolekul.",
  content: `
<h2>Ikatan Ion</h2>
<p>Terjadi antara <strong>logam</strong> (melepas elektron) dan <strong>nonlogam</strong> (menerima elektron). Contoh: NaCl.</p>
<p>Na → Na⁺ + e⁻ ; Cl + e⁻ → Cl⁻ ; Gaya tarik elektrostatik Na⁺ dan Cl⁻ membentuk ikatan ion.</p>

<h2>Ikatan Kovalen</h2>
<p>Terjadi antara <strong>nonlogam</strong> dengan <strong>nonlogam</strong> melalui pemakaian bersama pasangan elektron.</p>
<ul>
<li><strong>Kovalen tunggal</strong>: 1 pasang elektron bersama (H₂, Cl₂)</li>
<li><strong>Kovalen rangkap dua</strong>: 2 pasang (O₂, CO₂)</li>
<li><strong>Kovalen rangkap tiga</strong>: 3 pasang (N₂)</li>
<li><strong>Kovalen koordinasi</strong>: pasangan elektron berasal dari satu atom saja (NH₄⁺)</li>
</ul>

<h2>Ikatan Logam</h2>
<p>Elektron valensi bergerak bebas membentuk "lautan elektron" yang mengikat ion-ion logam positif. Menjelaskan sifat konduktor dan mudah ditempa.</p>

<h2>Gaya Antarmolekul</h2>
<ul>
<li><strong>Ikatan hidrogen</strong>: H yang terikat F, O, atau N menarik molekul tetangga (air, HF)</li>
<li><strong>Gaya van der Waals</strong>: gaya dispersi London dan dipol-dipol (lebih lemah)</li>
</ul>
`,
};

const ch05: Chapter = {
  id: "kim-05",
  title: "Stoikiometri & Hukum Dasar",
  grade: 10,
  order: 5,
  description: "Hukum kekekalan massa, konsep mol, rumus empiris/molekul, hitungan reaksi.",
  content: `
<h2>Hukum Dasar Kimia</h2>
<ul>
<li><strong>Lavoisier</strong> (Kekekalan Massa): massa zat sebelum = sesudah reaksi</li>
<li><strong>Proust</strong> (Perbandingan Tetap): perbandingan massa unsur dalam senyawa selalu tetap</li>
<li><strong>Dalton</strong> (Perbandingan Berganda): perbandingan massa unsur yang bersenyawa dengan massa unsur lain yang sama merupakan bilangan bulat sederhana</li>
<li><strong>Gay-Lussac</strong> (Perbandingan Volume): volume gas-gas yang bereaksi berbanding sebagai bilangan bulat sederhana</li>
<li><strong>Avogadro</strong>: pada suhu dan tekanan yang sama, volume gas yang sama mengandung jumlah molekul yang sama</li>
</ul>

<h2>Konsep Mol</h2>
<p><strong>1 mol = 6,022 × 10²³ partikel</strong> (bilangan Avogadro)</p>
<ul>
<li>n = massa / Mr (mol)</li>
<li>n = volume / 22,4 L (gas pada STP)</li>
<li>n = jumlah partikel / 6,022 × 10²³</li>
</ul>

<h2>Rumus Empiris dan Molekul</h2>
<p><strong>RE</strong>: perbandingan terkecil atom-atom. <strong>RM</strong>: jumlah atom sebenarnya (RM = n × RE).</p>
<h3>Contoh</h3>
<p>Senyawa dengan 40% C, 6,7% H, 53,3% O (Mr = 60):<br/>RE = CH₂O, n = 60/30 = 2, RM = <strong>C₂H₄O₂</strong></p>
`,
};

// ── Kelas XI (Grade 11) ─────────────────────────────────

const ch06: Chapter = {
  id: "kim-06",
  title: "Hidrokarbon & Minyak Bumi",
  grade: 11,
  order: 6,
  description: "Kekhasan atom C, alkana, alkena, alkuna, isomer, fraksionasi minyak bumi.",
  content: `
<h2>Kekhasan Atom Karbon</h2>
<p>Atom C memiliki 4 elektron valensi → dapat membentuk 4 ikatan kovalen. Mampu membentuk rantai panjang (katenasi) dan struktur siklik.</p>

<h2>Alkana (C<sub>n</sub>H<sub>2n+2</sub>)</h2>
<p>Hidrokarbon jenuh (ikatan tunggal). Contoh: metana (CH₄), etana (C₂H₆), propana (C₃H₈).</p>

<h2>Alkena (C<sub>n</sub>H<sub>2n</sub>)</h2>
<p>Memiliki 1 ikatan rangkap dua C=C. Contoh: etena (C₂H₄), propena (C₃H₆).</p>

<h2>Alkuna (C<sub>n</sub>H<sub>2n-2</sub>)</h2>
<p>Memiliki 1 ikatan rangkap tiga C≡C. Contoh: etuna (C₂H₂).</p>

<h2>Isomer</h2>
<ul>
<li><strong>Isomer struktur</strong>: rumus molekul sama, struktur berbeda</li>
<li><strong>Isomer geometri</strong>: cis-trans pada alkena</li>
<li><strong>Isomer fungsi</strong>: gugus fungsi berbeda (alkohol vs eter)</li>
</ul>

<h2>Minyak Bumi</h2>
<p>Diproses dengan <strong>distilasi bertingkat</strong>: gas (LPG), bensin, kerosin, solar, minyak pelumas, aspal. Semakin ke atas → titik didih lebih rendah, rantai karbon lebih pendek.</p>
`,
};

const ch07: Chapter = {
  id: "kim-07",
  title: "Termokimia",
  grade: 11,
  order: 7,
  description: "Entalpi, reaksi eksoterm/endoterm, Hukum Hess, kalorimeter.",
  content: `
<h2>Entalpi (H)</h2>
<p>Perubahan entalpi (ΔH) = kalor yang diserap/dilepaskan pada tekanan tetap.</p>
<ul>
<li><strong>ΔH &lt; 0</strong> → reaksi <strong>eksoterm</strong> (melepaskan kalor, suhu naik)</li>
<li><strong>ΔH &gt; 0</strong> → reaksi <strong>endoterm</strong> (menyerap kalor, suhu turun)</li>
</ul>

<h2>Kalorimeter</h2>
<p><strong>q = m × c × ΔT</strong> atau <strong>q = C × ΔT</strong> (C = kapasitas kalor)</p>

<h2>Hukum Hess</h2>
<p>ΔH reaksi tidak bergantung pada jalur, hanya bergantung pada keadaan awal dan akhir.</p>
<p><strong>ΔH<sub>reaksi</sub> = ΣΔH<sub>f produk</sub> − ΣΔH<sub>f reaktan</sub></strong></p>

<h2>Energi Ikatan</h2>
<p><strong>ΔH = Σ energi ikatan diputus − Σ energi ikatan terbentuk</strong></p>
<h3>Contoh</h3>
<p>H₂ + Cl₂ → 2HCl. E(H-H)=436, E(Cl-Cl)=243, E(H-Cl)=432 kJ/mol.<br/>ΔH = (436+243) − 2(432) = 679 − 864 = <strong>−185 kJ</strong> (eksoterm)</p>
`,
};

const ch08: Chapter = {
  id: "kim-08",
  title: "Laju Reaksi",
  grade: 11,
  order: 8,
  description: "Pengertian laju reaksi, teori tumbukan, faktor-faktor yang mempengaruhi.",
  content: `
<h2>Laju Reaksi</h2>
<p><strong>v = Δ[konsentrasi]/Δt</strong> — perubahan konsentrasi per satuan waktu (mol/L·s).</p>

<h2>Persamaan Laju</h2>
<p><strong>v = k[A]<sup>m</sup>[B]<sup>n</sup></strong></p>
<p>k = konstanta laju, m dan n = orde reaksi (ditentukan dari eksperimen).</p>

<h2>Teori Tumbukan</h2>
<p>Reaksi terjadi jika partikel bertumbukan dengan <strong>energi cukup</strong> (≥ energi aktivasi, Ea) dan <strong>orientasi tepat</strong>.</p>

<h2>Faktor yang Mempengaruhi Laju</h2>
<ul>
<li><strong>Konsentrasi</strong> ↑ → tumbukan lebih sering → laju ↑</li>
<li><strong>Suhu</strong> ↑ → energi kinetik ↑ → lebih banyak tumbukan efektif → laju ↑</li>
<li><strong>Luas permukaan</strong> ↑ (partikel lebih halus) → laju ↑</li>
<li><strong>Katalis</strong>: menurunkan Ea → laju ↑ (tidak ikut bereaksi secara permanen)</li>
</ul>
<p>Aturan kasar: setiap kenaikan suhu 10°C, laju reaksi ≈ 2× lebih cepat.</p>
`,
};

const ch09: Chapter = {
  id: "kim-09",
  title: "Kesetimbangan Kimia",
  grade: 11,
  order: 9,
  description: "Reaksi reversibel, tetapan kesetimbangan, asas Le Chatelier.",
  content: `
<h2>Kesetimbangan Dinamis</h2>
<p>Reaksi reversibel mencapai kesetimbangan saat laju reaksi maju = laju reaksi balik. Konsentrasi zat tetap, tetapi reaksi terus berlangsung.</p>

<h2>Tetapan Kesetimbangan</h2>
<p>Untuk reaksi: aA + bB ⇌ cC + dD</p>
<p><strong>Kc = [C]<sup>c</sup>[D]<sup>d</sup> / [A]<sup>a</sup>[B]<sup>b</sup></strong></p>
<p><strong>Kp = (P<sub>C</sub>)<sup>c</sup>(P<sub>D</sub>)<sup>d</sup> / (P<sub>A</sub>)<sup>a</sup>(P<sub>B</sub>)<sup>b</sup></strong></p>
<p>Hubungan: <strong>Kp = Kc(RT)<sup>Δn</sup></strong> di mana Δn = mol gas produk − mol gas reaktan.</p>

<h2>Asas Le Chatelier</h2>
<p>Sistem kesetimbangan akan bergeser untuk <strong>melawan</strong> gangguan dari luar:</p>
<ul>
<li><strong>Konsentrasi</strong>: tambah reaktan → geser ke kanan (produk)</li>
<li><strong>Tekanan</strong> ↑ → geser ke sisi dengan mol gas lebih sedikit</li>
<li><strong>Suhu</strong> ↑ → geser ke arah endoterm (menyerap kalor)</li>
<li><strong>Katalis</strong>: tidak menggeser, hanya mempercepat tercapainya kesetimbangan</li>
</ul>
`,
};

const ch10: Chapter = {
  id: "kim-10",
  title: "Teori Asam Basa & pH",
  grade: 11,
  order: 10,
  description: "Arrhenius, Brønsted-Lowry, Lewis, perhitungan pH, titrasi.",
  content: `
<h2>Teori Asam Basa</h2>
<ul>
<li><strong>Arrhenius</strong>: asam menghasilkan H⁺, basa menghasilkan OH⁻ dalam air</li>
<li><strong>Brønsted-Lowry</strong>: asam = donor proton, basa = akseptor proton</li>
<li><strong>Lewis</strong>: asam = akseptor pasangan elektron, basa = donor pasangan elektron</li>
</ul>

<h2>Perhitungan pH</h2>
<p><strong>pH = −log[H⁺]</strong> ; <strong>pOH = −log[OH⁻]</strong> ; <strong>pH + pOH = 14</strong></p>
<ul>
<li>Asam kuat: [H⁺] = M × valensi (HCl 0,01 M → pH = 2)</li>
<li>Asam lemah: [H⁺] = √(Ka × M)</li>
<li>Basa kuat: [OH⁻] = M × valensi (NaOH 0,001 M → pOH = 3 → pH = 11)</li>
<li>Basa lemah: [OH⁻] = √(Kb × M)</li>
</ul>

<h2>Titrasi Asam Basa</h2>
<p>Penentuan konsentrasi asam/basa dengan meneteskan larutan standar yang diketahui konsentrasinya.</p>
<p>Pada titik ekuivalen: <strong>n<sub>asam</sub> × valensi = n<sub>basa</sub> × valensi</strong></p>
<p><strong>M₁V₁ = M₂V₂</strong> (untuk asam-basa bervalensi 1)</p>
`,
};

const ch11: Chapter = {
  id: "kim-11",
  title: "Penyangga & Hidrolisis",
  grade: 11,
  order: 11,
  description: "Larutan buffer, hidrolisis garam, pH larutan garam.",
  content: `
<h2>Larutan Penyangga (Buffer)</h2>
<p>Larutan yang dapat mempertahankan pH meskipun ditambahkan sedikit asam atau basa.</p>
<ul>
<li><strong>Buffer asam</strong>: asam lemah + garamnya (CH₃COOH + CH₃COONa)</li>
<li><strong>Buffer basa</strong>: basa lemah + garamnya (NH₃ + NH₄Cl)</li>
</ul>
<p>pH buffer asam: <strong>pH = pKa + log([garam]/[asam])</strong></p>
<p>pH buffer basa: <strong>pOH = pKb + log([garam]/[basa])</strong></p>

<h2>Hidrolisis Garam</h2>
<p>Reaksi garam dengan air menghasilkan larutan asam atau basa.</p>
<ul>
<li><strong>Garam dari asam kuat + basa kuat</strong> (NaCl): netral, pH = 7</li>
<li><strong>Garam dari asam kuat + basa lemah</strong> (NH₄Cl): asam, pH &lt; 7</li>
<li><strong>Garam dari asam lemah + basa kuat</strong> (CH₃COONa): basa, pH &gt; 7</li>
<li><strong>Garam dari asam lemah + basa lemah</strong>: tergantung Ka dan Kb</li>
</ul>
`,
};

const ch12: Chapter = {
  id: "kim-12",
  title: "Kelarutan & Ksp",
  grade: 11,
  order: 12,
  description: "Kelarutan, tetapan hasil kali kelarutan, pengaruh ion senama.",
  content: `
<h2>Kelarutan (s)</h2>
<p>Jumlah maksimum zat yang dapat larut dalam sejumlah pelarut pada suhu tertentu (mol/L).</p>

<h2>Tetapan Hasil Kali Kelarutan (Ksp)</h2>
<p>Untuk garam sukar larut A<sub>x</sub>B<sub>y</sub> ⇌ xA<sup>y+</sup> + yB<sup>x−</sup>:</p>
<p><strong>Ksp = [A<sup>y+</sup>]<sup>x</sup>[B<sup>x−</sup>]<sup>y</sup></strong></p>
<h3>Contoh</h3>
<p>AgCl ⇌ Ag⁺ + Cl⁻. Jika s = kelarutan: Ksp = s × s = s²</p>
<p>Ag₂CrO₄ ⇌ 2Ag⁺ + CrO₄²⁻. Ksp = (2s)² × s = <strong>4s³</strong></p>

<h2>Pengaruh Ion Senama</h2>
<p>Penambahan ion yang sama (senama) akan <strong>menurunkan</strong> kelarutan (asas Le Chatelier).</p>
<h3>Contoh</h3>
<p>AgCl dalam larutan NaCl 0,1 M: [Cl⁻] = 0,1 + s ≈ 0,1.<br/>Ksp = s × 0,1 → s = Ksp/0,1 (jauh lebih kecil dari kelarutan dalam air murni).</p>
`,
};

const ch13: Chapter = {
  id: "kim-13",
  title: "Sistem Koloid",
  grade: 11,
  order: 13,
  description: "Jenis koloid, efek Tyndall, gerak Brown, adsorpsi, koagulasi.",
  content: `
<h2>Perbandingan Larutan, Koloid, Suspensi</h2>
<table border="1" style="width:100%">
<tr><th>Sifat</th><th>Larutan</th><th>Koloid</th><th>Suspensi</th></tr>
<tr><td>Ukuran partikel</td><td>&lt; 1 nm</td><td>1–100 nm</td><td>&gt; 100 nm</td></tr>
<tr><td>Efek Tyndall</td><td>Tidak</td><td>Ya</td><td>Ya</td></tr>
<tr><td>Penyaringan</td><td>Tak tersaring</td><td>Tak tersaring</td><td>Tersaring</td></tr>
<tr><td>Stabilitas</td><td>Stabil</td><td>Stabil</td><td>Mengendap</td></tr>
</table>

<h2>Jenis Koloid</h2>
<ul>
<li><strong>Sol</strong>: padat dalam cair (tinta, cat)</li>
<li><strong>Emulsi</strong>: cair dalam cair (susu, mayones)</li>
<li><strong>Aerosol</strong>: padat/cair dalam gas (asap, kabut)</li>
<li><strong>Buih</strong>: gas dalam cair (busa sabun)</li>
<li><strong>Gel</strong>: cair dalam padat (agar-agar, jelly)</li>
</ul>

<h2>Sifat Koloid</h2>
<ul>
<li><strong>Efek Tyndall</strong>: penghamburan cahaya oleh partikel koloid</li>
<li><strong>Gerak Brown</strong>: gerakan acak partikel koloid</li>
<li><strong>Adsorpsi</strong>: penyerapan zat pada permukaan koloid</li>
<li><strong>Koagulasi</strong>: penggumpalan partikel koloid (penambahan elektrolit)</li>
<li><strong>Elektroforesis</strong>: pergerakan partikel koloid dalam medan listrik</li>
</ul>
`,
};

// ── Kelas XII (Grade 12) ────────────────────────────────

const ch14: Chapter = {
  id: "kim-14",
  title: "Sifat Koligatif Larutan",
  grade: 12,
  order: 14,
  description: "Penurunan tekanan uap, kenaikan titik didih, penurunan titik beku, tekanan osmotik.",
  content: `
<h2>Sifat Koligatif</h2>
<p>Sifat larutan yang hanya bergantung pada <strong>jumlah partikel zat terlarut</strong>, bukan jenisnya.</p>

<h2>Penurunan Tekanan Uap (ΔP)</h2>
<p><strong>ΔP = x<sub>terlarut</sub> × P°</strong> (Hukum Raoult)</p>
<p>x = fraksi mol zat terlarut, P° = tekanan uap pelarut murni.</p>

<h2>Kenaikan Titik Didih (ΔTb)</h2>
<p><strong>ΔTb = Kb × m × i</strong></p>
<p>Kb = tetapan kenaikan titik didih molal, m = molalitas, i = faktor van't Hoff (i = 1 + (n−1)α untuk elektrolit).</p>

<h2>Penurunan Titik Beku (ΔTf)</h2>
<p><strong>ΔTf = Kf × m × i</strong></p>

<h2>Tekanan Osmotik (π)</h2>
<p><strong>π = M × R × T × i</strong></p>
<p>M = molaritas, R = 0,082 L·atm/(mol·K), T = suhu (K).</p>

<h2>Molalitas</h2>
<p><strong>m = (massa zat terlarut / Mr) × (1000 / massa pelarut dalam gram)</strong></p>
`,
};

const ch15: Chapter = {
  id: "kim-15",
  title: "Reaksi Redoks & Sel Volta",
  grade: 12,
  order: 15,
  description: "Penyetaraan redoks, sel Volta, deret Volta, korosi.",
  content: `
<h2>Reaksi Redoks</h2>
<ul>
<li><strong>Oksidasi</strong>: pelepasan elektron (bilangan oksidasi naik)</li>
<li><strong>Reduksi</strong>: penerimaan elektron (bilangan oksidasi turun)</li>
</ul>

<h2>Penyetaraan Reaksi Redoks</h2>
<p><strong>Metode setengah reaksi</strong>:</p>
<ol>
<li>Pisahkan menjadi setengah reaksi oksidasi dan reduksi</li>
<li>Setarakan atom selain O dan H</li>
<li>Setarakan O dengan H₂O, H dengan H⁺ (asam) atau OH⁻ (basa)</li>
<li>Setarakan muatan dengan elektron</li>
<li>Samakan jumlah elektron, lalu jumlahkan</li>
</ol>

<h2>Sel Volta (Sel Galvani)</h2>
<p>Mengubah energi kimia → energi listrik. Reaksi spontan (E° &gt; 0).</p>
<p><strong>E°<sub>sel</sub> = E°<sub>reduksi</sub> − E°<sub>oksidasi</sub></strong></p>
<p>Notasi sel: <strong>Anoda | Ion || Ion | Katoda</strong></p>

<h2>Korosi</h2>
<p>Korosi besi: Fe → Fe²⁺ + 2e⁻ (oksidasi), O₂ + 2H₂O + 4e⁻ → 4OH⁻ (reduksi). Pencegahan: pelapisan (cat, seng = galvanisasi), perlindungan katodik.</p>
`,
};

const ch16: Chapter = {
  id: "kim-16",
  title: "Sel Elektrolisis",
  grade: 12,
  order: 16,
  description: "Reaksi elektrolisis, Hukum Faraday, elektroplating.",
  content: `
<h2>Elektrolisis</h2>
<p>Menggunakan energi listrik untuk menjalankan reaksi kimia yang tidak spontan (E° &lt; 0).</p>
<ul>
<li><strong>Katoda</strong> (−): terjadi <strong>reduksi</strong></li>
<li><strong>Anoda</strong> (+): terjadi <strong>oksidasi</strong></li>
</ul>

<h2>Reaksi di Elektroda</h2>
<p><strong>Katoda</strong>: Kation logam direduksi (jika E° &gt; −0,83 V), atau air direduksi menghasilkan H₂.</p>
<p><strong>Anoda</strong>: Jika elektroda inert (Pt, C), anion dioksidasi atau air dioksidasi menghasilkan O₂. Jika elektroda aktif (Cu, Ag), elektroda teroksidasi.</p>

<h2>Hukum Faraday I</h2>
<p><strong>w = (e × i × t) / F</strong></p>
<p>w = massa zat (g), e = massa ekivalen = Ar/valensi, i = arus (A), t = waktu (s), F = 96.485 C/mol.</p>

<h2>Hukum Faraday II</h2>
<p><strong>w₁/w₂ = e₁/e₂</strong> — perbandingan massa zat yang dihasilkan sebanding dengan massa ekivalennya.</p>

<h2>Elektroplating</h2>
<p>Pelapisan logam dengan logam lain menggunakan elektrolisis. Contoh: penyepuhan emas, galvanisasi (pelapisan seng pada besi).</p>
`,
};

const ch17: Chapter = {
  id: "kim-17",
  title: "Kimia Unsur",
  grade: 12,
  order: 17,
  description: "Gas mulia, halogen, alkali, alkali tanah, unsur periode 3 & 4.",
  content: `
<h2>Gas Mulia (VIIIA)</h2>
<p>He, Ne, Ar, Kr, Xe, Rn. Konfigurasi elektron penuh → sangat stabil (inert). Kegunaan: He (balon), Ne (lampu neon), Ar (pengelasan).</p>

<h2>Halogen (VIIA)</h2>
<p>F, Cl, Br, I. Nonlogam sangat reaktif (7 elektron valensi). F₂ paling reaktif. Kegunaan: Cl (pemutih, desinfektan), I (antiseptik).</p>

<h2>Alkali (IA)</h2>
<p>Li, Na, K, Rb, Cs. Logam sangat reaktif (1 elektron valensi), bereaksi hebat dengan air menghasilkan H₂ dan basa kuat.</p>

<h2>Alkali Tanah (IIA)</h2>
<p>Be, Mg, Ca, Sr, Ba. Kurang reaktif dibanding alkali. Mg: paduan logam ringan. Ca: komponen tulang dan kapur.</p>

<h2>Unsur Periode 3</h2>
<p>Na, Mg, Al, Si, P, S, Cl, Ar. Dari kiri ke kanan: sifat logam → nonlogam.</p>

<h2>Unsur Periode 4 (Transisi)</h2>
<p>Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn. Banyak yang berwarna, bersifat katalis, dan membentuk senyawa kompleks. Fe: baja. Cu: kabel listrik. Zn: baterai.</p>
`,
};

const ch18: Chapter = {
  id: "kim-18",
  title: "Senyawa Turunan Alkana",
  grade: 12,
  order: 18,
  description: "Alkohol, eter, aldehid, keton, asam karboksilat, ester.",
  content: `
<h2>Gugus Fungsi</h2>
<table border="1" style="width:100%">
<tr><th>Gugus Fungsi</th><th>Struktur</th><th>Contoh</th></tr>
<tr><td>Alkohol</td><td>R−OH</td><td>Etanol (C₂H₅OH)</td></tr>
<tr><td>Eter</td><td>R−O−R'</td><td>Dietil eter (C₂H₅OC₂H₅)</td></tr>
<tr><td>Aldehid</td><td>R−CHO</td><td>Etanal (CH₃CHO)</td></tr>
<tr><td>Keton</td><td>R−CO−R'</td><td>Propanon/aseton (CH₃COCH₃)</td></tr>
<tr><td>Asam Karboksilat</td><td>R−COOH</td><td>Asam asetat (CH₃COOH)</td></tr>
<tr><td>Ester</td><td>R−COO−R'</td><td>Etil asetat (CH₃COOC₂H₅)</td></tr>
</table>

<h2>Reaksi Identifikasi</h2>
<ul>
<li><strong>Alkohol</strong>: bereaksi dengan Na menghasilkan H₂</li>
<li><strong>Aldehid</strong>: positif uji Tollens (cermin perak) dan Fehling (endapan merah)</li>
<li><strong>Keton</strong>: negatif Tollens dan Fehling</li>
<li><strong>Asam karboksilat</strong>: bersifat asam, bereaksi dengan NaHCO₃ menghasilkan CO₂</li>
<li><strong>Ester</strong>: berbau harum, hasil reaksi alkohol + asam karboksilat (esterifikasi)</li>
</ul>
`,
};

const ch19: Chapter = {
  id: "kim-19",
  title: "Benzena dan Turunannya",
  grade: 12,
  order: 19,
  description: "Tata nama benzena, sifat, kegunaan turunan benzena.",
  content: `
<h2>Struktur Benzena</h2>
<p>Rumus molekul: <strong>C₆H₆</strong>. Struktur siklik heksagonal dengan ikatan rangkap berselang-seling (resonansi). Semua ikatan C−C setara (panjang 1,39 Å).</p>

<h2>Tata Nama Turunan Benzena</h2>
<h3>Monosubstitusi</h3>
<ul>
<li>C₆H₅OH → <strong>Fenol</strong></li>
<li>C₆H₅NH₂ → <strong>Anilin</strong></li>
<li>C₆H₅COOH → <strong>Asam benzoat</strong></li>
<li>C₆H₅CH₃ → <strong>Toluena</strong></li>
<li>C₆H₅NO₂ → <strong>Nitrobenzena</strong></li>
</ul>

<h3>Disubstitusi</h3>
<ul>
<li><strong>Orto (o-)</strong>: substituen pada posisi 1,2</li>
<li><strong>Meta (m-)</strong>: posisi 1,3</li>
<li><strong>Para (p-)</strong>: posisi 1,4</li>
</ul>

<h2>Sifat Benzena</h2>
<p>Cairan tak berwarna, mudah terbakar, berbau khas, bersifat <strong>karsinogenik</strong>. Lebih mudah mengalami reaksi substitusi daripada adisi.</p>

<h2>Kegunaan</h2>
<p>Asam benzoat (pengawet makanan), fenol (antiseptik), anilin (zat warna), toluena (pelarut), aspirin (asam asetilsalisilat).</p>
`,
};

const ch20: Chapter = {
  id: "kim-20",
  title: "Makromolekul",
  grade: 12,
  order: 20,
  description: "Polimer, karbohidrat, protein, lipid.",
  content: `
<h2>Polimer</h2>
<p>Makromolekul yang tersusun dari monomer berulang.</p>
<ul>
<li><strong>Polimer alami</strong>: karet alam, selulosa, protein, pati</li>
<li><strong>Polimer sintetis</strong>: polietilena (PE), polipropilena (PP), PVC, teflon, nilon</li>
<li><strong>Adisi</strong>: monomer bergabung tanpa melepas molekul kecil (PE, PVC)</li>
<li><strong>Kondensasi</strong>: monomer bergabung sambil melepas H₂O (nilon, poliester)</li>
</ul>

<h2>Karbohidrat</h2>
<ul>
<li><strong>Monosakarida</strong>: glukosa, fruktosa, galaktosa</li>
<li><strong>Disakarida</strong>: sukrosa (glukosa+fruktosa), laktosa (glukosa+galaktosa), maltosa (glukosa+glukosa)</li>
<li><strong>Polisakarida</strong>: amilum (pati), selulosa, glikogen</li>
</ul>
<p>Uji amilum: tetesi larutan <strong>iodium</strong> → warna biru tua.</p>

<h2>Protein</h2>
<p>Polimer dari <strong>asam amino</strong> yang dihubungkan ikatan peptida. Fungsi: enzim, antibodi, hemoglobin, kolagen. Denaturasi: perubahan struktur akibat panas, asam, atau basa.</p>

<h2>Lipid (Lemak)</h2>
<p>Ester dari <strong>gliserol + asam lemak</strong>. Fungsi: cadangan energi, pelindung organ, komponen membran sel. Lemak jenuh (padat) vs tak jenuh (cair = minyak).</p>
`,
};

export const kimiaChapters: Chapter[] = [
  ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08, ch09, ch10,
  ch11, ch12, ch13, ch14, ch15, ch16, ch17, ch18, ch19, ch20,
];

export const kimiaMap = new Map(kimiaChapters.map((c) => [c.id, c]));

export function getKimiaChapter(id: string): Chapter | undefined {
  return kimiaMap.get(id);
}
