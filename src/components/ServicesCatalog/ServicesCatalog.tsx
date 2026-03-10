"use client";

import type React from "react";
import { Link } from "react-router-dom";

interface ServiceCategory {
  id: number;
  name: string;
  image: string;
  bgColor: string;
  href: string;
}

const ServicesCatalog: React.FC = () => {
  const categories: ServiceCategory[] = [
    {
      id: 0,
      name: "Basic Services",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&h=200&fit=crop",
      bgColor: "",
      href: "/services#basic",
    },
    {
      id: 1,
      name: "On-Site Services",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop",
      bgColor: "",
      href: "/services#on-site",
    },
    {
      id: 2,
      name: "Emergency Services",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=200&fit=crop",
      bgColor: "",
      href: "/services#emergency",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto">
        {/* Three Column Layout */}
        <div className="grid grid-cols-3 gap-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className={`border-2 border-white/50 rounded-xl p-4 hover:shadow-xl transition-all duration-300 cursor-pointer group ${category.bgColor}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=300&h=200&fit=crop";
                  }}
                />
              </div>

              {/* Category Name */}
              <h3 className="text-base font-semibold text-slate-900 text-center">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCatalog;
