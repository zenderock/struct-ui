import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Projects from '../components/Projects'
import AITerminal from '../components/AITerminal'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useLenis } from '../hooks/useLenis'
import { useCustomCursor } from '../hooks/useCustomCursor'
import { useIntroAnimation } from '../hooks/useIntroAnimation'

export const Route = createFileRoute('/')({ component: App })

function App() {
  useLenis()
  useCustomCursor()
  useIntroAnimation()

  return (
    <>
      <Loader />
      <div className="cursor-dot" />
      <div className="cursor-circle" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <AITerminal />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
