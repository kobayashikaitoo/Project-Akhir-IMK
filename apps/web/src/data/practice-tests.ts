import { practiceGrade10 } from "./practice-10";
import { practiceGrade11 } from "./practice-11";
import { practiceGrade12 } from "./practice-12";

export interface PracticeQuestion {
  id: string;
  subject: string;
  question: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
}

export interface PracticeTest {
  grade: 10 | 11 | 12;
  label: string;
  questions: PracticeQuestion[];
}

const tests: Record<number, PracticeTest> = {
  10: { grade: 10, label: "Kelas X", questions: practiceGrade10 },
  11: { grade: 11, label: "Kelas XI", questions: practiceGrade11 },
  12: { grade: 12, label: "Kelas XII", questions: practiceGrade12 },
};

export function getPracticeTest(grade: number): PracticeTest | undefined {
  return tests[grade];
}

export function getAllPracticeTests(): PracticeTest[] {
  return Object.values(tests);
}

export const SUBJECT_LABELS: Record<string, string> = {
  matematika: "Matematika",
  fisika: "Fisika",
  kimia: "Kimia",
  biologi: "Biologi",
  "bahasa-inggris": "B. Inggris",
};
