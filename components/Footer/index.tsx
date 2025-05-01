import { fadeInUp } from "@/utils/animation";
import { motion } from "framer-motion";

import { RootState } from "@/store";
import { useSelector } from "react-redux";

import { dancingScript, pacifico } from "@/shared/fonts";

const Footer = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.mode);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="text-sm"
    >
      <h2
        className={`text-2xl font-semibold mb-4 ${pacifico.className} ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Contact
      </h2>
      <div
        className={`text-xl ${dancingScript.className} ${
          isDarkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <p className="mb-4">You can reach out to me via:</p>
        <ul className="space-y-2 list-disc">
          <li>
            Email:{" "}
            <a
              href="mailto:phokhanhhung2409@gmail.com"
              className="text-blue-500"
            >
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
      </div>
    </motion.section>
  );
};

export default Footer;
