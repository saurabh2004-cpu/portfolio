"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react"
import dotenv from "dotenv"

dotenv.config();

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  console.log(name, email, message);

  // try {
  //   const res = await fetch('/api/send-email', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, email, message }),
  //   });

  //   if (!res.ok) throw new Error('Failed to send');

  //   alert("Message sent successfully!");
  //   setName('');
  //   setEmail('');
  //   setMessage('');
  // } catch (err) {
  //   console.error(err);
  //   alert("Failed to send message. Please try again.");
  // } finally {
  //   setLoading(false);
  // }
};




  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:saurabhbodakhe2004@gmail.com",
      color: "hover:bg-red-500",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/saurabh2004-cpu",
      color: "hover:bg-gray-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/saurabh-bodakhe-508792247",
      color: "hover:bg-blue-800",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-purple-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/50"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/50 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-white text-purple-600 hover:bg-white/90 font-semibold py-3"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s connect!</h3>
                <p className="text-pink-100 text-lg leading-relaxed mb-8">
                  I&apos;m always open to discussing new opportunities, creative projects, or just having a friendly chat
                  about web development and technology.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-pink-100">saurabhbodakhe2004@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-pink-100">shirdi, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Follow me on</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:scale-110`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
