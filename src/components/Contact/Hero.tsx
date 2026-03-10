"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Import/export business related images with consistent paths
  const backgroundImages = [
    "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Industrial machinery
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80", // Engineering workshop
    "/banner.jpeg", // Precision tools
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center h-[420px] md:h-[520px] overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
            transition={{ duration: 1.2 }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Contact Yogiraj Engineering Company
            </h1>
            <p className="text-white/80 text-base md:text-lg mt-4 max-w-2xl mx-auto">
              Questions about our products or services? Reach out for
              specifications, quotes, or guidance.
            </p>

            {/* Image indicator dots */}
            <div className="flex justify-center gap-2 mt-8">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentImageIndex === index
                      ? "w-6 bg-white"
                      : "w-1.5 bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
