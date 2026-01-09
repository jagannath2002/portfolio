import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="banner" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-accent mb-4">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-100 to-slate-500 bg-clip-text text-transparent">
              Jagannath S
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A passionate developer building beautiful, modern web experiences with a focus on impact and design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-accent text-slate-900 font-semibold text-lg hover:bg-sky-400 transition-all hover:scale-105 flex items-center gap-2"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a
              href="/resume.pdf"
              className="px-8 py-3.5 rounded-full glass text-slate-100 font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2"
            >
              Download Resume <Download size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
