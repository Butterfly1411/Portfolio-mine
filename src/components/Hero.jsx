import React from 'react'
import sabohat from '../assets/sabohat3.jpg'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Profile Photo */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative inline-block floating-animation">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={sabohat}
                  alt="Sarah Chen - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full flex items-center justify-center">
              <i className="bi bi-code-slash text-white text-2xl"></i>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:w-1/2 lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-shadow">
              Hi, I'm <span className="gradient-text">Sabohat</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium mb-6 text-[var(--text-secondary)]">
              Frontend Developer
            </h2>
            <p className="text-xl mb-8 text-[var(--text-secondary)] leading-relaxed">
              Turning ideas into interactive experiences with modern web technologies.
              I create beautiful, responsive, and user-friendly applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-full font-medium hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300"
              >
                Let's Connect ✨
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="icon-chevron-down text-2xl text-[var(--primary-color)]"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero