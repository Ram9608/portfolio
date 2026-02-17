import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShieldCheck, Cpu, Users, ArrowRight, ExternalLink, Github, Lock, Database } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Student Auth API",
            desc: "Secure, scalable authentication system handling 10k+ requests with Role-Based Access Control (RBAC), JWT, and automated testing pipelines.",
            tech: ["FastAPI", "PostgreSQL", "JWT", "PyTest"],
            icon: <Lock size={28} />,
            color: "text-cyan-400",
            link: "https://github.com/Ram9608/Student-auth-api"
        },
        {
            title: "AI Job Recommendation Engine",
            desc: "High-performance job matching system leveraging TF-IDF & Cosine Similarity to optimize candidate-job alignment by 40%.",
            tech: ["Python", "TF-IDF", "Scikit-Learn", "FastAPI"],
            icon: <Briefcase size={28} />,
            color: "text-blue-400"
        },
        {
            title: "Real-Time Fraud Detection",
            desc: "Machine Learning pipeline detecting fraudulent credit card transactions in <100ms using optimized Random Forest algorithms.",
            tech: ["Random Forest", "FastAPI", "Pandas", "Docker"],
            icon: <ShieldCheck size={28} />,
            color: "text-green-400"
        },
        {
            title: "AI BOSS Assistant",
            desc: "Voice-activated desktop automation agent capable of executing system commands, web scraping, and workflow automation.",
            tech: ["Python", "NLP", "SpeechRecog", "OS"],
            icon: <Cpu size={28} />,
            color: "text-purple-400"
        },
        {
            title: "AI Talent Matcher",
            desc: "NLP-driven resume screening tool utilizing Named Entity Recognition (NER) to reduce manual hiring screenings by 70%.",
            tech: ["NLP", "SpaCy", "React", "Node.js"],
            icon: <Users size={28} />,
            color: "text-pink-400"
        },
        {
            title: "Generative AI Chatbot Hub",
            desc: "Robust LLM routing system integrating Gemini, OpenAI, and Ollama with automatic failover to ensure 99.9% availability.",
            tech: ["Python", "LangChain", "Gemini API", "FastAPI"],
            icon: <Database size={28} />,
            color: "text-amber-400",
            link: "https://github.com/Ram9608"
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_#4F46E5]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/Ram9608" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors border-b border-primary pb-1 hover:border-white">
                    View more on GitHub <ArrowRight size={16} />
                </a>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    // Determine props for conditional rendering as link or div
    const Component = project.link ? motion.a : motion.div;
    const linkProps = project.link ? {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer"
    } : {};

    return (
        <Component
            {...linkProps}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-2xl relative group overflow-hidden border-t border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col h-full cursor-pointer"
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-all duration-500"></div>

            <div className="flex justify-between items-start mb-6 relative z-10">
                <div className={`p-3 bg-white/5 rounded-xl ${project.color} shadow-lg ring-1 ring-white/10 group-hover:ring-primary/50 transition-all`}>
                    {project.icon}
                </div>
                <div className="flex gap-3">
                    {/* Visual icon only, navigation handled by parent card */}
                    <div className="text-gray-400 group-hover:text-white transition-colors"><ExternalLink size={20} /></div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors relative z-10 font-heading">
                {project.title}
            </h3>

            <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors relative z-10 text-sm leading-relaxed flex-grow">
                {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tech}
                    </span>
                ))}
            </div>
        </Component>
    );
};

export default Projects;
