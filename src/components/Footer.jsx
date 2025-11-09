import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/Butterfly1411', color: 'text-gray-800' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/butterfly_sbt/', color: 'text-pink-600' },
    { name: 'Telegram', icon: 'telegram', url: 'https://t.me/Butterfly_sbt', color: 'text-blue-400' }
  ];
  return (
    <footer className="bg-[var(--bg-gradient-star)] mt-20 backdrop-blur-md border-t border-white/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-4">Sarah Chen</h3>
            <p className="text-[var(--text-secondary)] mb-4">
              Frontend Developer passionate about creating beautiful digital experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 bg-[var(--card-bg)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)]/10 transition-colors shadow-md border border-[var(--border-color)]"
                  title={social.name}
                >
                  <i className={`bi bi-${social.icon} text-xl text-[var(--secondary-color)]`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-center">
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-[var(--text-secondary)]">sabohattoshpolatova72@gmail.com</p>
              <p className="text-[var(--text-secondary)]">Toshkent , Almalyk</p>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 text-[var(--primary-color)] rounded-full font-medium hover:from-[var(--primary-color)]/20 hover:to-[var(--secondary-color)]/20 transition-all"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-[var(--text-secondary)]">
            © 2025 Sabohat. All rights reserved. Built with ❤️ and React.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer