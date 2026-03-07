"use client";

import { useState } from "react";
import { Search, Eye, ArrowUpRight } from "lucide-react";

const EngineeringGallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/YC/Bellows Expansion Joint/1.jpeg",
      alt: "Metallic Bellows Expansion Joint",
      className: "row-span-2",
      photographer: "Yogiraj Engineering",
      project: "Bellows Expansion Joint",
    },
    {
      id: 2,
      src: "/YC/Strainer/1.jpeg",
      alt: "Industrial Y-Type Strainer",
      className: "row-span-1",
      photographer: "Yogiraj Engineering",
      project: "Strainer Manufacturing",
    },
    {
      id: 3,
      src: "/YC/Dismantling Joint/DJ1.jpeg",
      alt: "Flanged Dismantling Joint",
      className: "row-span-2",
      photographer: "Yogiraj Engineering",
      project: "Dismantling Joint",
    },
    {
      id: 4,
      src: "/YC/Bellows Expansion Joint/REJ1.jpeg",
      alt: "Rectangular Expansion Joint",
      className: "row-span-2",
      photographer: "Yogiraj Engineering",
      project: "Expansion Joint Series",
    },
    {
      id: 5,
      src: "/YC/Sight Glass/1.jpeg",
      alt: "Flanged Sight Glass Indicator",
      className: "row-span-1",
      photographer: "Yogiraj Engineering",
      project: "Sight Glass",
    },
    {
      id: 6,
      src: "/YC/Telescopic Expansion Joint/1.jpeg",
      alt: "Telescopic Expansion Joint",
      className: "row-span-3",
      photographer: "Yogiraj Engineering",
      project: "Telescopic Joint",
    },
    {
      id: 7,
      src: "/YC/Non metalic Expansion joint/1.jpeg",
      alt: "Non-Metallic Expansion Joint",
      className: "row-span-1",
      photographer: "Yogiraj Engineering",
      project: "Non-Metallic Joint",
    },
    {
      id: 8,
      src: "/YC/Bellows Expansion Joint/SEJ2.jpg",
      alt: "Single Expansion Joint Assembly",
      className: "row-span-2",
      photographer: "Yogiraj Engineering",
      project: "Single Expansion Joint",
    },
    {
      id: 9,
      src: "/YC/Strainer/4.jpeg",
      alt: "Basket Type Strainer",
      className: "row-span-2",
      photographer: "Yogiraj Engineering",
      project: "Basket Strainer",
    },
    {
      id: 10,
      src: "/YC/Dismantling Joint/DJ3.jpeg",
      alt: "Large Bore Dismantling Joint",
      className: "row-span-3",
      photographer: "Yogiraj Engineering",
      project: "Dismantling Joint",
    },
    {
      id: 11,
      src: "/YC/Bellows Expansion Joint/UEJ1.jpeg",
      alt: "Universal Expansion Joint",
      className: "row-span-1",
      photographer: "Yogiraj Engineering",
      project: "Universal Joint",
    },
    {
      id: 12,
      src: "/YC/Strainer/8.jpeg",
      alt: "Duplex Strainer Assembly",
      className: "row-span-2",
      photographer: "Yogiraj Engineering",
      project: "Duplex Strainer",
    },
    {
      id: 13,
      src: "/YC/Bellows Expansion Joint/TEJ1.jpeg",
      alt: "Tied Expansion Joint",
      className: "row-span-2",
      photographer: "Yogiraj Engineering",
      project: "Tied Expansion Joint",
    },
    {
      id: 14,
      src: "/YC/Sight Glass/3.jpeg",
      alt: "Tubular Sight Glass",
      className: "row-span-3",
      photographer: "Yogiraj Engineering",
      project: "Sight Glass",
    },
    {
      id: 15,
      src: "/YC/Non metalic Expansion joint/2.jpeg",
      alt: "Fabric Expansion Joint",
      className: "row-span-1",
      photographer: "Yogiraj Engineering",
      project: "Fabric Joint",
    },
    {
      id: 16,
      src: "/YC/Bellows Expansion Joint/5.jpeg",
      alt: "SS Bellows Expansion Joint",
      className: "row-span-2",
      photographer: "Yogiraj Engineering",
      project: "Bellows Joint",
    },
    {
      id: 17,
      src: "/YC/Dismantling Joint/DJ5.jpeg",
      alt: "Ductile Iron Dismantling Joint",
      className: "row-span-2",
      photographer: "Yogiraj Engineering",
      project: "Dismantling Joint",
    },
    {
      id: 18,
      src: "/YC/Strainer/12.jpeg",
      alt: "T-Type Strainer",
      className: "row-span-1",
      photographer: "Yogiraj Engineering",
      project: "T-Type Strainer",
    },
    {
      id: 19,
      src: "/YC/Bellows Expansion Joint/10.jpeg",
      alt: "High Pressure Bellows Joint",
      className: "row-span-3",
      photographer: "Yogiraj Engineering",
      project: "HP Bellows Joint",
    },
    {
      id: 20,
      src: "/YC/Telescopic Expansion Joint/2.jpeg",
      alt: "Telescopic Joint Close-Up",
      className: "row-span-2",
      photographer: "Yogiraj Engineering",
      project: "Telescopic Joint",
    },
    {
      id: 21,
      src: "/YC/Sight Glass/4.jpeg",
      alt: "Double Window Sight Glass",
      className: "row-span-2",
      photographer: "Yogiraj Engineering",
      project: "Sight Glass",
    },
    {
      id: 22,
      src: "/YC/Bellows Expansion Joint/REJ2.jpeg",
      alt: "Rectangular Bellows Joint",
      className: "row-span-1",
      photographer: "Yogiraj Engineering",
      project: "Rectangular Joint",
    },
    {
      id: 23,
      src: "/YC/Dismantling Joint/DJ7.jpeg",
      alt: "Painted Dismantling Joint",
      className: "row-span-3",
      photographer: "Yogiraj Engineering",
      project: "Dismantling Joint",
    },
    {
      id: 24,
      src: "/YC/Bellows Expansion Joint/15.jpeg",
      alt: "Multi-Ply Bellows Expansion Joint",
      className: "row-span-2",
      photographer: "Yogiraj Engineering",
      project: "Multi-Ply Bellows",
    },
  ];

  const heroBackgroundImage = "/YC/Company Photo/1.jpeg";

  const filteredImages = galleryImages.filter(
    (img) =>
      !searchQuery ||
      img.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.project.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('${heroBackgroundImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/50 to-zinc-900/80" />
        </div>

        <div className="relative z-10 flex flex-col justify-end h-full">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16">
            <div className="max-w-2xl">
              <span className="inline-block mb-4 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 ring-1 ring-white/20">
                Our Work
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-[1.1]">
                Product Gallery
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                Explore our range of precision-engineered expansion joints,
                strainers, sight glasses, and dismantling joints manufactured at
                Yogiraj Engineering Company.
              </p>
            </div>

            {/* Search integrated in hero */}
            <div className="mt-8 max-w-md">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border-0 bg-white/10 backdrop-blur-md pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/50 ring-1 ring-white/20 focus:ring-2 focus:ring-emerald-400 focus:bg-white/15 outline-none transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <p className="text-sm text-zinc-500">
              Showing{" "}
              <span className="font-semibold text-zinc-800">
                {filteredImages.length}
              </span>{" "}
              products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-[200px]">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.className}`}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Default dark gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top gradient for icons */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Action icons - top right */}
                <div className="absolute top-3 right-3 z-20 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-100">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md ring-1 ring-white/30 hover:bg-white/30 transition-colors">
                    <Eye className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md ring-1 ring-white/30 hover:bg-white/30 transition-colors">
                    <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>

                {/* Category pill - top left */}
                <div className="absolute top-3 left-3 z-20 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 delay-75">
                  <span className="inline-block rounded-full bg-emerald-500/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                    {image.project}
                  </span>
                </div>

                {/* Bottom info panel */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="font-bold text-sm text-white leading-snug mb-0.5 drop-shadow-md">
                    {image.alt}
                  </h3>
                  <p className="text-[11px] text-white/70 font-medium">
                    {image.project}
                  </p>
                </div>

                {/* Subtle ring on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl ring-2 transition-all duration-500 pointer-events-none ${
                    hoveredId === image.id
                      ? "ring-emerald-400/50 shadow-lg shadow-emerald-500/10"
                      : "ring-transparent"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringGallery;
