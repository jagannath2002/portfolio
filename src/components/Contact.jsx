import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4 text-center" style={{ background: '#041f1e' }}>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#00bfae' }}>Contact</h2>
      <form className="max-w-xl mx-auto rounded-lg p-6 shadow" style={{ background: '#062725' }}>
        <input type="text" placeholder="Your Name" className="w-full mb-4 px-4 py-2 rounded border border-gray-700 focus:outline-none" style={{ background: '#e0f7f5', color: '#041f1e' }} />
        <input type="email" placeholder="Your Email" className="w-full mb-4 px-4 py-2 rounded border border-gray-700 focus:outline-none" style={{ background: '#e0f7f5', color: '#041f1e' }} />
        <textarea placeholder="Your Message" className="w-full mb-4 px-4 py-2 rounded border border-gray-700 focus:outline-none" rows="4" style={{ background: '#e0f7f5', color: '#041f1e' }}></textarea>
        <button type="submit" className="px-6 py-2 rounded font-semibold transition" style={{ background: '#00bfae', color: '#041f1e' }}>Send</button>
      </form>
      <p className="mt-6" style={{ color: '#e0f7f5' }}>Or email me at <a href="mailto:your@email.com" style={{ color: '#00bfae' }} className="hover:underline">your@email.com</a></p>
    </section>
  );
};

export default Contact;
