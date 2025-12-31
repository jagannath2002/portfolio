import React from "react";

const SocialLinks = () => {
  return (
    <section id="social-links" className="py-10 text-center" style={{ background: '#062725' }}>
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#00bfae' }}>Find me on</h2>
      <div className="flex justify-center gap-8 mt-4">
        <a href="https://github.com/jagannath2002" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-10 h-10" />
        </a>
        <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-10 h-10 bg-white rounded" />
        </a>
        <a href="https://www.linkedin.com/in/jagan2024/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
