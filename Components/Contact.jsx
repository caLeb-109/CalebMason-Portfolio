import React from "react";
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const linkedinUrl = "https://www.linkedin.com/in/caleb-mason-44786028b/";
  const XUrl = "https://x.com/caleb36811/";

  const facebookUrl = "https://web.facebook.com/profile.php?id=61575761327047";
  const instagramUrl = "https://www.instagram.com/caleb36811/";
  export function getWhatsappUrl() {
    const phone = "2348120592850"; // digits only
    const message = "Hey! I found your portfolio and want to talk about a job, let's connect!";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to me via email or phone.</p>
      {/*----- Contact Section ---------------------------------------------------------------------*/}
        <section id="contact" className="py-20 bg-slate-800 text-white motion-safe:animate-slideInLeft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's Work Together
                </h2>
                <p className="text-xl text-indigo-200">
                  Have a project in mind? I'd love to hear about it.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8">
                <form className="space-y-6">
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
                        className="w-full bg-white/5 border border-indigo-300/30 rounded-lg px-4 py-3 text-white placeholder-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all border-none"
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
                        className="w-full bg-white/5 border border-indigo-300/30 rounded-lg px-4 py-3 text-white placeholder-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all border-none"
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
                      className="w-full bg-white/5 border border-indigo-300/30 rounded-lg px-4 py-3 text-white placeholder-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all border-none"
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
                      className="w-full bg-white/5 border border-indigo-300/30 rounded-lg px-4 py-3 text-white placeholder-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all border-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-stone-500 hover:bg-stone-700 text-white font-medium py-3 px-6 rounded-lg duration-300 !rounded-button cursor-pointer transition-all transform hover:scale-105 hover:brightness-110"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="mt-12 flex md:flex-row justify-center items-center gap-6 md:gap-12">
                <a
                  href={linkedinUrl}
                  className="text-indigo-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <BsLinkedin />
                </a>
                <a
                  href={facebookUrl}
                  className="text-indigo-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <FaFacebook />
                </a>
                <a
                  href={getWhatsappUrl}
                  className="text-indigo-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href={instagramUrl}
                  className="text-indigo-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <FaInstagram />
                </a>
                <a
                  href={XUrl}
                  className="text-indigo-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                >
                  {/* <i className="fab fa-twitter text-xl"></i>
                <span>Twitter(X)</span> */}
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Contact;
