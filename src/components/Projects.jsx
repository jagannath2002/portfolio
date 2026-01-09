import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern developer portfolio built with React, Vite, and Tailwind CSS. Features glassmorphism design and smooth animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Task Manager App",
    description: "A productivity application to track daily tasks with drag-and-drop functionality and local storage persistence.",
    tech: ["React", "Redux", "Node.js"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-100 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass border-slate-700/50 hover:border-accent/50 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 text-accent border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <Github size={20} /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-accent hover:text-sky-300 transition-colors"
                  >
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
