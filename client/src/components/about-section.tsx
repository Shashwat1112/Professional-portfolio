import TerminalWindow from "./terminal-window";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-vscode-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-vscode-comment">// </span>
              <span className="text-white">About Me</span>
            </h2>
            
            <TerminalWindow>
              <div className="font-mono text-sm space-y-4">
                <div className="text-vscode-keyword">$ whoami</div>
                <div className="text-vscode-text">
                  Full-stack Software Developer with 1.3+ years of experience in Java (Spring Boot), Vue 3, and MySQL. 
                  Currently contributing to MKCL's high-traffic SOLAR platform serving lakhs of users for student admissions, 
                  payments, and certification.
                </div>
                
                <div className="text-vscode-keyword">$ cat skills.txt</div>
                <div className="text-vscode-text">
                  Skilled in building secure, scalable microservices with OAuth2 and Spring Security. 
                  Holds a PG Diploma in Advanced Computing (CDAC) and passionate about clean architecture and modern development practices.
                </div>
                
                <div className="text-vscode-keyword">$ echo $PASSION</div>
                <div className="text-vscode-string">
                  "Building robust applications that solve real-world problems while continuously learning and growing in the ever-evolving tech landscape."
                </div>
              </div>
            </TerminalWindow>
          </div>
          
          <div className="space-y-6">
            <TerminalWindow>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern software development workspace" 
                className="w-full h-64 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity" 
              />
            </TerminalWindow>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="code-block p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-vscode-blue">1.3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="code-block p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-vscode-cyan">15+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="code-block p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-vscode-green">10+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="code-block p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-vscode-orange">∞</div>
                <div className="text-sm text-gray-400">Lines of Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
