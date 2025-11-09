import React, { useState } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const skills = [
    { name: 'HTML/CSS', icon: 'code', color: 'text-orange-500' },
    { name: 'JavaScript', icon: 'javascript', color: 'text-yellow-500' },
    { name: 'React', icon: 'filetype-jsx', color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: 'palette', color: 'text-cyan-500' },
    { name: 'TypeScript', icon: 'typescript', color: 'text-blue-600' },
    { name: 'Node.js', icon: 'server', color: 'text-green-500' }
  ];

  const tools = [
    { name: 'Github', icon: 'code-2' },
    { name: 'Git', icon: 'git-branch' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Tailwind CSS', icon: 'package' },
    { name: 'React JS', icon: 'download' },
    { name: 'Python', icon: 'chrome' }
  ];
  return (
    <section className='bg-[var(--bg-gradient-star)] '>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="card-glass p-8">
            <h3 className="text-2xl font-semibold mb-8 text-[var(--text-primary)] flex items-center">
              <div className="icon-trending-up text-[var(--primary-color)] mr-3 text-xl"></div>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center p-4 bg-[var(--card-bg)] rounded-lg hover:bg-[var(--primary-color)]/10 transition-colors border border-[var(--border-color)]">
                  <i className={`bi bi-${skill.icon} ${skill.color}  mr-3 text-2xl`}></i>
                  <span className="font-medium text-[var(--text-primary)]">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Software */}
          <div className="card-glass p-8">
            <h3 className="text-2xl font-semibold mb-8 text-[var(--text-primary)] flex items-center">
              <div className="icon-tool text-[var(--primary-color)] mr-3 text-xl"></div>
              Tools & Software
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center p-4 bg-[var(--card-bg)] rounded-lg hover:bg-[var(--primary-color)]/10 transition-colors border border-[var(--border-color)]">
                  <div className={`icon-${tool.icon} text-[var(--secondary-color)] mr-3 text-lg`}></div>
                  <span className="font-medium text-[var(--text-primary)]">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills