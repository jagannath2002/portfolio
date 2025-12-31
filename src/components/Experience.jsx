import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-12 px-4 text-center" style={{ background: '#062725' }}>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#00bfae' }}>Experience</h2>
      <div className="max-w-2xl mx-auto text-left">
        <div className="mb-6">
          <div className="font-semibold" style={{ color: '#e0f7f5' }}>Nov 2024 - Jan 2025</div>
          <h3 className="text-xl font-semibold" style={{ color: '#00bfae' }}>Fullstack Developer</h3>
          <div style={{ color: '#b2dfdb' }}>TCS - Tata Play</div>
          <ul className="list-disc ml-6" style={{ color: '#e0f7f5' }}>
            <li>Maintained and implemented front-end updates for the mobile application.</li>
            <li>Managed the middleware application serving as a gateway for multiple backend services.</li>
          </ul>
        </div>
        <div className="mb-6">
          <div className="font-semibold" style={{ color: '#e0f7f5' }}>Nov 2024 - Jan 2025</div>
          <h3 className="text-xl font-semibold" style={{ color: '#00bfae' }}>Backend Developer</h3>
          <div style={{ color: '#b2dfdb' }}>TCS - Delta Airlines</div>
          <ul className="list-disc ml-6" style={{ color: '#e0f7f5' }}>
            <li>Migrated legacy systems to modern architectures, ensuring smooth transition and minimal downtime.</li>
            <li>Developed REST APIs using FastAPI framework based on Python.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold" style={{ color: '#e0f7f5' }}>Aug 2024 - Sep 2024</div>
          <h3 className="text-xl font-semibold" style={{ color: '#00bfae' }}>Initial Learning Program</h3>
          <div style={{ color: '#b2dfdb' }}>TCS</div>
          <ul className="list-disc ml-6" style={{ color: '#e0f7f5' }}>
            <li>Organized group activities to promote collaboration among students.</li>
            <li>Developed a Java web application using Java JDBC, Servlet, and JSP.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
