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
      "Flexible non-metallic expansion joints designed for chemical and thermal applications.",
    image: "/YC/Non metalic Expansion joint/1.jpeg",
  },
  {
    key: "bellows-expansion-joints",
    title: "Bellows Expansion Joints",
    description:
      "High-performance bellows expansion joints for extreme pressure and temperature conditions.",
    image: "/YC/Bellows Expansion Joint/1.jpeg",
  },
  {
    key: "sight-glass",
    title: "Sight Glass",
    description:
      "Durable sight glass components for visual inspection in industrial systems.",
    image: "/YC/Sight Glass/1.jpeg",
  },
  {
    key: "telescopic-expansion-joints",
    title: "Telescopic Expansion Joints",
    description:
      "Advanced telescopic joints for large movement accommodations in piping systems.",
    image: "/YC/Telescopic Expansion Joint/1.jpeg",
  },
  {
    key: "strainer",
    title: "Strainer",
    description:
      "Industrial-grade strainers for protection and filtration in fluid systems.",
    image: "/YC/Strainer/1.jpeg",
  },
  {
    key: "dismantaling-joint",
    title: "Dismantaling Joint",
    description:
      "Easy-to-dismantle joints for maintenance and repair in industrial applications.",
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
