import gplay from 'google-play-scraper'

interface PlayStoreApp {
  appId: string
  title: string
  summary: string
  icon: string
  score: number
  ratings: number
  reviews: number
  installs: string
  minInstalls: number
  url: string
}

export async function fetchAppData(appId: string): Promise<PlayStoreApp | null> {
  try {
    // Use India region since that's where the apps are primarily distributed
    const app = await gplay.app({ appId, country: 'in', lang: 'en' })
    
    // Debug: Log raw API response
    console.log(`[PlayStore] ${appId}:`, {
      score: app.score,
      ratings: app.ratings,
      reviews: app.reviews,
      installs: app.installs,
      minInstalls: app.minInstalls
    })
    
    return {
      appId: app.appId,
      title: app.title,
      summary: app.summary || app.description?.slice(0, 150) || '',
      icon: app.icon,
      score: app.score || 0,
      ratings: app.ratings || 0,
      reviews: app.reviews || 0,
      installs: app.installs || `${app.minInstalls || 0}+`,
      minInstalls: app.minInstalls || 0,
      url: app.url
    }
  } catch (error) {
    console.error(`Failed to fetch app ${appId}:`, error)
    return null
  }
}

export async function fetchAllApps(appIds: string[]): Promise<PlayStoreApp[]> {
  const results = await Promise.all(appIds.map(fetchAppData))
  return results.filter((app): app is PlayStoreApp => app !== null)
}

export function parseInstalls(installs: string): number {
  // Parse strings like "1,000+", "10,000+", "1,000,000+"
  const cleaned = installs.replace(/[^0-9]/g, '')
  return parseInt(cleaned) || 0
}

export function formatDownloads(num: number): string {
  if (num >= 1000000) return `${Math.floor(num / 1000000)}M+`
  if (num >= 1000) return `${Math.floor(num / 1000)}K+`
  return `${num}+`
}
