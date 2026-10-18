import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-gradient-to-br from-[#071A2D] via-[#0A2540] to-[#12395c] lg:min-h-[760px]">
      {/* Trame de plan technique */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_left,black,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Halos lumineux */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#12395c]/60 blur-3xl"
        aria-hidden="true"
      />

      {/* Cercles décoratifs */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full border border-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-12 -top-12 -z-10 h-52 w-52 rounded-full border border-white/10"
        aria-hidden="true"
      />

      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 py-20 lg:min-h-[760px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 shadow-lg shadow-black/20 backdrop-blur-md">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            Génie civil · Madagascar
          </div>

          {/* Titre */}
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Construire
            <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              aujourd'hui,
            </span>
            bâtir l'avenir.
          </h1>

          {/* Trait d'accent */}
          <span
            className="mt-7 block h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
            aria-hidden="true"
          />

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            BTP Pro vous accompagne dans vos projets de construction,
            de bâtiment et de travaux publics avec une exigence constante
            de qualité, de sécurité et de fiabilité.
          </p>

          {/* Boutons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-500 py-4 pl-8 pr-4 font-bold text-[#0A2540] shadow-2xl shadow-amber-500/30 ring-1 ring-amber-300/50 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-amber-400/40"
            >
              Demander un devis
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A2540] text-amber-400 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={19} />
              </span>
            </Link>

            <Link
              to="/realisations"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/15 hover:shadow-xl hover:shadow-black/20"
            >
              Découvrir nos projets
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Points forts */}
          <div className="mt-12 flex flex-wrap gap-3 text-sm text-slate-100">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
              <ShieldCheck size={19} className="text-amber-400" />
              Exigence qualité
            </span>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
              <Building2 size={19} className="text-amber-400" />
              Solutions de construction
            </span>
          </div>
        </motion.div>

        {/* Photo en biseau + carte engagement */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Cadre ambre décalé (grand écran) */}
          <div
            className="absolute inset-0 hidden translate-x-4 translate-y-4 bg-gradient-to-br from-amber-400/50 to-amber-500/10 lg:block lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
            aria-hidden="true"
          />

          {/* Photo */}
          <div className="group relative h-[340px] overflow-hidden rounded-3xl shadow-2xl shadow-black/40 ring-1 ring-white/15 sm:h-[420px] lg:h-[560px] lg:rounded-none lg:ring-0 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=85')",
              }}
            />

            {/* Voiles */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#071A2D]/80 via-[#0A2540]/10 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/50 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Points décoratifs */}
          <div
            className="absolute -bottom-6 right-6 hidden h-24 w-24 [background-image:radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:10px_10px] opacity-40 lg:block"
            aria-hidden="true"
          />

          {/* Carte engagement */}
          <div className="relative z-10 mx-auto -mt-10 max-w-sm px-4 lg:absolute lg:-bottom-8 lg:-left-6 lg:mx-0 lg:mt-0 lg:max-w-[22rem] lg:px-0 xl:-left-14">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0A2540]/85 p-7 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur-xl">
              {/* Liseré ambre */}
              <span
                className="absolute inset-y-6 left-0 w-1 rounded-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600"
                aria-hidden="true"
              />

              {/* Halo décoratif */}
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl"
                aria-hidden="true"
              />

              <p className="relative inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                <span
                  className="h-0.5 w-8 rounded-full bg-amber-400"
                  aria-hidden="true"
                />
                Notre engagement
              </p>

              <p className="relative mt-4 text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
                Des projets conçus avec rigueur. Des réalisations pensées pour durer.
              </p>

              <div
                className="relative mt-4 h-px bg-gradient-to-r from-amber-400/60 via-white/20 to-transparent"
                aria-hidden="true"
              />

              <p className="relative mt-4 text-sm leading-6 text-slate-300">
                De la préparation à la livraison, chaque étape mérite une
                attention particulière.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Barre d'accent en bas */}
      <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent" />

      {/* Ligne lumineuse en bas */}
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}