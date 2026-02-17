import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, PenTool, Code, Zap } from 'lucide-react';

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                    <span className="text-primary">Achievements</span> & Certifications
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_#4F46E5]"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 items-stretch">
                <Badge
                    title="1st Prize Yuwa Kaushal"
                    icon={<Award size={32} />}
                    color="text-yellow-400"
                    glow="shadow-yellow-500/50"
                />

                <Badge
                    title="NCC 'A' Certificate"
                    icon={<Shield size={32} />}
                    color="text-blue-400"
                    glow="shadow-blue-500/50"
                />

                <Badge
                    title="Full Stack Intern"
                    icon={<Code size={32} />}
                    color="text-green-400"
                    glow="shadow-green-500/50"
                />

                <Badge
                    title="NSS Volunteer"
                    icon={<Zap size={32} />}
                    color="text-orange-400"
                    glow="shadow-orange-500/50"
                />

                <Badge
                    title="Java Certified"
                    icon={<PenTool size={32} />}
                    color="text-purple-400"
                    glow="shadow-purple-500/50"
                />

                <Badge
                    title="C++ Certified"
                    icon={<Code size={32} />}
                    color="text-indigo-400"
                    glow="shadow-indigo-500/50"
                />
            </div>
        </section>
    );
};

const Badge = ({ title, icon, color, glow }) => (
    <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="glass flex flex-col items-center justify-center p-8 rounded-2xl w-48 h-48 border border-white/5 relative group cursor-pointer transition-all duration-300 hover:border-white/20"
    >
        <div className={`mb-4 ${color} drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform group-hover:-translate-y-2`}>
            {icon}
        </div>
        <h3 className="text-center font-bold text-white group-hover:text-primary transition-colors text-sm">{title}</h3>

        {/* Glow Element */}
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-current ${color} blur-xl pointer-events-none`}></div>
    </motion.div>
);

export default Achievements;
