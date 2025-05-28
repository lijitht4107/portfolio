import React from 'react'
import '../Css/Projects.css'

const projects = [
  {
    title: 'Playground Booking App',
    description: 'A platform to book sports playgrounds with real-time slot checking.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveLink: 'https://bookacourt-app.onrender.com',
    github : 'https://github.com/lijitht4107/bookacourt-FE'
  },
  {
    title: 'Photographer Showcase App',
    description: 'A portfolio platform for photographers to display and manage their work.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    liveLink: 'https://clickpost-fe22.onrender.com',
    github: 'https://github.com/lijitht4107/clickPost-FE'
  },
  {
    title: 'Movie Review App (In Progress)',
    description: 'A community-driven platform to review, rate, and explore movies.',
    tech: ['React', 'Express', 'MongoDB'],
    liveLink: '#',
    github: 'https://github.com/lijitht4107/movieBase-fe'
  }
];
const Projects = () => {
  return (
    <section className="bg-gray-50 py-10 px-5 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">📂 My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              {project.liveLink !== '#' && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  🔗 Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                📁 GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects
