// src/pages/Contact.js
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using FormSubmit.co - free service that sends emails to your inbox
      const response = await fetch("https://formsubmit.co/ajax/menzemvuzo@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact from ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen bg-background pt-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-16">
          <span className="text-white">Contact </span>
          <span className="text-accent">Me</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">

          {/* Contact Info Cards - Left Side */}
          <div className="space-y-6">
            {/* Contact Info Header */}
            <h2 className="text-2xl text-white font-semibold mb-6">Get in Touch</h2>
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Card */}
              <div className="bg-surface p-6 rounded-2xl border border-white/10 hover:border-accent transition-all group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
                  <FaEnvelope className="text-accent text-xl" />
                </div>
                <p className="text-sm text-accent mb-1">Email</p>
                <p className="text-white text-sm break-all">menzemvuzo@gmail.com</p>
              </div>

              {/* Phone Card */}
              <div className="bg-surface p-6 rounded-2xl border border-white/10 hover:border-accent transition-all group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
                  <FaPhone className="text-accent text-xl" />
                </div>
                <p className="text-sm text-accent mb-1">Phone</p>
                <p className="text-white">063 001 7479</p>
              </div>

              {/* Location Card - Full width on mobile, half on desktop */}
              <div className="bg-surface p-6 rounded-2xl border border-white/10 hover:border-accent transition-all group sm:col-span-1">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
                  <FaMapMarkerAlt className="text-accent text-xl" />
                </div>
                <p className="text-sm text-accent mb-1">Location</p>
                <p className="text-white">Midrand, Gauteng</p>
              </div>

              {/* LinkedIn Card */}
              <div className="bg-surface p-6 rounded-2xl border border-white/10 hover:border-accent transition-all group sm:col-span-1">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
                  <FaLinkedin className="text-accent text-xl" />
                </div>
                <p className="text-sm text-accent mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/mvuzo-menze"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition text-sm break-all"
                >
                  linkedin.com/in/mvuzo-menze
                </a>
              </div>
            </div>

            {/* Optional: Additional info or CTA */}
            <div className="bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-2xl border border-accent/20 mt-4">
              <p className="text-secondary text-sm leading-relaxed">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat. I'll get back to you as soon as possible!
              </p>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div>
            <h2 className="text-2xl text-white font-semibold mb-6">Send a Message</h2>
            
            <form
              onSubmit={handleSubmit}
              className="bg-surface p-8 rounded-2xl border border-white/10 space-y-6"
            >
              {/* Name Input */}
              <div>
                <label className="text-accent text-sm mb-2 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background text-white border border-white/10 rounded-lg focus:border-accent outline-none transition"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="text-accent text-sm mb-2 block">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background text-white border border-white/10 rounded-lg focus:border-accent outline-none transition"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="text-accent text-sm mb-2 block">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Hello, I'd like to discuss a project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background text-white border border-white/10 rounded-lg focus:border-accent outline-none resize-none transition"
                  required
                ></textarea>
              </div>

              {/* Submit Button with Status */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 bg-gradient-to-r from-accent-light to-accent-dark text-white rounded-full hover:scale-105 transition flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-500 text-sm text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-500 text-sm text-center">
                  Failed to send message. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Optional Divider */}
        <div className="w-24 h-1 bg-accent/20 mx-auto mt-16 rounded-full"></div>
      </div>
    </section>
  );
};

export default Contact;