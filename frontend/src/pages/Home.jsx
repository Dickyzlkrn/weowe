import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { mockProjects, mockAbout } from '../mock';
import { Link } from 'react-router-dom';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scaleSpring = useSpring(scaleProgress, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text split animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Custom cursor follower */}
      <motion.div
        className="fixed w-4 h-4 bg-[#00FF00] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 border-b-4 border-[#00FF00] relative"
      >
        {/* Animated background grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(#00FF00 1px, transparent 1px), linear-gradient(90deg, #00FF00 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="max-w-[1920px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              delay: 0.3, 
              duration: 0.8,
              type: "spring",
              stiffness: 60,
            }}
            className="mb-8"
          >
            <motion.p
              className="text-[#00FF00] font-mono text-sm md:text-base tracking-[0.2em] mb-4"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              GRAPHIC DESIGNER / ART DIRECTOR
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[9rem] xl:text-[12rem] font-black leading-[0.85] tracking-tighter mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {mockAbout.name.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  whileHover={{
                    scale: 1.1,
                    color: "#00FF00",
                    transition: { duration: 0.2 },
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.9, 
              duration: 0.8,
              type: "spring",
              stiffness: 50,
            }}
            className="max-w-2xl ml-auto"
          >
            <motion.p
              className="text-xl md:text-2xl font-bold tracking-tight mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {mockAbout.bio}
            </motion.p>
            <Link to="/projects">
              <motion.button
                className="bg-[#00FF00] text-black px-8 py-4 text-sm font-mono tracking-[0.15em] hover:bg-white transition-colors duration-200 border-2 border-[#00FF00] hover:border-white flex items-center gap-3 group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                VIEW WORK
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 relative">
        <div className="max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 60,
            }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-16 tracking-tighter relative"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              SELECTED
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              WORK
            </motion.span>
            
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-0 h-2 bg-[#00FF00]"
              initial={{ width: 0 }}
              whileInView={{ width: "30%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          
          <div className="space-y-0">
            {mockProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  scale: 1.02,
                  x: 10,
                  transition: { duration: 0.3 },
                }}
                className="border-t-2 border-white py-8 md:py-12 hover:bg-white hover:text-black transition-all duration-300 px-6 md:px-8 group cursor-pointer relative overflow-hidden"
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-[#00FF00]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ zIndex: -1 }}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
                  <div className="flex-1">
                    <motion.h3
                      className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4"
                      whileHover={{
                        x: 20,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-lg md:text-xl opacity-70 group-hover:opacity-100 max-w-2xl"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-4">
                    <motion.span
                      className="text-sm font-mono tracking-[0.2em] opacity-50 group-hover:opacity-100"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      {project.year}
                    </motion.span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          className="border-2 border-current px-3 py-1 text-xs font-mono tracking-[0.15em] group-hover:border-black group-hover:bg-black group-hover:text-[#00FF00] transition-colors"
                          whileHover={{
                            scale: 1.1,
                            rotate: [-1, 1, -1],
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Animated arrow indicator */}
                <motion.div
                  className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  <ArrowRight className="w-12 h-12" />
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="border-t-2 border-white"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-white text-black relative overflow-hidden">
        {/* Animated corner accents */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-[#00FF00]"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-[#00FF00]"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <div className="max-w-[1920px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-6xl md:text-8xl font-black mb-8 tracking-tighter relative"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {'ABOUT'.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    whileHover={{
                      scale: 1.2,
                      color: "#00FF00",
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl font-bold tracking-tight leading-relaxed"
              >
                {mockAbout.bio}
              </motion.p>
            </div>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <p className="text-sm font-mono tracking-[0.2em] text-gray-600 mb-2">EXPERIENCE</p>
                <motion.p
                  className="text-3xl md:text-4xl font-black"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {mockAbout.experience}
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <p className="text-sm font-mono tracking-[0.2em] text-gray-600 mb-2">LOCATION</p>
                <p className="text-3xl md:text-4xl font-black">{mockAbout.location}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-sm font-mono tracking-[0.2em] text-gray-600 mb-4">EXPERTISE</p>
                <div className="grid grid-cols-2 gap-3">
                  {mockAbout.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="border-2 border-black px-4 py-3 text-sm font-mono tracking-[0.1em] hover:bg-[#00FF00] transition-colors duration-200 cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        rotate: [0, -2, 2, 0],
                        borderColor: "#00FF00",
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 border-t-4 border-[#00FF00] relative overflow-hidden">
        {/* Animated glitch effect background */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #00FF00 0px, #00FF00 2px, transparent 2px, transparent 10px)',
          }}
        />

        <div className="max-w-[1920px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-12 tracking-tighter"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {'LET\'S'.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                whileHover={{
                  y: -20,
                  color: "#00FF00",
                  scale: 1.2,
                }}
                transition={{ duration: 0.2 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            <br />
            {'WORK'.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                whileHover={{
                  y: -20,
                  color: "#00FF00",
                  scale: 1.2,
                }}
                transition={{ duration: 0.2 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <motion.a
              href={`mailto:${mockAbout.email}`}
              className="block text-3xl md:text-5xl lg:text-6xl font-black hover:text-[#00FF00] transition-colors underline relative"
              whileHover={{
                scale: 1.05,
                x: 20,
              }}
              animate={{
                opacity: [1, 0.8, 1],
              }}
              transition={{
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              hello@alexrivera.design
              <motion.span
                className="absolute -right-12 top-1/2 -translate-y-1/2"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                <ArrowRight className="w-8 h-8" />
              </motion.span>
            </motion.a>
            
            <motion.div
              className="flex gap-6 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="#"
                className="border-2 border-white px-6 py-3 text-sm font-mono tracking-[0.15em] hover:bg-[#00FF00] hover:text-black hover:border-[#00FF00] transition-colors"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                }}
                whileTap={{ scale: 0.95 }}
              >
                INSTAGRAM
              </motion.a>
              <motion.a
                href="#"
                className="border-2 border-white px-6 py-3 text-sm font-mono tracking-[0.15em] hover:bg-[#00FF00] hover:text-black hover:border-[#00FF00] transition-colors"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 2, -2, 0],
                }}
                whileTap={{ scale: 0.95 }}
              >
                BEHANCE
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;