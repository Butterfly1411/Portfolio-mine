import React from 'react'
import pizza from '../assets/pizza-e-commer.png'
import weather from '../assets/weather.png'
import flag from '../assets/flag.png'
import appTask from '../assets/app-task.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React, Redux, and Stripe integration. Features include product catalog, shopping cart, and secure checkout.',
      image: pizza,
      technologies: ['React', 'Redux', 'Node.js', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: appTask,
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Flag quiz game',
      description: 'Responsive flag quiz game with modern design, full of functions, and optimized performance. Built with React and Tailwind CSS.',
      image: flag,
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, beautiful data visualizations, and responsive design.',
      image: weather,
      technologies: ['JavaScript', 'Tailwind CSS', 'OpenWeather API'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">My Work</h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for frontend development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card-glass overflow-hidden group">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      title="Live Demo"
                    >
                      <div className="icon-external-link text-lg"></div>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      title="GitHub Repository"
                    >
                      <div className="icon-github text-lg"></div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 text-[var(--primary-color)] rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects