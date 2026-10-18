
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="min-h-[60vh] bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-[#0A2540]">
            Projet introuvable
          </h1>
          <p className="mt-4 text-slate-600">
            Ce projet n'existe pas ou n'est plus disponible.
          </p>
          <Link
            to="/realisations"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0A2540] px-5 py-3 font-semibold text-white transition hover:bg-amber-500 hover:text-[#0A2540]"
          >
            <ArrowLeft size={18} />
            Voir toutes les réalisations
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <section className="bg-[#0A2540] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/realisations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Toutes les réalisations
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 max-w-3xl"
          >
            <span className="inline-block rounded-full bg-amber-400/15 px-4 py-2 text-sm font-semibold text-amber-300">
              {project.category}
            </span>

            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 flex items-center gap-2 text-slate-300">
              <MapPin size={19} className="text-amber-400" />
              {project.location}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl bg-slate-100"
          >
            <img
              src={project.image}
              alt={project.title}
              className="max-h-[650px] w-full object-cover"
            />
          </motion.div>

          <div className="mx-auto mt-10 max-w-4xl">
            <h2 className="text-2xl font-extrabold text-[#0A2540] sm:text-3xl">
              À propos du projet
            </h2>

            <p className="mt-5 whitespace-pre-line text-base leading-8 text-slate-600">
              {project.description}
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#0A2540]">
                Vous avez un projet similaire ?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Contactez BTP Pro pour discuter de votre besoin et demander
                un devis adapté à votre projet.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-3 rounded-lg bg-amber-500 px-6 py-3 font-bold text-[#0A2540] transition hover:bg-amber-400"
              >
                Demander un devis
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
