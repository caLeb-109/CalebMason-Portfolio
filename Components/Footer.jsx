import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <h2>Footer</h2>
      {/*---- Footer -------------------------------------------------------------------------*/}
        <footer className="py-8 bg-slate-900 text-slate-400 animate-fade-in">
          <div className="container mx-auto px-4 motion-safe:animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© 2025 CalebMason™ All rights reserved.</p>
              <div className="mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors mx-2 cursor-pointer"
                >
                  Privacy Policy
                </a>
                <span className="mx-2">|</span>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors mx-2 cursor-pointer"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default Footer;