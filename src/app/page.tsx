"use client"

import About from "@/components/my-components/About"
import Contact from "@/components/my-components/Contact"
import Experience from "@/components/my-components/Experience"
import Footer from "@/components/my-components/Footer"
import Header from "@/components/my-components/Header"
import Hero from "@/components/my-components/Hero"
import Hobbies from "@/components/my-components/Hobbies"
import Projects from "@/components/my-components/Projects"
import Skills from "@/components/my-components/Skills"
import { useState, useEffect } from "react"


export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
