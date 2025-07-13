"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["Developer", "Designer", "Creator"]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 1500)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, My name is <span className="text-purple-400 font-cursive">Saurabh</span>
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">and I am a Passionate</h2>
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
                Web{" "}
                <span className="text-purple-400 font-cursive">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                Passionate Web Developer with expertise in HTML, CSS, JavaScript, Node.js, and modern frameworks
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 shadow-lg shadow-purple-500/25"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-purple-400 overflow-hidden shadow-2xl shadow-purple-500/25">
                <Image
                  src="/profile.png"
                  alt="Saurabh"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div> */}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            variant="ghost"
            size="lg"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="animate-bounce text-purple-400 hover:text-purple-300"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
