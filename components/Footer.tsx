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
              href="https://www.youtube.com/@codeshipping" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-surface-700 rounded-lg flex items-center justify-center text-surface-400 hover:border-red-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/codeshipping" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-surface-700 rounded-lg flex items-center justify-center text-surface-400 hover:border-pink-500 hover:text-pink-400 hover:bg-pink-500/10 transition-all"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/codeshipping" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-surface-700 rounded-lg flex items-center justify-center text-surface-400 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.threads.net/@codeshipping" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-surface-700 rounded-lg flex items-center justify-center text-surface-400 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all"
              aria-label="Threads"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142l-.126 1.974a11.9 11.9 0 0 0-2.588-.122c-1.066.061-1.94.38-2.6.948-.699.602-1.05 1.394-1.014 2.289.033.818.425 1.504 1.105 1.935.61.386 1.41.57 2.37.54 1.18-.055 2.06-.493 2.692-1.339.723-.967 1.093-2.324 1.1-4.037v-.022c-.005-2.089-.353-3.648-1.035-4.633-.61-.88-1.634-1.43-3.044-1.638l.201-1.988c1.857.244 3.314 1.03 4.33 2.337.96 1.232 1.458 3.045 1.482 5.39v.014c-.002.396-.01.783-.024 1.16 1.06.644 1.846 1.506 2.336 2.566.79 1.708.79 4.233-1.294 6.363-1.85 1.889-4.177 2.82-7.12 2.845z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/CodeShipping" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-surface-700 rounded-lg flex items-center justify-center text-surface-400 hover:border-primary-500 hover:text-primary-400 hover:bg-primary-500/10 transition-all"
              aria-label="GitHub"
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
              aria-label="Play Store"
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
