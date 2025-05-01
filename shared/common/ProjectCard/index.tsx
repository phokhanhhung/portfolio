"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

import Image from "next/image";
import { Card, CardContent } from "@/shared/ui/card";

interface ProjectCardProps {
  title: string;
  description: string[];
  techStack: string;
  projectLink?: string;
  extraInfo?: string;
  imageSrc?: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  projectLink,
  extraInfo,
  imageSrc,
}: ProjectCardProps) => {
  return (
    <motion.div
      custom={1}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <Card className="bg-[#D9EAFD] rounded-xl shadow-lg overflow-hidden">
        <CardContent className="p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            <span className="text-blue-600">{title}</span>
          </h3>
          <div className="text-sm text-justify text-gray-700 space-y-4">
            {description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-6 text-sm text-gray-500">
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
            <span>{techStack}</span>
          </div>
          {extraInfo && (
            <p className="text-sm italic text-gray-500 mt-4">{extraInfo}</p>
          )}
          {projectLink && (
            <div className="mt-4">
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:underline"
              >
                View Project
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.293 2.293a1 1 0 011.414 0L18 6.586a1 1 0 010 1.414L10.414 16H7v-3.414L15.586 3.707a1 1 0 010 1.414l-9.172 9.172A1 1 0 016.414 15H9v2H6a1 1 0 01-1-1v-3a1 1 0 01.293-.707l9.172-9.172z" />
                </svg>
              </a>
            </div>
          )}
          {imageSrc && (
            <div className="mt-6">
              <Image
                src={imageSrc}
                alt={`${title} Image`}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
