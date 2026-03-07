import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sun,
  Gauge,
  BatteryCharging,
  ThermometerSun,
  Factory,
  TrendingDown,
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

const initiatives = [
  {
    icon: Sun,
    title: "Rooftop Solar Installation",
    description:
      "A 320 kWp grid-tied solar array on our factory roof generates clean electricity, offsetting a significant portion of our annual power consumption and reducing dependency on fossil-fuel grid power.",
    stat: "320 kWp",
    statLabel: "Installed Capacity",
    tags: ["Grid-Tied", "Clean Energy"],
  },
  {
    icon: Gauge,
    title: "Smart Energy Metering",
    description:
      "Real-time energy monitoring across all production lines helps us identify consumption spikes, optimize machine scheduling during off-peak hours, and track energy intensity per unit of output.",
    stat: "24/7",
    statLabel: "Live Monitoring",
    tags: ["IoT Sensors", "Data-Driven"],
  },
  {
    icon: BatteryCharging,
    title: "VFD & High-Efficiency Motors",
    description:
      "Variable-frequency drives on compressors, hydraulic presses, and coolant pumps reduce energy draw during partial-load operations, cutting motor energy consumption significantly.",
    stat: "-22%",
    statLabel: "Motor Energy Saved",
    tags: ["IE3 Motors", "Load Optimization"],
  },
  {
    icon: ThermometerSun,
    title: "Heat Recovery Systems",
    description:
      "Waste heat from welding stations and furnaces is captured and redirected for pre-heating raw material and workspace heating during winter months, eliminating the need for separate heaters.",
    stat: "40%",
    statLabel: "Heat Recovered",
    tags: ["Waste Heat", "Pre-Heating"],
  },
  {
    icon: Factory,
    title: "LED & Natural Lighting",
    description:
      "Full LED conversion across the factory floor combined with translucent roofing panels maximizes natural daylight during production hours, reducing lighting energy by over 60%.",
    stat: "-60%",
    statLabel: "Lighting Energy",
    tags: ["Full LED", "Natural Light"],
  },
  {
    icon: TrendingDown,
    title: "Carbon Emission Tracking",
    description:
      "We measure Scope 1 and Scope 2 greenhouse gas emissions annually and set year-on-year reduction targets aligned with our ISO 14001 environmental management framework.",
    stat: "-18%",
    statLabel: "Energy Intensity (YoY)",
    tags: ["Scope 1 & 2", "Annual Audit"],
  },
];

const Energy = () => {
  return (
    <div>
      {/* ─── Energy & Emissions ─── */}
      <Section className="bg-[#f9f9f5] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-zinc-900 text-xl font-bold tracking-wide font-serif mb-3"
          >
            Energy &amp; Emissions
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#80D8C3] drop-shadow-lg mb-4"
            style={{ textShadow: "0 4px 12px rgba(128,216,195,0.4)" }}
          >
            Powering Manufacturing Responsibly
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-zinc-600 max-w-3xl mb-12 leading-relaxed"
          >
            Energy is the lifeblood of precision manufacturing. We are
            continuously investing in technologies and processes that reduce our
            energy intensity, lower emissions, and move us toward cleaner
            operations - without compromising product quality or delivery
            timelines.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i + 3}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200
                  transition-all duration-500 hover:-translate-y-1
                  hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:border-[#4DA8DA] cursor-pointer"
              >
                <div className="p-6">
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
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4">
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

      {/* ─── ISO Alignment Banner ─── */}
      <Section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            custom={0}
            className="rounded-2xl border border-gray-200 bg-gradient-to-r from-[#f9f9f5] to-white p-8 md:p-12
              transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]
              flex flex-col md:flex-row md:items-center gap-8"
          >
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900 mb-3">
                Aligned with International Standards
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Our energy management practices are aligned with{" "}
                <strong>ISO 50001</strong> guidelines. Combined with our{" "}
                <strong>ISO 14001:2015</strong> environmental management
                certification, we maintain a rigorous framework for measuring,
                reporting, and improving energy performance across all
                operations.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:flex-col md:gap-3">
              {["ISO 14001:2015", "ISO 50001 Aligned", "ISO 45001:2018"].map(
                (cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {cert}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Energy;
