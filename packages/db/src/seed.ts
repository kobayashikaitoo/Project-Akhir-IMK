import { drizzle } from "drizzle-orm/node-postgres";

import { loadDatabaseUrl } from "./database-url";
import { examType, sectionType } from "./schema";

const db = drizzle(loadDatabaseUrl());

const examTypes = [
  { id: "MATEMATIKA", name: "Matematika", language: "Indonesian", description: "Matematika SMA (Aljabar, Trigonometri, Kalkulus, Geometri)" },
  { id: "FISIKA", name: "Fisika", language: "Indonesian", description: "Fisika SMA (Kinematika, Dinamika, Termodinamika, Listrik & Magnet)" },
  { id: "KIMIA", name: "Kimia", language: "Indonesian", description: "Kimia SMA (Stoikiometri, Asam Basa, Kimia Organik, Laju Reaksi)" },
  { id: "BIOLOGI", name: "Biologi", language: "Indonesian", description: "Biologi SMA (Sel, Metabolisme, Genetika, Ekologi & Evolusi)" },
  { id: "BINGGRIS", name: "Bahasa Inggris", language: "English", description: "Bahasa Inggris SMA (Reading Comprehension, Grammar, Text Types)" },
];

const sectionTypes = [
  { id: "READING", name: "Pemahaman Teori" },
  { id: "WRITING", name: "Latihan Soal" },
];

async function seed() {
  console.log("Seeding exam_type table with SMA subjects...");
  for (const et of examTypes) {
    await db.insert(examType).values(et).onConflictDoUpdate({
      target: examType.id,
      set: {
        name: et.name,
        language: et.language,
        description: et.description,
      },
    });
  }

  console.log("Seeding section_type table with SMA section formats...");
  for (const st of sectionTypes) {
    await db.insert(sectionType).values(st).onConflictDoUpdate({
      target: sectionType.id,
      set: {
        name: st.name,
      },
    });
  }

  console.log("Done.");
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

