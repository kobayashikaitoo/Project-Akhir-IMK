# Design System: Pijar (Clay-Inspired UI - SMA Version)

Sistem desain **Pijar** mengadopsi gaya visual bertema "Clay" yang modern, bersahabat, dan taktil. Dokumen ini mendeskripsikan aturan visual dan menyelaraskannya secara akademis dengan prinsip-prinsip Interaksi Manusia dan Komputer (IMK) untuk target pengguna tingkat Sekolah Menengah Atas (SMA) usia 15-18 tahun.

## 1. Usability Principles (Prinsip Kebergunaan IMK)

Desain antarmuka Pijar dirancang secara sadar untuk memenuhi lima prinsip kebergunaan utama dalam IMK demi menyajikan pengalaman belajar terbaik bagi siswa SMA yang sedang mempersiapkan diri menghadapi ujian sekolah dan seleksi perguruan tinggi (UTBK/SNBT):

### A. Learnability (Kemudahan Pembelajaran)
- **Implementasi**: Menggunakan kombinasi font rounded (**Quicksand** untuk heading/judul dan **Nunito** untuk teks utama/UI) dengan ukuran proporsional dan spasi baris longgar.
- **Justifikasi IMK**: Teks materi pelajaran SMA yang padat teori (seperti materi Biologi dan Hukum Fisika) sering kali memicu kelelahan visual (*eye strain*) jika dibaca dalam waktu lama pada layar komputer/smartphone. Font rounded modern ini menawarkan legibilitas tinggi dan kenyamanan visual yang lebih ramah di mata dibanding font sans-serif kaku bawaan browser, mempermudah siswa SMA dalam menangkap informasi penting sejak pandangan pertama.

### B. Efficiency (Efisiensi)
- **Implementasi**: Antarmuka belajar *split-screen* (side-by-side) menampilkan materi/rumus di sisi kiri dan latihan kuis di sisi kanan secara berdampingan.
- **Justifikasi IMK**: Menyelesaikan soal hitungan (Matematika/Fisika/Kimia) atau memahami teks bacaan panjang (Bahasa Inggris) memerlukan efisiensi kognitif yang tinggi. Dengan tata letak berdampingan, siswa dapat merujuk langsung ke tabel rumus atau teks eksplanasi di sebelah kiri sambil menghitung dan memilih jawaban di sebelah kanan tanpa perlu scroll bolak-balik atau berpindah tab halaman web. Hal ini memotong waktu belajar yang terbuang secara signifikan.

### C. Memorability (Kemudahan Mengingat)
- **Implementasi**: Skema warna *color-coded* yang konsisten untuk setiap mata pelajaran SMA (Kuning Lemon untuk Matematika, Hijau Matcha untuk Fisika, Ungu Ube untuk Kimia, Merah Pomegranate untuk Biologi, Biru Slushie untuk Bahasa Inggris) yang terintegrasi pada tombol, kartu, dan lencana.
- **Justifikasi IMK**: Siswa SMA mempelajari banyak subjek secara paralel dalam satu hari. Pengkodean warna subjek membantu memori spasial siswa dalam mengidentifikasi secara instan di mana mereka berada di dalam aplikasi. Ketika kembali menggunakan aplikasi setelah beberapa waktu, siswa dapat bernavigasi secara intuitif berdasarkan asosiasi warna subjek yang konsisten.

### D. Error Prevention (Pencegahan Kesalahan)
- **Implementasi**: Konfirmasi visual taktil yang tegas saat tombol di-hover atau ditekan (tombol berotasi `-3deg` s.d `3deg`, bergeser ke atas, dan memunculkan bayangan tegas hitam `-6px 6px` di bawahnya) serta area sentuh (*touch target*) minimal 48dp x 48dp.
- **Justifikasi IMK**: Siswa SMA sering kali mengakses aplikasi secara multi-tasking atau bermobilitas tinggi (misalnya belajar melalui smartphone saat di kendaraan umum). Tombol visual 3D yang tebal mencegah kesalahan ketuk (*misclick*) atau pengiriman jawaban kuis secara tidak sengaja sebelum selesai dikerjakan. Feedback taktil memberikan kepastian mutlak bahwa aksi input mereka telah diproses oleh sistem.

### E. Satisfaction (Kepuasan Pengguna)
- **Implementasi**: Penggunaan latar belakang Warm Cream (`#faf9f7`) yang menenangkan dikombinasikan dengan palet warna ceria swatches yang tidak kaku, kontainer empuk 3D Clay, status poin XP harian, dan lencana Bintang Emas.
- **Justifikasi IMK**: Persiapan menghadapi UTBK/SNBT sering kali memicu stres akademis (*academic burnout*) yang tinggi. Desain Clay yang unik dan playful memberikan lingkungan belajar yang menenangkan, menghilangkan kesan "ujian formal yang menegangkan", dan meningkatkan kepuasan psikologis siswa selama belajar mandiri.

## 2. Visual Theme & Atmosphere

Desain visual Pijar dibangun di atas fondasi warna latar belakang Warm Cream (`#faf9f7`) dan batas (*border*) berwarna oat hangat (`#dad4c8`, `#eee9df`). Di atas kanvas yang ramah ini, palet warna swatches (Matcha, Slushie, Lemon, Ube, Pomegranate) digunakan sebagai identitas visual utama yang playful.

Penggunaan font membulat (Quicksand & Nunito) memberikan kesan santai namun tetap profesional dan rapi bagi siswa tingkat menengah atas. Kontainer memiliki border radius yang sangat melengkung (24px s.d. 40px) dan efek bayangan berlapis (multi-layer shadow) dengan inset highlight untuk memperkuat kesan 3D lembut seperti tanah liat mainan (Clay).

**Karakteristik Utama:**
- Latar belakang Warm Cream (`#faf9f7`) dengan border Oat hangat (`#dad4c8`) — memberi kesan kerajinan tangan yang ramah.
- Palet warna kontras yang ceria: Matcha (Hijau), Slushie (Sian), Lemon (Emas), Ube (Ungu), Pomegranate (Merah Muda).
- Font Quicksand (Heading) & Nunito (Body) — bentuk bulat yang mendukung keterbacaan optimal.
- Efek Hover Taktil: Tombol berputar `rotateZ(-3deg)` + melayang ke atas `translateY(-4px)` + bayangan tegas hitam `-6px 6px 0px #000000` saat disentuh/hover.
- Sudut membulat yang lebar: kontainer 24px, halaman/seksi utama 40px.

## 3. Color Palette & Roles

### A. Utama (Primary)
- **Clay Black** (`#000000`): Teks utama, judul, teks tombol utama.
- **Pure White** (`#ffffff`): Latar belakang kartu, latar belakang input, kontras teks tombol.
- **Warm Cream** (`#faf9f7`): Latar belakang halaman utama aplikasi.

### B. Palet Mata Pelajaran (Subject Palette)
- **Fisika (Matcha)**
  - Matcha 300 (`#84e7a5`): Aksen hijau muda, indikator jawaban benar.
  - Matcha 600 (`#078a52`): Warna utama Fisika, tombol aksi utama.
  - Matcha 800 (`#02492a`): Latar belakang seksi Fisika yang gelap.
- **Bahasa Inggris (Slushie)**
  - Slushie 500 (`#3bd3fd`): Warna utama Bahasa Inggris, aksen sian ceria.
  - Slushie 800 (`#0089ad`): Judul modul Bahasa Inggris.
- **Matematika (Lemon)**
  - Lemon 400 (`#f8cc65`): Aksen emas, penanda bintang/prestasi.
  - Lemon 500 (`#fbbd41`): Warna utama Matematika, lencana skor.
  - Lemon 700 (`#d08a11`): Warna border Matematika.
- **Kimia (Ube)**
  - Ube 300 (`#c1b0ff`): Aksen ungu lembut.
  - Ube 800 (`#43089f`): Warna utama Kimia.
  - Ube 900 (`#32037d`): Latar belakang gelap Kimia.
- **Biologi (Pomegranate)**
  - Pomegranate 400 (`#fc7981`): Warna utama Biologi, indikator jawaban salah.

### C. Batas & Bayangan (Borders & Shadows)
- **Oat Border** (`#dad4c8`): Batas utama kontainer visual.
- **Oat Light** (`#eee9df`): Batas pembagi sekunder.
- **Clay Shadow**: `rgba(0,0,0,0.1) 0px 1px 1px, rgba(0,0,0,0.04) 0px -1px 1px inset, rgba(0,0,0,0.05) 0px -0.5px 1px`.
- **Hard Offset Shadow**: `rgb(0,0,0) -6px 6px` (bayangan tegas untuk efek taktil tombol hover).

## 4. Typography Rules

### Font Families
- **Heading / Display**: `Quicksand`, sans-serif (sangat membulat, bersahabat, tebal).
- **Body / UI Text**: `Nunito`, sans-serif (tingkat legibilitas tinggi untuk membaca teks bacaan panjang).

### Hierarchy

| Peran | Font | Ukuran | Ketebalan (Weight) | Tinggi Baris | Jarak Huruf | Catatan |
|---|---|---|---|---|---|---|
| Judul Beranda | Quicksand | 48px (3.00rem) | Bold (700) | 1.10 | Normal | Sapaan ramah remaja |
| Judul Seksi | Quicksand | 32px (2.00rem) | Bold (700) | 1.20 | Normal | Judul mata pelajaran SMA |
| Judul Kartu | Quicksand | 24px (1.50rem) | SemiBold (600) | 1.25 | Normal | Kartu bab materi |
| Teks Tombol Besar| Quicksand | 18px (1.13rem) | Bold (700) | 1.30 | Normal | Tombol aksi utama |
| Teks Modul (Materi)| Nunito | 18px (1.13rem) | Regular (400) | 1.60 | Normal | Keterbacaan optimal |
| Teks Pertanyaan | Nunito | 18px (1.13rem) | Bold (700) | 1.40 | Normal | Teks soal latihan/kuis |
| Teks UI Umum | Nunito | 16px (1.00rem) | Medium (500) | 1.50 | Normal | Label input, tautan |
| Catatan / Keterangan| Nunito | 14px (0.88rem) | Regular (400) | 1.50 | Normal | Penjelasan rumus/teori |

## 5. Component Stylings

### Buttons (Tombol Taktil 3D)
- **Desain Utama**: Latar belakang putih bersih atau warna mapel cerah dengan border tebal `1.5px solid #000000`.
- **Efek Hover & Aktif (Error Prevention & Satisfaction)**:
  ```css
  button:hover {
    transform: rotateZ(-2deg) translateY(-4px);
    box-shadow: -6px 6px 0px #000000;
    background-color: var(--matcha-300); /* Berubah warna sesuai mapel */
  }
  button:active {
    transform: translateY(2px);
    box-shadow: -2px 2px 0px #000000;
  }
  ```

### Cards (Kartu Belajar)
- **Desain**: Latar belakang `#ffffff`, batas `1.5px solid #dad4c8`, radius sudut `24px`.
- **Varian Dekoratif**: Batas garis putus-putus (`border: 1.5px dashed #dad4c8`) digunakan untuk menampung area kustom AI (Tanya Tutor).

### Split-Screen Container (Antarmuka Belajar)
- **Desain**: Wadah utama yang membagi layar menjadi dua kolom seimbang pada desktop (`grid grid-cols-2 gap-6`). Kolom kiri menggunakan kontainer putih dengan batas oat tebal untuk modul bacaan/rumus, sementara kolom kanan diisi oleh pemutar kuis latihan dengan sudut membulat.

## 6. Layout Principles

- **Sistem Grid Sederhana**: Tata letak maksimal 3 kolom untuk desktop dan 1 kolom untuk perangkat seluler untuk menghindari kebingungan visual.
- **Rhythm Spatial**: Jeda antarmateri menggunakan margin yang longgar (kelipatan 8px, idealnya 24px s.d. 32px) untuk memberikan ruang membaca yang santai.
- **Visual Rewards Anchor**: Bagian kanan atas layar selalu didedikasikan untuk menampilkan jumlah Bintang dan XP siswa secara real-time.

## 7. Depth & Elevation

| Tingkat | Ketinggian Visual | Penggunaan |
|---|---|---|
| Flat (Level 0) | Flat, latar Warm Cream | Latar belakang aplikasi |
| Pressed (Level 1) | Bayangan tipis inset | Input teks, tombol saat ditekan |
| Raised (Level 2) | Bayangan `0px 4px 6px` lembut | Kartu bab materi, navigasi |
| Clay Taktil (Level 3) | Bayangan tegas `-6px 6px 0px #000000` | Tombol interaktif saat di-hover |

## 8. Do's and Don'ts

### Do
- Gunakan font **Quicksand** untuk judul besar dan **Nunito** untuk teks bacaan/rumus.
- Selalu terapkan warna latar belakang hangat Warm Cream (`#faf9f7`), bukan putih salju klinis.
- Berikan efek rotasi kecil (maksimal `-3deg` s.d. `3deg`) pada tombol saat di-hover untuk memperkuat kesan dinamis.
- Gunakan ikon yang bersih dan bersahabat.
- Pertahankan antarmuka kuis secara berdampingan (side-by-side) dengan materi untuk efisiensi kognitif.

### Don't
- Jangan menggunakan warna abu-abu gelap korporat untuk teks penting; gunakan hitam pekat (`#000000`) atau warna kontras subjek.
- Jangan gunakan font bersudut tajam seperti Times New Roman.
- Jangan membuat ukuran tombol lebih kecil dari 44px tinggi area sentuhnya pada perangkat mobile.
- Jangan menaruh terlalu banyak teks materi dalam satu halaman kuis; pecah menjadi bab kecil yang bertahap.

## 9. Responsive Behavior

### Breakpoints
- **Mobile (<768px)**: Tampilan side-by-side berubah menjadi mode tumpuk vertical (*stacked*). Materi belajar berada di atas, dan tombol kuis berada di bawahnya secara linear.
- **Tablet & Desktop (>=768px)**: Tampilan side-by-side diaktifkan penuh untuk memaksimalkan efisiensi belajar berdampingan.

## 10. Architectural Decisions

- **Semantic CSS Token Mapping**: Seluruh token warna dipetakan ke dalam variabel CSS di `packages/ui/src/styles/globals.css` (misal: `--font-heading` mengarah ke Quicksand, `--font-body` mengarah ke Nunito).
- **Accessibility Guidelines**: Seluruh tombol ikon tetap memiliki atribut `aria-label` yang jelas, serta mempertahankan urutan heading (`h1` -> `h2` -> `h3`) tanpa melompati tingkatan untuk kemudahan pembacaan.
