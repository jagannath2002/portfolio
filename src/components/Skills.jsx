import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Java", "Python", "SQL", "Spring Boot", "FastAPI",
  "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS",
  "Git", "Docker", "AWS"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-slate-100 mb-12"
        >
          Technical Arsenal
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(56, 189, 248, 0.1)" }}
              className="px-6 py-3 rounded-full text-slate-300 border border-slate-700 bg-slate-800/50 hover:border-accent hover:text-accent cursor-default transition-colors text-lg font-medium"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
