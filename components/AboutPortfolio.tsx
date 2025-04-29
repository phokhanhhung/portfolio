import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; // adjust based on your setup

const AboutPortfolio = () => {
  return (
    <motion.div
      className="mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <h2 className="text-2xl font-semibold mb-4">
        Personal Portfolio Website
      </h2>
      <Card className="shadow-lg rounded-lg bg-[#D9EAFD]">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Personal Portfolio Website
          </h3>
          <div className="text-sm text-gray-700">
            <p className="mb-4">
              This is the website you&apos;re currently viewing. It showcases my
              projects, skills, and background in a clean, responsive layout.
            </p>
            <p className="mb-4">
              Built with Next.js and Tailwind CSS, the site features animated
              components, SEO optimization, and smooth transitions to enhance
              user experience.
            </p>
          </div>
          <div className="flex mt-6 gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <span>Built with:</span>
              <span className="ml-2 text-blue-500">
                Next.js, TypeScript, Tailwind CSS, Motion
              </span>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="https://github.com/yourusername/your-portfolio-repo" // link to your repo
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:underline"
            >
              View Source on GitHub
              <svg
                className="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M12.293 2.293a1 1 0 011.414 0L18 6.586a1 1 0 010 1.414L10.414 16H7v-3.414L15.586 3.707a1 1 0 010 1.414l-9.172 9.172A1 1 0 016.414 15H9v2H6a1 1 0 01-1-1v-3a1 1 0 01.293-.707l9.172-9.172z" />
              </svg>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutPortfolio;
