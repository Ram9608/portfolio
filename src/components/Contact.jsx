import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
    const [formSt, setFormSt] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting Ram! This is a demo form.');
    };

    const handleChange = (e) => setFormSt({ ...formSt, [e.target.name]: e.target.value });

    return (
        <section id="contact" className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_#4F46E5]"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-white">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-2xl relative"
                >
                    <h3 className="text-2xl font-bold mb-6 font-heading">
                        Let's Talk!
                    </h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        I'm always open to discussing new AI projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/20 rounded-full text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Email</h4>
                                <a href="mailto:ramsc266@gmail.com" className="text-gray-300 hover:text-primary transition-colors">ramsc266@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/20 rounded-full text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Phone</h4>
                                <a href="tel:+919608940175" className="text-gray-300 hover:text-primary transition-colors">+91 9608940175</a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex gap-4">
                        <SocialIcon icon={<Linkedin size={20} />} link="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" />
                        <SocialIcon icon={<Github size={20} />} link="https://github.com/Ram9608" />

                    </div>
                </motion.div>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="glass p-8 rounded-2xl space-y-6"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">My Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formSt.name}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="e.g. John Doe"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">My Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formSt.email}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="e.g. john@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">My Message</label>
                        <textarea
                            name="message"
                            value={formSt.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="Tell me about your project..."
                            required
                        ></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center justify-center gap-2"
                    >
                        Send Message <Send size={18} />
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};

const SocialIcon = ({ icon, link }) => (
    <a href={link} className="p-3 glass rounded-full hover:bg-white/10 text-white hover:text-primary transition-all duration-300 flex items-center justify-center group">
        <div className="group-hover:scale-110 transition-transform">
            {icon}
        </div>
    </a>
);

export default Contact;
