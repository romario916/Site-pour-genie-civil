
export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "batiment-moderne",
    title: "Bâtiment moderne",
    category: "Bâtiment",
    location: "Exemple de présentation",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    description:
      "Exemple visuel pour présenter l'architecture et les caractéristiques d'un bâtiment.",
  },
  {
    id: "chantier-construction",
    title: "Chantier de construction",
    category: "Construction",
    location: "Exemple de présentation",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=85",
    description:
      "Exemple visuel pour illustrer les différentes étapes d'un chantier.",
  },
  {
    id: "travaux-structure",
    title: "Structure et travaux",
    category: "Construction",
    location: "Exemple de présentation",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",
    description:
      "Exemple visuel pour présenter les travaux et les structures d'un projet.",
  },
  {
    id: "chantier-construction-2",
    title: "Chantier de construction",
    category: "Construction",
    location: "Exemple de présentation",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=85",
    description:
      "Exemple visuel pour illustrer les différentes étapes d'un chantier.",
  },
];
