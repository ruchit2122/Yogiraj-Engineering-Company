import { motion } from "framer-motion";

const clientLogos = [
  "001.png",
  "002.jpg",
  "003.png",
  "004.jpg",
  "005.jpg",
  "006.png",
  "007.png",
  "008.png",
  "009.jpg",
  "010.png",
  "011.jpg",
  "012.jpg",
  "013.jpg",
  "014.jpg",
  "015.png",
  "016.png",
  "017.png",
  "018.jpg",
  "020.png",
  "021.png",
  "022.png",
  "023.jpg",
  "024.png",
  "025.png",
  "026.png",
  "027.jpg",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, duration: 0.5 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const exportLogos = [
  "028.jpg",
  "029.jpg",
  "030.jpg",
  "031.png",
  "032.png",
  "033.png",
  "034.jpg",
  "035.png",
  "036.png",
];

const Client = () => {
  return (
    <section className="relative py-20 px-4 bg-white text-blakc overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Domestic Clients Header */}
        <motion.div className="text-left mb-12" variants={item}>
          <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight mb-3">
            Our Domestic Clients
          </h2>
          <div className="w-16 h-0.5 bg-yellow-400" />
        </motion.div>

        {/* Domestic Logo Grid */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6"
          variants={container}
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group flex items-center justify-center p-3 md:p-4 aspect-square"
            >
              <img
                src={`/Yogiraj Client picture/${logo}`}
                alt={`Client ${index + 1}`}
                className="max-w-full max-h-full 0"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Export Clients Header */}
        <motion.div className="text-left mt-20 mb-12" variants={item}>
          <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight mb-3">
            Our Export Clients
          </h2>
          <div className="w-16 h-0.5 bg-yellow-400" />
        </motion.div>

        {/* Export Logo Grid */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6"
          variants={container}
        >
          {exportLogos.map((logo, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group flex items-center justify-center p-3 md:p-4 aspect-square"
            >
              <img
                src={`/OUR EXPORT CLIENTS/${logo}`}
                alt={`Export Client ${index + 1}`}
                className="max-w-full max-h-full 0"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Client;
