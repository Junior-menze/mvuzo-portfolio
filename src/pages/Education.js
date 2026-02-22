// src/pages/Education.js
import React from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const Education = () => {
  return (
    <section className="min-h-screen bg-background pt-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-16">
          <span className="text-white">My </span>
          <span className="text-accent">Education</span>
        </h1>

        {/* Education Card */}
        <div className="bg-surface p-8 rounded-2xl shadow-lg border border-white/10 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaGraduationCap className="text-accent text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl text-white font-semibold mb-1">
                Diploma in Information Technology
              </h2>
              <p className="text-secondary text-lg mb-2">
                Nelson Mandela University
              </p>
              <p className="text-accent">
                2022 - 2024 • 70%
              </p>
              <p className="text-secondary mt-4 text-sm leading-relaxed">
                Specialized in Software Development with focus on practical application development
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl text-white font-semibold mb-6 flex items-center gap-3">
            <FaCertificate className="text-accent" />
            Certifications
          </h2>

          <div className="space-y-4">
            {/* National Senior Certificate */}
            <div className="bg-surface p-6 rounded-xl border border-white/10 hover:border-accent transition-all">
              <h3 className="text-white font-medium mb-1">National Senior Certificate</h3>
              <p className="text-secondary text-sm">High School</p>
            </div>

            {/* Python Certificate */}
            <div className="bg-surface p-6 rounded-xl border border-white/10 hover:border-accent transition-all">
              <h3 className="text-white font-medium mb-1">Python Certificate</h3>
              <p className="text-secondary text-sm">Slash Mark Internship</p>
            </div>

            {/* National Diploma Certificate */}
            <div className="bg-surface p-6 rounded-xl border border-white/10 hover:border-accent transition-all">
              <h3 className="text-white font-medium mb-1">National Diploma Certificate</h3>
              <p className="text-secondary text-sm">Nelson Mandela University</p>
            </div>
          </div>
        </div>

        {/* Optional subtle divider */}
        <div className="w-24 h-1 bg-accent/20 mx-auto mt-16 rounded-full"></div>
      </div>
    </section>
  );
};

export default Education;