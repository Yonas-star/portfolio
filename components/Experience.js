"use client"
import styles from "./Experience.module.css"

export default function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.resumeHeader}>
        <h1>Yonas Kassahun</h1>
        <div className={styles.contactInfo}>
          <p>Addis Ababa, Ethiopia</p>
          <p>Email: yonaskassahunyoka@gmail.com</p>
          <p>Phone: +251 951187242</p>
          <p>
            <a href="https://www.linkedin.com/in/yonas-kassahun-0b39a2313/" target="_blank" rel="noopener noreferrer">
              LinkedIn: linkedin.com/in/yonas-kassahun-0b39a2313
            </a>
          </p>
          <p>
            <a href="https://github.com/yonas-star" target="_blank" rel="noopener noreferrer">
              Github: github.com/yonas-star
            </a>
          </p>
          <p>
            <a href="https://github.com/yonas-star" target="_blank" rel="noopener noreferrer">
              Website: https://github.com/yonas-star
            </a>
          </p>
        </div>
      </div>

      <section className={styles.resumeSection}>
        <h2>Work Experience</h2>
        
        <div className={styles.experienceItem}>
          <div className={styles.jobHeader}>
            <h3>Software Application Developer</h3>
            <span className={styles.date}>November 2023 - Present</span>
          </div>
          <div className={styles.company}>
            <strong>Information Network Security Agency (INSA)</strong> · Full-time
          </div>
          <p>Addis Ababa, Ethiopia · On-site</p>
          <ul>
            <li>Developed secure web applications using React.js and Keycloak for authentication</li>
            <li>Built responsive and user-friendly interfaces for government applications</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
            <li>Implemented security best practices in application development</li>
            <li>Maintained and enhanced existing applications to meet new requirements</li>
          </ul>
        </div>

        <div className={styles.experienceItem}>
          <div className={styles.jobHeader}>
            <h3>Application Software Developer</h3>
            <span className={styles.date}>November 2012 - Present</span>
          </div>
          <div className={styles.company}>
            <strong>Information Network Security Agency (INSA)</strong> · Part-time
          </div>
          <p>Addis Ababa, Ethiopia · On-site</p>
          <ul>
            <li>Developed mobile applications using React Native for cross-platform compatibility</li>
            <li>Built backend services and APIs using Node.js for various applications</li>
            <li>Worked on security-focused applications for government use</li>
            <li>Participated in the full software development lifecycle from concept to deployment</li>
          </ul>
        </div>

      </section>

      <section className={styles.resumeSection}>
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3>Programming Languages</h3>
            <ul className={styles.skillsList}>
              <li>JavaScript</li>
              <li>Java</li>
              <li>C#</li>
              <li>Python</li>
              <li>Kotlin</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
          
          <div className={styles.skillCategory}>
            <h3>Frameworks & Libraries</h3>
            <ul className={styles.skillsList}>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>React Native</li>
              <li>ASP.NET</li>
            </ul>
          </div>
          
          <div className={styles.skillCategory}>
            <h3>Databases</h3>
            <ul className={styles.skillsList}>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          
          <div className={styles.skillCategory}>
            <h3>Tools & Technologies</h3>
            <ul className={styles.skillsList}>
              <li>Git</li>
              <li>Postman</li>
              <li>Keycloak</li>
              <li>REST APIs</li>
              <li>Data Analysis</li>
              <li>Artificial Intelligence (AI)</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Certifications</h2>
        <div className={styles.certifications}>
          <div className={styles.certificationItem}>
            <h3>Data Analysis Fundamentals</h3>
            <p>Udacity</p>
          </div>
          <div className={styles.certificationItem}>
            <h3>Artificial Intelligence Fundamentals</h3>
            <p>Udacity</p>
          </div>
          <div className={styles.certificationItem}>
            <h3>Programming Fundamentals</h3>
            <p>Udacity</p>
          </div>
          <div className={styles.certificationItem}>
            <h3>Android Developer Fundamentals</h3>
            <p>Udacity</p>
          </div>
          <div className={styles.certificationItem}>
            <h3>C# (Basic) Certificate</h3>
            <p>HackerRank</p>
          </div>
          <div className={styles.certificationItem}>
            <h3>Problem Solving (Basic) Certificate</h3>
            <p>HackerRank</p>
          </div>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Projects</h2>

        <div className={styles.projectItem}>
          <h3>
            PrepAI |{" "}
            <a
              href="https://prepai.ivyproschool.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Live Demo
            </a>
          </h3>
          <ul>
            <li>
              Integrated AI-powered chatbot features where users can select specific topics related to Data Science,
              Data Engineering, and Power BI to resolve their queries.
            </li>
            <li>
              Developed an AI-based quiz system where users can test their knowledge, with AI-generated questions based
              on selected topics and subtopics.
            </li>
            <li>
              Implemented an AI-driven review system to analyze quiz performance, highlighting strengths and weak points
              with personalized improvement suggestions.
            </li>
            <li>
              Built a dynamic lesson plan feature that unlocks quizzes after completing daily lessons, ensuring
              progressive learning.
            </li>
            <li>
              Developed an AI-powered resume builder with ATS score analysis and skill scoring, allowing users to
              optimize their resumes effectively.
            </li>
          </ul>
        </div>

        <div className={styles.projectItem}>
          <h3>
            PDF Splitter |{" "}
            <a
              href="https://pdf-splitter.thefstack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Live Demo
            </a>
          </h3>
          <ul>
            <li>
              Built a web application that allows users to split PDF files into individual pages or custom ranges.
            </li>
            <li>
              Implemented a drag-and-drop interface for easy file uploading and a preview feature to view PDF pages.
            </li>
            <li>Used React.js for the frontend and Node.js with Express for the backend processing.</li>
            <li>Integrated PDF.js for rendering previews and pdf-lib for manipulation operations.</li>
            <li>Ensured secure file handling with temporary storage and automatic cleanup.</li>
          </ul>
        </div>

        <div className={styles.projectItem}>
          <h3>
            Real Time Chat Application | <span className={styles.projectLink}>Live Demo</span>
          </h3>
          <ul>
            <li>
              Developed a real-time chat app where users can sign up, log in, and communicate in a shared chat room.
            </li>
            <li>Enabled instant messaging using Socket.io, ensuring smooth, real-time communication.</li>
            <li>Integrated Strapi as a headless CMS backend for user and message management.</li>
            <li>Built a secure authentication system for user registration and login.</li>
          </ul>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Education</h2>
        <div className={styles.educationItem}>
          <h3>B.Sc (Hons.) Computer Science (University of Delhi)</h3>
          <span className={styles.date}>[2021-2024]</span>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <strong>Location Preference:</strong> Open to relocate
          </li>
          <li>
            <strong>Availability:</strong> Immediate
          </li>
        </ul>
      </section>
    </div>
  )
}