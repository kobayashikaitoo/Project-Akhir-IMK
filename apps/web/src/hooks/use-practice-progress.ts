import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "labas-practice-progress";
const QUIZ_STORAGE_KEY = "labas-quiz-results";

export interface PracticeResult {
  grade: number;
  score: number;
  total: number;
  timeSpent: number; // seconds
  completedAt: string; // ISO date
}

export interface QuizResult {
  subjectId: string;
  chapterId: string;
  score: number;
  total: number;
  completedAt: string; // ISO date
}

export interface GradeStats {
  totalExercises: number;
  completed: number;
  avgScore: number;
  accuracy: number;
  totalTime: number;
  totalQuestions: number;
}

function readStorage(): PracticeResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeStorage(results: PracticeResult[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
}

function readQuizStorage(): QuizResult[] {
  try {
    const raw = localStorage.getItem(QUIZ_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeQuizStorage(results: QuizResult[]) {
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(results));
}

// ── External store for useSyncExternalStore ──

let listeners = new Set<() => void>();
let cachedSnapshot = { practice: readStorage(), quiz: readQuizStorage() };

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return cachedSnapshot;
}

function refreshSnapshot() {
  cachedSnapshot = { practice: readStorage(), quiz: readQuizStorage() };
  listeners.forEach((l) => l());
}

// ── Hook ──

export function usePracticeProgress() {
  const { practice, quiz } = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const saveResult = useCallback(
    (grade: number, score: number, total: number, timeSpent: number) => {
      const current = readStorage();
      // Replace previous result for this grade (keep latest only)
      const filtered = current.filter((r) => r.grade !== grade);
      filtered.push({
        grade,
        score,
        total,
        timeSpent,
        completedAt: new Date().toISOString(),
      });
      writeStorage(filtered);
      refreshSnapshot();
    },
    [],
  );

  const saveQuizResult = useCallback(
    (subjectId: string, chapterId: string, score: number, total: number) => {
      const current = readQuizStorage();
      // Replace previous result for this subject+chapter (keep latest only)
      const filtered = current.filter(
        (r) => !(r.subjectId === subjectId && r.chapterId === chapterId),
      );
      filtered.push({
        subjectId,
        chapterId,
        score,
        total,
        completedAt: new Date().toISOString(),
      });
      writeQuizStorage(filtered);
      refreshSnapshot();
    },
    [],
  );

  const getResults = useCallback(
    (grade: number): PracticeResult[] => {
      return practice.filter((r) => r.grade === grade);
    },
    [practice],
  );

  const getStats = useCallback(
    (grade: number): GradeStats => {
      const gradeResults = practice.filter((r) => r.grade === grade);
      const completed = gradeResults.length;
      const totalQuestions = gradeResults.reduce((s, r) => s + r.total, 0);
      const totalScore = gradeResults.reduce((s, r) => s + r.score, 0);
      const totalTime = gradeResults.reduce((s, r) => s + r.timeSpent, 0);
      const avgScore =
        completed > 0
          ? Math.round((totalScore / totalQuestions) * 100)
          : 0;
      const accuracy = avgScore; // same as avg score percentage

      return {
        totalExercises: 1, // 1 practice test per grade
        completed,
        avgScore,
        accuracy,
        totalTime,
        totalQuestions,
      };
    },
    [practice],
  );

  return { results: practice, quizResults: quiz, saveResult, saveQuizResult, getResults, getStats };
}
