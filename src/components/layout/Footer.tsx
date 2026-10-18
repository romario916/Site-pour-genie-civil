import {
  ArrowUpRight,
  HardHat,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { navigation } from "../../data/navigation";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#071A2D] text-white">
      {/* Fond : dégradé profond */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#071A2D] via-[#0A2540]/60 to-[#071A2D]"
        aria-hidden="true"
      />

      {/* Trame de plan technique */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Halos lumineux */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#12395c]/50 blur-3xl"
        aria-hidden="true"
      />

      {/* Cercles décoratifs */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border border-white/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-12 -top-12 -z-10 h-48 w-48 rounded-full border border-white/5"
        aria-hidden="true"
      />

      {/* Ligne lumineuse en haut */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:px-8 lg:py-20">
        {/* Présentation de l'entreprise */}
        <div>
          <Link to="/" className="group inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-[#0A2540] shadow-xl shadow-amber-500/25 ring-1 ring-amber-300/50 transition-all duration-300 group-hover:rotate-3 group-hover:scale-105">
              <HardHat size={27} />
            </span>

            <span>
              <span className="block text-xl font-bold tracking-wide">
                {company.name.toUpperCase()}
              </span>

              <span className="text-[10px] font-medium tracking-[0.18em] text-slate-400">
                BÂTIMENT & TRAVAUX PUBLICS
              </span>
            </span>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
            {company.description}
          </p>

          <Link
            to="/contact"
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-amber-500 py-2 pl-5 pr-2 text-sm font-bold text-[#0A2540] shadow-lg shadow-amber-500/25 ring-1 ring-amber-300/50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-400/35"
          >
            Parlons de votre projet
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2540] text-amber-400 transition-transform duration-300 group-hover:rotate-12">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
            Navigation
          </h2>

          <span
            className="mt-3 block h-1 w-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
            aria-hidden="true"
          />

          <ul className="mt-6 space-y-3.5">
            {navigation.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-amber-400"
                >
                  <span
                    className="h-px w-0 bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-300 group-hover:w-4"
                    aria-hidden="true"
                  />

                  {link.label === "Services"
                    ? "Nos services"
                    : link.label === "Réalisations"
                      ? "Nos réalisations"
                      : link.label === "Équipe"
                        ? "Notre équipe"
                        : link.label === "À propos"
                          ? "À propos"
                          : link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coordonnées et Google Maps */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
            Contact
          </h2>

          <span
            className="mt-3 block h-1 w-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
            aria-hidden="true"
          />

          <div className="mt-6 space-y-4 text-sm text-slate-300">
            {company.address && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-400/30">
                    <MapPin
                      size={19}
                      className="text-amber-400"
                    />
                  </span>
                  <span className="pt-1.5">{company.address}</span>
                </div>

                {company.mapsUrl && (
                  <a
                    href={company.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group ml-12 mt-2 inline-flex items-center gap-2 font-semibold text-amber-400 transition hover:text-amber-300"
                  >
                    Voir sur Google Maps
                    <ExternalLink
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                )}
              </div>
            )}

            {company.phone && (
              <a
                href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:bg-white/10 hover:text-amber-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-400/30 transition-colors duration-300 group-hover:bg-amber-500">
                  <Phone
                    size={19}
                    className="text-amber-400 transition-colors duration-300 group-hover:text-[#0A2540]"
                  />
                </span>
                <span className="pt-1.5">{company.phone}</span>
              </a>
            )}

            {company.email && (
              <a
                href={`mailto:${company.email}`}
                className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:bg-white/10 hover:text-amber-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-400/30 transition-colors duration-300 group-hover:bg-amber-500">
                  <Mail
                    size={19}
                    className="text-amber-400 transition-colors duration-300 group-hover:text-[#0A2540]"
                  />
                </span>
                <span className="break-all pt-1.5">{company.email}</span>
              </a>
            )}

            {!company.address && !company.phone && !company.email && (
              <p className="text-sm leading-6 text-slate-400">
                Nos coordonnées seront bientôt disponibles.
              </p>
            )}

            {/* Lien Maps indépendant de l'adresse */}
            {!company.address && company.mapsUrl && (
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 font-semibold text-amber-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400/20 hover:text-amber-300"
              >
                <MapPin size={19} />
                Voir notre localisation sur Google Maps
                <ExternalLink
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="relative border-t border-white/10">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}. Tous droits réservés.
          </p>

          <Link
            to="/mentions-legales"
            className="group inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium transition-all duration-300 hover:border-amber-400/40 hover:text-amber-400"
          >
            Mentions légales
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}