"use client";

import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  price: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  products: Product[];
}

const ProductCatalog: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const categories: Category[] = [
    {
      id: 0,
      name: "Bellows Expansion Joints",
      slug: "bellows-expansion-joints",
      products: [
        {
          id: 1,
          name: "Single Expansion Joint",
          description:
            "Absorbs axial movement in straight-run piping systems. Suitable for high-temperature and high-pressure applications in refineries, power plants, and chemical processing units.",
          category: "Bellows Expansion Joints",
          image: "/YC/Bellows Expansion Joint/SEJ2.jpg",
          price: "",
        },
        {
          id: 2,
          name: "Universal Expansion Joint",
          description:
            "Designed to handle lateral deflection and angular rotation using two bellows connected by a center pipe spool. Ideal for complex piping layouts in petrochemical and thermal power industries.",
          category: "Bellows Expansion Joints",
          image: "/YC/Bellows Expansion Joint/UEJ1.jpeg",
          price: "",
        },
        {
          id: 3,
          name: "Tied Expansion Joint",
          description:
            "Features tie rods that restrain axial movement while allowing lateral deflection. Ensures controlled pipe movement in steam, exhaust, and process piping systems.",
          category: "Bellows Expansion Joints",
          image: "/YC/Bellows Expansion Joint/TEJ1.jpeg",
          price: "",
        },
        {
          id: 4,
          name: "Rectangular Expansion Joint",
          description:
            "Custom-fabricated for rectangular duct connections in HVAC, flue gas, and industrial ventilation systems. Absorbs thermal growth and vibration in non-circular cross-sections.",
          category: "Bellows Expansion Joints",
          image: "/YC/Bellows Expansion Joint/REJ1.jpeg",
          price: "",
        },
      ],
    },
    {
      id: 1,
      name: "Non Metallic Expansion Joints",
      slug: "non-metalic-expansion-joints",
      products: [
        {
          id: 5,
          name: "Rubber Expansion Joint - Type A",
          description:
            "General-purpose rubber expansion joint for water, wastewater, and HVAC applications. Absorbs vibration, noise, and thermal movement while providing flexible pipe connections.",
          category: "Non Metallic Expansion Joints",
          image: "/YC/Non metalic Expansion joint/1.jpeg",
          price: "",
        },
        {
          id: 6,
          name: "Rubber Expansion Joint - Type B",
          description:
            "Medium-pressure rubber expansion joint built with reinforced fabric layers for chemical processing and industrial cooling systems. Resistant to a wide range of acids and alkalis.",
          category: "Non Metallic Expansion Joints",
          image: "/YC/Non metalic Expansion joint/2.jpeg",
          price: "",
        },
        {
          id: 7,
          name: "Rubber Expansion Joint - Type C",
          description:
            "Heavy-duty rubber expansion joint designed for high-pressure and high-temperature service in power plants, desalination, and marine applications.",
          category: "Non Metallic Expansion Joints",
          image: "/YC/Non metalic Expansion joint/3.jpeg",
          price: "",
        },
      ],
    },
    {
      id: 2,
      name: "Sight Glass",
      slug: "sight-glass",
      products: [
        {
          id: 8,
          name: "Sight Glass - Model 1",
          description:
            "Flanged tubular sight glass for inline visual inspection of fluid flow and clarity in chemical, pharmaceutical, and food-grade piping systems.",
          category: "Sight Glass",
          image: "/YC/Sight Glass/1.jpeg",
          price: "",
        },
        {
          id: 9,
          name: "Sight Glass - Model 2",
          description:
            "Full-view sight glass with borosilicate glass disc for clear observation of process conditions in pipelines and tanks across oil & gas and petrochemical industries.",
          category: "Sight Glass",
          image: "/YC/Sight Glass/2.jpeg",
          price: "",
        },
        {
          id: 10,
          name: "Sight Glass - Model 3",
          description:
            "Double-window sight glass assembly designed for high-pressure applications in steam, water, and chemical processing plants. Features reinforced flanged construction.",
          category: "Sight Glass",
          image: "/YC/Sight Glass/3.jpeg",
          price: "",
        },
        {
          id: 11,
          name: "Sight Glass - Model 4",
          description:
            "Compact circular sight glass suitable for vessel-mounted and pipeline applications. Provides safe visual access for level and flow monitoring in industrial environments.",
          category: "Sight Glass",
          image: "/YC/Sight Glass/4.jpeg",
          price: "",
        },
      ],
    },
    {
      id: 3,
      name: "Telescopic Expansion Joints",
      slug: "telescopic-expansion-joints",
      products: [
        {
          id: 12,
          name: "Telescopic Joint - Type A",
          description:
            "Standard telescopic expansion joint for moderate axial movement in water supply, irrigation, and cooling water pipelines. Features precision-machined sleeves and durable sealing rings.",
          category: "Telescopic Expansion Joints",
          image: "/YC/Telescopic Expansion Joint/1.jpeg",
          price: "",
        },
        {
          id: 13,
          name: "Telescopic Joint - Type B",
          description:
            "Heavy-duty telescopic joint for large-diameter pipelines in municipal water distribution and industrial process systems. Handles significant thermal expansion with zero leakage.",
          category: "Telescopic Expansion Joints",
          image: "/YC/Telescopic Expansion Joint/2.jpeg",
          price: "",
        },
        {
          id: 14,
          name: "Telescopic Joint - Type C",
          description:
            "Customizable telescopic expansion joint for high-pressure and high-temperature service in power generation, refinery, and district heating systems.",
          category: "Telescopic Expansion Joints",
          image: "/YC/Telescopic Expansion Joint/3.jpeg",
          price: "",
        },
      ],
    },
    {
      id: 4,
      name: "Strainer",
      slug: "strainer",
      products: [
        {
          id: 15,
          name: "Y-Type Strainer",
          description:
            "Compact Y-shaped strainer for filtering solid particles from steam, gas, and liquid pipelines. Easy to clean and maintain - ideal for horizontal and vertical installations.",
          category: "Strainer",
          image: "/YC/Strainer/1.jpeg",
          price: "",
        },
        {
          id: 16,
          name: "T-Type Strainer",
          description:
            "High-capacity T-type strainer for large-flow applications in water treatment, oil & gas, and process industries. Removable screen basket allows quick cleaning without pipeline disruption.",
          category: "Strainer",
          image: "/YC/Strainer/2.jpeg",
          price: "",
        },
        {
          id: 17,
          name: "Basket Strainer",
          description:
            "Industrial basket strainer with large filtration area for high-flow systems. Suitable for water, fuel oil, and chemical applications in refineries, power plants, and marine environments.",
          category: "Strainer",
          image: "/YC/Strainer/3.jpeg",
          price: "",
        },
        {
          id: 18,
          name: "Duplex Strainer",
          description:
            "Dual-basket duplex strainer that allows continuous pipeline operation during filter cleaning. Essential for critical systems in oil & gas, power generation, and marine applications.",
          category: "Strainer",
          image: "/YC/Strainer/4.jpeg",
          price: "",
        },
      ],
    },
    {
      id: 5,
      name: "Dismantling Joint",
      slug: "dismantaling-joint",
      products: [
        {
          id: 19,
          name: "Dismantling Joint - DJ1",
          description:
            "Standard flanged dismantling joint for easy installation and removal of valves and fittings in water and wastewater pipelines. Adjustable length for on-site flexibility.",
          category: "Dismantling Joint",
          image: "/YC/Dismantling Joint/DJ1.jpeg",
          price: "",
        },
        {
          id: 20,
          name: "Dismantling Joint - DJ2",
          description:
            "Wide-range dismantling joint compatible with multiple pipe sizes. Simplifies maintenance in municipal water supply and fire protection systems.",
          category: "Dismantling Joint",
          image: "/YC/Dismantling Joint/DJ2.jpeg",
          price: "",
        },
        {
          id: 21,
          name: "Dismantling Joint - DJ3",
          description:
            "Heavy-duty dismantling joint for large-diameter pipelines in industrial and infrastructure projects. Features robust epoxy-coated body for corrosion resistance.",
          category: "Dismantling Joint",
          image: "/YC/Dismantling Joint/DJ3.jpeg",
          price: "",
        },
        {
          id: 22,
          name: "Dismantling Joint - DJ4",
          description:
            "Compact dismantling joint designed for confined-space installations in pumping stations, sewage systems, and underground utility networks.",
          category: "Dismantling Joint",
          image: "/YC/Dismantling Joint/DJ4.jpeg",
          price: "",
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto">
        {/* Header */}
        <h2 className="mb-4 text-lg font-semibold text-slate-900">
          Product Categories
        </h2>

        {/* Container with Categories and Products side by side */}
        <div className="flex gap-4">
          {/* Categories List */}
          <div className="flex-shrink-0 w-64 space-y-2">
            {categories.map((category) => (
              <div
                key={category.id}
                onMouseEnter={() => {
                  setExpandedCategory(category.id);
                }}
              >
                {/* Category Button */}
                <Link
                  to={`/products/${category.slug}`}
                  className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition-all duration-200 ${
                    expandedCategory === category.id
                      ? "bg-slate-200"
                      : "hover:bg-slate-100"
                  }`}
                >
                  <span className="text-slate-900">{category.name}</span>
                  <span
                    className={`text-slate-600 transition-transform duration-300 ${
                      expandedCategory === category.id ? "rotate-90" : ""
                    }`}
                  >
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Products Display Area */}
          <div className="flex-1">
            {expandedCategory !== null &&
              categories.find((c) => c.id === expandedCategory) && (
                <div className="grid grid-cols-2 gap-3">
                  {categories
                    .find((c) => c.id === expandedCategory)
                    ?.products.map((product) => (
                      <Link
                        to={`/products/${categories.find((c) => c.id === expandedCategory)?.slug}`}
                        key={product.id}
                        className="group"
                      >
                        {/* Compact Product Card */}
                        <div className="overflow-hidden rounded-md border border-slate-200 bg-white transition-all duration-300 hover:border-slate-400 hover:shadow-md">
                          {/* Image Container */}
                          <div className="relative overflow-hidden bg-slate-100">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-24 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>

                          {/* Content */}
                          <div className="p-2">
                            <h4 className="text-xs font-semibold text-slate-900 line-clamp-2 transition-colors duration-300 group-hover:text-slate-700">
                              {product.name}
                            </h4>
                            <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
