import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import ProjectCard from "@/shared/common/ProjectCard";

import { projects } from "./const";

const Projects = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.mode);

  return (
    <motion.section
      className="mb-16"
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
        Projects
      </h2>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
