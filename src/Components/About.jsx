import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className="overflow-hidden px-4">
      <motion.section
        className="max-w-3xl mx-auto mt-0 sm:mt-48 px-4 sm:px-6 py-10 sm:py-12 border border-gray-700 text-center text-gray-200 rounded-xl shadow-md will-change-transform"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{
          y: -4,
          boxShadow: '0 8px 20px rgba(78, 195, 255, 0.4)',
        }}
      >
        <p className="text-sm sm:text-base md:text-lg leading-relaxed tracking-wide text-justify sm:text-center">
          I'm <span className="text-[#4EC3FF] font-bold">Bharat Khatwani</span>, a 21-year-old Computer Science & Engineering student specializing in Artificial Intelligence from IPS Academy, Indore.
          <br /><br />
          I have a strong grasp of Data Structures & Algorithms in Java and hands-on experience building modern web applications using the <span className="font-semibold">MERN Stack</span>.
          I'm currently expanding my skillset with DevOps, AWS deployment, and mastering core CS subjects like DBMS, OS, OOP, and CN.
          <br /><br />
          I’m driven by clean code, user-focused development, and the ambition to create scalable, real-world solutions. I aim to contribute to top tech companies and fast-scaling startups while building impactful side projects and growing continuously.
        </p>

        <div className="mt-10 sm:mt-12">
          <h1 className="text-lg sm:text-xl font-semibold mb-4">Follow Me</h1>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/BharatKhatwani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-[#4EC3FF] transition duration-300 transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/bharat-khatwani-864616257"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-[#4EC3FF] transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter (X) Profile"
              className="text-gray-400 hover:text-[#4EC3FF] transition duration-300 transform hover:scale-110"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 border-t border-gray-700 w-20 mx-auto" />
      </motion.section>
    </div>
  );
};

export default About;
