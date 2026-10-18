import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { company } from "../data/company";

const projectTypes = [
  "Construction de bâtiment",
  "Travaux publics",
  "Étude et préparation",
  "Suivi de chantier",
  "Rénovation",
  "Autre demande",
];

const budgets = [
  "À définir",
  "Moins de 5 millions Ar",
  "5 à 20 millions Ar",
  "20 à 50 millions Ar",
  "Plus de 50 millions Ar",
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100";

const labelClass =
  "mb-2 block text-sm font-semibold text-[#0A2540]";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    location: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const whatsappPhone = company.whatsapp.replace(/\D/g, "");

    if (!whatsappPhone) {
      setError(
        "Le numéro WhatsApp de l'entreprise n'est pas configuré."
      );
      return;
    }

    const whatsappMessage = [
      "Bonjour BTP Pro, je souhaite demander un devis.",
      "",
      "INFORMATIONS DU CLIENT",
      `Nom : ${form.name}`,
      `Email : ${form.email || "Non renseigné"}`,
      `Téléphone : ${form.phone}`,
      "",
      "DÉTAILS DU PROJET",
      `Type de projet : ${form.projectType}`,
      `Budget estimé : ${form.budget || "À définir"}`,
      `Lieu du projet : ${form.location || "Non renseigné"}`,
      "",
      "Description du projet :",
      form.message,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const contactItems = [
    {
      icon: Phone,
      title: "Téléphone",
      value: company.phone,
      href: company.phone
        ? `tel:${company.phone.replace(/\s/g, "")}`
        : "",
      description: "Contactez-nous directement.",
    },
    {
      icon: Mail,
      title: "Email",
      value: company.email,
      href: company.email ? `mailto:${company.email}` : "",
      description: "Envoyez-nous votre demande.",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: company.address,
      href: company.mapsUrl,
      description: "Consultez notre localisation sur Google Maps.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#071A2D] via-[#0A2540] to-[#12395c] px-4 pb-28 pt-20 text-white sm:pb-36 sm:pt-28">
        {/* Trame de plan technique */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_left,black,transparent_70%)]"
          aria-hidden="true"
        />

        {/* Halos */}
        <div className="absolute -right-20 top-10 -z-10 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />
        <div
          className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#12395c]/60 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-300 shadow-lg shadow-black/20 backdrop-blur-md">
              <MessageCircle size={16} />
              Parlons de votre projet
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Construisons votre projet{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                ensemble.
              </span>
            </h1>

            <span
              className="mt-7 block h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-amber-200"
              aria-hidden="true"
            />

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Vous avez un projet de construction, de rénovation ou de
              travaux publics ? Contactez BTP Pro pour discuter de vos
              besoins et demander un devis.
            </p>

            <a
              href="#contact-form"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-amber-500 py-4 pl-8 pr-4 font-bold text-[#0A2540] shadow-2xl shadow-amber-500/30 ring-1 ring-amber-300/50 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-amber-400/40"
            >
              Demander un devis
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A2540] text-amber-400 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={19} />
              </span>
            </a>
          </motion.div>

          {/* Conversation stylisée */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto hidden w-full max-w-md lg:block"
            aria-hidden="true"
          >
            {/* Halo derrière la conversation */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/15 blur-3xl" />

            {/* Équerres décoratives */}
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-tr-3xl border-r-2 border-t-2 border-amber-400/60" />
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-bl-3xl border-b-2 border-l-2 border-amber-400/60" />

            {/* Fenêtre de conversation */}
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-white/5 to-[#0A2540]/40 p-6 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur-xl">
              {/* Trame interne */}
              <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

              {/* En-tête de la fenêtre */}
              <div className="relative flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-600 shadow-lg shadow-amber-500/30">
                  <MessageCircle size={20} className="text-[#0A2540]" />
                </span>
                <div className="space-y-2">
                  <div className="h-2.5 w-28 rounded-full bg-white/40" />
                  <div className="h-2 w-16 rounded-full bg-white/20" />
                </div>
                <span className="ml-auto h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_2px_rgba(251,191,36,0.7)]" />
              </div>

              {/* Messages */}
              <div className="relative mt-6 space-y-4">
                {/* Message reçu */}
                <div className="max-w-[78%] rounded-2xl rounded-bl-sm border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <div className="space-y-2">
                    <div className="h-2.5 w-full rounded-full bg-white/35" />
                    <div className="h-2.5 w-4/5 rounded-full bg-white/25" />
                  </div>
                </div>

                {/* Message envoyé */}
                <div className="ml-auto max-w-[78%] rounded-2xl rounded-br-sm bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 p-4 shadow-xl shadow-amber-500/25">
                  <div className="space-y-2">
                    <div className="h-2.5 w-full rounded-full bg-[#0A2540]/55" />
                    <div className="h-2.5 w-3/5 rounded-full bg-[#0A2540]/35" />
                  </div>
                </div>

                {/* Message reçu */}
                <div className="max-w-[60%] rounded-2xl rounded-bl-sm border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <div className="space-y-2">
                    <div className="h-2.5 w-full rounded-full bg-white/35" />
                    <div className="h-2.5 w-2/3 rounded-full bg-white/25" />
                  </div>
                </div>

                {/* Indicateur de saisie */}
                <div className="ml-auto flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-[#0A2540]/70 px-4 py-2.5">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-amber-400 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-amber-400 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-amber-400" />
                </div>
              </div>
            </div>

            {/* Pastille téléphone flottante */}
            <div className="absolute -left-8 top-16 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[#0A2540]/90 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur-xl">
              <Phone size={26} strokeWidth={1.6} className="text-amber-400" />
            </div>

            {/* Pastille e-mail flottante */}
            <div className="absolute -right-6 bottom-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-2xl shadow-amber-500/30 ring-1 ring-amber-300/60">
              <Mail size={26} strokeWidth={1.6} className="text-[#0A2540]" />
            </div>

            {/* Points décoratifs */}
            <div className="absolute -bottom-6 right-10 h-20 w-20 [background-image:radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:10px_10px] opacity-40" />
          </motion.div>
        </div>

        {/* Bas : pointe qui descend vers le formulaire */}
        <svg
          className="pointer-events-none absolute inset-x-0 -bottom-px h-14 w-full text-slate-50 sm:h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 40H650L720 96L790 40H1440V100H0Z"
            fill="currentColor"
          />
        </svg>

        {/* Trait ambre le long de la pointe */}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full sm:h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 40H650L720 96L790 40H1440"
            fill="none"
            stroke="#fbbf24"
            strokeOpacity="0.65"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </section>

      {/* CONTACT ET FORMULAIRE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 py-16 sm:py-24">
        {/* Trame de plan technique */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
          aria-hidden="true"
        />

        {/* Halos décoratifs */}
        <div
          className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#0A2540]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* INFORMATIONS */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              <span
                className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                aria-hidden="true"
              />
              Nos coordonnées
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0A2540] sm:text-4xl">
              Restons en contact
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Notre équipe est disponible pour échanger avec vous sur
              vos besoins et vous orienter vers une solution adaptée.
            </p>

            <div className="mt-8 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                if (!item.value || !item.href) {
                  return null;
                }

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={
                      item.title === "Localisation" ? "_blank" : undefined
                    }
                    rel={
                      item.title === "Localisation"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10"
                  >
                    {/* Liseré ambre au survol */}
                    <span
                      className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-300 to-amber-500 transition-transform duration-300 group-hover:scale-y-100"
                      aria-hidden="true"
                    />

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-100 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-amber-500/30">
                      <Icon size={23} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-bold text-[#0A2540]">
                        {item.title}
                      </span>
                      <span className="mt-1 block break-words font-semibold text-slate-700">
                        {item.value}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-slate-500">
                        {item.description}
                      </span>
                      {item.title === "Localisation" && (
                        <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-amber-600">
                          Ouvrir Google Maps
                          <ArrowRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      )}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* DISPONIBILITÉ */}
            <div className="relative mt-6 flex items-start gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#12395c] p-6 text-white shadow-2xl shadow-[#0A2540]/25 ring-1 ring-white/10">
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-400/15 blur-3xl"
                aria-hidden="true"
              />

              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 ring-1 ring-amber-400/40">
                <Clock size={22} />
              </span>
              <div className="relative">
                <h3 className="font-bold">Parlons de votre projet</h3>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Envoyez votre demande via le formulaire. Elle sera
                  préparée dans WhatsApp pour vous permettre de la vérifier
                  avant l'envoi.
                </p>
              </div>
            </div>

            {/* LIEN GOOGLE MAPS */}
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-3 rounded-full border border-[#0A2540]/15 bg-white px-6 py-3 font-bold text-[#0A2540] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-600 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <MapPin size={20} />
              Voir notre localisation sur Google Maps
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* FORMULAIRE */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative scroll-mt-24 rounded-3xl bg-gradient-to-br from-amber-300/70 via-slate-200 to-[#0A2540]/30 p-px shadow-2xl shadow-[#0A2540]/10"
          >
            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-white p-6 sm:p-10">
              {/* Barre d'accent en haut */}
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-[#0A2540]"
                aria-hidden="true"
              />

              {/* Halo décoratif */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative mb-8">
                <span className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
                  <span
                    className="h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                    aria-hidden="true"
                  />
                  Demande de devis
                </span>

                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0A2540] sm:text-3xl">
                  Décrivez-nous votre projet
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Remplissez les informations ci-dessous. Votre demande
                  sera préparée dans WhatsApp.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="relative space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Nom complet *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                      placeholder="Votre nom complet"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Téléphone *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(event) =>
                        setForm({ ...form, phone: event.target.value })
                      }
                      placeholder="Votre numéro de téléphone"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Adresse email (facultatif)
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    placeholder="exemple@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className={labelClass}>
                    Type de projet *
                  </label>
                  <select
                    id="projectType"
                    required
                    value={form.projectType}
                    onChange={(event) =>
                      setForm({ ...form, projectType: event.target.value })
                    }
                    className={inputClass}
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="budget" className={labelClass}>
                      Budget estimé
                    </label>
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={(event) =>
                        setForm({ ...form, budget: event.target.value })
                      }
                      className={inputClass}
                    >
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location" className={labelClass}>
                      Lieu du projet
                    </label>
                    <input
                      id="location"
                      type="text"
                      value={form.location}
                      onChange={(event) =>
                        setForm({ ...form, location: event.target.value })
                      }
                      placeholder="Ville ou quartier"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Description du projet *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                    placeholder="Décrivez votre projet, vos besoins et les travaux envisagés..."
                    className={`${inputClass} resize-y`}
                  />
                </div>

                {error && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-medium text-red-700"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#0A2540] to-[#12395c] px-6 py-4 font-bold text-white shadow-xl shadow-[#0A2540]/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-amber-500 hover:to-amber-400 hover:text-[#0A2540] hover:shadow-2xl hover:shadow-amber-500/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
                >
                  <MessageCircle size={20} />
                  Envoyer ma demande sur WhatsApp
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 ring-1 ring-emerald-100">
                    <ShieldCheck
                      size={20}
                      className="text-emerald-600"
                    />
                  </span>
                  <p className="text-sm leading-6 text-slate-600">
                    Votre demande s'ouvrira dans WhatsApp avec le message
                    préparé. Vérifiez les informations, puis appuyez sur
                    « Envoyer » dans WhatsApp pour transmettre votre demande.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}