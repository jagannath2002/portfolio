import React from "react";
import { Github, Linkedin, Code } from 'lucide-react';

const SocialLinks = () => {
  return (
    <section id="social-links" className="py-12 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-display font-medium text-slate-200 mb-8">Connect with me</h2>
        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/jagannath2002"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-110 transition-all border border-slate-700"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-slate-800 text-yellow-500 hover:bg-slate-700 hover:text-yellow-400 hover:scale-110 transition-all border border-slate-700"
            aria-label="LeetCode"
          >
            <Code size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/jagan2024/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-slate-800 text-blue-500 hover:bg-slate-700 hover:text-blue-400 hover:scale-110 transition-all border border-slate-700"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
