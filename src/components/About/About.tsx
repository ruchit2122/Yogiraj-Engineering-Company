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
                With over 5+ years of experience in the metal fabrication
                industry, Yogiraj Engineering Company has been manufacturing,
                supplying and exporting a wide gamut of Expansion Bellows and
                Expansion Joints, Strainers, Sight Glasses, Sight Flow
                Indicators, Valves, and Cranes. We are one of the leading names
                in fabricating, exporting &amp; supplying all sorts of Expansion
                Bellows, Joints and Strainers. Our company is an ISO certified
                9001:2015.
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
                Majority of our Expansion Bellows, Strainer, Sight Flow
                Indicator, Valve products, Tank and other Fabrications are
                customised solutions. We design and produce pipe expansion
                joints or metal expansion joints, Strainer, Sight Flow
                Indicator, and Valve in close interaction with customer
                requirements. Furthermore, we are often involved with our
                customers in design and development of new products for
                challenging applications.
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
                Having established and maintained a name that resonates with
                quality, state of the art technology and customer satisfaction,
                you can rest assured that all your flexible piping needs will be
                met with the finest product standards from the house of Yogiraj
                Engineering Company — the leading manufacturer of metal bellows
                expansion joints.
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
                Behind this success is a team of dedicated engineers and
                visionaries with expertise in all types of expansion joints and
                pipe expansion applications, Strainer, Sight Flow Indicator, and
                Valve. Our team boasts of an extensive background in design,
                engineering and producing metal bellows, compensators, hoses and
                fabric and rubber joints.
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
                Our commitment to quality of expansion joints, Strainer, Sight
                Flow Indicator, and Valve starts at the quotation stage itself.
                The products are produced using software designed by our able
                engineers using extensive field research and then tested in our
                in-house testing facilities before delivery.
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
                The main reason behind our immense success is the fabrication of
                a qualitative range of products. We are professionals in
                fabrication, providing finish standard products using
                cutting-edge technologies and the talent of our efficient
                workforce. Our dedicated and experienced team has assisted in
                establishing the foundation and reaching new heights. We are an
                ISO certified 9001:2015 company delivering cost-effective and
                dimensionally accurate products.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutSection;
