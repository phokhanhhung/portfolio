"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setDarkMode } from "@/store/dark-mode-slice";

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state: RootState) => state.mode);

  const toggleDarkMode = () => {
    dispatch(setDarkMode(!isDarkMode));
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`w-14 h-8 flex items-center p-1 ${
        isDarkMode ? "bg-gray-600" : "bg-[#D9EAFD]"
      } rounded-full relative transition-colors cursor-pointer`}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs shadow-md absolute"
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        style={{ left: isDarkMode ? "calc(100% - 2rem)" : "0.5rem" }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isDarkMode ? "🌙" : "☀️"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            {isDarkMode ? "🌙" : "☀️"}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default DarkModeToggle;
