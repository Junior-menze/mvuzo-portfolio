// src/pages/Education.js
import React from "react";
import { FaGraduationCap, FaCertificate, FaAward } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "Diploma in Information Technology",
      institution: "Nelson Mandela University",
      year: "2022 - 2024",
      achievement: "70% aggregate",
      description: "Specialized in Software Development with focus on practical application development",
      icon: <FaGraduationCap className="text-accent text-2xl" />
    }
  ];

  const certificates = [
    {
      name: "Python Certificate",
      issuer: "Slash Mark Internship",
      year: "2024",
      description: "Completed intensive Python programming internship with hands-on projects",
      icon: <FaCertificate className="text-accent text-xl" />
    },
    {
      name: "Foundational C# with Microsoft",
      issuer: "Microsoft",
      year: "2024",
      description: "Comprehensive C# programming fundamentals including .NET framework and object-oriented programming",
      icon: <FaAward className="text-accent text-xl" />
    },
    {
      name: "National Senior Certificate",
      issuer: "Matric",
      year: "2021",
      description: "Completed high school education with focus on mathematics and science",
      icon: <FaCertificate className="text-accent text-xl" />
    }
  ];

  return (
    <section className="min-h-screen bg-background pt-24 md:pt-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-white">Education & </span>
            <span className="text-accent">Certifications</span>
          </h1>
          <p className="text-accent text-xs md:text-sm tracking-wider">
            My Academic Journey and Professional Certificates
          </p>
        </div>

        {/* Education Card */}
        <div className="mb-12">
          <h2 className="text-2xl text-white font-semibold mb-6 flex items-center gap-3">
            <FaGraduationCap className="text-accent" />
            Formal Education
          </h2>
          
          {education.map((item, index) => (
            <div 
              key={index} 
              className="bg-surface p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-accent/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl text-white font-semibold mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-accent text-lg mb-2">{item.institution}</p>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="text-secondary text-sm bg-background px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <span className="text-secondary text-sm bg-background px-3 py-1 rounded-full">
                      {item.achievement}
                    </span>
                  </div>
                  <p className="text-secondary text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl text-white font-semibold mb-6 flex items-center gap-3">
            <FaCertificate className="text-accent" />
            Professional Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={index} 
                className="bg-surface p-6 rounded-xl border border-gray-800 hover:border-accent transition-all group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-all">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-base md:text-lg">
                      {cert.name}
                    </h3>
                    <p className="text-accent text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-secondary text-xs md:text-sm mt-2 mb-2">
                  {cert.description}
                </p>
                <span className="inline-block text-xs bg-background text-secondary px-2 py-1 rounded">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Add a skills summary */}
        <div className="mt-12 bg-gradient-to-r from-accent/5 to-transparent p-6 rounded-2xl border border-accent/20">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <FaAward className="text-accent" />
            Continuous Learning
          </h3>
          <p className="text-secondary text-sm leading-relaxed">
            I'm constantly expanding my skills through online courses, workshops, and hands-on projects. 
            Currently exploring cloud computing and advanced .NET development.
          </p>
        </div>

        {/* Subtle divider */}
        <div className="w-16 md:w-24 h-1 bg-accent/20 mx-auto mt-12 md:mt-16 rounded-full"></div>
      </div>
    </section>
  );
};

export default Education;