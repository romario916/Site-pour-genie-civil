import { motion } from "framer-motion";
import {
  ArrowRight,
  HardHat,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Users,
    title: "Esprit d’équipe",
    description:
      "La coordination et les échanges contribuent au bon déroulement d’un projet.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité et sécurité",
    description:
      "La qualité du travail et la prévention des risques sont des points essentiels sur un chantier.",
  },
  {
    icon: Wrench,
    title: "Compétences techniques",
    description:
      "Chaque intervention doit correspondre aux besoins du projet et aux compétences des professionnels mobilisés.",
  },
];

export default function Team() {
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
          className="pointer-events-none absolute -right-20 top-10 -z-10 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#12395c]/60 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
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
              Les personnes derrière les projets
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Notre{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                équipe
              </span>
            </h1>

            <span
              className="mt-7 block h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
              aria-hidden="true"
            />

            <p className="mt-7 max-w-2xl leading-8 text-slate-300 sm:text-lg">
              Un projet de construction demande de l’organisation, de la
              communication et des compétences adaptées à chaque étape.
              Découvrez les principes qui guident le travail collectif.
            </p>
          </motion.div>

          {/* Constellation d'équipe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto hidden aspect-square w-full max-w-[400px] lg:block"
            aria-hidden="true"
          >
            {/* Halo central */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/20 blur-3xl" />

            {/* Anneaux d'orbite */}
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-[15%] rounded-full border border-dashed border-amber-400/30" />

            {/* Fils de connexion */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <g
                stroke="#fbbf24"
                strokeOpacity="0.45"
                strokeWidth="1"
                strokeDasharray="3 4"
                vectorEffect="non-scaling-stroke"
              >
                <line x1="50" y1="50" x2="50" y2="0" vectorEffect="non-scaling-stroke" />
                <line x1="50" y1="50" x2="93.3" y2="75" vectorEffect="non-scaling-stroke" />
                <line x1="50" y1="50" x2="6.7" y2="75" vectorEffect="non-scaling-stroke" />
                <line x1="50" y1="50" x2="80.3" y2="32.5" vectorEffect="non-scaling-stroke" />
                <line x1="50" y1="50" x2="19.7" y2="32.5" vectorEffect="non-scaling-stroke" />
              </g>
            </svg>

            {/* Cercle central */}
            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-2xl shadow-amber-500/40 ring-8 ring-amber-400/15">
              <Users size={52} strokeWidth={1.5} className="text-[#0A2540]" />
            </div>

            {/* Satellites */}
            <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/15 bg-[#0A2540]/80 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur-xl">
              <HardHat size={28} strokeWidth={1.6} className="text-amber-400" />
            </div>

            <div className="absolute left-[93.3%] top-[75%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur-xl">
              <ShieldCheck size={28} strokeWidth={1.6} className="text-amber-400" />
            </div>

            <div className="absolute left-[6.7%] top-[75%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur-xl">
              <Wrench size={28} strokeWidth={1.6} className="text-amber-400" />
            </div>

            <div className="absolute left-[80.3%] top-[32.5%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-xl shadow-amber-500/30 ring-1 ring-amber-300/60">
              <Users size={22} strokeWidth={1.8} className="text-[#0A2540]" />
            </div>

            <div className="absolute left-[19.7%] top-[32.5%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-amber-400/40 bg-[#0A2540]/80 shadow-xl shadow-black/40 backdrop-blur-xl">
              <Users size={22} strokeWidth={1.8} className="text-amber-300" />
            </div>
          </motion.div>
        </div>

        {/* Arc en dôme en bas */}
        <svg
          className="pointer-events-none absolute inset-x-0 -bottom-px h-14 w-full text-white sm:h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 100V70C360 0 1080 0 1440 70V100Z"
            fill="currentColor"
          />
        </svg>

        {/* Trait ambre le long de l'arc */}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full sm:h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 70C360 0 1080 0 1440 70"
            fill="none"
            stroke="#fbbf24"
            strokeOpacity="0.65"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </section>

      {/* NOTRE APPROCHE */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:py-28">
        {/* Halo décoratif */}
        <div
          className="pointer-events-none absolute -right-40 top-20 h-[28rem] w-[28rem] rounded-full bg-amber-400/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
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
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
                alt="Professionnels travaillant sur un chantier de construction"
                loading="lazy"
                className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[440px]"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pt-6 lg:pt-0"
          >
            <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                aria-hidden="true"
              />
              Notre approche
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0A2540] sm:text-4xl lg:text-5xl">
              La réussite d’un projet repose aussi sur la collaboration
            </h2>

            <p className="mt-6 leading-8 text-slate-600 sm:text-lg">
              La préparation, la coordination des intervenants et le suivi
              des étapes permettent de mieux organiser un projet de
              construction.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              BTP Pro peut présenter ici son organisation, ses responsables
              et les professionnels qui interviennent réellement sur ses
              projets.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
              {/* Liseré ambre */}
              <span
                className="absolute inset-y-5 left-0 w-1 rounded-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600"
                aria-hidden="true"
              />

              <p className="pl-2 font-bold text-[#0A2540]">
                Une présentation fidèle à l’entreprise
              </p>

              <p className="mt-2 pl-2 text-sm leading-7 text-slate-600">
                Les noms, fonctions, qualifications et portraits des membres
                seront ajoutés lorsque les informations réelles seront
                disponibles.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALEURS */}
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
              Nos principes de travail
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-l from-amber-500 to-amber-300"
                aria-hidden="true"
              />
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl lg:text-5xl">
              Les valeurs de notre équipe
            </h2>

            <p className="mt-4 leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Des principes à adapter aux pratiques et aux engagements réels
              de BTP Pro.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
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
                      <Icon size={27} strokeWidth={1.7} />
                    </div>

                    <h3 className="relative mt-6 text-xl font-bold tracking-tight text-[#0A2540]">
                      {value.title}
                    </h3>

                    <span
                      className="relative mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                      aria-hidden="true"
                    />

                    <p className="relative mt-4 text-sm leading-7 text-slate-600">
                      {value.description}
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
              Vous souhaitez collaborer avec BTP Pro ?
            </h2>

            <span
              className="mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
              aria-hidden="true"
            />

            <p className="mt-4 max-w-xl leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Contactez-nous pour présenter votre projet et échanger sur
              vos besoins.
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