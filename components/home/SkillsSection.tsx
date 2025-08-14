'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'LLM Integration', level: 90 },
      { name: 'Prompt Engineering', level: 95 },
      { name: 'AI Consulting', level: 85 },
      { name: 'Computer Vision', level: 75 },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React/Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Solana/Web3', level: 75 },
    ],
  },
  {
    title: 'Security & Compliance',
    skills: [
      { name: 'ISO/IEC 27001', level: 85 },
      { name: 'GDPR Compliance', level: 90 },
      { name: 'Cybersecurity', level: 80 },
      { name: 'Data Protection', level: 85 },
    ],
  },
  {
    title: 'Project Management',
    skills: [
      { name: 'Agile/Scrum', level: 85 },
      { name: 'Team Leadership', level: 90 },
      { name: 'Strategic Planning', level: 85 },
      { name: 'Client Relations', level: 95 },
    ],
  },
];

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive skill set spanning AI, development, security, and project management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
              'TensorFlow', 'PyTorch', 'Solana', 'Docker', 'AWS', 'PostgreSQL'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:border-blue-500/50 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
