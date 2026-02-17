import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Code2, BrainCircuit, Database } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "Python | PyTorch | FastAPI | HuggingFace | LangChain | Docker | GitHub";
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % 1; // Simplify to just type once for now or cycle? 
            // Actually prompt says "Animated typing effect: 'Python | PyTorch...'"
            // Usually this means typing out the skills one by one or the whole string. 
            // I'll type the whole string and then pause.

            const currentText = fullText;

            if (isDeleting) {
                setText(currentText.substring(0, text.length - 1));
                setTypingSpeed(50);
            } else {
                setText(currentText.substring(0, text.length + 1));
                setTypingSpeed(100);
            }

            if (!isDeleting && text === currentText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center px-6 pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skewed-bg z-0 pointer-events-none transform skew-x-12 translate-x-20"></div>

            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-purple-400 tracking-wide">
                        <span className="text-white">Hello, I'm</span> Ram Bhajan Sahu
                    </h2>

                    <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-purple-400">
                        Creating Intelligent <br /> AI & ML Systems
                    </h1>

                    <div className="h-8 md:h-10 flex items-center">
                        <span className="text-lg md:text-xl font-mono text-gray-300 border-r-2 border-primary pr-2 animate-pulse">
                            {text}
                        </span>
                    </div>

                    <p className="text-gray-400 max-w-lg leading-relaxed">
                        Specialized in building scalable AI solutions, from generative models to deployment.
                        Designing the future with code and data.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-all flex items-center gap-2"
                        >
                            <Code2 size={20} /> View Projects
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://github.com/Ram9608/Ram_Bhajan_Sahu_Resume/raw/main/Ram_Bhajan_Sahu_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
                        >
                            <Download size={20} /> Download Resume
                        </motion.a>
                    </div>
                </motion.div>

                {/* Holographic Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative flex justify-center items-center h-[400px] md:h-[500px]"
                >
                    {/* Animated Rings/Brain Placeholder SVG */}
                    <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
                        {/* Center Glow */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[60px] animate-pulse"></div>

                        {/* Rotating Rings */}
                        <svg viewBox="0 0 500 500" className="w-full h-full absolute inset-0 animate-spin-slow opacity-60">
                            <circle cx="250" cy="250" r="200" stroke="#4F46E5" strokeWidth="1" fill="none" strokeDasharray="10 20" />
                            <circle cx="250" cy="250" r="150" stroke="#A855F7" strokeWidth="1" fill="none" strokeDasharray="5 15" />
                            <circle cx="250" cy="250" r="100" stroke="#4F46E5" strokeWidth="2" fill="none" strokeDasharray="20 40" />
                        </svg>

                        {/* Abstract Brain/Nodes */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <BrainCircuit size={120} className="text-white drop-shadow-[0_0_15px_rgba(79,70,229,0.8)]" />
                        </motion.div>

                        {/* Floating Particles */}
                        <motion.div
                            className="absolute top-20 right-20 p-3 glass rounded-xl"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                        >
                            <Database className="text-blue-400" size={24} />
                        </motion.div>

                        <motion.div
                            className="absolute bottom-32 left-10 p-3 glass rounded-xl"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                        >
                            <Code2 className="text-purple-400" size={24} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
