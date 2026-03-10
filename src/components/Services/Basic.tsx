import { useState, useRef, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* ─────────────────────────── Data ─────────────────────────── */

const services = [
  {
    title: "Bellows Expansion Joint",
    description:
      "High-quality metallic bellows expansion joints designed to absorb thermal expansion, vibration, and misalignment in piping systems.",
    image: "/YC/Bellows%20Expansion%20Joint/1.jpeg",
    highlighted: false,
  },
  {
    title: "Dismantling Joint",
    description:
      "Robust dismantling joints for easy installation, removal, and maintenance of valves, pumps, and other equipment in pipeline systems.",
    image: "/YC/Dismantling%20Joint/DJ1.jpeg",
    highlighted: true,
  },
  {
    title: "Non-Metallic Expansion Joint",
    description:
      "Flexible non-metallic expansion joints ideal for absorbing movement, vibration, and noise in ductwork and piping applications.",
    image: "/YC/Non%20metalic%20Expansion%20joint/1.jpeg",
    highlighted: false,
  },
  {
    title: "Sight Glass",
    description:
      "Industrial sight glasses providing clear visual inspection of fluid flow, level, and condition inside pipelines and vessels.",
    image: "/YC/Sight%20Glass/1.jpeg",
    highlighted: true,
  },
  {
    title: "Strainer",
    description:
      "Heavy-duty pipeline strainers designed to protect pumps, valves, and equipment by filtering out debris and unwanted particles.",
    image: "/YC/Strainer/1.jpeg",
    highlighted: false,
  },
  {
    title: "Telescopic Expansion Joint",
    description:
      "Telescopic expansion joints engineered to accommodate large axial movements in long pipeline runs while maintaining a reliable seal.",
    image: "/YC/Telescopic%20Expansion%20Joint/1.jpeg",
    highlighted: true,
  },
  {
    title: "Custom Engineering",
    description:
      "Tailored piping solutions crafted to meet unique industrial requirements with precision engineering and premium materials.",
    image: "/YC/Bellows%20Expansion%20Joint/1.jpeg",
    highlighted: false,
  },
  {
    title: "On-Site Services",
    description:
      "Professional on-site installation, inspection, and maintenance services for all industrial piping components and systems.",
    image: "/onsite.avif",
    highlighted: true,
  },
  {
    title: "Quality Testing",
    description:
      "Comprehensive quality testing and certification services ensuring every product meets the highest industry standards.",
    image: "/YC/Sight%20Glass/1.jpeg",
    highlighted: false,
  },
];

// Marquee ticker items
const marqueeItems = [
  "Bellows Expansion Joint",
  "Dismantling Joint",
  "Non-Metallic Expansion Joint",
  "Sight Glass",
  "Strainer",
  "Telescopic Expansion Joint",
  "Custom Engineering",
  "Quality Testing",
  "On-Site Services",
];

/* ─────────────── Marquee Ticker Component ─────────────── */

const MarqueeTicker = () => {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full bg-yellow-400 overflow-hidden py-3 md:py-4 border-y border-yellow-400">
      <div className="relative flex">
        {/* Primary track */}
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "services-marquee 30s linear infinite" }}
        >
          {items.map((item, idx) => (
            <span
              key={`a-${idx}`}
              className="inline-flex items-center gap-3 px-6 md:px-8 text-white text-sm md:text-base font-medium tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-700 flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
        {/* Duplicate track for seamless loop */}
        <div
          className="flex whitespace-nowrap absolute top-0 left-0"
          style={{ animation: "services-marquee2 30s linear infinite" }}
        >
          {items.map((item, idx) => (
            <span
              key={`b-${idx}`}
              className="inline-flex items-center gap-3 px-6 md:px-8 text-white text-sm md:text-base font-medium tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-700 flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─────────────── Service Card Component ─────────────── */

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  highlighted: boolean;
  index: number;
}

const ServiceCard = ({
  title,
  description,
  image,
  highlighted,
  index,
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={cardRef}
      /* Staggered fade-up entrance */
      initial={prefersReduced ? false : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.15, ease: "easeOut" }}
      className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 ${
        highlighted
          ? "bg-[#ffd66b] text-zinc-900 border-[#FFD66B]"
          : "bg-white text-zinc-900 border-slate-200 hover:border-[#FFD66B]"
      }`}
    >
      {/* Image container with reveal animation */}
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          /* Clip reveal on scroll */
          initial={prefersReduced ? false : { clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{
            duration: 0.7,
            delay: (index % 3) * 0.15 + 0.2,
            ease: "easeOut",
          }}
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-bold mb-2 text-zinc-900">{title}</h3>
        <p
          className={`text-sm leading-relaxed mb-4 ${
            highlighted ? "text-zinc-700" : "text-zinc-600"
          }`}
        >
          {description}
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4DA8DA] hover:text-blue-700 transition-colors duration-200"
        >
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

/* ─────────────── Main Services Page ─────────────── */

const Basic = () => {
  const INITIAL_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  // Reset visible count if data changes
  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, services.length));
  };

  const visibleServices = services.slice(0, visibleCount);

  return (
    <div className="bg-[#f9f9f5] min-h-screen font-sans">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden min-h-[420px] md:min-h-[520px] flex items-center">
        {/* Background video — same as Home hero */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/YC/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Text content */}
            <div className="text-center md:text-left">
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6"
              >
                <span className="text-white text-sm font-medium">
                  PRECISION ENGINEERING SERVICES
                </span>
              </motion.div>

              <motion.nav
                initial={prefersReduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-2 text-sm text-zinc-400 mb-4 justify-center md:justify-start"
                aria-label="Breadcrumb"
              >
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-white">Services</span>
              </motion.nav>

              <motion.h1
                initial={prefersReduced ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-5 leading-tight"
                style={{
                  textShadow:
                    "0 6px 16px rgba(0,0,0,0.45), 0 12px 32px rgba(0,0,0,0.25)",
                }}
              >
                Our <span className="text-blue-400">Services</span>
              </motion.h1>

              <motion.p
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
              >
                Precision-engineered industrial solutions built for performance,
                durability, and your complete satisfaction.
              </motion.p>

              <motion.div
                initial={prefersReduced ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold h-14 px-8 text-lg rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/products"
                  className="border border-white/30 hover:bg-white/10 bg-white/5 text-white backdrop-blur-sm font-semibold h-14 px-8 text-lg rounded-lg inline-flex items-center transition-colors shadow"
                >
                  Explore Our Work
                </Link>
              </motion.div>
            </div>

            {/* Right: Hero image with decorative frame */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative hidden md:block"
            >
             
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Top Marquee Ticker ── */}
      <MarqueeTicker />

      {/* ── Services Grid Section ── */}
      <section
        className="max-w-7xl mx-auto px-6 py-16 md:py-24"
        ref={sectionRef}
      >
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-medium mb-4"
          >
            <span className="flex gap-0.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD66B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            </span>
            Our Services
          </motion.div>

          <motion.h2
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#178067] mb-4 drop-shadow-lg shadow-[#80D8C3]/80"
          >
            Boost Your Brand
            <br />
            with Our Expertise
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleServices.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>

        {/* Load More button */}
        {visibleCount < services.length && (
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={handleLoadMore}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg cursor-pointer"
            >
              Load More
            </button>
          </motion.div>
        )}
      </section>

      {/* ── Bottom Marquee Ticker ── */}
      <MarqueeTicker />

      {/* Scoped keyframes for marquee animation */}
      <style>{`
        @keyframes services-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes services-marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Basic;
