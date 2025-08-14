'use client';

import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook,
  Mail,
  Heart
} from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jelenastricak', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/jelenastricak', icon: Github },
  { name: 'Twitter', href: 'https://x.com/jstricak', icon: Twitter },
  { name: 'Instagram', href: 'https://www.instagram.com/jelenastricak/', icon: Instagram },
  { name: 'Facebook', href: 'https://www.facebook.com/herodot.tours', icon: Facebook },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Jelena Stricak
            </h3>
            <p className="text-gray-400 text-sm">
              AI Consultant & Developer | Founder of Herodot
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="https://medium.com/@jstricak" target="_blank" rel="noopener noreferrer" 
                className="block text-gray-400 hover:text-white transition-colors text-sm">
                Medium Articles
              </a>
              <a href="https://jelenastricak.substack.com" target="_blank" rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors text-sm">
                Newsletter
              </a>
              <a href="https://solmint.digital" target="_blank" rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors text-sm">
                SolMint Digital
              </a>
              <a href="https://www.cyberlinksec.com" target="_blank" rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors text-sm">
                CyberLinkSec
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
            <a 
              href="mailto:contact@jelenastricak.com"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>contact@jelenastricak.com</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Jelena Stricak. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> using Next.js & React
          </p>
        </div>
      </div>
    </footer>
  );
}
