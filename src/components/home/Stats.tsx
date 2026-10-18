import { motion } from "framer-motion";
import { ClipboardCheck, HardHat, Ruler, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Ruler,
    title: "Étude",
    description: "Analyse des besoins et préparation des projets",
  },
  {
    icon: ClipboardCheck,
    title: "Planification",
    description: "Organisation des étapes et des ressources",
  },
  {
    icon: HardHat,
    title: "Réalisation",
    description: "Suivi rigoureux des travaux",
  },
  {
    icon: ShieldCheck,
    title: "Qualité",
    description: "Attention portée à la sécurité et aux finitions",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-slate-50/60 to-white py-14 sm:py-20">
      {/* Trame de plan technique */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Halos décoratifs */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#0A2540]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Fil conducteur entre les étapes (grand écran) */}
        <div
          className="pointer-events-none absolute inset-x-[12.5%] top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent lg:block"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-gradient-to-br from-amber-200/70 via-slate-200 to-[#0A2540]/20 p-px shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:from-amber-400 hover:via-amber-300 hover:to-[#0A2540]/40 hover:shadow-2xl hover:shadow-amber-500/15"
              >
                <div className="relative flex h-full gap-4 overflow-hidden rounded-[calc(1rem-1px)] bg-white p-6">
                  {/* Halo au survol */}
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-amber-400/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  {/* Numéro en filigrane */}
                  <span
                    className="pointer-events-none absolute -bottom-3 right-3 select-none text-7xl font-black text-slate-100 transition-colors duration-300 group-hover:text-amber-100"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>

                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0A2540] to-[#12395c] text-amber-400 shadow-lg shadow-[#0A2540]/25 ring-1 ring-amber-400/30 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
                    <Icon size={24} />
                  </div>

                  <div className="relative">
                    <h2 className="font-bold tracking-tight text-[#0A2540]">
                      {stat.title}
                    </h2>

                    <span
                      className="mt-2 block h-1 w-8 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                      aria-hidden="true"
                    />

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}