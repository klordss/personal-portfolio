'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, ChevronDown, Github, Linkedin, Mail, Code, Database, Globe, BarChart3, User } from 'lucide-react';
import { useState, useEffect } from 'react';

const MainContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const roles = [
    'Developer',
    'Designer',
    'Engineer'
  ];


  // Track active section for navigation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'Client Relationship Management System',
      description: 'A comprehensive CRM system built with .NET Core microservices',
      technologies: ['.NET Core', 'C#', 'PostgreSQL', 'AWS'],
      category: 'fullstack',
    },
    {
      title: 'Document Storage API',
      description: 'A cloud-native document management system with GraphQL API',
      technologies: ['.NET Core', 'GraphQL', 'AWS S3', 'Docker'],
      category: 'backend',
    },
    {
      title: 'Analytics & Reporting Platform',
      description: 'A Power BI integrated analytics platform with Python automation',
      technologies: ['Python', 'Power BI', 'Azure ML', 'SQL Server'],
      category: 'analytics',
    },
  ];

  const experiences = [
    {
      title: 'Senior - Lead Software Engineer',
      company: 'Teravision - Mansfield Oil Co',
      period: 'Nov 2023 - Present',
      description: 'Leading design and development of Order and delivery management system with payment integration and logistics management for drivers.',
      achievements: [
        'Designed and developed comprehensive Order and delivery management system',
        'Implemented payment integration with Wells Fargo Bank',
        'Built logistic and expenses management system for Drivers',
        'Led technical architecture decisions for enterprise-scale applications',
      ],
      technologies: ['.NET', 'SQL Server', 'Azure', 'React', 'TypeScript'],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Hungerrush',
      period: 'Jan 2023 - Oct 2023',
      description: 'Designed and implemented advanced ordering features with customizable pizza configurations and comprehensive testing strategies.',
      achievements: [
        'Designed and implemented advanced ordering features',
        'Developed customizable pizza configurations',
        'Improved backend and frontend with unit and integration tests using Selenium',
        'Enhanced application performance and user experience',
      ],
      technologies: ['.NET', 'Dapper', 'SQL Server', 'ASP.NET', 'JavaScript', 'Docker', 'Web APIs'],
    },
    {
      title: 'Senior Software Engineer',
      company: 'DragonSpear - UL',
      period: 'Apr 2022 - Jan 2023',
      description: 'Built Central Standard Decision Solution (CSDS) and developed CRM and supply chain ERP modules with modern cloud technologies.',
      achievements: [
        'Built Central Standard Decision Solution (CSDS)',
        'Developed CRM and supply chain ERP modules',
        'Led backend and frontend feature development',
        'Implemented cloud-native solutions with Google Cloud',
      ],
      technologies: ['.NET 6/7', 'Blazor', 'Entity Framework', 'SQL Server', 'Azure Functions', 'Google Cloud'],
    },
    {
      title: '.NET Senior Engineer',
      company: 'AFL',
      period: 'Jan 2021 - Apr 2022',
      description: 'Migrated legacy WinForms systems and mentored junior developers while building new APIs and services.',
      achievements: [
        'Migrated legacy WinForms systems to modern architecture',
        'Mentored junior developers and conducted code reviews',
        'Built new APIs and services for enterprise integration',
        'Improved system performance and maintainability',
      ],
      technologies: ['.NET', 'PostgreSQL', 'SQL Server', 'RabbitMQ', 'GraphQL', 'Angular', 'Docker'],
    },
    {
      title: 'Full Stack Engineer',
      company: 'SERVPRO',
      period: 'Sep 2019 - Dec 2020',
      description: 'Developed modules for work center ERP system with comprehensive testing and service integration via message broker.',
      achievements: [
        'Developed modules for work center ERP system',
        'Implemented unit tests and SonarQube for code quality',
        'Integrated services via message broker architecture',
        'Enhanced system reliability and performance',
      ],
      technologies: ['.NET Core 3.1', 'MySQL', 'Angular', 'AWS', 'WCF', 'CQRS'],
    },
    {
      title: 'Senior Full Stack Engineer',
      company: 'Caracol Knits',
      period: '2012 - 2019',
      description: 'Led ERP data migration and built predictive analytics and machine learning tools, saving over $100K in operational costs.',
      achievements: [
        'Led ERP data migration for manufacturing operations',
        'Built predictive analytics and machine learning tools (+$100K saved)',
        'Developed admin tools and manufacturing/import/export modules',
        'Implemented data-driven decision making processes',
      ],
      technologies: ['C#', '.NET', 'SQL Server', 'Python', 'Power BI', 'Azure ML', 'WPF', 'Silverlight'],
    },
  ];

  return (
    <main className="flex-1 ml-[28rem] min-h-screen relative" style={{ backgroundColor: '#1f1f1f' }}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 right-0 left-80 backdrop-blur-md z-40"
        style={{ backgroundColor: 'rgba(31, 31, 31, 0.95)' }}
      >
        <div className="flex justify-between items-center px-8 py-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors"
          >
            <Code className="w-4 h-4" />
            <span className="text-sm font-medium">INTRODUCE</span>
          </motion.button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Right Vertical Navigation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed right-16 top-1/2 -translate-y-1/2 z-30"
      >
        <div className="p-4 border border-white rounded-2xl" style={{ borderWidth: '1px' }}>
          <div className="flex flex-col space-y-4">
            {[
              { id: 'home', icon: Code, label: 'Home', active: activeSection === 'home' },
              { id: 'about', icon: User, label: 'About', active: activeSection === 'about' },
              { id: 'resume', icon: Database, label: 'Resume', active: activeSection === 'resume' },
              { id: 'services', icon: Globe, label: 'Services', active: activeSection === 'services' },
              { id: 'skills', icon: BarChart3, label: 'Skills', active: activeSection === 'skills' },
              { id: 'projects', icon: Globe, label: 'Projects', active: activeSection === 'projects' },
              { id: 'contact', icon: Mail, label: 'Contact', active: activeSection === 'contact' },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  item.active
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white'
                }`}
                title={item.label}
              >
                <item.icon size={20} />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section id="home" className="pt-20 px-8 py-20 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                <span className="block">Say Hi from</span>
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    Josue
                  </span>
                </span>
                <span className="block text-white font-tech text-2xl">
                  Senior Software Engineer & Data Scientist
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-400 max-w-2xl leading-relaxed"
              >
                I design and code beautifully simple things and I love what I do. 
                Just simple like that!
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex space-x-8 pt-8"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  18+
                </div>
                <div className="text-sm text-gray-400 mt-2">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  50+
                </div>
                <div className="text-sm text-gray-400 mt-2">projects completed on 15 countries</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Projects Circle */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="w-32 h-32 border-2 border-white rounded-full flex flex-col items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
            >
              <ChevronDown size={24} className="mb-2" />
              <span className="text-xs font-medium">MY PROJECTS</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            Every great design begin with an even better story
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 leading-relaxed mb-8"
          >
            Since beginning my journey as a software engineer nearly 18 years ago, I&apos;ve done remote work for agencies, 
            consulted for startups, and collaborated with talented people to create digital products for both business 
            and consumer use. I&apos;m quietly confident, naturally curious, and perpetually working on improving my chops 
            one design problem at a time.
          </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="px-8 py-20" style={{ backgroundColor: '#1f1f1f' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            Education & Experience
          </motion.h2>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>
            
            {/* All Experience Entries */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="relative flex items-start group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 rounded-full border-4 border-gray-900 z-10 transition-all duration-300 bg-gray-500 group-hover:bg-emerald-500"></div>
                  
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ 
                      y: -3, 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="ml-16 p-6 rounded-xl transition-colors group flex-1"
                  >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors"
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="text-emerald-400 font-semibold text-lg mb-2"
                    >
                      {exp.company}
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="text-gray-400 mb-4"
                    >
                      {exp.period}
                    </motion.div>
                  </div>
                </div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="text-gray-300 mb-6 leading-relaxed"
                >
                  {exp.description}
                </motion.p>

                {exp.achievements && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 1.6 + (index * 0.1) + (idx * 0.1) 
                          }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <span className="text-emerald-400 mr-2">•</span>
                          <span className="text-gray-300">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {exp.technologies && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 2.0 + (index * 0.1) + (idx * 0.05) 
                          }}
                          viewport={{ once: true }}
                          className="text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-400 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + (experiences.length * 0.1) }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + (experiences.length * 0.1) }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8"
            >
              Education
            </motion.h3>
            <div className="text-emerald-400 font-semibold mb-4">2010 - 2013</div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + (experiences.length * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -3, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
                className="p-6 rounded-xl transition-colors group"
            >
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + (experiences.length * 0.1) }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors"
              >
                Bachelor Degree of Computer Science Engineering
              </motion.h3>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + (experiences.length * 0.1) }}
                viewport={{ once: true }}
                className="text-emerald-400 font-semibold text-lg mb-4"
              >
                UNICAH, Honduras
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + (experiences.length * 0.1) }}
                viewport={{ once: true }}
                className="text-gray-300 leading-relaxed"
              >
                Specialized in software development, database design, and system architecture. 
                Focused on modern programming paradigms, software engineering principles, and 
                enterprise application development.
              </motion.p>
            </motion.div>
          </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            My Specializations
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Website Development',
                description: 'I created digital products with unique ideas using .NET, React & Angular',
                projects: '24 Projects'
              },
              {
                title: 'Backend Development',
                description: 'I build robust APIs and services with .NET Core, Node.js and cloud technologies',
                projects: '126 Projects'
              },
              {
                title: 'Data Analytics',
                description: 'Increase insights for your business with Power BI, Python and machine learning',
                projects: '8 Projects'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.2),
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="p-6 rounded-xl transition-colors group"
              >
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors"
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                  viewport={{ once: true }}
                  className="text-gray-400 mb-4"
                >
                  {service.description}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + (index * 0.2) }}
                  viewport={{ once: true }}
                  className="text-emerald-400 font-semibold"
                >
                  {service.projects}
                </motion.div>
              </motion.div>
            ))}
          </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 py-20" style={{ backgroundColor: '#1f1f1f' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            My Advantages
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: 'C#/.NET', percentage: 95 },
              { skill: 'SQL Server', percentage: 90 },
              { skill: 'React/Angular', percentage: 85 },
              { skill: 'AWS/Azure', percentage: 80 },
              { skill: 'Python', percentage: 75 },
              { skill: 'Power BI', percentage: 70 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.1),
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -3, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="p-6 rounded-xl transition-colors group"
              >
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center mb-4"
                >
                  <span className="text-white font-semibold group-hover:text-emerald-400 transition-colors">{item.skill}</span>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="text-emerald-400 font-bold"
                  >
                    {item.percentage}%
                  </motion.span>
                </motion.div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 1.0 + (index * 0.1),
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full relative"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.15),
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="rounded-xl overflow-hidden transition-colors group"
              >
                <motion.div 
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.15) }}
                  viewport={{ once: true }}
                  className="h-48 bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center relative overflow-hidden"
                >
                  <motion.div
                    initial={{ rotate: -10, scale: 0.8 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 + (index * 0.15) }}
                    viewport={{ once: true }}
                    className="text-white text-4xl font-bold"
                  >
                    {project.title.charAt(0)}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 + (index * 0.15) }}
                    viewport={{ once: true }}
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"
                  />
                </motion.div>
                <div className="p-6">
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + (index * 0.15) }}
                    viewport={{ once: true }}
                    className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + (index * 0.15) }}
                    viewport={{ once: true }}
                    className="text-gray-400 mb-4"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 + (index * 0.15) }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 1.8 + (index * 0.15) + (techIndex * 0.1) 
                        }}
                        viewport={{ once: true }}
                        className="text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-400 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20" style={{ backgroundColor: '#1f1f1f' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            Get In Touch
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-400 leading-relaxed mb-8"
              >
                Have a project in mind or want to collaborate? I&apos;d love to hear from you!
              </motion.p>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'Jsalinas.us@gmail.com', delay: 0.8 },
                  { icon: Github, text: 'github.com/josuesalinas', delay: 1.0 },
                  { icon: Linkedin, text: 'linkedin.com/in/josuesalinas', delay: 1.2 }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: contact.delay }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, transition: { duration: 0.3 } }}
                    className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <contact.icon className="w-5 h-5 mr-3 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    </motion.div>
                    <span>{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl"
            >
              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none resize-none transition-colors"
                  />
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
