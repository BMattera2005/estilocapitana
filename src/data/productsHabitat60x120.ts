// src/data/productsHabitat60x120.ts

export interface Habitat60x120Product {
  /** Si es false, el modelo se oculta de la web sin borrar su información. */
  isVisible?: boolean;
  id: string;
  code: string;
  name: string;
  series: string;
  format: "60x120 cm";
  thickness: "0,9 cm";
  finish: "Matt";
  faces: number;
  sqmPerBox: number;
  piecesPerBox: number;
  weightKgBox: number;
  description: string;
  image: string;
}

export const productsHabitat60x120: Habitat60x120Product[] = [
  {
    id: "hab-60120-yta66w12",
    code: "YTA66W12",
    name: "Habitat Stone Marfil",
    series: "Luxury Stone Slab Series",
    format: "60x120 cm",
    thickness: "0,9 cm",
    finish: "Matt",
    faces: 6,
    sqmPerBox: 1.44,
    piecesPerBox: 2,
    weightKgBox: 30,
    description: "Textura tridimensional pétrea en tono marfil cálido con microrelieve mineral y 6 caras aleatorias continuas.",
    image: "/products/habitat60x120/yta66w12.jpg",
  },
  {
    id: "hab-60120-yta66w13",
    code: "YTA66W13",
    name: "Habitat Stone Gris",
    series: "Luxury Stone Slab Series",
    format: "60x120 cm",
    thickness: "0,9 cm",
    finish: "Matt",
    faces: 6,
    sqmPerBox: 1.44,
    piecesPerBox: 2,
    weightKgBox: 30,
    description: "Superficie de estética mineral gris perla neutra para solados y muros de alto tránsito arquitectónico.",
    image: "/products/habitat60x120/yta66w13.jpg",
  },
  {
    id: "hab-60120-ymt66p09",
    code: "YMT66P09",
    name: "Habitat Marmolado Crema",
    series: "Luxury Stone Slab Series",
    format: "60x120 cm",
    thickness: "0,9 cm",
    finish: "Matt",
    faces: 6,
    sqmPerBox: 1.44,
    piecesPerBox: 2,
    weightKgBox: 30,
    description: "Veteado marmóreo beige orgánico con transiciones tonales suaves y acabado táctil sedoso.",
    image: "/products/habitat60x120/ymt66p09.jpg",
  },
  {
    id: "hab-60120-yk6500m",
    code: "YK6500M",
    name: "Habitat Calacatta Gold",
    series: "Luxury Stone Slab Series",
    format: "60x120 cm",
    thickness: "0,9 cm",
    finish: "Matt",
    faces: 4,
    sqmPerBox: 1.44,
    piecesPerBox: 2,
    weightKgBox: 30,
    description: "Diseño clásico de veta dorada y gris sobre fondo claro, con definición de alta resolución en gran formato rectificado.",
    image: "/products/habitat60x120/yk6500m.jpg",
  },
];
