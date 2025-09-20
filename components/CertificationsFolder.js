"use client"
import styles from "./FolderContent.module.css"

export default function CertificationsFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Certifications</h1>

      <div className={styles.certificationsList}>
        {/* HackerRank Certificates */}
        <div className={styles.certificationItem}>
          <h2>C# (Basic) Certificate</h2>
          <p className={styles.certificationIssuer}>HackerRank</p>
          <p className={styles.certificationDate}>2024</p>
          <a 
            href="https://www.hackerrank.com/certificates/a07fefcffd84" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.certificationLink}
          >
            View Certificate on HackerRank
          </a>
        </div>

        <div className={styles.certificationItem}>
          <h2>Problem Solving (Basic) Certificate</h2>
          <p className={styles.certificationIssuer}>HackerRank</p>
          <p className={styles.certificationDate}>2024</p>
          <a 
            href="https://www.hackerrank.com/certificates/448c62477d34" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.certificationLink}
          >
            View Certificate on HackerRank
          </a>
        </div>

        {/* Udacity Certificates */}
        <div className={styles.certificationItem}>
          <h2>Data Analysis Fundamentals</h2>
          <p className={styles.certificationIssuer}>Udacity</p>
          <p className={styles.certificationDate}>2024</p>
          <a 
            href="https://www.udacity.com/certificate/e/d5b89f16-c43d-11ef-972f-dbe8c61468b6" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.certificationLink}
          >
            Verify Certificate
          </a>
        </div>

        <div className={styles.certificationItem}>
          <h2>Artificial Intelligence Fundamentals</h2>
          <p className={styles.certificationIssuer}>Udacity</p>
          <p className={styles.certificationDate}>2024</p>
          <a 
            href="https://www.udacity.com/certificate/e/4a707312-c4f0-11ef-beae-afa624f44a8b" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.certificationLink}
          >
            Verify Certificate
          </a>
        </div>

        <div className={styles.certificationItem}>
          <h2>Programming Fundamentals</h2>
          <p className={styles.certificationIssuer}>Udacity</p>
          <p className={styles.certificationDate}>2024</p>
          <a 
            href="https://www.udacity.com/certificate/e/61e13c48-be9c-11ef-a9f5-7b239522cbc0" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.certificationLink}
          >
            Verify Certificate
          </a>
        </div>

        <div className={styles.certificationItem}>
          <h2>Android Developer Fundamentals</h2>
          <p className={styles.certificationIssuer}>Udacity</p>
          <p className={styles.certificationDate}>2024</p>
          <a 
            href="https://www.udacity.com/certificate/e/cc2c1684-c43e-11ef-995f-a787d421a1c4" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.certificationLink}
          >
            Verify Certificate
          </a>
        </div>
      </div>
    </div>
  )
}