/**
 * Shuffle quiz question options so the correct answer appears
 * at a random position. Returns new question objects with
 * remapped correctKey.
 */

export interface ShufflableQuestion {
  id: string;
  question: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
}

const KEYS = ["A", "B", "C", "D", "E"];

/** Fisher-Yates shuffle */
function shuffleArray<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function shuffleQuestionOptions<Q extends ShufflableQuestion>(
  questions: Q[],
): Q[] {
  return questions.map((q) => {
    // Find the text of the correct answer
    const correctOption = q.options.find((o) => o.key === q.correctKey);
    if (!correctOption) return q;

    // Shuffle all options
    const shuffled = shuffleArray(q.options);

    // Assign new keys and find the new position of the correct answer
    const newOptions = shuffled.map((opt, i) => ({
      key: KEYS[i] ?? opt.key,
      text: opt.text,
    }));

    const newCorrectKey = newOptions.find((o) => o.text === correctOption.text)?.key ?? q.correctKey;

    return { ...q, options: newOptions, correctKey: newCorrectKey };
  });
}
