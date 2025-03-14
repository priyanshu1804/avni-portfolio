import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Youtube, Instagram, ExternalLink, Code, Zap, Star, BookOpen, Trophy, Briefcase } from 'lucide-react';
import profileImage from './image.jpeg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "PORT SCANNER",
      description: "Python-based Port Scanner that scans a range of ports on a given target IP to check for open ports",
      tech: ["Python", "Socket.IO", "Threading"],
      link: "https://github.com/avnisinngh/Port-Scanner",
      color: "bg-[#C4A1FF]"
    },
    {
      title: "OMNI AI",
      description: "Centralized AI platform",
      tech: ["AI/ML","TypeScript","MERN Stack"],
      link: "https://github.com/avnisinngh/HACKWITHINDIA",
      color: "bg-[#CFDFFF]"
    },
    {
      title: "Nourish Connect",
      description: "A digital platform to eliminate food wastage and hunger in underserved communities",
      tech: ["MERN Stack"],
      link: "https://github.com/avnisinngh/CODE_KSHETRA/tree/main",
      color: "bg-[#FF69B4]"
    },
    {
      title: "Recognition-and-Detection-of-Modulated-Waveforms",
      description: "Automatic recognition and classification of modulated waveforms using machine learning",
      tech: ["Python", "Rainforest"],
      link: "https://github.com/avnisinngh/Recognition-and-Detection-of-Modulated-Waveforms",
      color: "bg-[#E3A018]"
    },
    {
      title: "Voting_Application",
      description: "A secure and simple voting system where users can cast votes, and administrators can manage candidates and view voting results.",
      tech: ["MERN Stack"],
      link: "https://github.com/avnisinngh/Voting_Application",
      color: "bg-[#69D2A7]"
    }
  ];

  const experience = [
    {
      role: "CYBER SECURITY INTERN",
      company: "OMNITRIX BUISNESS SERVICES PVT. LTD",
      period: "JAN 2025 - PRESENT",
      description: "Researching emerging threats, vulnerabilities, and cybersecurity trends.",
      color: "bg-[#FFB2EF]"
    }
  ];

  const hackathons = [
    {
      name: "SMART INDIA HACKATHON 2025",
      position: "GRAND-FINALISTS",
      description: "Build Recognition and Detection of Modulated Waveforms System",
      color: "bg-[#FFE66D]"
    },
    {
      name: "CODE-KSHETRA 2.0",
      position: "FINALIST",
      description: "Developed a digital platform to eliminate food wastage and hunger in underserved communities",
      color: "bg-[#FCDFFF]"
    },
    {
      name: "BUILD WITH INDIA",
      position: "SEMI-FINALIST",
      description: "Developed a centralized AI platform",
      color: "bg-[#FFB2EF]"
    },
    {
      name: "SOCIAL WINTER OF CODE 2025",
      position: "6TH RANK",
      description: "OPEN SOURCE Contributor",
      color: "bg-[#DAF5F0]"
    },
    {
      name: "GURU TECH PRESENTATIONS",
      position: "RUNNER UP",
      description: "Presented a presentation of digitalization",
      color: "bg-[#FFB2AF]"
    },
    {
      name: "CODE-O-GEEKS 2.0",
      position: "SECOND RUNNER UP",
      description: "Coding competition",
      color: "bg-[#FFD2FF]"
    }
  ];

  const skills = [
    {
      category: "Programming",
      items: ["Java", "C", "Python", "JavaScript", "Tailwind CSS", "Solidity"]
    },
    {
      category: "Web Technologies",
      items: ["Node.js", "React.js", "MongoDB", "Mongoose", "HTML", "CSS"]
    },
    {
      category: "Tools and Framework",
      items: ["Express.js", "JWT Authentication", "Git"]
    }
  ];

  const socialLinks = {
    github: "https://github.com/avnisinngh",
    linkedin: "https://www.linkedin.com/in/avni-singh-49a44a289/",
    youtube: "https://www.youtube.com/@avnisinngh",
    instagram: "https://www.instagram.com/codecademia/",
    email: "mailto:avni.dns@gmail.com"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold">AVNI SINGH</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <a href="#about" className="hover:text-[#DAF5F0] font-bold text-sm lg:text-base">ABOUT</a>
              <a href="#coding" className="hover:text-[#FFB2AF] font-bold text-sm lg:text-base">CODING</a>
              <a href="#work" className="hover:text-[#FF6B6B] font-bold text-sm lg:text-base">PROJECT</a>
              <a href="#experience" className="hover:text-[#4ECDC4] font-bold text-sm lg:text-base">EXPERIENCE</a>
              <a href="#skills" className="hover:text-[#FFE66D] font-bold text-sm lg:text-base">SKILLS</a>
              <a href="#contact" className="neo-brutalist-sm px-4 py-2 bg-black text-white hover:bg-[#FF6B6B] transition-colors text-sm lg:text-base">
                CONTACT
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 focus:outline-none focus:ring-2 focus:ring-black"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-base font-bold hover:bg-gray-100 rounded-lg">ABOUT</a>
              <a href="#coding" className="block px-3 py-2 text-base font-bold hover:bg-gray-100 rounded-lg">CODING</a>
              <a href="#work" className="block px-3 py-2 text-base font-bold hover:bg-gray-100 rounded-lg">PROJECT</a>
              <a href="#experience" className="block px-3 py-2 text-base font-bold hover:bg-gray-100 rounded-lg">EXPERIENCE</a>
              <a href="#skills" className="block px-3 py-2 text-base font-bold hover:bg-gray-100 rounded-lg">SKILLS</a>
              <a href="#contact" className="block px-3 py-2 text-base font-bold hover:bg-gray-100 rounded-lg">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="neo-brutalist bg-[#FFE66D] p-4 sm:p-8 md:p-16 mb-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  <span className="text-[#FF6B6B]">Multidimensional Creator & Developer</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-6 sm:mb-8">
                  Crafting Digital Experiences with Code, Content, Open Source and Cybersecurity Curiosity.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a href={socialLinks.github} className="neo-brutalist-sm p-3 sm:p-4 bg-black text-white hover:bg-[#FF6B6B] transition-colors">
                    <Github size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a href={socialLinks.linkedin} className="neo-brutalist-sm p-3 sm:p-4 bg-black text-white hover:bg-[#4ECDC4] transition-colors">
                    <Linkedin size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a href={socialLinks.youtube} className="neo-brutalist-sm p-3 sm:p-4 bg-black text-white hover:bg-[#FFE66D] transition-colors">
                    <Youtube size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a href={socialLinks.instagram} className="neo-brutalist-sm p-3 sm:p-4 bg-black text-white hover:bg-[#FF6B6B] transition-colors">
                    <Instagram size={20} className="sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
              <div>
                <div className="neo-brutalist overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-[300px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden py-3 sm:py-4 bg-black text-white">
            <p className="marquee text-lg sm:text-xl font-bold whitespace-nowrap">
              FULL STACK DEVELOPMENT • CYBERSECURITY • CODING 
            </p>
          </div>
        </div>
      </section>

      {/* Coding profiles Section */}
      <section id="coding" className="py-16 sm:py-20 px-4">
        <div className="neo-brutalist bg-[#69D2A7] p-4 sm:p-8 md:p-16 mb-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">CODING PROFILES</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <a href={socialLinks.github} className="neo-brutalist bg-[#B5D2AD] p-6 sm:p-8 hover:transform hover:-translate-y-2 transition-transform">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">LEETCODE</h3>
                <p className="text-sm sm:text-base">solved +250 questions</p>
              </a>
              <a href={socialLinks.linkedin} className="neo-brutalist bg-[#A7BDB8] p-6 sm:p-8 hover:transform hover:-translate-y-2 transition-transform">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">CODEFORCES</h3>
                <p className="text-sm sm:text-base">solved +70 questions</p>
              </a>
              <a href={socialLinks.youtube} className="neo-brutalist bg-[#FF7A56] p-6 sm:p-8 hover:transform hover:-translate-y-2 transition-transform">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">CODECHEF</h3>
                <p className="text-sm sm:text-base">2 star, solved +100 questions</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-16 sm:py-20 px-4">
        <div className="neo-brutalist bg-[#E3DFF2] p-4 sm:p-8 md:p-16 mb-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">PROJECTS</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`neo-brutalist neo-brutalist-hover ${project.color} p-6 sm:p-8 transition-all`}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{project.title}</h3>
                  <p className="text-sm sm:text-base mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="neo-brutalist-sm px-2 sm:px-3 py-1 bg-black text-white text-xs sm:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 neo-brutalist-sm bg-black text-white px-3 sm:px-4 py-2 text-sm sm:text-base"
                  >
                    VIEW PROJECT <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4">
        <div className="neo-brutalist bg-[#FF69B4] p-4 sm:p-8 md:p-16 mb-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">EXPERIENCE</h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`neo-brutalist neo-brutalist-hover ${exp.color} p-6 sm:p-8 transition-all`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Briefcase size={20} className="sm:w-6 sm:h-6 text-black" />
                    <h3 className="text-xl sm:text-2xl font-bold">{exp.role}</h3>
                  </div>
                  <p className="text-base sm:text-lg font-bold mb-2">{exp.company}</p>
                  <p className="text-xs sm:text-sm mb-3 sm:mb-4">{exp.period}</p>
                  <p className="text-sm sm:text-base">{exp.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">HACKATHONS & ACHIEVEMENTS</h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {hackathons.map((hack, index) => (
                <div
                  key={index}
                  className={`neo-brutalist neo-brutalist-hover ${hack.color} p-6 sm:p-8 transition-all`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Trophy size={20} className="sm:w-6 sm:h-6 text-black" />
                    <h3 className="text-xl sm:text-2xl font-bold">{hack.name}</h3>
                  </div>
                  <p className="text-base sm:text-lg font-bold mb-2">{hack.position}</p>
                  <p className="text-sm sm:text-base">{hack.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4">
        <div className="neo-brutalist bg-[#FFE66D] p-4 sm:p-8 md:p-16 mb-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">SKILLS & EXPERTISE</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="neo-brutalist bg-white p-6 sm:p-8 neo-brutalist-hover transition-all">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="neo-brutalist-sm px-2 sm:px-3 py-1 bg-[#FFE66D] text-black text-xs sm:text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation Section */}
      <section id="content" className="py-16 sm:py-20 px-4">
        <div className="neo-brutalist bg-[#E3A018] p-4 sm:p-8 md:p-16 mb-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">CONTENT CREATION</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <a href={socialLinks.youtube} className="neo-brutalist bg-[#FF7A5C] p-6 sm:p-8 hover:transform hover:-translate-y-2 transition-transform">
                <Youtube size={24} className="sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">YouTube</h3>
                <p className="text-sm sm:text-base">Tech tutorials & coding tips</p>
              </a>
              <a href={socialLinks.instagram} className="neo-brutalist bg-[#C4A1FF] p-6 sm:p-8 hover:transform hover:-translate-y-2 transition-transform">
                <Instagram size={24} className="sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Instagram</h3>
                <p className="text-sm sm:text-base">Behind the scenes & tech life</p>
              </a>
              <a href="#" className="neo-brutalist bg-[#B5D2AD] p-6 sm:p-8 hover:transform hover:-translate-y-2 transition-transform">
                <BookOpen size={24} className="sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Blog</h3>
                <p className="text-sm sm:text-base">In-depth technical articles</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="neo-brutalist bg-[#FFE66D] p-4 sm:p-8 md:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">LET'S WORK TOGETHER</h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <p className="text-lg sm:text-xl mb-4 sm:mb-6">
                  Have a project in mind? Let's create something amazing together.
                </p>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="neo-brutalist-sm inline-block bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold hover:bg-[#4ECDC4] transition-colors"
                >
                  SAY HELLO
                </a>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a href={socialLinks.github} className="neo-brutalist-sm p-3 sm:p-4 bg-white hover:bg-[#FFE66D] transition-colors">
                  <Github size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a href={socialLinks.linkedin} className="neo-brutalist-sm p-3 sm:p-4 bg-white hover:bg-[#FFE66D] transition-colors">
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a href={socialLinks.youtube} className="neo-brutalist-sm p-3 sm:p-4 bg-white hover:bg-[#FFE66D] transition-colors">
                  <Youtube size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a href={socialLinks.instagram} className="neo-brutalist-sm p-3 sm:p-4 bg-white hover:bg-[#FFE66D] transition-colors">
                  <Instagram size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black py-6 sm:py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold text-sm sm:text-base">
            © {new Date().getFullYear()} • CRAFTED WITH CODE IN THE DIGITAL REALM
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;