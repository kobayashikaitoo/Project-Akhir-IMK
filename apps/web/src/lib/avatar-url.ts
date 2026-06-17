/** DiceBear Lorelei avatar builder utilities. */

export interface DiceBearLoreleiOptions {
  seed: string;
  backgroundColor: string;
  skinColor: string;
  hairColor: string;
  glasses: boolean;
  freckles: boolean;
  beard: boolean;
  earrings: boolean;
}

export function randomSeed(): string {
  return Math.random().toString(36).substring(2, 10);
}

export function buildDiceBearLoreleiUrl(options: DiceBearLoreleiOptions): string {
  const params = new URLSearchParams();
  params.set("seed", options.seed);
  params.set("backgroundColor", options.backgroundColor);
  params.set("skinColor", options.skinColor);
  params.set("hairColor", options.hairColor);
  if (options.glasses) params.set("glasses", "variant01,variant02,variant03,variant04");
  if (options.freckles) params.set("freckles", "variant01,variant02,variant03");
  if (options.beard) params.set("beard", "variant01,variant02,variant03");
  if (options.earrings) params.set("earrings", "variant01,variant02,variant03");
  return `https://api.dicebear.com/7.x/lorelei/svg?${params.toString()}`;
}

export const BACKGROUND_COLORS = [
  { value: "b6e3f4", label: "Sky Blue" },
  { value: "c0aede", label: "Lavender" },
  { value: "d1d4f9", label: "Periwinkle" },
  { value: "ffd5dc", label: "Pink" },
  { value: "ffdfbf", label: "Peach" },
  { value: "c1f0c1", label: "Mint" },
];

export const SKIN_COLORS = [
  { value: "f2d3b1", label: "Light" },
  { value: "e0ac69", label: "Medium" },
  { value: "c68642", label: "Tan" },
  { value: "8d5524", label: "Brown" },
  { value: "6b4226", label: "Dark" },
];

export const HAIR_COLORS = [
  { value: "2c1b18", label: "Black" },
  { value: "4a2c2a", label: "Dark Brown" },
  { value: "b55239", label: "Auburn" },
  { value: "d6b370", label: "Blonde" },
  { value: "e8e1e1", label: "Gray" },
  { value: "6a4c93", label: "Purple" },
];
