import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { trpc } from "@/utils/trpc";
import { Input } from "@labas/ui/components/input";
import { Button } from "@labas/ui/components/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@labas/ui/components/select";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { toast } from "sonner";
import { getErrorMessage } from "@/lib/error-utils";
import { useDebouncedValue } from "@/hooks/use-debounced-value";
import { formatLabel } from "@/lib/format";
import { QuestionDetailModal } from "@/components/bank/QuestionDetailModal";
import { DataTable } from "@/components/admin/DataTable";
import { EXAM_TYPES } from "@/lib/exam-constants";
import type { ColumnDef } from "@/components/admin/DataTable";

export const Route = createFileRoute("/admin/moderation")({
  component: AdminModeration,
});

type QuestionRow = {
  id: string;
  questionText: string;
  passageText: string | null;
  options?: unknown;
  correctAnswer: string;
  explanation: string | null;
  format: string;
  examTypeId: string;
  difficulty: number;
  skillTags: string[] | null;
  source: string | null;
  aiModel: string | null;
  creatorUserId: string;
  isPublic: boolean;
  createdAt: string | Date;
};

function formatDate(dateStr: string | Date | null) {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function AdminModeration() {
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 30;
  const [search, debouncedSearch, setSearch] = useDebouncedValue("", 300);
  const [examFilter, setExamFilter] = useState("");
  const [visFilter, setVisFilter] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [detailQuestion, setDetailQuestion] = useState<QuestionRow | null>(null);
  const queryClient = useQueryClient();

  const questions = useQuery(
    trpc.admin.listLatestQuestions.queryOptions({
      limit: PAGE_SIZE,
      offset: (page - 1) * PAGE_SIZE,
      search: debouncedSearch || undefined,
      examTypeId: examFilter || undefined,
      isPublic: visFilter === "" ? undefined : visFilter === "public",
    }),
  );

  const questionData = questions.data?.questions ?? [];
  const total = questions.data?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const toggleMutation = useMutation(
    trpc.admin.togglePublicAny.mutationOptions({
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: trpc.admin.listLatestQuestions.queryKey() });
        setSelectedIds(new Set());
        toast.success(data.isPublic ? "Made public" : "Made private");
      },
      onError: (e: unknown) => toast.error(getErrorMessage(e)),
    }),
  );

  const bulkMutation = useMutation(
    trpc.admin.bulkTogglePublic.mutationOptions({
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: trpc.admin.listLatestQuestions.queryKey() });
        setSelectedIds(new Set());
        toast.success(`Updated ${data.updated} questions`);
      },
      onError: (e: unknown) => toast.error(getErrorMessage(e)),
    }),
  );

  function handleFilterChange() {
    setPage(1);
    setSelectedIds(new Set());
  }

  function toggleQuestionVisibility(q: QuestionRow) {
    toggleMutation.mutate({ questionId: q.id });
  }

  const columns: ColumnDef<QuestionRow>[] = [
    {
      id: "question",
      header: "Question",
      size: "w-[30%]",
      cell: ({ row }) => (
        <div className="max-w-xs">
          <p className="font-medium text-[var(--clay-black)] truncate">{row.questionText}</p>
          {row.passageText && (
            <p className="text-xs text-[var(--warm-charcoal)] truncate mt-0.5">
              {row.passageText.slice(0, 80)}{row.passageText.length > 80 ? "..." : ""}
            </p>
          )}
        </div>
      ),
    },
    {
      id: "exam", header: "Exam",
      cell: ({ row }) => <span className="text-xs">{row.examTypeId}</span>,
    },
    {
      id: "format", header: "Format",
      cell: ({ row }) => <span className="text-xs">{formatLabel(row.format)}</span>,
    },
    {
      id: "difficulty", header: "Level",
      cell: ({ row }) => <span className="text-xs">{row.difficulty}</span>,
    },
    {
      id: "visibility",
      header: "Visibility",
      cell: ({ row }) => (
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
          row.isPublic ? "bg-[var(--matcha-300)] text-[var(--matcha-800)]" : "bg-[var(--oat-border)] text-[var(--warm-charcoal)]"
        }`}>{row.isPublic ? "Public" : "Private"}</span>
      ),
    },
    {
      id: "source", header: "Source",
      cell: ({ row }) => <span className="text-xs">{row.source ?? "-"}</span>,
    },
    {
      id: "created",
      header: "Created",
      accessorFn: (q) => <span className="text-xs text-[var(--warm-charcoal)]">{formatDate(q.createdAt)}</span>,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-headline font-bold text-[var(--clay-black)]">Content Moderation</h1>
      </div>
      <p className="text-[var(--warm-charcoal)] mb-6">Review questions and manage visibility.</p>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <MaterialIcon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--warm-charcoal)] text-sm" />
          <Input
            placeholder="Search questions..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); handleFilterChange(); }}
            aria-label="Cari soal"
            className="pl-8 rounded-[var(--radius-lg)] border-2 border-[var(--oat-border)] bg-[var(--pure-white)] h-10 text-sm"
          />
        </div>
        <Select
          value={examFilter}
          onValueChange={(v: string | null) => { setExamFilter(v ?? ""); handleFilterChange(); }}
        >
          <SelectTrigger className="w-[160px] h-10 rounded-[var(--radius-lg)] border-2 border-[var(--oat-border)] bg-[var(--pure-white)] text-sm cursor-pointer" aria-label="Filter by exam type">
            <SelectValue placeholder="All Exams" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="">All Exams</SelectItem>
              {EXAM_TYPES.map((et) => (
                <SelectItem key={et.id} value={et.id}>{et.name}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          value={visFilter}
          onValueChange={(v: string | null) => { setVisFilter(v ?? ""); handleFilterChange(); }}
        >
          <SelectTrigger className="w-[150px] h-10 rounded-[var(--radius-lg)] border-2 border-[var(--oat-border)] bg-[var(--pure-white)] text-sm cursor-pointer" aria-label="Filter by visibility">
            <SelectValue placeholder="All Visibility" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="">All Visibility</SelectItem>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="private">Private</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <span className="text-sm text-[var(--warm-charcoal)]">{total.toLocaleString()} questions</span>
      </div>

      {/* Bulk action bar */}
      {selectedIds.size > 0 && (
        <div className="flex items-center gap-3 mb-4 px-4 py-3 bg-[var(--matcha-300)]/15 border border-[var(--matcha-500)] rounded-[var(--radius-lg)]">
          <span className="text-sm font-medium text-[var(--matcha-800)]">
            {selectedIds.size} question{selectedIds.size > 1 ? "s" : ""} selected
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <Button
              size="sm"
              className="h-8 rounded-[var(--radius-lg)] text-xs"
              onClick={() => bulkMutation.mutate({ questionIds: Array.from(selectedIds), isPublic: true })}
              disabled={bulkMutation.isPending}
            >
              Make Public
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 rounded-[var(--radius-lg)] text-xs"
              onClick={() => bulkMutation.mutate({ questionIds: Array.from(selectedIds), isPublic: false })}
              disabled={bulkMutation.isPending}
            >
              Make Private
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 rounded-[var(--radius-lg)] text-xs text-[var(--warm-charcoal)]"
              onClick={() => setSelectedIds(new Set())}
            >
              Clear
            </Button>
          </div>
        </div>
      )}

      <DataTable
        data={questionData}
        columns={columns}
        isLoading={questions.isLoading}
        isFetching={questions.isFetching}
        emptyMessage="No questions found."
        keyExtractor={(q) => q.id}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        selectable
        selectedIds={selectedIds}
        onSelectionChange={setSelectedIds}
        onRowClick={(q) => setDetailQuestion(q)}
        actions={(q) => (
          <Button
            variant="outline"
            className="h-9 rounded-[var(--radius-lg)] text-xs"
            onClick={(e) => { e.stopPropagation(); toggleQuestionVisibility(q); }}
            disabled={toggleMutation.isPending}
          >
            {q.isPublic ? "Make Private" : "Make Public"}
          </Button>
        )}
      />

      {detailQuestion && (
        <QuestionDetailModal
          question={detailQuestion}
          onClose={() => setDetailQuestion(null)}
          isAdmin
          isPublic={detailQuestion.isPublic}
          onToggleVisibility={() => toggleQuestionVisibility(detailQuestion)}
        />
      )}
    </div>
  );
}
