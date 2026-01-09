import React from "react";
import { motion } from "framer-motion";
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-slate-100 mb-6"
        >
          Get in Touch
        </motion.h2>
        <p className="text-slate-400 mb-12 text-lg">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass p-8 md:p-10 rounded-3xl text-left space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-slate-900 font-bold py-4 rounded-lg hover:bg-sky-400 transition-colors flex items-center justify-center gap-2 group"
          >
            Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>

        <div className="mt-12 flex items-center justify-center gap-2 text-slate-400">
          <Mail size={20} />
          <span>Or email me at <a href="mailto:your@email.com" className="text-accent underline hover:text-sky-300">your@email.com</a></span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
