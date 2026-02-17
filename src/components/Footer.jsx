import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 max-w-7xl mx-auto border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold font-heading tracking-wider mb-2">
                        RBS<span className="text-primary">.AI</span>
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Building the future with Neural Networks & Code.
                    </p>
                </div>

                <div className="flex gap-6">
                    <FooterLink text="Home" href="#home" />
                    <FooterLink text="Projects" href="#projects" />
                    <FooterLink text="Contact" href="#contact" />
                </div>

                <div className="flex gap-4">
                    <a href="https://github.com/Ram9608" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                    <a href="mailto:ramsc266@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {currentYear} Ram Bhajan Sahu. All rights reserved.</p>
                <p>Designed with <span className="text-red-500">❤</span> & <span className="text-primary">React</span></p>
            </div>
        </footer>
    );
};

const FooterLink = ({ text, href }) => (
    <a href={href} className="text-gray-400 hover:text-primary transition-colors text-sm font-medium relative group">
        {text}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </a>
);

export default Footer;
