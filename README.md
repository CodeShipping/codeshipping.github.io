# CodeShipping Website

Modern landing page for CodeShipping - Build. Ship. Repeat.

## 🚀 Features

- **Dynamic App Data**: Apps stored in JSON with automatic stats calculation
- **Material Design 3**: Modern Material Design principles with Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion powered animations
- **GitHub Pages Ready**: Automated deployment via GitHub Actions
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 📱 Apps Showcase

The website showcases CodeShipping's Android apps:
- **AutoReply | AI Smart Message** (Featured) - 3K+ downloads, 4.7★ rating
- **MultiGPT | AI Chat & Compare** - AI Powered productivity tool
- **SplitX** - Finance and expense splitting app
- **QR & Barcode | Offline Scan** - Utility app for offline scanning
- **Drawing Board | Brush, Shapes** - Creative drawing application
- **Random Quotes & Design Studio** - Lifestyle and creative app

## 🛠 Tech Stack

- **Next.js 14** - React framework with static generation
- **TypeScript** - Type safety
- **Tailwind CSS** - Material Design styling
- **Framer Motion** - Smooth animations
- **GitHub Actions** - Automated deployment

## 🏃‍♂️ Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
# Build and export static files
npm run export

# Files will be generated in ./out directory
```

### Deploy to GitHub Pages
The site automatically deploys to GitHub Pages when you push to main branch via GitHub Actions.

## 📁 Project Structure

```
├── components/           # React components
│   ├── Layout.tsx       # Main layout wrapper
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx         # Hero section
│   ├── Stats.tsx        # Statistics section
│   ├── FeaturedApp.tsx  # Featured app showcase
│   ├── AppsGrid.tsx     # Apps grid layout
│   ├── About.tsx        # About section
│   ├── CTA.tsx          # Call-to-action section
│   └── Footer.tsx       # Footer component
├── data/
│   └── apps.json        # App data and metadata
├── pages/
│   ├── _app.tsx         # Next.js app wrapper
│   └── index.tsx        # Home page
├── styles/
│   └── globals.css      # Global styles and Tailwind
├── .github/workflows/
│   └── deploy.yml       # GitHub Actions deployment
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── index.html          # Original static HTML version
```

## 🎨 Design System

### Colors (Material Design 3)
- **Primary**: Indigo-based palette (#6366f1)
- **Secondary**: Teal-based palette (#14b8a6)  
- **Surface**: Gray-based palette for backgrounds
- **Gradients**: Dynamic gradients throughout the design

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
- **Cards**: Elevated surfaces with subtle borders
- **Buttons**: Material Design 3 styled buttons
- **Badges**: Color-coded category badges
- **Animations**: Smooth hover and scroll animations

## 📊 Dynamic Features

### App Statistics
Stats are automatically calculated from the apps.json data:
- Total apps count
- Average rating calculation
- Total reviews sum
- Download numbers (can be made dynamic with API integration)

### Future Enhancements
- **Play Store API Integration**: For real-time download/rating data
- **GitHub API**: For repository statistics
- **Analytics**: User engagement tracking
- **CMS Integration**: For easy content management

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push to main branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://codeshipping.github.io`

### Manual Deployment
```bash
npm run deploy
```

## 🔧 Configuration

### Updating App Data
Edit `data/apps.json` to add/modify apps:

```json
{
  "id": "app-id",
  "name": "App Name",
  "description": "App description",
  "icon": "https://play-lh.googleusercontent.com/...",
  "playStoreUrl": "https://play.google.com/store/apps/details?id=...",
  "rating": 4.5,
  "downloads": "1K+",
  "reviews": 25,
  "badges": ["Category", "Type"],
  "featured": false
}
```

### Customizing Styles
Modify `tailwind.config.js` for theme customization or add custom styles to `styles/globals.css`.

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test the build: `npm run export`
5. Submit a pull request

## 📄 License

© 2026 CodeShipping. All rights reserved.

---

**CodeShipping** - Build. Ship. Repeat. 🚀
