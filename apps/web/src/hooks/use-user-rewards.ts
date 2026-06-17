import { useMemo } from "react";
import { usePracticeProgress } from "./use-practice-progress";

export interface UserRewards {
  xp: number;
  stars: number;
  rank: string;
}

const XP_PER_CORRECT = 10;

function getRankName(points: number): string {
  if (points >= 5000) return "Master Sains (Pijar)";
  if (points >= 3000) return "Cendekiawan MIPA";
  if (points >= 1500) return "Pejuang UTBK";
  if (points >= 500) return "Pionir Belajar";
  return "Siswa Pijar";
}

function starsFromScore(score: number, total: number): number {
  if (total === 0) return 0;
  const pct = (score / total) * 100;
  if (pct >= 90) return 3;
  if (pct >= 70) return 2;
  if (pct >= 50) return 1;
  return 0;
}

/**
 * Computes the user's gamification rewards (XP, stars, rank)
 * from their practice test progress AND chapter quiz results.
 */
export function useUserRewards(): UserRewards {
  const { results, quizResults } = usePracticeProgress();

  return useMemo(() => {
    let xp = 0;
    let stars = 0;

    // Practice test results
    for (const r of results) {
      xp += r.score * XP_PER_CORRECT;
      stars += starsFromScore(r.score, r.total);
    }

    // Chapter quiz results
    for (const q of quizResults) {
      xp += q.score * XP_PER_CORRECT;
      stars += starsFromScore(q.score, q.total);
    }

    return { xp, stars, rank: getRankName(xp) };
  }, [results, quizResults]);
}
