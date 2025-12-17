import React, { useState } from 'react'
import SideMenu from './components/SideMenu'
import { skillsData } from './data/skills'
import { Category } from './types/skills'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false)

  const getCategoryLabel = (category: Category): string => {
    switch (category) {
      case Category.Frontend:
        return 'Frontend'
      case Category.Backend:
        return 'Backend'
      case Category.Architecture:
        return 'Architecture'
      case Category.Mobile:
        return 'Mobile'
      case Category.Testing:
        return 'Testing'
      case Category.Database:
        return 'Database'
      case Category.MessagingStreaming:
        return 'Messaging & Streaming'
      case Category.API:
        return 'API'
      case Category.Containerization:
        return 'Containerization'
      case Category.CICDPipeline:
        return 'CI/CD'
      case Category.DevTools:
        return 'Dev Tools'
      case Category.BuildPackage:
        return 'Build & Package'
      case Category.Collaboration:
        return 'Collaboration'
      default:
        return category
    }
  }

  const getSkillsByCategory = (category: Category) => {
    return skillsData.find(skill => skill.category === category)
  }

  const renderSkillTags = (category: Category) => {
    const categorySkill = getSkillsByCategory(category)
    if (!categorySkill) return []

    return categorySkill.tags.map(skillTag => (
      <span
        key={`${category}-${skillTag.tag}`}
        className={`skill-tag ${skillTag.familiarity.toLowerCase()}`}
        title={`${skillTag.tag} - ${skillTag.familiarity}`}
      >
        {skillTag.tag}
      </span>
    ))
  }

  const categories = skillsData.map(skill => skill.category)

  const handleSkillsToggle = () => {
    setIsSkillsExpanded(!isSkillsExpanded)
  }

  return (
    <div className="app-container">
      <SideMenu />
      <main className="main-content">
        <header className="content-header">
          <h1>RITA 管理系統</h1>
          <p>歡迎使用管理後台</p>
        </header>

        <div className="content-body">
          {/* About Me Section */}
          <section id="about" className="content-section">
            <div className="content-card">
              <div className="section-header">
                <h2>About Me</h2>
              </div>
              <div className="about-content">
                <div className="about-text">
                  <p>A <strong>motivated software engineer</strong> who enjoys mastering new technologies and choosing the <strong>most suitable approach</strong> for each project. Committed to solving everyday challenges through <strong>collaboration and innovation</strong>, delivering practical, maintainable solutions that drive team success.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="content-section">
            <div className="content-card">
              <div className="section-header">
                <h2>Skills</h2>
                <button
                  className={`more-btn ${isSkillsExpanded ? 'expanded' : ''}`}
                  onClick={handleSkillsToggle}
                >
                  <span className="more-text">{isSkillsExpanded ? 'less' : 'more'}</span>
                  <span className="more-arrow">{isSkillsExpanded ? '←' : '→'}</span>
                </button>
              </div>
              <div className="skills-grid">
                {categories.slice(0, isSkillsExpanded ? categories.length : 4).map(category => {
                  const categorySkill = getSkillsByCategory(category)
                  if (!categorySkill || categorySkill.tags.length === 0) return null

                  return (
                    <div key={category} className="skill-category">
                      <h3>{getCategoryLabel(category)}</h3>
                      <div className="skill-tags">
                        {renderSkillTags(category)}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="skills-legend">
                <p>Darker colors indicate higher proficiency in the skill.</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="content-section">
            <div className="content-card">
              <div className="section-header">
                <h2>Projects</h2>
              </div>

            </div>
          </section>

          {/* Experiences Section */}
          <section id="experiences" className="content-section">
            <div className="content-card">
              <div className="section-header">
                <h2>Experiences</h2>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

export default App
