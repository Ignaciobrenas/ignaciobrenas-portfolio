import { useState } from 'react'
import { GlitchSplash } from './components/splash/GlitchSplash'
import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/hero/HeroSection'
import { AboutSection } from './components/about/AboutSection'
import { ExperienceSection } from './components/experience/ExperienceSection'
import { EducationSection } from './components/education/EducationSection'
import { TechStackSection } from './components/tech-stack/TechStackSection'
import { PersonalProjectsSection } from './components/projects/PersonalProjectsSection'
import { AcademicProjectsSection } from './components/academic/AcademicProjectsSection'
import { ContactSection } from './components/contact/ContactSection'
import { Footer } from './components/layout/Footer'

export function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <div className="min-h-screen bg-[#050508] text-gray-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* 404 Glitch Screen (Full Screen on initial entry) */}
      {showSplash && (
        <GlitchSplash onEnter={() => setShowSplash(false)} />
      )}

      {/* Main Portfolio Application */}
      <div className={`transition-opacity duration-700 ${showSplash ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <Navbar onReopenGlitch={() => setShowSplash(true)} />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <TechStackSection />
          <PersonalProjectsSection />
          <AcademicProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
