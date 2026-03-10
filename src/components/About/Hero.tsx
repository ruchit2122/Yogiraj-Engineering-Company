import { motion, useReducedMotion, type Transition } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ShuffleHero = () => {
  return (
    <section className="w-full px-6 sm:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 max-w-7xl mx-auto">
      <motion.div
        className="max-w-xl space-y-5 md:space-y-6"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="inline-block mb-1 text-xs md:text-sm text-yellow-400 font-semibold uppercase tracking-widest">
          About Yogiraj Engineering
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
          Precision Engineering{" "}
          <span className="text-indigo-600">for Industry</span> &amp;
          Infrastructure
        </h1>

        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-prose">
          We design, manufacture, and maintain high‑performance engineering
          solutions - from custom fabrication and machining to onsite
          installation and lifecycle service.
        </p>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-prose">
          Partner with a team trusted by leading industries for quality, safety,
          and speed.
        </p>

        <motion.div
          className="flex flex-wrap items-center gap-4 pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/products"
            className="inline-flex items-center bg-indigo-600 text-white font-medium py-3 px-7 rounded-lg transition-all hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600 shadow-sm"
            aria-label="Explore engineering Products and services"
          >
            Explore Products
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center border-2 border-indigo-600 text-indigo-600 font-medium py-3 px-7 rounded-lg transition-all hover:bg-indigo-50 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
            aria-label="Contact us"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <ShuffleGrid />
      </motion.div>
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/YC/Bellows%20Expansion%20Joint/1.jpeg",
  },
  {
    id: 2,
    src: "/YC/Bellows%20Expansion%20Joint/5.jpeg",
  },
  {
    id: 3,
    src: "/YC/Dismantling%20Joint/DJ1.jpeg",
  },
  {
    id: 4,
    src: "/YC/Dismantling%20Joint/DJ3.jpeg",
  },
  {
    id: 5,
    src: "/YC/Non%20metalic%20Expansion%20joint/1.jpeg",
  },
  {
    id: 6,
    src: "/YC/Non%20metalic%20Expansion%20joint/2.jpeg",
  },
  {
    id: 7,
    src: "/YC/Sight%20Glass/1.jpeg",
  },
  {
    id: 8,
    src: "/YC/Sight%20Glass/3.jpeg",
  },
  {
    id: 9,
    src: "/YC/Strainer/1.jpeg",
  },
  {
    id: 10,
    src: "/YC/Strainer/5.jpeg",
  },
  {
    id: 11,
    src: "/YC/Strainer/10.jpeg",
  },
  {
    id: 12,
    src: "/YC/Telescopic%20Expansion%20Joint/1.jpeg",
  },
  {
    id: 13,
    src: "/YC/Telescopic%20Expansion%20Joint/2.jpeg",
  },
  {
    id: 14,
    src: "/YC/Bellows%20Expansion%20Joint/SEJ3.jpeg",
  },
  {
    id: 15,
    src: "/YC/Bellows%20Expansion%20Joint/REJ1.jpeg",
  },
  {
    id: 16,
    src: "/YC/Dismantling%20Joint/DJ5.jpeg",
  },
];

const generateSquares = (shouldReduceMotion: boolean) => {
  const transition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 1.2, type: "spring" };
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={transition}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [squares, setSquares] = useState(generateSquares(shouldReduceMotion));

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares(shouldReduceMotion));

    if (!shouldReduceMotion) {
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    }
  };

  return (
    <div
      className="grid grid-cols-4 grid-rows-4 h-[350px] sm:h-[400px] md:h-[450px] gap-1.5 rounded-2xl overflow-hidden shadow-xl"
      aria-hidden="true"
      role="presentation"
    >
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
