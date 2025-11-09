import React from 'react'

const About = () => {
  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Happy Clients' },
    { number: '100%', label: 'Client Satisfaction' }

  ];
  return (
    <section className="py-20 bg-[var(--bg-gradient-star)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* About Content */}
          <div className="lg:w-2/3">
            <div className="card-glass p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)]">
                Hello! I'm Sabohat, a Frontend Developer based in Almalyk.
              </h3>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I discovered my passion for web development during my Computer Science studies.
                  What started as curiosity about how websites work has evolved into a career
                  dedicated to crafting beautiful, functional digital experiences.
                </p>
                <p>
                  I specialize in modern JavaScript frameworks, particularly React, and have a
                  keen eye for UI/UX design. I believe that great code should be both elegant
                  and accessible, creating experiences that users love and developers can maintain.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new design trends, contributing
                  to open-source projects, or enjoying a good cup of coffee while sketching
                  interface ideas.
                </p>
              </div>

              {/* Interests */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
                  What I Love
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Modern Design', 'Clean Code', 'User Experience', 'Responsive Design', 'Performance'].map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 rounded-full text-[var(--primary-color)] font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:w-1/3">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card-glass p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-[var(--text-secondary)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About