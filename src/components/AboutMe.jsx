import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about-me" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-100 mb-6">About Me</h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            An organized and motivated professional with a strong foundation in computer science using modern manufacturing practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass border-l-4 border-accent"
          >
            <h3 className="text-xl font-bold text-slate-100 mb-4">Education</h3>
            <div className="space-y-6">
              <div>
                <div className="text-accent font-semibold mb-1">2020 - 2024</div>
                <h4 className="text-lg font-bold text-slate-200">B.Tech in CS & Business Systems</h4>
                <p className="text-slate-400">M.Kumarasamy College of Engineering, Karur</p>
              </div>
              <div>
                <div className="text-accent font-semibold mb-1">2018 - 2020</div>
                <h4 className="text-lg font-bold text-slate-200">Higher Secondary Schooling</h4>
                <p className="text-slate-400">Holy Cross Matriculation, Salem</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass border-l-4 border-purple-500"
          >
            <h3 className="text-xl font-bold text-slate-100 mb-4">Soft Skills</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" /> Leadership & Team Management
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" /> Strategic Problem Solving
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" /> Effective Communication
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" /> Adaptability
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
