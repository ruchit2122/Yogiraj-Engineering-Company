import { motion } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Avijit Mondal",
    company: "Paharpur Cooling Towers Limited",
    text: "We have been sourcing metal bellows and strainers from this company for several years. The product quality, dimensional accuracy, and timely delivery are excellent. Their technical support team is very responsive and understands industrial requirements clearly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mr. Arvinda Singh",
    company: "L&T Construction",
    text: "Dismantling joints supplied were perfectly matched to our project specifications. Installation was smooth and inspection approval was received without any issue. Highly recommended for industrial pipeline solutions.",
    rating: 5,
  },
  {
    id: 3,
    name: "AL MANAR CO.",
    company: "UAE",
    text: "We regularly import expansion bellows and strainers for our projects. Packaging, documentation, and quality compliance are always proper. Reliable supplier for international projects.",
    rating: 5,
  },
  {
    id: 4,
    name: "Mr. Sandeep Sharma",
    company: "NTPC Limited - Power Plant Project",
    text: "Their stainless steel bellows performed very well under high temperature and pressure conditions. Manufacturing quality and finishing are impressive.",
    rating: 5,
  },
  {
    id: 5,
    name: "Mr. Aditya Kumar Shaw",
    company: "NMDC Steel Plant - Maintenance Team",
    text: "The Bellows Expansion joint supplied helped us reduce maintenance downtime significantly. Easy installation and perfect fitment.",
    rating: 5,
  },
];

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.5 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Testimonials = () => {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative py-20 px-4 bg-[#0b0b10] text-white overflow-hidden">
      <motion.div
        className="relative max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-14" variants={item}>
          <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-neutral-400">
            Trusted by leading companies for precision engineering solutions.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <motion.div
          className="relative"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8"
              animate={{
                x: [0, -50 * 16],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{ width: "fit-content" }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 md:w-96"
                >
                  <div className="relative rounded-2xl bg-neutral-900/70 border border-neutral-800 p-6 md:p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:border-neutral-700 transition-colors h-full flex flex-col">
                    {/* Star Rating */}
                    <div className="flex items-center justify-start gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-neutral-300 leading-relaxed text-sm md:text-base text-left flex-1 mb-5">
                      "{testimonial.text}"
                    </p>

                    <div className="border-t border-neutral-800 pt-4 text-left">
                      <div className="font-semibold text-sm leading-tight">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-neutral-500 mt-1">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
