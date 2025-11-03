'use client';

import React, { useState } from 'react';
import { Github, ExternalLink, ChevronRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'AI-Agent Learning Assistant',
      description: 'Developed an interactive AI-powered web app using Agentic RAG to simplify complex topics from uploaded PDFs, combining book content with web-sourced insights and dynamic visualizations.',
      tech: ['Streamlit', 'Langgraph', 'OpenAI GPT-4o', 'Tavily API', 'Vector DB'],
      highlights: [
        'Built with Streamlit, Langgraph, and OpenAI, leveraging GPT-4o-mini for natural language processing and Tavily API for real-time web searches',
        'Integrated vector databases for efficient storage and retrieval of knowledge, enabling intelligent decision-making',
        'Designed intuitive chat interface with session memory, highlighted keywords, and clear formatting',
        'Enabled users to upload PDFs and receive simplified answers, improving learning efficiency by 30%'
      ],
      github: 'https://github.com/basudabC/Study_Buddy',
      date: 'March 2025',
      featured: true,
      category: 'AI & Machine Learning'
    },
    {
    "title": "Sales Agent System",
    "description": "An AI-powered sales agent platform that automates hierarchical sales data analysis, reporting, and actionable insights, enabling departments to make faster, smarter business decisions. Integrates agentic reasoning, retrieval-augmented generation (RAG), and real-time analytics for end-to-end sales intelligence.",
    "tech": ["Streamlit", "LangGraph", "OpenAI GPT-4o", "Pandas", "Vector DB", "SharePoint Integration", "scikit-learn"],
    "highlights": [
        "Built a fully automated sales agent system using Streamlit and LangGraph with GPT-4o-mini for intelligent analysis",
        "Integrated multiple department-specific Excel workbooks with SharePoint for seamless real-time updates",
        "Enabled dynamic query responses, report generation, and data visualization for faster decision-making",
        "Applied 4-tier analytics (Descriptive, Diagnostic, Predictive, Prescriptive) to provide actionable insights from sales KPIs and trends.",
    ],
    github: "https://github.com/basudabC/Sales-Agent-System/tree/main",
    link: "https://akij-sales-agent.streamlit.app/",
    date: "November 2025",
    featured: true,
    mediaFeatured: true,
    category: "AI & Machine Learning"
    },


    {
      title: 'RAG-Powered PDF Parser',
      description: 'Designed and developed a PDF parser leveraging Retrieval-Augmented Generation (RAG) and Large Language Models (LLMs) to extract and summarize data from both structured and unstructured PDFs.',
      tech: ['RAG', 'LLMs', 'NLP', 'Python', 'Vector DB'],
      highlights: [
        'Enabled quick and accurate insights by automating data extraction and summarization, reducing manual effort by 40% and improving processing speed by 50%',
        'Implemented advanced NLP techniques to handle complex document layouts, achieving 95% accuracy in data extraction',
        'Integrated the solution into existing workflows, reducing turnaround time from hours to minutes',
        'Built user-friendly interface increasing adoption by cross-functional teams by 30%'
      ],
      github: 'https://github.com/basudabC/HR-Resume-Management',
      date: 'Oct-Nov 2024',
      featured: true,
      category: 'AI & Machine Learning'
    },
    {
      title: 'Real-Time Healthcare Translation Web App',
      description: 'Developed a web application enabling real-time multilingual translation for healthcare communication, facilitating seamless interaction between patients and healthcare providers.',
      tech: ['Flask', 'Web Speech API', 'Google Translate', 'gTTS', 'Tailwind CSS'],
      highlights: [
        'Built with Python (Flask) and JavaScript, leveraging Web Speech API for speech-to-text and deep_translator for real-time translation',
        'Implemented text-to-speech functionality using gTTS for audio playback of translated text',
        'Designed mobile-friendly, responsive interface using Tailwind CSS',
        'Supported 20+ languages including English, Spanish, French, Hindi, Arabic, Chinese, and Japanese',
        'Reduced communication barriers in healthcare settings'
      ],
      github: 'https://github.com/basudabC/RealtimeTranlate',
      date: 'Oct-Nov 2024',
      featured: true,
      category: 'Web Development'
    },
    {
      title: 'SQL Query Generator and Report Summarization Tool',
      description: 'Developed a tool enabling users to generate SQL queries in plain English, retrieve data from databases, and create detailed reports with automatic LLM-based summarization.',
      tech: ['LLM', 'SQL', 'Python', 'NLP'],
      highlights: [
        'Integrated Large Language Model to automatically summarize reports',
        'Made data analysis faster and more accessible for non-technical users',
        'Streamlined querying and reporting process, reducing time to generate insights by 40%',
        'Designed intuitive interface improving user adoption by 25%',
        'Enhanced data accessibility and decision-making efficiency'
      ],
      date: 'Jan-Jun 2023',
      featured: true,
      category: 'Business Intelligence'
    },
    {
      title: 'Face Recognition System for Bangladesh Police',
      description: 'Developed a real-time face recognition system using OpenCV and neural networks with live camera feed integration for law enforcement applications. This project was featured in national media.',
      tech: ['OpenCV', 'Neural Networks', 'Python', 'Computer Vision', 'Real-time Processing'],
      highlights: [
        'Designed and trained neural network model for efficient facial feature extraction and recognition',
        'Optimized performance for diverse lighting and environmental conditions',
        'Integrated solution with live camera feed and database for face storage and retrieval',
        'Achieved high accuracy in face detection and identification for law enforcement use',
        'Leveraged Python and AI frameworks to ensure scalability and seamless deployment',
        '📰 Featured in national media coverage for innovative AI implementation'
      ],
      link: 'https://www.jagonews24.com/country/news/423116',
      date: 'Jan-Jun 2021',
      featured: true,
      mediaFeatured: true,
      category: 'Computer Vision'
    },
    {
  title: 'SQL Data Warehouse Project',
  description: 'A comprehensive data warehouse project implementing ETL pipelines, data analytics, and BI reporting to centralize and analyze transactional data from multiple sources.',
  tech: ['SQL Server', 'T-SQL', 'ETL', 'Data Warehouse', 'Power BI'],
  highlights: [
    'Designed and implemented a centralized data warehouse integrating multiple transactional databases',
    'Developed ETL pipelines to clean, transform, and load data efficiently',
    'Created analytical reports and dashboards for business insights',
    'Optimized query performance and improved reporting speed by 35%',
    'Enabled strategic decision-making through consolidated data analysis'
  ],
  github: 'https://github.com/basudabC/SQL-Data-Warehouse-Project',
  date: '2023',
  featured: true,
  category: 'Business Intelligence'
},
{
  title: 'Sales, Customer, and Product Analysis with Power BI',
  description: 'Analyzed AdventureWorks sales data using SQL and Power BI to generate interactive dashboards for tracking sales, customers, and product performance, supporting strategic business decisions.',
  tech: ['SQL Server', 'T-SQL', 'Power BI', 'PowerQuery', 'Data Analysis'],
  highlights: [
    'Built a multi-page interactive Power BI dashboard with real-time data visualization',
    'Performed in-depth analysis of sales, customers, and products for 2016-2017',
    'Integrated SQL Server data with Power BI for automated reporting',
    'Enabled dynamic slicing/dicing of data by year, month, product, and customer attributes',
    'Supported business strategy with actionable insights and KPI tracking'
  ],
  github: 'https://github.com/basudabC/sales-customer-product-analysis-powerbi',
  date: '2023',
  featured: true,
  category: 'Business Intelligence'
},
{
  "title": "WhatsApp LangGraph Agent Integration",
  "description": "A WhatsApp-based conversational AI agent built with LangGraph, supporting voice & text messaging, voice transcription → response, and persistent multiturn context. Acts as an empathetic assistant.",
  "tech": ["LangGraph", "FastAPI", "Groq LLM", "PostgreSQL", "Twilio/WhatsApp API"],
  "highlights": [
    "Supports multi-modal communication: text input, voice notes, and voice responses. :contentReference[oaicite:1]{index=1}",
    "Maintains conversation state over WhatsApp with a relational database backend (PostgreSQL) for persistence. :contentReference[oaicite:2]{index=2}",
    "Implements transcription of voice messages (e.g., via Whisper or equivalent) and synthesised voice responses. :contentReference[oaicite:3]{index=3}",
    "Leverages LangGraph’s agent-orchestration to manage multi-step flows and memory. :contentReference[oaicite:4]{index=4}",
    "Demonstrates WhatsApp use-case for conversational AI beyond simple chatbots—designed for empathy and long-term context."
  ],
  github: "https://github.com/basudabC/Whatsapp-Langgraph-Agent-Integration",
  date: "2025",
  featured: true,
  category: "AI & Machine Learning"
},
{
  "title": "Chat with Databases using RAG",
  "description": "A project aimed at enabling conversational access to relational or other databases via retrieval-augmented generation (RAG), allowing users to ask natural-language questions that map to data queries under the hood.",
  "tech": ["RAG", "LLM", "Vector DB / embeddings", "SQL / NoSQL interface"],
  "highlights": [
    "Enables natural-language querying of structured data using RAG pipelines.",
    "Supports retrieval of relevant database context and generation of responses grounded in the data.",
    "Bridges LLMs with actual database back-ends (SQL) rather than purely document retrieval."
  ],
  github: "https://github.com/basudabC/Chat-with-databases-using-RAG",
  date: "2025",
  featured: true,
  category: "AI & Machine Learning"
},
{
  "title": "HR Resume Management",
  "description": "A human-resources focused resume management system for HR teams—likely supporting resume ingestion, parsing, search/filtering, and candidate tracking.",
  "tech": ["Python / Web Framework", "OCR/Text Extraction", "Database (HR schema)", "Frontend UI"],
  "highlights": [
    "Facilitates scalable resume intake and management for HR operations.",
    "Implements parsing and indexing of resumes for candidate profiling.",
    "Potentially integrates screening, sorting, and matching capabilities."
  ],
  github: "https://github.com/basudabC/HR-Resume-Management",
  date: "2025",
  featured: true,
  category: "Web Development"
},
{
  "title": "AI PDF Parser to Database Insert",
  "description": "A tool for automating the ingestion of PDF (and perhaps image) documents, extracting structured data, and inserting into a database—supporting downstream analytics or LLM workflows.",
  "tech": ["PDF parsing / OCR", "LLM/NLP for extraction", "Database insert (SQL/NoSQL)", "Automation/ETL pipeline"],
  "highlights": [
    "Automates PDF → structured database insertion, eliminating manual data entry.",
    "Uses AI/NLP for extracting fields from unstructured PDF content.",
    "Enables downstream analytics or BI reporting via structured data store."
  ],
    github: "https://github.com/basudabC/AI-Pdf-Parser-to-Database-Insert",
  date: "2025",
  featured: true,
  category: "Computer Vision",
}
  ];

  const categories = ['All', 'AI & Machine Learning', 'Computer Vision', 'Web Development', 'Business Intelligence'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">Basudab Chowdhury</div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/skills" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Skills
              </Link>
              <Link href="/projects" className="text-sm font-medium text-blue-600 transition-colors">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects Portfolio</h1>
          <p className="text-xl text-gray-600 mb-8">
            Innovative AI solutions and applications I've built and deployed
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-gray-600">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className={`bg-white border rounded-xl p-8 hover:shadow-xl transition-all ${
                  project.featured ? 'border-blue-200 shadow-md' : 'border-gray-200'
                }`}
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.featured && (
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      ⭐ Featured Project
                    </div>
                  )}
                  {project.mediaFeatured && (
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      📰 Media Coverage
                    </div>
                  )}
                  <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                    {project.category}
                  </div>
                </div>

                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-2">{project.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600">
                        <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.mediaFeatured ? 'Read Article' : 'Learn More'}
                    </a>
                  )}
                </div>
              </div>
            ))}
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

export default ProjectsPage;