import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'; // For animations


const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center w-full h-screen px-4 scroll-mt-20  overflow-hidden"
    >
      
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white">
         Hey, I am{' '}
          <motion.span
            className="shine bg-clip-text text-transparent bg-gradient-to-r from-[#4EC3FF] to-[#1E90FF]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Bharat Khatwani
          </motion.span>
        </h1>

        {/* Type Animation */}
        <TypeAnimation 
          sequence={[
            'Software Developer', 1200,
            'Full Stack Developer', 1200,
            'Problem Solver', 1200,
            'Fitness Freak', 1200,
          ]}
          wrapper="span"
          speed={40}
          
          className="text-xl md:text-3xl text-gray-300 mb-8 mt-2 inline-block  "
          repeat={Infinity}
        />

        {/* Buttons */}
        <div className="flex gap-4 mt-4 justify-center flex-wrap">
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#4EC3FF] text-white rounded-lg shadow-lg hover:bg-[#1E90FF] transition duration-300"
            >
              Get in Touch
            </motion.button>
          </a>

          <a href="BHARAT_RESUME.pdf" download>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-6 border border-[#4EC3FF] rounded-lg text-[#4EC3FF] hover:bg-[#4EC3FF] hover:text-white transition duration-300"
            >
              Download Resume
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Optional Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </motion.div> */}
    </section>
  );
};

export default Hero;