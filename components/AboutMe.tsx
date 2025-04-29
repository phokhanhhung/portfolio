"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutMe = () => {
  const aboutMe = [
    {
      id: 1,
      content:
        "I'm 24, graduated from University of Information Technology in Ho Chi Minh City, Vietnam",
    },
    {
      id: 2,
      content:
        "I’m a junior frontend developer with a strong focus on React and Next.js. I enjoy building fast, responsive, and user-friendly web applications that solve real-world problems.",
    },
    {
      id: 3,
      content:
        "I specialize in creating responsive landing pages and websites, ensuring they are both visually appealing and highly functional. With expertise in React and Next.js, I am skilled in building fast, modern web applications that deliver smooth user experiences across all devices. Whether it's developing custom user interfaces, integrating APIs, or optimizing site performance, I am ready to bring your ideas to life.",
    },
    {
      id: 4,
      content:
        "English proficiency: TOEIC score of 820, enabling effective communication in international environments.",
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(1);

  const handleClick = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const activeContent = aboutMe.find((item) => item.id === activeId);

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>

      <div className="grid grid-cols-[auto_1fr] gap-6 items-start">
        <div className="flex flex-col gap-4">
          {aboutMe.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`text-xl font-bold w-6 text-left transition-colors cursor-pointer ${
                activeId === item.id ? "text-blue-600" : ""
              }`}
            >
              {item.id}
            </button>
          ))}
        </div>

        <div className="relative h-full">
          <AnimatePresence mode="wait">
            {activeContent && (
              <motion.div
                key={activeContent.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center text-justify px-4 rounded"
              >
                <p>{activeContent.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
