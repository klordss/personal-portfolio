'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior - Lead Software Engineer',
      company: 'Teravision - Mansfield Oil Co',
      location: 'Remote',
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
      location: 'Remote',
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
      location: 'Remote',
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
      location: 'Remote',
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
      location: 'Remote',
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
      location: 'Honduras',
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and the impact I&apos;ve made along the way
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex items-center text-emerald-600 font-semibold text-lg mb-2">
                    {exp.company}
                    <ExternalLink size={16} className="ml-2" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
