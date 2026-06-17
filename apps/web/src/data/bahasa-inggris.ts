import type { Chapter } from "./types";
export type { Chapter } from "./types";

// ── Kelas X (Grade 10) ─────────────────────────────────

const ch01: Chapter = {
  id: "bing-01", title: "Descriptive Text", grade: 10, order: 1,
  description: "Describing people, places, and things in detail using present tense.",
  content: `
<h2>What is Descriptive Text?</h2>
<p>A <strong>descriptive text</strong> is a text that describes a particular person, place, or thing in detail. Its purpose is to give the reader a clear picture of what is being described.</p>

<h2>Generic Structure</h2>
<ol>
<li><strong>Identification</strong> — introduces the subject being described</li>
<li><strong>Description</strong> — provides details about characteristics, qualities, or features</li>
</ol>

<h2>Language Features</h2>
<ul>
<li>Uses <strong>Simple Present Tense</strong> (e.g., "She <em>has</em> long black hair")</li>
<li>Uses <strong>adjectives</strong> to describe (beautiful, tall, ancient, colorful)</li>
<li>Uses <strong>specific nouns</strong> (Borobudur Temple, my grandmother, Kuta Beach)</li>
<li>Often uses <strong>figurative language</strong> (similes, metaphors)</li>
</ul>

<h2>Example</h2>
<p><strong>My Beloved Grandmother</strong></p>
<p>My grandmother is a kind and gentle woman. She is 70 years old but still looks healthy. She has short gray hair and warm brown eyes. Her smile always makes everyone around her feel comfortable. She lives in a small village near Yogyakarta and loves gardening.</p>

<h2>Key Grammar: Simple Present Tense</h2>
<ul>
<li><strong>Verbal:</strong> Subject + V1(s/es) — "She <em>lives</em> in Bandung."</li>
<li><strong>Nominal:</strong> Subject + to be (is/am/are) + complement — "He <em>is</em> tall."</li>
<li><strong>Negative:</strong> Subject + do/does + not + V1 — "It <em>does not</em> rain much here."</li>
</ul>`,
};

const ch02: Chapter = {
  id: "bing-02", title: "Recount Text", grade: 10, order: 2,
  description: "Retelling past events and experiences in chronological order.",
  content: `
<h2>What is Recount Text?</h2>
<p>A <strong>recount text</strong> retells past events or experiences. Its purpose is to inform or entertain the reader about something that happened.</p>

<h2>Types of Recount</h2>
<ul>
<li><strong>Personal recount</strong> — personal experience (holiday, birthday)</li>
<li><strong>Factual recount</strong> — factual events (news report, police report)</li>
<li><strong>Imaginative recount</strong> — imagined past events (dream story)</li>
</ul>

<h2>Generic Structure</h2>
<ol>
<li><strong>Orientation</strong> — introduces who, when, where</li>
<li><strong>Events</strong> — sequence of events in chronological order</li>
<li><strong>Reorientation</strong> — personal comment or conclusion (optional)</li>
</ol>

<h2>Language Features</h2>
<ul>
<li>Uses <strong>Simple Past Tense</strong> (went, saw, visited, enjoyed)</li>
<li>Uses <strong>temporal conjunctions</strong> (then, after that, finally, before)</li>
<li>Uses <strong>action verbs</strong> (walked, played, took, ate)</li>
<li>Focuses on specific participants (I, we, my family)</li>
</ul>

<h2>Key Grammar: Simple Past Tense</h2>
<ul>
<li><strong>Verbal:</strong> Subject + V2 — "We <em>visited</em> the museum yesterday."</li>
<li><strong>Nominal:</strong> Subject + was/were + complement — "It <em>was</em> amazing."</li>
<li><strong>Negative:</strong> Subject + did + not + V1 — "I <em>did not go</em> to school."</li>
<li><strong>Irregular verbs:</strong> go→went, eat→ate, see→saw, take→took</li>
</ul>`,
};

const ch03: Chapter = {
  id: "bing-03", title: "Narrative Text", grade: 10, order: 3,
  description: "Stories with complications and resolutions — fairy tales, legends, fables.",
  content: `
<h2>What is Narrative Text?</h2>
<p>A <strong>narrative text</strong> tells a story with a complication or problem that needs to be resolved. Its purpose is to entertain or amuse the reader.</p>

<h2>Types of Narrative</h2>
<ul>
<li><strong>Fairy tale</strong> — Cinderella, Snow White</li>
<li><strong>Legend</strong> — The Legend of Toba Lake, Malin Kundang</li>
<li><strong>Fable</strong> — The Ant and the Grasshopper</li>
<li><strong>Folk tale</strong> — traditional stories passed down orally</li>
</ul>

<h2>Generic Structure</h2>
<ol>
<li><strong>Orientation</strong> — introduces characters, setting, time</li>
<li><strong>Complication</strong> — a problem or conflict arises</li>
<li><strong>Resolution</strong> — the problem is solved (happy or sad ending)</li>
<li><strong>Coda</strong> — moral lesson (optional)</li>
</ol>

<h2>Language Features</h2>
<ul>
<li>Uses <strong>Simple Past Tense</strong></li>
<li>Uses <strong>time conjunctions</strong> (once upon a time, one day, then, finally)</li>
<li>Uses <strong>action verbs</strong> and <strong>direct speech</strong></li>
<li>Uses <strong>specific characters</strong> (Cinderella, the king, the witch)</li>
</ul>

<h2>Example: The Legend of Malin Kundang</h2>
<p>Once upon a time, there was a poor boy named Malin Kundang. He lived with his mother in a small village. One day, he decided to sail away to seek fortune. Years later, he became rich and married a beautiful woman. When he returned to his village, he was ashamed of his poor mother and denied her. His mother was heartbroken and cursed him. Malin Kundang turned into stone.</p>`,
};

const ch04: Chapter = {
  id: "bing-04", title: "Procedure Text", grade: 10, order: 4,
  description: "Instructions and steps to make or do something.",
  content: `
<h2>What is Procedure Text?</h2>
<p>A <strong>procedure text</strong> explains how to make or do something through a sequence of steps. Its purpose is to instruct the reader.</p>

<h2>Generic Structure</h2>
<ol>
<li><strong>Goal/Aim</strong> — what is being made or done</li>
<li><strong>Materials/Ingredients</strong> — what you need</li>
<li><strong>Steps/Methods</strong> — sequential instructions</li>
</ol>

<h2>Language Features</h2>
<ul>
<li>Uses <strong>Simple Present Tense</strong></li>
<li>Uses <strong>imperative sentences</strong> (Cut the onion, Add sugar, Stir well)</li>
<li>Uses <strong>action verbs</strong> (mix, pour, fold, boil)</li>
<li>Uses <strong>temporal conjunctions</strong> (first, then, next, finally)</li>
<li>Uses <strong>adverbs</strong> for detail (carefully, slowly, evenly)</li>
</ul>

<h2>Example: How to Make Nasi Goreng</h2>
<p><strong>Ingredients:</strong></p>
<ul>
<li>2 plates of cooked rice</li>
<li>3 cloves of garlic, minced</li>
<li>2 eggs</li>
<li>3 tablespoons of sweet soy sauce</li>
<li>Salt and pepper to taste</li>
<li>Cooking oil</li>
</ul>
<p><strong>Steps:</strong></p>
<ol>
<li>First, heat the oil in a wok.</li>
<li>Then, stir-fry the garlic until fragrant.</li>
<li>Next, add the eggs and scramble them.</li>
<li>Add the rice and mix well.</li>
<li>Pour in the sweet soy sauce, salt, and pepper.</li>
<li>Finally, stir everything until well combined and serve.</li>
</ol>`,
};

const ch05: Chapter = {
  id: "bing-05", title: "Social Interaction & Greetings", grade: 10, order: 5,
  description: "Formal and informal expressions for daily social interactions.",
  content: `
<h2>Greetings and Leave-Takings</h2>
<h3>Formal</h3>
<ul>
<li>"Good morning/afternoon/evening"</li>
<li>"How do you do?" (first meeting — reply: "How do you do?")</li>
<li>"Nice to meet you" / "Pleased to meet you"</li>
</ul>
<h3>Informal</h3>
<ul>
<li>"Hi!" / "Hey!" / "What's up?"</li>
<li>"How's it going?" / "How are you doing?"</li>
<li>"See you later!" / "Catch you later!"</li>
</ul>

<h2>Introducing Yourself and Others</h2>
<ul>
<li><strong>Self:</strong> "Let me introduce myself. My name is..." / "I'd like to introduce myself..."</li>
<li><strong>Others:</strong> "This is my friend, Andi." / "I'd like you to meet..." / "May I introduce..."</li>
</ul>

<h2>Expressions of Gratitude</h2>
<ul>
<li>"Thank you so much." / "I really appreciate it."</li>
<li>"Thanks a million." / "I'm very grateful."</li>
<li>Response: "You're welcome." / "Don't mention it." / "My pleasure."</li>
</ul>

<h2>Apologizing</h2>
<ul>
<li>"I'm sorry for..." / "I apologize for..."</li>
<li>"Please forgive me." / "I beg your pardon."</li>
<li>Response: "That's alright." / "No problem." / "Don't worry about it."</li>
</ul>

<h2>Making Requests</h2>
<ul>
<li>"Could you please...?" / "Would you mind...?"</li>
<li>"Can I...?" / "May I...?"</li>
<li>"I'd like to ask..." / "Is it possible to...?"</li>
</ul>`,
};

// ── Kelas XI (Grade 11) ────────────────────────────────

const ch06: Chapter = {
  id: "bing-06", title: "Analytical Exposition Text", grade: 11, order: 6,
  description: "Presenting arguments to persuade readers about a point of view.",
  content: `
<h2>What is Analytical Exposition?</h2>
<p>An <strong>analytical exposition</strong> is a text that presents one side of an argument to persuade the reader that the topic is important or that the writer's position is correct.</p>

<h2>Generic Structure</h2>
<ol>
<li><strong>Thesis</strong> — introduces the topic and states the writer's position</li>
<li><strong>Arguments</strong> — points supported by evidence and elaboration</li>
<li><strong>Reiteration/Conclusion</strong> — restates the thesis or summarizes arguments</li>
</ol>

<h2>Language Features</h2>
<ul>
<li>Uses <strong>Simple Present Tense</strong></li>
<li>Uses <strong>relational processes</strong> (is, are, has, have)</li>
<li>Uses <strong>internal conjunctions</strong> (firstly, secondly, furthermore, in addition)</li>
<li>Uses <strong>causal conjunctions</strong> (because, therefore, consequently, as a result)</li>
<li>Uses <strong>evaluative language</strong> (important, significant, crucial)</li>
</ul>

<h2>Example: Why Reading is Important</h2>
<p><strong>Thesis:</strong> Reading is one of the most important habits everyone should develop.</p>
<p><strong>Argument 1:</strong> Firstly, reading expands our knowledge. Books provide information about various topics that we may not learn in daily life.</p>
<p><strong>Argument 2:</strong> Secondly, reading improves our vocabulary. The more we read, the more words we learn.</p>
<p><strong>Argument 3:</strong> Furthermore, reading reduces stress. A good book can take our mind off daily worries.</p>
<p><strong>Conclusion:</strong> Therefore, reading is an essential habit that benefits us intellectually and emotionally.</p>`,
};

const ch07: Chapter = {
  id: "bing-07", title: "Report Text", grade: 11, order: 7,
  description: "Presenting factual information about a class of things.",
  content: `
<h2>What is Report Text?</h2>
<p>A <strong>report text</strong> presents information about something (a class of things, natural phenomena, or social issues) based on systematic observation and analysis. Unlike descriptive text which describes a <em>specific</em> thing, report text describes a <em>general class</em>.</p>

<h2>Generic Structure</h2>
<ol>
<li><strong>General Classification</strong> — introduces the topic and classifies it</li>
<li><strong>Description</strong> — describes features, behaviors, habitats, parts, etc.</li>
</ol>

<h2>Language Features</h2>
<ul>
<li>Uses <strong>Simple Present Tense</strong></li>
<li>Uses <strong>general nouns</strong> (cats, computers, volcanoes — not "my cat")</li>
<li>Uses <strong>relational verbs</strong> (is, are, has, have, consists of)</li>
<li>Uses <strong>technical/scientific terms</strong> (photosynthesis, mammal, ecosystem)</li>
<li>Uses <strong>passive voice</strong> (is found, are produced, can be classified)</li>
</ul>

<h2>Example: Earthquakes</h2>
<p>An earthquake is a sudden shaking of the ground caused by movement of the Earth's tectonic plates. Earthquakes can be classified into three types based on their cause: tectonic, volcanic, and collapse earthquakes.</p>
<p>Tectonic earthquakes are the most common and destructive type. They occur when tectonic plates collide, slide past each other, or pull apart. The point where the earthquake originates is called the <em>focus</em>, and the point directly above it on the surface is the <em>epicenter</em>.</p>
<p>The strength of an earthquake is measured using the Richter scale. Earthquakes measuring 5.0 or higher can cause significant damage to buildings and infrastructure.</p>`,
};

const ch08: Chapter = {
  id: "bing-08", title: "Explanation Text", grade: 11, order: 8,
  description: "Explaining how and why natural or social phenomena occur.",
  content: `
<h2>What is Explanation Text?</h2>
<p>An <strong>explanation text</strong> explains <em>how</em> or <em>why</em> something happens. It focuses on the process, not on the thing itself.</p>

<h2>Generic Structure</h2>
<ol>
<li><strong>General Statement</strong> — introduces the phenomenon</li>
<li><strong>Sequenced Explanation</strong> — step-by-step process of how/why it occurs</li>
<li><strong>Closing/Conclusion</strong> — summary (optional)</li>
</ol>

<h2>Language Features</h2>
<ul>
<li>Uses <strong>Simple Present Tense</strong></li>
<li>Uses <strong>passive voice</strong> (is heated, are formed, is caused by)</li>
<li>Uses <strong>causal conjunctions</strong> (because, as a result, therefore, due to)</li>
<li>Uses <strong>temporal conjunctions</strong> (then, next, after that, finally)</li>
<li>Uses <strong>technical vocabulary</strong> related to the topic</li>
</ul>

<h2>Example: How Rain is Formed</h2>
<p><strong>General Statement:</strong> Rain is a natural phenomenon that occurs through the water cycle.</p>
<p><strong>Explanation:</strong></p>
<ol>
<li>First, the sun heats water in oceans, rivers, and lakes, causing it to evaporate into water vapor (evaporation).</li>
<li>Then, the water vapor rises into the atmosphere where it cools and condenses into tiny water droplets, forming clouds (condensation).</li>
<li>When the water droplets become too heavy, they fall to the ground as rain (precipitation).</li>
<li>Finally, the rainwater flows back into rivers and oceans, and the cycle repeats.</li>
</ol>`,
};

const ch09: Chapter = {
  id: "bing-09", title: "Correspondence & Formal Letters", grade: 11, order: 9,
  description: "Writing formal and informal letters, emails, and applications.",
  content: `
<h2>Types of Correspondence</h2>
<ul>
<li><strong>Formal letter</strong> — business, official, or academic purposes</li>
<li><strong>Informal letter</strong> — personal communication with friends or family</li>
<li><strong>Email</strong> — electronic correspondence (formal or informal)</li>
</ul>

<h2>Formal Letter Structure</h2>
<ol>
<li><strong>Sender's address</strong> (top right or top left)</li>
<li><strong>Date</strong></li>
<li><strong>Recipient's address</strong> (left side)</li>
<li><strong>Salutation</strong> — "Dear Sir/Madam," or "Dear Mr. Smith,"</li>
<li><strong>Subject line</strong> — brief statement of purpose</li>
<li><strong>Body paragraphs:</strong>
  <ul>
  <li>Opening — state the purpose</li>
  <li>Middle — provide details or arguments</li>
  <li>Closing — request action or express hope</li>
  </ul>
</li>
<li><strong>Complimentary close</strong> — "Yours faithfully," (Dear Sir/Madam) or "Yours sincerely," (Dear Mr./Mrs.)</li>
<li><strong>Signature and name</strong></li>
</ol>

<h2>Useful Phrases</h2>
<h3>Opening</h3>
<ul>
<li>"I am writing to inquire about..." / "I am writing regarding..."</li>
<li>"I would like to express my concern about..."</li>
</ul>
<h3>Closing</h3>
<ul>
<li>"I look forward to hearing from you."</li>
<li>"Thank you for your attention and consideration."</li>
<li>"Please do not hesitate to contact me if you need further information."</li>
</ul>`,
};

const ch10: Chapter = {
  id: "bing-10", title: "Offers, Suggestions & Opinions", grade: 11, order: 10,
  description: "Expressions for offering help, making suggestions, and stating opinions.",
  content: `
<h2>Making Offers</h2>
<ul>
<li>"Would you like me to help you?"</li>
<li>"Can I help you with...?"</li>
<li>"Shall I get you something?"</li>
<li>"Do you need any help?"</li>
</ul>
<h3>Accepting/Declining Offers</h3>
<ul>
<li>Accept: "Yes, please. That would be great." / "Thank you, I'd appreciate that."</li>
<li>Decline: "No, thank you. I can manage." / "That's very kind, but I'm fine."</li>
</ul>

<h2>Making Suggestions</h2>
<ul>
<li>"I suggest that we..." / "I recommend..."</li>
<li>"Why don't we...?" / "How about...?"</li>
<li>"You should..." / "It might be a good idea to..."</li>
<li>"What if we...?" / "Let's..."</li>
</ul>

<h2>Expressing Opinions</h2>
<h3>Stating</h3>
<ul>
<li>"In my opinion,..." / "I believe that..."</li>
<li>"From my point of view,..." / "I personally think..."</li>
<li>"As far as I'm concerned,..."</li>
</ul>
<h3>Agreeing</h3>
<ul>
<li>"I completely agree." / "That's exactly what I think."</li>
<li>"You're absolutely right." / "I couldn't agree more."</li>
</ul>
<h3>Disagreeing</h3>
<ul>
<li>"I see your point, but..." / "I'm afraid I disagree."</li>
<li>"That may be true, however..." / "I don't quite agree because..."</li>
</ul>`,
};

// ── Kelas XII (Grade 12) ───────────────────────────────

const ch11: Chapter = {
  id: "bing-11", title: "Discussion Text", grade: 12, order: 11,
  description: "Presenting two sides of an issue with arguments for and against.",
  content: `
<h2>What is Discussion Text?</h2>
<p>A <strong>discussion text</strong> presents a problematic discourse by looking at an issue from different perspectives. Unlike analytical exposition (one side), discussion text presents <strong>both pros and cons</strong>.</p>

<h2>Generic Structure</h2>
<ol>
<li><strong>Issue</strong> — introduces the topic or issue to be discussed</li>
<li><strong>Arguments FOR</strong> — points supporting the issue</li>
<li><strong>Arguments AGAINST</strong> — points opposing the issue</li>
<li><strong>Conclusion/Recommendation</strong> — summary or balanced recommendation</li>
</ol>

<h2>Language Features</h2>
<ul>
<li>Uses <strong>Simple Present Tense</strong></li>
<li>Uses <strong>contrastive conjunctions</strong> (however, on the other hand, nevertheless, in contrast, whereas, although)</li>
<li>Uses <strong>additive conjunctions</strong> (furthermore, moreover, in addition)</li>
<li>Uses <strong>modal verbs</strong> (should, could, might, must)</li>
<li>Uses <strong>thinking verbs</strong> (believe, think, consider, argue)</li>
</ul>

<h2>Example: Should Students Use Smartphones at School?</h2>
<p><strong>Issue:</strong> The use of smartphones in schools has been a controversial topic.</p>
<p><strong>Arguments FOR:</strong> On one hand, smartphones can be powerful learning tools. Students can access educational resources, collaborate with peers, and develop digital literacy skills.</p>
<p><strong>Arguments AGAINST:</strong> On the other hand, smartphones can be a major distraction. Students may spend time on social media instead of studying. Furthermore, excessive screen time can affect their health and concentration.</p>
<p><strong>Conclusion:</strong> In conclusion, while smartphones offer educational benefits, schools should implement clear policies to minimize distractions and promote responsible usage.</p>`,
};

const ch12: Chapter = {
  id: "bing-12", title: "News Item Text", grade: 12, order: 12,
  description: "Reporting newsworthy events to the public in journalistic format.",
  content: `
<h2>What is News Item Text?</h2>
<p>A <strong>news item text</strong> informs readers about events of the day that are considered newsworthy. It follows the journalistic convention of presenting the most important information first.</p>

<h2>Generic Structure</h2>
<ol>
<li><strong>Main Event / Newsworthy Event</strong> — summarizes the main event (who, what, when, where)</li>
<li><strong>Elaboration / Background</strong> — provides details and context (how, why)</li>
<li><strong>Source(s)</strong> — quotes from witnesses, authorities, or experts</li>
</ol>

<h2>Language Features</h2>
<ul>
<li>Uses <strong>action verbs</strong> (reported, stated, announced, confirmed)</li>
<li>Uses <strong>saying verbs</strong> for quotes (said, stated, explained, added)</li>
<li>Uses <strong>adverbs of time, place, manner</strong> (yesterday, in Jakarta, immediately)</li>
<li>Uses <strong>past tense</strong> for the event, <strong>present tense</strong> for ongoing situations</li>
<li>Uses <strong>short, concise sentences</strong></li>
<li>Uses <strong>passive voice</strong> (was arrested, were evacuated, has been confirmed)</li>
</ul>

<h2>Example</h2>
<p><strong>Jakarta — Heavy Rain Causes Flash Floods in South Jakarta</strong></p>
<p>Heavy rainfall lasting over four hours caused flash floods in several areas of South Jakarta on Monday afternoon. Water levels rose to 50 centimeters in residential areas near the Ciliwung River.</p>
<p>The Jakarta Disaster Mitigation Agency (BPBD) reported that approximately 2,000 residents were affected. Emergency teams were deployed to evacuate vulnerable residents. "We have set up five temporary shelters for displaced families," said BPBD spokesperson Ahmad Rizki.</p>
<p>No casualties have been reported. The agency advised residents living near riverbanks to remain alert and prepare for possible evacuation.</p>`,
};

const ch13: Chapter = {
  id: "bing-13", title: "Job Application Letter", grade: 12, order: 13,
  description: "Writing effective application letters for employment or internships.",
  content: `
<h2>Purpose of Application Letter</h2>
<p>A <strong>job application letter</strong> (cover letter) accompanies your resume when applying for a position. It introduces you, highlights your qualifications, and explains why you are a suitable candidate.</p>

<h2>Structure</h2>
<ol>
<li><strong>Opening Paragraph</strong> — state the position you are applying for and where you found the advertisement</li>
<li><strong>Body Paragraph(s)</strong> — highlight relevant education, experience, skills, and achievements</li>
<li><strong>Closing Paragraph</strong> — express enthusiasm, request an interview, and thank the reader</li>
</ol>

<h2>Key Tips</h2>
<ul>
<li>Keep it <strong>concise</strong> (3-4 paragraphs maximum)</li>
<li><strong>Tailor</strong> your letter to the specific job and company</li>
<li>Use <strong>formal language</strong> and professional tone</li>
<li>Include <strong>specific examples</strong> of achievements</li>
<li>Proofread for grammar and spelling errors</li>
</ul>

<h2>Example</h2>
<p>Dear Mr. Wijaya,</p>
<p>I am writing to apply for the Marketing Intern position advertised on your company's website. I am currently a third-year student at Universitas Indonesia, majoring in Communication Studies.</p>
<p>During my studies, I have developed strong communication and analytical skills. Last semester, I led a team project that created a social media campaign for a local NGO, increasing their followers by 40% within two months. I am also proficient in Canva, Google Analytics, and basic video editing.</p>
<p>I am enthusiastic about the opportunity to contribute to your marketing team and learn from experienced professionals. I have attached my resume for your review and would welcome the chance to discuss how I can contribute to your company.</p>
<p>Thank you for your time and consideration. I look forward to hearing from you.</p>
<p>Yours sincerely,<br/>Siti Nurhaliza</p>`,
};

const ch14: Chapter = {
  id: "bing-14", title: "Advanced Grammar Review", grade: 12, order: 14,
  description: "Complex sentences, conditionals, passive voice, and reported speech.",
  content: `
<h2>Conditional Sentences</h2>
<h3>Type 1 — Real/Possible (Present/Future)</h3>
<p>If + Simple Present, Subject + will + V1</p>
<ul><li>"If it <em>rains</em>, I <em>will stay</em> home."</li></ul>
<h3>Type 2 — Unreal/Hypothetical (Present)</h3>
<p>If + Simple Past, Subject + would + V1</p>
<ul><li>"If I <em>had</em> money, I <em>would buy</em> a car." (but I don't have money)</li></ul>
<h3>Type 3 — Unreal (Past)</h3>
<p>If + Past Perfect, Subject + would have + V3</p>
<ul><li>"If I <em>had studied</em>, I <em>would have passed</em>." (but I didn't study)</li></ul>

<h2>Passive Voice</h2>
<ul>
<li><strong>Present:</strong> "The book <em>is written</em> by a famous author."</li>
<li><strong>Past:</strong> "The bridge <em>was built</em> in 1990."</li>
<li><strong>Future:</strong> "The results <em>will be announced</em> tomorrow."</li>
<li><strong>Present Perfect:</strong> "The project <em>has been completed</em>."</li>
<li><strong>Modal:</strong> "The rules <em>must be followed</em>."</li>
</ul>

<h2>Reported Speech (Indirect Speech)</h2>
<h3>Changes in Reported Speech</h3>
<ul>
<li><strong>Tense backshift:</strong> Present → Past, Past → Past Perfect</li>
<li><strong>Time expressions:</strong> today → that day, yesterday → the day before, tomorrow → the next day</li>
<li><strong>Pronouns</strong> change according to context</li>
</ul>
<h3>Examples</h3>
<ul>
<li>Direct: She said, "I am tired." → Reported: She said (that) she <em>was</em> tired.</li>
<li>Direct: He said, "I will go tomorrow." → Reported: He said (that) he <em>would</em> go <em>the next day</em>.</li>
</ul>

<h2>Complex Sentences</h2>
<ul>
<li><strong>Noun clause:</strong> "I know <em>that she is honest</em>."</li>
<li><strong>Adjective clause:</strong> "The girl <em>who sits beside me</em> is my sister."</li>
<li><strong>Adverb clause:</strong> "I will call you <em>when I arrive</em>."</li>
</ul>`,
};

export const bingChapters: Chapter[] = [
  ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08, ch09, ch10,
  ch11, ch12, ch13, ch14,
];

export const bingMap = new Map(bingChapters.map((c) => [c.id, c]));

export function getBingChapter(id: string): Chapter | undefined {
  return bingMap.get(id);
}
