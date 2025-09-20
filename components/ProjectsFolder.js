"use client"
import { useState, useEffect } from "react"
import { ExternalLink, Lock, Star, GitFork, Calendar, BookOpen, Code } from "lucide-react"

export default function ProjectsFolder() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const username = "Yonas-star"

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`
        )
        if (!response.ok) {
          if (response.status === 403) throw new Error("API rate limit exceeded.")
          throw new Error(`GitHub API error: ${response.status}`)
        }
        const data = await response.json()
        const publicRepos = data.filter(
          repo => !repo.fork && !repo.name.toLowerCase().includes("github-config")
        )
        setRepos(publicRepos)
      } catch (err) {
        console.error(err)
        setError(err.message)
        setRepos(getFallbackRepos())
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const getFallbackRepos = () => [
    {
      id: 1,
      name: "portfolio",
      description: "🚀 Interactive portfolio website built with Next.js, featuring my projects and skills.",
      language: "TypeScript",
      html_url: "https://github.com/Yonas-star/portfolio",
      updated_at: new Date().toISOString(),
      private: false,
      stargazers_count: 1,
      forks_count: 0,
      size: 1240
    },
    {
      id: 2,
      name: "MERN-School-Management-System",
      description: "Full-stack school management system using MERN stack.",
      language: "JavaScript",
      html_url: "https://github.com/Yonas-star/MERN-School-Management-System",
      updated_at: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
      private: false,
      stargazers_count: 0,
      forks_count: 0,
      size: 3580
    },
    {
      id: 3,
      name: "Face-attendance",
      description: "Facial recognition attendance system built with modern technologies.",
      language: "TypeScript",
      html_url: "https://github.com/Yonas-star/Face-attendance",
      updated_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      private: false,
      stargazers_count: 2,
      forks_count: 1,
      size: 2450
    },
    {
      id: 4,
      name: "School-Management-System",
      description: "Comprehensive school management system with multiple features.",
      language: "TypeScript",
      html_url: "https://github.com/Yonas-star/School-Management-System",
      updated_at: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
      private: false,
      stargazers_count: 1,
      forks_count: 0,
      size: 4200
    }
  ]

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })

  const getLanguageColor = (language) => {
    const colors = {
      TypeScript: "#3178c6",
      JavaScript: "#f1e05a",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Python: "#3572A5",
      Java: "#b07219",
      PHP: "#4F5D95",
      Other: "#ccc"
    }
    return colors[language] || colors.Other
  }

  const formatSize = (size) => {
    if (size < 1024) return `${size} KB`
    return `${(size / 1024).toFixed(1)} MB`
  }

  // Calculate statistics
  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0)
  const languages = [...new Set(repos.map(repo => repo.language).filter(Boolean))]
  const totalRepos = repos.length

  if (loading) return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '50vh',
      color: '#4a5568'
    }}>
      <p>Loading projects dashboard...</p>
    </div>
  )

  return (
    <div style={{ 
      minHeight: "auto", 
      background: "#f8fafc", 
      padding: "1.5rem",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflowY: 'auto',
      height: '100vh'
    }}>
      {/* Header */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <h1 style={{ 
            fontSize: "1.8rem", 
            fontWeight: 700, 
            color: "#1a202c",
            margin: 0
          }}>
            GitHub Projects Dashboard
          </h1>
          <p style={{ 
            color: "#718096", 
            margin: "0.5rem 0 0 0" 
          }}>
            Overview of my repositories and contributions
          </p>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          color: '#4a5568'
        }}>
          <Code size={20} />
          <span style={{ fontWeight: 500 }}>@{username}</span>
        </div>
      </header>

      {error && (
        <div style={{ 
          background: "#fed7d7", 
          color: "#c53030", 
          padding: "1rem", 
          borderRadius: "0.5rem",
          marginBottom: "1.5rem",
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Stats Overview */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: '#fff',
          borderRadius: '0.75rem',
          padding: '1.25rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: '#4299e1' }}>
            {totalRepos}
          </div>
          <div style={{ color: '#718096', fontSize: '0.875rem' }}>Total Repositories</div>
        </div>

        <div style={{
          background: '#fff',
          borderRadius: '0.75rem',
          padding: '1.25rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: '#4299e1' }}>
            {totalStars}
          </div>
          <div style={{ color: '#718096', fontSize: '0.875rem' }}>Total Stars</div>
        </div>

        <div style={{
          background: '#fff',
          borderRadius: '0.75rem',
          padding: '1.25rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: '#4299e1' }}>
            {totalForks}
          </div>
          <div style={{ color: '#718096', fontSize: '0.875rem' }}>Total Forks</div>
        </div>

        <div style={{
          background: '#fff',
          borderRadius: '0.75rem',
          padding: '1.25rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: '#4299e1' }}>
            {languages.length}
          </div>
          <div style={{ color: '#718096', fontSize: '0.875rem' }}>Languages</div>
        </div>
      </div>

      {/* Projects Grid */}
      <h2 style={{ 
        fontSize: "1.5rem", 
        fontWeight: 600,
        color: "#2d3748",
        marginBottom: "1rem"
      }}>
        My Repositories
      </h2>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "1.5rem",
        marginBottom: "2rem"
      }}>
        {repos.map((repo) => (
          <div
            key={repo.id}
            style={{
              background: "#fff",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              borderLeft: repo.private ? "4px solid #e53e3e" : "4px solid #4299e1",
              transition: "transform 0.2s, box-shadow 0.2s",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
            }}
          >
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "flex-start",
              marginBottom: "0.75rem" 
            }}>
              <h3 style={{ 
                fontSize: "1.25rem", 
                fontWeight: 600, 
                color: "#2d3748", 
                margin: "0 0.5rem 0 0",
                lineHeight: 1.3
              }}>
                {repo.name}
              </h3>
              {repo.private && (
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.25rem", 
                  color: "#e53e3e",
                  fontSize: "0.75rem",
                  fontWeight: 500
                }}>
                  <Lock size={14} /> Private
                </div>
              )}
            </div>
            
            {repo.language && (
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "0.4rem", 
                marginBottom: "0.75rem",
                fontSize: "0.875rem"
              }}>
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: getLanguageColor(repo.language)
                  }}
                ></span>
                <span style={{ color: "#4a5568" }}>{repo.language}</span>
              </div>
            )}
            
            {repo.description && (
              <p style={{ 
                color: "#4a5568", 
                fontSize: "0.95rem", 
                marginBottom: "1rem",
                lineHeight: 1.5,
                flexGrow: 1
              }}>
                {repo.description}
              </p>
            )}
            
            <div style={{ 
              display: "flex", 
              gap: "1rem", 
      marginBottom: "1rem",
              fontSize: "0.875rem",
              color: "#718096"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <Star size={14} />
                <span>{repo.stargazers_count}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <GitFork size={14} />
                <span>{repo.forks_count}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <BookOpen size={14} />
                <span>{formatSize(repo.size)}</span>
              </div>
            </div>
            
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              marginTop: "auto"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.875rem", color: "#718096" }}>
                <Calendar size={14} />
                <span>Updated {formatDate(repo.updated_at)}</span>
              </div>
              
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    color: "#4299e1",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    padding: "0.4rem 0.75rem",
                    borderRadius: "0.375rem",
                    background: "#ebf4ff",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#4299e1";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#ebf4ff";
                    e.currentTarget.style.color = "#4299e1";
                  }}
                >
                  <Code size={14} /> Code
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      color: "#48bb78",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      padding: "0.4rem 0.75rem",
                      borderRadius: "0.375rem",
                      background: "#f0fff4",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#48bb78";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#f0fff4";
                      e.currentTarget.style.color = "#48bb78";
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Project */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "0.75rem",
        padding: "2rem",
        color: "white",
        marginBottom: "2rem",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 1rem 0" }}>
              PrepAI (Featured Project)
            </h2>
            <a
              href="https://prepai.ivyproschool.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "white",
                fontWeight: 500,
                fontSize: "1rem",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                background: "rgba(255, 255, 255, 0.2)",
                marginBottom: "1.5rem",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
              }}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
            <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
              <li>AI-powered chatbot for Data Science, Engineering, and Power BI topics.</li>
              <li>AI-based quiz system with auto-generated questions.</li>
              <li>AI-driven review system for performance analysis.</li>
              <li>Dynamic lesson plan unlocking quizzes progressively.</li>
              <li>AI resume builder with ATS scoring.</li>
              <li>Agile project collaboration via GitHub.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}