import { Link } from "react-router-dom";

type Stat = {
  label: string;
  value: string;
};

type Highlight = {
  title: string;
  description: string;
};

type CaseItem = {
  sector: string;
  title: string;
  summary: string;
  image: string;
  stats: Stat[];
  highlights: Highlight[];
};

const CASES: CaseItem[] = [
  {
    sector: "Refinery & Petrochemical",
    title: "Bellows Expansion Joint for NTPC Power Plant",
    summary:
      "Designed and supplied custom single and universal bellows expansion joints for high‑temperature steam pipelines at an NTPC thermal power plant—ensuring zero leakage and absorbing thermal expansion across critical piping runs.",
    image: "/YC/Bellows Expansion Joint/SEJ2.jpg",
    stats: [
      { label: "Thermal Cycles Tested", value: "10,000+" },
      { label: "Leak‑Free Performance", value: "100%" },
      { label: "Delivery Time", value: "4 wks" },
    ],
    highlights: [
      {
        title: "Custom Engineering",
        description:
          "Each bellows was precision‑engineered to match exact pipeline specifications, pressures, and temperatures.",
      },
      {
        title: "Premium SS 316 Material",
        description:
          "High‑grade stainless steel construction for superior corrosion resistance in harsh environments.",
      },
      {
        title: "ISO 9001 Certified QA",
        description:
          "Full documentation with material certs, hydro test reports, and radiography records.",
      },
    ],
  },
  {
    sector: "Water Treatment & Cooling",
    title: "Strainer Supply for Paharpur Cooling Towers",
    summary:
      "Manufactured and delivered heavy‑duty Y‑type and basket strainers for cooling water systems at Paharpur Cooling Towers—filtering debris to protect pumps, valves, and heat exchangers from damage.",
    image: "/YC/Strainer/1.jpeg",
    stats: [
      { label: "Units Delivered", value: "120+" },
      { label: "Filtration Accuracy", value: "99.5%" },
      { label: "Client Satisfaction", value: "99%" },
    ],
    highlights: [
      {
        title: "Precision Mesh Screens",
        description:
          "Custom‑perforated screens engineered for consistent flow protection and easy cleaning.",
      },
      {
        title: "Multiple Configurations",
        description:
          "Y‑type, T‑type, basket, and duplex strainers supplied to suit different pipeline requirements.",
      },
      {
        title: "Rapid Turnaround",
        description:
          "In‑house manufacturing capability enabled on‑time delivery even for large batch orders.",
      },
    ],
  },
];

function StatPill({ value, label }: Stat) {
  return (
    <div className="rounded-lg border border-slate-900/10 bg-white px-4 py-3">
      <div className="text-lg font-semibold text-slate-900">{value}</div>
      <div className="text-xs text-slate-600">{label}</div>
    </div>
  );
}

function HighlightItem({ title, description }: Highlight) {
  return (
    <li className="rounded-xl border border-slate-900/10 bg-white p-4">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
    </li>
  );
}

export default function CaseStudy() {
  return (
    <section className="relative overflow-hidden bg-[#F4F5F7]">
      {/* Animated gradient accents */}
      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-6px) translateX(4px) scale(1.02); }
          100% { transform: translateY(0) translateX(0) scale(1); }
        }
      `}</style>
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"
          style={{ animation: "floatSlow 8s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-20 -right-24 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl"
          style={{ animation: "floatSlow 10s ease-in-out infinite" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Intro */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-3 py-1 shadow-sm">
            <span
              className="h-2 w-2 rounded-full bg-blue-600"
              aria-hidden="true"
            />
            <span className="text-xs font-medium tracking-wide text-slate-700">
              Case Studies
            </span>
          </div>
          <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
            10+ Years of Engineering Excellence
          </h1>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500" />
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 md:text-lg">
            Real‑world projects delivering precision‑engineered expansion
            joints, strainers, and industrial pipeline solutions to India's
            leading refineries, power plants, and cooling tower manufacturers.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2">
          {CASES.map((item, idx) => (
            <article key={idx} className="group">
              <div className="rounded-2xl border border-slate-900/10 bg-white p-3 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-800 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {item.sector}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{item.summary}</p>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {item.stats.map((s, i) => (
                      <StatPill key={i} value={s.value} label={s.label} />
                    ))}
                  </div>

                  <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                    {item.highlights.map((h, i) => (
                      <HighlightItem
                        key={i}
                        title={h.title}
                        description={h.description}
                      />
                    ))}
                  </ul>
                </div>
                <div className="mx-3 mb-3 rounded-lg border border-transparent transition-colors duration-300 group-hover:border-blue-200/60" />
              </div>
            </article>
          ))}
        </div>

        {/* Testimonial band */}
        <div className="mt-16 rounded-2xl border border-slate-900/10 bg-gradient-to-r from-white to-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-base leading-relaxed text-slate-700">
                "Yogiraj Engineering delivered custom bellows expansion joints
                and strainers that met our exact specifications with zero
                compromise on quality. Their 24/7 support and rapid turnaround
                keep our operations running smoothly."
              </p>
              <div className="mt-2 text-sm font-semibold text-slate-900">
                Project Manager, Paharpur Cooling Towers Limited
              </div>
            </div>
            <div className="inline-flex items-center gap-3">
              <span className="text-xs text-slate-500">
                Trusted by teams like
              </span>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                ISO 9001 Certified
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-900/10 bg-white p-6">
          <div>
            <div className="text-sm font-semibold text-slate-900">
              Need a custom engineering solution?
            </div>
            <p className="text-sm text-slate-600">
              Share your pipeline specifications—we'll engineer a precision‑fit
              solution with full QA documentation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-md border border-slate-900/10 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
