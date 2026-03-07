"use client";

import type React from "react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

const ProductCatalog: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
 

  const categories: Category[] = [
    {
      id: 0,
      name: "Bellows Expansion Joints",
      products: [
        {
          id: 1,
          name: "Single Expansion Joint",
          category: "Bellows Expansion Joints",
          image: "/YC/Bellows Expansion Joint/SEJ2.jpg",
          price: "",
        },
        {
          id: 2,
          name: "Universal Expansion Joint",
          category: "Bellows Expansion Joints",
          image: "/YC/Bellows Expansion Joint/UEJ1.jpeg",
          price: "",
        },
        {
          id: 3,
          name: "Tied Expansion Joint",
          category: "Bellows Expansion Joints",
          image: "/YC/Bellows Expansion Joint/TEJ1.jpeg",
          price: "",
        },
        {
          id: 4,
          name: "Rectangular Expansion Joint",
          category: "Bellows Expansion Joints",
          image: "/YC/Bellows Expansion Joint/REJ1.jpeg",
          price: "",
        },
      ],
    },
    {
      id: 1,
      name: "Non Metallic Expansion Joints",
      products: [
        {
          id: 5,
          name: "Rubber Expansion Joint - Type A",
          category: "Non Metallic Expansion Joints",
          image: "/YC/Non metalic Expansion joint/1.jpeg",
          price: "",
        },
        {
          id: 6,
          name: "Rubber Expansion Joint - Type B",
          category: "Non Metallic Expansion Joints",
          image: "/YC/Non metalic Expansion joint/2.jpeg",
          price: "",
        },
        {
          id: 7,
          name: "Rubber Expansion Joint - Type C",
          category: "Non Metallic Expansion Joints",
          image: "/YC/Non metalic Expansion joint/3.jpeg",
          price: "",
        },
      ],
    },
    {
      id: 2,
      name: "Sight Glass",
      products: [
        {
          id: 8,
          name: "Sight Glass - Model 1",
          category: "Sight Glass",
          image: "/YC/Sight Glass/1.jpeg",
          price: "",
        },
        {
          id: 9,
          name: "Sight Glass - Model 2",
          category: "Sight Glass",
          image: "/YC/Sight Glass/2.jpeg",
          price: "",
        },
        {
          id: 10,
          name: "Sight Glass - Model 3",
          category: "Sight Glass",
          image: "/YC/Sight Glass/3.jpeg",
          price: "",
        },
        {
          id: 11,
          name: "Sight Glass - Model 4",
          category: "Sight Glass",
          image: "/YC/Sight Glass/4.jpeg",
          price: "",
        },
      ],
    },
    {
      id: 3,
      name: "Telescopic Expansion Joints",
      products: [
        {
          id: 12,
          name: "Telescopic Joint - Type A",
          category: "Telescopic Expansion Joints",
          image: "/YC/Telescopic Expansion Joint/1.jpeg",
          price: "",
        },
        {
          id: 13,
          name: "Telescopic Joint - Type B",
          category: "Telescopic Expansion Joints",
          image: "/YC/Telescopic Expansion Joint/2.jpeg",
          price: "",
        },
        {
          id: 14,
          name: "Telescopic Joint - Type C",
          category: "Telescopic Expansion Joints",
          image: "/YC/Telescopic Expansion Joint/3.jpeg",
          price: "",
        },
      ],
    },
    {
      id: 4,
      name: "Strainer",
      products: [
        {
          id: 15,
          name: "Y-Type Strainer",
          category: "Strainer",
          image: "/YC/Strainer/1.jpeg",
          price: "",
        },
        {
          id: 16,
          name: "T-Type Strainer",
          category: "Strainer",
          image: "/YC/Strainer/2.jpeg",
          price: "",
        },
        {
          id: 17,
          name: "Basket Strainer",
          category: "Strainer",
          image: "/YC/Strainer/3.jpeg",
          price: "",
        },
        {
          id: 18,
          name: "Duplex Strainer",
          category: "Strainer",
          image: "/YC/Strainer/4.jpeg",
          price: "",
        },
      ],
    },
    {
      id: 5,
      name: "Dismantling Joint",
      products: [
        {
          id: 19,
          name: "Dismantling Joint - DJ1",
          category: "Dismantling Joint",
          image: "/YC/Dismantling Joint/DJ1.jpeg",
          price: "",
        },
        {
          id: 20,
          name: "Dismantling Joint - DJ2",
          category: "Dismantling Joint",
          image: "/YC/Dismantling Joint/DJ2.jpeg",
          price: "",
        },
        {
          id: 21,
          name: "Dismantling Joint - DJ3",
          category: "Dismantling Joint",
          image: "/YC/Dismantling Joint/DJ3.jpeg",
          price: "",
        },
        {
          id: 22,
          name: "Dismantling Joint - DJ4",
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
                <div
                  className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition-all duration-200 cursor-pointer ${
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
                </div>
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
                      <div
                        key={product.id}
                      
                        className="group cursor-pointer"
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
                          </div>
                        </div>
                      </div>
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
