
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  number,
}: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-slate-900/5 sm:p-8"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#0A2540] text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-[#0A2540]">
          <Icon size={27} strokeWidth={1.7} />
        </span>
        <span className="text-sm font-semibold tracking-widest text-slate-300">
          {number}
        </span>
      </div>

      <h3 className="mt-7 text-xl font-bold text-[#0A2540]">{title}</h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2540] transition-colors hover:text-amber-600"
      >
        Discuter de votre projet
        <ArrowUpRight size={17} />
      </Link>
    </motion.article>
  );
}
