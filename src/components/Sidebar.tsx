'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

const Sidebar = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/josuesalinas', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/josuesalinas', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/josuesalinas', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/in/josuesalinas', label: 'LinkedIn' },
  ];

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-4 top-1/2 -translate-y-1/2 w-[28rem] z-50 overflow-y-auto border border-white rounded-2xl"
      style={{ backgroundColor: '#1f1f1f', height: '80vh' }}
    >
      <div className="p-8 h-full flex flex-col justify-between">
        {/* Top Section */}
        <div>
          {/* Header with Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-5xl font-bold text-white">Josue</h1>
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white text-lg font-bold ml-4">
                J
              </div>
            </div>
            <div className="text-center">
              <div className="text-white text-xl font-tech">Senior Software Engineer</div>
              <div className="text-white text-xl font-tech">& Data Scientist</div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-96 h-96 mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/profile.jpg" 
              alt="Josue Salinas" 
              width={384}
              height={384}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-8"
          >
            <div className="text-white text-xl mb-2 font-medium">Jsalinas.us@gmail.com</div>
            <div className="text-white text-xl font-medium">Base in San Pedro Sula, HN</div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div>
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <div className="flex space-x-6 justify-center">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Hire Me Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-emerald-500 text-white py-5 px-6 rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center mb-6"
          >
            <Mail className="w-6 h-6 mr-3" />
            Let&apos;s Contact
          </motion.button>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-gray-400 text-base"
          >
            © {currentYear} Josue Salinas. All Rights Reserved.
          </motion.div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
