"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, RotateCcw, Home, Star, Menu, X, Search, Globe } from "lucide-react"
import styles from "./ChromeBrowser.module.css"
import logo from "../public/images/yonas-logo.jpg"
import aboutlogo from "../public/images/yonas.jpg"
import Image from "next/image"
import emailjs from 'emailjs-com'


export default function ChromeBrowser() {
  const [url, setUrl] = useState("https://www.yonaskassahun.com")
  const [inputUrl, setInputUrl] = useState("www.yonaskassahun.com")
  const [isLoading, setIsLoading] = useState(true)
  const [history, setHistory] = useState(["https://www.yonaskassahun.com"])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const browserContentRef = useRef(null)
  const browserRef = useRef(null)

  const [activeTab, setActiveTab] = useState("all")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSending, setIsSending] = useState(false)
  const [sendStatus, setSendStatus] = useState('')

  // Updated project data with your actual projects
  const projects = {
    all: [
      {
        id: 1,
        title: "PrepAI",
        description: "AI-powered learning platform with chatbot, quiz system, and resume builder.",
        category: "web",
        technologies: ["React", "Next.js", "Node.js", "AI Integration"],
        image: "/api/placeholder/300/200",
        link: "https://prepai.ivyproschool.com/"
      },
      {
        id: 2,
        title: "PDF Splitter",
        description: "Web application for splitting PDF files into individual pages or custom ranges.",
        category: "web",
        technologies: ["React", "Node.js", "Express", "PDF.js"],
        image: "/api/placeholder/300/200",
        link: "https://pdf-splitter.thefstack.com/"
      },
      {
        id: 3,
        title: "Real Time Chat Application",
        description: "Real-time chat app with user authentication and instant messaging.",
        category: "web",
        technologies: ["React", "Socket.io", "Strapi", "Node.js"],
        image: "/api/placeholder/300/200",
        link: "#"
      },
      {
        id: 4,
        title: "Rocket Health",
        description: "Healthcare-themed web application with clean UI and minimal design.",
        category: "web",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "/api/placeholder/300/200",
        link: "https://rockethealththefstack.netlify.app/"
      },
      {
        id: 5,
        title: "E-commerce API",
        description: "Full-stack e-commerce platform with payment integration.",
        category: "web",
        technologies: ["Node.js", "Express", "MongoDB", "JWT"],
        image: "/api/placeholder/300/200",
        link: "https://github.com/thefstack/first-ecommerce-api"
      },
      {
        id: 6,
        title: "Translation Platform",
        description: "Platform for English-Amharic translation services.",
        category: "translation",
        technologies: ["Next.js", "MongoDB"],
        image: "/api/placeholder/300/200",
        link: "#"
      }
    ],
    web: [],
    mobile: [],
    translation: []
  };

  // Filter projects based on category
  projects.web = projects.all.filter(project => project.category === "web");
  projects.mobile = projects.all.filter(project => project.category === "mobile");
  projects.translation = projects.all.filter(project => project.category === "translation");

  const filteredProjects = activeTab === "all" ? projects.all : projects[activeTab];

  // Updated skills data
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "HTML5", level: 95 },
    { name: "CSS/SCSS", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "Git", level: 80 },
    { name: "Keycloak", level: 70 },
    { name: "React Native", level: 75 },
    { name: "Python", level: 65 }
  ];

  // Updated experience data with your INSA experience
  const experiences = [
    {
      role: "Software Application Developer",
      company: "Information Network Security Agency (INSA)",
      period: "Nov 2023 - Present",
      description: "Developed secure web applications using React.js and Keycloak for authentication. Built responsive interfaces for government applications and implemented security best practices."
    },
    {
      role: "Application Software Developer",
      company: "Information Network Security Agency (INSA)",
      period: "Nov 2022 - Present",
      description: "Developed mobile applications using React Native and built backend services with Node.js. Worked on security-focused applications for government use."
    }
  ];

  // Updated education data
  const education = [
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Online Program",
      period: "2021",
      description: "Intensive program covering React, Node.js, and modern web development practices."
    }
  ];

  // Updated certifications data
  const certifications = [
    {
      name: "Data Analysis Fundamentals",
      issuer: "Udacity",
      date: "2024",
      verifyLink: "https://www.udacity.com/certificate/e/d5b89f16-c43d-11ef-972f-dbe8c61468b6"
    },
    {
      name: "Artificial Intelligence Fundamentals",
      issuer: "Udacity",
      date: "2024",
      verifyLink: "https://www.udacity.com/certificate/e/4a707312-c4f0-11ef-beae-afa624f44a8b"
    },
    {
      name: "Programming Fundamentals",
      issuer: "Udacity",
      date: "2024",
      verifyLink: "https://www.udacity.com/certificate/e/61e13c48-be9c-11ef-a9f5-7b239522cbc0"
    },
    {
      name: "Android Developer Fundamentals",
      issuer: "Udacity",
      date: "2024",
      verifyLink: "https://www.udacity.com/certificate/e/cc2c1684-c43e-11ef-995f-a787d421a1c4"
    },
    {
      name: "C# (Basic) Certificate",
      issuer: "HackerRank",
      date: "2024",
      verifyLink: "https://www.hackerrank.com/certificates/a07fefcffd84",
      iframeLink: "https://www.hackerrank.com/certificates/iframe/a07fefcffd84"
    },
    {
      name: "Problem Solving (Basic) Certificate",
      issuer: "HackerRank",
      date: "2024",
      verifyLink: "https://www.hackerrank.com/certificates/448c62477d34",
      iframeLink: "https://www.hackerrank.com/certificates/iframe/448c62477d34"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Abebe Bekele",
      role: "Project Manager at Tech Solutions",
      content: "Yonas delivered an exceptional web application that exceeded our expectations. His attention to detail and problem-solving skills are remarkable.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Sara Mengistu",
      role: "Translation Client",
      content: "Yonas provided accurate and timely translations for our educational materials. His bilingual expertise is truly valuable.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Michael Teka",
      role: "Startup Founder",
      content: "Working with Yonas on our mobile app was a great experience. He's knowledgeable, professional, and delivers quality work.",
      avatar: "/api/placeholder/60/60"
    }
  ];

  useEffect(() => {
    emailjs.init("wy6To4t3VpI5x_q8f") // You'll need to add your public key here
  }, [])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    setSendStatus('')

    try {
      // Using your EmailJS service and template IDs
      await emailjs.send(
        'service_hq7iq2k',     // Your Service ID
        'template_rqiz27m',    // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Yonas Kassahun',
          reply_to: formData.email
        }
      )

      setSendStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Failed to send email:', error)
      setSendStatus('error')
    } finally {
      setIsSending(false)
      // Clear status message after 5 seconds
      setTimeout(() => setSendStatus(''), 5000)
    }
  }
  useEffect(() => {
    // Update input URL when URL changes
    if (url.startsWith("https://")) {
      setInputUrl(url.replace("https://", ""))
    } else if (url.startsWith("http://")) {
      setInputUrl(url.replace("http://", ""))
    } else {
      setInputUrl(url)
    }
  }, [url])

  useEffect(() => {
    const handleWheel = (e) => {
      // Don't stop propagation for wheel events to allow scrolling
      e.stopPropagation()
    }

    // Get references to the elements
    const browserContent = browserContentRef.current

    if (browserContent) {
      browserContent.addEventListener("wheel", handleWheel, { passive: true })
    }

    return () => {
      if (browserContent) {
        browserContent.removeEventListener("wheel", handleWheel)
      }
    }
  }, [])

  const handleUrlSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    let newUrl = inputUrl

    // Add https if missing
    if (!newUrl.startsWith("http://") && !newUrl.startsWith("https://")) {
      newUrl = "https://" + newUrl
    }

    setUrl(newUrl)

    // Add to history if it's a new URL
    if (newUrl !== history[historyIndex]) {
      const newHistory = history.slice(0, historyIndex + 1)
      newHistory.push(newUrl)
      setHistory(newHistory)
      setHistoryIndex(newHistory.length - 1)
    }
  }

  const goBack = () => {
    if (historyIndex > 0) {
      setIsLoading(true)
      setHistoryIndex(historyIndex - 1)
      setUrl(history[historyIndex - 1])
    }
  }

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      setIsLoading(true)
      setHistoryIndex(historyIndex + 1)
      setUrl(history[historyIndex + 1])
    }
  }

  const reload = () => {
    setIsLoading(true)
  }

  const goHome = () => {
    setIsLoading(true)
    const homeUrl = "https://www.yonaskassahun.com"
    setUrl(homeUrl)

    // Add to history
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(homeUrl)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  // Get the current domain for the favicon and title
  const getDomain = (url) => {
    try {
      const urlObj = new URL(url)
      return urlObj.hostname
    } catch (e) {
      return url
    }
  }

  const currentDomain = getDomain(url)

  return (
    <div className={styles.browser}>
      <div className={styles.toolbar}>
        <div className={styles.tabBar}>
          <div className={styles.tab}>
            <div className={styles.favicon}>
              {currentDomain.includes("google") ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#4285F4" />
                  <circle cx="12" cy="12" r="4" fill="white" />
                  <path d="M12 8L20 8" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <path d="M4 8L8 8" stroke="#EA4335" strokeWidth="4" strokeLinecap="round" />
                  <path d="M6.5 14.5L9 9" stroke="#FBBC05" strokeWidth="4" strokeLinecap="round" />
                  <path d="M15 9L17.5 14.5" stroke="#34A853" strokeWidth="4" strokeLinecap="round" />
                </svg>
              ) : currentDomain.includes("yonaskassahun") ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#2563EB" />
                  <path d="M7 7H17V9H7V7Z" fill="white" />
                  <path d="M7 11H17V13H7V11Z" fill="white" />
                  <path d="M7 15H17V17H7V15Z" fill="white" />
                </svg>
              ) : (
                <Globe size={16} color="#5f6368" />
              )}
            </div>
            <span className={styles.tabTitle}>{currentDomain}</span>
            <X size={14} className={styles.closeTab} />
          </div>
          <div className={styles.newTab}>+</div>
        </div>
      </div>

      <div className={styles.addressBar}>
        <div className={styles.navigationButtons}>
          <button className={styles.navButton} onClick={goBack} disabled={historyIndex <= 0}>
            <ArrowLeft size={16} />
          </button>
          <button className={styles.navButton} onClick={goForward} disabled={historyIndex >= history.length - 1}>
            <ArrowRight size={16} />
          </button>
          <button className={styles.navButton} onClick={reload}>
            <RotateCcw size={16} />
          </button>
        </div>

        <form onSubmit={handleUrlSubmit} className={styles.urlForm}>
          <div className={styles.urlBar}>
            <Search size={14} className={styles.searchIcon} />
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              className={styles.urlInput}
            />
          </div>
        </form>

        <div className={styles.browserActions}>
          <button className={styles.actionButton}>
            <Star size={16} />
          </button>
          <button className={styles.actionButton} onClick={goHome}>
            <Home size={16} />
          </button>
          <button className={styles.actionButton}>
            <Menu size={16} />
          </button>
        </div>
      </div>

      <div ref={browserContentRef} className={styles.browserContent}>
        {isLoading && (
          <div className={styles.loadingIndicator}>
            <motion.div
              className={styles.loadingBar}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            />
          </div>
        )}
        <div className={styles.iframeWrapper}>
          <div className={styles.navContainer}>
            <motion.div
              className={styles.logo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              YK
            </motion.div>

            <div className={`${styles.navLinks} ${isMenuOpen ? styles.navOpen : ""}`}>
              <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>

            <button
              className={styles.mobileMenuBtn}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div className={styles.portfolio}>
          {/* Hero Section */}
          <header id="home" className={styles.hero}>
            <div className={styles.heroContent}>
              <motion.h1
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I'm <span className={styles.highlight}>Yonas Kassahun</span> 👋
              </motion.h1>
              <motion.p
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Full Stack Developer | Software Engineer
              </motion.p>
              <motion.p
                className={styles.heroDescription}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I create innovative web solutions and software applications with a focus on security and user experience. Based in Addis Ababa, Ethiopia.
              </motion.p>
              <motion.div
                className={styles.heroButtons}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a href="#projects" className={styles.primaryBtn}>View My Work</a>
                <a href="#contact" className={styles.secondaryBtn}>Contact Me</a>
              </motion.div>
            </div>
            <div className={styles.heroImage}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image src={logo} alt="Yonas Kassahun" width={200} height={200} />
              </motion.div>
            </div>
          </header>

          {/* About Section */}
          <section id="about" className={styles.section}>
            <div className={styles.container}>
              <motion.h2
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                About Me
              </motion.h2>
              <div className={styles.aboutContent}>
                <motion.div
                  className={styles.aboutText}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p>
                    I'm a passionate software developer with experience at the Information Network Security Agency (INSA) and IVY Knowledge Services. With a strong foundation in web technologies and security, I specialize in building modern applications that solve real-world problems.
                  </p>
                  <p>
                    My journey in tech started with computer science studies at Addis Ababa University, and I've since expanded my skills through various projects and continuous learning. I'm proficient in React, Next.js, Node.js, and have experience implementing authentication systems with Keycloak.
                  </p>
                  <p>
                    I believe in the power of technology to transform communities and am particularly interested in solutions that address local challenges in the Ethiopian context. My work at INSA has given me valuable experience in developing secure applications for government use.
                  </p>
                  <div className={styles.aboutStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>20+</span>
                      <span className={styles.statLabel}>Projects Completed</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>5+</span>
                      <span className={styles.statLabel}>Years Experience</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>15+</span>
                      <span className={styles.statLabel}>Happy Clients</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className={styles.aboutImage}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Image src={aboutlogo} alt="Yonas Kassahun" width={200} height={200} />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className={`${styles.section} ${styles.skillsSection}`}>
            <div className={styles.container}>
              <motion.h2
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                My Skills
              </motion.h2>
              <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className={styles.skillItem}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercentage}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <motion.div
                        className={styles.skillProgress}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className={`${styles.section} ${styles.projectsSection}`}>
            <div className={styles.container}>
              <motion.h2
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                My Projects
              </motion.h2>
              <motion.p
                className={styles.sectionSubtitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Here are some of the projects I've worked on
              </motion.p>

              <motion.div
                className={styles.projectFilters}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button
                  className={activeTab === "all" ? styles.activeFilter : ""}
                  onClick={() => setActiveTab("all")}
                >
                  All
                </button>
                <button
                  className={activeTab === "web" ? styles.activeFilter : ""}
                  onClick={() => setActiveTab("web")}
                >
                  Web Development
                </button>
                <button
                  className={activeTab === "mobile" ? styles.activeFilter : ""}
                  onClick={() => setActiveTab("mobile")}
                >
                  Mobile Apps
                </button>
                <button
                  className={activeTab === "translation" ? styles.activeFilter : ""}
                  onClick={() => setActiveTab("translation")}
                >
                  Translation
                </button>
              </motion.div>

              <div className={styles.projectsGrid}>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className={styles.projectCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={styles.projectImage}>
                      <img src={project.image} alt={project.title} />
                      <div className={styles.projectOverlay}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                          {project.link === "#" ? "View Details" : "Live Demo"}
                        </a>
                      </div>
                    </div>
                    <div className={styles.projectContent}>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className={styles.projectTechnologies}>
                        {project.technologies.map((tech, i) => (
                          <span key={i} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className={`${styles.section} ${styles.experienceSection}`}>
            <div className={styles.container}>
              <motion.h2
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Experience & Education
              </motion.h2>

              <div className={styles.timeline}>
                <h3 className={styles.timelineTitle}>Work Experience</h3>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className={styles.timelineMarker}></div>
                    <div className={styles.timelineContent}>
                      <h4>{exp.role}</h4>
                      <div className={styles.company}>{exp.company}</div>
                      <span className={styles.timelinePeriod}>{exp.period}</span>
                      <p>{exp.description}</p>
                    </div>
                  </motion.div>
                ))}

                <h3 className={styles.timelineTitle} style={{ marginTop: "4rem" }}>Education</h3>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (experiences.length + index) * 0.2 }}
                  >
                    <div className={styles.timelineMarker}></div>
                    <div className={styles.timelineContent}>
                      <h4>{edu.degree}</h4>
                      <span className={styles.timelinePeriod}>{edu.institution} | {edu.period}</span>
                      <p>{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className={`${styles.section} ${styles.certificationsSection}`}>
            <div className={styles.container}>
              <motion.h2
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Certifications
              </motion.h2>

              <div className={styles.certificationsGrid}>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className={styles.certificationItem}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3>{cert.name}</h3>
                    <p className={styles.certificationIssuer}>{cert.issuer} | {cert.date}</p>

                    {cert.iframeLink ? (
                      <>
                        <a
                          href={cert.verifyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.certificationLink}
                        >
                          Verify Certificate
                        </a>
                      </>
                    ) : (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.certificationLink}
                      >
                        Verify Certificate
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className={`${styles.section} ${styles.testimonialsSection}`}>
            <div className={styles.container}>
              <motion.h2
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                What People Say
              </motion.h2>

              <div className={styles.testimonialsGrid}>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={styles.testimonialCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className={styles.testimonialContent}>
                      <p>"{testimonial.content}"</p>
                    </div>
                    <div className={styles.testimonialAuthor}>
                      <img src={testimonial.avatar} alt={testimonial.name} />
                      <div>
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
            <div className={styles.container}>
              <motion.h2
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Get In Touch
              </motion.h2>

              <div className={styles.contactContent}>
                <motion.div
                  className={styles.contactInfo}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>Let's talk about your project</h3>
                  <p>I'm available for freelance work and translation projects. Feel free to reach out and I'll respond as soon as possible.</p>

                  <div className={styles.contactDetails}>
                    <div className={styles.contactItem}>
                      <span className={styles.contactIcon}>📧</span>
                      <div>
                        <h4>Email</h4>
                        <p>yonaskassahunyoka@gmail.com</p>
                      </div>
                    </div>
                    <div className={styles.contactItem}>
                      <span className={styles.contactIcon}>📍</span>
                      <div>
                        <h4>Location</h4>
                        <p>Addis Ababa, Ethiopia</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.socialLinks}>
                    <a href="https://github.com/yonas-star" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/yonas-kassahun-0b39a2313/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      LinkedIn
                    </a>
                    <a href="#" className={styles.socialLink}>
                      Twitter
                    </a>
                  </div>
                </motion.div>

                <motion.form
                  className={styles.contactForm}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onSubmit={handleSubmit}
                >
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  {/* Status message */}
                  {sendStatus === 'success' && (
                    <div className={styles.successMessage}>
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {sendStatus === 'error' && (
                    <div className={styles.errorMessage}>
                      Failed to send message. Please try again or email me directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isSending}
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.form>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className={styles.footer}>
            <div className={styles.container}>
              <div className={styles.footerContent}>
                <div className={styles.footerLogo}>
                  <h3>Yonas Kassahun</h3>
                  <p>Full Stack Developer & Software Engineer</p>
                </div>

                <div className={styles.footerLinks}>
                  <div className={styles.footerColumn}>
                    <h4>Navigation</h4>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                  </div>

                  <div className={styles.footerColumn}>
                    <h4>Services</h4>
                    <a href="#">Web Development</a>
                    <a href="#">Mobile Apps</a>
                    <a href="#">Software Solutions</a>
                    <a href="#">Consulting</a>
                  </div>

                  <div className={styles.footerColumn}>
                    <h4>Connect</h4>
                    <a href="https://github.com/yonas-star" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/yonas-kassahun-0b39a2313/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="#">Twitter</a>
                    <a href="mailto:yonaskassahunyoka@gmail.com">Email</a>
                  </div>
                </div>
              </div>

              <div className={styles.footerBottom}>
                <p>© {new Date().getFullYear()} Yonas Kassahun | Built with Next.js</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}