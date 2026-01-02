import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Background Effects */}
      <div className="bg-grid"></div>
      <div className="bg-gradient-blob blob-1"></div>
      <div className="bg-gradient-blob blob-2"></div>

      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
