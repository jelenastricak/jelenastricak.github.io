'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GraduationCap, 
  Map, 
  Cpu, 
  FolderKanban,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Education & Tutoring',
    description: 'Comprehensive educational services combining traditional teaching with AI-enhanced learning',
    features: [
      'Tutoring: History/Geography, English & Croatian',
      'Essay Proofreading & Structural Review',
      'Creative Writing Support',
      'AI-Enhanced Lesson Plans',
      'Digital Literacy Frameworks',
      'Curriculum Design',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Map,
    title: 'Heritage Tours',
    description: 'Research-driven European heritage experiences with precision planning',
    features: [
      'Precision Itinerary Planning',
      'Logistics Management',
      'Cultural Storytelling & Interpretation',
      'Operational Management',
      'Client Experience Optimization',
      'Risk-Mitigated Tour Execution',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cpu,
    title: 'AI & Tech Consulting',
    description: 'Cutting-edge AI solutions and technology consulting services',
    features: [
      'AI Consulting & Research',
      'LLM Integration',
      'Solana dApps Development',
      'ISO/IEC 27001 Implementation',
      'GDPR Compliance Protocols',
      'Technical Architecture Design',
    ],
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: FolderKanban,
    title: 'Project Management',
    description: 'Strategic project management for technology and heritage initiatives',
    features: [
      'Micro-Project Management',
      'Resource & Scope Planning',
      'Technical Content Production',
      'Blockchain Whitepapers',
      'Stakeholder Communication',
      'Agile Methodology Implementation',
    ],
    color: 'from-orange-500 to-red-500',
  },
];

export default function HerodotPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Herodot Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions bridging heritage, education, and modern technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-6`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center border border-gray-700"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how Herodot can help bring your vision to life with innovative solutions
            </p>
            <motion.a
              href="https://www.linkedin.com/in/jelenastricak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
