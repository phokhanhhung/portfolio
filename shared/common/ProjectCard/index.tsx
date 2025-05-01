"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

import { dancingScript, greatVibes } from "@/shared/fonts";

import { Card, CardContent } from "@/shared/ui/card";

interface ProjectCardProps {
  title: string;
  description: string[];
  techStack: string;
  projectLink?: string;
  extraInfo?: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  projectLink,
  extraInfo,
}: ProjectCardProps) => {
  return (
    <motion.div
      custom={1}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card className="bg-gradient-to-br from-[#E0F2FE] to-[#D9EAFD] border border-blue-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6 sm:p-10">
          <h3
            className={`text-4xl font-bold mb-2 text-blue-700 ${greatVibes.className}`}
          >
            {title}
          </h3>

          {/* Decorative line */}
          <div className="w-16 h-1 bg-blue-300 rounded-full mb-6" />

          <div
            className={`space-y-4 text-xl text-gray-700 text-justify ${dancingScript.className}`}
          >
            {description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 text-base text-gray-600">
            <svg
              className="w-5 h-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 10a5 5 0 1110 0 5 5 0 01-10 0zm1 0a4 4 0 108 0 4 4 0 00-8 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="italic">{techStack}</span>
          </div>

          {extraInfo && (
            <p className="text-sm italic text-gray-500 mt-4 border-l-4 border-blue-200 pl-4">
              {extraInfo}
            </p>
          )}

          {projectLink && (
            <div className="mt-6">
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-base text-blue-600 hover:underline hover:text-blue-800 transition-colors"
              >
                View Project
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.293 2.293a1 1 0 011.414 0L18 6.586a1 1 0 010 1.414L10.414 16H7v-3.414L15.586 3.707a1 1 0 010 1.414l-9.172 9.172A1 1 0 016.414 15H9v2H6a1 1 0 01-1-1v-3a1 1 0 01.293-.707l9.172-9.172z" />
                </svg>
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
