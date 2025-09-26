'use client';

import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Languages & Frameworks', icon: Code, description: 'C#/.NET, ASP.NET Core, JavaScript, TypeScript, Python, Node.js, Java, C++, Blazor, WPF' },
    { name: 'Database & ORM', icon: Database, description: 'SQL Server, PostgreSQL, MySQL, Entity Framework, Dapper, DynamoDB, Amazon Aurora' },
    { name: 'Cloud & DevOps', icon: Globe, description: 'Docker, Azure, AWS, Google Cloud, CI/CD, Azure Functions, Microservices, API Design' },
    { name: 'Data & Analytics', icon: Smartphone, description: 'Power BI, SSRS, SSIS, Azure ML, Machine Learning, Data Analysis, ETL, Reporting' },
  ];

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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software engineer with a love for creating innovative solutions
            and beautiful user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                With 18+ years of experience spanning manufacturing, textiles, services, finance, and food industries,
                I've specialized in architecting and developing enterprise solutions for production tracking,
                resource management, and customer service platforms. My journey includes database administration,
                data engineering, and implementing machine learning solutions for predictive analytics.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What I Do</h3>
              <p className="text-gray-600 leading-relaxed">
                Since 2018, I've excelled in remote full-stack development with the .NET ecosystem,
                cloud technologies (AWS/Azure), and modern frontend frameworks. I specialize in
                microservices architecture, API development, and data analytics solutions that drive
                business value and operational efficiency.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Beyond Code</h3>
              <p className="text-gray-600 leading-relaxed">
                I complement my technical expertise with 6+ years as a university professor in IT,
                fostering the next generation of developers. I'm passionate about mentoring,
                continuous learning, and sharing knowledge about best practices in software engineering
                and cloud architecture.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <skill.icon className="text-emerald-600" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                </div>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
