'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Professional',
    description: 'ISO/IEC 27001 auditor, Project Management, and AI certifications',
  },
  {
    icon: BookOpen,
    title: 'Educator & Guide',
    description: 'Licensed tour guide and educator specializing in European heritage',
  },
  {
    icon: Shield,
    title: 'Security Focused',
    description: 'Implementing GDPR compliance and secure delivery protocols',
  },
  {
    icon: Users,
    title: 'Multilingual',
    description: 'Fluent communication in Croatian and English',
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Combining technical expertise with cultural heritage to create innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  AI Consultant & Developer
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As the founder of Herodot, I apply modern AI, data workflows, and secure 
                  delivery to research-driven European heritage experiences and education. 
                  My background as a historian, educator, and licensed tour guide provides 
                  unique insights into bridging technology with cultural preservation.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Technical Excellence
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I design and deploy AI-assisted content, tutoring, and operational tooling 
                  while leading projects and communications for cybersecurity initiatives with 
                  ISO/IEC 27001–aligned practices. My expertise spans from LLM integration to 
                  Solana dApps development.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
