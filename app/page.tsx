"use client";

import React from "react";

import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import AboutPortfolio from "@/components/AboutPortfolio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen py-10 px-4">
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
