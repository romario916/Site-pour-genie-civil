
import { motion } from "framer-motion";
import { ArrowLeft, FileText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Éditeur du site",
    content:
      "Nom commercial : BTP Pro. La raison sociale, la forme juridique, l’adresse du siège, les coordonnées téléphoniques et l’adresse e-mail officielle restent à compléter avec les informations vérifiées de l’entreprise.",
  },
  {
    title: "2. Responsable de publication",
    content:
      "Le nom du responsable de publication doit être renseigné par l’entreprise avant la mise en ligne du site.",
  },
  {
    title: "3. Hébergement",
    content:
      "Le nom de l’hébergeur, son adresse et ses coordonnées doivent être ajoutés après le choix définitif de la solution d’hébergement.",
  },
  {
    title: "4. Propriété intellectuelle",
    content:
      "Les textes, éléments graphiques, logos, photographies et autres contenus du site peuvent être protégés par les règles applicables de propriété intellectuelle. L’entreprise doit vérifier qu’elle dispose des droits nécessaires sur les contenus publiés.",
  },
  {
    title: "5. Photographies et réalisations",
    content:
      "Les photographies d’illustration et les exemples de projets doivent être clairement distingués des réalisations réellement effectuées par l’entreprise. Les images et logos de tiers ne doivent être utilisés que dans le respect des droits et autorisations applicables.",
  },
  {
    title: "6. Données personnelles",
    content:
      "Le formulaire de contact présenté sur ce site fonctionne actuellement dans le navigateur et ne transmet pas les demandes à un serveur. Avant d’activer une collecte réelle, l’entreprise devra préciser les finalités du traitement, les destinataires, la durée de conservation et les modalités d’exercice des droits des personnes concernées, conformément aux règles applicables.",
  },
  {
    title: "7. Cookies et services externes",
    content:
      "Le site peut charger des ressources externes, notamment des photographies hébergées par des services tiers. Les services réellement utilisés, les éventuels cookies et les obligations d’information correspondantes devront être vérifiés avant la publication.",
  },
  {
    title: "8. Limitation et exactitude des informations",
    content:
      "Les informations présentées sur le site doivent être vérifiées et mises à jour par l’entreprise. Les descriptions de services, références, qualifications et coordonnées ne doivent pas induire les visiteurs en erreur.",
  },
  {
    title: "9. Contact",
    content:
      "Pour toute question concernant le site, les visiteurs pourront utiliser les coordonnées officielles de BTP Pro, à compléter avant la mise en ligne.",
  },
];

export default function Legal() {
  return (
    <main className="bg-white">
      <section className="bg-[#0A2540] px-5 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500 text-[#0A2540]">
              <FileText size={28} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              Informations juridiques
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Mentions légales
            </h1>

            <p className="mt-6 leading-8 text-slate-300">
              Cette page rassemble les rubriques à compléter pour
              présenter les informations légales du site BTP Pro.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-xl border border-slate-200 bg-slate-50 p-6">
            <ShieldCheck size={28} className="text-amber-600" />

            <h2 className="mt-4 text-lg font-bold text-[#0A2540]">
              À vérifier avant publication
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Ce modèle est une base de travail. Il doit être adapté à
              l’entreprise, à son pays d’établissement et aux services
              réellement utilisés par le site.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0A2540] hover:text-amber-600"
            >
              Page Contact
              <ArrowLeft size={16} />
            </Link>
          </aside>

          <div>
            <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm leading-7 text-[#0A2540]">
                <strong>Attention :</strong> les informations ci-dessous
                sont un modèle non finalisé. Complète les informations
                manquantes et fais vérifier les mentions applicables avant
                la mise en ligne. Cette page ne constitue pas un avis
                juridique.
              </p>
            </div>

            <div className="divide-y divide-slate-200">
              {sections.map((section, index) => (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="py-7 first:pt-0"
                >
                  <h2 className="text-xl font-bold text-[#0A2540]">
                    {section.title}
                  </h2>

                  <p className="mt-3 text-sm leading-8 text-slate-600">
                    {section.content}
                  </p>
                </motion.section>
              ))}
            </div>

            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#0A2540] px-6 py-4 font-bold text-white transition hover:bg-slate-800"
            >
              <ArrowLeft size={18} />
              Retour à l’accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
