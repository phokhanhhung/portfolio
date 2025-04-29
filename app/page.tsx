"use client";

import React from "react";
import { motion } from "framer-motion";
import ImageStack from "@/components/ImageStack";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import AboutPortfolio from "@/components/AboutPortfolio";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const imagePaths = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
];

export default function Portfolio() {
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
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
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-2">
                Hi, I&apos;m Pho Khanh Hung
              </h1>
              <p className="text-lg text-gray-600">
                Frontend Developer | React & Next.js
              </p>
            </div>
          </div>
        </motion.header>

        {/* About Me Section */}
        <AboutMe />

        {/* Projects Section */}
        <Projects />

        {/* About This Portfolio Section */}
        <AboutPortfolio />

        {/* Contact Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 mb-4">You can reach out to me via:</p>
          <ul className="text-gray-700">
            <li>Email: example@gmail.com</li>
            <li>Zalo: 0123 456 789</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}
