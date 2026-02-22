// src/pages/Home.js
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleHireMe = () => {
    navigate("/contact");
  };

  const handleLetsChat = () => {
    navigate("/contact");
  };

  return (
    <section className="min-h-screen flex items-center px-10">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* Left Side */}
        <div>
          <p className="text-secondary text-xl mb-4">Hi, I'm</p>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-white">Mvuzo </span>
            <span className="bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent">
              Menze
            </span>
          </h1>

          <h2 className="text-2xl text-accent mb-6">
            Software Developer
          </h2>

          <p className="text-secondary leading-relaxed mb-8">
            Passionately crafting digital experiences.
            Specialized in building modern applications.
            Let's turn your ideas into reality.
          </p>

          {/* Buttons - Responsive */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button 
              onClick={handleHireMe}
              className="btn-primary w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-accent-light to-accent-dark text-white rounded-full hover:scale-105 transition transform active:scale-95 cursor-pointer"
            >
              Hire Me
            </button>
            <button 
              onClick={handleLetsChat}
              className="btn-outline w-full sm:w-auto px-6 py-3 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-white transition transform active:scale-95 cursor-pointer"
            >
              Let's Chat →
            </button>
          </div>

          {/* Contact Icons - Shifted slightly right */}
          <div className="flex gap-6 ml-4">
            <a 
              href="mailto:menzemvuzo@gmail.com" 
              className="text-secondary hover:text-accent transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
            <a 
              href="https://github.com/Junior-menze" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a 
              href="https://linkedin.com/in/mvuzo-menze" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

<div className="flex justify-center">
  <div className="relative w-80 h-80">

    {/* Rotating outer ring - now using Tailwind animation classes */}
    <div className="absolute inset-0 rounded-full border-4 border-t-accent border-b-accent border-l-transparent border-r-transparent animate-spin-slow"></div>

    {/* Second rotating slice - now using Tailwind animation classes */}
    <div className="absolute inset-4 rounded-full border-2 border-accent/30 border-t-accent border-b-accent border-l-transparent border-r-transparent animate-spin-reverse"></div>

    {/* Profile Image */}
    <img
      src="/mvuzo3.jpeg"
      alt="profile"
      className="rounded-full w-full h-full object-cover border-4 border-accent"
    />
  </div>
</div>

      </div>
    </section>
  );
}