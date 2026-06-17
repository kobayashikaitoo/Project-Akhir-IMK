import type { ChapterQuiz, QuizQuestion } from "./quizzes";

const q = (id: string, question: string, options: [string, string][], correctKey: string, explanation: string): QuizQuestion => ({
  id, question, options: options.map(([key, text]) => ({ key, text })), correctKey, explanation,
});

// ── Bahasa Inggris Kelas X ──────────────────────────────

const bing01: ChapterQuiz = {
  chapterId: "bing-01",
  questions: [
    q("bing01-1", "What is the purpose of a descriptive text?",
      [["A", "To describe a person, place, or thing in detail"], ["B", "To tell a story"], ["C", "To explain how to make something"], ["D", "To argue a point"], ["E", "To report news"]],
      "A", "Descriptive text aims to give a clear picture of what is being described."),
    q("bing01-2", "Which tense is mainly used in descriptive text?",
      [["A", "Simple Present Tense"], ["B", "Simple Past Tense"], ["C", "Present Continuous"], ["D", "Past Perfect"], ["E", "Future Tense"]],
      "A", "Descriptive text uses Simple Present to describe current characteristics."),
    q("bing01-3", "\"She has long black hair.\" The underlined words are ...",
      [["A", "adjectives"], ["B", "verbs"], ["C", "adverbs"], ["D", "nouns"], ["E", "conjunctions"]],
      "A", "'Long' and 'black' are adjectives describing the noun 'hair'."),
    q("bing01-4", "Which is the correct structure of descriptive text?",
      [["A", "Identification - Description"], ["B", "Orientation - Events - Reorientation"], ["C", "Thesis - Arguments - Conclusion"], ["D", "Goal - Materials - Steps"], ["E", "Issue - Arguments For - Arguments Against"]],
      "A", "Descriptive text: Identification (introduces subject) → Description (details)."),
  ],
};

const bing02: ChapterQuiz = {
  chapterId: "bing-02",
  questions: [
    q("bing02-1", "A recount text is used to ...",
      [["A", "retell past events"], ["B", "describe something"], ["C", "explain a process"], ["D", "persuade the reader"], ["E", "entertain with a story"]],
      "A", "Recount text retells past events or experiences in chronological order."),
    q("bing02-2", "\"We visited the museum yesterday.\" This sentence uses ...",
      [["A", "Simple Past Tense"], ["B", "Simple Present Tense"], ["C", "Present Perfect"], ["D", "Future Tense"], ["E", "Past Continuous"]],
      "A", "'Visited' is V2 (past tense), and 'yesterday' indicates past time."),
    q("bing02-3", "The correct order of recount text structure is ...",
      [["A", "Orientation - Events - Reorientation"], ["B", "Thesis - Arguments - Conclusion"], ["C", "Goal - Materials - Steps"], ["D", "Identification - Description"], ["E", "Complication - Resolution"]],
      "A", "Recount: Orientation (who, when, where) → Events (chronological) → Reorientation (optional conclusion)."),
  ],
};

const bing03: ChapterQuiz = {
  chapterId: "bing-03",
  questions: [
    q("bing03-1", "The main purpose of narrative text is to ...",
      [["A", "entertain or amuse the reader"], ["B", "describe something"], ["C", "explain a scientific process"], ["D", "persuade the reader"], ["E", "report an event"]],
      "A", "Narrative text tells a story to entertain the reader."),
    q("bing03-2", "In narrative text, the part where a problem arises is called ...",
      [["A", "complication"], ["B", "orientation"], ["C", "resolution"], ["D", "coda"], ["E", "reorientation"]],
      "A", "Complication = the conflict/problem that drives the story forward."),
    q("bing03-3", "\"Once upon a time\" is typically found in ...",
      [["A", "narrative text"], ["B", "procedure text"], ["C", "analytical exposition"], ["D", "news item"], ["E", "report text"]],
      "A", "'Once upon a time' is a classic opening for narratives (fairy tales, legends, fables)."),
  ],
};

const bing04: ChapterQuiz = {
  chapterId: "bing-04",
  questions: [
    q("bing04-1", "The purpose of procedure text is to ...",
      [["A", "instruct how to make or do something"], ["B", "tell a story"], ["C", "describe a place"], ["D", "persuade the reader"], ["E", "explain why something happens"]],
      "A", "Procedure text provides step-by-step instructions."),
    q("bing04-2", "\"First, heat the oil. Then, add the garlic.\" These are examples of ...",
      [["A", "imperative sentences"], ["B", "declarative sentences"], ["C", "interrogative sentences"], ["D", "exclamatory sentences"], ["E", "passive sentences"]],
      "A", "Imperatives give commands/instructions (heat, add, stir, pour)."),
    q("bing04-3", "Which is NOT a feature of procedure text?",
      [["A", "past tense"], ["B", "imperative sentences"], ["C", "temporal conjunctions"], ["D", "action verbs"], ["E", "adverbs of manner"]],
      "A", "Procedure text uses PRESENT tense, not past tense."),
  ],
};

const bing05: ChapterQuiz = {
  chapterId: "bing-05",
  questions: [
    q("bing05-1", "\"How do you do?\" is a formal greeting used when ...",
      [["A", "meeting someone for the first time"], ["B", "saying goodbye"], ["C", "apologizing"], ["D", "thanking someone"], ["E", "making an offer"]],
      "A", "'How do you do?' is used at first meetings. The reply is also 'How do you do?'"),
    q("bing05-2", "The appropriate response to \"Thank you so much\" is ...",
      [["A", "You're welcome"], ["B", "I'm sorry"], ["C", "How do you do?"], ["D", "Never mind"], ["E", "Good morning"]],
      "A", "'You're welcome' or 'My pleasure' are appropriate responses to thanks."),
    q("bing05-3", "\"Would you mind helping me?\" is an expression of ...",
      [["A", "making a request"], ["B", "apologizing"], ["C", "greeting"], ["D", "complaining"], ["E", "congratulating"]],
      "A", "'Would you mind + V-ing?' is a polite way to make a request."),
  ],
};

// ── Bahasa Inggris Kelas XI ─────────────────────────────

const bing06: ChapterQuiz = {
  chapterId: "bing-06",
  questions: [
    q("bing06-1", "An analytical exposition text aims to ...",
      [["A", "persuade the reader with one-sided arguments"], ["B", "present both sides of an issue"], ["C", "describe something in detail"], ["D", "explain a natural process"], ["E", "tell a story"]],
      "A", "Analytical exposition presents ONE side of an argument to persuade."),
    q("bing06-2", "The last part of analytical exposition is called ...",
      [["A", "reiteration/conclusion"], ["B", "resolution"], ["C", "coda"], ["D", "reorientation"], ["E", "recommendation"]],
      "A", "Reiteration = restating the thesis or summarizing arguments."),
    q("bing06-3", "\"Furthermore, reading improves vocabulary.\" The word 'furthermore' is a(n) ...",
      [["A", "additive conjunction"], ["B", "causal conjunction"], ["C", "contrastive conjunction"], ["D", "temporal conjunction"], ["E", "conditional conjunction"]],
      "A", "'Furthermore' adds information → additive conjunction (also: moreover, in addition)."),
  ],
};

const bing07: ChapterQuiz = {
  chapterId: "bing-07",
  questions: [
    q("bing07-1", "The difference between report text and descriptive text is ...",
      [["A", "report describes a general class; descriptive describes a specific thing"], ["B", "report uses past tense; descriptive uses present tense"], ["C", "they are exactly the same"], ["D", "report describes events; descriptive describes processes"], ["E", "report is fictional; descriptive is factual"]],
      "A", "Report = general class (cats in general). Descriptive = specific (my cat, Snowy)."),
    q("bing07-2", "Report texts typically use ...",
      [["A", "general nouns and Simple Present Tense"], ["B", "specific nouns and Simple Past Tense"], ["C", "pronouns and future tense"], ["D", "action verbs only"], ["E", "imperative sentences"]],
      "A", "Report uses general nouns (volcanoes, computers) and Simple Present Tense."),
    q("bing07-3", "\"Cats are mammals. They have fur and give birth to live young.\" This is an example of ...",
      [["A", "report text"], ["B", "narrative text"], ["C", "procedure text"], ["D", "news item"], ["E", "analytical exposition"]],
      "A", "Describes a general class (cats) with factual information → report text."),
  ],
};

const bing08: ChapterQuiz = {
  chapterId: "bing-08",
  questions: [
    q("bing08-1", "Explanation text explains ...",
      [["A", "how or why something happens"], ["B", "who someone is"], ["C", "how to do something"], ["D", "what happened"], ["E", "what someone thinks"]],
      "A", "Explanation text focuses on processes — HOW or WHY phenomena occur."),
    q("bing08-2", "Which language feature is common in explanation text?",
      [["A", "passive voice and causal conjunctions"], ["B", "imperative sentences"], ["C", "direct speech"], ["D", "exclamatory sentences"], ["E", "first-person pronouns"]],
      "A", "Explanation uses passive voice (is heated, are formed) and causal conjunctions (because, therefore)."),
    q("bing08-3", "\"The water evaporates due to heat from the sun.\" This is part of ...",
      [["A", "explanation text"], ["B", "narrative text"], ["C", "discussion text"], ["D", "procedure text"], ["E", "recount text"]],
      "A", "Explaining how evaporation occurs → explanation text."),
  ],
};

const bing09: ChapterQuiz = {
  chapterId: "bing-09",
  questions: [
    q("bing09-1", "In a formal letter, \"Dear Sir/Madam\" is closed with ...",
      [["A", "Yours faithfully"], ["B", "Yours sincerely"], ["C", "Best regards"], ["D", "Love"], ["E", "Cheers"]],
      "A", "Dear Sir/Madam → Yours faithfully. Dear Mr./Mrs. [name] → Yours sincerely."),
    q("bing09-2", "\"I am writing to inquire about...\" is a phrase used in ...",
      [["A", "the opening paragraph of a formal letter"], ["B", "the closing of an informal email"], ["C", "a greeting card"], ["D", "a text message"], ["E", "a diary entry"]],
      "A", "This is a standard opening phrase for formal/business letters."),
    q("bing09-3", "\"I look forward to hearing from you\" is typically used in the ...",
      [["A", "closing paragraph"], ["B", "opening paragraph"], ["C", "salutation"], ["D", "subject line"], ["E", "postscript"]],
      "A", "This is a standard closing phrase expressing expectation of a reply."),
  ],
};

const bing10: ChapterQuiz = {
  chapterId: "bing-10",
  questions: [
    q("bing10-1", "\"Why don't we go to the cinema?\" is an expression of ...",
      [["A", "suggestion"], ["B", "opinion"], ["C", "offer"], ["D", "complaint"], ["E", "agreement"]],
      "A", "'Why don't we...?' is a way to make a suggestion."),
    q("bing10-2", "The appropriate response to disagree politely is ...",
      [["A", "I see your point, but..."], ["B", "You're wrong!"], ["C", "That's stupid!"], ["D", "No way!"], ["E", "I don't care!"]],
      "A", "'I see your point, but...' acknowledges the other view before disagreeing politely."),
    q("bing10-3", "\"In my opinion, online learning is effective.\" This expresses ...",
      [["A", "a personal opinion"], ["B", "a fact"], ["C", "a question"], ["D", "an offer"], ["E", "a suggestion"]],
      "A", "'In my opinion' signals a personal opinion/viewpoint."),
  ],
};

// ── Bahasa Inggris Kelas XII ────────────────────────────

const bing11: ChapterQuiz = {
  chapterId: "bing-11",
  questions: [
    q("bing11-1", "The main difference between discussion text and analytical exposition is ...",
      [["A", "discussion presents both sides; analytical exposition presents one side"], ["B", "they are the same"], ["C", "discussion uses past tense"], ["D", "analytical exposition presents both sides"], ["E", "discussion has no conclusion"]],
      "A", "Discussion: pros AND cons. Analytical exposition: only ONE side."),
    q("bing11-2", "\"However, smartphones can be a major distraction.\" The word 'however' signals ...",
      [["A", "contrast"], ["B", "addition"], ["C", "cause"], ["D", "time"], ["E", "conclusion"]],
      "A", "'However' is a contrastive conjunction (signals opposing idea)."),
    q("bing11-3", "The structure of discussion text is ...",
      [["A", "Issue - Arguments For - Arguments Against - Conclusion"], ["B", "Thesis - Arguments - Reiteration"], ["C", "Orientation - Events - Reorientation"], ["D", "Goal - Materials - Steps"], ["E", "Identification - Description"]],
      "A", "Discussion: Issue → For → Against → Conclusion/Recommendation."),
  ],
};

const bing12: ChapterQuiz = {
  chapterId: "bing-12",
  questions: [
    q("bing12-1", "News item text typically presents information in ...",
      [["A", "inverted pyramid (most important first)"], ["B", "chronological order"], ["C", "alphabetical order"], ["D", "random order"], ["E", "least important first"]],
      "A", "News follows inverted pyramid: main event first, then details, then sources."),
    q("bing12-2", "\"BPBD spokesperson Ahmad Rizki stated...\" This is an example of ...",
      [["A", "a source/quote"], ["B", "a thesis"], ["C", "an orientation"], ["D", "a complication"], ["E", "a procedure"]],
      "A", "Quoting an official source is a key feature of news item text."),
    q("bing12-3", "Which verb is commonly used in news item text?",
      [["A", "reported, stated, announced"], ["B", "loved, enjoyed, liked"], ["C", "dreamed, imagined, wished"], ["D", "cooked, stirred, mixed"], ["E", "once upon a time"]],
      "A", "News uses reporting verbs (reported, stated, confirmed, announced)."),
  ],
};

const bing13: ChapterQuiz = {
  chapterId: "bing-13",
  questions: [
    q("bing13-1", "The purpose of a job application letter is to ...",
      [["A", "introduce yourself and highlight qualifications for a position"], ["B", "complain about a product"], ["C", "tell a personal story"], ["D", "describe a company"], ["E", "explain a process"]],
      "A", "A cover letter introduces you, showcases qualifications, and requests an interview."),
    q("bing13-2", "A job application letter should be ...",
      [["A", "concise, tailored, and formal"], ["B", "long, generic, and informal"], ["C", "full of jokes"], ["D", "written in past tense"], ["E", "without specific examples"]],
      "A", "Keep it concise (3-4 paragraphs), tailored to the job, and professional."),
    q("bing13-3", "\"I have attached my resume for your review.\" This phrase is typically found in the ...",
      [["A", "closing paragraph"], ["B", "salutation"], ["C", "subject line"], ["D", "first sentence"], ["E", "signature"]],
      "A", "Mentioning attachments is part of the closing paragraph."),
  ],
};

const bing14: ChapterQuiz = {
  chapterId: "bing-14",
  questions: [
    q("bing14-1", "\"If I had studied harder, I would have passed the exam.\" This is conditional type ...",
      [["A", "3 (unreal past)"], ["B", "1 (real future)"], ["C", "2 (unreal present)"], ["D", "0 (general truth)"], ["E", "mixed"]],
      "A", "Type 3: If + Past Perfect, Subject + would have + V3 (unreal past — didn't study, didn't pass)."),
    q("bing14-2", "The passive form of \"They built the bridge in 2020\" is ...",
      [["A", "The bridge was built in 2020"], ["B", "The bridge is built in 2020"], ["C", "The bridge has been built in 2020"], ["D", "The bridge built in 2020"], ["E", "The bridge building in 2020"]],
      "A", "Past tense active → was/were + V3. 'The bridge was built in 2020.'"),
    q("bing14-3", "She said, \"I am happy.\" The reported speech is ...",
      [["A", "She said (that) she was happy"], ["B", "She said that she is happy"], ["C", "She said that I am happy"], ["D", "She says she was happy"], ["E", "She said that she happy"]],
      "A", "Reported speech: present → past (am → was), pronoun changes (I → she)."),
    q("bing14-4", "\"The girl who sits beside me is my sister.\" The underlined clause is a(n) ...",
      [["A", "adjective clause"], ["B", "noun clause"], ["C", "adverb clause"], ["D", "independent clause"], ["E", "main clause"]],
      "A", "'Who sits beside me' modifies the noun 'girl' → adjective (relative) clause."),
  ],
};

export const bingQuizzes: ChapterQuiz[] = [
  bing01, bing02, bing03, bing04, bing05, bing06, bing07, bing08, bing09, bing10,
  bing11, bing12, bing13, bing14,
];
