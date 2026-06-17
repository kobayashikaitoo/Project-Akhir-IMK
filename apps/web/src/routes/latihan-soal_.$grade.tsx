import { useState, useMemo, useEffect, useRef } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { routeShell } from "@/lib/route-shell";
import { getPracticeTest, SUBJECT_LABELS } from "@/data/practice-tests";
import type { PracticeQuestion } from "@/data/practice-tests";
import { usePracticeProgress } from "@/hooks/use-practice-progress";
import { shuffleQuestionOptions } from "@/lib/quiz-utils";
import { Button } from "@labas/ui/components/button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export const Route = createFileRoute("/latihan-soal_/$grade")({
  staticData: routeShell.fullscreen,
  component: PracticeTestPage,
});

function PracticeTestPage() {
  const { grade: gradeStr } = Route.useParams();
  const grade = Number(gradeStr);
  const test = getPracticeTest(grade);
  const navigate = useNavigate();
  const { saveResult } = usePracticeProgress();

  if (!test || ![10, 11, 12].includes(grade)) {
    return (
      <div className="min-h-screen pt-8 pb-32 px-6 md:px-12 lg:px-16 max-w-4xl mx-auto bg-[var(--warm-cream)]">
        <h1 className="text-3xl font-headline font-bold text-[var(--clay-black)] mb-4">
          Latihan Tidak Ditemukan
        </h1>
        <Link to="/latihan-soal" className="text-[var(--matcha-600)] font-semibold hover:underline">
          Kembali ke Daftar Latihan
        </Link>
      </div>
    );
  }

  return <PracticeQuiz test={test} grade={grade} saveResult={saveResult} navigate={navigate} />;
}

function PracticeQuiz({
  test,
  grade,
  saveResult,
  navigate,
}: {
  test: NonNullable<ReturnType<typeof getPracticeTest>>;
  grade: number;
  saveResult: (grade: number, score: number, total: number, timeSpent: number) => void;
  navigate: ReturnType<typeof useNavigate>;
}) {
  const questions = test.questions;
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const startTime = useRef(Date.now());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const shuffledQuestions = useMemo(
    () => shuffleQuestionOptions(questions),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [questions, shuffleSeed],
  );

  // Prevent leaving quiz before submitting
  useEffect(() => {
    if (submitted) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [submitted]);

  // Timer
  useEffect(() => {
    startTime.current = Date.now();
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime.current) / 1000));
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const score = useMemo(() => {
    if (!submitted) return 0;
    return shuffledQuestions.filter((q) => answers[q.id] === q.correctKey).length;
  }, [submitted, answers, shuffledQuestions]);

  const handleSelect = (questionId: string, key: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: key }));
  };

  const allAnswered = shuffledQuestions.every((q) => answers[q.id]);
  const percentage = shuffledQuestions.length > 0 ? Math.round((score / shuffledQuestions.length) * 100) : 0;

  const handleSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);
    setElapsed(timeSpent);
    setSubmitted(true);
    const correctCount = shuffledQuestions.filter((q) => answers[q.id] === q.correctKey).length;
    saveResult(grade, correctCount, shuffledQuestions.length, timeSpent);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setElapsed(0);
    setShuffleSeed((s) => s + 1);
    startTime.current = Date.now();
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime.current) / 1000));
    }, 1000);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const gradeLabel = grade === 10 ? "X" : grade === 11 ? "XI" : "XII";

  return (
    <div className="min-h-screen pb-32 bg-[var(--warm-cream)]">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-[var(--warm-cream)]/95 backdrop-blur-sm border-b border-[var(--oat-border)] shadow-sm">
        <div className="px-6 md:px-12 lg:px-16 max-w-4xl mx-auto pt-4 pb-4">
          <div className="flex items-center gap-2 text-xs text-[var(--warm-charcoal)] mb-2">
            {submitted && (
              <>
                <Link to="/latihan-soal" className="hover:text-[var(--clay-black)] transition-colors">
                  Latihan Soal
                </Link>
                <MaterialIcon name="chevron_right" className="text-[10px]" />
              </>
            )}
            <span className="text-[var(--clay-black)] font-medium">Kelas {gradeLabel}</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-headline font-bold text-[var(--clay-black)]">
                Latihan Soal — Kelas {gradeLabel}
              </h1>
              <p className="text-xs text-[var(--warm-charcoal)] mt-0.5">
                {shuffledQuestions.length} soal &middot; 5 Mata Pelajaran
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--pure-white)] border border-[var(--oat-border)] text-xs font-headline font-bold text-[var(--clay-black)]">
                <MaterialIcon name="timer" className="text-xs" />
                {formatTime(elapsed)}
              </span>
              {!submitted && (
                <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--matcha-300)] text-[var(--matcha-800)] text-xs font-headline font-bold">
                  {Object.keys(answers).length}/{shuffledQuestions.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="px-6 md:px-12 lg:px-16 max-w-4xl mx-auto pt-8 space-y-4">
        {shuffledQuestions.map((q, idx) => {
          const userAnswer = answers[q.id];
          const isCorrect = submitted && userAnswer === q.correctKey;
          const isWrong = submitted && userAnswer && userAnswer !== q.correctKey;

          return (
            <div
              key={q.id}
              className={`p-5 rounded-[var(--radius-xl)] border-2 bg-[var(--pure-white)] transition-all ${
                isCorrect
                  ? "border-[var(--matcha-300)] bg-[var(--matcha-300)]/5"
                  : isWrong
                    ? "border-[var(--pomegranate-400)] bg-[var(--pomegranate-400)]/5"
                    : "border-[var(--oat-border)]"
              }`}
            >
              {/* Question header */}
              <div className="flex items-start gap-2 mb-3">
                <span className="shrink-0 h-6 w-6 rounded-full bg-[var(--lemon-400)]/30 border border-[var(--lemon-700)] flex items-center justify-center text-xs font-bold text-[var(--clay-black)]">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <span className="inline-block px-2 py-0.5 mb-1.5 rounded-full bg-[var(--oat-light)] border border-[var(--oat-border)] text-[9px] font-bold font-headline uppercase tracking-wider text-[var(--warm-charcoal)]">
                    {SUBJECT_LABELS[q.subject] ?? q.subject}
                  </span>
                  <p className="text-sm font-body font-semibold text-[var(--clay-black)] leading-relaxed">
                    {q.question}
                  </p>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2 ml-8">
                {q.options.map((opt) => {
                  const isSelected = userAnswer === opt.key;
                  const isCorrectOption = submitted && opt.key === q.correctKey;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => handleSelect(q.id, opt.key)}
                      disabled={submitted}
                      className={`w-full text-left px-4 py-2.5 rounded-[var(--radius-lg)] border-2 text-sm font-body transition-all flex items-center gap-3 ${
                        isCorrectOption
                          ? "border-[var(--matcha-600)] bg-[var(--matcha-300)]/20 text-[var(--matcha-800)] font-semibold"
                          : isSelected && !submitted
                            ? "border-[var(--clay-black)] bg-[var(--oat-light)]"
                            : isWrong && isSelected
                              ? "border-[var(--pomegranate-400)] bg-[var(--pomegranate-400)]/10"
                              : "border-[var(--oat-border)] hover:border-[var(--warm-charcoal)]/30 hover:bg-[var(--oat-light)]"
                      } ${submitted ? "cursor-default" : "cursor-pointer"}`}
                    >
                      <span
                        className={`shrink-0 h-5 w-5 rounded-full border-2 flex items-center justify-center text-[10px] font-bold ${
                          isCorrectOption
                            ? "border-[var(--matcha-600)] bg-[var(--matcha-300)]"
                            : isSelected
                              ? "border-[var(--clay-black)] bg-[var(--clay-black)] text-white"
                              : "border-[var(--warm-charcoal)]/30"
                        }`}
                      >
                        {opt.key}
                      </span>
                      {opt.text}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {submitted && (
                <div
                  className={`mt-3 ml-8 p-3 rounded-[var(--radius-lg)] text-xs font-body ${
                    isCorrect
                      ? "bg-[var(--matcha-300)]/15 text-[var(--matcha-800)]"
                      : "bg-[var(--pomegranate-400)]/10 text-[var(--clay-black)]"
                  }`}
                >
                  <span className="font-bold">{isCorrect ? "Benar!" : "Pembahasan:"}</span>{" "}
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}

        {/* Submit / Result */}
        {!submitted ? (
          <Button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="w-full bg-[var(--clay-black)] text-[var(--pure-white)] hover:bg-[var(--warm-charcoal)] rounded-[var(--radius-lg)] h-12 border-2 border-[var(--clay-black)] clay-shadow text-base font-headline font-bold"
          >
            <MaterialIcon name="check_circle" className="text-xl" />
            <span className="ml-2">Periksa Jawaban ({Object.keys(answers).length}/{shuffledQuestions.length})</span>
          </Button>
        ) : (
          <div className="p-6 rounded-[var(--radius-xl)] bg-[var(--pure-white)] border-2 border-[var(--oat-border)] clay-shadow text-center space-y-4">
            <div
              className={`text-5xl font-headline font-extrabold ${
                percentage >= 70 ? "text-[var(--matcha-600)]" : "text-[var(--pomegranate-400)]"
              }`}
            >
              {percentage}%
            </div>
            <div>
              <p className="text-sm text-[var(--warm-charcoal)] font-body">
                Skor kamu: <strong>{score}</strong> dari <strong>{questions.length}</strong> benar
              </p>
              <p className="text-xs text-[var(--warm-charcoal)] font-body mt-1">
                Waktu pengerjaan: <strong>{formatTime(elapsed)}</strong>
              </p>
            </div>
            <p className="text-xs text-[var(--warm-charcoal)] font-body">
              {percentage >= 70
                ? "Bagus! Kamu menguasai materi kelas ini dengan baik."
                : "Jangan menyerah! Pelajari kembali materinya dan coba lagi."}
            </p>
            <div className="flex gap-3 justify-center">
              <Button
                onClick={handleReset}
                variant="outline"
                className="rounded-[var(--radius-lg)] border-2 border-[var(--clay-black)] clay-hover font-headline font-bold"
              >
                <MaterialIcon name="refresh" className="text-base" />
                <span className="ml-2">Coba Lagi</span>
              </Button>
              <Button
                onClick={() => navigate({ to: "/latihan-soal/analytics" })}
                className="rounded-[var(--radius-lg)] bg-[var(--matcha-600)] text-white hover:bg-[var(--matcha-700)] font-headline font-bold"
              >
                <MaterialIcon name="analytics" className="text-base" />
                <span className="ml-2">Lihat Analisis</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
