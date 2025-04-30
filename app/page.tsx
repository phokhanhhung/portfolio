"use client";

import React from "react";

import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import AboutPortfolio from "@/components/AboutPortfolio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Portfolio() {
  const { isDarkMode } = useSelector((state: RootState) => state.mode);

  return (
    <div
      className={`min-h-screen py-10 px-4 ${
        isDarkMode ? "bg-[#0a0a0a]" : "bg-[#fbfbfb]"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Header />

        {/* About Me Section */}
        <AboutMe />

        {/* Projects Section */}
        <Projects />

        {/* About This Portfolio Section */}
        <AboutPortfolio />

        {/* Contact Section */}
        <Footer />
      </div>
    </div>
  );
}
