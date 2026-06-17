import type { Chapter } from "./types";
import { matematikaChapters, getChapter as getMatChapter } from "./matematika";
import { fisikaChapters, getFisikaChapter } from "./fisika";
import { kimiaChapters, getKimiaChapter } from "./kimia";
import { biologiChapters, getBiologiChapter } from "./biologi";
import { bingChapters, getBingChapter } from "./bahasa-inggris";

export interface SubjectData {
  chapters: Chapter[];
  getChapter: (id: string) => Chapter | undefined;
}

const registry: Record<string, SubjectData> = {
  matematika: {
    chapters: matematikaChapters,
    getChapter: getMatChapter,
  },
  fisika: {
    chapters: fisikaChapters,
    getChapter: getFisikaChapter,
  },
  kimia: {
    chapters: kimiaChapters,
    getChapter: getKimiaChapter,
  },
  biologi: {
    chapters: biologiChapters,
    getChapter: getBiologiChapter,
  },
  "bahasa-inggris": {
    chapters: bingChapters,
    getChapter: getBingChapter,
  },
};

export function getSubjectData(subjectId: string): SubjectData | undefined {
  return registry[subjectId];
}

/** Get a chapter from any subject by chapterId */
export function getChapterFromAnySubject(chapterId: string): Chapter | undefined {
  for (const subjectId of Object.keys(registry)) {
    const data = registry[subjectId];
    const chapter = data.getChapter(chapterId);
    if (chapter) return chapter;
  }
  return undefined;
}
