import { motion } from "framer-motion";
import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
  experience: string;
  expertise: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dharmesh Patel",
    position: "Managing Partner",
    image: "/sanjay.jpeg",
    description:
      "Leading the company with over 8 years of engineering excellence and strategic vision.",
    experience: "8+ Years",
    expertise: [
      "Strategic Planning",
      "Business Development",
      "Team Leadership",
    ],
  },
  {
    id: 2,
    name: "Viral Patel",
    position: "Managing Partner",
    image: "/p1.jpeg",
    description:
      "Expert in innovative engineering solutions with a passion for sustainable technology.",
    experience: "8+ Years",
    expertise: [
      "Technical Innovation",
      "Project Management",
      "Quality Assurance",
    ],
  },
];

const Team = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated professionals bring years of experience and expertise
            to deliver exceptional engineering solutions that exceed
            expectations.
          </p>
        </motion.div>

        {/* Team Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto justify-items-center"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              onHoverStart={() => setIsHovered(member.id)}
              onHoverEnd={() => setIsHovered(null)}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative w-full bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                >
                  {member.experience}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2 text-sm">
                  {member.position}
                </p>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                  {member.description}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                {isHovered === member.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-blue-600/5 rounded-xl pointer-events-none"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
