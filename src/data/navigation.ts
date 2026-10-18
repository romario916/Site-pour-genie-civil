
export interface NavLink {
  label: string;
  href: string;
}

export const navigation: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Équipe", href: "/equipe" },
  { label: "Partenaires", href: "/partenaires" },
  { label: "Contact", href: "/contact" },
];
