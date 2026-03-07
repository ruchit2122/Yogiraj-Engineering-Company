"use client";

import { motion } from "framer-motion";

const QltTstCrtHero = () => {
  const heroImage =
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80";

  return (
    <section className="relative flex items-center h-[520px] md:h-[640px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left: copy + actions */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur text-white text-xs md:text-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-400" />
                ISO-Compliant Procedures
              </div>

              <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Quality Testing &<br /> Certification
              </h1>
              <p className="text-white/70 text-base md:text-lg mt-4 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Calibrations, material tests, and compliance certificates to
                industry standards — ensuring reliability, accuracy, and trust
                in every deliverable.
              </p>

             
            </motion.div>
          </div>

          {/* Right: floating metric cards */}
          <div className="hidden lg:block">
            <div className="relative h-[360px]">
              <motion.div
                className="absolute top-4 right-6 w-56 rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 p-5 text-white"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: [0, -10, 0], opacity: 1 }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <p className="text-xs uppercase tracking-wider text-white/50">
                  Average Turnaround
                </p>
                <p className="mt-1 text-3xl font-bold">48 hrs</p>
                <p className="mt-2 text-xs text-white/40">
                  Priority testing available
                </p>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-0 w-64 rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 p-5 text-white"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: [-6, 6, -6], opacity: 1 }}
                transition={{ duration: 7.5, repeat: Infinity }}
              >
                <p className="text-xs uppercase tracking-wider text-white/50">
                  Calibrations Completed
                </p>
                <p className="mt-1 text-3xl font-bold">10,000+</p>
                <p className="mt-2 text-xs text-white/40">
                  Across gauges & instruments
                </p>
              </motion.div>

              <motion.div
                className="absolute top-28 left-28 w-52 rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 p-5 text-white"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: [8, -8, 8], opacity: 1 }}
                transition={{ duration: 5.5, repeat: Infinity }}
              >
                <p className="text-xs uppercase tracking-wider text-white/50">
                  Accredited Standards
                </p>
                <p className="mt-1 text-xl font-bold">ISO / ASTM / BIS</p>
                <p className="mt-2 text-xs text-white/40">
                  Reports with traceability
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QltTstCrtHero;
