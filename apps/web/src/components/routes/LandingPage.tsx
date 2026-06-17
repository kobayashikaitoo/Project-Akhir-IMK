import { Link } from "@tanstack/react-router";
import { Button } from "@labas/ui/components/button";
import { Card, CardContent } from "@labas/ui/components/card";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { useState } from "react";

function FaqItem({ question, answer, isDark }: { question: string; answer: string; isDark?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b-2 py-6 ${isDark ? 'border-[var(--ube-300)]/30' : 'border-[var(--oat-border)]'} last:border-b-0`}>
      <button
        type="button"
        className="flex w-full items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`font-headline font-semibold text-2xl tracking-[-0.64px] transition-colors ${isDark ? 'text-[var(--pure-white)] group-hover:text-[var(--ube-300)]' : 'text-[var(--clay-black)] group-hover:text-[var(--matcha-700)]'}`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""} ${isDark ? 'border-[var(--ube-300)]/50 text-[var(--pure-white)] group-hover:bg-[var(--ube-300)]/20' : 'border-[var(--oat-border)] text-[var(--clay-black)] group-hover:bg-[var(--oat-light)]'}`}>
          <MaterialIcon
            name="expand_more"
            className="text-2xl"
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className={`text-lg leading-relaxed pr-12 ${isDark ? 'text-[var(--ube-300)]' : 'text-[var(--warm-charcoal)]'}`}>
          {answer}
        </p>
      </div>
    </div>
  );
}

const SUBJECTS = [
  { name: "Matematika", icon: "calculate", color: "bg-[var(--lemon-400)]" },
  { name: "Fisika", icon: "bolt", color: "bg-[var(--slushie-500)]" },
  { name: "Kimia", icon: "science", color: "bg-[var(--matcha-300)]" },
  { name: "Biologi", icon: "eco", color: "bg-[var(--pomegranate-400)]" },
  { name: "Bahasa Inggris", icon: "translate", color: "bg-[var(--ube-300)]" },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--warm-cream)] flex flex-col font-sans selection:bg-[var(--matcha-300)] selection:text-[var(--clay-black)]">
      {/* Navbar */}
      <nav className="w-full px-6 py-4 md:px-12 lg:px-16 flex items-center justify-between max-w-7xl mx-auto border-b-2 border-[var(--oat-border)]">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Labas Logo" className="h-10 w-auto object-contain" />
          <span className="font-headline font-semibold text-2xl tracking-[-0.64px] text-[var(--clay-black)] hidden sm:block">Labas</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="https://saweria.co/rogasper" target="_blank" rel="noopener noreferrer" className="text-[var(--warm-charcoal)] hover:text-[var(--pomegranate-400)] transition-colors p-2 hidden md:flex items-center gap-2" aria-label="Support via Saweria">
            <MaterialIcon name="favorite" className="text-xl" />
            <span className="font-semibold text-base">Support</span>
          </a>
          <a href="https://github.com/rogasper/labas-bahasa" target="_blank" rel="noopener noreferrer" className="text-[var(--warm-charcoal)] hover:text-[var(--clay-black)] transition-colors p-2 hidden sm:flex items-center gap-2" aria-label="GitHub Repository">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span className="font-semibold text-base">Star us</span>
          </a>
          <div className="w-px h-6 bg-[var(--oat-border)] hidden sm:block mx-2"></div>
          <Link to="/login">
            <Button variant="ghost" className="text-[var(--clay-black)] font-semibold hover:bg-[var(--oat-light)] rounded-[12px] text-lg px-4 sm:px-6 h-12">
              Masuk
            </Button>
          </Link>
          <Link to="/login">
            <Button className="bg-[var(--clay-black)] text-[var(--pure-white)] hover:bg-[var(--dark-charcoal)] rounded-[24px] h-12 px-6 sm:px-8 font-semibold text-lg clay-hover clay-shadow">
              Mulai Gratis
            </Button>
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="w-full px-6 md:px-12 lg:px-16 pt-16 pb-20 md:pt-24 md:pb-32 flex flex-col xl:flex-row items-center justify-between gap-12 lg:gap-16 relative max-w-[1440px] mx-auto">
          <div className="flex-1 text-center xl:text-left space-y-8 z-10 w-full max-w-[800px] xl:max-w-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--matcha-300)] border-2 border-[var(--matcha-800)] text-[var(--clay-black)] uppercase-label shadow-sm mx-auto xl:mx-0 transform -rotate-2">
              <MaterialIcon name="school" className="text-sm" />
              <span>Platform Belajar SMA Interaktif</span>
            </div>
            
            <h1 className="text-[50px] md:text-[70px] lg:text-[85px] font-headline font-semibold text-[var(--clay-black)] tracking-[-2.4px] lg:tracking-[-3.2px] leading-[1.0] lg:leading-[0.95] drop-shadow-sm">
              Belajar Lebih Seru, Persiapan Lebih Matang.
            </h1>
            
            <p className="text-xl md:text-2xl text-[var(--warm-charcoal)] max-w-2xl mx-auto xl:mx-0 leading-relaxed">
              Platform belajar interaktif untuk pelajar SMA dengan materi lengkap, latihan per bab, quiz singkat, dan analisis progres belajar.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center xl:justify-start pt-6">
              <Link to="/login" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[var(--pure-white)] text-[var(--clay-black)] rounded-[24px] h-[64px] px-8 text-xl font-semibold border-2 border-[var(--oat-border)] clay-shadow clay-hover">
                  Mulai Belajar Sekarang
                </Button>
              </Link>
              <a href="https://github.com/rogasper/labas-bahasa" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="ghost" className="w-full sm:w-auto text-[var(--clay-black)] rounded-[24px] h-[64px] px-8 text-xl font-semibold hover:bg-[var(--oat-light)] border-2 border-transparent flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  Lihat di GitHub
                </Button>
              </a>
            </div>
          </div>
          
          {/* HERO IMAGE WITH FLOATING ASSETS */}
          <div className="flex-1 w-full relative group mt-8 xl:mt-0 flex justify-center xl:justify-end">
            <div className="relative w-full max-w-[650px] lg:max-w-[750px]">
              <img 
                src="/hero_img.png" 
                alt="Labas Dashboard Preview" 
                className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10"
              />
              <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-32 md:w-40 h-auto z-20 hidden sm:block">
                <img src="/generateai.png" alt="floating element" className="w-full h-auto drop-shadow-2xl" />
              </div>
              <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-40 md:w-48 h-auto z-20 hidden sm:block">
                <img src="/mocktest.png" alt="floating element" className="w-full h-auto drop-shadow-2xl" />
              </div>
              <div className="absolute top-[40%] -left-16 md:-left-24 w-24 md:w-32 h-auto z-0 hidden lg:block opacity-80 blur-[1px]">
                <img src="/progress.png" alt="floating element" className="w-full h-auto drop-shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* SUBJECTS SECTION */}
        <section className="w-full bg-[var(--warm-cream)] py-20 relative overflow-hidden">
          <div className="absolute top-20 -left-64 w-[500px] h-[500px] bg-[var(--matcha-300)]/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-20 -right-64 w-[600px] h-[600px] bg-[var(--slushie-500)]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ube-300)]/30 border-2 border-[var(--ube-300)] text-[var(--ube-800)] uppercase-label shadow-sm">
                <MaterialIcon name="menu_book" className="text-sm" />
                <span>5 Mata Pelajaran</span>
              </div>
              <h2 className="text-[50px] md:text-[60px] font-headline font-semibold text-[var(--clay-black)] tracking-[-2.4px] leading-tight drop-shadow-sm">
                Kurikulum SMA Lengkap
              </h2>
              <p className="text-xl text-[var(--warm-charcoal)]">
                Materi interaktif untuk kelas 10, 11, dan 12 dengan ratusan soal latihan dan quiz di setiap bab.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {SUBJECTS.map((subject) => (
                <Card key={subject.name} className="clay-shadow clay-hover bg-[var(--pure-white)] border-2 border-[var(--oat-border)] rounded-[24px] overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 rounded-full ${subject.color} flex items-center justify-center mx-auto mb-3`}>
                      <MaterialIcon name={subject.icon} className="text-2xl text-[var(--clay-black)]" />
                    </div>
                    <h3 className="font-headline font-bold text-[var(--clay-black)] text-sm">
                      {subject.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES SHOWCASE - ZIGZAG */}
        <section className="w-full bg-[var(--warm-cream)] py-20 pb-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--matcha-300)]/30 border-2 border-[var(--matcha-300)] text-[var(--matcha-800)] uppercase-label shadow-sm">
                <MaterialIcon name="auto_awesome" className="text-sm" />
                <span>Pengalaman Belajar</span>
              </div>
              <h2 className="text-[50px] md:text-[60px] font-headline font-semibold text-[var(--clay-black)] tracking-[-2.4px] leading-tight drop-shadow-sm">
                Belajar dengan Cara yang Menyenangkan
              </h2>
            </div>

            <div className="space-y-32">
              {/* Feature 1: Materi Interaktif */}
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--matcha-400)] to-[var(--lemon-400)] rounded-[40px] transform rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
                  <div className="relative rounded-[40px] overflow-hidden border-4 border-[var(--pure-white)] shadow-[0_20px_60px_rgba(0,0,0,0.15)] transform transition-transform duration-700 group-hover:-translate-y-2 bg-[var(--oat-light)]">
                    <img src="/hero_img.png" alt="Materi Interaktif" className="w-full aspect-video object-cover" />
                  </div>
                  <div className="absolute -top-6 -left-6 md:-left-10 bg-[var(--pure-white)] border-2 border-[var(--oat-border)] p-4 rounded-[24px] shadow-xl clay-hover transform rotate-3 z-20 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--matcha-300)] flex items-center justify-center">
                      <MaterialIcon name="auto_stories" className="text-2xl text-[var(--matcha-800)]" />
                    </div>
                    <div>
                      <p className="font-bold text-[var(--clay-black)] leading-tight">Materi Lengkap</p>
                      <p className="text-xs text-[var(--warm-charcoal)]">Per Bab & Kelas</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 w-full lg:w-1/2 space-y-6">
                  <h3 className="text-[40px] lg:text-[50px] font-headline font-semibold text-[var(--clay-black)] leading-[1.1] tracking-[-1.5px]">
                    Materi Interaktif <br/> <span className="text-[var(--matcha-600)]">Per Bab</span>
                  </h3>
                  <p className="text-xl text-[var(--warm-charcoal)] leading-relaxed">
                    Jelajahi materi pembelajaran yang tersusun rapi per bab untuk setiap mata pelajaran. Baca penjelasan konsep, pelajari contoh soal, dan langsung uji pemahamanmu dengan quiz di akhir setiap bab.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--matcha-300)]/50 flex items-center justify-center">
                        <MaterialIcon name="check" className="text-[var(--matcha-800)]" />
                      </div>
                      <span className="text-lg font-medium text-[var(--clay-black)]">Penjelasan Konsep yang Jelas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--matcha-300)]/50 flex items-center justify-center">
                        <MaterialIcon name="check" className="text-[var(--matcha-800)]" />
                      </div>
                      <span className="text-lg font-medium text-[var(--clay-black)]">Quiz di Setiap Bab</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--matcha-300)]/50 flex items-center justify-center">
                        <MaterialIcon name="check" className="text-[var(--matcha-800)]" />
                      </div>
                      <span className="text-lg font-medium text-[var(--clay-black)]">Kelas 10, 11, dan 12</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 2: Quiz Singkat */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                <div className="flex-1 w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ube-400)] via-[var(--matcha-300)] to-[var(--lemon-400)] rounded-[40px] transform -rotate-3 group-hover:-rotate-6 transition-transform duration-700"></div>
                  <div className="relative rounded-[40px] overflow-hidden border-4 border-[var(--pure-white)] shadow-[0_20px_60px_rgba(0,0,0,0.15)] transform transition-transform duration-700 group-hover:-translate-y-2 bg-[var(--oat-light)]">
                    <img src="/latihansoal.png" alt="Quiz Singkat" className="w-full aspect-video object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 md:-right-10 bg-[var(--pure-white)] border-2 border-[var(--oat-border)] p-4 rounded-[24px] shadow-xl clay-hover transform -rotate-3 z-20 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--ube-300)] flex items-center justify-center">
                      <MaterialIcon name="quiz" className="text-2xl text-[var(--ube-800)]" />
                    </div>
                    <div>
                      <p className="font-bold text-[var(--clay-black)] leading-tight">30 Soal</p>
                      <p className="text-xs text-[var(--warm-charcoal)]">Per Kelas</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 w-full lg:w-1/2 space-y-6">
                  <h3 className="text-[40px] lg:text-[50px] font-headline font-semibold text-[var(--clay-black)] leading-[1.1] tracking-[-1.5px]">
                    Quiz Singkat <br/> <span className="text-[var(--ube-800)]">Per Kelas</span>
                  </h3>
                  <p className="text-xl text-[var(--warm-charcoal)] leading-relaxed">
                    Uji kemampuanmu dengan 30 soal latihan untuk setiap kelas. Jawaban diacak agar lebih menantang, dan skor langsung ditampilkan saat selesai. Pantau progres belajarmu dari waktu ke waktu.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--ube-300)]/30 flex items-center justify-center">
                        <MaterialIcon name="check" className="text-[var(--clay-black)]" />
                      </div>
                      <span className="text-lg font-medium text-[var(--clay-black)]">Jawaban Diacak Otomatis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--ube-300)]/30 flex items-center justify-center">
                        <MaterialIcon name="check" className="text-[var(--clay-black)]" />
                      </div>
                      <span className="text-lg font-medium text-[var(--clay-black)]">Penilaian Instan</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--ube-300)]/30 flex items-center justify-center">
                        <MaterialIcon name="check" className="text-[var(--clay-black)]" />
                      </div>
                      <span className="text-lg font-medium text-[var(--clay-black)]">Riwayat Progres Tersimpan</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3: Simulasi Ujian */}
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--slushie-500)] to-[var(--ube-400)] rounded-[40px] transform rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
                  <div className="relative rounded-[40px] overflow-hidden border-4 border-[var(--pure-white)] shadow-[0_20px_60px_rgba(0,0,0,0.15)] transform transition-transform duration-700 group-hover:-translate-y-2 bg-[var(--oat-light)]">
                    <img src="/mocktest.png" alt="Paket Ujian" className="w-full aspect-video object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 md:-right-10 bg-[var(--pure-white)] border-2 border-[var(--oat-border)] p-4 rounded-[24px] shadow-xl clay-hover transform -rotate-6 z-20 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--slushie-500)] flex items-center justify-center">
                      <MaterialIcon name="timer" className="text-2xl text-[var(--clay-black)]" />
                    </div>
                    <div>
                      <p className="font-bold text-[var(--clay-black)] leading-tight">Paket Ujian</p>
                      <p className="text-xs text-[var(--warm-charcoal)]">Dengan Timer</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 w-full lg:w-1/2 space-y-6">
                  <h3 className="text-[40px] lg:text-[50px] font-headline font-semibold text-[var(--clay-black)] leading-[1.1] tracking-[-1.5px]">
                    Simulasi Ujian <br/> <span className="text-[var(--slushie-600)]">Seperti Aslinya</span>
                  </h3>
                  <p className="text-xl text-[var(--warm-charcoal)] leading-relaxed">
                    Rasakan suasana ujian sesungguhnya dengan paket ujian yang dilengkapi timer dan antarmuka fokus penuh. Selesaikan soal, dapatkan skor dan akurasi secara instan, dan pantau perkembangan belajarmu.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--slushie-500)]/30 flex items-center justify-center">
                        <MaterialIcon name="check" className="text-[var(--clay-black)]" />
                      </div>
                      <span className="text-lg font-medium text-[var(--clay-black)]">Antarmuka Fokus Penuh</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--slushie-500)]/30 flex items-center justify-center">
                        <MaterialIcon name="check" className="text-[var(--clay-black)]" />
                      </div>
                      <span className="text-lg font-medium text-[var(--clay-black)]">Skor & Akurasi Instan</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--slushie-500)]/30 flex items-center justify-center">
                        <MaterialIcon name="check" className="text-[var(--clay-black)]" />
                      </div>
                      <span className="text-lg font-medium text-[var(--clay-black)]">Bank Soal & Paket Ujian</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section id="features" className="w-full bg-[var(--pure-white)] py-32 border-y-2 border-dashed border-[var(--oat-border)]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
              <h2 className="text-[50px] md:text-[60px] font-headline font-semibold text-[var(--clay-black)] tracking-[-2.4px] leading-tight">
                Semua yang Kamu Butuhkan
              </h2>
              <p className="text-2xl text-[var(--warm-charcoal)]">
                Fitur lengkap untuk mendukung perjalanan belajar dan persiapan ujianmu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="clay-shadow clay-hover bg-[var(--pure-white)] border-2 border-[var(--oat-border)] rounded-[24px] overflow-hidden group p-4">
                <div className="h-56 w-full flex items-center justify-center p-2">
                  <img src="/hero_img.png" alt="Materi Interaktif" className="h-full w-auto object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 drop-shadow-lg" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-headline text-[32px] font-semibold text-[var(--clay-black)] tracking-[-0.64px] mb-3 leading-tight">
                    Materi Interaktif
                  </h3>
                  <p className="text-[var(--warm-charcoal)] text-lg leading-relaxed">
                    Baca dan pelajari materi pembelajaran yang tersusun rapi per bab untuk 5 mata pelajaran utama SMA.
                  </p>
                </CardContent>
              </Card>

              <Card className="clay-shadow clay-hover bg-[var(--pure-white)] border-2 border-[var(--oat-border)] rounded-[24px] overflow-hidden group p-4">
                <div className="h-56 w-full flex items-center justify-center p-2">
                  <img src="/latihansoal.png" alt="Latihan Per Bab" className="h-full w-auto object-contain transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 drop-shadow-lg" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-headline text-[32px] font-semibold text-[var(--clay-black)] tracking-[-0.64px] mb-3 leading-tight">
                    Latihan Per Bab
                  </h3>
                  <p className="text-[var(--warm-charcoal)] text-lg leading-relaxed">
                    Uji pemahamanmu dengan quiz interaktif di setiap bab. Jawaban diacak otomatis untuk latihan yang lebih menantang.
                  </p>
                </CardContent>
              </Card>

              <Card className="clay-shadow clay-hover bg-[var(--pure-white)] border-2 border-[var(--oat-border)] rounded-[24px] overflow-hidden group p-4">
                <div className="h-56 w-full flex items-center justify-center p-2">
                  <img src="/mocktest.png" alt="Simulasi Ujian" className="h-full w-auto object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 drop-shadow-lg" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-headline text-[32px] font-semibold text-[var(--clay-black)] tracking-[-0.64px] mb-3 leading-tight">
                    Simulasi Ujian
                  </h3>
                  <p className="text-[var(--warm-charcoal)] text-lg leading-relaxed">
                    Rasakan suasana ujian sesungguhnya dengan paket ujian bertimer, antarmuka fokus penuh, dan penilaian instan.
                  </p>
                </CardContent>
              </Card>

              <Card className="clay-shadow clay-hover bg-[var(--pure-white)] border-2 border-[var(--oat-border)] rounded-[24px] overflow-hidden group p-4">
                <div className="h-56 w-full flex items-center justify-center p-2">
                  <img src="/progress.png" alt="Analitik Progres" className="h-full w-auto object-contain transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 drop-shadow-lg" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-headline text-[32px] font-semibold text-[var(--clay-black)] tracking-[-0.64px] mb-3 leading-tight">
                    Analitik Progres
                  </h3>
                  <p className="text-[var(--warm-charcoal)] text-lg leading-relaxed">
                    Lacak perkembangan belajarmu dengan grafik skor, akurasi, dan riwayat latihan dari waktu ke waktu.
                  </p>
                </CardContent>
              </Card>

              <Card className="clay-shadow clay-hover bg-[var(--pure-white)] border-2 border-[var(--oat-border)] rounded-[24px] overflow-hidden group p-4">
                <div className="h-56 w-full flex items-center justify-center p-2">
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-[var(--lemon-400)] flex items-center justify-center">
                      <MaterialIcon name="library_books" className="text-5xl text-[var(--clay-black)]" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-headline text-[32px] font-semibold text-[var(--clay-black)] tracking-[-0.64px] mb-3 leading-tight">
                    Bank Soal
                  </h3>
                  <p className="text-[var(--warm-charcoal)] text-lg leading-relaxed">
                    Akses koleksi soal lengkap untuk setiap mata pelajaran. Buat latihan sendiri atau gunakan paket yang sudah tersedia.
                  </p>
                </CardContent>
              </Card>

              <Card className="clay-shadow clay-hover bg-[var(--pure-white)] border-2 border-[var(--oat-border)] rounded-[24px] overflow-hidden group p-4">
                <div className="h-56 w-full flex items-center justify-center p-2">
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-[var(--matcha-300)] flex items-center justify-center">
                      <MaterialIcon name="emoji_events" className="text-5xl text-[var(--matcha-800)]" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-headline text-[32px] font-semibold text-[var(--clay-black)] tracking-[-0.64px] mb-3 leading-tight">
                    XP & Lencana
                  </h3>
                  <p className="text-[var(--warm-charcoal)] text-lg leading-relaxed">
                    Kumpulkan poin XP dan bintang dari setiap latihan. Raih lencana dan naikkan rank seiring kemajuan belajarmu.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-[var(--ube-800)] py-32 rounded-t-[40px] mt-[-40px] z-10 relative shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t-2 border-[var(--oat-border)]/20">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-[50px] md:text-[60px] font-headline font-semibold text-[var(--pure-white)] tracking-[-2.4px] mb-6 leading-tight drop-shadow-sm">
                Pertanyaan Umum
              </h2>
              <p className="text-[var(--ube-300)] text-2xl max-w-2xl mx-auto">
                Temukan jawaban cepat untuk pertanyaan seputar Labas.
              </p>
            </div>

            <div className="bg-[var(--ube-900)]/40 backdrop-blur-sm border-2 border-[var(--ube-300)]/30 rounded-[32px] p-8 md:p-12 shadow-2xl">
              <FaqItem 
                isDark
                question="Apa itu Labas?" 
                answer="Labas (Pijar) adalah platform belajar interaktif untuk pelajar SMA. Kami menyediakan materi pembelajaran, latihan per bab, quiz singkat, bank soal, dan paket ujian untuk membantu kamu mempersiapkan diri menghadapi ujian sekolah." 
              />
              <FaqItem 
                isDark
                question="Mata pelajaran apa saja yang tersedia?" 
                answer="Saat ini Labas menyediakan materi dan latihan untuk 5 mata pelajaran utama SMA: Matematika, Fisika, Kimia, Biologi, dan Bahasa Inggris. Materi tersedia untuk kelas 10, 11, dan 12." 
              />
              <FaqItem 
                isDark
                question="Apakah Labas gratis?" 
                answer="Ya, Labas sepenuhnya gratis! Kamu bisa mengakses semua materi, latihan, dan quiz tanpa biaya apapun. Cukup daftar dan langsung mulai belajar." 
              />
              <FaqItem 
                isDark
                question="Bagaimana cara kerja sistem XP dan lencana?" 
                answer="Setiap jawaban benar di quiz dan latihan memberikan 10 XP. Bintang diberikan berdasarkan akurasi: 3 bintang untuk skor 90%+, 2 bintang untuk 70%+, dan 1 bintang untuk 50%+. Kumpulkan XP untuk naik rank dari Pemula hingga Maestro." 
              />
              <FaqItem 
                isDark
                question="Apakah progres saya tersimpan?" 
                answer="Ya, semua riwayat latihan dan quiz tersimpan secara otomatis di perangkatmu. Kamu bisa melihat perkembangan skor dan akurasi melalui halaman Analitik." 
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-[var(--matcha-800)] py-40 px-6 rounded-t-[40px] mt-[-40px] z-20 relative shadow-[0_-10px_40px_rgba(0,0,0,0.2)] border-t-2 border-[var(--matcha-600)]">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-[60px] md:text-[80px] font-headline font-semibold text-[var(--pure-white)] tracking-[-3.2px] leading-[0.95] drop-shadow-md">
              Siap Mulai Belajar?
            </h2>
            <p className="text-2xl text-[var(--matcha-300)] max-w-2xl mx-auto">
              Daftar sekarang dan mulai jelajahi materi, latihan, dan quiz untuk persiapan ujianmu.
            </p>
            <div className="pt-8">
              <Link to="/login" className="inline-block">
                <Button className="bg-[var(--pure-white)] text-[var(--clay-black)] hover:bg-[var(--oat-light)] rounded-[24px] h-[80px] px-14 text-2xl font-bold clay-shadow clay-hover">
                  Daftar Sekarang - Gratis
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[var(--pure-white)] py-12 border-t-2 border-[var(--oat-border)] text-center relative z-30">
        <div className="flex flex-col items-center gap-4 mb-8">
          <p className="text-[var(--warm-charcoal)] font-semibold text-lg">Hubungi Kami</p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-[var(--clay-black)]">
            <a href="mailto:admin@rogasper.com" className="flex items-center gap-2 hover:text-[var(--matcha-700)] transition-colors">
              <MaterialIcon name="mail" />
              <span className="font-semibold">admin@rogasper.com</span>
            </a>
            <a href="https://instagram.com/rogasper" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--matcha-700)] transition-colors">
              <MaterialIcon name="photo_camera" />
              <span className="font-semibold">@rogasper</span>
            </a>
            <a href="https://github.com/rogasper/labas-bahasa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--matcha-700)] transition-colors">
              <MaterialIcon name="code" />
              <span className="font-semibold">GitHub</span>
            </a>
            <a href="https://saweria.co/rogasper" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--pomegranate-400)] transition-colors">
              <MaterialIcon name="favorite" />
              <span className="font-semibold">Saweria</span>
            </a>
            <a href="https://ko-fi.com/rogasper" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--pomegranate-400)] transition-colors">
              <MaterialIcon name="local_cafe" />
              <span className="font-semibold">Ko-fi</span>
            </a>
            <a href="https://rogasper.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--matcha-700)] transition-colors">
              <MaterialIcon name="language" />
              <span className="font-semibold">rogasper.com</span>
            </a>
          </div>
        </div>
        <p className="text-[var(--warm-charcoal)] font-semibold text-lg">
          &copy; {new Date().getFullYear()} Labas. Didesain dengan penuh kehangatan.
        </p>
      </footer>
    </div>
  );
}
