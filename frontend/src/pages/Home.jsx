import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { mockProjects, mockAbout } from '../mock';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 border-b-4 border-[#00FF00]"
      >
        <div className="max-w-[1920px] mx-auto w-full">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-[#00FF00] font-mono text-sm md:text-base tracking-[0.2em] mb-4">
              GRAPHIC DESIGNER / ART DIRECTOR
            </p>
          </motion.div>
          
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[12vw] md:text-[10vw] lg:text-[9rem] xl:text-[12rem] font-black leading-[0.85] tracking-tighter mb-8"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {mockAbout.name}
          </motion.h1>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="max-w-2xl ml-auto"
          >
            <p className="text-xl md:text-2xl font-bold tracking-tight mb-8">
              {mockAbout.bio}
            </p>
            <Link to="/projects">
              <button className="bg-[#00FF00] text-black px-8 py-4 text-sm font-mono tracking-[0.15em] hover:bg-white transition-colors duration-200 border-2 border-[#00FF00] hover:border-white flex items-center gap-3 group">
                VIEW WORK
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-16 tracking-tighter"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            SELECTED<br />WORK
          </motion.h2>
          
          <div className="space-y-0">
            {mockProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-t-2 border-white py-8 md:py-12 hover:bg-white hover:text-black transition-colors duration-300 px-6 md:px-8 group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
                  <div className="flex-1">
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg md:text-xl opacity-70 group-hover:opacity-100 max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-4">
                    <span className="text-sm font-mono tracking-[0.2em] opacity-50 group-hover:opacity-100">
                      {project.year}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="border-2 border-current px-3 py-1 text-xs font-mono tracking-[0.15em] group-hover:border-black group-hover:bg-[#00FF00] group-hover:text-black transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="border-t-2 border-white"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-white text-black">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                ABOUT
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-bold tracking-tight leading-relaxed"
              >
                {mockAbout.bio}
              </motion.p>
            </div>
            
            <div className="space-y-8">
              <div>
                <p className="text-sm font-mono tracking-[0.2em] text-gray-600 mb-2">EXPERIENCE</p>
                <p className="text-3xl md:text-4xl font-black">{mockAbout.experience}</p>
              </div>
              
              <div>
                <p className="text-sm font-mono tracking-[0.2em] text-gray-600 mb-2">LOCATION</p>
                <p className="text-3xl md:text-4xl font-black">{mockAbout.location}</p>
              </div>
              
              <div>
                <p className="text-sm font-mono tracking-[0.2em] text-gray-600 mb-4">EXPERTISE</p>
                <div className="grid grid-cols-2 gap-3">
                  {mockAbout.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="border-2 border-black px-4 py-3 text-sm font-mono tracking-[0.1em] hover:bg-[#00FF00] transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 border-t-4 border-[#00FF00]">
        <div className="max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-12 tracking-tighter"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            LET'S<br />WORK
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a
              href={`mailto:${mockAbout.email}`}
              className="block text-3xl md:text-5xl lg:text-6xl font-black hover:text-[#00FF00] transition-colors underline"
            >
              hello@alexrivera.design
            </a>
            
            <div className="flex gap-6 pt-8">
              <a
                href="#"
                className="border-2 border-white px-6 py-3 text-sm font-mono tracking-[0.15em] hover:bg-[#00FF00] hover:text-black hover:border-[#00FF00] transition-colors"
              >
                INSTAGRAM
              </a>
              <a
                href="#"
                className="border-2 border-white px-6 py-3 text-sm font-mono tracking-[0.15em] hover:bg-[#00FF00] hover:text-black hover:border-[#00FF00] transition-colors"
              >
                BEHANCE
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;