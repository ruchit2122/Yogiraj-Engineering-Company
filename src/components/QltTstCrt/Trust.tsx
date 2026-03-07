import { motion } from "framer-motion";
import { FileText, ShieldCheck, PenTool, BookOpen } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Technical Specifications",
    description:
      "Detailed specs covering material grades, pressure ratings, temperature ranges, and dimensional data for all our products.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Certifications",
    description:
      "ISO 9001:2015 certified manufacturing with full traceability. Products tested per ASME, EJMA, and IS standards.",
  },
  {
    icon: PenTool,
    title: "CAD Drawings",
    description:
      "Precision engineering drawings available in DWG and PDF formats for seamless integration into your project design.",
  },
  {
    icon: BookOpen,
    title: "Installation Guides",
    description:
      "Step-by-step installation manuals ensuring correct fitment, alignment, and long-term performance of every product.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.4 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Trust = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-left mb-14" variants={item}>
          <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-zinc-900 mb-3">
            Resources & Documentation
          </h2>
          <p className="text-zinc-500 text-sm md:text-base max-w-xl">
            Everything you need to specify, verify, and install our products
            with confidence.
          </p>
          <div className="w-16 h-0.5 bg-yellow-400 mt-4" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
          variants={container}
        >
          {resources.map((res, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group flex gap-4 p-5 md:p-6 rounded-xl border border-zinc-100 hover:border-zinc-200 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-zinc-900 text-white flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-zinc-900 transition-colors duration-300">
                <res.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 text-base mb-1">
                  {res.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {res.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Trust;
