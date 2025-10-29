'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const SkillsPage = () => {
  const [expandedSkills, setExpandedSkills] = useState({
    ai: true,
    web: true,
    programming: false,
    cloud: false,
    ml: true,
    database: true,
    devops: false,
    data: false
  });

  const toggleSkillSection = (section) => {
    setExpandedSkills(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const skills = [
    { 
      category: 'AI Frameworks & Libraries', 
      key: 'ai',
      icon: '🤖',
      items: [
        { name: 'LangGraph', level: 'Expert', percentage: 95 },
        { name: 'N8N', level: 'Expert', percentage: 95 },
        { name: 'Autogen', level: 'Expert', percentage: 90 },
        { name: 'LangChain', level: 'Advanced', percentage: 85 },
        { name: 'LlamaIndex', level: 'Advanced', percentage: 88 },
        { name: 'LangFuse', level: 'Advanced', percentage: 85 }
      ]
    },
    { 
      category: 'Web Frameworks & Libraries', 
      key: 'web',
      icon: '💻',
      items: [
        { name: 'FastAPI', level: 'Expert', percentage: 95 },
        { name: 'Flask', level: 'Expert', percentage: 95 },
        { name: 'Node.js', level: 'Expert', percentage: 90 },
        { name: 'Django', level: 'Advanced', percentage: 85 },
        { name: 'Next.js', level: 'Advanced', percentage: 85 }
      ]
    },
    { 
      category: 'Programming Languages', 
      key: 'programming',
      icon: '💻',
      items: [
        { name: 'Python', level: 'Expert', percentage: 95 },
        { name: 'JavaScript/TypeScript', level: 'Advanced', percentage: 85 },
        { name: 'SQL', level: 'Expert', percentage: 90 },
        { name: 'Go', level: 'Advanced', percentage: 75 }
      ]
    },
    { 
      category: 'Cloud & Infrastructure', 
      key: 'cloud',
      icon: '☁️',
      items: [
        { name: 'Self-hosted Linux Server', level: 'Expert', percentage: 95 },
        { name: 'Azure', level: 'Expert', percentage: 85 },
        { name: 'AWS', level: 'Expert', percentage: 90 },
        { name: 'Google Cloud', level: 'Advanced', percentage: 85 }
      ]
    },
    { 
      category: 'ML Python Modules', 
      key: 'ml',
      icon: '📊',
      items: [
        { name: 'Scikit-learn', level: 'Expert', percentage: 95 },
        { name: 'PyTorch', level: 'Expert', percentage: 90 },
        { name: 'TensorFlow', level: 'Advanced', percentage: 85 },
        { name: 'Sentence Transformers', level: 'Advanced', percentage: 85 },
        { name: 'Huggingface', level: 'Advanced', percentage: 80 },
        { name: 'Numpy', level: 'Advanced', percentage: 85 }
      ]
    },
    { 
      category: 'Database Technologies', 
      key: 'database',
      icon: '🗄️',
      items: [
        { name: 'Weaviate', level: 'Expert', percentage: 95 },
        { name: 'PostgreSQL', level: 'Expert', percentage: 95 },
        { name: 'MongoDB', level: 'Expert', percentage: 80 },
        { name: 'Redis', level: 'Advanced', percentage: 85 },
        { name: 'Apache Spark', level: 'Advanced', percentage: 85 }
      ]
    },
    { 
      category: 'DevOps Tools', 
      key: 'devops',
      icon: '⚙️',
      items: [
        { name: 'Docker', level: 'Expert', percentage: 95 },
        { name: 'Git', level: 'Expert', percentage: 95 },
        { name: 'CI/CD', level: 'Advanced', percentage: 85 },
        { name: 'Kubernetes', level: 'Advanced', percentage: 80 }
      ]
    },
    { 
      category: 'Data Engineering Tools', 
      key: 'data',
      icon: '📈',
      items: [
        { name: 'Pandas', level: 'Expert', percentage: 95 },
        { name: 'Tableau', level: 'Expert', percentage: 90 },
        { name: 'Power BI', level: 'Expert', percentage: 90 },
        { name: 'Apache Airflow', level: 'Advanced', percentage: 85 },
        { name: 'dbt', level: 'Advanced', percentage: 80 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Basudab Chowdhury
            </Link>
            <div className="flex space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/skills" className="text-sm font-medium text-blue-600">
                Skills
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Skills Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600">
              Technologies and tools I work with to build intelligent systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleSkillSection(skillGroup.key)}
                  className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skillGroup.icon}</span>
                    <span className="font-semibold text-gray-900 text-lg">
                      {skillGroup.category}
                    </span>
                  </div>
                  {expandedSkills[skillGroup.key] ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {expandedSkills[skillGroup.key] && (
                  <div className="px-5 pb-5 space-y-4 bg-gray-50">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">
                            {skill.level} {skill.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div
                            className={`h-2.5 rounded-full transition-all duration-700 ${
                              skill.percentage >= 90 
                                ? 'bg-green-500' 
                                : skill.percentage >= 85 
                                ? 'bg-blue-500' 
                                : 'bg-blue-400'
                            }`}
                            style={{ 
                              width: `${skill.percentage}%`,
                              transition: 'width 0.7s ease-out'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;