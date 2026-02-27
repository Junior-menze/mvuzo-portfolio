// src/pages/Skills.js
import React from 'react';
import { 
  FaCode, 
  FaDatabase, 
  FaLaptopCode, 
  FaTools,
  FaCloud,
  FaServer
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaLaptopCode className="text-accent text-2xl" />,
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-accent text-2xl" />,
      skills: [
        { name: "C# (.NET)", level: 75 },
        { name: "Python", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "REST APIs", level: 75 },
        { name: "ASP.NET", level: 70 }
      ]
    },
    {
      title: "Database & Tools",
      icon: <FaDatabase className="text-accent text-2xl" />,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 65 },
        { name: "Dapper ORM", level: 70 },
        { name: "Git", level: 85 },
        { name: "PostgreSQL", level: 60 }
      ]
    },
    {
      title: "Professional Skills",
      icon: <FaTools className="text-accent text-2xl" />,
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 85 },
        { name: "Data-Driven Decision Making", level: 80 },
        { name: "Software Testing", level: 75 },
        { name: "Agile Methodologies", level: 70 }
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-background pt-24 md:pt-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Technical <span className="text-accent">Skills</span>
          </h1>
          <p className="text-accent text-xs md:text-sm tracking-wider">
            Technologies & Tools I Work With
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-surface p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-accent/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  {category.icon}
                </div>
                <h2 className="text-xl md:text-2xl text-white font-semibold">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-secondary text-sm md:text-base">{skill.name}</span>
                      <span className="text-accent text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-accent-light to-accent-dark h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills - Tech Stack Tags */}
        <div className="mt-12 text-center">
          <h2 className="text-xl md:text-2xl text-white font-semibold mb-6">
            Additional <span className="text-accent">Technologies</span>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Agile SDLC Model", 
              "Firebase", "Docker", 
              "AWS", "Figma",
              "Canvas", "PHP", "Bootstrap", "SASS"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-surface border border-gray-800 text-secondary rounded-full text-sm hover:border-accent hover:text-accent transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Subtle divider */}
        <div className="w-16 md:w-24 h-1 bg-accent/20 mx-auto mt-12 md:mt-16 rounded-full"></div>
      </div>
    </section>
  );
};

export default Skills;