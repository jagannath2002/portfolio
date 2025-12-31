import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-4 text-center" style={{ background: '#041f1e' }}>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#00bfae' }}>Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <span className="px-4 py-2 rounded-full font-medium" style={{ background: '#00bfae', color: '#041f1e' }}>Leadership</span>
        <span className="px-4 py-2 rounded-full font-medium" style={{ background: '#00bfae', color: '#041f1e' }}>Teamwork</span>
        <span className="px-4 py-2 rounded-full font-medium" style={{ background: '#00bfae', color: '#041f1e' }}>Problem Solving</span>
        <span className="px-4 py-2 rounded-full font-medium" style={{ background: '#00bfae', color: '#041f1e' }}>Optimistic</span>
      </div>
    </section>
  );
};

export default Skills;
