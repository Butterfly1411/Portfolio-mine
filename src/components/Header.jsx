import React, { useEffect, useState } from 'react'

const HEader = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      id: 'hero',
      title: 'Home',
    },
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
    {
      id: 'skills',
      title: 'Skills',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];
  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--bg-gradient-star)] backdrop-blur-md border-b border-white/20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            Sabohat
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${activeSection === item.id
                  ? 'text-[var(--primary-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]'
                  }`}
              >
                {item.title}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className="relative w-14 h-7 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] transition-all duration-300"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {/* Knob */}
              <span
                className={`absolute top-[1px] left-[2px] w-6 h-6 rounded-full transition-transform duration-300 ${isDarkMode
                    ? 'translate-x-7 '
                    : 'translate-x-0 '
                  }`}
              />
              {/* Icons */}
              <i
                className={`bi bi-sun absolute right-1 top-0 text-yellow-400 text-lg transition-opacity ${isDarkMode ? 'opacity-100' : 'opacity-0'
                  }`}
              ></i>
              <i
                className={`bi bi-moon absolute left-1 top-0 text-[var(--primary-color)] text-lg transition-opacity ${isDarkMode ? 'opacity-0' : 'opacity-100'
                  }`}
              ></i>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] hover:bg-[var(--primary-color)]/10 transition-all duration-300"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <i className={` bi bi-moon text-lg transition-colors ${isDarkMode ? 'bi bi-sun text-yellow-400' : 'icon-moon text-[var(--primary-color)]'}`}></i>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
            >
              <div className={`icon-menu text-xl ${isMenuOpen ? 'hidden' : 'block'}`}></div>
              <div className={`icon-x text-xl ${isMenuOpen ? 'block' : 'hidden'}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left font-medium transition-colors ${activeSection === item.id
                    ? 'text-[var(--primary-color)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]'
                    }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

    </header>
  )
}

export default HEader