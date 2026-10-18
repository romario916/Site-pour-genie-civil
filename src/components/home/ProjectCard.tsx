
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

export default function ProjectCard({
  id,
  title,
  category,
  location,
  image,
  description,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-xl border border-slate-200 bg-white"
    >
      <Link
        to={`/realisations/${encodeURIComponent(id)}`}
        className="relative block aspect-[4/3] overflow-hidden bg-slate-100"
        aria-label={`Découvrir le projet ${title}`}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-md bg-white px-3 py-2 text-xs font-bold text-[#0A2540]">
          {category}
        </span>

        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-[#0A2540] transition-transform group-hover:rotate-45">
          <ArrowUpRight size={20} />
        </span>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <MapPin size={15} className="text-amber-600" />
          <span>{location}</span>
        </div>

        <h3 className="mt-3 text-xl font-bold text-[#0A2540]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {description}
        </p>

        <Link
          to={`/realisations/${encodeURIComponent(id)}`}
          className="mt-5 inline-flex items-center gap-2 font-bold text-[#0A2540] transition hover:text-amber-600"
        >
          Découvrir le projet
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </motion.article>
  );
}
