import { fadeInUp } from "@/utils/animation";
import { motion } from "framer-motion";

import { RootState } from "@/store";
import { useSelector } from "react-redux";

const Footer = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.mode);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUp}
      className="text-sm"
    >
      <h2
        className={`text-2xl font-semibold mb-4 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Contact
      </h2>
      <p className="text-gray-700 mb-4">You can reach out to me via:</p>
      <ul className="text-gray-700 space-y-2">
        <li>
          Email:{" "}
          <a href="mailto:phokhanhhung2409@gmail.com" className="text-blue-500">
            phokhanhhung2409@gmail.com
          </a>
        </li>
        <li>
          Upwork:{" "}
          <a
            href="https://www.linkedin.com/in/kh%C3%A1nh-h%C6%B0ng-ph%C3%B3-41273624b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View My LinkedIn
          </a>
        </li>
      </ul>
    </motion.section>
  );
};

export default Footer;
