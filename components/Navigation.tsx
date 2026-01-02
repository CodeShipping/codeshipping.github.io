import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-md bg-black/80 border-b border-gray-800 transition-all ${scrolled ? 'py-3' : ''}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 text-white no-underline">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-xl">
            C
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            CodeShipping
          </span>
        </a>
        
        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="#apps" className="text-gray-400 hover:text-white transition-colors">Apps</a></li>
          <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
        </ul>
        
        <a 
          href="https://play.google.com/store/apps/dev?id=6570368713443785570" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:-translate-y-0.5"
        >
          Play Store →
        </a>
        
        <div className="md:hidden flex flex-col gap-1 cursor-pointer p-2">
          <span className="w-6 h-0.5 bg-white transition-all"></span>
          <span className="w-6 h-0.5 bg-white transition-all"></span>
          <span className="w-6 h-0.5 bg-white transition-all"></span>
        </div>
      </div>
    </nav>
  )
}
