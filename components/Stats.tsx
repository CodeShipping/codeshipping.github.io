import { motion } from 'framer-motion'

interface StatsProps {
  stats: {
    totalApps: number
    totalDownloads: string
    avgRating: number
    totalReviews: number
  }
}

export default function Stats({ stats }: StatsProps) {
  const statItems = [
    { value: `${stats.totalApps}+`, label: 'Apps Published' },
    { value: stats.totalDownloads, label: 'Downloads' },
    { value: stats.avgRating > 0 ? `${stats.avgRating} ★` : 'New', label: stats.avgRating > 0 ? 'Avg Rating' : 'Apps' },
    { value: stats.totalReviews > 0 ? `${stats.totalReviews}+` : '—', label: 'Reviews' },
  ]

  return (
    <section className="relative z-10 py-16 px-8 border-y border-surface-800 bg-surface-900/50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-2">
                {item.value}
              </div>
              <div className="text-surface-400 text-sm md:text-base">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
