import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Leaf,
  Droplets,
  Zap,
  ShieldCheck,
  Recycle,
  Users,
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

const pillars = [
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description:
      "We integrate eco-conscious practices into every stage of our manufacturing — from material selection and machining processes to finishing and packaging — minimizing our ecological footprint.",
    tags: [
      "ISO 14001 Certified",
      "Green Manufacturing",
      "Eco-Friendly Packaging",
    ],
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description:
      "Our facility utilizes energy-efficient CNC machines, VFD-driven motors, and rooftop solar panels to reduce electricity consumption and lower greenhouse gas emissions across operations.",
    tags: ["Solar Powered", "VFD Motors", "Smart Metering"],
  },
  {
    icon: Recycle,
    title: "Waste Minimization & Recycling",
    description:
      "Metal scrap, cutting oils, and packaging waste are systematically segregated and recycled through certified partners, diverting the majority of our industrial waste from landfills.",
    tags: ["85% Waste Diverted", "Certified Recyclers", "Zero Landfill Goal"],
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description:
      "Closed-loop coolant systems in our machining centers recirculate water, and effluent treatment ensures that no untreated water is discharged from our manufacturing facility.",
    tags: ["Closed-Loop Systems", "Zero Discharge", "Effluent Treatment"],
  },
  {
    icon: ShieldCheck,
    title: "Health, Safety & Compliance",
    description:
      "Our ISO 45001:2018 certified safety management system ensures a safe workplace through regular training, PPE compliance, hazard assessments, and emergency preparedness drills.",
    tags: ["ISO 45001:2018", "PPE Compliance", "Zero LTI Target"],
  },
  {
    icon: Users,
    title: "Community & Workforce Development",
    description:
      "We invest in the local community through skill development programs, apprenticeship opportunities, and partnerships with engineering institutes in Anand and Vadodara districts.",
    tags: ["Skill Development", "Local Hiring 80%", "ITI Partnerships"],
  },
];

const metrics = [
  { value: "ISO 14001", label: "Environmental Management Certified" },
  { value: "85%", label: "Waste Diverted from Landfill" },
  { value: "320 kWp", label: "Solar Capacity Installed" },
  { value: "Zero", label: "Untreated Water Discharge" },
];

const Community = () => {
  return (
    <div>
      {/* ─── Hero Section ─── */}
      <Section className="bg-[#f9f9f5] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block mb-4 text-xs md:text-sm text-emerald-700 font-semibold uppercase tracking-widest"
          >
            Our Commitment to the Planet
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#80D8C3] drop-shadow-lg mb-6"
            style={{ textShadow: "0 4px 12px rgba(128,216,195,0.4)" }}
          >
            Engineering a <br className="hidden md:block" />
            Sustainable Future
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed"
          >
            At Yogiraj Engineering, sustainability is not an afterthought - it
            is woven into how we design, manufacture, and deliver every
            expansion joint, strainer, and industrial component. Since 1985, we
            have been committed to responsible manufacturing that protects our
            environment and strengthens our community.
          </motion.p>

          {/* Metrics Bar */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {metrics.map((m, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 cursor-pointer
                  transition-all duration-500 hover:-translate-y-1
                  hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:border-[#4DA8DA]"
              >
                <div className="text-2xl md:text-3xl font-bold text-zinc-900">
                  {m.value}
                </div>
                <div className="mt-2 text-xs md:text-sm text-zinc-500 leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ─── Sustainability Pillars ─── */}
      <Section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-zinc-900 text-xl font-bold tracking-wide font-serif mb-3"
          >
            Our Approach
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#80D8C3] drop-shadow-lg mb-4"
            style={{ textShadow: "0 4px 12px rgba(128,216,195,0.4)" }}
          >
            Six Pillars of Sustainability
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-zinc-600 max-w-2xl mb-12 leading-relaxed"
          >
            Our sustainability framework is built on six interconnected pillars
            that guide every decision - from the shop floor to the boardroom.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
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
                      <pillar.icon className="w-5 h-5 text-zinc-900" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-zinc-900 group-hover:text-blue-700 transition-colors duration-300">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2">
                    {pillar.tags.map((tag, idx) => (
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
    </div>
  );
};

export default Community;
