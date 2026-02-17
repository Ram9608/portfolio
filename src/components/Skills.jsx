import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Terminal, Blocks, Cpu, Database, Cloud } from 'lucide-react';

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                    Technical <span className="text-primary">Skills</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_#4F46E5]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <SkillCard
                    title="Programming"
                    icon={<Code2 size={24} />}
                    items={[
                        { name: "Python", level: 95 },
                        { name: "C++", level: 85 },
                        { name: "Java", level: 80 },
                        { name: "SQL", level: 90 },
                    ]}
                />

                <SkillCard
                    title="AI & ML"
                    icon={<BrainCircuit size={24} />}
                    items={[
                        { name: "PyTorch", level: 90 },
                        { name: "NLP", level: 85 },
                        { name: "Embeddings", level: 80 },
                        { name: "Scikit-Learn", level: 88 },
                    ]}
                />

                <SkillCard
                    title="Generative AI"
                    icon={<Cloud size={24} />}
                    items={[
                        { name: "LangChain", level: 88 },
                        { name: "HuggingFace", level: 85 },
                        { name: "LlamaParse", level: 80 },
                    ]}
                />

                <SkillCard
                    title="Tools"
                    icon={<Terminal size={24} />}
                    items={[
                        { name: "Git", level: 90 },
                        { name: "Docker", level: 85 },
                        { name: "VS Code", level: 95 },
                    ]}
                />
            </div>
        </section>
    );
};

const SkillCard = ({ title, icon, items }) => (
    <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ translateY: -5 }}
        className="glass p-6 rounded-2xl border-t border-white/10 relative overflow-hidden group"
    >
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            {icon}
        </div>

        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-primary/20 pb-3">
            <span className="text-primary">{icon}</span> {title}
        </h3>

        <div className="space-y-6">
            {items.map((item, index) => (
                <SkillItem key={index} name={item.name} level={item.level} />
            ))}
        </div>
    </motion.div>
);

const SkillItem = ({ name, level }) => {
    // Determine color based on level? Just use primary gradient.
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-300">{name}</span>
                <span className="text-primary">{level}%</span>
            </div>
            {/* Progress Bar Container */}
            <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden relative">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full relative"
                >
                    {/* Animated Shine */}
                    <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite] transform -skew-x-12"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
