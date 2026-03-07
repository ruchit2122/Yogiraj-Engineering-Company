import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const AboutSection = () => {
  return (
    <div>
      {/* ─── Company Introduction & Journey ─── */}
      <Section className="bg-[#f9f9f5] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-zinc-900 text-xl font-bold tracking-wide font-serif mb-3"
          >
            About Company
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#80D8C3] drop-shadow-lg mb-10"
            style={{ textShadow: "0 4px 12px rgba(128,216,195,0.4)" }}
          >
            Company Introduction &amp; Journey
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              custom={2}
              className="group rounded-xl border bg-white p-8 shadow-lg hover:border-[#4DA8DA] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[#FFD66B]">
                <svg
                  className="h-5 w-5 text-zinc-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <p className="text-lg text-zinc-600 leading-relaxed text-justify">
                Founded in 1985, Yogiraj Engineering Company has grown from a
                small workshop to one of India's leading manufacturers of
                industrial components. With over 35 years of experience, we have
                established ourselves as pioneers in the design and production
                of customized expansion bellows, strainers, sight flow
                indicators, valves, and other critical industrial components.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="group rounded-xl border bg-white p-8 shadow-lg hover:border-[#4DA8DA] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[#FFD66B]">
                <svg
                  className="h-5 w-5 text-zinc-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <p className="text-lg text-zinc-600 leading-relaxed text-justify">
                Our journey has been marked by continuous innovation, unwavering
                commitment to quality, and deep understanding of industrial
                challenges. From our humble beginnings to our current
                state-of-the-art manufacturing facility, we have maintained our
                core values of excellence, integrity, and customer-centricity
                throughout our evolution.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ─── Our Vision ─── */}
      <Section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-zinc-900 text-xl font-bold tracking-wide font-serif mb-3"
          >
            Looking Ahead
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#80D8C3] drop-shadow-lg mb-10"
            style={{ textShadow: "0 4px 12px rgba(128,216,195,0.4)" }}
          >
            Our Vision
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              custom={2}
              className="group rounded-xl border bg-[#f9f9f5] p-8 shadow-lg hover:border-[#4DA8DA] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[#FFD66B]">
                <svg
                  className="h-5 w-5 text-zinc-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-bold text-zinc-800 mb-3">
                Global Leadership
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed text-justify">
                At Yogiraj Engineering Company, our vision is to be the global
                leader in innovative industrial component solutions that drive
                efficiency, safety, and sustainability across all sectors. We
                envision a future where our products are the industry standard
                for reliability and performance, contributing to the advancement
                of industrial infrastructure worldwide.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="group rounded-xl border bg-[#f9f9f5] p-8 shadow-lg hover:border-[#4DA8DA] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[#FFD66B]">
                <svg
                  className="h-5 w-5 text-zinc-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-bold text-zinc-800 mb-3">
                Technological Innovation
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed text-justify">
                We strive to be at the forefront of technological innovation,
                continuously pushing the boundaries of what's possible in
                industrial component design and manufacturing. Our sight flow
                indicators and sight glasses exemplify this vision, providing
                unparalleled precision and reliability for critical monitoring
                applications across diverse industrial environments.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ─── Our Mission ─── */}
      <Section className="bg-[#f9f9f5] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-zinc-900 text-xl font-bold tracking-wide font-serif mb-3"
          >
            What Drives Us
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#80D8C3] drop-shadow-lg mb-10"
            style={{ textShadow: "0 4px 12px rgba(128,216,195,0.4)" }}
          >
            Our Mission
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              custom={2}
              className="group rounded-xl border bg-white p-8 shadow-lg hover:border-[#4DA8DA] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[#FFD66B]">
                <svg
                  className="h-5 w-5 text-zinc-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-bold text-zinc-800 mb-3">
                Delivering Exceptional Value
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed text-justify">
                Our mission is to deliver exceptional value to our customers
                through innovative, high-quality industrial components that
                solve complex challenges and enhance operational efficiency. We
                are committed to understanding each customer's unique
                requirements and providing tailored solutions that exceed
                expectations in performance, durability, and safety.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="group rounded-xl border bg-white p-8 shadow-lg hover:border-[#4DA8DA] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[#FFD66B]">
                <svg
                  className="h-5 w-5 text-zinc-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-bold text-zinc-800 mb-3">
                Innovation &amp; Excellence
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed text-justify">
                We accomplish this mission through continuous investment in
                research and development, advanced manufacturing technologies,
                and our team of highly skilled engineers and technicians. Our
                comprehensive range of valves, cranes, and strainers exemplifies
                this commitment, engineered to deliver optimal performance and
                reliability even in the most demanding industrial environments.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutSection;
