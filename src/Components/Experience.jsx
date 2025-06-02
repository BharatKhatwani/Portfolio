import React from 'react';
import { FaGithub } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(78, 195, 255, 0.4)' }}
      className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-12 border border-gray-700 text-gray-200 rounded-xl shadow mt-20 sm:mt-32"
    >
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-4 text-[#4EC3FF]">
        College Event Website
      </h2>

      <hr className="border-gray-700 mb-6" />

      <p className="text-center text-gray-400 mb-4 text-sm sm:text-base">
        <SlCalender className="inline-block mr-2" />
        July 2024 – August 2024
      </p>

      <ul className="list-disc list-inside space-y-3 text-gray-300 max-w-2xl mx-auto mb-6 text-sm sm:text-base px-2">
        <li>Built a website for event registration.</li>
        <li>Handled 500+ users with auto-confirmation emails.</li>
        <li>Designed with mobile-first, responsive UI principles.</li>
      </ul>

      <div className="flex flex-wrap justify-center gap-3 mb-6 text-xs sm:text-sm">
        <span className="border px-3 py-1 rounded border-gray-600">React</span>
        <span className="border px-3 py-1 rounded border-gray-600">Shadcn UI</span>
        <span className="border px-3 py-1 rounded border-gray-600">Firebase</span>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm text-gray-400 text-center">
        <a
          href="https://github.com/2004shivanshi/Bad-Talk-Final"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center justify-center gap-2"
        >
          <FaGithub /> View Code
        </a>
        <a
          href="https://bad-talks.iesipsacademystudentclubs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Live Demo
        </a>
      </div>
    </motion.section>
  );
};

export default Experience;
