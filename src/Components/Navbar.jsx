import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSectionWithOffset = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const goToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      scrollToSectionWithOffset(sectionId);
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = ['home', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const target = location.state.scrollTo;
      scrollToSectionWithOffset(target);
      setActiveSection(target);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const linkClasses = (section) =>
    `group-hover:text-[#4EC3FF] transition duration-300 ${
      activeSection === section && location.pathname === '/' ? 'text-[#4EC3FF]' : ''
    }`;

  const underline = (section) =>
    `absolute left-0 bottom-0 h-[2px] bg-[#4c9aff] transition-all duration-300 ${
      activeSection === section && location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
    }`;

  return (
    <div className="fixed top-0 left-0 w-full px-8 py-4 z-10 bg-[#121212] flex items-center justify-between md:justify-around">
      <div className="text-[#4EC3FF] font-bold text-2xl sm:text-3xl">
        <Link to="/">B.K</Link>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
        {/* Home */}
        <li className="relative group cursor-pointer" onClick={() => goToSection('home')}>
          <span className={linkClasses('home')}>Home</span>
          <span className={underline('home')} />
        </li>

        {/* About */}
        <li className="relative group">
          <Link
            to="/about"
            className={`group-hover:text-[#4EC3FF] transition duration-300 ${
              location.pathname === '/about' ? 'text-[#4EC3FF]' : ''
            }`}
          >
            About
          </Link>
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-[#4c9aff] transition-all duration-300 ${
              location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          />
        </li>

        {/* Skills */}
        <li className="relative group cursor-pointer" onClick={() => goToSection('skills')}>
          <span className={linkClasses('skills')}>Skills</span>
          <span className={underline('skills')} />
        </li>

        {/* Projects */}
        <li className="relative group cursor-pointer" onClick={() => goToSection('projects')}>
          <span className={linkClasses('projects')}>Projects</span>
          <span className={underline('projects')} />
        </li>

        {/* Experience */}
        <li className="relative group">
          <Link
            to="/experience"
            className={`group-hover:text-[#4EC3FF] transition duration-300 ${
              location.pathname === '/experience' ? 'text-[#4EC3FF]' : ''
            }`}
          >
            Experience
          </Link>
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-[#4c9aff] transition-all duration-300 ${
              location.pathname === '/experience' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          />
        </li>

        {/* Contact */}
        <li className="relative group cursor-pointer" onClick={() => goToSection('contact')}>
          <span className={linkClasses('contact')}>Contact</span>
          <span className={underline('contact')} />
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="text-white text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#121212] flex flex-col items-center py-5 space-y-4 md:hidden">
          <span onClick={() => { setMenuOpen(false); goToSection('home'); }} className="text-white text-lg hover:text-[#4EC3FF] cursor-pointer">Home</span>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-white text-lg hover:text-[#4EC3FF]">About</Link>
          <span onClick={() => { setMenuOpen(false); goToSection('skills'); }} className="text-white text-lg hover:text-[#4EC3FF] cursor-pointer">Skills</span>
          <span onClick={() => { setMenuOpen(false); goToSection('projects'); }} className="text-white text-lg hover:text-[#4EC3FF] cursor-pointer">Projects</span>
          <Link to="/experience" onClick={() => setMenuOpen(false)} className="text-white text-lg hover:text-[#4EC3FF]">Experience</Link>
          <span onClick={() => { setMenuOpen(false); goToSection('contact'); }} className="text-white text-lg hover:text-[#4EC3FF] cursor-pointer">Contact</span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
