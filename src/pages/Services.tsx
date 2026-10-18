import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { services } from "../data/services";

export default function Services() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#071A2D] via-[#0A2540] to-[#12395c] px-5 pb-32 pt-20 text-white sm:pb-40 sm:pt-28 lg:min-h-[620px]">
        {/* Trame de plan technique */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_left,black,transparent_70%)]"
          aria-hidden="true"
        />

        {/* Halos */}
        <div
          className="pointer-events-none absolute -left-20 top-10 -z-10 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#12395c]/60 blur-3xl"
          aria-hidden="true"
        />

        {/* Photo en fond sur mobile et tablette */}
        <div
          className="absolute inset-0 -z-20 lg:hidden"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071A2D]/90 via-[#0A2540]/90 to-[#071A2D]/95" />
        </div>

        {/* Liseré ambre le long de la diagonale (grand écran) */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[56%] bg-gradient-to-b from-amber-300 via-amber-500 to-amber-600 opacity-80 lg:block lg:[clip-path:polygon(19%_0,100%_0,100%_100%,1%_100%)]"
          aria-hidden="true"
        />

        {/* Photo en diagonale (grand écran) */}
        <div
          className="group absolute inset-y-0 right-0 -z-10 hidden w-[55%] overflow-hidden lg:block lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')",
            }}
          />

          {/* Voiles */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/70 via-[#0A2540]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2D]/70 via-transparent to-transparent" />
        </div>

        {/* Points décoratifs */}
        <div
          className="pointer-events-none absolute bottom-28 right-10 -z-10 hidden h-24 w-24 [background-image:radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:10px_10px] opacity-50 lg:block"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl lg:max-w-[46%]"
          >
            <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
                aria-hidden="true"
              />
              Nos domaines d’intervention
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Des solutions{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                adaptées
              </span>{" "}
              à vos projets
            </h1>

            <span
              className="mt-7 block h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
              aria-hidden="true"
            />

            <p className="mt-7 max-w-2xl leading-8 text-slate-300 sm:text-lg">
              Explorez les catégories de services présentées par BTP Pro.
              Chaque projet nécessite une analyse adaptée à ses besoins,
              ses contraintes et ses objectifs.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-amber-500 py-4 pl-8 pr-4 font-bold text-[#0A2540] shadow-2xl shadow-amber-500/30 ring-1 ring-amber-300/50 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-amber-400/40"
            >
              Présenter mon projet
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A2540] text-amber-400 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={19} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bas en escalier */}
        <svg
          className="pointer-events-none absolute inset-x-0 -bottom-px h-14 w-full text-white sm:h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 100V84H288V68H576V52H864V36H1152V20H1440V100Z"
            fill="currentColor"
          />
        </svg>

        {/* Arêtes ambre sur les marches */}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full sm:h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 84H288V68H576V52H864V36H1152V20H1440"
            fill="none"
            stroke="#fbbf24"
            strokeOpacity="0.7"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </section>

      {/* SERVICES */}
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
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                aria-hidden="true"
              />
              Ce que nous proposons
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-l from-amber-500 to-amber-300"
                aria-hidden="true"
              />
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl lg:text-5xl">
              Nos services
            </h2>

            <p className="mt-4 leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Des domaines à adapter aux compétences, aux moyens et aux
              prestations réellement proposés par l’entreprise.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative h-full rounded-2xl bg-gradient-to-br from-amber-200/70 via-slate-200 to-[#0A2540]/20 p-px shadow-sm transition-all duration-300 hover:from-amber-400 hover:via-amber-300 hover:to-[#0A2540]/40 hover:shadow-2xl hover:shadow-amber-500/15"
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem-1px)] bg-white p-7 sm:p-8">
                    {/* Halo au survol */}
                    <div
                      className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-amber-400/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="relative flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0A2540] to-[#12395c] text-amber-400 shadow-lg shadow-[#0A2540]/25 ring-1 ring-amber-400/30 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
                        <Icon size={27} strokeWidth={1.7} />
                      </div>

                      <span className="text-3xl font-black tracking-widest text-slate-200 transition-colors duration-300 group-hover:text-amber-300">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="relative mt-7 text-xl font-bold tracking-tight text-[#0A2540]">
                      {service.title}
                    </h3>

                    <span
                      className="relative mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                      aria-hidden="true"
                    />

                    <p className="relative mt-4 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <ul className="relative mt-5 space-y-3">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-slate-600"
                        >
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500 ring-4 ring-amber-100" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="relative mt-auto inline-flex items-center justify-between gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-[#0A2540] transition-colors duration-300 hover:text-amber-600"
                    >
                      <span className="mt-7 inline-flex items-center gap-2">
                        Demander des informations
                      </span>

                      <span className="mt-7 flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2540] text-amber-400 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-amber-500 group-hover:text-[#0A2540]">
                        <ArrowRight size={16} />
                      </span>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-5 py-20">
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
            <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
                aria-hidden="true"
              />
              Votre projet
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Parlons de vos besoins
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Contactez-nous pour présenter votre projet et vérifier les
              prestations qui correspondent à votre demande.
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