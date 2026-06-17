import { useState, useEffect } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

interface MascotGreetingProps {
  username: string;
}

export function MascotGreeting({ username }: MascotGreetingProps) {
  const [greeting, setGreeting] = useState("");
  const [mascotMood, setMascotMood] = useState<"happy" | "excited" | "focus">("happy");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 11) {
      setGreeting("Selamat pagi! Pagi yang segar untuk mulai menguasai rumus sains hari ini. Semangat!");
      setMascotMood("excited");
    } else if (hour >= 11 && hour < 15) {
      setGreeting("Selamat siang! Istirahat sejenak di sela kelas sambil latihan soal tipis-tipis yuk.");
      setMascotMood("happy");
    } else if (hour >= 15 && hour < 19) {
      setGreeting("Selamat sore! Ayo kumpulkan beberapa bintang emas sebelum hari berganti malam!");
      setMascotMood("focus");
    } else {
      setGreeting("Selamat malam! Suasana tenang malam hari sangat cocok untuk me-review materi belajar.");
      setMascotMood("happy");
    }
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-5 bg-[var(--pure-white)] border-2 border-[var(--oat-border)] rounded-[var(--radius-xl)] clay-shadow mb-8 relative overflow-hidden">
      {/* Mascot Illustration */}
      <div className="relative flex items-center justify-center h-20 w-20 rounded-[var(--radius-2xl)] bg-[var(--lemon-400)] border-2 border-[var(--clay-black)] shrink-0 clay-shadow select-none">
        <div className="animate-bounce flex flex-col items-center">
          <MaterialIcon 
            name={mascotMood === "excited" ? "emoji_emotions" : mascotMood === "focus" ? "psychology" : "face"} 
            className="text-4xl text-[var(--clay-black)]" 
          />
          <span className="text-[10px] font-black uppercase text-[var(--clay-black)] tracking-wider -mt-1 font-headline">
            PIJAR AI
          </span>
        </div>
        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[var(--matcha-300)] border border-[var(--clay-black)] animate-pulse" />
      </div>

      {/* Bubble Chat */}
      <div className="flex-1 text-center sm:text-left relative z-10">
        <div className="inline-block relative bg-[var(--matcha-100)] border-2 border-[var(--clay-black)] p-4 rounded-[var(--radius-lg)] text-[var(--clay-black)] max-w-full">
          {/* Bubble chat triangle pointer (decorative) */}
          <div className="hidden sm:block absolute top-1/2 -left-2.5 -translate-y-1/2 w-4 h-4 bg-[var(--matcha-100)] border-l-2 border-b-2 border-[var(--clay-black)] rotate-45" />
          
          <h2 className="text-base font-headline font-bold mb-1">
            Halo, {username}! 👋
          </h2>
          <p className="text-sm font-body text-[var(--warm-charcoal)] leading-relaxed">
            {greeting}
          </p>
        </div>
      </div>
      
      {/* Decorative background dashed lines */}
      <div className="absolute right-0 bottom-0 top-0 w-32 border-l border-dashed border-[var(--oat-border)] pointer-events-none opacity-40 hidden md:block" />
    </div>
  );
}
