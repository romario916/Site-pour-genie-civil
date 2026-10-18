import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  HardHat,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import ServiceCard from "../components/home/ServiceCard";
import ProjectCard from "../components/home/ProjectCard";

import { services } from "../data/services";
import { projects } from "../data/projects";

const homeServices = services.slice(0, 4);
const featuredProjects = projects.slice(0, 3);

const commitments = [
  "Une préparation adaptée aux besoins du projet",
  "Une attention portée à la sécurité du chantier",
  "Une communication claire à chaque étape",
  "Un suivi attentif de la qualité des travaux",
];

export default function Home() {
  return (
    <>
      <Hero />

      <Stats />

      {/* Services */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 sm:py-28">
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

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                <span
                  className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                  aria-hidden="true"
                />
                Nos domaines d'intervention
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl lg:text-5xl">
                Des solutions adaptées à vos projets
              </h2>

              <p className="mt-5 leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Chaque projet mérite une approche structurée, de la
                préparation initiale au suivi des travaux.
              </p>
            </div>

            <Link
              to="/services"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-[#0A2540]/15 bg-white px-6 py-3 font-bold text-[#0A2540] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-600 hover:shadow-lg hover:shadow-amber-500/10"
            >
              Tous nos services
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0A2540] text-white transition-all duration-300 group-hover:bg-amber-500 group-hover:text-[#0A2540]">
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="transition-transform duration-300 hover:-translate-y-1.5"
              >
                <ServiceCard
                  icon={service.icon}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        {/* Halo décoratif */}
        <div
          className="pointer-events-none absolute -right-40 top-20 h-[28rem] w-[28rem] rounded-full bg-amber-400/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Cadre décoratif décalé */}
            <div
              className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-amber-400/60 sm:-left-5 sm:-top-5"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-[#0A2540]/10 [background-image:radial-gradient(#0A2540_1px,transparent_1px)] [background-size:12px_12px] opacity-30"
              aria-hidden="true"
            />

            <div className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-[#0A2540]/25 ring-1 ring-[#0A2540]/10">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
                alt="Architecture et conception de bâtiment"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Voile léger */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="absolute -bottom-6 right-4 flex max-w-xs items-center gap-4 rounded-2xl border border-white/10 bg-[#0A2540]/95 p-5 text-white shadow-2xl shadow-[#0A2540]/40 backdrop-blur-md sm:-right-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 ring-1 ring-amber-400/40">
                <ShieldCheck
                  className="text-amber-400"
                  size={26}
                />
              </div>

              <p className="text-sm font-semibold leading-6">
                La rigueur technique au service de vos projets.
              </p>
            </div>
          </motion.div>

          <div className="pt-8 lg:pt-0">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                aria-hidden="true"
              />
              À propos de BTP Pro
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0A2540] sm:text-4xl lg:text-5xl">
              Bâtir avec méthode, avancer avec confiance.
            </h2>

            <p className="mt-6 leading-8 text-slate-600 sm:text-lg">
              BTP Pro souhaite accompagner les particuliers, les entreprises
              et les porteurs de projets dans leurs besoins en bâtiment et
              génie civil à Madagascar.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Notre approche met l'accent sur la préparation, le suivi
              technique, la communication et la prise en compte des exigences
              propres à chaque chantier.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {commitments.map((commitment) => (
                <li
                  key={commitment}
                  className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm leading-6 text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-400/30 transition-colors duration-300 group-hover:bg-amber-500">
                    <CheckCircle2
                      size={18}
                      className="text-amber-600 transition-colors duration-300 group-hover:text-[#0A2540]"
                    />
                  </span>

                  <span className="pt-1">{commitment}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/a-propos"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#0A2540] py-3 pl-7 pr-3 font-semibold text-white shadow-xl shadow-[#0A2540]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12395c] hover:shadow-2xl hover:shadow-[#0A2540]/30"
            >
              Découvrir BTP Pro
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-[#0A2540] transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 sm:py-28">
        {/* Trame de plan technique */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]"
          aria-hidden="true"
        />

        {/* Halo décoratif */}
        <div
          className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-[#0A2540]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                aria-hidden="true"
              />
              Nos réalisations
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl lg:text-5xl">
              Des idées aux ouvrages
            </h2>

            <p className="mt-5 leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Découvrez les exemples visuels de projets qui peuvent être
              présentés dans le portfolio de BTP Pro.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="transition-transform duration-300 hover:-translate-y-1.5"
              >
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  location={project.location}
                  image={project.image}
                  description={project.description}
                />
              </motion.div>
            ))}
          </div>

          <p className="mt-8 border-l-2 border-amber-400 pl-4 text-xs leading-6 text-slate-500">
            Les visuels et fiches présentés sont des exemples. Ils ne
            constituent pas des preuves de réalisations effectuées par
            BTP Pro.
          </p>

          <div className="mt-12 text-center">
            <Link
              to="/realisations"
              className="group inline-flex items-center gap-3 rounded-full border border-[#0A2540] bg-white py-3 pl-7 pr-3 font-semibold text-[#0A2540] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A2540] hover:text-white hover:shadow-xl hover:shadow-[#0A2540]/20"
            >
              Explorer les réalisations
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A2540] text-white transition-all duration-300 group-hover:bg-amber-500 group-hover:text-[#0A2540]">
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#12395c] py-20 sm:py-28">
        {/* Trame discrète */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          aria-hidden="true"
        />

        {/* Halos */}
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-[#12395c]/60 blur-3xl"
          aria-hidden="true"
        />

        {/* Cercles décoratifs */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
        <div className="absolute -right-2 -top-2 h-24 w-24 rounded-full border border-amber-400/30" />

        {/* Ligne lumineuse en haut */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
                aria-hidden="true"
              />
              Votre prochain projet
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Parlons ensemble de votre projet de construction.
            </h2>

            <p className="mt-5 leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Décrivez votre besoin à notre équipe pour préparer une première
              discussion autour de votre projet et de ses contraintes.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-amber-500 py-4 pl-8 pr-4 font-bold text-[#0A2540] shadow-2xl shadow-amber-500/30 ring-1 ring-amber-300/50 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-amber-400/40"
          >
            Demander un devis
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-amber-400 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={19} />
            </span>
          </Link>
        </div>
      </section>

      {/* Bandeau final */}
      <section className="relative bg-white py-10">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 font-medium text-slate-600 shadow-sm">
            <MapPinned size={17} className="text-amber-600" />
            Madagascar
          </span>

          <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 font-medium text-slate-600 shadow-sm">
            <HardHat size={17} className="text-amber-600" />
            Bâtiment · Génie civil · Travaux publics
          </span>
        </div>
      </section>
    </>
  );
}