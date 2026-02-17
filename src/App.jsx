import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [loading, setLoading] = useState(true);

    // Fake Loading Screen
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-page-bg text-white selection:bg-primary selection:text-white overflow-hidden font-sans">
            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-50 bg-page-bg flex items-center justify-center text-primary overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-page-bg to-page-bg"></div>
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 1, 0.5],
                                filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-3xl md:text-5xl font-heading font-bold z-10 neon-text tracking-widest"
                        >
                            RBS.AI
                        </motion.div>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ duration: 2 }}
                            className="absolute bottom-1/3 h-1 bg-primary rounded-full shadow-[0_0_15px_#4F46E5]"
                        ></motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Background Effects */}
                    <div className="fixed inset-0 z-[-1] pointer-events-none">
                        {/* Grid */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

                        {/* Orbs */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse"></div>
                    </div>

                    <Navigation />

                    <main className="relative z-10">
                        <Hero />
                        <About />
                        <Skills />
                        <Projects />
                        <Achievements />
                        <Contact />
                    </main>

                    <Footer />
                </motion.div>
            )}
        </div>
    );
}

// Navigation Component
const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'];

    return (
        <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-6 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold font-heading tracking-wider z-50 relative">
                    RBS<span className="text-primary">.AI</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((item) => (
                        <ScrollLink
                            key={item}
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="cursor-pointer text-sm font-medium hover:text-primary transition-colors font-heading relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </ScrollLink>
                    ))}
                    <a
                        href="/resume.pdf"
                        className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(79,70,229,0.2)] hover:shadow-[0_0_20px_rgba(79,70,229,0.6)] text-sm font-bold"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-50">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        )}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "tween" }}
                            className="fixed inset-0 bg-page-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            {navLinks.map((item) => (
                                <ScrollLink
                                    key={item}
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-bold font-heading hover:text-primary transition-colors"
                                >
                                    {item}
                                </ScrollLink>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default App;
