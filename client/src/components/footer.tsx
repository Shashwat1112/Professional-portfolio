export default function Footer() {
  return (
    <footer className="bg-vscode-dark border-t border-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 font-mono text-sm">
              <span className="text-vscode-comment">// </span>
              Built with ❤️ by Shashwat Sharma
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 font-mono text-sm">© 2024 All rights reserved</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-vscode-success rounded-full animate-pulse" />
              <span className="text-xs text-gray-400">Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
