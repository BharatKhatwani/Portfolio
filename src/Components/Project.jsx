import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'URL SHORTENER',
    description: 'A full-stack URL shortener app allowing users to register, log in, and generate short links with redirection. Built with MERN stack.',
    tech: ['React', 'MONGODB', 'Tailwind CSS', 'Framer Motion', 'Express.js'],
    live: 'https://url-shortener-fe18.vercel.app/login',
    github: 'https://github.com/BharatKhatwani/Url_Shortener',
  },
  {
    title: 'Secure File Sharing Api',
    description: 'A secure backend REST API for uploading and sharing files with authentication using JWT and storage in MongoDB.',
    tech: ['Mongodb', 'JWT', 'Rest Api'],
    live: 'https://secure-file-sharing-app-1-mnqg.onrender.com',
    github: 'https://github.com/BharatKhatwani/Secure-File-Sharing-App',
  },
  {
    title: 'QuickTalk Chat App',
    description: 'A real-time chat application with Firebase Auth and Firestore supporting login, user presence, and chat features.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    live: 'https://final-chat-app-phi.vercel.app',
    github: 'https://github.com/BharatKhatwani/Final_ChatApp',
  },
  {
    title: 'E-state Website',
    description: 'A sleek and animated real estate website frontend to showcase property listings using smooth transitions and modern UI.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    live: 'https://e-state-pi.vercel.app/',
    github: 'https://github.com/BharatKhatwani/E-state-',
  }
];

const Projects = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      id="projects"
      className="max-w-6xl mx-auto px-4 py-12 min-h-screen w-full mb-16 scroll-mt-20"
    >
      <h2 className="text-4xl sm:text-6xl font-bold text-[#4EC3FF] mb-16 text-center">
        PROJECTS
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 px-4">
        {projects.map(({ title, description, tech, live, github }, index) => (
          <motion.div
            key={index}
            whileTap={{ y: 6, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group bg-[#121212] rounded-2xl p-6 shadow-md border border-[#2c2c2c] hover:border-[#4EC3FF] hover:shadow-lg transform hover:scale-[1.03] transition duration-300 ease-in-out w-full max-w-md mx-auto"
          >
            <h3 className="text-2xl font-semibold text-white group-hover:text-[#4EC3FF] mb-4">
              {title}
            </h3>

            <p className="text-gray-300 text-sm mb-5">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-[#1f1f1f] text-sm text-white px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-6">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4EC3FF] hover:underline flex items-center gap-1"
              >
                Live <FaExternalLinkAlt size={14} />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4EC3FF] hover:underline flex items-center gap-1"
              >
                GitHub <FaGithub size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
