import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  PackageCheck,
  FileSearch,
  Trash2,
  Scale,
  GraduationCap,
  HeartHandshake,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const sourcingPractices = [
  {
    icon: PackageCheck,
    title: "Supplier Code of Conduct",
    description:
      "Every supplier is evaluated against our Code of Conduct covering labor practices, environmental compliance, ethical business standards, and quality requirements before onboarding.",
    tags: ["Audit Program", "Ethical Standards"],
  },
  {
    icon: FileSearch,
    title: "Material Traceability",
    description:
      "Complete heat number tracking, mill test certificates, and batch records are maintained through the full production lifecycle — from raw material receipt to final dispatch.",
    tags: ["Heat Number Tracking", "Mill Test Certs"],
  },
  {
    icon: Trash2,
    title: "Waste Segregation & Recycling",
    description:
      "Metal scrap (SS, CS, alloy), used cutting oils, paper/cardboard, and e-waste are segregated at source and processed through CPCB-authorized recyclers with documented disposal records.",
    tags: ["CPCB Authorized", "Documented Disposal"],
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description:
      "We strictly adhere to Gujarat Pollution Control Board (GPCB) norms, Factories Act provisions, and all applicable environmental and labor regulations at both state and national levels.",
    tags: ["GPCB Compliant", "Factories Act"],
  },
];

const communityInitiatives = [
  {
    icon: GraduationCap,
    title: "Apprenticeships & Skill Development",
    description:
      "We offer structured apprenticeship programs for ITI and diploma holders from the Anand-Vidyanagar region, providing hands-on training in CNC machining, welding, and quality inspection.",
    stat: "25+",
    statLabel: "Apprentices Trained Annually",
    tags: ["ITI Partners", "CNC Training", "Welding"],
  },
  {
    icon: HeartHandshake,
    title: "Local Employment & Fair Wages",
    description:
      "Over 80% of our workforce is hired from surrounding villages and towns. We ensure fair wages, provident fund, ESI coverage, and regular health checkups for all team members.",
    stat: "80%",
    statLabel: "Local Workforce",
    tags: ["PF & ESI", "Health Checkups"],
  },
  {
    icon: Target,
    title: "Safety Culture & Training",
    description:
      "Monthly safety toolbox talks, annual fire drills, first-aid training, and a near-miss reporting system ensure that every worker returns home safely. Our target: zero lost-time injuries.",
    stat: "Zero",
    statLabel: "LTI Target",
    tags: ["Monthly Drills", "Near-Miss Reports"],
  },
];

const futureGoals = [
  {
    year: "2026",
    goal: "Achieve 50% electricity from renewable sources (solar + open-access wind)",
  },
  {
    year: "2027",
    goal: "Implement rainwater harvesting to meet 30% of factory water demand",
  },
  {
    year: "2028",
    goal: "Transition to 100% recyclable or reusable packaging for all dispatched products",
  },
  {
    year: "2030",
    goal: "Reduce Scope 1 & 2 carbon emissions by 40% from 2023 baseline",
  },
];

const Responsible = () => {
  return (
    <div>
      {/* ─── Responsible Sourcing & Waste ─── */}
      <Section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-zinc-900 text-xl font-bold tracking-wide font-serif mb-3"
          >
            Responsible Manufacturing
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#80D8C3] drop-shadow-lg mb-4"
            style={{ textShadow: "0 4px 12px rgba(128,216,195,0.4)" }}
          >
            Ethical Sourcing &amp; Waste Management
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-zinc-600 max-w-3xl mb-12 leading-relaxed"
          >
            Responsible manufacturing starts with where we source our materials
            and ends with how we handle what's left. Every link in our supply
            chain upholds the same standards we demand of ourselves.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sourcingPractices.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i + 3}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200
                  transition-all duration-500 hover:-translate-y-1
                  hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:border-[#4DA8DA] cursor-pointer"
              >
                <div className="p-6 md:p-7">
                  {/* Icon + Title row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FFD66B] rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-zinc-900" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-zinc-900 group-hover:text-blue-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium rounded-md"
                      >
                        <CheckCircle2 className="w-3 h-3 text-blue-600" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── Community & Workforce ─── */}
      <Section className="bg-[#f9f9f5] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-zinc-900 text-xl font-bold tracking-wide font-serif mb-3"
          >
            People &amp; Community
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#80D8C3] drop-shadow-lg mb-4"
            style={{ textShadow: "0 4px 12px rgba(128,216,195,0.4)" }}
          >
            Investing in Our People
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-zinc-600 max-w-3xl mb-12 leading-relaxed"
          >
            Sustainability is not only about the environment - it's about the
            people who make our company possible. We are committed to fair
            employment, continuous skill development, and a culture of safety.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityInitiatives.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i + 3}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200
                  transition-all duration-500 hover:-translate-y-1
                  hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:border-[#4DA8DA] cursor-pointer
                  flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + Title row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FFD66B] rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-zinc-900" />
                    </div>
                    <h3 className="text-base font-bold text-zinc-900 group-hover:text-blue-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 leading-relaxed flex-1 mb-4">
                    {item.description}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium rounded-md"
                      >
                        <CheckCircle2 className="w-3 h-3 text-blue-600" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider + Stat */}
                  <div className="h-px bg-slate-100" />
                  <div className="pt-4 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-zinc-900">
                      {item.stat}
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">
                      {item.statLabel}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── Future Goals / Roadmap ─── */}
      <Section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-zinc-900 text-xl font-bold tracking-wide font-serif mb-3"
          >
            Looking Ahead
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#80D8C3] drop-shadow-lg mb-4"
            style={{ textShadow: "0 4px 12px rgba(128,216,195,0.4)" }}
          >
            Our Sustainability Roadmap
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-zinc-600 max-w-3xl mb-12 leading-relaxed"
          >
            We set clear, time-bound targets so our sustainability journey is
            measurable and accountable. Here is where we're heading.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureGoals.map((item, i) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                custom={i + 3}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200
                  transition-all duration-500 hover:-translate-y-1
                  hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:border-[#4DA8DA] cursor-pointer"
              >
                <div className="p-6 flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#FFD66B] rounded-xl flex items-center justify-center">
                    <span className="text-lg font-bold text-zinc-900">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-base text-zinc-700 leading-relaxed font-medium">
                      {item.goal}
                    </p>
                  </div>
                  <ArrowRight className="flex-shrink-0 h-5 w-5 text-zinc-400 mt-2 group-hover:text-[#4DA8DA] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Responsible;
