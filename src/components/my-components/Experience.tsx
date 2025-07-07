import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      id: 3,
      title: "Computer Science Student",
      company: "K.J.Somaiyya College",
      location: "Kopargaon, India",
      duration: "2022 - Present",
      type: "Education",
      description: [
        "Pursuing Bachelor of Computer Applications (BCA)",
        "Maintaining excellent academic performance with focus on web technologies",
      ],
      technologies: ["Data Structures", "Algorithms", "DBMS", "Software Engineering","Computer Networks"],
    },
    {
      id: 1,
      title: "MERN Developer Intern",
      company: "Canvas Chrome Design.",
      location: "Remote",
      duration: "Dec 2024 - Mar 2025 (3 months)",
      type: "Internship",
      description: [
        "Built and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Developed responsive UIs with Redux, React Query, and reusable components.",
        "Created REST APIs and added Redis caching to boost performance by ~35%.",
        "Worked with MongoDB for database design, implementing data models for scalable and efficient storage.",
        "Used GraphQL for flexible data queries and Docker for containerization.",
        "Worked in an Agile team, contributing to both frontend and backend via Git "
      ],
      technologies: ["React", "JavaScript", "CSS3", "Git", "Figma","Nodejs","Nextjs","MongoDb"],
    },
    
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-500"
      case "Freelance":
        return "bg-green-500"
      case "Education":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey in web development and the experiences that have shaped my skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-purple-400"></div>

            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-800 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                  <Card className="bg-slate-700 border-slate-600 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                          <div className="flex items-center text-purple-400 mb-1">
                            <Building className="h-4 w-4 mr-2" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm mb-1">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{experience.duration}</span>
                          </div>
                        </div>
                        <Badge className={`${getTypeColor(experience.type)} text-white`}>{experience.type}</Badge>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {experience.description.map((item, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-purple-400 mr-2 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-purple-400 text-purple-400 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
