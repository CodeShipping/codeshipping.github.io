export default function Footer() {
  return (
    <footer className="relative z-10 py-12 px-8 border-t border-surface-800 bg-surface-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center font-bold text-xl">
              C
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              CodeShipping
            </span>
          </div>
          
          <div className="flex gap-8 text-sm">
            <a href="#apps" className="text-surface-400 hover:text-white transition-colors">Apps</a>
            <a href="#about" className="text-surface-400 hover:text-white transition-colors">About</a>
            <a 
              href="https://play.google.com/store/apps/dev?id=6570368713443785570" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-surface-400 hover:text-white transition-colors"
            >
              Play Store
            </a>
            <a 
              href="https://github.com/CodeShipping" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-surface-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
          
          <div className="flex gap-3">
            <a 
              href="https://github.com/CodeShipping" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-surface-700 rounded-lg flex items-center justify-center text-surface-400 hover:border-primary-500 hover:text-primary-400 hover:bg-primary-500/10 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://play.google.com/store/apps/dev?id=6570368713443785570" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-surface-700 rounded-lg flex items-center justify-center text-surface-400 hover:border-primary-500 hover:text-primary-400 hover:bg-primary-500/10 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="w-full text-center pt-8 border-t border-surface-800 mt-8">
          <p className="text-surface-500 text-sm">
            © 2026 CodeShipping. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
