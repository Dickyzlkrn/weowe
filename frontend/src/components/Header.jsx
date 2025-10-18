import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'WORK', path: '/projects' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 w-full bg-black text-white z-50 border-b-2 border-white"
    >
      <div className="px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
        <Link to="/">
          <motion.div
            className="text-2xl md:text-3xl font-black tracking-tighter hover:text-[#002fff] transition-colors cursor-pointer"
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={process.env.PUBLIC_URL + '/DKZSTUDIO.png'}
              alt="Dicky Zulkarnaen"
              className="h-8 md:h-10 object-contain"
              style={{ display: 'block' }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
            >
              <motion.div
                className={`text-sm font-mono tracking-[0.15em] hover:text-[#2b00ff] transition-colors relative ${
                  location.pathname === link.path ? 'text-[#0800ff]' : ''
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{
                  scale: 1.1,
                  y: -3,
                }}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#ffffff]"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-[#fb00ff] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-black border-t-2 border-white overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-2xl font-black tracking-tighter hover:text-[#ffffff] transition-colors ${
                      location.pathname === link.path ? 'text-[#ffffff]' : ''
                    }`}
                    whileHover={{
                      x: 10,
                      scale: 1.05,
                    }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;