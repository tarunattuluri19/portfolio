import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Realdevs - Portfolio Showcase Platform",
    link: "https://realdevs.vercel.app/",
    github: "https://github.com/tarunattuluri19/realdevs",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Redis", "Puppeteer"],
    description: `A full-stack portfolio and projects showcase platform built with modern technologies. Features automated screenshot generation using Puppeteer, real-time trending calculations with Redis-backed cron jobs, and engagement tracking (likes/views). Demonstrates advanced backend processing and real-time data management.`,
  },
  {
    title: "LearnAuth - Authentication & Authorization",
    link: "https://learnauth.onrender.com/",
    github: "https://github.com/tarunattuluri19/LearnAuth",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    description: `Full-stack MERN application showcasing secure authentication best practices. Implements sign-up, login, logout with JWT-protected routes and secure token management. Demonstrates role-based access control and modern web security patterns.`,
  },
  {
    title: "Patient Management System",
    link: "https://patient-management-demo.onrender.com/",
    github: "https://github.com/tarunattuluri19/patient-management",
    tech: ["Spring Boot", "React", "PostgreSQL", "Microservices", "JWT Auth"],
    description: `Enterprise-grade healthcare management platform integrating Spring Boot microservices with React frontend. Features patient records management, appointment scheduling, medical history tracking, and role-based access control with SSO. Showcases full-stack architecture and security best practices.`,
  },
];

const ProjectCard = ({ project, index }) => (
  <div
    className="group border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-500 hover-lift animate-slideInUp bg-white dark:bg-gray-900"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="relative h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 overflow-hidden">
      <div className="absolute inset-0 animate-shimmer"></div>
    </div>

    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
        {project.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-gray-700 dark:text-gray-400 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
        {project.description}
      </p>

      <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
        >
          <ExternalLink size={18} />
          <span>Live Demo</span>
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
        >
          <Github size={18} />
          <span>Code</span>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="py-16">
      <div className="animate-slideInDown">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-12">
          Showcasing full-stack applications built with modern technologies and enterprise patterns
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
