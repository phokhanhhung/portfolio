"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { aboutMe } from "./const";
import { fadeInUp } from "@/utils/animation";

const AboutMe = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const activeContent = aboutMe.find((item) => item.id === activeId);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="mb-10"
    >
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>

      <div className="grid grid-cols-[auto_1fr] gap-6 items-start">
        <div className="flex flex-col gap-4">
          {aboutMe.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`text-xl font-bold w-6 text-left transition-colors cursor-pointer ${
                activeId === item.id ? "text-blue-600" : ""
              }`}
            >
              {item.id}
            </button>
          ))}
        </div>

        <div className="flex h-full">
          <AnimatePresence mode="wait">
            {activeContent && (
              <motion.div
                key={activeContent.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="inset-0 flex items-center justify-center text-justify px-4 rounded"
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
