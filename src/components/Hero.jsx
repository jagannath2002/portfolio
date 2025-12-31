import React from "react";


const Hero = () => {
  return (
    <section id="hero" className="py-16 text-center" style={{ background: '#062725' }}>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ color: '#00bfae' }}>Hi, I'm Jagannath S</h1>
      <p className="text-lg md:text-2xl mb-6" style={{ color: '#e0f7f5' }}>A passionate developer building beautiful web experiences</p>
      <a href="#projects" className="inline-block px-6 py-3 rounded-full font-semibold shadow transition" style={{ background: '#00bfae', color: '#041f1e' }}>View My Work</a>
    </section>
  );
};

export default Hero;
