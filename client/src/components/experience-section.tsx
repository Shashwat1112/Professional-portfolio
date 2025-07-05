import { Award, BookOpen, Briefcase } from "lucide-react";
import TerminalWindow from "./terminal-window";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-vscode-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-vscode-comment">// </span>
          <span className="text-white">Professional Journey</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-vscode-blue mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2" />
              Experience
            </h3>
            
            {/* Current Position */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 commit-dot rounded-full" />
              <div className="absolute left-2 top-4 w-px h-full bg-vscode-blue opacity-30" />
              <TerminalWindow>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white">Project Associate</h4>
                  <span className="text-sm text-vscode-success">Current</span>
                </div>
                <p className="text-vscode-blue mb-2">Maharashtra Knowledge Corporation Limited (MKCL)</p>
                <p className="text-sm text-gray-400 mb-2">Apr 2025 – Present | Pune, Maharashtra</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Contributing to SOLAR 3.0, a scalable digital coordination platform</li>
                  <li>• Implementing OAuth2 flow and Spring security integration</li>
                  <li>• Working on microservices architecture and centre registration</li>
                </ul>
              </TerminalWindow>
            </div>
            
            {/* Previous Position */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-vscode-cyan rounded-full" />
              <TerminalWindow>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white">Project Trainee</h4>
                  <span className="text-sm text-vscode-orange">11 months</span>
                </div>
                <p className="text-vscode-blue mb-2">Maharashtra Knowledge Corporation Limited (MKCL)</p>
                <p className="text-sm text-gray-400 mb-2">Apr 2024 – Mar 2025 | Pune, Maharashtra</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Migrated features from SOLAR to new architecture using Spring Boot & Vue 3</li>
                  <li>• Developed secure, dynamic user flows in Web-Based Learning portal</li>
                  <li>• Gained hands-on experience with microservices architecture</li>
                </ul>
              </TerminalWindow>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-vscode-green mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2" />
              Education
            </h3>
            
            {/* PG Diploma */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-vscode-green rounded-full" />
              <div className="absolute left-2 top-4 w-px h-full bg-vscode-green opacity-30" />
              <TerminalWindow>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white">PG Diploma in Advanced Computing</h4>
                  <span className="text-sm bg-vscode-green px-2 py-1 rounded text-white">CDAC</span>
                </div>
                <p className="text-vscode-green mb-2">Centre for Development of Advanced Computing (CDAC) ACTS</p>
                <p className="text-sm text-gray-400 mb-2">Sep 2023 – Feb 2024 | Pune, Maharashtra</p>
                <p className="text-sm text-gray-300">Specialized in full-stack development with focus on Java ecosystem</p>
              </TerminalWindow>
            </div>
            
            {/* B.Tech */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-vscode-orange rounded-full" />
              <TerminalWindow>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white">Bachelor of Technology</h4>
                  <span className="text-sm bg-vscode-orange px-2 py-1 rounded text-white">B.Tech</span>
                </div>
                <p className="text-vscode-orange mb-2">Bhilai Institute of Technology (BIT)</p>
                <p className="text-sm text-gray-400 mb-2">Aug 2019 – Jul 2023 | Durg, Chhattisgarh</p>
                <p className="text-sm text-gray-300">Electronics & Telecommunication Engineering</p>
              </TerminalWindow>
            </div>
          </div>
        </div>
        
        {/* Awards Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-vscode-cyan mb-6 text-center flex items-center justify-center">
            <Award className="w-6 h-6 mr-2" />
            Awards & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TerminalWindow>
              <div className="text-center">
                <Award className="w-8 h-8 text-vscode-cyan mx-auto mb-2" />
                <h4 className="font-bold text-white mb-1">Prime Minister's Trophy</h4>
                <p className="text-sm text-vscode-cyan">Merit Scholarship (SAIL)</p>
                <p className="text-xs text-gray-400">2019 - 2023</p>
              </div>
            </TerminalWindow>
            
            <TerminalWindow>
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-vscode-orange mx-auto mb-2" />
                <h4 className="font-bold text-white mb-1">Rashtriya Sanskrit Scholarship</h4>
                <p className="text-sm text-vscode-orange">Ministry of Education</p>
                <p className="text-xs text-gray-400">2017 - 2018</p>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
}
