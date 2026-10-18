import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, HardHat, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Services", to: "/services" },
  { label: "Réalisations", to: "/realisations" },
  { label: "Équipe", to: "/equipe" },
  { label: "Partenaires", to: "/partenaires" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `group relative rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-amber-50 text-amber-700"
        : "text-slate-600 hover:bg-slate-50 hover:text-amber-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/85 shadow-sm shadow-[#0A2540]/5 backdrop-blur-xl">
      {/* Ligne dégradée en bas */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
        aria-hidden="true"
      />

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8"
        aria-label="Navigation principale"
      >
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0A2540] to-[#12395c] text-amber-400 shadow-lg shadow-[#0A2540]/25 ring-1 ring-amber-400/30 transition-all duration-300 group-hover:scale-105 group-hover:ring-amber-400/70">
            <HardHat size={25} />
          </span>

          <span>
            <span className="block text-xl font-bold tracking-wide text-[#0A2540]">
              BTP PRO
            </span>
            <span className="block text-[9px] font-semibold tracking-[0.18em] text-slate-500">
              BÂTIMENT & TRAVAUX PUBLICS
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={linkClass}
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="group hidden items-center gap-3 rounded-full bg-amber-500 py-2 pl-5 pr-2 text-sm font-bold text-[#0A2540] shadow-lg shadow-amber-500/30 ring-1 ring-amber-300/50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-400/40 xl:flex"
        >
          Demander un devis
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2540] text-amber-400 transition-transform duration-300 group-hover:rotate-12">
            <ArrowUpRight size={17} />
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 xl:hidden ${
            menuOpen
              ? "bg-[#0A2540] text-amber-400 shadow-lg shadow-[#0A2540]/25"
              : "border border-slate-200 bg-white text-[#0A2540] hover:border-amber-300 hover:bg-amber-50"
          }`}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-gradient-to-b from-white to-slate-50 px-5 py-5 shadow-2xl shadow-[#0A2540]/10 xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative overflow-hidden rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-amber-50 text-amber-700 shadow-sm ring-1 ring-amber-200"
                      : "text-slate-700 hover:bg-white hover:text-[#0A2540] hover:shadow-sm"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span
                        className="absolute inset-y-2 left-0 w-1 rounded-full bg-gradient-to-b from-amber-400 to-amber-600"
                        aria-hidden="true"
                      />
                    )}

                    {item.label}
                  </>
                )}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="group mt-3 flex items-center justify-center gap-3 rounded-full bg-amber-500 px-5 py-3.5 font-bold text-[#0A2540] shadow-lg shadow-amber-500/30 ring-1 ring-amber-300/50 transition-all duration-300 hover:bg-amber-400"
            >
              Demander un devis
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2540] text-amber-400 transition-transform duration-300 group-hover:rotate-12">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}