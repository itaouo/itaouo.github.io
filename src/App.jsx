import { useState } from 'react'
import SideMenu from './components/SideMenu'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
              <h2>About Me</h2>
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
              <h2>Skills</h2>
              <div className="skills-grid">
                
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="content-section">
            <div className="content-card">
              <h2>Projects</h2>
              
            </div>
          </section>

          {/* Experiences Section */}
          <section id="experiences" className="content-section">
            <div className="content-card">
              <h2>Experiences</h2>
                
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

export default App
