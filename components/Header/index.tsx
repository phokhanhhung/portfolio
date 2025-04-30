import { fadeInUp } from "@/utils/animation";
import { motion } from "framer-motion";
import { imagePaths } from "./const";

import ImageStack from "../ImageStack";
import DarkModeToggle from "../DarkModeToggle";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Header = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.mode);

  return (
    <motion.header
      className="mb-10 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-6">
        <div className="mb-4 sm:mb-0">
          <ImageStack paths={imagePaths} />
        </div>
        <div className="text-left">
          <h1
            className={`text-2xl sm:text-4xl font-bold mb-2 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Hi, I&apos;m Pho Khanh Hung
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Frontend Developer | React & Next.js
          </p>
          <DarkModeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
