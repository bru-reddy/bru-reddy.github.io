import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Always open the portfolio at the top instead of restoring the previous scroll position.
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    const elements = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach(element => observer.observe(element))

    const visual = document.querySelector('.hero-visual')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const handlePointer = event => {
      if (!visual || reduceMotion || window.innerWidth < 900) return
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      visual.style.transform = `perspective(900px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`
    }

    window.addEventListener('pointermove', handlePointer, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('pointermove', handlePointer)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
