import { fadeInUp } from "@/utils/animation";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { imagePaths } from "./const";

import { dancingScript, pacifico } from "@/shared/fonts";

import ImageStack from "@/shared/common/ImageStack";
import DarkModeToggle from "@/components/DarkModeToggle";

const Header = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.mode);

  return (
    <motion.header
      className="mb-10 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-6">
        <div className="mb-4 sm:mb-0">
          <ImageStack paths={imagePaths} />
        </div>
        <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
          <h1
            className={`text-2xl sm:text-4xl font-bold mb-2 ${
              pacifico.className
            } ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Hi, I&apos;m Pho Khanh Hung
          </h1>
          <p
            className={`text-2xl text-gray-600 mb-2 ${dancingScript.className}`}
          >
            Frontend Developer | React & Next.js
          </p>
          <div className="text-center">
            <DarkModeToggle />
          </div>
        </div>
      </div>
      <div
        className={`mt-5 text-xl text-gray-600 whitespace-nowrap ${dancingScript.className}`}
      >
        &quot;Failure is not to be feared; it is the failure to rise again that
        is truly frightening.&quot;
      </div>
    </motion.header>
  );
};

export default Header;
