import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import ProjectCard from "@/shared/common/ProjectCard";

const AboutPortfolio = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.mode);

  return (
    <motion.div
      className="mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUp}
    >
      <h2
        className={`text-2xl font-semibold mb-4 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        About This Portfolio
      </h2>
      <ProjectCard
        title="About This Portfolio"
        description={[
          "This is the website you are currently viewing. It showcases my projects, skills, and background in a clean, responsive layout.",
          "Built with Next.js, Tailwind CSS, and Motion, the site features animated components, and smooth transitions to enhance user experience.",
        ]}
        techStack="Built with: Next.js, TypeScript, Tailwind CSS, Motion"
        projectLink="https://github.com/phokhanhhung/portfolio"
      />
    </motion.div>
  );
};

export default AboutPortfolio;
