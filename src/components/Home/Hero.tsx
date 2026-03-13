"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function EngineeringHero() {
  // Video logic removed for YouTube background

  const services = [
    {
      icon: (
        <img
          src="/settings.svg"
          alt="Engineering & Manufacturing Icon"
          style={{
            width: 24,
            height: 24,
            animation: "spin 2s linear infinite",
          }}
        />
      ),
      title: "Engineering & Manufacturing",
      description:
        "Design and manufacturing of high-quality industrial flow components including Metal Bellows, Fabric & Rubber Expansion Joints, Strainers, and Dismantling Joints.",
    },
    {
      icon: (
        <img
          src="/briefcase.svg"
          alt="Custom Design & Engineering Icon"
          style={{ width: 24, height: 24 }}
        />
      ),
      title: "Custom Design & Engineering Solutions",
      description:
        "Custom design solutions based on pressure, temperature, and movement requirements with materials like SS304, SS316, Carbon Steel, and Alloy Steel.",
    },
    {
      icon: (
        <img
          src="/user-check.svg"
          alt="Repair & Refurbishment Icon"
          style={{ width: 24, height: 24 }}
        />
      ),
      title: "Repair & Refurbishment Services",
      description:
        "Bellows repair, mesh replacement, strainer refurbishment, and reconditioning of dismantling joints - all tested before delivery.",
    },
    {
      icon: (
        <img
          src="/check-square.svg"
          alt="Quality Inspection & Testing Icon"
          style={{ width: 24, height: 24 }}
        />
      ),
      title: "Quality Inspection & Testing",
      description:
        "Dimensional inspection, pressure testing, material verification, and visual & welding inspection to meet the highest industry standards.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/YC/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>

      <div className="relative z-10 flex items-center min-h-screen px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl text-left text-white">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="text-white text-sm font-medium">
                INNOVATIVE ENGINEERING SOLUTIONS
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance drop-shadow-lg"
              style={{
                textShadow:
                  "0 6px 16px rgba(0,0,0,0.45), 0 12px 32px rgba(0,0,0,0.25)",
              }}
            >
              Engineering Excellence for{" "}
              <span className="text-blue-400">Tomorrow's World</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white border-0 h-14 px-8 text-lg rounded-lg flex items-center justify-center transition-colors shadow-lg"
                style={{ minHeight: "3.5rem" }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/products"
                className="border-white/30 hover:bg-white/10 bg-white/5 text-white backdrop-blur-sm h-14 px-8 text-lg rounded-lg flex items-center justify-center transition-colors shadow"
                style={{
                  minHeight: "3.5rem",
                  borderWidth: 1,
                  borderStyle: "solid",
                }}
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-serif font-bold text-[#178067] mb-6 drop-shadow-lg shadow-[#80D8C3]/80">
              Our Core Services
            </h2>
            <p className="text-[zinc-600] text-lg max-w-2xl mx-auto text-left ">
              Comprehensive engineering solutions tailored to meet the demands
              of modern industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-[#ffd66b] border border-slate-200 rounded-2xl hover:border-[#FFD66B] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 shadow-sm"
              >
                <div className="w-14 h-14 bg-[#F5F5F5] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFD66B] transition-colors hover:border-[#4DA8DA] hover:border-2">
                  <div className="text-blue-600">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 text-left">
                  {service.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed mb-4 text-left">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-[#4DA8DA] text-sm font-medium group-hover:text-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
