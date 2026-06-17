import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { routeShell } from "@/lib/route-shell";
import { getSubject } from "@/data/subjects";
import { getChapterFromAnySubject } from "@/data/registry";
import { getQuiz } from "@/data/quizzes";
import type { QuizQuestion } from "@/data/quizzes";
import { shuffleQuestionOptions } from "@/lib/quiz-utils";
import { usePracticeProgress } from "@/hooks/use-practice-progress";
import { Button } from "@labas/ui/components/button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export const Route = createFileRoute("/subject/$subjectId_/$chapterId")({
  staticData: routeShell.app,
  component: ChapterPage,
});

function ChapterPage() {
  const { subjectId, chapterId } = Route.useParams();
  const subject = getSubject(subjectId);
  const chapter = getChapterFromAnySubject(chapterId);
  const quiz = getQuiz(chapterId);

  if (!subject || !chapter) {
    return (
      <div className="min-h-screen pt-8 pb-32 px-6 md:px-12 lg:px-16 max-w-4xl mx-auto bg-[var(--warm-cream)]">
        <h1 className="text-3xl font-headline font-bold text-[var(--clay-black)] mb-4">
          Bab Tidak Ditemukan
        </h1>
        <Link to="/dashboard" className="text-[var(--matcha-600)] font-semibold hover:underline">
          Kembali ke Dashboard
        </Link>
      </div>
    );
  }

  const gradeLabel = `Kelas ${chapter.grade === 10 ? "X" : chapter.grade === 11 ? "XI" : "XII"}`;

  return (
    <div className="min-h-screen pb-32 bg-[var(--warm-cream)]">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-[var(--warm-cream)]/95 backdrop-blur-sm border-b border-[var(--oat-border)] shadow-sm">
        <div className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto pt-4 pb-4">
          <div className="flex items-center gap-2 text-xs text-[var(--warm-charcoal)] mb-2">
            <Link to="/dashboard" className="hover:text-[var(--clay-black)] transition-colors">Beranda</Link>
            <MaterialIcon name="chevron_right" className="text-[10px]" />
            <Link
              to="/subject/$subjectId"
              params={{ subjectId }}
              className="hover:text-[var(--clay-black)] transition-colors"
            >
              {subject.name}
            </Link>
            <MaterialIcon name="chevron_right" className="text-[10px]" />
            <span className="text-[var(--clay-black)] font-medium truncate max-w-[240px]">
              {chapter.title}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-headline font-bold text-[var(--clay-black)]">
                Bab {chapter.order}: {chapter.title}
              </h1>
              <p className="text-xs text-[var(--warm-charcoal)] mt-0.5">{gradeLabel} &middot; {subject.name}</p>
            </div>
            {quiz && quiz.questions.length > 0 && (
              <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--matcha-300)] text-[var(--matcha-800)] text-xs font-headline font-bold shrink-0">
                <MaterialIcon name="quiz" className="text-xs" />
                {quiz.questions.length} Quiz Singkat
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Split-Screen Content */}
      <div className="px-6 md:px-12 lg:px-16 max-w-6xl mx-auto pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Learning Material */}
          <div className="min-w-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-4">
                <MaterialIcon name="menu_book" className="text-xl text-[var(--lemon-700)]" />
                <h2 className="text-lg font-headline font-bold text-[var(--clay-black)]">Materi Pembelajaran</h2>
              </div>
              <div
                className="prose prose-sm max-w-none bg-[var(--pure-white)] border-2 border-[var(--oat-border)] rounded-[var(--radius-xl)] p-6 clay-shadow overflow-y-auto max-h-[calc(100vh-220px)] chapter-content"
                dangerouslySetInnerHTML={{ __html: chapter.content }}
              />
            </div>
          </div>

          {/* Right: Quiz Section */}
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-4">
              <MaterialIcon name="quiz" className="text-xl text-[var(--matcha-600)]" />
              <h2 className="text-lg font-headline font-bold text-[var(--clay-black)]">Quiz Singkat</h2>
            </div>
            {quiz && quiz.questions.length > 0 ? (
              <QuizSection questions={quiz.questions} subjectId={subjectId} chapterId={chapterId} />
            ) : (
              <div className="p-8 rounded-[var(--radius-xl)] bg-[var(--pure-white)] border-2 border-dashed border-[var(--oat-border)] text-center">
                <MaterialIcon name="construction" className="text-4xl text-[var(--warm-silver)] mb-3" />
                <p className="text-sm text-[var(--warm-charcoal)]">
                  Quiz singkat untuk bab ini sedang dalam tahap penyusunan.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Quiz Section Component ───────────────────────────── */

function QuizSection({ questions, subjectId, chapterId }: { questions: QuizQuestion[]; subjectId: string; chapterId: string }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const { saveQuizResult } = usePracticeProgress();

  const shuffledQuestions = useMemo(
    () => shuffleQuestionOptions(questions),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [questions, shuffleSeed],
  );

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

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setShuffleSeed((s) => s + 1);
  };

  return (
    <div className="space-y-4">
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
            <div className="flex items-start gap-2 mb-3">
              <span className="shrink-0 h-6 w-6 rounded-full bg-[var(--lemon-400)]/30 border border-[var(--lemon-700)] flex items-center justify-center text-xs font-bold text-[var(--clay-black)]">
                {idx + 1}
              </span>
              <p className="text-sm font-body font-semibold text-[var(--clay-black)] leading-relaxed">
                {q.question}
              </p>
            </div>

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
                    <span className={`shrink-0 h-5 w-5 rounded-full border-2 flex items-center justify-center text-[10px] font-bold ${
                      isCorrectOption
                        ? "border-[var(--matcha-600)] bg-[var(--matcha-300)]"
                        : isSelected
                          ? "border-[var(--clay-black)] bg-[var(--clay-black)] text-white"
                          : "border-[var(--warm-charcoal)]/30"
                    }`}>
                      {opt.key}
                    </span>
                    {opt.text}
                  </button>
                );
              })}
            </div>

            {submitted && (
              <div className={`mt-3 ml-8 p-3 rounded-[var(--radius-lg)] text-xs font-body ${
                isCorrect
                  ? "bg-[var(--matcha-300)]/15 text-[var(--matcha-800)]"
                  : "bg-[var(--pomegranate-400)]/10 text-[var(--clay-black)]"
              }`}>
                <span className="font-bold">{isCorrect ? "Benar!" : "Pembahasan:"}</span> {q.explanation}
              </div>
            )}
          </div>
        );
      })}

      {/* Submit / Result */}
      {!submitted ? (
        <Button
          onClick={() => {
            setSubmitted(true);
            saveQuizResult(subjectId, chapterId, score, shuffledQuestions.length);
          }}
          disabled={!allAnswered}
          className="w-full bg-[var(--clay-black)] text-[var(--pure-white)] hover:bg-[var(--warm-charcoal)] rounded-[var(--radius-lg)] h-12 border-2 border-[var(--clay-black)] clay-shadow text-base font-headline font-bold"
        >
          <MaterialIcon name="check_circle" className="text-xl" />
          <span className="ml-2">Periksa Jawaban ({Object.keys(answers).length}/{shuffledQuestions.length})</span>
        </Button>
      ) : (
        <div className="p-6 rounded-[var(--radius-xl)] bg-[var(--pure-white)] border-2 border-[var(--oat-border)] clay-shadow text-center">
          <div className={`text-5xl font-headline font-extrabold mb-2 ${
            percentage >= 70 ? "text-[var(--matcha-600)]" : "text-[var(--pomegranate-400)]"
          }`}>
            {percentage}%
          </div>
          <p className="text-sm text-[var(--warm-charcoal)] mb-1 font-body">
            Skor kamu: <strong>{score}</strong> dari <strong>{shuffledQuestions.length}</strong> benar
          </p>
          <p className="text-xs text-[var(--warm-charcoal)] mb-4 font-body">
            {percentage >= 70
              ? "Bagus! Kamu menguasai materi ini dengan baik."
              : "Jangan menyerah! Coba baca lagi materinya dan ulangi latihan."}
          </p>
          <Button
            onClick={handleReset}
            variant="outline"
            className="rounded-[var(--radius-lg)] border-2 border-[var(--clay-black)] clay-hover font-headline font-bold"
          >
            <MaterialIcon name="refresh" className="text-base" />
            <span className="ml-2">Coba Lagi</span>
          </Button>
        </div>
      )}
    </div>
  );
}
