// src/pages/About.js
import React from 'react';
import { FaCode, FaLightbulb, FaUsers, FaBullseye } from 'react-icons/fa';

const About = () => {
  return (
    <section className="min-h-screen bg-background pt-28 px-6">
      <div className="max- w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">
            About <span className="text-accent">Me</span>
          </h1>
          <p className="text-accent text-sm tracking-wider">A Journey Through Code</p>
        </div>

        {/* Main About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Card */}
          <div className="bg-surface p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-accent/30 transition-all">
            <h2 className="text-2xl text-white mb-4 font-semibold">
              My Story
            </h2>
            <p className="text-secondary leading-relaxed">
              I am a dedicated IT graduate from Nelson Mandela University, 
              passionate about solving complex problems through elegant code. 
              My journey has equipped me with both backend and frontend expertise, 
              allowing me to build scalable and user-friendly applications that make a difference.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-surface p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-accent/30 transition-all">
            <h2 className="text-2xl text-white mb-4 font-semibold">
              My Approach
            </h2>
            <p className="text-secondary leading-relaxed">
              With a National Diploma in Information Technology, I specialize in 
              creating scalable and user-friendly applications. I thrive in environments 
              that challenge me to grow, always seeking innovative solutions to complex problems 
              through data-driven decision making.
            </p>
          </div>
        </div>

        {/* Skills/Values Cards */}
        <h2 className="text-3xl font-bold text-center mb-10">
          What I <span className="text-accent">Bring</span>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {/* Clean Code Card */}
          <div className="bg-surface p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-accent hover:scale-105 transition-all duration-300 group">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
              <FaCode className="text-accent text-xl" />
            </div>
            <h3 className="text-white font-semibold mb-2">Clean Code</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Writing maintainable, efficient code that follows best practices
            </p>
          </div>

          {/* Problem Solver Card */}
          <div className="bg-surface p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-accent hover:scale-105 transition-all duration-300 group">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
              <FaLightbulb className="text-accent text-xl" />
            </div>
            <h3 className="text-white font-semibold mb-2">Problem Solver</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Data-driven decision making and analytical problem solving
            </p>
          </div>

          {/* Team Player Card */}
          <div className="bg-surface p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-accent hover:scale-105 transition-all duration-300 group">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
              <FaUsers className="text-accent text-xl" />
            </div>
            <h3 className="text-white font-semibold mb-2">Team Player</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Collaborative approach with strong communication skills
            </p>
          </div>

          {/* Goal Oriented Card */}
          <div className="bg-surface p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-accent hover:scale-105 transition-all duration-300 group">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
              <FaBullseye className="text-accent text-xl" />
            </div>
            <h3 className="text-white font-semibold mb-2">Goal Oriented</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Focused on delivering high-quality software solutions
            </p>
          </div>
        </div>

        {/* Optional: Add a subtle divider */}
        <div className="w-24 h-1 bg-accent/20 mx-auto mt-16 rounded-full"></div>
      </div>
    </section>
  );
};

export default About;