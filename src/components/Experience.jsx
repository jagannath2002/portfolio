import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Fullstack Developer",
    company: "TCS - Tata Play",
    period: "Nov 2024 - Jan 2025",
    description: [
      "Maintained and implemented front-end updates for the mobile application.",
      "Managed the middleware application serving as a gateway for multiple backend services."
    ]
  },
  {
    role: "Backend Developer",
    company: "TCS - Delta Airlines",
    period: "Nov 2024 - Jan 2025",
    description: [
      "Migrated legacy systems to modern architectures, ensuring smooth transition.",
      "Developed REST APIs using FastAPI framework ensuring high performance."
    ]
  },
  {
    role: "Initial Learning Program",
    company: "TCS",
    period: "Aug 2024 - Sep 2024",
    description: [
      "Organized group activities to promote collaboration among students.",
      "Developed a Java web application using Java JDBC, Servlet, and JSP."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-slate-100 mb-16 text-center"
        >
          My Journey
        </motion.h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-accent group-hover:border-accent transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass border-slate-700/50 hover:border-accent/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-100 text-lg">{exp.role}</h3>
                  <div className="flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>
                <div className="text-slate-400 font-medium mb-4">{exp.company}</div>
                <ul className="list-disc ml-4 space-y-2 text-slate-400 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
