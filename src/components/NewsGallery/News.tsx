import React from "react";
import { Calendar, ArrowUpRight } from "lucide-react";

type NewsItem = {
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  category?: string;
  accent: string;
};

const MOCK_NEWS: NewsItem[] = [
  {
    title: "New Bellows Expansion Joint Series for Refinery Clients",
    date: "Feb 15, 2026",
    description:
      "Yogiraj Engineering Company launched an advanced range of metallic bellows expansion joints engineered for high-temperature and high-pressure refinery piping systems, offering superior fatigue life and leak-proof performance.",
    imageUrl: "/YC/Bellows Expansion Joint/1.jpeg",
    category: "Products",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Export Order Delivered: Dismantling Joints to Middle East",
    date: "Jan 22, 2026",
    description:
      "Successfully delivered a bulk order of custom-designed dismantling joints to a major water treatment facility in the Middle East, reinforcing our growing international presence.",
    imageUrl: "/YC/Dismantling Joint/DJ1.jpeg",
    category: "Exports",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    title: "Telescopic Expansion Joints for Power Plant Pipeline",
    date: "Dec 10, 2025",
    description:
      "Engineered and supplied telescopic expansion joints for a 500 MW thermal power plant, designed to absorb large axial movements in steam and water pipelines under extreme operating conditions.",
    imageUrl: "/YC/Telescopic Expansion Joint/1.jpeg",
    category: "Projects",
    accent: "from-amber-500 to-orange-600",
  },
  {
    title: "ISO 9001:2015 Recertification with Zero Non-Conformities",
    date: "Nov 18, 2025",
    description:
      "Yogiraj Engineering Company achieved ISO 9001:2015 recertification with zero non-conformities, reaffirming our commitment to world-class quality management across all manufacturing processes.",
    imageUrl: "/YC/Company Photo/1.jpeg",
    category: "Quality",
    accent: "from-violet-500 to-purple-600",
  },
  {
    title: "Industrial Strainer Range Expanded with New Designs",
    date: "Oct 05, 2025",
    description:
      "Our strainer product line now includes Y-type, T-type, basket, and duplex strainers in SS 304, SS 316, and carbon steel — catering to chemical, pharma, and oil & gas industries.",
    imageUrl: "/YC/Strainer/1.jpeg",
    category: "Products",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Sight Glass & Flow Indicators: Custom Solutions Delivered",
    date: "Sep 12, 2025",
    description:
      "Completed a large batch of tubular and flanged sight glasses with borosilicate glass for a pharmaceutical client, ensuring full visibility of process flow with zero-leak performance.",
    imageUrl: "/YC/Sight Glass/1.jpeg",
    category: "Innovation",
    accent: "from-rose-500 to-pink-600",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Products: "bg-emerald-500/90 text-white",
  Exports: "bg-blue-500/90 text-white",
  Projects: "bg-amber-500/90 text-white",
  Quality: "bg-violet-500/90 text-white",
  Innovation: "bg-rose-500/90 text-white",
};

const NewsCard: React.FC<{ item: NewsItem; index: number }> = ({
  item,
  index,
}) => {
  const isFeature = index === 0;

  if (isFeature) {
    return (
      <article className="group relative col-span-1 sm:col-span-2 overflow-hidden rounded-2xl bg-zinc-900 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/60 via-transparent to-transparent" />
            {item.category && (
              <span
                className={`absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-sm ${CATEGORY_COLORS[item.category] || "bg-white/20 text-white"}`}
              >
                {item.category}
              </span>
            )}
          </div>
          {/* Content side */}
          <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <div
              className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${item.accent} opacity-60`}
            />
            <div className="mb-3 flex items-center gap-2 text-zinc-400">
              <Calendar className="h-3.5 w-3.5" />
              <time className="text-xs font-medium tabular-nums tracking-wide uppercase">
                {item.date}
              </time>
            </div>
            <h3 className="mb-3 text-xl font-bold leading-tight text-white sm:text-2xl">
              {item.title}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-zinc-400">
              {item.description}
            </p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-zinc-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:ring-zinc-200">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {/* Category pill */}
        {item.category && (
          <span
            className={`absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm shadow-lg ${CATEGORY_COLORS[item.category] || "bg-white/20 text-white"}`}
          >
            {item.category}
          </span>
        )}
        {/* Arrow icon on hover */}
        <div className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-lg opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
          <ArrowUpRight className="h-4 w-4 text-zinc-800" />
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5 sm:p-6">
        {/* Accent bar */}
        <div
          className={`absolute top-0 left-5 sm:left-6 right-5 sm:right-6 h-[2px] bg-gradient-to-r ${item.accent} scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100`}
        />
        <div className="mb-3 flex items-center gap-2 text-zinc-400">
          <Calendar className="h-3 w-3" />
          <time className="text-[11px] font-medium tabular-nums tracking-wide uppercase">
            {item.date}
          </time>
        </div>
        <h3 className="mb-2 line-clamp-2 text-[15px] font-bold leading-snug text-zinc-900 transition-colors duration-300 group-hover:text-zinc-700">
          {item.title}
        </h3>
        <p className="line-clamp-2 text-[13px] leading-relaxed text-zinc-500">
          {item.description}
        </p>
      </div>
    </article>
  );
};

const News: React.FC = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:py-16 md:py-20">
      <header className="mb-10 sm:mb-12 md:mb-14">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
          Stay Informed
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Latest News & Updates
        </h2>
        <p className="mt-3 max-w-2xl text-base text-zinc-500">
          Product launches, export milestones, quality certifications, and
          project highlights from Yogiraj Engineering Company.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_NEWS.map((item, i) => (
          <NewsCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default News;
