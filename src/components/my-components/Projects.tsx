// "use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Info } from "lucide-react"
import Image from "next/image"

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentDetailImage, setCurrentDetailImage] = useState(0)

  const projects = [
    {
      id: 1,
      title: "AI Powered Job Recommendation System",
      shortDescription:
        "Developed a Job Recommendation System using Next.js, Node.js, and LangchainJs. Utilized Gemini's AI model to match users with relevant jobs based on their skills and preferences.",
      fullDescription: `
        This comprehensive Job Recommendation System leverages cutting-edge AI technology to revolutionize the job search experience. Built with modern web technologies, the platform provides intelligent job matching based on user skills, preferences, and career goals.

        Key Features:
        • AI-powered job matching using Google's Gemini model
        • Real-time job recommendations based on user resume
        • Advanced filtering and search capabilities
        • User-friendly dashboard with personalized insights
        • Responsive design optimized for all devices
        • Secure authentication and data protection
        • Personalized job alerts via email and notifications
        • Messaging and communication features 


        Technical Implementation:
        • Frontend built with Next.js 14 and TypeScript for type safety
        • Backend API developed using Node.js and Express.js
        • MongoDB database for efficient data storage and retrieval
        • LangChain integration for Resume parsing and advanced AI processing
        • Tailwind CSS for modern, responsive styling
        • Gemini AI model integration for intelligent recommendations 
        • MongoDB vector search for efficient job matching
        • WebRTC and WebSockets for real-time communication
        • Email and SMS integration for personalized alerts
        • RabbitMQ for message queuing
        • Docker for containerization
        • Redis for efficient backend caching

        Description:
        • Developed an AI-powered job recommendation system that analyzes resumes using LangChain.js, which enables precise and personalized job matching for users.  

        • Utilized LangChain.js to parse resumes and extract structured data, helping to streamline the information for better processing.  Converted resume content into vector embeddings to enhance semantic job matching, which improved the accuracy of recommendations. 

        • Managed a microservices architecture using Docker, which split the backend into independent services, making the application easier to scale and maintain. 

        • Implemented Redis caching for frequently accessed job data, which reduced API response time by approximately 30%, leading to improved backend efficiency.  

        • Handled synchronous communication between services with RabbitMQ, ensuring smooth and reliable job processing workflows. Employed MongoDB vector search for high-speed vector-based job queries, which improved the relevance of recommendations and reduced search times.  

        • Developed a clean and responsive user interface using Next.js, styled with Tailwind, and built accessible components with ShadCN, enhancing user experience.  
        
        • Created job listing views, detailed job pages, user profiles, and personalized dashboards for each user, which improved engagement and satisfaction with the platform.

        The system analyzes user profiles, job descriptions, and market trends to provide highly accurate job recommendations, significantly improving the job search success rate for users.
      `,
      images: ["/job-portal.png", "/job-portal2.png", "/job-portal3.png", "/job-portal4.png", "/job-portal5.png", "/job-portal6.png", "/job-portal7.png", "/job-portal8.png"],
      technologies: ["Next.js", "Node.js", "MongoDB", "Express", "Langchain", "TailwindCSS", "TypeScript", "Gemini"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/saurabh2004-cpu/job-recomendation-system",
      featured: true,
    },
    {
      id: 2,
      title: "Full-Stack E-Commerce Platform with Next.js",
      shortDescription:
        "Built a scalable, full-featured e-commerce platform using Next.js for both frontend and backend, featuring secure OTP auth, dynamic user experiences, and server-side rendering for better performance and SEO.",
      fullDescription: `
    This project is a fully responsive e-commerce platform architected using Next.js for both the frontend and backend, offering a seamless and modern online shopping experience. The application is designed for performance, scalability, and user engagement.

    Key Features:
    • Home page with dynamic product listings
    • User authentication with NextAuth and SMS-based OTP login
    • Seller dashboard for managing products, orders, and earnings
    • Buyer dashboard with order history, wishlist, and cart
    • Dynamic product detail pages with add-to-cart and checkout functionality
    • Address management system with geolocation-based autofill
    • Server-side rendered pages for enhanced SEO and faster initial load
    • Admin panel for managing products, users, and system logs
    • Real-time order status updates and inventory sync

    Technical Implementation:
    • Built entirely with Next.js 14 leveraging App Router and TypeScript
    • Used MongoDB as the primary database for storing users, orders, and product data
    • Designed modular REST APIs using Next.js API routes
    • Implemented server-side rendering via \`getServerSideProps\` to improve SEO and reduce initial page load time by ~30%
    • Integrated Tailwind CSS and ShadCN for consistent design and reusable UI components
    • Used NextAuth for robust session management with SMS-based OTP authentication
    • Dynamic address detection implemented via geolocation APIs for faster checkouts
    • Created custom cart and order logic with session and DB sync
    • Optimized Lighthouse performance scores by lazy loading components and images
    • Implemented middleware-based route protection for secure access
    • Deployed on Vercel with environment-based configuration handling

    Description:
    • This e-commerce platform was developed as a full-stack solution using only Next.js for both client and server logic, showcasing the framework’s power and flexibility.
    
    • The app features seller and user flows with tailored dashboards and data rendering using SSR (getServerSideProps), which significantly improved SEO and initial page load speeds.

    • Tailwind CSS and ShadCN components were used to deliver a clean, mobile-friendly design. Custom REST APIs were built for handling orders, payments, and user data operations securely and efficiently.

    • SMS-based OTP login was integrated using NextAuth and third-party gateways, increasing security and user trust. Geolocation-assisted address entry was implemented to enhance the checkout experience.

    • Focused on performance, accessibility, and responsive design, the app delivers a near-native experience across devices and browsers.

    This project highlights end-to-end ownership of both frontend and backend using a modern, production-ready stack suitable for commercial applications.
  `,
      images: ["/ecommerce1.png", "/ecommerce2.png", "/ecommerce3.png", "/ecommerce4.png", "/ecommerce5.png", "/ecommerce6.png", "/ecommerce7.png", "/ecommerce8.png", "/ecommerce9.png", "/ecommerce10.png"],
      technologies: ["Next.js", "MongoDB", "TailwindCSS", "ShadCN", "TypeScript", "NextAuth", "OTP Auth", "SSR"],
      liveUrl: " https://nextjs-e-commerce-4tda-ki35vvzwt-saurabh2004cpus-projects.vercel.app/",
      githubUrl: "https://github.com/saurabh2004-cpu/nextjs-E-commerce",
      featured: true,
    },
    {
      id: 3,
      title: "E-commerce store (internship project)",
      shortDescription:
        "Built a scalable, full-featured e-commerce platform using Next.js for both frontend and backend, featuring secure OTP auth, dynamic user experiences, and server-side rendering for better performance and SEO.",
      fullDescription: `
        This project is a fully responsive e-commerce platform architected using Next.js for both the frontend and backend, offering a seamless and modern online shopping experience. The application is designed for performance, scalability, and user engagement.

      Key Features:
      • Home page with dynamic product listings  
      • User authentication with NextAuth and SMS-based OTP login  
      • Seller dashboard for managing products, orders, and earnings  
      • Buyer dashboard with order history, wishlist, and cart  
      • Dynamic product detail pages with add-to-cart and checkout functionality  
      • Address management system with geolocation-based autofill  
      • Server-side rendered pages for enhanced SEO and faster initial load  
      • Admin panel for managing products, users, and system logs  
      • Real-time order status updates and inventory sync

      Technical Implementation:
      • Built entirely with Next.js 14 leveraging App Router and TypeScript  
      • Used MongoDB as the primary database for storing users, orders, and product data  
      • Designed modular REST APIs using Next.js API routes  
      • Implemented server-side rendering via \`getServerSideProps\` to improve SEO and reduce initial page load time by ~30%  
      • Integrated Tailwind CSS and ShadCN for consistent design and reusable UI components  
      • Used NextAuth for robust session management with SMS-based OTP authentication  
      • Dynamic address detection implemented via geolocation APIs for faster checkouts  
      • Created custom cart and order logic with session and DB sync  
      • Optimized Lighthouse performance scores by lazy loading components and images  
      • Implemented middleware-based route protection for secure access  
      • Deployed on Vercel with environment-based configuration handling

      Description:
      • This e-commerce platform was developed as a full-stack solution using only Next.js for both client and server logic, showcasing the framework’s power and flexibility.

      • The app features seller and user flows with tailored dashboards and data rendering using SSR (getServerSideProps), which significantly improved SEO and initial page load speeds.

      • Tailwind CSS and ShadCN components were used to deliver a clean, mobile-friendly design. Custom REST APIs were built for handling orders, payments, and user data operations securely and efficiently.

      • SMS-based OTP login was integrated using NextAuth and third-party gateways, increasing security and user trust. Geolocation-assisted address entry was implemented to enhance the checkout experience.

      • Focused on performance, accessibility, and responsive design, the app delivers a near-native experience across devices and browsers.

      This project highlights end-to-end ownership of both frontend and backend using a modern, production-ready stack suitable for commercial applications.
        `,
      images: [
        "/homeshoppr01.png",
        "/homeshoppr02.png",
        "/homeshoppr03.png",
        "/homeshoppr04.png",
      ],
      technologies: ["Next.js", "MongoDB", "TailwindCSS", "ShadCN", "TypeScript", "NextAuth", "OTP Auth", "SSR"],
      liveUrl: "https://homeshoppr-three.vercel.app/",
      githubUrl: "https://github.com/saurabh2004-cpu/homeshoppr",
      featured: true,
    },
    {
      id: 4,
      title: "Therapist Website Frontend UI",
      shortDescription:
        "Designed a responsive and interactive frontend for a therapist booking platform using Next.js, Tailwind CSS, and Framer Motion.",
      fullDescription: `
        This project focuses on crafting a clean, accessible, and modern frontend interface for a therapist booking website. The goal was to create a visually soothing user experience that balances functionality with simplicity.

        Key Features:
        • Built with Next.js for fast routing and optimized performance  
        • Used Tailwind CSS to implement a responsive and mobile-friendly layout  
        • Integrated Framer Motion for smooth animations and dynamic transitions  
        • Designed reusable components for therapist profiles, appointment cards, and call-to-action sections  
        • Implemented a clear visual hierarchy for easy navigation and user guidance  
        • Optimized UI for accessibility and cross-device compatibility

        Technical Implementation:
        • Leveraged the App Router in Next.js for page-based routing  
        • Tailwind CSS used for rapid and consistent UI styling  
        • Framer Motion integrated for fade-in effects, hover animations, and page transitions  
        • Clean component architecture maintained for scalability and ease of update  
        • Fully responsive design ensures usability across desktops, tablets, and mobile devices

        Description:
        This frontend project highlights a UI-centric build, where the primary focus was delivering an intuitive experience for users seeking therapy sessions. The animation and motion effects help create an engaging interface while keeping performance optimized. The project is fully compatible with backend integration and serves as a professional and polished entry point for any mental health or wellness platform.
          `,
      images: [
        "/landingpage01.png",
        "/landingpage02.png",
        "/landingpage03.png",
        "/landingpage04.png",
        "/landingpage05.png",
        "/landingpage06.png",
        "/landingpage07.png",
        "/landingpage08.png",
        "/landingpage09.png",
        "/landingpage10.png",
        "/landingpage11.png",
      ],
      technologies: ["Next.js", "TailwindCSS", "Framer Motion", "Responsive Design", "Component Architecture"],
      liveUrl: "https://landing-page-brown-iota.vercel.app/",
      githubUrl: "https://github.com/saurabh2004-cpu/LandingPage",
      featured: false,
    },
    {
      id: 5,
      title: "Escape Room Landing Page",
      shortDescription:
        "Crafted a visually engaging, mobile-friendly landing page for an escape room experience using Next.js, Tailwind CSS, and Framer Motion.",
      fullDescription: `
      This project is a high-converting, animated landing page built for an immersive escape room experience. The design emphasizes user engagement, clear call-to-actions, and an adventurous theme.

      Key Features:
      • Fully responsive landing page design with strong visual hierarchy  
      • Hero section with animated headings and smooth scroll interactions  
      • Interactive features implemented using Framer Motion for animations  
      • Clear navigation and sectioning for storyline, booking details, and testimonials  
      • Optimized for performance and SEO with fast load times and clean code

      Technical Implementation:
      • Developed using Next.js with optimized routing and build performance  
      • Styled using Tailwind CSS to ensure design consistency across devices  
      • Framer Motion used for entrance animations, hover effects, and smooth scroll cues  
      • Semantic HTML and accessibility-focused structure for better UX  
      • Ready for backend booking integration if needed

      Description:
      The Escape Room landing page project demonstrates frontend craftsmanship focused on branding and user engagement. It reflects a deep understanding of layout, animation, and responsive design, making it ideal for marketing single-purpose event-based platforms or startups.
  `,
      images: [
        "/escape-room01.png",
        "/escape-room01.png",
        "/escape-room03.png",
        "/escape-room04.png",
        "/escape-room05.png",
        "/escape-room06.png",
        "/escape-room07.png",
      ],
      technologies: ["Next.js", "TailwindCSS", "Framer Motion", "Responsive Design", "Landing Page"],
      liveUrl: "https://escape-room-landing.vercel.app/", // replace with your actual link
      githubUrl: "https://github.com/saurabh2004-cpu/escape-room-landing", // replace if public
      featured: false,
    }


  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const nextDetailImage = () => {
    if (selectedProject !== null) {
      const project = projects.find((p) => p.id === selectedProject)
      if (project) {
        setCurrentDetailImage((prev) => (prev + 1) % project.images.length)
      }
    }
  }

  const prevDetailImage = () => {
    if (selectedProject !== null) {
      const project = projects.find((p) => p.id === selectedProject)
      if (project) {
        setCurrentDetailImage((prev) => (prev - 1 + project.images.length) % project.images.length)
      }
    }
  }

  const openProjectDetails = (projectId: number) => {
    setSelectedProject(projectId)
    setCurrentDetailImage(0)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
    setCurrentDetailImage(0)
  }

  const selectedProjectData = selectedProject ? projects.find((p) => p.id === selectedProject) : null

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-purple-400 mb-4 md:mb-8">My Projects</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I&apos;ve worked on that showcase my skills and creativity in building modern web
            applications
          </p>
        </div>

        {/* Featured Project Carousel */}
        <div className="max-w-7xl mx-auto mb-16 md:mb-24">
          <div className="relative">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section - Optimized for 1920x870 */}
                <div className="relative h-64 md:h-80 lg:h-96 xl:h-[500px]">
                  <Image
                    src={projects[currentProject].images[0] || "/placeholder.svg?height=870&width=1920"}
                    alt={projects[currentProject].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content Section */}
                <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4 px-3 py-1"
                    >
                      Featured Project
                    </Badge>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                      {projects[currentProject].title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                    {projects[currentProject].shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[currentProject].technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex-1"
                    >
                      <a href={projects[currentProject].liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-purple-400 text-purple-400 hover:bg-purple-800 hover:text-white bg-transparent flex-1"
                    >
                      <a href={projects[currentProject].githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    <Button
                      onClick={() => openProjectDetails(projects[currentProject].id)}
                      variant="outline"
                      className="border-blue-400 text-white hover:bg-blue-800 hover:text-white bg-transparent flex-1"
                    >
                      <Info className="mr-2 h-4 w-4" />
                      Full Details
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Carousel Controls */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevProject}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextProject}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProject ? "bg-purple-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-400 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={project.images[0] || "/placeholder.svg?height=870&width=1920"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent opacity-60"></div>
              </div>

              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.shortDescription.substring(0, 120)}...
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="border-purple-400/50 text-purple-400 text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="border-gray-500 text-gray-400 text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button asChild size="sm" className="bg-purple-500 hover:bg-purple-600 flex-1 text-xs">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Live
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white flex-1 bg-transparent text-xs"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                  <Button
                    onClick={() => openProjectDetails(project.id)}
                    size="sm"
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white bg-transparent text-xs px-2"
                  >
                    <Info className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={closeProjectDetails}>
          <DialogContent className="w-full max-h-[90vh] overflow-y-auto bg-slate-800 border-slate-700 text-white">
            {selectedProjectData && (
              <>
                <DialogHeader className="pb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <DialogTitle className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
                        {selectedProjectData.title}
                      </DialogTitle>
                      <div className="flex flex-wrap gap-2">
                        {selectedProjectData.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-purple-400/50 text-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogHeader>

                {/* Image Carousel */}
                <div className="relative mb-8">
                  <div className="relative h-full md:h-full lg:h-full overflow-hidden rounded-lg">
                    <Image
                      src={selectedProjectData.images[currentDetailImage] || "/placeholder.svg?height=870&width=1920"}
                      alt={`${selectedProjectData.title} - Image ${currentDetailImage + 1}`}
                      width={1920}
                      height={870}
                      className="object-cover"
                    />
                  </div>

                  {selectedProjectData.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevDetailImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextDetailImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>

                      {/* Image Indicators */}
                      <div className="flex justify-center mt-4 space-x-2">
                        {selectedProjectData.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentDetailImage(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentDetailImage ? "bg-purple-400" : "bg-gray-600"
                              }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Description */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-300 mb-4">Project Overview</h4>
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {selectedProjectData.fullDescription}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-700">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex-1"
                    >
                      <a href={selectedProjectData.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent flex-1"
                    >
                      <a href={selectedProjectData.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default Projects
