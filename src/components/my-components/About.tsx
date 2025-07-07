import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Lightbulb } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8">About Me</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 flex ">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hey there! I&apos;m Saurabh, and I&apos;m excited to welcome you to my corner of the web. As a passionate student
                and a dedicated website developer and designer, I thrive on bringing ideas to life through digital
                experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m currently pursuing my studies in BCA at K.J.Somaiyya Kopargaon. My insatiable curiosity drives me to
                constantly learn and explore new technologies and design trends in the dynamic world of web development.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <Code className="h-24 w-24 text-white" />
              </div>
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
