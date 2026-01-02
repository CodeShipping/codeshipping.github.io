export default function About() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      title: "Quality First",
      description: "Every app we ship meets our high standards for performance and usability."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      ),
      title: "User-Centric",
      description: "We design with users in mind, creating intuitive and accessible experiences."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      ),
      title: "Innovation Driven",
      description: "We leverage cutting-edge technology including AI to build smarter apps."
    }
  ]

  return (
    <section className="relative z-10 py-24 px-8 bg-surface-900/50 border-y border-surface-800" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About CodeShipping</h2>
            <p className="text-surface-400 mb-8 leading-relaxed text-lg">
              We are a passionate team of developers dedicated to creating high-quality Android applications 
              that make a real difference in people's lives. Our mission is to transform innovative ideas 
              into polished, user-friendly products.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 border border-primary-500/30 rounded-xl flex items-center justify-center text-primary-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-surface-500 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-surface-800/50 border border-surface-700 rounded-3xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center font-bold text-4xl mx-auto mb-6">
                C
              </div>
              <h3 className="text-2xl font-bold mb-2">CodeShipping</h3>
              <p className="text-surface-400 italic">"Where Code Becomes Product"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
