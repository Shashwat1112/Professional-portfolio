import TerminalWindow from "./terminal-window";

interface SkillItemProps {
  name: string;
  percentage: number;
}

function SkillItem({ name, percentage }: SkillItemProps) {
  return (
    <div className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="font-mono text-sm">{name}</span>
        <span className="font-mono text-sm text-vscode-number">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="skill-bar h-2 rounded-full" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const backendSkills = [
    { name: "Java", percentage: 90 },
    { name: "Spring Boot", percentage: 85 },
    { name: "Spring Security", percentage: 80 },
    { name: "Microservices", percentage: 75 },
  ];

  const frontendSkills = [
    { name: "Vue.js 3", percentage: 80 },
    { name: "JavaScript", percentage: 85 },
    { name: "HTML5 & CSS3", percentage: 90 },
    { name: "Bootstrap", percentage: 85 },
  ];

  const databaseTools = [
    { name: "MySQL", percentage: 85 },
    { name: "Git & GitHub", percentage: 90 },
    { name: "Postman", percentage: 85 },
    { name: "Maven", percentage: 80 },
  ];

  const techStack = [
    "Java", "Spring Boot", "Vue.js", "MySQL", "OAuth2", 
    "Spring Security", "Microservices", "REST APIs", "JDBC", "Git"
  ];

  return (
    <section id="skills" className="py-20 bg-vscode-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-vscode-comment">// </span>
          <span className="text-white">Technical Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TerminalWindow>
            <h3 className="text-xl font-bold mb-4 text-vscode-blue">Backend Development</h3>
            <div className="space-y-4">
              {backendSkills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </TerminalWindow>
          
          <TerminalWindow>
            <h3 className="text-xl font-bold mb-4 text-vscode-cyan">Frontend Development</h3>
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </TerminalWindow>
          
          <TerminalWindow>
            <h3 className="text-xl font-bold mb-4 text-vscode-green">Database & Tools</h3>
            <div className="space-y-4">
              {databaseTools.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </TerminalWindow>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-6 text-white">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="tech-badge px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
