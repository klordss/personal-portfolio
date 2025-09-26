'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Client Relationship Management System',
      description: 'A comprehensive CRM system built with .NET Core microservices, featuring real-time data processing, advanced analytics, and multi-tenant architecture.',
      image: '/api/placeholder/600/400',
      technologies: ['.NET Core', 'C#', 'PostgreSQL', 'Dapper', 'AWS', 'Docker'],
      category: 'fullstack',
      github: 'https://github.com/yourusername/crm-system',
      live: 'https://your-crm-demo.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Document Storage API',
      description: 'A cloud-native document management system with GraphQL API, featuring secure file storage, version control, and advanced search capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['.NET Core', 'GraphQL', 'AWS S3', 'PostgreSQL', 'Docker'],
      category: 'backend',
      github: 'https://github.com/yourusername/document-storage-api',
      live: null,
      featured: true,
    },
    {
      id: 3,
      title: 'Project Planning Dashboard',
      description: 'An Angular-based project management application with real-time collaboration, Gantt charts, and resource allocation features.',
      image: '/api/placeholder/600/400',
      technologies: ['Angular', 'TypeScript', '.NET Core', 'SQL Server', 'SignalR'],
      category: 'frontend',
      github: 'https://github.com/yourusername/project-dashboard',
      live: 'https://your-project-demo.com',
      featured: true,
    },
    {
      id: 4,
      title: 'Database Administration Tool',
      description: 'A comprehensive database management tool with Material UI, featuring query optimization, performance monitoring, and automated backups.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Material UI', '.NET Core', 'SQL Server', 'Entity Framework'],
      category: 'fullstack',
      github: 'https://github.com/yourusername/db-admin-tool',
      live: null,
      featured: false,
    },
    {
      id: 5,
      title: 'Analytics & Reporting Platform',
      description: 'A Power BI integrated analytics platform with Python automation, featuring predictive modeling and automated report generation.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Power BI', 'Azure ML', 'SQL Server', 'SSIS'],
      category: 'analytics',
      github: 'https://github.com/yourusername/analytics-platform',
      live: null,
      featured: true,
    },
    {
      id: 6,
      title: 'Microservices API Gateway',
      description: 'A high-performance API gateway for microservices architecture with authentication, rate limiting, and load balancing.',
      image: '/api/placeholder/600/400',
      technologies: ['.NET Core', 'Ocelot', 'Redis', 'Docker', 'AWS'],
      category: 'backend',
      github: 'https://github.com/yourusername/api-gateway',
      live: null,
      featured: false,
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'analytics', label: 'Analytics' },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I love to work with
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter} // Force re-render when filter changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star size={12} className="mr-1" />
                    Featured
                  </div>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                  {project.title.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
