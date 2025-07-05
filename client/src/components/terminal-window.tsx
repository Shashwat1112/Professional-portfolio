import { ReactNode } from "react";

interface TerminalWindowProps {
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({ children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`terminal-window p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-vscode-red rounded-full" />
          <div className="w-3 h-3 bg-vscode-orange rounded-full" />
          <div className="w-3 h-3 bg-vscode-success rounded-full" />
        </div>
        <span className="text-sm text-gray-500">terminal</span>
      </div>
      {children}
    </div>
  );
}
