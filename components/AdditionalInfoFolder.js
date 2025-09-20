"use client"
import styles from "./FolderContent.module.css"
import styless from "./Experience.module.css"

export default function AdditionalInfoFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Additional Information</h1>

      <div className={styles.additionalInfo}>
        <div className={styless.infoSection}>
                  <h2>Work Experience</h2>
                  
                  <div className={styless.experienceItem}>
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
          
                  <div className={styless.experienceItem}>
                    <div className={styless.jobHeader}>
                      <h3>Application Software Developer</h3>
                      <span className={styless.date}>November 2012 - Present</span>
                    </div>
                    <div className={styless.company}>
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
          
        </div>

        <div className={styles.infoSection}>
          <h2>Languages</h2>
          <ul className={styles.languageList}>
            <li>English (Professional)</li>
          </ul>
        </div>

        <div className={styles.infoSection}>
          <h2>Interests</h2>
          <ul className={styles.interestsList}>
            <li>Web Development</li>
            <li>Artificial Intelligence</li>
            <li>Open Source Contribution</li>
            <li>Reading</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
