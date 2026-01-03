import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import FeaturedApp from '../components/FeaturedApp'
import AppsGrid from '../components/AppsGrid'
import About from '../components/About'
import CTA from '../components/CTA'
import appsConfig from '../data/apps.json'
import { fetchAppData, formatDownloads } from '../lib/playstore'

interface App {
  id: string
  name: string
  description: string
  icon: string
  playStoreUrl: string
  rating?: number | null
  downloads?: string | null
  reviews?: number | null
  badges: string[]
  featured?: boolean
}

interface HomeProps {
  apps: App[]
  stats: {
    totalApps: number
    totalDownloads: string
    avgRating: number
    totalReviews: number
  }
}

export default function Home({ apps, stats }: HomeProps) {
  const featuredApp = apps.find(app => app.featured)
  const regularApps = apps.filter(app => !app.featured)

  return (
    <Layout>
      <Head>
        <title>CodeShipping — Build. Ship. Repeat.</title>
        <meta name="description" content="We build innovative Android apps that solve real problems. From AI-powered messaging to productivity tools, we ship code that matters." />
        <meta name="keywords" content="CodeShipping, Android apps, mobile development, AI apps, productivity apps" />
        <meta name="author" content="CodeShipping" />
        <meta property="og:title" content="CodeShipping — Build. Ship. Repeat." />
        <meta property="og:description" content="We build innovative Android apps that solve real problems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codeshipping.github.io" />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%236366f1' rx='20' width='100' height='100'/><text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' font-size='60' font-weight='bold' fill='white'>C</text></svg>" />
      </Head>

      <Hero />
      <Stats stats={stats} />
      
      <section className="apps" id="apps">
        <div className="section-header fade-in">
          <h2>Our Apps</h2>
          <p>Discover our collection of carefully crafted Android applications designed to make your life easier and more productive.</p>
        </div>

        {featuredApp && <FeaturedApp app={featuredApp} />}
        <AppsGrid apps={regularApps} />
      </section>

      <About />
      <CTA />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Extract app IDs from config
  const appIds = appsConfig.map(app => {
    const match = app.playStoreUrl.match(/id=([^&]+)/)
    return match ? match[1] : null
  }).filter(Boolean) as string[]

  // Fetch live data from Play Store for each app
  const liveData = await Promise.all(
    appIds.map(async (appId) => {
      try {
        return await fetchAppData(appId)
      } catch (e) {
        console.error(`Failed to fetch ${appId}`)
        return null
      }
    })
  )

  // Build apps array from Play Store data (use config only for badges/featured)
  const apps: App[] = appsConfig.map((config, index) => {
    const live = liveData[index]
    return {
      id: config.id,
      name: live?.title || config.name,
      description: live?.summary || config.description,
      icon: live?.icon || config.icon,
      playStoreUrl: config.playStoreUrl,
      rating: live?.score ?? null,
      downloads: live?.installs ?? null,
      reviews: live?.ratings ?? null,
      badges: config.badges,
      featured: config.featured ?? false
    }
  })

  // Calculate stats from Play Store data
  const totalApps = apps.length
  
  // Sum all ratings (reviews count from Play Store)
  const totalReviews = liveData.reduce((sum, app) => sum + (app?.ratings || 0), 0)
  
  // Calculate average rating from apps that have ratings
  const appsWithRatings = liveData.filter(app => app?.score && app.score > 0)
  const avgRating = appsWithRatings.length > 0 
    ? appsWithRatings.reduce((sum, app) => sum + (app?.score || 0), 0) / appsWithRatings.length
    : 0

  // Sum all downloads using minInstalls from Play Store
  const totalDownloads = liveData.reduce((sum, app) => {
    return sum + (app?.minInstalls || 0)
  }, 0)

  console.log('[Stats] From Play Store API:', {
    totalApps,
    totalDownloads,
    avgRating,
    totalReviews
  })

  const stats = {
    totalApps,
    totalDownloads: formatDownloads(totalDownloads),
    avgRating: appsWithRatings.length > 0 ? Math.round(avgRating * 10) / 10 : 0,
    totalReviews
  }

  return {
    props: {
      apps,
      stats
    }
  }
}
