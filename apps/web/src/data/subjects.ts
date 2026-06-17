export interface SubjectInfo {
  id: string;
  name: string;
  icon: string;
  color: string;
  borderColor: string;
  description: string;
  available: boolean;
  grades: { grade: 10 | 11 | 12; label: string; chapterIds: string[] }[];
}

export const subjects: SubjectInfo[] = [
  {
    id: "matematika",
    name: "Matematika",
    icon: "calculate",
    color: "from-[var(--lemon-400)]/20 to-[var(--lemon-500)]/30",
    borderColor: "border-[var(--lemon-700)]",
    description: "Kalkulus, Trigonometri, & Aljabar",
    available: true,
    grades: [
      {
        grade: 10,
        label: "Kelas X",
        chapterIds: [
          "mat-01", "mat-02", "mat-03", "mat-04",
          "mat-05", "mat-06", "mat-07", "mat-08",
        ],
      },
      {
        grade: 11,
        label: "Kelas XI",
        chapterIds: [
          "mat-09", "mat-10", "mat-11", "mat-12",
          "mat-13", "mat-14", "mat-15", "mat-16",
        ],
      },
      {
        grade: 12,
        label: "Kelas XII",
        chapterIds: [
          "mat-17", "mat-18", "mat-19", "mat-20",
          "mat-21", "mat-22",
        ],
      },
    ],
  },
  {
    id: "fisika",
    name: "Fisika",
    icon: "insights",
    color: "from-[var(--matcha-300)]/20 to-[var(--matcha-400)]/30",
    borderColor: "border-[var(--matcha-700)]",
    description: "Kinematika & Termodinamika",
    available: true,
    grades: [
      {
        grade: 10,
        label: "Kelas X",
        chapterIds: ["fis-01", "fis-02", "fis-03"],
      },
      {
        grade: 11,
        label: "Kelas XI",
        chapterIds: ["fis-04", "fis-05", "fis-06", "fis-07", "fis-08", "fis-09", "fis-10", "fis-11", "fis-12"],
      },
      {
        grade: 12,
        label: "Kelas XII",
        chapterIds: ["fis-13", "fis-14", "fis-15", "fis-16", "fis-17", "fis-18", "fis-19"],
      },
    ],
  },
  {
    id: "kimia",
    name: "Kimia",
    icon: "science",
    color: "from-[var(--ube-300)]/20 to-[var(--ube-800)]/10",
    borderColor: "border-[var(--ube-800)]",
    description: "Stoikiometri & Asam Basa",
    available: true,
    grades: [
      {
        grade: 10,
        label: "Kelas X",
        chapterIds: ["kim-01", "kim-02", "kim-03", "kim-04", "kim-05"],
      },
      {
        grade: 11,
        label: "Kelas XI",
        chapterIds: ["kim-06", "kim-07", "kim-08", "kim-09", "kim-10", "kim-11", "kim-12", "kim-13"],
      },
      {
        grade: 12,
        label: "Kelas XII",
        chapterIds: ["kim-14", "kim-15", "kim-16", "kim-17", "kim-18", "kim-19", "kim-20"],
      },
    ],
  },
  {
    id: "biologi",
    name: "Biologi",
    icon: "spa",
    color: "from-[var(--pomegranate-100)] to-[var(--pomegranate-400)]/10",
    borderColor: "border-[var(--pomegranate-600)]",
    description: "Sel, Metabolisme, & Genetika",
    available: true,
    grades: [
      {
        grade: 10,
        label: "Kelas X",
        chapterIds: ["bio-01", "bio-02", "bio-03", "bio-04", "bio-05", "bio-06"],
      },
      {
        grade: 11,
        label: "Kelas XI",
        chapterIds: ["bio-07", "bio-08", "bio-09", "bio-10", "bio-11", "bio-12", "bio-13", "bio-14", "bio-15", "bio-16"],
      },
      {
        grade: 12,
        label: "Kelas XII",
        chapterIds: ["bio-17", "bio-18", "bio-19", "bio-20", "bio-21", "bio-22", "bio-23", "bio-24"],
      },
    ],
  },
  {
    id: "bahasa-inggris",
    name: "Bahasa Inggris",
    icon: "translate",
    color: "from-[var(--slushie-500)]/10 to-[var(--slushie-500)]/20",
    borderColor: "border-[var(--slushie-800)]",
    description: "Reading & Exposition Texts",
    available: true,
    grades: [
      {
        grade: 10,
        label: "Kelas X",
        chapterIds: ["bing-01", "bing-02", "bing-03", "bing-04", "bing-05"],
      },
      {
        grade: 11,
        label: "Kelas XI",
        chapterIds: ["bing-06", "bing-07", "bing-08", "bing-09", "bing-10"],
      },
      {
        grade: 12,
        label: "Kelas XII",
        chapterIds: ["bing-11", "bing-12", "bing-13", "bing-14"],
      },
    ],
  },
];

export function getSubject(id: string) {
  return subjects.find((s) => s.id === id);
}
