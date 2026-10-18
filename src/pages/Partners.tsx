import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Handshake,
  Network,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const collaborationTypes = [
  {
    icon: Building2,
    title: "Clients",
    description:
      "Des particuliers, des entreprises ou des organisations ayant des besoins en bâtiment et en travaux publics.",
  },
  {
    icon: Network,
    title: "Partenaires techniques",
    description:
      "Des bureaux d’études, des fournisseurs et des professionnels pouvant intervenir selon les besoins du projet.",
  },
  {
    icon: Handshake,
    title: "Collaborateurs",
    description:
      "Des intervenants qui contribuent à la préparation, à l’organisation et à la réalisation des projets.",
  },
];

export default function Partners() {
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

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
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
              Construire ensemble
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Clients et{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                partenaires
              </span>
            </h1>

            <span
              className="mt-7 block h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
              aria-hidden="true"
            />

            <p className="mt-7 max-w-2xl leading-8 text-slate-300 sm:text-lg">
              Les projets de construction nécessitent des échanges clairs
              et une bonne coordination entre les différentes parties
              prenantes.
            </p>
          </motion.div>

          {/* Pont à haubans */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            {/* Équerres décoratives */}
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-tr-3xl border-r-2 border-t-2 border-amber-400/60" />
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-bl-3xl border-b-2 border-l-2 border-amber-400/60" />

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-white/5 to-[#0A2540]/40 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur-xl">
              {/* Trame interne */}
              <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

              <svg
                viewBox="0 0 480 320"
                className="relative block w-full"
                fill="none"
              >
                <defs>
                  <radialGradient id="partners-sun" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.05" />
                  </radialGradient>
                </defs>

                {/* Soleil */}
                <circle cx="400" cy="72" r="46" fill="url(#partners-sun)" />
                <circle cx="400" cy="72" r="22" fill="#fbbf24" fillOpacity="0.85" />

                {/* Haubans pylône gauche */}
                <g stroke="#fbbf24" strokeOpacity="0.6" strokeWidth="1.2">
                  <line x1="150" y1="62" x2="20" y2="216" />
                  <line x1="150" y1="62" x2="60" y2="216" />
                  <line x1="150" y1="62" x2="100" y2="216" />
                  <line x1="150" y1="62" x2="200" y2="216" />
                  <line x1="150" y1="62" x2="240" y2="216" />
                </g>

                {/* Haubans pylône droit */}
                <g stroke="#fbbf24" strokeOpacity="0.6" strokeWidth="1.2">
                  <line x1="330" y1="62" x2="240" y2="216" />
                  <line x1="330" y1="62" x2="280" y2="216" />
                  <line x1="330" y1="62" x2="380" y2="216" />
                  <line x1="330" y1="62" x2="420" y2="216" />
                  <line x1="330" y1="62" x2="460" y2="216" />
                </g>

                {/* Pylônes */}
                <g fill="#ffffff" fillOpacity="0.28" stroke="#ffffff" strokeOpacity="0.45">
                  <rect x="143" y="52" width="14" height="168" rx="3" />
                  <rect x="323" y="52" width="14" height="168" rx="3" />
                </g>

                {/* Tablier */}
                <rect x="0" y="216" width="480" height="12" fill="#ffffff" fillOpacity="0.22" />
                <line
                  x1="0"
                  y1="216"
                  x2="480"
                  y2="216"
                  stroke="#fbbf24"
                  strokeOpacity="0.85"
                  strokeWidth="2"
                />

                {/* Piles */}
                <g fill="#ffffff" fillOpacity="0.16">
                  <rect x="141" y="228" width="18" height="60" />
                  <rect x="321" y="228" width="18" height="60" />
                </g>

                {/* Plan d'eau */}
                <g stroke="#ffffff" strokeOpacity="0.22" strokeLinecap="round">
                  <line x1="30" y1="266" x2="450" y2="266" strokeDasharray="14 10" />
                  <line x1="70" y1="282" x2="410" y2="282" strokeDasharray="10 12" />
                  <line x1="110" y1="298" x2="370" y2="298" strokeDasharray="8 14" />
                </g>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Vague en bas */}
        <svg
          className="pointer-events-none absolute inset-x-0 -bottom-px h-14 w-full text-white sm:h-20"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 60C180 20 360 100 540 60S900 20 1080 60S1260 100 1440 60V100H0Z"
            fill="currentColor"
          />
        </svg>

        {/* Trait ambre le long de la vague */}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full sm:h-20"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 60C180 20 360 100 540 60S900 20 1080 60S1260 100 1440 60"
            fill="none"
            stroke="#fbbf24"
            strokeOpacity="0.65"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </section>
      {/* LA COLLABORATION */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:py-28">
        {/* Halo décoratif */}
        <div
          className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-amber-400/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                aria-hidden="true"
              />
              La collaboration
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0A2540] sm:text-4xl lg:text-5xl">
              Des relations fondées sur la confiance et la communication
            </h2>

            <p className="mt-6 leading-8 text-slate-600 sm:text-lg">
              Un projet bien organisé repose sur la compréhension des
              besoins, le partage des informations et la coordination
              des intervenants.
            </p>

            <p className="relative mt-5 border-l-2 border-amber-400 pl-4 leading-8 text-slate-600">
              Cette page pourra présenter les clients, les fournisseurs,
              les partenaires et les références réels de BTP Pro, avec
              leur autorisation lorsque cela est nécessaire.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#0A2540] py-3 pl-7 pr-3 font-bold text-white shadow-xl shadow-[#0A2540]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12395c] hover:shadow-2xl hover:shadow-[#0A2540]/30"
            >
              Prendre contact
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-[#0A2540] transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={19} />
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Cadre décoratif décalé */}
            <div
              className="absolute -right-4 -top-4 h-full w-full rounded-2xl border-2 border-amber-400/60 sm:-right-5 sm:-top-5"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl [background-image:radial-gradient(#0A2540_1px,transparent_1px)] [background-size:12px_12px] opacity-30"
              aria-hidden="true"
            />

            <div className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-[#0A2540]/25 ring-1 ring-[#0A2540]/10">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                alt="Échange professionnel autour d'un projet"
                loading="lazy"
                className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[420px]"
              />

              {/* Voile léger */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="absolute -bottom-6 -left-3 hidden rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-5 text-[#0A2540] shadow-2xl shadow-amber-500/30 ring-1 ring-amber-300/60 sm:block">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A2540] text-amber-400 shadow-lg shadow-[#0A2540]/30">
                <Handshake size={26} />
              </span>
              <p className="mt-3 font-bold">Travailler ensemble</p>
              <p className="mt-1 text-sm">Échanger et coordonner</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LES ACTEURS */}
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
              Nos relations professionnelles
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-l from-amber-500 to-amber-300"
                aria-hidden="true"
              />
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl lg:text-5xl">
              Les acteurs de nos projets
            </h2>

            <p className="mt-4 leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Les catégories suivantes illustrent les types de relations
              qui peuvent exister autour d’un projet de construction.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {collaborationTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
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
                      {item.title}
                    </h3>

                    <span
                      className="relative mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                      aria-hidden="true"
                    />

                    <p className="relative mt-4 text-sm leading-7 text-slate-600">
                      {item.description}
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
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#12395c] p-8 text-white shadow-2xl shadow-[#0A2540]/30 ring-1 ring-white/10 sm:p-12">
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

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 ring-1 ring-amber-400/40">
                <ShieldCheck size={30} className="text-amber-400" />
              </span>

              <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Vous souhaitez collaborer avec BTP Pro ?
              </h2>

              <span
                className="mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
                aria-hidden="true"
              />

              <p className="mt-4 leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Présentez votre entreprise ou votre projet afin d’échanger
                sur les possibilités de collaboration.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-amber-500 py-4 pl-8 pr-4 font-bold text-[#0A2540] shadow-2xl shadow-amber-500/30 ring-1 ring-amber-300/50 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-amber-400/40"
            >
              Nous contacter
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-amber-400 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={19} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}