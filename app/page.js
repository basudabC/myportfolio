'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Briefcase, Calendar, Award, BookOpen, ChevronRight, Code2, Brain, Database, Cloud, Zap, MessageSquare, ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'availability', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      period: '2024 - Present',
      location: 'Dhaka, Bangladesh',
      title: 'Manager BI & AI Researcher',
      company: 'Aman Group Ltd',
      achievements: [
        'Designed and implemented AI solutions leveraging Large Language Models (LLMs) and Computer Vision to address complex business challenges, reducing processing time by 15% and increasing productivity by 10%.',
        'Fine-tuned LLMs using Hugging Face Transformers for specific use cases, improving model accuracy by 12% and reducing training time by 20%.',
        'Developed and fine-tuned AI models integrating multimodal data (text and image analysis) for practical business applications, achieving 95% accuracy in cross-modal tasks.',
        'Created robust APIs to enable seamless integration of AI tools into existing business systems, reducing integration time by 30%.',
        'Optimized AI workflows using MLOps practices, including automated deployment, model tracking, and continuous monitoring, cutting deployment errors by 40%.',
        'Worked on Automatic Speech Recognition (ASR) systems, achieving 90%+ transcription accuracy and enabling voice-driven applications to improve user experiences.'
      ]
    },
    {
      period: '2024 - 2024',
      location: 'Dhaka, Bangladesh',
      title: 'Senior Manager Business Intelligence & AI Engineer',
      company: 'Praava Health',
      achievements: [
        'Designed and developed AI-powered dashboards integrating predictive analytics, Large Language Models (LLMs), and generative AI to deliver actionable insights, improving decision-making efficiency by 25%.',
        'Implemented LLM-based solutions to automate reporting and generate dynamic content, reducing manual effort by 30% and accelerating report generation by 40%.',
        'Deployed advanced AI and analytics tools to support strategic initiatives across Marketing, Sales, Product, and Finance, increasing cross-departmental productivity by 15%.',
        'Led AI R&D projects focused on LLMs, generative AI, and machine learning, optimizing workflows and driving innovation, resulting in 20% faster model deployment cycles.',
        'Spearheaded the adoption of AI technologies across the organization, improving operational efficiency by 20% and reducing costs by 15%.'
      ]
    },
    {
      period: '2022 - 2024',
      location: 'Dhaka, Bangladesh',
      title: 'Manager - Business Intelligence',
      company: 'Daraz (Alibaba Group)',
      achievements: [
        'Led the BI team in designing and implementing data visualization dashboards, enhancing data accuracy and reporting speed by 50%.',
        'Collaborated with stakeholders to gather requirements and deliver actionable insights, improving decision-making efficiency by 25%.',
        'Built self-service reporting tools using SQL queries, empowering business users to generate reports independently and reducing query resolution time by 30%.',
        'Developed predictive models using data mining and statistical techniques, increasing the accuracy of business forecasts by 20%.',
        'Streamlined data workflows and improved data quality, reducing errors in reporting by 15%.'
      ]
    },
    {
      period: '2020 - 2022',
      location: 'Dhaka, Bangladesh',
      title: 'Data Scientist',
      company: 'LeReve (Textile RMG)',
      achievements: [
        'Worked with various reporting tools (Tableau, Power BI, Excel) to design and continuously improve dashboards, enhancing user experience and increasing adoption by 30%.',
        'Analyzed enterprise datasets to identify trends and insights, simplifying product development and improving marketing strategies, leading to a 15% increase in customer engagement.',
        'Developed and deployed predictive models using machine learning algorithms, increasing customer retention by 25%.',
        'Collaborated with stakeholders to deliver actionable insights and reports, improving decision-making efficiency by 20%.',
        'Optimized dashboard performance and data visualization, reducing report generation time by 40%.'
      ]
    },
    {
      period: '2019 - 2019',
      location: 'UK',
      title: 'Data Analyst',
      company: 'Indigo Yin - ULTRALYSIS',
      achievements: [
        'Developed and implemented databases, data collection systems, and data analytics strategies to optimize statistical efficiency, improving data processing speed by 30%.',
        'Analyzed large datasets using SQL and Python, generating actionable insights that boosted operational efficiency by 25% and supported data-driven decision-making.',
        'Built predictive models and machine learning algorithms to solve business problems, increasing forecast accuracy by 20%.',
        'Collaborated with cross-functional teams to identify key metrics and deliver insights, reducing decision-making time by 15%.',
        'Automated data analysis workflows, saving 10+ hours per week in manual effort.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science & Engineering',
      institution: 'Institute of Science Trade & Technology',
      year: '2018',
      specialization: 'Computer Science & Engineering'
    }
  ];

  const certifications = [
    'AI/ML Development & Large Language Models (LLMs)',
    'Computer Vision & Neural Networks',
    'Cloud Platforms (AWS, Azure, GCP)',
    'MLOps & Model Deployment',
    'Data Analytics & Business Intelligence',
    'Advanced Python Programming'
  ];

  const coreSkills = [
    { icon: '🤖', title: 'AI & LLMs', description: 'LangGraph, Autogen, LangChain, RAG' },
    { icon: '👁️', title: 'Computer Vision', description: 'OpenCV, Neural Networks, Real-time Processing' },
    { icon: '☁️', title: 'Cloud Platforms', description: 'AWS, Azure, GCP, Linux Servers' },
    { icon: '🗄️', title: 'Databases', description: 'PostgreSQL, MongoDB, Weaviate, Redis' },
    { icon: '📊', title: 'Data Analytics', description: 'Tableau, Power BI, Pandas, Apache Spark' },
    { icon: '⚙️', title: 'MLOps', description: 'Docker, Kubernetes, CI/CD, Git' }
  ];

  const availabilityOptions = [
    { icon: MessageSquare, title: 'Consulting', description: 'Expert guidance on AI/ML strategy and implementation' },
    { icon: Briefcase, title: 'Full-Time Opportunities', description: 'Open to discussing AI Engineer positions' },
    { icon: Award, title: 'Speaking Engagements', description: 'Conferences, workshops, and educational events' },
    { icon: Brain, title: 'Advisory Roles', description: 'Advisory roles for startups and established companies' },
    { icon: Code2, title: 'Open Source', description: 'Contributing to meaningful open source AI projects' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">Basudab Chowdhury</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Education', 'Availability', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
              <Link
                href="/skills"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-2 text-sm uppercase tracking-wide font-medium">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Basudab Chowdhury
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
                AI, Data Science & BI Solutions Strategist
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Building intelligent, data-driven systems that automate decisions and shape the future.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                AI & BI Solutions Specialist with deep expertise in Large Language Models (LLMs), Computer Vision, and Business Process Automation. 
                Skilled in cloud platforms, machine learning, data science, and analytics—translating complex data into actionable intelligence. 
                Experienced in leading teams, optimizing models, and driving business growth through AI-powered automation and insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/basudab007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/basudabC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="mailto:basudab.chowdhory@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
                <a
                  href="https://drive.google.com/file/d/1lGbuTzdPwsiTikTvAHtVL9NTATdKqjKI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
                >
                  <FileText className="w-5 h-5" />
                  Resume
                </a>
              </div>
              <div className="flex flex-wrap gap-8 pt-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+88 01750 973483</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/Profile_photo.png"
                  alt="Basudab Chowdhury"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 mb-8">
            Passionate about creating intelligent systems that solve real-world problems
          </p>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
              <div className="text-gray-700 text-sm font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">45+</div>
              <div className="text-gray-700 text-sm font-medium">AI Projects</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-700 text-sm font-medium">Model Accuracy</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">40%</div>
              <div className="text-gray-700 text-sm font-medium">Cost Reduction</div>
            </div>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
            <p>
              I am an AI & BI specialist with deep expertise in designing and deploying cutting-edge AI solutions, including Large Language Models (LLMs),
              Computer Vision, and advanced machine learning systems. I combine technical mastery with strategic vision, enabling organizations to 
              leverage AI for actionable insights, automation, and business growth.
            </p>
            <p>
              With extensive experience leading cross-functional teams, I excel at translating complex AI/ML research into practical, 
              scalable solutions. My expertise spans cloud platforms, data engineering, model optimization, vector databases, embeddings, 
              RAG pipelines, and end-to-end ML/DL project development.
            </p>
            <p>
              Beyond technical execution, I specialize in business process automation and organizational efficiency, helping businesses implement
               AI-driven workflows that reduce costs, enhance decision-making, and accelerate performance. I also provide consultancy to guide 
               enterprises in adopting AI strategies, integrating data solutions, and optimizing operations through intelligent automation.
            </p>
            <p>
              Passionate about bridging innovation with execution, I thrive at the intersection of technology, strategy, and leadership—delivering 
              both transformative AI solutions and measurable business impact.
            </p>

          </div>

          {/* Core Competencies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{skill.title}</h4>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/skills"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-md hover:shadow-lg"
              >
                View All Skills & Expertise
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600">My journey in AI and Data Engineering</p>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</p>
                  </div>
                  <div className="text-gray-600 text-sm md:text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="text-blue-600 font-semibold flex-shrink-0 bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center text-sm">{i + 1}</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Education</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 mb-1">{edu.institution}</p>
                    <p className="text-gray-600">Specialized in {edu.specialization}</p>
                    <p className="text-gray-500 text-sm mt-2">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section id="availability" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Availability</h2>
            <p className="text-xl text-gray-600">Current availability for projects and opportunities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availabilityOptions.map((option, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                  <option.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-12">
            Let&apos;s discuss how we can work together on your next AI project
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:basudab.chowdhory@gmail.com"
                className="text-blue-600 hover:text-blue-700"
              >
                basudab.chowdhory@gmail.com
              </a>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+8801750973483" className="text-blue-600 hover:text-blue-700">
                +88 01750 973483
              </a>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Basudab Chowdhury. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;