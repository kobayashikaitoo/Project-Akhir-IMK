# PROPOSAL APLIKASI PEMBELAJARAN INTERAKTIF
## Pijar — Pembelajaran Interaktif Pelajar

---

## BAB I. PENDAHULUAN

### 1.1 Latar Belakang

Siswa SMA di Indonesia (usia 15–18 tahun) menghadapi tekanan akademis yang sangat besar dalam mempersiapkan ujian sekolah, ujian kelulusan, dan seleksi masuk perguruan tinggi negeri (UTBK/SNBT). Berdasarkan pengamatan terhadap proses belajar siswa SMA, terdapat beberapa kendala utama yang perlu diselesaikan melalui media pembelajaran interaktif:

**1. Tingginya Beban Kognitif**
Materi pembelajaran SMA sangat teoretis dan padat rumus, terutama pada rumpun sains (Fisika, Kimia, Biologi) serta Matematika tingkat lanjut. Buku teks konvensional yang panjang tanpa visualisasi memadai membuat materi sulit dicerna dan memicu kelelahan visual (*eye strain*) saat siswa belajar mandiri dalam waktu lama.

**2. Ketidakseimbangan Antara Teori dan Latihan**
Siswa sering kali harus membaca materi di satu sumber (buku fisik atau PDF) kemudian mengerjakan soal latihan di sumber terpisah. Proses bolak-balik ini memaksa mereka membagi fokus secara berulang, menurunkan efisiensi belajar, dan membuang waktu produktif yang seharusnya dapat digunakan untuk memahami konsep lebih dalam.

**3. Kurangnya Penjelasan Instan**
Saat mengerjakan latihan soal mandiri di rumah dan menemui kendala pada rumus yang rumit, siswa tidak memiliki akses ke asisten belajar yang dapat memberikan penjelasan terstruktur secara langsung dan instan.

**4. Tingkat Kejenuhan Tinggi**
Metode belajar yang monoton dan repetitif memicu stres akademis (*academic burnout*). Siswa membutuhkan media interaktif tergamifikasi yang mampu meredakan kejenuhan sekaligus menjaga konsistensi dan motivasi belajar jangka panjang.

Aplikasi pembelajaran interaktif menjadi solusi strategis untuk menjawab permasalahan tersebut. Melalui pendekatan **Interaksi Manusia dan Komputer (IMK)**, khususnya penerapan prinsip **kegunaan (*usability*)**, sebuah aplikasi pembelajaran dapat dirancang agar mudah digunakan, efisien, dan menyenangkan bagi siswa. Prinsip-prinsip IMK seperti *learnability*, *efficiency*, *memorability*, *error prevention*, dan *satisfaction* menjadi landasan dalam merancang antarmuka yang tidak hanya fungsional, tetapi juga memberikan pengalaman pengguna yang positif.

### 1.2 Rumusan Masalah

Berdasarkan latar belakang di atas, rumusan masalah dalam proyek ini adalah:

1. Bagaimana merancang aplikasi pembelajaran interaktif yang mudah digunakan oleh siswa SMA dengan berbagai tingkat kemampuan teknologi?
2. Bagaimana menerapkan prinsip-prinsip *usability* dari Interaksi Manusia dan Komputer (IMK) dalam aplikasi pembelajaran untuk meningkatkan efisiensi belajar siswa?
3. Bagaimana membuat antarmuka pengguna (*user interface*) yang menarik, efektif, dan mengurangi tingkat kejenuhan siswa SMA saat belajar mandiri?
4. Bagaimana menyajikan materi teori dan latihan soal secara bersamaan untuk meminimalkan beban kognitif siswa?

### 1.3 Tujuan Proyek

Tujuan dari proyek ini adalah:

1. **Membuat aplikasi pembelajaran interaktif** berbasis web untuk siswa SMA yang mencakup lima mata pelajaran utama (Matematika, Fisika, Kimia, Biologi, dan Bahasa Inggris) dengan materi lengkap Kelas X–XII.
2. **Mengimplementasikan prinsip-prinsip *usability*** IMK secara menyeluruh dalam setiap aspek antarmuka aplikasi.
3. **Merancang antarmuka pengguna yang menarik** dan mudah dipahami siswa melalui gaya visual *Clay-Inspired UI* yang ramah dan tidak mengintimidasi.
4. **Menyediakan fitur asisten belajar (Tutor AI)** yang dapat memberikan penjelasan instan dan adaptif saat siswa mengalami kesulitan.
5. **Membangun sistem gamifikasi** (XP, Bintang, Rapor Kemajuan) untuk meningkatkan motivasi dan konsistensi belajar siswa.

### 1.4 Manfaat Proyek

**Bagi Siswa:**
- Mendapatkan media belajar mandiri yang interaktif, terstruktur, dan menyenangkan untuk persiapan ujian sekolah dan UTBK/SNBT.
- Mempermudah pemahaman materi melalui antarmuka *split-screen* yang menampilkan teori dan latihan secara berdampingan.
- Mendapatkan penjelasan instan dari Tutor AI saat menemui kesulitan pada rumus atau konsep tertentu.

**Bagi Guru:**
- Menyediakan media latihan interaktif yang dapat diakses mandiri oleh siswa di luar jam pelajaran.
- Memudahkan guru dalam merekomendasikan materi latihan tambahan kepada siswa.

**Bagi Orang Tua:**
- Memantau perkembangan belajar anak melalui Rapor Kemajuan yang transparan dan mudah dipahami.

**Bagi Pengembang:**
- Menjadi referensi penerapan prinsip IMK dan *user interface design* dalam konteks aplikasi edukasi.
- Mengembangkan arsitektur teknologi modern yang dapat diadaptasi untuk proyek edukasi selanjutnya.

---

## BAB II. DESKRIPSI APLIKASI

### 2.1 Nama dan Tema Aplikasi

- **Nama Aplikasi:** Pijar (Pembelajaran Interaktif Pelajar)
- **Tema Visual:** *Clay-Inspired UI* — gaya desain yang mengadopsi estetika tanah liat (clay) dengan kontainer empuk 3D, sudut membulat tebal (24–40px), bayangan berlapis, dan palet warna ceria namun hangat. Tema ini dipilih untuk memberikan kesan santai, ramah, dan tidak mengintimidasi — berbeda dengan tampilan aplikasi ujian formal yang kaku dan menegangkan.
- **Tagline:** "Belajar Seru, Prestasi Terasa!"

### 2.2 Materi Pembelajaran

Aplikasi Pijar memuat materi pembelajaran berdasarkan silabus nasional **Kurikulum Merdeka** untuk SMA Kelas X (Fase E), Kelas XI (Fase F), dan Kelas XII (Fase F Lanjutan) yang mencakup lima mata pelajaran utama:

| No | Mata Pelajaran | Jumlah Bab | Cakupan |
|----|---------------|------------|---------|
| 1 | **Matematika** | 22 Bab | Eksponen, Logaritma, Trigonometri, Vektor, SPLDV, Fungsi Kuadrat, Statistika, Peluang, Limit, Turunan, Integral, Matriks, Geometri, Kalkulus |
| 2 | **Fisika** | 19 Bab | Kinematika, Dinamika, Usaha-Energi, Momentum, Rotasi, Fluida, Termodinamika, Listrik, Magnet, Relativitas, Fisika Kuantum |
| 3 | **Kimia** | 20 Bab | Struktur Atom, Ikatan Kimia, Stoikiometri, Termokimia, Laju Reaksi, Kesetimbangan, Asam-Basa, Redoks, Elektrokimia, Senyawa Karbon |
| 4 | **Biologi** | 24 Bab | Keanekaragaman Hayati, Sel, Jaringan, Fisiologi Manusia, Metabolisme, Genetika, Pembelahan Sel, Evolusi, Bioteknologi |
| 5 | **Bahasa Inggris** | 14 Bab | Descriptive, Recount, Narrative, Procedure, Exposition, Report, Explanation, Discussion Text, Grammar |

### 2.3 Fitur Aplikasi

1. **Landing Page & Onboarding Interaktif**
   - Halaman beranda dengan sapaan motivasi dan informasi singkat aplikasi.
   - Proses pendaftaran intuitif: siswa memilih jenjang kelas (10, 11, 12) dan jurusan (IPA/IPS) melalui kartu visual.
   - Pemilihan avatar dan nama panggilan.

2. **Dashboard / Beranda Utama**
   - Sapaan maskot dinamis berdasarkan waktu belajar (pagi/siang/malam).
   - Status total Bintang Emas dan poin XP yang telah diraih.
   - Kartu-kartu mata pelajaran dengan kode warna unik per subjek.

3. **Modul & Kuis Interaktif (Split-Screen)**
   - Tampilan *side-by-side*: materi/rumus di kiri, kuis latihan di kanan.
   - Format kuis bervariasi: Pilihan Ganda (5 opsi A–E), Benar/Salah, Isian Singkat, dan Mencocokkan.
   - Koreksi instan dengan penjelasan jawaban terperinci.

4. **Asisten Tutor AI**
   - Chatbot asisten belajar yang menjelaskan rumus dan teori secara terstruktur.
   - Generator latihan kustom berdasarkan topik yang sulit bagi siswa.
   - Menggunakan OpenAI-compatible API yang dikonfigurasi oleh pengguna.

5. **Rapor Kemajuan (Gamified Dashboard)**
   - Visualisasi statistik belajar: total XP, Bintang Emas, progress bar ketuntasan bab.
   - Grafik radar performa per mata pelajaran.
   - Rekomendasi materi yang perlu diulang berdasarkan analisis nilai di bawah KKM (70%).

6. **Pengaturan Profil**
   - Pengaturan data diri, avatar, kelas, dan jurusan.
   - Konfigurasi API Key AI secara aman.

7. **Progressive Web App (PWA)**
   - Aplikasi dapat dipasang di smartphone atau laptop siswa.

### 2.4 Target Pengguna

| Karakteristik | Deskripsi |
|---------------|-----------|
| **Usia** | 15–18 tahun (siswa SMA Kelas X–XII) |
| **Kemampuan Teknologi** | Mahir menggunakan browser modern, smartphone, dan media sosial. Mengharapkan antarmuka yang modern, responsif, dan *seamless*. |
| **Kebutuhan Utama** | Media belajar mandiri yang terstruktur untuk persiapan ujian sekolah dan UTBK/SNBT. |
| **Karakteristik Belajar** | Rentan mengalami *academic burnout*, menyukai tantangan kasual yang terstruktur, dan termotivasi oleh elemen gamifikasi. |
| **Perangkat** | Laptop/desktop (utama), smartphone (sekunder). |

Pengguna sekunder meliputi guru pengajar SMA yang membutuhkan media latihan interaktif dan orang tua yang ingin memantau perkembangan belajar anak.

---

## BAB III. ANALISIS DAN PERANCANGAN IMK

### 3.1 Penerapan Prinsip Usability

Aplikasi Pijar dirancang secara sadar untuk memenuhi lima prinsip kebergunaan (*usability*) utama dalam IMK:

#### A. Learnability (Kemudahan Pembelajaran)

**Definisi:** Seberapa mudah pengguna baru dapat mempelajari cara menggunakan aplikasi sejak pertama kali berinteraksi.

**Implementasi dalam Pijar:**
- Menggunakan kombinasi font *rounded* **Quicksand** (untuk heading/judul) dan **Nunito** (untuk teks utama/UI) dengan ukuran proporsional dan spasi baris longgar (1.5–1.6). Kedua font ini memiliki tingkat legibilitas tinggi dan kenyamanan visual yang lebih baik dibanding font sans-serif kaku bawaan browser.
- Proses *onboarding* yang sederhana dan visual: siswa cukup memilih kelas dan jurusan melalui kartu bergambar, tanpa formulir teks yang rumit.
- Navigasi berbasis kartu mata pelajaran dengan ikon yang jelas pada dashboard, memudahkan siswa memahami alur aplikasi secara intuitif.
- Label tombol dan navigasi menggunakan bahasa Indonesia yang sederhana dan mudah dipahami remaja.

#### B. Efficiency (Efisiensi)

**Definisi:** Seberapa cepat pengguna dapat menyelesaikan tugas setelah mempelajari cara penggunaan.

**Implementasi dalam Pijar:**
- **Antarmuka Split-Screen (*Side-by-Side*)**: Menampilkan ringkasan materi/rumus di sisi kiri dan kuis latihan di sisi kanan secara bersamaan. Siswa dapat merujuk langsung ke tabel rumus atau teks bacaan di sebelah kiri sambil menghitung dan memilih jawaban di sebelah kanan tanpa perlu *scroll* bolak-balik atau berpindah halaman. Hal ini memotong waktu belajar yang terbuang secara signifikan.
- **Auto-grade instan**: Skor kuis langsung dihitung otomatis dengan ulasan kunci jawaban yang terperinci begitu kuis disubmit, tanpa perlu menunggu koreksi manual.
- **Sidebar navigasi** yang *collapsible* (dapat diciutkan) untuk memaksimalkan area konten saat belajar, dengan ikon Material Symbols yang dikenali secara universal.

#### C. Memorability (Kemudahan Mengingat)

**Definisi:** Seberapa mudah pengguna dapat mengingat cara menggunakan aplikasi setelah tidak menggunakannya dalam beberapa waktu.

**Implementasi dalam Pijar:**
- **Skema warna *color-coded* yang konsisten** untuk setiap mata pelajaran:
  - 🟡 **Lemon (Kuning Emas)** → Matematika
  - 🟢 **Matcha (Hijau)** → Fisika
  - 🟣 **Ube (Ungu)** → Kimia
  - 🔴 **Pomegranate (Merah Muda)** → Biologi
  - 🔵 **Slushie (Sian/Biru)** → Bahasa Inggris

  Warna ini terintegrasi secara konsisten pada kartu mata pelajaran di dashboard, border halaman bab, indikator kuis, dan elemen visual lainnya. Ketika kembali menggunakan aplikasi setelah beberapa waktu, siswa dapat bernavigasi secara intuitif berdasarkan asosiasi warna yang konsisten.

- **Ikon Material Symbols** yang universal dan konsisten untuk setiap jenis aksi (misalnya ikon "school" untuk mata pelajaran, "auto_awesome" untuk Tutor AI, "bar_chart" untuk rapor).

#### D. Error Prevention (Pencegahan Kesalahan)

**Definisi:** Seberapa baik aplikasi mencegah terjadinya kesalahan oleh pengguna.

**Implementasi dalam Pijar:**
- **Feedback taktil yang tegas** pada tombol: saat di-*hover* atau ditekan, tombol berotasi `-2deg` hingga `-3deg`, bergeser ke atas (`translateY(-4px)`), dan memunculkan bayangan tegas hitam (`-6px 6px 0px #000000`). Efek ini memberikan kepastian visual bahwa aksi input pengguna telah diproses oleh sistem.
- **Area sentuh (*touch target*) minimal 48dp × 48dp** pada semua tombol interaktif, mencegah kesalahan ketuk (*misclick*) pada perangkat mobile.
- **Konfirmasi sebelum aksi destruktif**: Dialog konfirmasi muncul sebelum siswa mengirim jawaban kuis atau melakukan aksi yang tidak dapat dibatalkan.
- **Skip Link** untuk aksesibilitas: pengguna dapat melewati navigasi sidebar dan langsung menuju konten utama dengan menekan Tab.

#### E. Satisfaction (Kepuasan Pengguna)

**Definisi:** Seberapa menyenangkan dan memuaskan pengalaman pengguna saat menggunakan aplikasi.

**Implementasi dalam Pijar:**
- **Latar belakang Warm Cream (`#faf9f7`)** yang menenangkan, dikombinasikan dengan palet warna ceria yang tidak kaku, menghilangkan kesan "ujian formal yang menegangkan".
- **Kontainer empuk 3D Clay** dengan border radius 24–40px dan bayangan berlapis (*multi-layer shadow*) yang memberikan kesan menyenangkan seperti tanah liat mainan.
- **Sistem gamifikasi** yang memotivasi: status poin XP harian, lencana Bintang Emas setiap menyelesaikan kuis di atas KKM, dan *progress bar* visual ketuntasan bab.
- **Maskot interaktif** yang menyapa siswa secara dinamis berdasarkan waktu belajar, memberikan pesan motivasi yang personal.
- **Dark mode** yang tersedia untuk kenyamanan belajar di malam hari.

### 3.2 Perancangan User Interface (UI)

#### A. Warna

| Peran | Warna | Kode Hex | Penggunaan |
|-------|-------|----------|------------|
| Latar Belakang Utama | Warm Cream | `#faf9f7` | Seluruh halaman aplikasi |
| Teks Utama | Clay Black | `#000000` | Judul, teks body, tombol |
| Latar Kartu | Pure White | `#ffffff` | Kartu bab, input, dialog |
| Batas Utama | Oat Border | `#dad4c8` | Border kontainer visual |
| Matematika | Lemon | `#fbbd41` | Kartu, ikon, aksen |
| Fisika | Matcha | `#078a52` | Kartu, ikon, aksen |
| Kimia | Ube | `#43089f` | Kartu, ikon, aksen |
| Biologi | Pomegranate | `#fc7981` | Kartu, ikon, aksen |
| Bahasa Inggris | Slushie | `#3bd3fd` | Kartu, ikon, aksen |
| Feedback Benar | Matcha 300 | `#84e7a5` | Indikator jawaban benar |
| Feedback Salah | Pomegranate 400 | `#fc7981` | Indikator jawaban salah |

#### B. Font (Tipografi)

| Peran | Font | Ukuran | Ketebalan | Tinggi Baris |
|-------|------|--------|-----------|-------------|
| Judul Halaman | Quicksand | 48px (3rem) | Bold (700) | 1.10 |
| Judul Seksi | Quicksand | 32px (2rem) | Bold (700) | 1.20 |
| Judul Kartu | Quicksand | 24px (1.5rem) | SemiBold (600) | 1.25 |
| Teks Tombol | Quicksand | 18px | Bold (700) | 1.30 |
| Teks Materi | Nunito | 18px | Regular (400) | 1.60 |
| Teks Soal Kuis | Nunito | 18px | Bold (700) | 1.40 |
| Teks UI Umum | Nunito | 16px | Medium (500) | 1.50 |
| Catatan/Keterangan | Nunito | 14px | Regular (400) | 1.50 |

Font **Quicksand** dipilih untuk heading karena bentuknya yang membulat, bersahabat, dan tebal — memberikan kesan tidak mengintimidasi bagi siswa. **Nunito** dipilih untuk teks body karena tingkat legibilitas tinggi, cocok untuk membaca teks bacaan panjang (materi Biologi, hukum Fisika, teks Bahasa Inggris) dalam waktu lama tanpa kelelahan visual.

#### C. Ikon

- Menggunakan **Material Symbols Outlined** dari Google Fonts — ikon yang bersih, modern, dan dikenali secara universal.
- Setiap menu navigasi dan aksi dilengkapi ikon yang konsisten:
  - `school` → Mata Pelajaran
  - `auto_awesome` → Tutor AI
  - `bar_chart` → Rapor Kemajuan
  - `settings` → Pengaturan
  - `arrow_forward` → Aksi navigasi
  - `check_circle` → Jawaban benar
  - `cancel` → Jawaban salah

#### D. Layout

- **Sistem Grid**: Maksimal 3 kolom untuk desktop, 1 kolom untuk mobile. Menggunakan CSS Grid dan Flexbox.
- **Kontainer Maksimum**: `max-w-6xl` (1152px) untuk halaman dashboard dan konten utama, `max-w-4xl` (896px) untuk halaman detail.
- **Spasi**: Kelipatan 8px dengan margin antar-seksi 24–32px untuk memberikan ruang baca yang santai.
- **Split-Screen**: Grid 2 kolom (`grid-cols-2 gap-6`) pada desktop; berubah menjadi tumpukan vertikal (*stacked*) pada mobile (<768px).

#### E. Navigasi

- **Sidebar Tetap (Fixed Sidebar)**: Navigasi utama berupa sidebar di sisi kiri dengan toggle hamburger pada mobile. Sidebar dapat diciutkan (*collapsed*) untuk memaksimalkan area konten.
- **Breadcrumb**: Navigasi jejak roti pada halaman detail bab dan kuis untuk memudahkan siswa memahami posisi mereka dalam aplikasi.
- **Sticky Header**: Header yang tetap terlihat saat scroll pada halaman detail panjang, memastikan tombol aksi utama selalu dapat diakses.

### 3.3 Struktur Navigasi

Berikut adalah peta navigasi (*sitemap*) aplikasi Pijar:

```
┌─────────────────────────────────────────────────────────────┐
│                    HALAMAN LANDING (/)                        │
│         Sapaan, Informasi, Tombol "Mulai Belajar"           │
└──────────────────────┬──────────────────────────────────────┘
                       │ Masuk / Daftar
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              LOGIN & ONBOARDING (/login, /setup-avatar)      │
│         Email/Password, Pilih Kelas, Jurusan, Avatar         │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                  DASHBOARD UTAMA (/dashboard)                 │
│    Maskot, Bintang & XP, Kartu Mata Pelajaran (5 mapel)     │
└──────┬───────────────┬───────────────┬──────────────────────┘
       │               │               │
       ▼               ▼               ▼
┌──────────┐   ┌────────────┐   ┌──────────────┐
│ DAFTAR   │   │  RAPOR     │   │  TANYA TUTOR │
│ BAB      │   │  KEMAJUAN  │   │  AI          │
│ (/subject│   │ (/analytics)│   │ (/generate)  │
│ /$id)    │   │            │   │              │
└────┬─────┘   └────────────┘   └──────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────┐
│        PEMBELAJARAN SIDE-BY-SIDE (/subject/$id/$chapterId)   │
│   Kiri: Materi/Rumus  │  Kanan: Kuis Latihan               │
└──────────────────────┬──────────────────────────────────────┘
                       │ Kirim Jawaban
                       ▼
┌─────────────────────────────────────────────────────────────┐
│           HASIL LATIHAN & ULASAN JAWABAN                     │
│   Skor, Penjelasan, Bintang, XP                              │
└─────────────────────────────────────────────────────────────┘

    Halaman Tambahan:
    ├── /settings       → Pengaturan Profil & API Key
    ├── /me             → Profil Pengguna
    └── /$.tsx          → Halaman 404 (Not Found)
```

**Alur navigasi detail:**

1. **Landing Page (`/`)**: Siswa melihat sapaan motivasi dan informasi aplikasi, kemudian menekan tombol "Mulai Belajar Sekarang" untuk login.
2. **Login & Onboarding (`/login` → `/setup-avatar`)**: Siswa login dengan email/password, kemudian mengisi nama panggilan, memilih avatar, kelas (10/11/12), dan jurusan (IPA/IPS).
3. **Dashboard (`/dashboard`)**: Pusat navigasi — siswa melihat kartu 5 mata pelajaran, status bintang & XP, dan sapaan maskot.
4. **Daftar Bab (`/subject/$subjectId`)**: Siswa memilih mata pelajaran dan melihat daftar bab beserta progress bar ketuntasan.
5. **Pembelajaran Side-by-Side (`/subject/$subjectId/$chapterId`)**: Siswa membaca materi di kiri dan mengerjakan kuis di kanan secara bersamaan.
6. **Hasil Latihan**: Skor langsung ditampilkan dengan penjelasan jawaban dan reward bintang/XP.
7. **Rapor Kemajuan (`/analytics`)**: Grafik radar, statistik, dan rekomendasi materi yang perlu diulang.
8. **Tutor AI (`/generate`)**: Chatbot untuk bertanya dan meminta latihan tambahan.

### 3.4 Wireframe / Mockup

*(Lihat bagian LAMPIRAN untuk wireframe dan mockup detail setiap halaman.)*

Berikut adalah deskripsi wireframe halaman-halaman utama:

1. **Landing Page**: Hero section dengan maskot/ilustrasi, tagline besar, deskripsi singkat fitur, dan CTA button "Mulai Belajar Sekarang" dengan efek Clay taktil.
2. **Dashboard**: Header sapaan maskot (kiri atas), badge Bintang & XP (kanan atas), grid 3 kolom berisi kartu mata pelajaran berwarna.
3. **Halaman Bab**: Sticky header dengan breadcrumb, daftar bab dalam kartu dengan progress bar, dan tombol "Mulai Belajar".
4. **Split-Screen Learning**: Dua kolom — kiri (materi dengan rumus, tabel, diagram), kanan (kuis pilihan ganda dengan opsi besar dan tombol submit).
5. **Rapor Kemajuan**: Grafik radar di atas, statistik XP & bintang, daftar rekomendasi materi lemah di bawah.
6. **Tutor AI**: Interface chat dengan input teks di bawah dan riwayat percakapan di atas, tombol pintasan cepat.

---

## BAB IV. METODOLOGI PENGEMBANGAN

### 4.1 Metode Pengembangan

Metode pengembangan yang digunakan adalah **Metode Agile — Iterative Development** dengan pendekatan **User-Centered Design (UCD)**.

**Alasan pemilihan metode ini:**

1. **Iteratif**: Pengembangan dilakukan secara bertahap dalam siklus (*sprint*) pendek. Setiap siklus menghasilkan produk yang dapat diuji dan dievaluasi, memungkinkan perbaikan berkelanjutan berdasarkan umpan balik pengguna.
2. **User-Centered Design**: Setiap keputusan desain didasarkan pada kebutuhan, karakteristik, dan konteks penggunaan oleh siswa SMA sebagai pengguna utama. Prinsip IMK diintegrasikan sejak tahap perancangan awal.
3. **Fleksibel**: Memungkinkan penyesuaian fitur dan desain di tengah pengembangan jika ditemukan kendala atau peluang perbaikan.

### 4.2 Tools dan Teknologi

| Kategori | Teknologi | Alasan Pemilihan |
|----------|-----------|-----------------|
| **Runtime & Package Manager** | Bun | Performa tinggi, kompatibel dengan ekosistem Node.js, dukungan workspace monorepo. |
| **Frontend Framework** | React 19 + Vite | Library UI modern dengan ekosistem luas, Vite memberikan *hot module replacement* (HMR) yang sangat cepat untuk pengembangan. |
| **Routing** | TanStack Router | *File-based routing* yang type-safe, mendukung *lazy loading* dan *code splitting* otomatis. |
| **State Management** | TanStack Query | Manajemen data server-side yang efisien dengan caching, refetching, dan optimistic updates. |
| **Styling** | Tailwind CSS 4 | *Utility-first CSS* yang memungkinkan pembangunan UI konsisten dengan cepat tanpa menulis CSS custom berulang. |
| **UI Components** | shadcn/ui | Komponen UI berkualitas tinggi yang dapat dikustomisasi penuh dengan gaya Clay. |
| **Backend Server** | Hono | Framework web ultra-cepat dan ringan untuk runtime edge/Node.js. |
| **API Layer** | tRPC | End-to-end type safety antara frontend dan backend tanpa perlu code generation atau schema terpisah. |
| **Database** | PostgreSQL | Database relasional yang andal, teruji, dan mendukung data kompleks. |
| **ORM** | Drizzle ORM | ORM modern dengan type safety penuh, migrasi otomatis, dan query builder yang intuitif. |
| **Authentication** | Better Auth | Library autentikasi yang ringan dan mudah dikonfigurasi dengan dukungan email/password. |
| **AI Integration** | OpenAI-compatible API | API generatif untuk Tutor AI dan generator soal kustom. |
| **Build System** | Turborepo | Manajemen monorepo yang efisien dengan caching dan pipeline build paralel. |
| **Version Control** | Git + GitHub | Manajemen kode sumber dan kolaborasi tim. |

### 4.3 Tahapan Pengerjaan

```
┌─────────────────────────────────────────────────────────┐
│ TAHAP 1: ANALISIS & PERANCANGAN (Minggu 1–2)            │
│ ├── Analisis kebutuhan pengguna (siswa SMA)             │
│ ├── Studi literatur prinsip IMK dan UI Design           │
│ ├── Perancangan wireframe dan mockup                    │
│ ├── Perancangan struktur database                       │
│ └── Perancangan arsitektur aplikasi                     │
└─────────────────────┬───────────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────────────────┐
│ TAHAP 2: PENGEMBANGAN FRONTEND (Minggu 3–5)             │
│ ├── Implementasi Landing Page & Onboarding              │
│ ├── Implementasi Dashboard & navigasi sidebar           │
│ ├── Implementasi halaman Daftar Bab                     │
│ ├── Implementasi Split-Screen Learning (materi + kuis)  │
│ ├── Implementasi Rapor Kemajuan & grafik                │
│ └── Implementasi halaman Tutor AI                       │
└─────────────────────┬───────────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────────────────┐
│ TAHAP 3: PENGEMBANGAN BACKEND (Minggu 4–6)              │
│ ├── Setup server Hono + tRPC                            │
│ ├── Implementasi autentikasi (Better Auth)              │
│ ├── Implementasi CRUD materi & kuis                     │
│ ├── Implementasi sistem skor, XP, dan bintang           │
│ ├── Implementasi Tutor AI pipeline                      │
│ └── Integrasi database PostgreSQL + Drizzle ORM         │
└─────────────────────┬───────────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────────────────┐
│ TAHAP 4: INTEGRASI & GAMIFIKASI (Minggu 6–7)            │
│ ├── Integrasi frontend ↔ backend                        │
│ ├── Implementasi sistem gamifikasi (XP, Bintang)        │
│ ├── Implementasi algoritma analisis kemajuan            │
│ └── Implementasi dark mode & responsive design          │
└─────────────────────┬───────────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────────────────┐
│ TAHAP 5: PENGUJIAN & EVALUASI (Minggu 7–8)              │
│ ├── Unit testing (Bun test runner)                      │
│ ├── Integration testing (PGlite in-memory DB)           │
│ ├── Usability testing dengan pengguna (siswa SMA)       │
│ ├── Perbaikan berdasarkan feedback                      │
│ └── Evaluasi prinsip IMK (heuristic evaluation)         │
└─────────────────────┬───────────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────────────────┐
│ TAHAP 6: DEPLOYMENT & DOKUMENTASI (Minggu 8)            │
│ ├── Deployment ke Vercel                                │
│ ├── Penyusunan dokumentasi teknis                       │
│ └── Penyusunan laporan proposal IMK                     │
└─────────────────────────────────────────────────────────┘
```

---

## BAB V. JADWAL PENGERJAAN

| Minggu | Tahap | Kegiatan Utama | Output |
|--------|-------|----------------|--------|
| **1** | Analisis & Perancangan | Analisis kebutuhan, studi literatur IMK | Dokumen analisis kebutuhan |
| **2** | Perancangan UI/UX | Wireframe, mockup, desain database | Wireframe & mockup lengkap |
| **3** | Pengembangan Frontend I | Landing Page, Onboarding, Dashboard | Halaman navigasi utama |
| **4** | Pengembangan Frontend II | Split-Screen Learning, Kuis Player | Antarmuka belajar utama |
| **5** | Pengembangan Frontend III | Rapor Kemajuan, Tutor AI, Settings | Semua halaman frontend |
| **5–6** | Pengembangan Backend | Server, Auth, CRUD, API tRPC | Backend API fungsional |
| **6–7** | Integrasi & Gamifikasi | Integrasi full-stack, XP, Bintang | Aplikasi terintegrasi |
| **7** | Pengujian | Unit test, integration test, usability test | Laporan pengujian |
| **8** | Deployment & Dokumentasi | Deploy, laporan proposal | Aplikasi live + laporan |

---

## BAB VI. PENUTUP

### Kesimpulan

Aplikasi **Pijar — Pembelajaran Interaktif Pelajar** dirancang sebagai solusi media pembelajaran interaktif bagi siswa SMA (usia 15–18 tahun) yang menghadapi tekanan akademis dalam mempersiapkan ujian sekolah dan UTBK/SNBT. Aplikasi ini mengaplikasikan prinsip-prinsip **Interaksi Manusia dan Komputer (IMK)** secara menyeluruh melalui lima pilar *usability*:

1. **Learnability** — Font rounded (Quicksand & Nunito) yang nyaman dibaca dan onboarding visual yang sederhana.
2. **Efficiency** — Antarmuka *split-screen* yang menampilkan materi dan kuis secara bersamaan.
3. **Memorability** — Skema warna *color-coded* per mata pelajaran yang konsisten.
4. **Error Prevention** — Feedback taktil tombol yang tegas dan area sentuh yang memadai.
5. **Satisfaction** — Desain *Clay-Inspired UI* yang menyenangkan dan sistem gamifikasi yang memotivasi.

Dengan cakupan materi lengkap berdasarkan Kurikulum Merdeka (5 mata pelajaran, 99+ bab), fitur Tutor AI berbasis kecerdasan buatan, dan rapor kemajuan visual, Pijar diharapkan dapat menjadi media belajar yang efektif, menyenangkan, dan mudah digunakan oleh seluruh siswa SMA di Indonesia.

---

## DAFTAR PUSTAKA

1. Nielsen, J. (1994). *Usability Engineering*. Morgan Kaufmann Publishers.
2. Shneiderman, B., Plaisant, C., Cohen, M., Jacobs, S., & Elmqvist, N. (2017). *Designing the User Interface: Strategies for Effective Human-Computer Interaction* (6th ed.). Pearson.
3. Norman, D. A. (2013). *The Design of Everyday Things* (Revised ed.). Basic Books.
4. Dix, A., Finlay, J., Abowd, G., & Beale, R. (2004). *Human-Computer Interaction* (3rd ed.). Pearson Education.
5. Preece, J., Rogers, Y., & Sharp, H. (2019). *Interaction Design: Beyond Human-Computer Interaction* (5th ed.). Wiley.
6. Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. (2022). *Kurikulum Merdeka: Capaian Pembelajaran SMA/MA*. Jakarta: Kemendikbudristek.
7. React Documentation. (2024). https://react.dev
8. TanStack Router Documentation. (2024). https://tanstack.com/router
9. Tailwind CSS Documentation. (2024). https://tailwindcss.com
10. Hono Documentation. (2024). https://hono.dev
11. Drizzle ORM Documentation. (2024). https://orm.drizzle.team
12. shadcn/ui Documentation. (2024). https://ui.shadcn.com

---

## LAMPIRAN

### Lampiran A: Flowchart Alur Pengguna

```
┌─────────┐     ┌──────────┐     ┌───────────┐     ┌───────────┐
│ Landing │────▶│  Login   │────▶│ Onboarding│────▶│ Dashboard │
│  Page   │     │          │     │(Kelas,    │     │  (Beranda)│
└─────────┘     └──────────┘     │Jurusan,   │     └─────┬─────┘
                                 │Avatar)    │           │
                                 └───────────┘           │
                                                         │
                    ┌────────────────────────────────────┼──────────────┐
                    │                    │               │              │
                    ▼                    ▼               ▼              ▼
              ┌──────────┐      ┌──────────────┐ ┌───────────┐ ┌──────────┐
              │ Mata     │      │ Rapor        │ │ Tutor AI  │ │Pengaturan│
              │Pelajaran │      │ Kemajuan     │ │           │ │          │
              └────┬─────┘      └──────────────┘ └───────────┘ └──────────┘
                   │
                   ▼
              ┌──────────┐
              │Daftar Bab│
              └────┬─────┘
                   │
                   ▼
         ┌──────────────────┐
         │  Split-Screen    │
         │  Materi │ Kuis   │
         └────────┬─────────┘
                  │
                  ▼
         ┌──────────────────┐
         │  Hasil & Ulasan  │
         │  Skor, XP, Bintang│
         └──────────────────┘
```

### Lampiran B: Referensi Desain

| Elemen | Spesifikasi |
|--------|------------|
| **Border Radius** | Kartu: 24px, Seksi: 40px, Tombol: 12px |
| **Clay Shadow** | `rgba(0,0,0,0.1) 0px 1px 1px, rgba(0,0,0,0.04) 0px -1px 1px inset` |
| **Hover Shadow** | `rgb(0,0,0) -6px 6px 0px` (efek taktil 3D) |
| **Hover Transform** | `rotateZ(-2deg) translateY(-4px)` |
| **Active Transform** | `translateY(2px)` (efek tekan) |
| **Spacing Scale** | Kelipatan 8px (8, 16, 24, 32, 48, 64) |
| **Responsive Breakpoint** | Mobile: <768px (stacked), Desktop: ≥768px (side-by-side) |

### Lampiran C: Palet Warna Mata Pelajaran

```
Matematika (Lemon):
  ┌──────────┬──────────┬──────────┬──────────┐
  │ #f8cc65  │ #fbbd41  │ #d08a11  │ #9d6a09  │
  │ Lemon400 │ Lemon500 │ Lemon700 │ Lemon800 │
  └──────────┴──────────┴──────────┴──────────┘

Fisika (Matcha):
  ┌──────────┬──────────┬──────────┬──────────┐
  │ #84e7a5  │ #078a52  │ #047a3f  │ #02492a  │
  │ Matcha300│ Matcha600│ Matcha700│ Matcha800│
  └──────────┴──────────┴──────────┴──────────┘

Kimia (Ube):
  ┌──────────┬──────────┬──────────┐
  │ #c1b0ff  │ #43089f  │ #32037d  │
  │ Ube300   │ Ube800   │ Ube900   │
  └──────────┴──────────┴──────────┘

Biologi (Pomegranate):
  ┌──────────┬──────────┬──────────┐
  │ #fff0f1  │ #fc7981  │ #e0535c  │
  │ Pom50    │ Pom400   │ Pom600   │
  └──────────┴──────────┴──────────┘

Bahasa Inggris (Slushie):
  ┌──────────┬──────────┐
  │ #3bd3fd  │ #0089ad  │
  │ Slushie500│ Slushie800│
  └──────────┴──────────┘
```

### Lampiran D: Deskripsi Wireframe Halaman Utama

**1. Landing Page**
```
┌─────────────────────────────────────────────────┐
│  [Logo Pijar]                    [Masuk] [Daftar]│
├─────────────────────────────────────────────────┤
│                                                 │
│         🎓 Belajar Seru, Prestasi Terasa!       │
│                                                 │
│    Platform pembelajaran interaktif untuk         │
│    siswa SMA dengan materi lengkap, kuis         │
│    split-screen, dan asisten AI cerdas.         │
│                                                 │
│    [═══ Mulai Belajar Sekarang ═══]              │
│         (Clay 3D Button, Lemon color)            │
│                                                 │
│    ┌─────────┐ ┌─────────┐ ┌─────────┐         │
│    │ 📐 Mate │ │ ⚡ Fisi │ │ 🧪 Kimi │         │
│    │ 22 Bab  │ │ 19 Bab  │ │ 20 Bab  │         │
│    └─────────┘ └─────────┘ └─────────┘         │
│    ┌─────────┐ ┌─────────┐                      │
│    │ 🧬 Bio  │ │ 📝 B.Ing│                      │
│    │ 24 Bab  │ │ 14 Bab  │                      │
│    └─────────┘ └─────────┘                      │
│                                                 │
├─────────────────────────────────────────────────┤
│  © 2026 Pijar — Untuk Pendidikan Indonesia      │
└─────────────────────────────────────────────────┘
```

**2. Dashboard**
```
┌──────┬──────────────────────────────────────────┐
│      │  Selamat Pagi, [Nama]! 👋                │
│ 📐   │  "Semangat belajar hari ini!"             │
│ Mate │                                          │
│      │  ⭐ 12 Bintang    ✨ 2,450 XP            │
│ ⚡   │                                          │
│ Fisi │  ── Mata Pelajaran SMA ──                 │
│      │                                          │
│ 🧪   │  ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│ Kimi │  │Matematika│ │  Fisika  │ │  Kimia   │ │
│      │  │  🟡 22   │ │  🟢 19   │ │  🟣 20   │ │
│ 🧬   │  │   Bab    │ │   Bab    │ │   Bab    │ │
│ Bio  │  └──────────┘ └──────────┘ └──────────┘ │
│      │  ┌──────────┐ ┌──────────┐              │
│ 📝   │  │  Biologi │ │B. Inggris│              │
│ B.Ing│  │  🔴 24   │ │  🔵 14   │              │
│      │  │   Bab    │ │   Bab    │              │
│ 📊   │  └──────────┘ └──────────┘              │
│Rapor │                                          │
│      │                                          │
│ 🤖   │                                          │
│Tutor │                                          │
│      │                                          │
│ ⚙️   │                                          │
│Setting│                                         │
└──────┴──────────────────────────────────────────┘
```

**3. Split-Screen Learning**
```
┌──────────────────────────────────────────────────┐
│ ← Bab 3: Trigonometri            ⭐ +1  ✨ +50  │
├────────────────────────┬─────────────────────────┤
│  MATERI                │  KUIS LATIHAN            │
│                        │                          │
│  ╔══════════════════╗  │  ╔══════════════════════╗│
│  ║ Ringkasan Materi ║  │  ║ Soal 1 dari 5        ║│
│  ║                  ║  │  ║                      ║│
│  ║ sin²θ + cos²θ = 1║  │  ║ Jika sin 30° = ½,   ║│
│  ║ tan θ = sin/cos  ║  │  ║ maka cos 30° = ?     ║│
│  ║                  ║  │  ║                      ║│
│  ║ [Tabel Rumus]    ║  │  ║ ○ A. ½               ║│
│  ║ [Diagram]        ║  │  ║ ○ B. √2/2            ║│
│  ║                  ║  │  ║ ● C. √3/2  ← dipilih ║│
│  ╚══════════════════╝  │  ║ ○ D. 1               ║│
│                        │  ║ ○ E. √3              ║│
│                        │  ║                      ║│
│                        │  ║  [══ Submit Jawaban ══]║│
│                        │  ╚══════════════════════╝│
├────────────────────────┴─────────────────────────┤
│  Progress: ●●●○○  3/5 dijawab                    │
└──────────────────────────────────────────────────┘
```
