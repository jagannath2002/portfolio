import React from "react";

const AboutMe = () => {
  return (
    <section id="about-me" className="py-12 px-4 text-center" style={{ background: '#041f1e' }}>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#00bfae' }}>About Me</h2>
      <p className="max-w-2xl mx-auto text-lg" style={{ color: '#e0f7f5' }}>
        An organized and motivated individual, eager to utilize time management and organizational skills across diverse settings. Seeking opportunities to enhance abilities while contributing to company growth.
      </p>
      <div className="mt-10 text-left max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-2" style={{ color: '#00bfae' }}>Education</h3>
        <div className="mb-4">
          <div className="font-semibold" style={{ color: '#e0f7f5' }}>2020 - 2024</div>
          <div className="font-bold" style={{ color: '#00bfae' }}>Bachelor of Computer Science and Business Systems</div>
          <div style={{ color: '#e0f7f5' }}>M.Kumarasamy College of Engineering, Karur</div>
        </div>
        <div>
          <div className="font-semibold" style={{ color: '#e0f7f5' }}>2018 - 2020</div>
          <div className="font-bold" style={{ color: '#00bfae' }}>Higher Secondary Schooling</div>
          <div style={{ color: '#e0f7f5' }}>Holly Cross Matriculation Higher Secondary School, Salem</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
