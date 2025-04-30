import { motion } from "framer-motion";

import { fadeInUp } from "@/utils/animation";

import { Card, CardContent } from "../../shared/ui/card";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

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

      {/* Container for spacing between cards */}
      <div className="flex flex-col gap-10">
        {/* Project 1 */}
        <motion.div
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Card className="bg-[#D9EAFD] rounded-xl shadow-lg overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600">Evestar</span>
              </h3>
              <div className="text-sm text-justify text-gray-700 space-y-4">
                <p>
                  Evestar is a user-friendly platform that allows individuals to
                  build personal event websites using built-in components — no
                  coding required. Think of it like a personal-focused WordPress
                  with cleaner UI.
                </p>
                <p>
                  My role involved developing reusable components, ensuring
                  responsive layouts, and streamlining the overall user
                  experience. I worked on improving the visual editing
                  experience and builder performance.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 text-sm text-gray-500">
                <svg
                  className="w-5 h-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a5 5 0 1110 0 5 5 0 01-10 0zm1 0a4 4 0 108 0 4 4 0 00-8 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Built with Next.js, TypeScript, Redux</span>
              </div>
              <p className="text-sm italic text-gray-500 mt-4">
                Note: Due to confidentiality and security policies, the source
                code and certain implementation details of this project cannot
                be publicly disclosed.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Card className="bg-[#D9EAFD] rounded-xl shadow-lg overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600">Frailty Management System</span>
              </h3>
              <div className="text-sm text-justify text-gray-700 space-y-4">
                <p>
                  This project is a health management platform built with
                  Next.js and Redux, designed to track and analyze frailty data
                  of users in Japan. The system allows users to complete health
                  surveys, review their past responses, and visualize their
                  health trends over time through dynamically generated charts.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 text-sm text-gray-500">
                <svg
                  className="w-5 h-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a5 5 0 1110 0 5 5 0 01-10 0zm1 0a4 4 0 108 0 4 4 0 00-8 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Built with React.js, Redux</span>
              </div>
              <p className="text-sm italic text-gray-500 mt-4">
                Note: Due to confidentiality and security policies, the source
                code and certain implementation details of this project cannot
                be publicly disclosed.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
