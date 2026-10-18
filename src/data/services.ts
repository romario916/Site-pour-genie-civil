
import {
  Building2,
  ClipboardCheck,
  HardHat,
  Layers3,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  items: string[];
}

export const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Construction de bâtiments",
    description:
      "Présentation de solutions pour les projets de bâtiments résidentiels, commerciaux et professionnels, selon les besoins du client.",
    category: "Construction",
    icon: Building2,
    items: [
      "Étude des besoins",
      "Préparation du projet",
      "Suivi des différentes étapes",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Études et préparation",
    description:
      "Organisation des informations nécessaires à la préparation d’un projet et à l’évaluation de ses contraintes.",
    category: "Études",
    icon: Ruler,
    items: [
      "Analyse des besoins",
      "Préparation technique",
      "Coordination du projet",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Travaux publics",
    description:
      "Présentation de solutions adaptées aux projets d’aménagement et d’infrastructures, selon leur nature.",
    category: "Travaux publics",
    icon: Layers3,
    items: [
      "Aménagements extérieurs",
      "Préparation des interventions",
      "Organisation des travaux",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Suivi de chantier",
    description:
      "Organisation du suivi des étapes d’un chantier afin de faciliter la coordination et le contrôle du travail.",
    category: "Suivi",
    icon: ClipboardCheck,
    items: [
      "Suivi de l’avancement",
      "Coordination des intervenants",
      "Vérifications prévues au projet",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Qualité et sécurité",
    description:
      "Prise en compte des exigences de qualité et de sécurité adaptées au type de chantier et aux règles applicables.",
    category: "Qualité",
    icon: ShieldCheck,
    items: [
      "Prévention des risques",
      "Vérification des exigences",
      "Attention portée aux finitions",
    ],
  },
  {
    id: 6,
    number: "06",
    title: "Accompagnement de projet",
    description:
      "Échange avec le client pour clarifier ses objectifs et identifier les prochaines étapes de son projet.",
    category: "Accompagnement",
    icon: HardHat,
    items: [
      "Écoute du besoin",
      "Orientation initiale",
      "Échanges sur les étapes",
    ],
  },
];
