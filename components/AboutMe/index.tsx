"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { aboutMe } from "./const";
import { fadeInUp } from "@/utils/animation";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { dancingScript, pacifico } from "@/shared/fonts";

const AboutMe = () => {
  const [activeId, setActiveId] = useState<number | null>(1);
  const { isDarkMode } = useSelector((state: RootState) => state.mode);

  const activeContent = aboutMe.find((item) => item.id === activeId);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="mb-10"
    >
      <h2
        className={`text-2xl font-semibold mb-4 ${pacifico.className} ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        About Me
      </h2>

      <div className="grid grid-cols-[auto_1fr] gap-6 items-start">
        <div className={`flex flex-col gap-4 ${pacifico.className}`}>
          {aboutMe.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`font-bold w-6 text-center cursor-pointer
              ${
                activeId === item.id
                  ? "text-blue-600"
                  : isDarkMode
                  ? "text-white"
                  : "text-black"
              }`}
              animate={{
                fontSize: activeId === item.id ? "2rem" : "1.125rem",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {item.id}
            </motion.button>
          ))}
        </div>

        <div className="flex h-full">
          <AnimatePresence mode="wait">
            {activeContent && (
              <motion.div
                key={activeContent.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", duration: 0.3 }}
                className={`inset-0 flex items-center justify-center text-justify text-2xl px-4 rounded ${
                  dancingScript.className
                } ${isDarkMode ? "text-white" : "text-black"}`}
              >
                <p>{activeContent.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
