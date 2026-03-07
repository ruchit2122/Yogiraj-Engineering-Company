import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

type SubProduct = {
  id: string;
  name: string;
  image: string;
  blurb: string;
};

const CATALOG: Record<string, { title: string; items: SubProduct[] }> = {
  "non-metalic-expansion-joints": {
    title: "Non Metalic Expansion Joints",
    items: [
      {
        id: "non-metalic-joint-1",
        name: "Fabric Expansion Joint",
        image: "/YC/Non metalic Expansion joint/1.jpeg",
        blurb: "Flexible joint for vibration and noise damping in pipelines.",
      },
      {
        id: "non-metalic-joint-2",
        name: "Fabric Expansion Joint",
        image: "/YC/Non metalic Expansion joint/2.jpeg",
        blurb: "High-quality expansion joint for industrial applications.",
      },
      {
        id: "non-metalic-joint-3",
        name: "Rubber Expansion Joint",
        image: "/YC/Non metalic Expansion joint/3.jpeg",
        blurb: "Durable expansion joint for various pipeline systems.",
      },
    ],
  },
  "bellows-expansion-joints": {
    title: "Bellows Expansion Joints",
    items: [
      {
        id: "bellows-joint-1",
        name: "Octagonal Duct Type Bellows Expansion Joint",
        image: "/YC/Bellows Expansion Joint/1.jpeg",
        blurb:
          "Used in large industrial ducting systems where non-circular geometry is required.",
      },
      {
        id: "bellows-joint-2",
        name: "Rectangular Duct Bellows Expansion Joint",
        image: "/YC/Bellows Expansion Joint/2.jpeg",
        blurb:
          "Designed for thermal expansion in rectangular ducts, boilers, and flue gas systems.",
      },
      {
        id: "bellows-joint-3",
        name: "Flanged Metallic Axial Bellows Expansion Joint",
        image: "/YC/Bellows Expansion Joint/3.jpeg",
        blurb:
          "Common in piping systems to absorb axial thermal movement under pressure.",
      },
      {
        id: "bellows-joint-4",
        name: "Multi-Ply Circular Bellows Expansion Joint",
        image: "/YC/Bellows Expansion Joint/4.jpeg",
        blurb:
          "Heavy-duty design for high temperature and cyclic movement applications.",
      },
      {
        id: "bellows-joint-5",
        name: "Large Diameter Circular Duct Bellows Expansion Joint",
        image: "/YC/Bellows Expansion Joint/5.jpeg",
        blurb:
          "Custom-fabricated for chimneys, exhaust ducts, and power plant installations.",
      },
      {
        id: "bellows-joint-6",
        name: "Reinforced Circular Bellows Expansion Joint",
        image: "/YC/Bellows Expansion Joint/6.jpeg",
        blurb:
          "Built for high pressure and high movement industrial environments.",
      },
    ],
  },
  "sight-glass": {
    title: "Sight Glass",
    items: [
      {
        id: "sight-glass-1",
        name: "Flanged Sight Glass",
        image: "/YC/Sight Glass/1.jpeg",
        blurb: "Industrial sight glass for flow visualization.",
      },
      {
        id: "sight-glass-2",
        name: "Threaded Sight Glass",
        image: "/YC/Sight Glass/2.jpeg",
        blurb: "High-quality sight glass for process monitoring.",
      },
      {
        id: "sight-glass-3",
        name: "SG Model-E Wiper Assembly",
        image: "/YC/Sight Glass/3.jpeg",
        blurb: "Durable sight glass for various applications.",
      },
      {
        id: "sight-glass-4",
        name: "SG Model-E Wiper Assembly",
        image: "/YC/Sight Glass/4.jpeg",
        blurb: "Professional grade sight glass for industrial use.",
      },
      {
        id: "sight-glass-5",
        name: "SG Model-E Wiper Assembly",
        image: "/YC/Sight Glass/5.jpeg",
        blurb: "Reliable sight glass for flow observation.",
      },
    ],
  },
  "telescopic-expansion-joints": {
    title: "Telescopic Expansion Joints",
    items: [
      {
        id: "telescopic-joint-1",
        name: "Dismantling Joint for Pipelines",
        image: "/YC/Telescopic Expansion Joint/1.jpeg",
        blurb: "High-quality telescopic expansion joint for extended movement.",
      },
      {
        id: "telescopic-joint-2",
        name: "Flanged Dismantling Coupling",
        image: "/YC/Telescopic Expansion Joint/2.jpeg",
        blurb: "Durable telescopic joint for large displacement requirements.",
      },
      {
        id: "telescopic-joint-3",
        name: "Double Flanged Dismantling Joint",
        image: "/YC/Telescopic Expansion Joint/3.jpeg",
        blurb: "Professional grade telescopic expansion joint solution.",
      },
    ],
  },
  strainer: {
    title: "Strainer",
    items: [
      {
        id: "strainer-1",
        name: "Basket Strainer",
        image: "/YC/Strainer/1.jpeg",
        blurb: "High-quality strainer for filtration applications.",
      },
      {
        id: "strainer-2",
        name: "Basket Strainer",
        image: "/YC/Strainer/2.jpeg",
        blurb: "Durable strainer for pipeline protection.",
      },
      {
        id: "strainer-3",
        name: "Basket Strainer",
        image: "/YC/Strainer/3.jpeg",
        blurb: "Professional grade strainer for industrial use.",
      },
      {
        id: "strainer-4",
        name: "Duplex Basket Strainer",
        image: "/YC/Strainer/4.jpeg",
        blurb: "Reliable strainer for process systems.",
      },
      {
        id: "strainer-5",
        name: "Duplex Basket Strainer",
        image: "/YC/Strainer/5.jpeg",
        blurb: "Heavy-duty strainer for demanding applications.",
      },
      {
        id: "strainer-6",
        name: "Duplex Basket Strainer",
        image: "/YC/Strainer/6.jpeg",
        blurb: "Custom strainer solutions for various industries.",
      },
    ],
  },
  "dismantaling-joint": {
    title: "Dismantaling Joint",
    items: [
      {
        id: "dismantling-joint-1",
        name: "Dismantling Joint",
        image: "/YC/Dismantling Joint/DJ1.jpeg",
        blurb: "Easy-to-install dismantling joint for quick maintenance.",
      },
      {
        id: "dismantling-joint-2",
        name: "Dismantling Joint",
        image: "/YC/Dismantling Joint/DJ2.jpeg",
        blurb: "Professional dismantling joint for valve installation.",
      },
      {
        id: "dismantling-joint-3",
        name: "Dismantling Joint",
        image: "/YC/Dismantling Joint/DJ3.jpeg",
        blurb: "Reliable dismantling joint for pipeline flexibility.",
      },
      {
        id: "dismantling-joint-4",
        name: "Dismantling Joint",
        image: "/YC/Dismantling Joint/DJ4.jpeg",
        blurb: "Heavy-duty dismantling joint for industrial use.",
      },
      {
        id: "dismantling-joint-5",
        name: "Dismantling Joint",
        image: "/YC/Dismantling Joint/DJ5.jpeg",
        blurb: "High-quality dismantling joint for easy equipment removal.",
      },
      {
        id: "dismantling-joint-6",
        name: "Dismantling Joint",
        image: "/YC/Dismantling Joint/DJ6.jpeg",
        blurb: "Durable dismantling joint for various applications.",
      },
    ],
  },
};

export default function ProductCategory() {
  const { category } = useParams();
  const data = useMemo(
    () => (category ? CATALOG[category] : undefined),
    [category],
  );
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  if (!data) {
    return (
      <section className="py-16 px-6 bg-gradient-to-b from-rose-50 via-white to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Category not found
          </h2>
          <p className="text-gray-600 mt-2">
            Please check the URL or choose a product category.
          </p>
          <Link
            to="/products"
            className="inline-block mt-6 text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-full px-5 py-2 text-sm font-semibold"
          >
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
            Category
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-3">
            {data.title}
          </h1>
          <p className="text-gray-600 mt-2">
            Browse multiple products under this category.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="relative overflow-hidden cursor-pointer group"
                onClick={() =>
                  setSelectedImage({ src: item.image, alt: item.name })
                }
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-full px-6 py-2 text-sm font-semibold"
          >
            ← Back to Products
          </Link>
        </div>
      </div>

      {/* Product Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-md w-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 z-10 p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-white hover:text-gray-200 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-contain rounded-2xl shadow-2xl"
            />

            {/* Product Name */}
            <h3 className="text-center text-white text-lg font-bold mt-6 ">
              {selectedImage.alt}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}
