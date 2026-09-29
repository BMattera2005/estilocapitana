// src/data/productsFullBody.ts

export interface FullBodyItem {
  id: string;
  name: string;
  series: string;
  format: "800x2400 mm" | "800x3000 mm";
  thickness: "15 mm";
  body: "Full Body";
  finish: "Glossy" | "Matt";
  sqm: number;
  weightKg: number;
  recommendedUses: string;
  image: string;
}

export const productsFullBody: FullBodyItem[] = [
  // --- BROWN FLAKES ---
  {
    id: "hab-fb-brown-flakes-2400-glossy",
    name: "Brown Flakes 800×2400 Glossy",
    series: "MoonRock Series",
    format: "800x2400 mm",
    thickness: "15 mm",
    body: "Full Body",
    finish: "Glossy",
    sqm: 1.92,
    weightKg: 67,
    recommendedUses: "Mesadas, barras y frentes de diseño continuo.",
    image: "/products/fullbody/brown_flakes.jpg",
  },

  // --- BLACK SALT N PEPPER ---
  {
    id: "hab-fb-black-snp-2400-glossy",
    name: "Black Salt n Pepper 800×2400 Glossy",
    series: "Salt n Pepper Series",
    format: "800x2400 mm",
    thickness: "15 mm",
    body: "Full Body",
    finish: "Glossy",
    sqm: 1.92,
    weightKg: 67,
    recommendedUses: "Encimeras de alta prestación y mobiliario técnico.",
    image: "/products/fullbody/black_salt_pepper.jpg",
  },
  {
    id: "hab-fb-black-snp-2400-matt",
    name: "Black Salt n Pepper 800×2400 Matt",
    series: "Salt n Pepper Series",
    format: "800x2400 mm",
    thickness: "15 mm",
    body: "Full Body",
    finish: "Matt",
    sqm: 1.92,
    weightKg: 67,
    recommendedUses: "Áreas comerciales, barras y mesadas mate.",
    image: "/products/fullbody/black_salt_pepper.jpg",
  },
  {
    id: "hab-fb-black-snp-3000-glossy",
    name: "Black Salt n Pepper 800×3000 Glossy",
    series: "Salt n Pepper Series",
    format: "800x3000 mm",
    thickness: "15 mm",
    body: "Full Body",
    finish: "Glossy",
    sqm: 2.40,
    weightKg: 84,
    recommendedUses: "Mesadas XL de alta resistencia al impacto.",
    image: "/products/fullbody/black_salt_pepper.jpg",
  },
  {
    id: "hab-fb-black-snp-3000-matt",
    name: "Black Salt n Pepper 800×3000 Matt",
    series: "Salt n Pepper Series",
    format: "800x3000 mm",
    thickness: "15 mm",
    body: "Full Body",
    finish: "Matt",
    sqm: 2.40,
    weightKg: 84,
    recommendedUses: "Superficies arquitectónicas monolíticas.",
    image: "/products/fullbody/black_salt_pepper.jpg",
  },

  // --- SAGA WHITE ---
  {
    id: "hab-fb-saga-white-2400-glossy",
    name: "Saga White 800×2400 Glossy",
    series: "Saga Series",
    format: "800x2400 mm",
    thickness: "15 mm",
    body: "Full Body",
    finish: "Glossy",
    sqm: 1.92,
    weightKg: 67,
    recommendedUses: "Mesadas residenciales de vanguardia sin porosidad.",
    image: "/products/fullbody/saga_white.jpg",
  },
  {
    id: "hab-fb-saga-white-2400-matt",
    name: "Saga White 800×2400 Matt",
    series: "Saga Series",
    format: "800x2400 mm",
    thickness: "15 mm",
    body: "Full Body",
    finish: "Matt",
    sqm: 1.92,
    weightKg: 67,
    recommendedUses: "Superficies higiénicas y solados de tacto suave.",
    image: "/products/fullbody/saga_white.jpg",
  },
  {
    id: "hab-fb-saga-white-3000-glossy",
    name: "Saga White 800×3000 Glossy",
    series: "Saga Series",
    format: "800x3000 mm",
    thickness: "15 mm",
    body: "Full Body",
    finish: "Glossy",
    sqm: 2.40,
    weightKg: 84,
    recommendedUses: "Mesadas continuas en placa entera.",
    image: "/products/fullbody/saga_white.jpg",
  },
  {
    id: "hab-fb-saga-white-3000-matt",
    name: "Saga White 800×3000 Matt",
    series: "Saga Series",
    format: "800x3000 mm",
    thickness: "15 mm",
    body: "Full Body",
    finish: "Matt",
    sqm: 2.40,
    weightKg: 84,
    recommendedUses: "Superficies de gran desarrollo visual sin reflejo.",
    image: "/products/fullbody/saga_white.jpg",
  }
];
