import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-4 text-center" style={{ background: '#062725' }}>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#00bfae' }}>Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
        <div className="rounded-lg shadow p-6" style={{ background: '#041f1e' }}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: '#00bfae' }}>Portfolio Website</h3>
          <p className="mb-2" style={{ color: '#e0f7f5' }}>A personal portfolio website built with React and Vite.</p>
          <a href="#" style={{ color: '#00bfae' }} className="hover:underline">View Project</a>
        </div>
        <div className="rounded-lg shadow p-6" style={{ background: '#041f1e' }}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: '#00bfae' }}>Task Manager App</h3>
          <p className="mb-2" style={{ color: '#e0f7f5' }}>A simple task manager app to track daily activities.</p>
          <a href="#" style={{ color: '#00bfae' }} className="hover:underline">View Project</a>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-12 text-left">
        <h3 className="text-2xl font-bold mb-2" style={{ color: '#00bfae' }}>Technical Skills</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="list-disc ml-6" style={{ color: '#e0f7f5' }}>
            <li>Java - Intermediate</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Knowledge in Spring Boot Framework</li>
            <li>Knowledge in FastAPI Framework</li>
            <li>Basic in HTML, CSS, JavaScript</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
