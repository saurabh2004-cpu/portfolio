"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Server, Database, Settings, Layers, Globe } from "lucide-react"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      title: "Frontend",
      icon: Palette,
      color: "from-blue-400 to-cyan-500",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "shadcn/ui", level: 75 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-400 to-violet-500",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "Mongoose", level: 80 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      color: "from-yellow-400 to-orange-500",
      skills: [
        { name: "Docker", level: 70 },
        { name: "Redis", level: 65 },
        { name: "AWS", level: 60 },
        { name: "GitHub Actions", level: 70 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 95 },
      ],
    },
    {
      title: "Others",
      icon: Layers,
      color: "from-pink-400 to-rose-500",
      skills: [
        { name: "Full Stack Development", level: 85 },
        { name: "RESTful APIs", level: 80 },
        { name: "GraphQL", level: 65 },
        { name: "Microservices", level: 60 },
        { name: "Agile Methodologies", level: 75 },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("skills")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-purple-400 mb-4 md:mb-6">Technical Skills</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of the technologies, frameworks, and methodologies I use to build modern, scalable
            web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.title}
                className="bg-slate-700/50 backdrop-blur-sm border-slate-600 hover:border-purple-400 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 group"
              >
                <CardContent className="p-6 md:p-8">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm md:text-base font-medium text-gray-200">{skill.name}</span>
                          <Badge variant="outline" className="border-purple-400/50 text-purple-300 text-xs">
                            {skill.level}%
                          </Badge>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-sm md:text-base text-gray-300">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-sm md:text-base text-gray-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-purple-400 mb-2">2+</div>
              <div className="text-sm md:text-base text-gray-300">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-300">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
