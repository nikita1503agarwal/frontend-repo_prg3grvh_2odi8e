import React from 'react'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Above the fold: Hero must fit without scroll on typical laptop screens */}
      <div className="sticky top-0 z-10">
        <Hero role="Data Scientist" />
      </div>

      {/* Below the fold: up to 3 featured projects with strong quantitative metrics */}
      <FeaturedProjects />

      {/* Footer (minimal, monochrome) */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8 text-xs text-gray-500">
          © {new Date().getFullYear()} • Portofolio Pribadi
        </div>
      </footer>
    </div>
  )
}

export default App
