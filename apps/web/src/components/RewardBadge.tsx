import { MaterialIcon } from "@/components/ui/MaterialIcon";

interface RewardBadgeProps {
  stars: number;
  xp: number;
}

export function RewardBadge({ stars, xp }: RewardBadgeProps) {
  // Determine badge rank level
  const getRankName = (points: number) => {
    if (points >= 5000) return "Master Sains (Pijar)";
    if (points >= 3000) return "Cendekiawan MIPA";
    if (points >= 1500) return "Pejuang UTBK";
    if (points >= 500) return "Pionir Belajar";
    return "Siswa Pijar";
  };

  const getRankColor = (points: number) => {
    if (points >= 5000) return "bg-[var(--ube-800)] text-[var(--pure-white)] border-[var(--clay-black)]";
    if (points >= 3000) return "bg-[var(--slushie-500)]/25 text-[var(--slushie-800)] border-[var(--slushie-800)]";
    if (points >= 1500) return "bg-[var(--matcha-300)] text-[var(--matcha-800)] border-[var(--matcha-800)]";
    if (points >= 500) return "bg-[var(--lemon-400)]/30 text-[var(--lemon-800)] border-[var(--lemon-700)]";
    return "bg-[var(--oat-light)] text-[var(--warm-charcoal)] border-[var(--oat-border)]";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* XP Card */}
      <div className="flex items-center gap-4 p-5 bg-[var(--pure-white)] border-2 border-[var(--clay-black)] rounded-[var(--radius-xl)] clay-shadow clay-hover">
        <div className="h-12 w-12 bg-[var(--slushie-500)] rounded-[var(--radius-lg)] border-2 border-[var(--clay-black)] flex items-center justify-center shrink-0">
          <MaterialIcon name="bolt" className="text-2xl text-[var(--clay-black)] animate-pulse" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-headline uppercase tracking-wider text-[var(--warm-charcoal)]">
            Total Poin XP
          </p>
          <p className="text-2xl font-black font-headline text-[var(--clay-black)]">
            {xp} <span className="text-sm font-medium text-[var(--warm-charcoal)]">XP</span>
          </p>
        </div>
      </div>

      {/* Stars Card */}
      <div className="flex items-center gap-4 p-5 bg-[var(--pure-white)] border-2 border-[var(--clay-black)] rounded-[var(--radius-xl)] clay-shadow clay-hover">
        <div className="h-12 w-12 bg-[var(--lemon-400)] rounded-[var(--radius-lg)] border-2 border-[var(--clay-black)] flex items-center justify-center shrink-0">
          <MaterialIcon name="star" className="text-2xl text-[var(--clay-black)] animate-spin" style={{ animationDuration: '6s' }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-headline uppercase tracking-wider text-[var(--warm-charcoal)]">
            Bintang Emas
          </p>
          <p className="text-2xl font-black font-headline text-[var(--clay-black)]">
            {stars} <span className="text-sm font-medium text-[var(--warm-charcoal)]">Bintang</span>
          </p>
        </div>
      </div>

      {/* Rank Badge Card */}
      <div className="flex items-center gap-4 p-5 bg-[var(--pure-white)] border-2 border-[var(--clay-black)] rounded-[var(--radius-xl)] clay-shadow clay-hover">
        <div className="h-12 w-12 bg-[var(--pomegranate-400)]/30 rounded-[var(--radius-lg)] border-2 border-[var(--clay-black)] flex items-center justify-center shrink-0">
          <MaterialIcon name="military_tech" className="text-2xl text-[var(--pomegranate-600)]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-headline uppercase tracking-wider text-[var(--warm-charcoal)]">
            Lencana Rapor
          </p>
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border-2 ${getRankColor(xp)} font-headline mt-1 truncate max-w-full`}>
            {getRankName(xp)}
          </span>
        </div>
      </div>
    </div>
  );
}
