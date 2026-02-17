import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Linkedin, Github, GraduationCap, School } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_#4F46E5]"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Profile/About Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-2xl relative"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="white" />
                        </svg>
                    </div>

                    <h3 className="text-2xl font-semibold mb-4 text-white">Professional Summary</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        I am a <span className="text-primary font-semibold">B.Tech AI & ML student</span> with a deep passion for building intelligent systems.
                        From rigorous academic training to hands-on project deployment, I bridge the gap between theoretical AI concepts and functional applications.
                        My expertise spans Full Stack Development and Machine Learning pipelines.
                    </p>

                    <div className="flex items-center space-x-6 text-gray-300 mb-6">
                        <div className="flex items-center gap-2">
                            <MapPin className="text-primary" size={20} /> Ranchi, India
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-colors border border-white/10">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/Ram9608" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-colors border border-white/10">
                            <Github size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Education Timeline */}
                <div className="space-y-8 pl-4 border-l-2 border-primary/30 relative">
                    {/* Timeline Item 1 */}
                    <TimelineItem
                        year="2027"
                        title="B.Tech AI & ML"
                        score="CGPA 8.1"
                        school="Lamrin Tech Skills University"
                        icon={<GraduationCap size={20} />}
                    />

                    {/* Timeline Item 2 */}
                    <TimelineItem
                        year="2022"
                        title="PCM + CS"
                        score="88%"
                        school="St. Xavier's College"
                        icon={<School size={20} />}
                    />

                    {/* Timeline Item 3 */}
                    <TimelineItem
                        year="2020"
                        title="High School"
                        score="88.2%"
                        school="St. Ignatius High School"
                        icon={<School size={20} />}
                    />
                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ year, title, score, school, icon }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative pl-8 group"
    >
        {/* Dot */}
        <div className="absolute -left-[9px] top-0 bg-page-bg border-2 border-primary text-primary w-4 h-4 rounded-full group-hover:bg-primary group-hover:shadow-[0_0_10px_#4F46E5] transition-all duration-300"></div>

        <div className="glass p-5 rounded-xl hover:border-primary/50 transition-colors duration-300">
            <div className="flex justify-between items-start mb-2">
                <span className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">{year}</span>
                <span className="text-gray-400 text-sm flex items-center gap-1">{icon}</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
            <div className="text-base text-gray-300 mb-1">{school}</div>
            <div className="text-sm text-primary font-medium">{score}</div>
        </div>
    </motion.div>
);

export default About;
