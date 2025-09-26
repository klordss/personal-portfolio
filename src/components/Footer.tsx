'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/josuesalinas',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/josuesalinas',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:Jsalinas.us@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-emerald-400">Josue</span>Salinas
            </h3>
            <p className="text-gray-400">
              Senior Full Stack Engineer passionate about creating amazing digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-gray-400">
            <p className="flex items-center justify-center md:justify-end">
              Made with <Heart className="mx-1 text-red-500" size={16} /> by Josue Salinas
            </p>
            <p className="text-sm mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
