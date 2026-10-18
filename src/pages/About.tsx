import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  HardHat,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const engagements = [
  {
    icon: ShieldCheck,
    title: "Qualité",
    description:
      "Accorder une attention particulière aux matériaux, aux méthodes de travail et aux finitions.",
  },
  {
    icon: Target,
    title: "Rigueur",
    description:
      "Préparer chaque étape du projet avec méthode, organisation et suivi.",
  },
  {
    icon: Compass,
    title: "Accompagnement",
    description:
      "Échanger avec le client pour comprendre ses besoins et orienter les choix techniques.",
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#071A2D] via-[#0A2540] to-[#12395c] px-5 pb-32 pt-24 text-white sm:pb-44 sm:pt-32">
        {/* Trame de plan technique */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          aria-hidden="true"
        />

        {/* Halos */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-amber-500/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-96 w-96 rounded-full bg-[#12395c]/60 blur-3xl"
          aria-hidden="true"
        />

        {/* Cercles concentriques centrés */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[46rem] sm:w-[46rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[32rem] sm:w-[32rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/25 sm:h-[20rem] sm:w-[20rem]"
          aria-hidden="true"
        />

        {/* Axes en croix */}
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
          aria-hidden="true"
        />

        {/* Repères d'angle (cadre de plan) */}
        <div
          className="pointer-events-none absolute left-5 top-5 h-10 w-10 border-l-2 border-t-2 border-amber-400/60 sm:left-10 sm:top-10 sm:h-14 sm:w-14"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-5 top-5 h-10 w-10 border-r-2 border-t-2 border-amber-400/60 sm:right-10 sm:top-10 sm:h-14 sm:w-14"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="inline-flex items-center justify-center gap-3 rounded-full border border-amber-400/30 bg-white/5 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-amber-400 shadow-lg shadow-black/20 backdrop-blur-md">
              <span
                className="h-0.5 w-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
                aria-hidden="true"
              />
              À propos de BTP Pro
              <span
                className="h-0.5 w-6 rounded-full bg-gradient-to-l from-amber-400 to-amber-200"
                aria-hidden="true"
              />
            </p>

            <h1 className="mt-7 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
              Construire aujourd’hui,
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                bâtir l’avenir.
              </span>
            </h1>

            <span
              className="mx-auto mt-8 block h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"
              aria-hidden="true"
            />

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Découvrez notre approche des projets de bâtiment et de travaux
              publics, fondée sur la préparation, la rigueur et la recherche
              de solutions adaptées.
            </p>
          </motion.div>
        </div>

        {/* Ligne ambre le long de la diagonale */}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full sm:h-28"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="0"
            y1="120"
            x2="1440"
            y2="20"
            stroke="#fbbf24"
            strokeOpacity="0.7"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Découpe en diagonale en bas */}
        <svg
          className="pointer-events-none absolute inset-x-0 -bottom-px h-16 w-full text-white sm:h-28"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="0,120 1440,28 1440,120" fill="currentColor" />
        </svg>
      </section>
      {/* QUI SOMMES-NOUS */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:py-28">
        {/* Halo décoratif */}
        <div
          className="pointer-events-none absolute -right-40 top-20 h-[28rem] w-[28rem] rounded-full bg-amber-400/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Cadre décoratif décalé */}
              <div
                className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-amber-400/60 sm:-left-5 sm:-top-5"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl [background-image:radial-gradient(#0A2540_1px,transparent_1px)] [background-size:12px_12px] opacity-30"
                aria-hidden="true"
              />

              <div className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-[#0A2540]/25 ring-1 ring-[#0A2540]/10">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
                  alt="Plans et préparation d'un projet de construction"
                  loading="lazy"
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[450px]"
                />

                {/* Voile léger */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute -bottom-6 -right-3 hidden rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-5 text-[#0A2540] shadow-2xl shadow-amber-500/30 ring-1 ring-amber-300/60 sm:block">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A2540] text-amber-400 shadow-lg shadow-[#0A2540]/30">
                  <HardHat size={26} />
                </span>
                <p className="mt-3 font-bold">BTP Pro</p>
                <p className="text-sm">Bâtiment et travaux publics</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-6 lg:pt-0"
          >
            <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                aria-hidden="true"
              />
              Qui sommes-nous ?
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0A2540] sm:text-4xl lg:text-5xl">
              Une approche sérieuse de chaque projet
            </h2>

            <p className="mt-6 leading-8 text-slate-600 sm:text-lg">
              BTP Pro présente une approche structurée des projets de
              construction et d’aménagement. Chaque besoin mérite une étude
              attentive, une planification cohérente et une communication
              claire avec le client.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Notre objectif est de proposer des solutions adaptées aux
              contraintes du projet, à son usage et aux attentes du client.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Comprendre les besoins avant de proposer une solution",
                "Organiser les étapes du projet avec méthode",
                "Privilégier la qualité et la sécurité",
                "Maintenir une communication claire",
              ].map((item) => (
                <li
                  key={item}
                  className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-400/30 transition-colors duration-300 group-hover:bg-amber-500">
                    <CheckCircle2
                      size={18}
                      className="text-amber-600 transition-colors duration-300 group-hover:text-[#0A2540]"
                    />
                  </span>
                  <span className="pt-1 text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-5 py-20 sm:py-28">
        {/* Trame de plan technique */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
          aria-hidden="true"
        />

        {/* Halos décoratifs */}
        <div
          className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0A2540]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                aria-hidden="true"
              />
              Nos principes
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-l from-amber-500 to-amber-300"
                aria-hidden="true"
              />
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl lg:text-5xl">
              Nos engagements
            </h2>

            <p className="mt-4 leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Des principes qui peuvent guider chaque étape d’un projet.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {engagements.map((engagement, index) => {
              const Icon = engagement.icon;

              return (
                <motion.article
                  key={engagement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative rounded-2xl bg-gradient-to-br from-amber-200/70 via-slate-200 to-[#0A2540]/20 p-px shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:from-amber-400 hover:via-amber-300 hover:to-[#0A2540]/40 hover:shadow-2xl hover:shadow-amber-500/15"
                >
                  <div className="relative h-full overflow-hidden rounded-[calc(1rem-1px)] bg-white p-7 sm:p-8">
                    {/* Halo au survol */}
                    <div
                      className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-400/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    {/* Numéro en filigrane */}
                    <span
                      className="pointer-events-none absolute right-5 top-3 select-none text-7xl font-black text-slate-100 transition-colors duration-300 group-hover:text-amber-100"
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </span>

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0A2540] to-[#12395c] text-amber-400 shadow-lg shadow-[#0A2540]/25 ring-1 ring-amber-400/30 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
                      <Icon size={26} />
                    </div>

                    <h3 className="relative mt-6 text-xl font-bold tracking-tight text-[#0A2540]">
                      {engagement.title}
                    </h3>

                    <span
                      className="relative mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                      aria-hidden="true"
                    />

                    <p className="relative mt-4 text-sm leading-7 text-slate-600">
                      {engagement.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-20">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#12395c] p-8 text-white shadow-2xl shadow-[#0A2540]/30 ring-1 ring-white/10 sm:p-12 lg:flex-row lg:items-center">
          {/* Trame discrète */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            aria-hidden="true"
          />

          {/* Halos */}
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-[#12395c]/70 blur-3xl"
            aria-hidden="true"
          />

          {/* Cercles décoratifs */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-amber-400/30"
            aria-hidden="true"
          />

          {/* Ligne lumineuse en haut */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Parlons de votre projet
            </h2>

            <span
              className="mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
              aria-hidden="true"
            />

            <p className="mt-4 max-w-xl leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Contactez-nous pour présenter votre besoin et discuter des
              prochaines étapes.
            </p>
          </div>

          <Link
            to="/contact"
            className="group relative inline-flex shrink-0 items-center gap-3 rounded-full bg-amber-500 py-4 pl-8 pr-4 font-bold text-[#0A2540] shadow-2xl shadow-amber-500/30 ring-1 ring-amber-300/50 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-amber-400/40"
          >
            Nous contacter
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-amber-400 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={19} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}