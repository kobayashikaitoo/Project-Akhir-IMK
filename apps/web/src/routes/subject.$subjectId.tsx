import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { routeShell } from "@/lib/route-shell";
import { getSubject } from "@/data/subjects";
import { getSubjectData } from "@/data/registry";
import { getQuiz } from "@/data/quizzes";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export const Route = createFileRoute("/subject/$subjectId")({
  staticData: routeShell.app,
  component: SubjectPage,
});

function SubjectPage() {
  const { subjectId } = Route.useParams();
  const subject = getSubject(subjectId);
  const [activeGrade, setActiveGrade] = useState<number>(
    subject?.grades[0]?.grade ?? 10,
  );

  if (!subject) {
    return (
      <div className="min-h-screen pt-8 pb-32 px-6 md:px-12 lg:px-16 max-w-4xl mx-auto bg-[var(--warm-cream)]">
        <h1 className="text-3xl font-headline font-bold text-[var(--clay-black)] mb-4">
          Mata Pelajaran Tidak Ditemukan
        </h1>
        <p className="text-[var(--warm-charcoal)] mb-6">
          Mata pelajaran &quot;{subjectId}&quot; tidak tersedia.
        </p>
        <Link to="/dashboard" className="text-[var(--matcha-600)] font-semibold hover:underline">
          Kembali ke Dashboard
        </Link>
      </div>
    );
  }

  if (!subject.available) {
    return (
      <div className="min-h-screen pt-8 pb-32 px-6 md:px-12 lg:px-16 max-w-4xl mx-auto bg-[var(--warm-cream)]">
        <div className="flex items-center gap-2 text-sm text-[var(--warm-charcoal)] mb-4">
          <Link to="/dashboard" className="hover:text-[var(--clay-black)] transition-colors">Beranda</Link>
          <MaterialIcon name="chevron_right" className="text-xs" />
          <span className="text-[var(--clay-black)] font-medium">{subject.name}</span>
        </div>
        <h1 className="text-3xl font-headline font-bold text-[var(--clay-black)] mb-4">{subject.name}</h1>
        <div className="p-8 rounded-[var(--radius-xl)] bg-[var(--pure-white)] border-2 border-dashed border-[var(--oat-border)] text-center clay-shadow">
          <MaterialIcon name="hourglass_empty" className="text-5xl text-[var(--warm-silver)] mb-4" />
          <h2 className="text-xl font-headline font-bold text-[var(--clay-black)] mb-2">Segera Hadir</h2>
          <p className="text-[var(--warm-charcoal)] max-w-md mx-auto">
            Materi pembelajaran {subject.name} sedang dalam tahap pengembangan. Pantau terus aplikasi ini!
          </p>
        </div>
      </div>
    );
  }

  const activeGradeData = subject.grades.find((g) => g.grade === activeGrade);
  const subjectData = getSubjectData(subjectId);
  const chapters = (activeGradeData?.chapterIds ?? [])
    .map((id) => subjectData?.getChapter(id))
    .filter(Boolean);

  return (
    <div className="min-h-screen pt-8 pb-32 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto bg-[var(--warm-cream)]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[var(--warm-charcoal)] mb-4">
        <Link to="/dashboard" className="hover:text-[var(--clay-black)] transition-colors">Beranda</Link>
        <MaterialIcon name="chevron_right" className="text-xs" />
        <span className="text-[var(--clay-black)] font-medium">{subject.name}</span>
      </div>

      {/* Subject Header */}
      <div className={`p-6 rounded-[var(--radius-xl)] bg-gradient-to-br ${subject.color} border-2 ${subject.borderColor} clay-shadow mb-8`}>
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 bg-[var(--pure-white)] rounded-[var(--radius-lg)] border-2 border-[var(--clay-black)] flex items-center justify-center shrink-0">
            <MaterialIcon name={subject.icon} className="text-3xl text-[var(--clay-black)]" />
          </div>
          <div>
            <h1 className="text-3xl font-headline font-bold text-[var(--clay-black)]">{subject.name}</h1>
            <p className="text-sm text-[var(--warm-charcoal)]">{subject.description}</p>
          </div>
        </div>
      </div>

      {/* Grade Tabs */}
      <div className="flex gap-2 mb-8 border-b-2 border-[var(--oat-border)] pb-1">
        {subject.grades.map((g) => (
          <button
            key={g.grade}
            type="button"
            onClick={() => setActiveGrade(g.grade)}
            className={`px-5 py-2.5 rounded-t-[var(--radius-lg)] font-headline font-bold text-sm transition-all ${
              activeGrade === g.grade
                ? "bg-[var(--lemon-500)] text-[var(--clay-black)] border-2 border-b-0 border-[var(--clay-black)] -mb-[2px]"
                : "text-[var(--warm-charcoal)] hover:bg-[var(--oat-light)] border-2 border-transparent"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* Chapter Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map((chapter) => {
          if (!chapter) return null;
          const quiz = getQuiz(chapter.id);
          const questionCount = quiz?.questions.length ?? 0;
          return (
            <Link
              key={chapter.id}
              to="/subject/$subjectId/$chapterId"
              params={{ subjectId, chapterId: chapter.id }}
              className="block p-5 rounded-[var(--radius-xl)] bg-[var(--pure-white)] border-2 border-[var(--oat-border)] clay-shadow clay-hover transition-all hover:border-[var(--lemon-500)]"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="h-10 w-10 bg-[var(--lemon-400)]/20 rounded-[var(--radius-lg)] border-2 border-[var(--lemon-700)] flex items-center justify-center shrink-0">
                  <span className="font-headline font-bold text-[var(--clay-black)] text-sm">
                    {chapter.order}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-headline font-bold text-[var(--clay-black)] text-base leading-tight">
                    {chapter.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-[var(--warm-charcoal)] font-body mb-4 line-clamp-2">
                {chapter.description}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[var(--oat-border)]">
                <div className="flex items-center gap-3 text-xs text-[var(--warm-charcoal)]">
                  <span className="flex items-center gap-1">
                    <MaterialIcon name="menu_book" className="text-xs" />
                    Materi
                  </span>
                  {questionCount > 0 && (
                    <span className="flex items-center gap-1">
                      <MaterialIcon name="quiz" className="text-xs" />
                      {questionCount} Soal
                    </span>
                  )}
                </div>
                <MaterialIcon name="arrow_forward" className="text-lg text-[var(--clay-black)]" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
