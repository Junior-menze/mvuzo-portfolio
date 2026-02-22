// src/pages/Resume.js
import React from "react";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const Resume = () => {
  const project = {
    title: "Pharmacy Management System",
    subtitle: "Capstone Project – National Diploma in IT (Software Development)",
    period: "Feb 2024 - Sep 2024",
    description:
      "Designed and developed a full-featured desktop application for managing pharmacy operations.",
    technologies: [
      { name: "C# (.NET)", category: "backend" },
      { name: "Web Design", category: "design" },
      { name: "MySQL", category: "database" },
      { name: "Dapper", category: "database" }
    ],
    features: [
      "Prescription Handling",
      "Doctor Referral Tracking",
      "Authentication and role-based access control"
    ],
    features2: [
      "Stock and Medication Management",
      "Employee & Walk-in Customer Records",
      "Pharmacy Manager and Pharmacist roles"
    ],
    link: "https://soit-iis.mandela.ac.za/GRP-04-17",
  };

  // Function to handle PDF download
  const handleDownloadCV = () => {
    // Path to your PDF in the public folder
    const pdfUrl = "/documents/Menze_Mvuzo_CV.pdf";
    
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Menze_Mvuzo_CV.pdf"; // filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-background pt-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header with Download Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h1 className="text-4xl font-bold text-white">
            My <span className="text-accent">Resume</span>
          </h1>

          <button 
            onClick={handleDownloadCV}
            className="mt-6 md:mt-0 flex items-center px-6 py-3 bg-gradient-to-r from-accent-light to-accent-dark text-white rounded-full hover:scale-105 transition cursor-pointer active:scale-95"
          >
            <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
            Download CV
          </button>
        </div>

        {/* Project Card - Matching Reference Image */}
        <div className="bg-surface p-8 rounded-2xl shadow-lg border border-white/10">

          {/* Header with "Featured Project" tag */}
          <p className="text-accent text-sm mb-2 tracking-wider">FEATURED PROJECT</p>
          
          <h2 className="text-3xl text-white font-bold mb-2">
            {project.title}
          </h2>

          <p className="text-secondary text-sm mb-4">
            {project.subtitle}
          </p>

          <p className="text-accent text-sm font-medium mb-6">
            {project.period}
          </p>

          <p className="text-secondary mb-8">
            {project.description}
          </p>

          {/* Technologies - Grid Layout */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4">Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-accent/10 px-4 py-2.5 rounded-lg text-accent text-center text-sm font-medium"
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Features - Two Column Layout with Checkboxes */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {/* Left Column Features */}
              <div className="space-y-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-accent text-lg leading-5">□</span>
                    <span className="text-secondary text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Right Column Features */}
              <div className="space-y-3">
                {project.features2.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-accent text-lg leading-5">□</span>
                    <span className="text-secondary text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* View Project Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-accent hover:text-accent-light transition-colors font-medium"
          >
            [View Project Demo →]
          </a>

        </div>

        {/* Subtle Divider */}
        <div className="w-24 h-1 bg-accent/20 mx-auto mt-16 rounded-full"></div>
      </div>
    </section>
  );
};

export default Resume;