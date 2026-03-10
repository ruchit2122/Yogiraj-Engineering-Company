import { Link } from "react-router-dom";

type MainProduct = {
  key: string;
  title: string;
  description: string;
  image: string;
};

const MAIN_PRODUCTS: MainProduct[] = [
  {
    key: "non-metalic-expansion-joints",
    title: "Non Metalic Expansion Joints",
    description:
      "Our non-metallic expansion joints are engineered using high-grade rubber, PTFE, and fabric materials to absorb thermal expansion, vibration, and misalignment in piping systems. Ideal for chemical plants, power stations, HVAC systems, and water treatment facilities, these flexible connectors ensure leak-proof performance and long service life even in corrosive or high-temperature environments.",
    image: "/YC/Non metalic Expansion joint/1.jpeg",
  },
  {
    key: "bellows-expansion-joints",
    title: "Bellows Expansion Joints",
    description:
      "Precision-manufactured metallic bellows expansion joints designed to compensate for axial, lateral, and angular movements in industrial piping and ducting systems. Built from stainless steel and high-nickel alloys, our bellows joints withstand extreme pressure, temperature, and cyclic fatigue - making them essential for refineries, petrochemical plants, thermal power plants, and process industries worldwide.",
    image: "/YC/Bellows Expansion Joint/1.jpeg",
  },
  {
    key: "sight-glass",
    title: "Sight Glass",
    description:
      "Industrial-grade sight glass assemblies that provide safe and clear visual monitoring of fluid flow, level, and process conditions within pipelines and vessels. Available in tubular, circular, and full-view configurations, our sight glass units are manufactured with borosilicate glass and heavy-duty flanged bodies to meet the demands of pharmaceutical, food processing, oil & gas, and chemical industries.",
    image: "/YC/Sight Glass/1.jpeg",
  },
  {
    key: "telescopic-expansion-joints",
    title: "Telescopic Expansion Joints",
    description:
      "Heavy-duty telescopic expansion joints engineered to accommodate large axial movements caused by thermal expansion and contraction in long-run pipelines. Widely used in water supply networks, cooling systems, and industrial process lines, these joints feature precision-machined sleeves and reliable sealing elements that ensure zero-leakage performance under demanding operating conditions.",
    image: "/YC/Telescopic Expansion Joint/1.jpeg",
  },
  {
    key: "strainer",
    title: "Strainer",
    description:
      "High-quality Y-type, T-type, and basket strainers designed to protect pumps, valves, and downstream equipment by filtering debris, rust, and solid particles from pipeline fluids. Constructed from carbon steel, stainless steel, and cast iron, our strainers are suitable for water, steam, oil, gas, and chemical applications across power generation, marine, and heavy engineering sectors.",
    image: "/YC/Strainer/1.jpeg",
  },
  {
    key: "dismantaling-joint",
    title: "Dismantaling Joint",
    description:
      "Robust dismantling joints that allow easy removal and installation of valves, pumps, and pipeline accessories without disturbing the surrounding pipework. Available in flanged and wide-range configurations, these joints simplify routine maintenance and reduce downtime in municipal water distribution, sewage treatment, fire protection, and industrial fluid-handling systems.",
    image: "/YC/Dismantling Joint/DJ1.jpeg",
  },
];

const AllProducts = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Products
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-3">
            Our Main Products
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Explore our core engineering offerings. Click a category to view
            more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {MAIN_PRODUCTS.map((p) => (
            <Link
              to={`/products/${p.key}`}
              key={p.key}
              className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className=" text-left w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-80"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                    Engineering
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 text-left">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 text-left">
                  {p.description}
                </p>
                <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-4">
                  View products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 12a.75.75 0 0 1 .75-.75h11.69l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H5.25A.75.75 0 0 1 4.5 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
