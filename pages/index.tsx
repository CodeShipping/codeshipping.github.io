import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import FeaturedApp from '../components/FeaturedApp'
import AppsGrid from '../components/AppsGrid'
import About from '../components/About'
import CTA from '../components/CTA'
import apps from '../data/apps.json'

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
        <title>CodeShipping — Where Code Becomes Product</title>
        <meta name="description" content="We build innovative Android apps that solve real problems. From AI-powered messaging to productivity tools, we ship code that matters." />
        <meta name="keywords" content="CodeShipping, Android apps, mobile development, AI apps, productivity apps" />
        <meta name="author" content="CodeShipping" />
        <meta property="og:title" content="CodeShipping — Where Code Becomes Product" />
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
  // Calculate stats from apps data
  const totalApps = apps.length
  const totalReviews = apps.reduce((sum, app) => sum + (app.reviews || 0), 0)
  const appsWithRatings = apps.filter(app => app.rating)
  const avgRating = appsWithRatings.length > 0 
    ? appsWithRatings.reduce((sum, app) => sum + (app.rating || 0), 0) / appsWithRatings.length
    : 4.7

  const stats = {
    totalApps,
    totalDownloads: "1K+", // Could be calculated if we had individual download numbers
    avgRating: Math.round(avgRating * 10) / 10,
    totalReviews
  }

  return {
    props: {
      apps,
      stats
    }
  }
}
