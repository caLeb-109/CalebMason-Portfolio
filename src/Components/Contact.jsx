import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const githubUrl = "https://github.com/caLeb-109";
const XUrl = "https://x.com/caleb36811/";
const facebookUrl = "https://www.facebook.com/profile.php?id=61579707024295";
const instagramUrl = "https://www.instagram.com/caleb36811/";
export function getWhatsappUrl() {
  const phone = "2348120592850"; // digits only
  const message =
    "Hey! I found your portfolio and want to talk about a job, let's connect!";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your form submission logic here
    // Example: Email.js or other service

    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      // Reset form after success
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div id="contact" className="contact">
      {/*----- Contact Section ---------------------------------------------------------------------*/}
      <section
        id="contact"
        className="py-20 bg-stone-800 text-white relative overflow-hidden"
      >
        {/* Add decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-xl text-indigo-200">
                Have a project in mind? I'd love to hear about it.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-indigo-100 mb-2 font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-indigo-300/30 rounded-lg px-4 py-3 text-white placeholder-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all border-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-indigo-100 mb-2 font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-indigo-300/30 rounded-lg px-4 py-3 text-white placeholder-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all border-none"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-indigo-100 mb-2 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-indigo-300/30 rounded-lg px-4 py-3 text-white placeholder-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all border-none"
                    placeholder="Project in Mind?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-indigo-100 mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-indigo-300/30 rounded-lg px-4 py-3 text-white placeholder-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-all border-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-stone-500 hover:bg-stone-700 text-white font-medium py-3 px-6 rounded-lg duration-300 !rounded-button cursor-pointer transition-all transform hover:scale-105 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Enhanced social links */}
            <div className="mt-10 flex flex-wrap justify-center items-center gap-6 md:gap-12">
              {[
                { icon: <FaGithub size={21} />, url: githubUrl },
                { icon: <FaFacebook size={21} />, url: facebookUrl },
                { icon: <FaWhatsapp size={21} />, url: getWhatsappUrl() },
                { icon: <FaInstagram size={21} />, url: instagramUrl },
                { icon: <FaXTwitter size={21} />, url: XUrl },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-indigo-200 hover:text-white transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
