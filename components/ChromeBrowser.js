"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, RotateCcw, Home, Star, Menu, X, Search, Globe } from "lucide-react"
import styles from "./ChromeBrowser.module.css"
import logo from "../public/images/yonas-logo.jpg"
import aboutlogo from "../public/images/yonas.jpg"
import Image from "next/image"

// import styles from "./Portfolio.module.css"


export default function ChromeBrowser() {
  const [url, setUrl] = useState("https://www.thefstack.com")
  const [inputUrl, setInputUrl] = useState("www.thefstack.com")
  const [isLoading, setIsLoading] = useState(true)
  const [history, setHistory] = useState(["https://www.thefstack.com"])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const browserContentRef = useRef(null)
  const mockContentRef = useRef(null)
  const browserRef = useRef(null)
  const iframeRef = useRef(null)

  const [activeTab, setActiveTab] = useState("all")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Sample project data
  const projects = {
    all: [
      {
        id: 1,
        title: "Planner360",
        description: "Ethiopian planner app with task planning and cultural event integration.",
        category: "web",
        technologies: ["React", "Next.js", "Node.js"],
        image: "/api/placeholder/300/200",
        link: "#"
      },
      {
        id: 2,
        title: "My School",
        description: "School management system with authentication and admin dashboard.",
        category: "web",
        technologies: ["React", "Keycloak", "PostgreSQL"],
        image: "/api/placeholder/300/200",
        link: "#"
      },
      {
        id: 3,
        title: "Sences",
        description: "People-counting mobile application with real-time analytics.",
        category: "mobile",
        technologies: ["React Native", "Firebase"],
        image: "/api/placeholder/300/200",
        link: "#"
      },
      {
        id: 4,
        title: "Translation Platform",
        description: "Platform for English-Amharic translation services.",
        category: "translation",
        technologies: ["Next.js", "MongoDB"],
        image: "/api/placeholder/300/200",
        link: "#"
      },
      {
        id: 5,
        title: "E-commerce Solution",
        description: "Full-stack e-commerce platform with payment integration.",
        category: "web",
        technologies: ["React", "Node.js", "Stripe"],
        image: "/api/placeholder/300/200",
        link: "#"
      },
      {
        id: 6,
        title: "Tech Blog",
        description: "Technical blog focused on web development and Ethiopian tech scene.",
        category: "web",
        technologies: ["Gatsby", "GraphQL", "Contentful"],
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

  // Skills data
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "JavaScript", level: 95 },
    { name: "CSS/SCSS", level: 85 },
    { name: "HTML", level: 95 },
    { name: "Git", level: 80 },
    { name: "Keycloak", level: 70 },
    { name: "Translation", level: 90 }
  ];

  // Experience data
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Tech Solutions ET",
      period: "2022 - Present",
      description: "Developed web applications using React, Next.js, and Node.js. Implemented authentication systems with Keycloak and database solutions with PostgreSQL."
    },
    {
      role: "Freelance Translator",
      company: "Self-Employed",
      period: "2020 - Present",
      description: "Provided professional English-Amharic translation services for various clients including tech companies and educational institutions."
    },
    {
      role: "Web Development Intern",
      company: "Digital Ethiopia",
      period: "2021 - 2022",
      description: "Assisted in developing responsive websites and learned industry best practices for web development."
    }
  ];

  // Education data
  const education = [
    {
      degree: "BSc in Computer Science",
      institution: "Addis Ababa University",
      period: "2018 - 2022",
      description: "Focused on software engineering, algorithms, and database management."
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Online Program",
      period: "2021",
      description: "Intensive program covering React, Node.js, and modern web development practices."
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
    // Update input URL when URL changes
    if (url.startsWith("https://")) {
      setInputUrl(url.replace("https://", ""))
    } else if (url.startsWith("http://")) {
      setInputUrl(url.replace("http://", ""))
    } else {
      setInputUrl(url)
    }
  }, [url])

  // Handle clicks outside the iframe to deactivate it
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (browserContentRef.current && !browserContentRef.current.contains(e.target)) {
  //       setIframeActive(false)
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside)
  //   }
  // }, [])

  // Prevent events from bubbling outside the browser component
  // useEffect(() => {
  //   const browser = browserRef.current
  //   if (!browser) return

  //   const stopPropagation = (e) => {
  //     // Don't stop propagation for wheel events to allow scrolling
  //     if (e.type !== "wheel") {
  //       e.stopPropagation()
  //     }
  //   }

  //   // Add event listeners to capture and stop events
  //   const events = ["click", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove"]

  //   events.forEach((event) => {
  //     browser.addEventListener(event, stopPropagation, { capture: true })
  //   })

  //   return () => {
  //     events.forEach((event) => {
  //       browser.removeEventListener(event, stopPropagation, { capture: true })
  //     })
  //   }
  // }, [])

  // Add this function after the other useEffect hooks
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
    // Force iframe reload by setting a key with current timestamp
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src
    }
  }

  const goHome = () => {
    setIsLoading(true)
    const homeUrl = "https://www.thefstack.com"
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

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false)
  }

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
              ) : currentDomain.includes("thefstack") ? (
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
                Web Developer | Translator | Tech Enthusiast
              </motion.p>
              <motion.p
                className={styles.heroDescription}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I create innovative web solutions and provide professional translation services from Addis Ababa, Ethiopia.
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
                    I'm a passionate developer and translator based in Addis Ababa, Ethiopia. With a strong foundation in web technologies and a love for creating meaningful digital experiences, I specialize in building modern web applications that solve real-world problems.
                  </p>
                  <p>
                    My journey in tech started with computer science studies, and I've since expanded my skills through various projects and continuous learning. I'm proficient in React, Next.js, Node.js, and PostgreSQL, and I have experience implementing authentication systems with Keycloak.
                  </p>
                  <p>
                    Beyond development, I offer professional English-Amharic translation services, bridging language gaps for businesses and organizations. I believe in the power of technology to transform communities and am particularly interested in solutions that address local challenges in the Ethiopian context.
                  </p>
                  <div className={styles.aboutStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>15+</span>
                      <span className={styles.statLabel}>Projects Completed</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>3+</span>
                      <span className={styles.statLabel}>Years Experience</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>10+</span>
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
                        <a href={project.link} className={styles.projectLink}>View Project</a>
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
                      <h4>{exp.role} | {exp.company}</h4>
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
                    <a href="#" className={styles.socialLink}>GitHub</a>
                    <a href="#" className={styles.socialLink}>LinkedIn</a>
                    <a href="#" className={styles.socialLink}>Twitter</a>
                  </div>
                </motion.div>

                <motion.form
                  className={styles.contactForm}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" placeholder="Subject" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" placeholder="Your Message"></textarea>
                  </div>
                  <button type="submit" className={styles.submitBtn}>Send Message</button>
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
                  <p>Web Developer & Translator</p>
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
                    <a href="#">Translation</a>
                    <a href="#">Consulting</a>
                  </div>

                  <div className={styles.footerColumn}>
                    <h4>Connect</h4>
                    <a href="#">GitHub</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                    <a href="#">Email</a>
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
