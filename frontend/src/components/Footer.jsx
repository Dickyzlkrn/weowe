import React from 'react';
import { mockContact } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-4 border-[#00FF00]">
      <div className="px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter">
                ALEX RIVERA
              </h3>
              <p className="text-sm font-mono tracking-[0.1em] opacity-70">
                GRAPHIC DESIGNER<br />
                ART DIRECTOR
              </p>
            </div>

            <div>
              <p className="text-xs font-mono tracking-[0.2em] text-gray-500 mb-3">CONTACT</p>
              <a
                href={`mailto:${mockContact.email}`}
                className="text-lg font-bold hover:text-[#00FF00] transition-colors block mb-2"
              >
                {mockContact.email}
              </a>
            </div>

            <div>
              <p className="text-xs font-mono tracking-[0.2em] text-gray-500 mb-3">SOCIAL</p>
              <div className="space-y-2">
                <a
                  href="#"
                  className="text-lg font-bold hover:text-[#00FF00] transition-colors block"
                >
                  {mockContact.instagram}
                </a>
                <a
                  href="#"
                  className="text-lg font-bold hover:text-[#00FF00] transition-colors block"
                >
                  BEHANCE/{mockContact.behance}
                </a>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-white pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-mono tracking-[0.15em] opacity-50">
              © {currentYear} ALEX RIVERA. ALL RIGHTS RESERVED.
            </p>
            <p className="text-xs font-mono tracking-[0.15em] opacity-50">
              DESIGNED WITH BRUTALIST PRINCIPLES
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;