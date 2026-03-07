"use client";

import { useEffect, useRef } from "react";

const Services = () => {
  // Removed unused isVisible and hoveredIndex state
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: "🔩",
      title: "Bellows Expansion Joint",
      description:
        "High-quality metallic bellows expansion joints designed to absorb thermal expansion, vibration, and misalignment in piping systems.",
      image: "/YC/Bellows%20Expansion%20Joint/1.jpeg",
      details: "Axial, lateral & angular movement compensation",
      learnMore: "EXPLORE",
      backText:
        "Our bellows expansion joints are precision-engineered from premium stainless steel, ensuring durability and leak-free performance in high-temperature and high-pressure industrial environments.",
    },
    {
      icon: "⚙️",
      title: "Dismantling Joint",
      description:
        "Robust dismantling joints for easy installation, removal, and maintenance of valves, pumps, and other equipment in pipeline systems.",
      image: "/YC/Dismantling%20Joint/DJ1.jpeg",
      details: "Flange-to-flange adjustable length for easy maintenance",
      learnMore: "EXPLORE",
      backText:
        "Engineered for pipeline flexibility, our dismantling joints simplify valve and equipment replacement without disturbing the entire piping layout. Available in all standard sizes and pressure ratings.",
    },
    {
      icon: "🔗",
      title: "Non-Metallic Expansion Joint",
      description:
        "Flexible non-metallic expansion joints ideal for absorbing movement, vibration, and noise in ductwork and piping applications.",
      image: "/YC/Non%20metalic%20Expansion%20joint/1.jpeg",
      details: "Vibration isolation, noise reduction & movement absorption",
      learnMore: "EXPLORE",
      backText:
        "Our non-metallic expansion joints are manufactured using high-grade rubber and fabric materials, providing excellent chemical resistance and flexibility for HVAC, power plant, and industrial duct systems.",
    },
    {
      icon: "🔍",
      title: "Sight Glass",
      description:
        "Industrial sight glasses providing clear visual inspection of fluid flow, level, and condition inside pipelines and vessels.",
      image: "/YC/Sight%20Glass/1.jpeg",
      details: "Full-view, tubular & bull's eye sight glass designs",
      learnMore: "EXPLORE",
      backText:
        "Built with borosilicate glass and heavy-duty body materials, our sight glasses ensure safe and reliable process monitoring across chemical, pharmaceutical, and oil & gas industries.",
    },
    {
      icon: "�️",
      title: "Strainer",
      description:
        "Heavy-duty pipeline strainers designed to protect pumps, valves, and equipment by filtering out debris and unwanted particles from the flow.",
      image: "/YC/Strainer/1.jpeg",
      details: "Y-type, T-type, basket & duplex strainer configurations",
      learnMore: "EXPLORE",
      backText:
        "Our strainers are built to handle demanding industrial conditions with precision-perforated or mesh screens, ensuring consistent flow protection and easy cleaning in water, oil, gas, and chemical systems.",
    },
    {
      icon: "�",
      title: "Telescopic Expansion Joint",
      description:
        "Telescopic expansion joints engineered to accommodate large axial movements in long pipeline runs while maintaining a reliable seal.",
      image: "/YC/Telescopic%20Expansion%20Joint/1.jpeg",
      details: "Large axial travel, leak-proof packing & guide sleeves",
      learnMore: "EXPLORE",
      backText:
        "Designed for water supply, cooling systems, and industrial pipelines, our telescopic expansion joints offer smooth sliding action with durable packing materials for long service life and minimal maintenance.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        // Only trigger animation or logic if needed in the future
      },
      { threshold: 0.1 },
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <section
      aria-label="Our Products"
      className="font-sans bg-[#f9f9f5] text-zinc-900 min-h-screen"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="text-left mb-12">
          <span className="text-zinc-900 text-xl font-bold tracking-wide font-serif">
            Our Products
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#80D8C3] mb-4 drop-shadow-lg shadow-[#80D8C3]/80">
            Precision-Engineered Industrial Products
          </h2>
          <p className="text-base text-zinc-900 max-w-xl">
            Explore our comprehensive range of expansion joints, strainers,
            sight glasses, and more — built for performance and durability.
          </p>
        </div>
        <div ref={servicesRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative group h-80">
                <div className="flip-card h-full">
                  <div className="flip-card-inner h-full">
                    {/* Back (now shown first) - glassmorphism with Intro color scheme */}
                    <div className=" flip-card-front bg-[#f9f9f5] border hover:border-[#4DA8DA] rounded-xl h-full flex flex-col items-start justify-center p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                      <span className="text-4xl mb-3">{service.icon}</span>
                      <h3 className="text-lg font-bold text-zinc-900 mb-2 text-left">
                        {service.title}
                      </h3>
                      <p className="text-sm text-zinc-900 text-left mb-4">
                        {service.description}
                      </p>
                      <div className="mt-auto text-xs text-zinc-900 text-left w-full">
                        <p>{service.details}</p>
                        <p className="mt-2  text-zinc-900 font-bold">
                          Why choose us?
                        </p>
                        <ul className="list-disc list-inside text-zinc-900 text-xs">
                          <li>Premium quality materials</li>
                          <li>Custom sizes & specifications</li>
                          <li>Trusted by industries worldwide</li>
                        </ul>
                      </div>
                    </div>
                    {/* Front (now shown on hover) - glassmorphism with Intro color scheme */}
                    <div className="flip-card-back bg-white border hover:border-[#4DA8DA] rounded-xl h-full flex flex-col items-start justify-center p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                      <h3 className="text-lg font-bold text-zinc-900 mb-2 text-left">
                        {service.title}
                      </h3>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-24 object-cover rounded mb-2 shadow-[0_8px_24px_rgba(128,216,195,0.25)]"
                      />
                      <p className="text-sm text-zinc-900 text-left mb-2">
                        {service.details}
                      </p>
                      <p className="text-xs text-zinc-900 text-left">
                        {service.backText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease;
          transform-style: preserve-3d;
        }
        .group:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-card-front {
          transform: rotateY(180deg);
        }
        .flip-card-back {
          transform: rotateY(0deg);
        }
      `}</style>
    </section>
  );
};

export default Services;
