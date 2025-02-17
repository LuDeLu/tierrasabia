"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { Heart, Share2, Leaf, Users, Target } from "lucide-react"

export default function FeaturedProjects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const projects = [
    {
      title: "Bosque Escuela Vivo",
      description:
        "Transformando espacios escolares en bosques educativos que nutren el cuerpo y la mente de los niños.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 15000,
      goal: 25000,
      supporters: 123,
      category: "Educación",
      impact: "200 niños beneficiados",
    },
    {
      title: "Guardianes del Agua Jóvenes",
      description: "Empoderando a niños y jóvenes en la protección y restauración de cuencas hídricas locales.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 8500,
      goal: 12000,
      supporters: 89,
      category: "Agua",
      impact: "3 escuelas impactadas",
    },
    {
      title: "Semillas de Cambio Infantil",
      description: "Enseñando agricultura regenerativa a niños para asegurar la seguridad alimentaria del futuro.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 12000,
      goal: 20000,
      supporters: 156,
      category: "Agricultura",
      impact: "50 familias beneficiadas",
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,_var(--tw-gradient-stops))]
          from-tierra-leaf via-transparent to-transparent opacity-20"
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tierra-stone mb-4">
            Proyectos que Transforman Vidas Infantiles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra iniciativas que están creando un futuro mejor para los niños mientras regeneran nuestros
            ecosistemas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="p-2 bg-white/90 backdrop-blur-md rounded-md hover:bg-white transition-colors">
                      <Heart size={20} className="text-tierra-leaf" />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-md rounded-md hover:bg-white transition-colors">
                      <Share2 size={20} className="text-tierra-leaf" />
                    </button>
                  </div>
                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md">
                    <span className="text-tierra-leaf text-sm font-medium">{project.category}</span>
                  </div>
                </div>

                <CardHeader className="p-6">
                  <h3 className="text-xl font-semibold text-tierra-stone mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  {/* Impact metrics */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Leaf size={16} className="text-tierra-leaf" />
                      <span>{project.impact}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} className="text-tierra-leaf" />
                      <span>{project.supporters} apoyos</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>${project.raised.toLocaleString()} recaudados</span>
                      <span>meta: ${project.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-tierra-leaf transition-all duration-1000 ease-out"
                        style={{ width: `${(project.raised / project.goal) * 100}%` }}
                      />
                    </div>
                  </div>

                  {hoveredCard === index && (
                    <div className="flex justify-between items-center animate-fade-in">
                      <Target size={20} className="text-tierra-leaf" />
                      <Button className="bg-tierra-leaf hover:bg-tierra-moss text-white">Apoyar Proyecto</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-tierra-leaf text-tierra-leaf hover:bg-tierra-leaf hover:text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300"
          >
            Ver Todos los Proyectos para Niños
          </Button>
        </div>
      </div>
    </section>
  )
}

