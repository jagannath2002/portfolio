import useScrollReveal from '../hooks/useScrollReveal';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { useState } from 'react';
import { config } from '../config/portfolio';

const Contact = () => {
    const { ref, isVisible } = useScrollReveal(0.15);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const socialLinks = [
        { icon: FiMail, label: 'Email', value: config.email, href: `mailto:${config.email}` },
        { icon: FiLinkedin, label: 'LinkedIn', value: config.linkedinUrl.replace('https://', ''), href: config.linkedinUrl },
        { icon: FiGithub, label: 'GitHub', value: config.githubUrl.replace('https://', ''), href: config.githubUrl },
    ];

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section id="contact" className="section-padding" style={{ background: 'rgba(139, 92, 246, 0.02)' }}>
            <div className="container-max">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="text-center mb-16">
                        <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Get In Touch</span>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                            Let's <span className="text-gradient">Connect</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl mx-auto">
                            {config.contactDescription}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {/* Left — Social links */}
                        <div className="flex flex-col gap-6">
                            <div
                                className="glass-strong rounded-2xl p-8 border border-white/10"
                                style={{
                                    background:
                                        'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.06) 100%)',
                                }}
                            >
                                <h3 className="text-xl font-bold text-white mb-2">Say Hello 👋</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                    Whether it's a full-time role, contract project, or just a tech chat — I'd love to hear from you.
                                </p>
                                <div className="space-y-4">
                                    {socialLinks.map(({ icon: Icon, label, value, href }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-4 p-4 rounded-xl glass border border-white/8 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-300"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-colors">
                                                <Icon size={18} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">{label}</div>
                                                <div className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium">{value}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right — Contact form */}
                        <div className="glass-strong rounded-2xl p-8 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                            {sent ? (
                                <div className="flex flex-col items-center justify-center h-64 gap-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center text-3xl">
                                        ✅
                                    </div>
                                    <p className="text-emerald-400 font-semibold text-lg">Message sent!</p>
                                    <p className="text-slate-400 text-sm text-center">Thank you for reaching out. I'll get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1.5">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Jane Recruiter"
                                            className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-white/3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 transition-all text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1.5">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="jane@company.com"
                                            className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-white/3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 transition-all text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-1.5">Message</label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="I came across your profile and would love to discuss..."
                                            className="w-full px-4 py-3 rounded-xl glass border border-white/10 bg-white/3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 transition-all text-sm resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full btn-primary justify-center py-3.5 text-base"
                                    >
                                        <FiSend size={16} /> Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
