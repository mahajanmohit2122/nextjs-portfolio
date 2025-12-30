'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaDatabase, FaChartBar } from 'react-icons/fa'
import { SiJupyter, SiMysql, SiPandas, SiScikitlearn, SiTensorflow } from 'react-icons/si'

const projects = [
  {
    title: 'BMW Sales SQL Analysis',
    description: 'SQL case study analyzing BMW sales data using MySQL with real-world business questions and insights.',
    tech: ['SQL', 'MySQL', 'Data Analysis'],
    github: 'https://github.com/mahajanmohit2122/bmw-sales-sql-analysis',
    stars: 0
  },
  {
    title: 'MagicBricks Real Estate EDA',
    description: 'Exploratory Data Analysis on MagicBricks Real Estate Dataset with comprehensive insights.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/mahajanmohit2122/MagicBricks-EDA',
    stars: 1
  },
  {
    title: 'Face Detection Attendance System',
    description: 'Smart system using real-time face recognition for automatic attendance with Flask, OpenCV, and dlib.',
    tech: ['Python', 'Flask', 'OpenCV', 'Machine Learning'],
    github: 'https://github.com/mahajanmohit2122/ONLINE-FACE-DETECTION-BASED-ATTENDANCE-MANAGEMENT-SYSTEM',
    stars: 0
  },
  {
    title: 'Titanic Dataset Analysis',
    description: 'EDA on Titanic dataset with data cleaning, statistical analysis, and visual insights.',
    tech: ['Python', 'Pandas', 'NumPy', 'Visualization'],
    github: 'https://github.com/mahajanmohit2122/Titanic-Pandas-Analysis',
    stars: 0
  }
]

const skills = [
  { name: 'Python', icon: FaPython, color: 'text-blue-500' },
  { name: 'SQL', icon: FaDatabase, color: 'text-orange-500' },
  { name: 'Pandas', icon: SiPandas, color: 'text-purple-500' },
  { name: 'Jupyter', icon: SiJupyter, color: 'text-orange-600' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
  { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-orange-400' },
  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
  { name: 'Data Viz', icon: FaChartBar, color: 'text-green-500' }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Mohit Mahajan</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Data Scientist & ML Engineer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Transforming data into actionable insights through advanced analytics, 
            machine learning, and intelligent automation.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <a href="https://github.com/mahajanmohit2122" target="_blank" rel="noopener noreferrer" 
               className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all hover:scale-110">
              <FaGithub size={28} />
            </a>
            <a href="mailto:mdm8080190207@gmail.com" 
               className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all hover:scale-110">
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} 
                 className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all hover:scale-105">
              <skill.icon className={`mx-auto mb-3 ${skill.color}`} size={40} />
              <p className="text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.title} 
                 className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all hover:scale-105">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-blue-400">{project.title}</h3>
                <span className="text-yellow-400">⭐ {project.stars}</span>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-900 rounded-full text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
                <FaGithub /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 text-center text-gray-400">
        <p>© 2025 Mohit Mahajan. Built with Next.js & Tailwind CSS</p>
        <p className="mt-2">Deployed automatically via Railway</p>
      </footer>
    </main>
  )
}