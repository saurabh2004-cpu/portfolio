import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Lightbulb, } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
  <p className="text-gray-400 text-lg mb-4">Who I Am</p>
  <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8">
    &lt;About Me&gt;
  </h2>
</div>


        {/* <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
               
              </div>
            </div> */}
        <div className="max-w-4xl mx-auto">
          <div className="grid  gap-12 items-center mb-16 flex ">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Saurabh Bodakhe, a dedicated full stack web developer with practical experience building scalable, user-focused web applications using the MERN stack. I’ve developed and deployed real-world projects like an e-commerce platform (HomeShoppr), a video streaming app, and an AI-powered job recommendation system — all with robust backend architecture and clean, responsive frontends using React, Next.js, Node.js, and MongoDB.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My recent projects integrate tools like LangChain.js, Redis, Docker, RabbitMQ, Socket.io, and WebRTC to enable smart recommendations, real-time chat, and video conferencing. I enjoy turning ideas into full-fledged applications and always aim for performance, scalability, and great user experience.
                I'm currently focused on enhancing my data structures and algorithms skills and seeking opportunities to contribute to forward-thinking teams that value collaboration, innovation, and code quality.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Developer</h3>
                <p className="text-gray-300">
                  Proficient in HTML, CSS, JavaScript, and modern frameworks. I enjoy turning complex problems into
                  clean, efficient code.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Designer</h3>
                <p className="text-gray-300">
                  Creating visually appealing and user-friendly interfaces that provide seamless experiences across all
                  devices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Learner</h3>
                <p className="text-gray-300">
                  Always curious and eager to learn new technologies and stay updated with the latest trends in web
                  development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
