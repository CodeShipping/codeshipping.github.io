declare module 'google-play-scraper' {
  interface AppResult {
    appId: string
    title: string
    summary: string
    description: string
    descriptionHTML: string
    icon: string
    score: number
    scoreText: string
    ratings: number
    reviews: number
    histogram: { '1': number; '2': number; '3': number; '4': number; '5': number }
    installs: string
    minInstalls: number
    maxInstalls: number
    url: string
    developer: string
    developerId: string
    developerEmail: string
    developerWebsite: string
    developerAddress: string
    genre: string
    genreId: string
    price: number
    free: boolean
    currency: string
    priceText: string
    available: boolean
    offersIAP: boolean
    IAPRange: string
    androidVersion: string
    androidVersionText: string
    contentRating: string
    screenshots: string[]
    video: string
    headerImage: string
    recentChanges: string
    updated: number
    version: string
  }

  interface AppOptions {
    appId: string
    lang?: string
    country?: string
  }

  function app(options: AppOptions): Promise<AppResult>
  
  export { app, AppResult, AppOptions }
  export default { app }
}
