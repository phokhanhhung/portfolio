import { RootState } from "@/store";
import { motion } from "framer-motion";

import { fadeInUp } from "@/utils/animation";
import { useSelector } from "react-redux";

import { dancingScript, greatVibes } from "@/shared/fonts";

const Description = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.mode);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="mb-10 flex justify-center "
    >
      <div className="max-w-xl text-left rounded bg-[#577BC1] w-fit p-10 shadow">
        <h2
          className={`text-2xl font-extrabold mb-4 ${
            isDarkMode ? "text-gray-200" : "text-gray-950"
          } ${greatVibes.className}`}
        >
          What can I do?
        </h2>

        <div
          className={`h-[2px] w-full mb-6 rounded-full ${
            isDarkMode ? "bg-gray-600" : "bg-gray-400"
          }`}
        />

        <ul
          className={`space-y-2 font-extrabold list-disc ${
            isDarkMode ? "text-gray-300" : "text-gray-950"
          } text-xl text-justify ${dancingScript.className}`}
        >
          <li>
            Build responsive landing pages with modern UI and optimized
            performance.
          </li>
          <li>
            Develop reusable and maintainable React/Next.js components with
            TypeScript.
          </li>
          <li>
            Integrate APIs and manage global state using Redux or React Context.
          </li>
          <li>
            Implement animations and interactions with Framer Motion and
            Tailwind transitions.
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Description;
