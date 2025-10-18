import React from 'react';
import { motion } from 'framer-motion';
import { mockContact } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white border-t-4 border-[#00FF00]"
    >
      <div className="px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.h3
                className="text-3xl md:text-4xl font-black mb-4 tracking-tighter"
                whileHover={{
                  scale: 1.05,
                  color: "#00FF00",
                }}
              >
                ALEX RIVERA
              </motion.h3>
              <p className="text-sm font-mono tracking-[0.1em] opacity-70">
                GRAPHIC DESIGNER<br />
                ART DIRECTOR
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs font-mono tracking-[0.2em] text-gray-500 mb-3">CONTACT</p>
              <motion.a
                href={`mailto:${mockContact.email}`}
                className="text-lg font-bold hover:text-[#00FF00] transition-colors block mb-2"
                whileHover={{
                  x: 10,
                  scale: 1.05,
                }}
              >
                {mockContact.email}
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xs font-mono tracking-[0.2em] text-gray-500 mb-3">SOCIAL</p>
              <div className="space-y-2">
                <motion.a
                  href="#"
                  className="text-lg font-bold hover:text-[#00FF00] transition-colors block"
                  whileHover={{
                    x: 10,
                    scale: 1.05,
                  }}
                >
                  {mockContact.instagram}
                </motion.a>
                <motion.a
                  href="#"
                  className="text-lg font-bold hover:text-[#00FF00] transition-colors block"
                  whileHover={{
                    x: 10,
                    scale: 1.05,
                  }}
                >
                  BEHANCE/{mockContact.behance}
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="border-t-2 border-white pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: "left" }}
          >
            <motion.p
              className="text-xs font-mono tracking-[0.15em] opacity-50"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              © {currentYear} ALEX RIVERA. ALL RIGHTS RESERVED.
            </motion.p>
            <motion.p
              className="text-xs font-mono tracking-[0.15em] opacity-50"
              whileHover={{
                opacity: 1,
                color: "#00FF00",
                scale: 1.05,
              }}
            >
              DESIGNED WITH BRUTALIST PRINCIPLES
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;