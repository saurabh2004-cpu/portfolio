import { Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2024 Portfolio Website. Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by{" "}
            <span className="text-purple-400 font-semibold">Saurabh</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
