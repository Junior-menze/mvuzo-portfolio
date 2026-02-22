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
    <section className="min-h-screen flex items-center px-4 sm:px-6 md:px-10 pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* Left Side - Fixed mobile visibility */}
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* "Hi, I'm" text - Now visible on mobile */}
            <p className="text-secondary text-lg sm:text-xl mb-3">Hi, I'm</p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3">
              <span className="text-white block sm:inline">Mvuzo</span>{" "}
              <span className="bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent block sm:inline">
                Menze
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-accent mb-4">
              Software Developer
            </h2>

            <p className="text-secondary leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
              Passionately crafting digital experiences.
              Specialized in building modern applications.
              Let's turn your ideas into reality.
            </p>

            {/* Buttons - Stack on mobile, row on larger screens */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center md:justify-start">
              <button 
                onClick={handleHireMe}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-accent-light to-accent-dark text-white rounded-full hover:scale-105 transition transform active:scale-95 cursor-pointer"
              >
                Hire Me
              </button>
              <button 
                onClick={handleLetsChat}
                className="w-full sm:w-auto px-6 py-3 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-white transition transform active:scale-95 cursor-pointer"
              >
                Let's Chat →
              </button>
            </div>

            {/* Contact Icons */}
            <div className="flex gap-6 justify-center md:justify-start">
              <a 
                href="mailto:menzemvuzo@gmail.com" 
                className="text-secondary hover:text-accent transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
              <a 
                href="https://github.com/Junior-menze" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/mvuzo-menze" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="order-1 md:order-2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Rotating outer ring */}
              <div className="absolute inset-0 rounded-full border-4 border-t-accent border-b-accent border-l-transparent border-r-transparent animate-spin-slow"></div>

              {/* Second rotating slice */}
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
      </div>
    </section>
  );
}