import { ExternalLink, Github, Plus } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  languages: { name: string; percentage: number; color: string }[];
  liveUrl?: string;
  githubUrl?: string;
  status: "Production" | "Active" | "Current";
}

function ProjectCard({ title, description, technologies, languages, liveUrl, githubUrl, status }: ProjectCardProps) {
  const statusColors = {
    Production: "text-vscode-success",
    Active: "text-vscode-success", 
    Current: "text-vscode-success"
  };

  return (
    <div className="project-card rounded-lg p-6 hover:scale-105 transition-transform">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 text-vscode-blue">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-vscode-success rounded-full" />
          <span className={`text-xs ${statusColors[status]}`}>{status}</span>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="bg-vscode-blue px-2 py-1 rounded text-xs text-white">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: lang.color }} />
              <span>{lang.name} {lang.percentage}%</span>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-vscode-blue hover:text-vscode-cyan transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-vscode-blue hover:text-vscode-cyan transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const projects: ProjectCardProps[] = [
    {
      title: "SOLAR 3.0",
      description: "Business Coordination Platform - Secure login, OAuth2 authentication, and instance management for MKCL's coordination platform serving lakhs of users.",
      technologies: ["Spring Boot", "OAuth2", "Spring Security", "Microservices"],
      languages: [
        { name: "Java", percentage: 65, color: "var(--vscode-blue)" },
        { name: "Vue", percentage: 35, color: "var(--vscode-cyan)" }
      ],
      liveUrl: "https://solarnx.mkcl.org/login",
      status: "Production"
    },
    {
      title: "WBL Initiative",
      description: "Web Based Learning Initiative (IGNOU-MKCL) - Implemented login, registration, and course selection system with modern frontend and backend architecture.",
      technologies: ["Vue.js 3", "Golang", "Core Studio", "Authentication"],
      languages: [
        { name: "Vue", percentage: 60, color: "var(--vscode-cyan)" },
        { name: "Go", percentage: 40, color: "var(--vscode-blue)" }
      ],
      liveUrl: "https://ignou.mkcl.org/work-based-learning-initiative",
      status: "Active"
    },
    {
      title: "Developer Portfolio",
      description: "Modern, responsive portfolio website with VS Code-inspired design, featuring interactive animations and clean code architecture.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      languages: [
        { name: "TypeScript", percentage: 50, color: "var(--vscode-blue)" },
        { name: "CSS", percentage: 35, color: "var(--vscode-cyan)" },
        { name: "HTML", percentage: 15, color: "var(--vscode-orange)" }
      ],
      status: "Current"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-vscode-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-vscode-comment">// </span>
          <span className="text-white">Featured Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
          
          <div className="project-card rounded-lg p-6 hover:scale-105 transition-transform border-2 border-dashed border-vscode-blue">
            <div className="text-center">
              <Plus className="w-12 h-12 text-vscode-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">More Projects</h3>
              <p className="text-gray-300 mb-4">Explore my complete portfolio on GitHub</p>
              <a 
                href="https://github.com/Shashwat1112" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-vscode-blue hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
