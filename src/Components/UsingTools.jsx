import React from 'react';
import '../Css/TechStack.css'; // You can define custom styles here

const tools = [
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'Express', icon: 'devicon-express-original colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
];

const TechStack = () => {
  return (
    <section className="tech-section">
      <h2 className="tech-title">🚀 My Tech Stack</h2>
      <div className="tech-list">
        {tools.map((tool, index) => (
          <div key={index} className="tech-item">
            <i className={`${tool.icon} tech-icon`}></i>
            <p className="tech-name">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

