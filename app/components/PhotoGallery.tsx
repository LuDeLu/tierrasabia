"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const photos = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Niños aprendiendo sobre agroecología",
    caption: "Educación práctica en nuestros huertos comunitarios",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Voluntarios trabajando en reforestación",
    caption: "Nuestros voluntarios plantando árboles nativos",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Taller de concienciación ambiental",
    caption: "Talleres interactivos sobre cuidado del medio ambiente",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Niños disfrutando de alimentos orgánicos",
    caption: "Alimentación saludable con productos de nuestros huertos",
  },
]

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  return (
    <div className="py-12 bg-tierra-sprout/5">
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <div className="relative h-[400px]">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={photo.src || "/placeholder.svg"} alt={photo.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white text-center text-lg">{photos[currentIndex].caption}</p>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors"
          aria-label="Siguiente foto"
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Ir a la foto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

