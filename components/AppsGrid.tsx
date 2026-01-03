interface App {
  id: string
  name: string
  description: string
  icon: string
  playStoreUrl: string
  rating?: number
  downloads?: string
  reviews?: number
  badges: string[]
  featured?: boolean
}

interface AppsGridProps {
  apps: App[]
}

export default function AppsGrid({ apps }: AppsGridProps) {
  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'ai powered':
        return 'bg-primary-500/20 text-primary-400 border-primary-500/30'
      case 'featured':
        return 'bg-secondary-500/20 text-secondary-400 border-secondary-500/30'
      case 'productivity':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'finance':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'utilities':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'offline':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
      case 'creative':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'art':
        return 'bg-pink-500/20 text-pink-400 border-pink-500/30'
      case 'lifestyle':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      default:
        return 'bg-surface-500/20 text-surface-400 border-surface-500/30'
    }
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {apps.map((app) => (
        <a
          key={app.id}
          href={app.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-surface-800/50 border border-surface-700 rounded-2xl p-6 transition-all duration-300 hover:border-primary-500/50 hover:bg-surface-800/70 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10 overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          
          <div className="relative">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src={app.icon} 
                alt={app.name}
                className="w-16 h-16 rounded-2xl shadow-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white mb-1 line-clamp-2 group-hover:text-primary-300 transition-colors">
                  {app.name}
                </h3>
                <p className="text-sm text-surface-500">CodeShipping</p>
              </div>
            </div>
            
            <p className="text-surface-400 text-sm leading-relaxed mb-4 line-clamp-3">
              {app.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {app.badges.map((badge) => (
                <span
                  key={badge}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getBadgeColor(badge)}`}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
