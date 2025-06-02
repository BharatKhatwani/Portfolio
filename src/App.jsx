import './App.css';
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Contact from './Components/Contact';
import Loading from './Components/LaodingScreen'; // ✅ Make sure this filename is correct

// Lazy-loaded components
const About = lazy(() => import('./Components/About'));
const Experience = lazy(() => import('./Components/Experience'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 3 seconds (you can adjust this time)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Fullscreen custom loader
  }

  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Skills />
                <Projects />
                 <Contact/>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
         
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
