import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#hero", label: "./home" },
    { href: "#about", label: "./about" },
    { href: "#skills", label: "./skills" },
    { href: "#projects", label: "./projects" },
    { href: "#experience", label: "./experience" },
    { href: "#contact", label: "./contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-vscode-secondary/90 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-vscode-red rounded-full"></div>
            <div className="w-3 h-3 bg-vscode-orange rounded-full"></div>
            <div className="w-3 h-3 bg-vscode-success rounded-full"></div>
            <span className="ml-4 font-mono text-vscode-text">shashwat@portfolio:~$</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-item px-3 py-2 text-vscode-text hover:text-vscode-blue transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-vscode-text hover:text-vscode-blue transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-vscode-secondary border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-vscode-text hover:text-vscode-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
