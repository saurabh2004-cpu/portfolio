import { Card, CardContent } from "@/components/ui/card"
import { Code, Gamepad2, Music } from "lucide-react"

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      title: "Learning Web Technologies",
      description:
        "I'm passionate about learning web technologies. From HTML and CSS to JavaScript and beyond, I enjoy building websites and web applications. The thrill of creating something functional and visually appealing keeps me motivated to explore more in this field.",
      icon: Code,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      title: "Gaming",
      description:
        "Gaming is my favorite pastime. Whether it's diving into immersive RPGs, strategizing in online multiplayer games, or relaxing with casual titles, gaming provides an escape from the daily routine. It also connects me with a vibrant community of fellow gamers.",
      icon: Gamepad2,
      color: "from-green-400 to-green-600",
    },
    {
      id: 3,
      title: "Music & Movies",
      description:
        "When I'm not busy with web development or gaming, I find solace in the captivating world of music and sci-fi movies. I enjoy exploring various genres and artists from soothing melodies to high-energy beats, and getting lost in futuristic storylines.",
      icon: Music,
      color: "from-purple-400 to-purple-600",
    },
  ]

  return (
    <section id="hobbies" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8">My Hobbies</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Beyond coding, here are the activities that fuel my creativity and keep me inspired
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby) => {
            const IconComponent = hobby.icon
            return (
              <Card
                key={hobby.id}
                className="bg-slate-800 border-slate-700 hover:border-purple-400 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${hobby.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {hobby.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed flex-grow">{hobby.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hobbies
