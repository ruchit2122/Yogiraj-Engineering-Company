"use client";

import { useEffect, useRef } from "react";

const Services = () => {
  // Removed unused isVisible and hoveredIndex state
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: "🏭",
      title: "Engineering & Manufacturing",
      description:
        "At YEC – Yogiraj Engineering Company, we specialize in the design and manufacturing of high-quality industrial flow components using advanced machinery and strict quality standards.",
      image: "/YC/Bellows%20Expansion%20Joint/1.jpeg",
      details:
        "Products manufactured to international standards & customized per client requirements",
      learnMore: "EXPLORE",
      backText:
        "Our products are manufactured using advanced machinery and strict quality standards to ensure durability and performance in demanding industrial applications. All products are manufactured according to international standards and customized based on client requirements.",
      bullets: [
        "Metal Bellows Expansion Joints",
        "Fabric & Rubber Expansion Joints",
        "Industrial Strainers & Dismantling Joints",
      ],
    },
    {
      icon: "📐",
      title: "Custom Design & Engineering Solutions",
      description:
        "Every industrial system has unique operational conditions. Our engineering team provides custom design solutions tailored to the client's project specifications.",
      image: "/YC/Dismantling%20Joint/DJ1.jpeg",
      details: "Maximum efficiency, safety & reliability in plant operations",
      learnMore: "EXPLORE",
      backText:
        "We support customers with design based on pressure, temperature, and movement requirements, selection of suitable materials such as SS304, SS316, Carbon Steel, and Alloy Steel, engineering drawings, technical documentation, and product customization for special applications.",
      bullets: [
        "Pressure, temperature & movement-based design",
        "SS304, SS316, Carbon & Alloy Steel materials",
        "Engineering drawings & technical documentation",
      ],
    },
    {
      icon: "🔧",
      title: "Repair & Refurbishment Services",
      description:
        "We provide repair and refurbishment services for expansion joints and strainers to extend product life and reduce replacement costs.",
      image: "/YC/Non%20metalic%20Expansion%20joint/1.jpeg",
      details: "All repaired components tested before delivery",
      learnMore: "EXPLORE",
      backText:
        "Our repair services include expansion joint bellows repair, replacement of damaged mesh or perforated sheets, refurbishment of industrial strainers, and reconditioning of dismantling joints. All repaired components are tested before delivery to ensure proper functionality.",
      bullets: [
        "Expansion joint bellows repair",
        "Mesh & perforated sheet replacement",
        "Strainer & dismantling joint refurbishment",
      ],
    },
    {
      icon: "✅",
      title: "Quality Inspection & Testing",
      description:
        "Quality is a core part of our manufacturing process. Each product undergoes strict inspection and testing before dispatch.",
      image: "/YC/Sight%20Glass/1.jpeg",
      details: "Products meet the highest industry standards",
      learnMore: "EXPLORE",
      backText:
        "Our quality control process includes dimensional inspection, pressure testing, material verification, and visual and welding inspection. This ensures our products meet the highest industry standards.",
      bullets: [
        "Dimensional & pressure testing",
        "Material verification",
        "Visual and welding inspection",
      ],
    },
    {
      icon: "🌍",
      title: "Export & Global Supply",
      description:
        "We actively serve international markets, especially in the UAE and Middle East region. Our export services include complete logistics support.",
      image: "/YC/Strainer/1.jpeg",
      details: "Reliable industrial components delivered to clients worldwide",
      learnMore: "EXPLORE",
      backText:
        "We provide export packing in wooden boxes, documentation support, coordination with freight forwarders, and timely shipment delivery. Our goal is to deliver reliable industrial components to clients worldwide.",
      bullets: [
        "Export packing & documentation support",
        "Freight forwarder coordination",
        "Timely global shipment delivery",
      ],
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
      aria-label="Core Services"
      className="font-sans bg-[#f9f9f5] text-zinc-900 min-h-screen"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="text-left mb-12">
          <span className="text-zinc-900 text-xl font-bold tracking-wide font-serif">
            Core Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#80D8C3] mb-4 drop-shadow-lg shadow-[#80D8C3]/80">
            Engineering Excellence & Industrial Solutions
          </h2>
          <p className="text-base text-zinc-900 max-w-xl">
            From custom design and manufacturing to quality testing and global
            export — delivering complete industrial solutions.
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
                          Our expertise includes:
                        </p>
                        <ul className="list-disc list-inside text-zinc-900 text-xs">
                          {service.bullets.map((bullet: string, i: number) => (
                            <li key={i}>{bullet}</li>
                          ))}
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
