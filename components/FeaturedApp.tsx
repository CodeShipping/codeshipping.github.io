import Image from 'next/image'

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

interface FeaturedAppProps {
  app: App
}

export default function FeaturedApp({ app }: FeaturedAppProps) {
  return (
    <div className="max-w-6xl mx-auto mb-16 bg-surface-800/50 border border-surface-700 rounded-3xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-secondary-400 font-semibold text-sm tracking-wide uppercase mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Featured App
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{app.name}</h3>
          <p className="text-surface-400 mb-6 leading-relaxed">{app.description}</p>
          
          <div className="flex gap-6 mb-6">
            {app.rating && (
              <div className="text-center">
                <div className="text-xl font-bold text-primary-400">{app.rating} ★</div>
                <div className="text-xs text-surface-500">User Rating</div>
              </div>
            )}
            {app.downloads && (
              <div className="text-center">
                <div className="text-xl font-bold text-primary-400">{app.downloads}</div>
                <div className="text-xs text-surface-500">Downloads</div>
              </div>
            )}
            {app.reviews && (
              <div className="text-center">
                <div className="text-xl font-bold text-primary-400">{app.reviews}</div>
                <div className="text-xs text-surface-500">Reviews</div>
              </div>
            )}
          </div>
          
          <a 
            href={app.playStoreUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary w-fit"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Get it on Play Store
          </a>
        </div>
        
        <div className="relative bg-gradient-to-br from-primary-600/20 to-surface-900 flex items-center justify-center p-8 min-h-[350px]">
          <img 
            src={app.icon} 
            alt={app.name}
            className="w-48 h-48 rounded-3xl shadow-2xl shadow-black/50"
          />
        </div>
      </div>
    </div>
  )
}
