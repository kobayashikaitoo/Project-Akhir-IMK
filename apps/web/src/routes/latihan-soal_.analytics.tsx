import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { routeShell } from "@/lib/route-shell";
import { usePracticeProgress } from "@/hooks/use-practice-progress";
import type { PracticeResult } from "@/hooks/use-practice-progress";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export const Route = createFileRoute("/latihan-soal_/analytics")({
  staticData: routeShell.app,
  component: AnalyticsPage,
});

const GRADES = [
  { value: 10, label: "Kelas X" },
  { value: 11, label: "Kelas XI" },
  { value: 12, label: "Kelas XII" },
];

function AnalyticsPage() {
  const [selectedGrade, setSelectedGrade] = useState(10);
  const { getStats, getResults } = usePracticeProgress();
  const stats = getStats(selectedGrade);
  const results = getResults(selectedGrade);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    if (h > 0) return `${h}j ${m}m`;
    return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  };

  // Build trend data (last 30 days)
  const trendData = useMemo(() => {
    const now = new Date();
    const days: { date: string; score: number | null }[] = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      const dayResults = results.filter((r) => r.completedAt.slice(0, 10) === dateStr);
      const avgScore =
        dayResults.length > 0
          ? Math.round(
              (dayResults.reduce((s, r) => s + r.score, 0) /
                dayResults.reduce((s, r) => s + r.total, 0)) *
                100,
            )
          : null;
      const label = `${d.getDate()}/${d.getMonth() + 1}`;
      days.push({ date: label, score: avgScore });
    }
    return days;
  }, [results]);

  // Chart points
  const chartPoints = useMemo(() => {
    const width = 600;
    const height = 200;
    const paddingX = 40;
    const paddingY = 20;
    const chartW = width - paddingX * 2;
    const chartH = height - paddingY * 2;

    const points: { x: number; y: number; label: string; value: number | null }[] = [];
    trendData.forEach((d, i) => {
      const x = paddingX + (i / (trendData.length - 1)) * chartW;
      const y =
        d.score !== null
          ? paddingY + chartH - (d.score / 100) * chartH
          : paddingY + chartH;
      points.push({ x, y, label: d.date, value: d.score });
    });
    return points;
  }, [trendData]);

  const linePath = chartPoints
    .filter((p) => p.value !== null)
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <div className="min-h-screen pt-8 pb-32 px-6 md:px-12 lg:px-16 max-w-6xl mx-auto bg-[var(--warm-cream)]">
      {/* Header */}
      <div className="flex items-center gap-2 text-xs text-[var(--warm-charcoal)] mb-2">
        <Link to="/latihan-soal" className="hover:text-[var(--clay-black)] transition-colors">
          Latihan Soal
        </Link>
        <MaterialIcon name="chevron_right" className="text-[10px]" />
        <span className="text-[var(--clay-black)] font-medium">Analytics</span>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <MaterialIcon name="analytics" className="text-3xl text-[var(--clay-black)]" />
        <h1 className="text-3xl font-headline font-bold text-[var(--clay-black)]">Analitik</h1>
      </div>
      <p className="text-sm text-[var(--warm-charcoal)] mb-6">
        Pantau perkembangan dan identifikasi area untuk ditingkatkan.
      </p>

      {/* Grade Tabs */}
      <div className="flex gap-2 mb-8">
        {GRADES.map((g) => (
          <button
            key={g.value}
            onClick={() => setSelectedGrade(g.value)}
            className={`px-5 py-2.5 rounded-[var(--radius-lg)] text-sm font-headline font-bold transition-all border-2 ${
              selectedGrade === g.value
                ? "bg-[var(--matcha-300)] text-[var(--matcha-800)] border-[var(--matcha-600)] clay-shadow"
                : "bg-[var(--pure-white)] text-[var(--warm-charcoal)] border-[var(--oat-border)] hover:border-[var(--matcha-300)]"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* RINGKASAN */}
      <section className="mb-10">
        <h2 className="text-xs font-headline font-bold text-[var(--warm-charcoal)]/60 uppercase tracking-widest mb-4">
          Ringkasan
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard
            icon="school"
            color="text-[var(--matcha-600)]"
            bgColor="bg-[var(--matcha-300)]/15"
            label="Total Latihan"
            value={String(stats.totalExercises)}
          />
          <StatCard
            icon="check_circle"
            color="text-[var(--matcha-600)]"
            bgColor="bg-[var(--matcha-300)]/15"
            label="Selesai"
            value={String(stats.completed)}
          />
          <StatCard
            icon="trending_up"
            color="text-[var(--lemon-700)]"
            bgColor="bg-[var(--lemon-400)]/15"
            label="Rata-rata Skor"
            value={`${stats.avgScore}%`}
          />
          <StatCard
            icon="target"
            color="text-[var(--ube-800)]"
            bgColor="bg-[var(--ube-300)]/15"
            label="Akurasi"
            value={`${stats.accuracy}%`}
          />
          <StatCard
            icon="timer"
            color="text-[var(--slushie-800)]"
            bgColor="bg-[var(--slushie-500)]/15"
            label="Waktu Total"
            value={formatTime(stats.totalTime)}
          />
          <StatCard
            icon="help"
            color="text-[var(--pomegranate-600)]"
            bgColor="bg-[var(--pomegranate-100)]"
            label="Soal Dijawab"
            value={String(stats.totalQuestions)}
          />
        </div>
      </section>

      {/* TREN SKOR */}
      <section>
        <h2 className="text-xs font-headline font-bold text-[var(--warm-charcoal)]/60 uppercase tracking-widest mb-4">
          Tren Skor
        </h2>
        <div className="bg-[var(--pure-white)] border-2 border-[var(--oat-border)] rounded-[var(--radius-xl)] p-6 clay-shadow">
          <h3 className="text-sm font-headline font-bold text-[var(--clay-black)] mb-4">
            Tren Skor (30 Hari)
          </h3>
          {stats.completed === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 text-center">
              <MaterialIcon name="insights" className="text-4xl text-[var(--warm-silver)] mb-2" />
              <p className="text-sm text-[var(--warm-charcoal)]">
                Belum ada data. Mulai latihan untuk melihat tren skormu!
              </p>
            </div>
          ) : (
            <svg viewBox="0 0 600 220" className="w-full h-auto" aria-label="Score trend chart">
              {/* Y-axis labels */}
              {[0, 25, 50, 75, 100].map((v) => {
                const y = 20 + (200 - 40) - (v / 100) * (200 - 40);
                return (
                  <g key={v}>
                    <text x={30} y={y + 4} textAnchor="end" className="text-[10px] fill-[var(--warm-charcoal)]/50" fontFamily="system-ui">
                      {v}%
                    </text>
                    <line
                      x1={40}
                      x2={560}
                      y1={y}
                      y2={y}
                      stroke="var(--oat-border)"
                      strokeWidth={1}
                      strokeDasharray="4 4"
                    />
                  </g>
                );
              })}
              {/* X-axis labels */}
              {chartPoints.filter((_, i) => i % 5 === 0 || i === chartPoints.length - 1).map((p) => (
                <text
                  key={p.label}
                  x={p.x}
                  y={210}
                  textAnchor="middle"
                  className="text-[9px] fill-[var(--warm-charcoal)]/50"
                  fontFamily="system-ui"
                >
                  {p.label}
                </text>
              ))}
              {/* Line */}
              {linePath && (
                <path
                  d={linePath}
                  fill="none"
                  stroke="var(--matcha-600)"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
              {/* Dots */}
              {chartPoints
                .filter((p) => p.value !== null)
                .map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={4}
                    fill="var(--matcha-600)"
                    stroke="var(--pure-white)"
                    strokeWidth={2}
                  />
                ))}
            </svg>
          )}
        </div>
      </section>
    </div>
  );
}

/* ── Stat Card ── */

function StatCard({
  icon,
  color,
  bgColor,
  label,
  value,
}: {
  icon: string;
  color: string;
  bgColor: string;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-[var(--pure-white)] border-2 border-[var(--oat-border)] rounded-[var(--radius-xl)] p-4 clay-shadow flex flex-col items-center text-center">
      <div className={`h-10 w-10 rounded-full ${bgColor} flex items-center justify-center mb-2`}>
        <MaterialIcon name={icon} className={`text-lg ${color}`} />
      </div>
      <span className="text-2xl font-headline font-extrabold text-[var(--clay-black)]">{value}</span>
      <span className="text-[10px] font-body font-semibold text-[var(--warm-charcoal)] uppercase tracking-wider mt-1">
        {label}
      </span>
    </div>
  );
}
