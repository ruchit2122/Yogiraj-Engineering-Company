import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    happyClients: 0,
    workCompleted: 0,
    satisfaction: 0,
    telephonicTalk: 0,
  });

  const targetCounts = {
    happyClients: 150,
    workCompleted: 1000,
    satisfaction: 99,
    telephonicTalk: 9999,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const animateCount = (key: keyof typeof targetCounts) => {
        const target = targetCounts[key];
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCounts((prev) => ({ ...prev, [key]: target }));
            clearInterval(timer);
          } else {
            setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
          }
        }, stepDuration);
      };

      // Animate all counters
      Object.keys(targetCounts).forEach((key) => {
        animateCount(key as keyof typeof targetCounts);
      });
    }
  }, [isVisible]);

  return (
    <section
      aria-label="Company introduction"
      className="font-sans bg-[#f9f9f5] text-zinc-900 min-h-screen"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Company Information */}
          <div className="space-y-8">
            {/* About Company Badge */}
            <div className="inline-flex items-center">
              <span className="text-zinc-900 text-xl font-bold tracking-wide font-serif">
                About Company
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl font-serif font-bold text-[#80D8C3] mb-6 drop-shadow-lg shadow-[#80D8C3]/80">
              Expert in Resolve Complex Issues
            </h1>

            {/* Company Description */}
            <p className="text-left text-lg text-zinc-600 leading-relaxed max-w-lg ">
              We specialize in delivering innovative engineering solutions that
              transform complex challenges into successful outcomes. Our
              expertise spans across multiple industries with a focus on
              precision and reliability.
            </p>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border hover:border-[#4DA8DA] rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-[#FFD66B] rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-zinc-900"
                      fill="none"
                      stroke="red"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-zinc-800">
                    Quality Assurance
                  </h3>
                </div>
                <p className="ml-2 text-left text-zinc-600 text-sm">
                  ISO-certified processes ensuring the highest standards in
                  every project we undertake.
                </p>
              </div>

              <div className="p-4 border hover:border-[#4DA8DA] rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-[#FFD66B] rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-zinc-600"
                      fill="none"
                      stroke="red"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-zinc-800">
                    Fast Delivery
                  </h3>
                </div>
                <p className="ml-2 text-left text-zinc-600 text-sm">
                  Rapid prototyping and quick turnaround times without
                  compromising on quality.
                </p>
              </div>

              <div className="p-4 border hover:border-[#4DA8DA] rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-[#FFD66B] rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-zinc-600"
                      fill="none"
                      stroke="red"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-zinc-800">
                    Expert Team
                  </h3>
                </div>
                <p className="ml-2 text-left text-zinc-600 text-sm">
                  Highly skilled engineers with decades of combined experience
                  in the field.
                </p>
              </div>

              <div className="p-4 border hover:border-[#4DA8DA] rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-[#FFD66B] rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-zinc-600 animate-spin-slow"
                      fill="none"
                      stroke="red"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-zinc-800">
                    Custom Solutions
                  </h3>
                </div>
                <p className="ml-2 text-left text-zinc-600 text-sm">
                  Tailored engineering solutions designed to meet your specific
                  requirements.
                </p>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/services"
                className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-zinc-800 transition-colors inline-block"
              >
                OUR SERVICES
              </Link>
            </div>
          </div>

          {/* Right Section - Minimal Visual Element */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xl">
              <img
                src="/banner.jpeg" // Update the path as needed
                alt="Engineering Team"
                className="rounded-lg  h-auto w-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div
          id="stats-section"
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zinc-800 mb-1">
              {counts.happyClients.toLocaleString()}+
            </div>
            <div className="text-zinc-500 font-medium uppercase tracking-wide text-xs">
              HAPPY CLIENTS
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zinc-800 mb-1">
              {counts.workCompleted.toLocaleString()}+
            </div>
            <div className="text-zinc-500 font-medium uppercase tracking-wide text-xs">
              WORK COMPLETED
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zinc-800 mb-1">
              {counts.satisfaction.toLocaleString()}%
            </div>
            <div className="text-zinc-500 font-medium uppercase tracking-wide text-xs">
              CLIENT SATISFACTION
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zinc-800 mb-1">
              {counts.telephonicTalk.toLocaleString()}+
            </div>
            <div className="text-zinc-500 font-medium uppercase tracking-wide text-xs">
              TELEPHONIC TALK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
