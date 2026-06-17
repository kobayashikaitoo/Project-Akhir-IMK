import { createFileRoute, Link } from "@tanstack/react-router";
import { routeShell } from "@/lib/route-shell";
import { getAllPracticeTests, SUBJECT_LABELS } from "@/data/practice-tests";
import { usePracticeProgress } from "@/hooks/use-practice-progress";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export const Route = createFileRoute("/latihan-soal")({
  staticData: routeShell.app,
  component: LatihanSoalPage,
});

const GRADE_COLORS: Record<number, { bg: string; border: string; accent: string }> = {
  10: {
    bg: "from-[var(--matcha-300)]/20 to-[var(--matcha-400)]/30",
    border: "border-[var(--matcha-700)]",
    accent: "text-[var(--matcha-700)]",
  },
  11: {
    bg: "from-[var(--ube-300)]/20 to-[var(--ube-800)]/10",
    border: "border-[var(--ube-800)]",
    accent: "text-[var(--ube-800)]",
  },
  12: {
    bg: "from-[var(--pomegranate-100)] to-[var(--pomegranate-400)]/10",
    border: "border-[var(--pomegranate-600)]",
    accent: "text-[var(--pomegranate-600)]",
  },
};

function LatihanSoalPage() {
  const tests = getAllPracticeTests();
  const { getStats } = usePracticeProgress();

  return (
    <div className="min-h-screen pt-8 pb-32 px-6 md:px-12 lg:px-16 max-w-6xl mx-auto bg-[var(--warm-cream)]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <MaterialIcon name="edit_note" className="text-3xl text-[var(--clay-black)]" />
        <h1 className="text-3xl font-headline font-bold text-[var(--clay-black)]">Latihan Soal</h1>
      </div>
      <p className="text-sm text-[var(--warm-charcoal)] mb-8 max-w-xl">
        Latihan soal komprehensif yang mencakup semua mata pelajaran per kelas. Uji pemahamanmu dengan 30 soal campuran!
      </p>

      {/* Grade Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tests.map((test) => {
          const stats = getStats(test.grade);
          const colors = GRADE_COLORS[test.grade] ?? GRADE_COLORS[10];
          const subjects = [...new Set(test.questions.map((q) => q.subject))];

          return (
            <Link
              key={test.grade}
              to="/latihan-soal/$grade"
              params={{ grade: String(test.grade) }}
              className={`block p-6 rounded-[var(--radius-xl)] bg-gradient-to-br ${colors.bg} border-2 ${colors.border} clay-shadow clay-hover transition-all`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-headline font-bold text-[var(--clay-black)]">
                  {test.label}
                </h2>
                <span className="px-3 py-1 rounded-full bg-[var(--pure-white)] border border-[var(--oat-border)] text-xs font-headline font-bold text-[var(--clay-black)]">
                  {test.questions.length} Soal
                </span>
              </div>

              {/* Subject chips */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {subjects.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded-full bg-[var(--pure-white)]/80 border border-[var(--oat-border)] text-[10px] font-body font-semibold text-[var(--warm-charcoal)]"
                  >
                    {SUBJECT_LABELS[s] ?? s}
                  </span>
                ))}
              </div>

              {/* Progress */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-body">
                  <span className="text-[var(--warm-charcoal)]">Percobaan</span>
                  <span className={`font-bold ${colors.accent}`}>{stats.completed}x</span>
                </div>
                {stats.completed > 0 && (
                  <>
                    <div className="flex items-center justify-between text-xs font-body">
                      <span className="text-[var(--warm-charcoal)]">Skor Rata-rata</span>
                      <span className={`font-bold ${colors.accent}`}>{stats.avgScore}%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-body">
                      <span className="text-[var(--warm-charcoal)]">Akurasi</span>
                      <span className={`font-bold ${colors.accent}`}>{stats.accuracy}%</span>
                    </div>
                  </>
                )}
              </div>

              {/* CTA */}
              <div className="mt-5 flex items-center justify-between text-xs font-headline font-bold text-[var(--clay-black)]">
                <span>{stats.completed > 0 ? "Ulangi Latihan" : "Mulai Latihan"}</span>
                <MaterialIcon name="arrow_forward" className="text-base" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick link to analytics */}
      <div className="mt-8 text-center">
        <Link
          to="/latihan-soal/analytics"
          className="inline-flex items-center gap-2 text-sm font-headline font-semibold text-[var(--matcha-700)] hover:text-[var(--matcha-800)] transition-colors"
        >
          <MaterialIcon name="analytics" className="text-lg" />
          Lihat Analisis Lengkap
        </Link>
      </div>
    </div>
  );
}
