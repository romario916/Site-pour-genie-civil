import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, HardHat } from "lucide-react";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";

const categories = [
  "Tous",
  ...new Set(projects.map((project) => project.category)),
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory,
        );

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#071A2D] via-[#0A2540] to-[#12395c] px-5 pb-28 pt-20 text-white sm:pb-36 sm:pt-28">
        {/* Trame de plan technique */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_left,black,transparent_70%)]"
          aria-hidden="true"
        />

        {/* Halos */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 -z-10 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#12395c]/60 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
                aria-hidden="true"
              />
              Portfolio BTP Pro
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Nos{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                réalisations
              </span>
            </h1>

            <span
              className="mt-7 block h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
              aria-hidden="true"
            />

            <p className="mt-7 max-w-2xl leading-8 text-slate-300 sm:text-lg">
              Découvrez un aperçu visuel des types de projets qui peuvent
              être présentés dans notre portfolio.
            </p>
          </motion.div>

          {/* Arche architecturale */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden justify-center lg:flex"
            aria-hidden="true"
          >
            <div className="relative h-[430px] w-[340px]">
              {/* Arche décalée (contour) */}
              <div className="absolute -right-6 -top-6 h-full w-full rounded-t-[999px] rounded-b-3xl border-2 border-amber-400/50" />

              {/* Arche secondaire (contour fin) */}
              <div className="absolute -left-6 top-8 h-full w-full rounded-t-[999px] rounded-b-3xl border border-white/10" />

              {/* Arche principale */}
              <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-3xl border border-white/15 bg-gradient-to-b from-white/15 via-white/5 to-[#0A2540]/40 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur-xl">
                {/* Trame interne */}
                <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

                {/* Halo interne */}
                <div className="absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full bg-amber-400/25 blur-3xl" />

                {/* Soleil / repère */}
                <div className="absolute left-1/2 top-16 h-20 w-20 -translate-x-1/2 rounded-full border border-amber-300/60 bg-gradient-to-br from-amber-300/40 to-amber-500/10" />

                {/* Silhouette de chantier */}
                <svg
                  viewBox="0 0 340 260"
                  className="absolute inset-x-0 bottom-0 w-full"
                  fill="none"
                >
                  {/* Grue */}
                  <g stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
                    <path d="M250 260V60" />
                    <path d="M190 60H320" />
                    <path d="M250 60L205 60" />
                    <path d="M250 40L190 60" />
                    <path d="M250 40L320 60" />
                    <path d="M205 60V105" strokeDasharray="3 4" />
                  </g>
                  <rect x="198" y="105" width="14" height="10" fill="#fbbf24" />

                  {/* Bâtiments */}
                  <g fill="#ffffff" fillOpacity="0.14">
                    <rect x="30" y="150" width="60" height="110" />
                    <rect x="96" y="110" width="52" height="150" />
                    <rect x="154" y="170" width="48" height="90" />
                  </g>

                  {/* Fenêtres */}
                  <g fill="#fbbf24" fillOpacity="0.55">
                    <rect x="42" y="166" width="10" height="10" />
                    <rect x="64" y="166" width="10" height="10" />
                    <rect x="42" y="190" width="10" height="10" />
                    <rect x="64" y="190" width="10" height="10" />
                    <rect x="108" y="128" width="10" height="10" />
                    <rect x="128" y="128" width="10" height="10" />
                    <rect x="108" y="154" width="10" height="10" />
                    <rect x="128" y="154" width="10" height="10" />
                    <rect x="108" y="180" width="10" height="10" />
                    <rect x="164" y="190" width="10" height="10" />
                    <rect x="182" y="190" width="10" height="10" />
                  </g>

                  {/* Sol */}
                  <rect x="0" y="250" width="340" height="10" fill="#ffffff" fillOpacity="0.2" />
                </svg>
              </div>

              {/* Points décoratifs */}
              <div className="absolute -bottom-6 -left-6 h-24 w-24 [background-image:radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:10px_10px] opacity-40" />
            </div>
          </motion.div>
        </div>

        {/* Courbe en vague en bas */}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full text-white sm:h-20"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 64C240 0 480 0 720 32C960 64 1200 64 1440 16V80H0Z"
            fill="currentColor"
          />
        </svg>
      </section>

      {/* PORTFOLIO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white px-5 py-20 sm:py-28">
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
          className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#0A2540]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Filtres */}
          <div className="flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white/80 p-2 shadow-xl shadow-[#0A2540]/5 backdrop-blur-md sm:rounded-full">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#0A2540] to-[#12395c] text-white shadow-lg shadow-[#0A2540]/25 ring-1 ring-amber-400/40"
                        : "text-slate-600 hover:bg-amber-50 hover:text-[#0A2540]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grille */}
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                className="group relative rounded-2xl bg-gradient-to-br from-amber-200/70 via-slate-200 to-[#0A2540]/20 p-px shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:from-amber-400 hover:via-amber-300 hover:to-[#0A2540]/40 hover:shadow-2xl hover:shadow-amber-500/15"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem-1px)] bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Voile sombre au survol */}
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 via-[#0A2540]/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#0A2540] shadow-lg shadow-black/10 ring-1 ring-amber-300/50 backdrop-blur-md">
                      {project.category}
                    </span>

                    {/* Pastille flèche au survol */}
                    <span
                      className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-amber-500 text-[#0A2540] opacity-0 shadow-xl shadow-amber-500/30 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col p-6">
                    {/* Halo au survol */}
                    <div
                      className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-400/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <p className="relative inline-flex w-fit items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                      <MapPin size={15} className="text-amber-600" />
                      {project.location}
                    </p>

                    <h2 className="relative mt-4 text-xl font-bold tracking-tight text-[#0A2540]">
                      {project.title}
                    </h2>

                    <span
                      className="relative mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                      aria-hidden="true"
                    />

                    <p className="relative mt-4 text-sm leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <Link
                      to="/contact"
                      className="relative mt-auto inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-[#0A2540] transition-colors duration-300 hover:text-amber-600"
                    >
                      <span className="mt-0 inline-flex items-center gap-2">
                        Demander des informations
                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl border-l-2 border-amber-400 pl-4 text-left text-sm leading-7 text-slate-500 sm:text-center sm:border-l-0 sm:pl-0">
            Les images et descriptions sont des exemples de présentation.
            Elles ne représentent pas nécessairement des réalisations de
            BTP Pro. Remplace-les par des projets réels et vérifiés avant
            la publication du site.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-5 py-16">
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

          <div className="relative flex items-start gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 ring-1 ring-amber-400/40">
              <HardHat
                className="text-amber-400"
                size={30}
              />
            </span>

            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Vous avez un projet ?
              </h2>

              <span
                className="mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
                aria-hidden="true"
              />

              <p className="mt-4 max-w-xl leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Contactez BTP Pro pour discuter de vos besoins et des
                possibilités d'accompagnement.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="group relative inline-flex shrink-0 items-center gap-3 rounded-full bg-amber-500 py-4 pl-8 pr-4 font-bold text-[#0A2540] shadow-2xl shadow-amber-500/30 ring-1 ring-amber-300/50 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-amber-400/40"
          >
            Nous contacter
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-amber-400 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight size={19} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}