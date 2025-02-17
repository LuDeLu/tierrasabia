import Header from "../components/Header"
import Footer from "../components/Footer"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import Link from "next/link"
import { BookOpen, Apple, Users, Leaf } from "lucide-react"

export default function ImpactoEnNinos() {
  const impactData = [
    {
      title: "Educación Ambiental",
      value: "5,000+",
      description: "Niños que han participado en talleres de educación ambiental",
      icon: BookOpen,
    },
    {
      title: "Nutrición Mejorada",
      value: "2,000+",
      description: "Niños con acceso a alimentos orgánicos de nuestros huertos",
      icon: Apple,
    },
    {
      title: "Habilidades para la Vida",
      value: "3,000+",
      description: "Niños que han desarrollado habilidades de liderazgo y trabajo en equipo",
      icon: Users,
    },
    {
      title: "Conciencia Ecológica",
      value: "8,000+",
      description: "Niños que han participado en proyectos de conservación",
      icon: Leaf,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-tierra-sprout/10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-tierra-stone mb-8 text-center">Impacto en Niños</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
              Nuestros programas están diseñados para empoderar a los niños, brindándoles las herramientas y
              conocimientos necesarios para convertirse en guardianes de la naturaleza y líderes de un futuro
              sostenible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {impactData.map((item, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start">
                    <item.icon className="w-12 h-12 text-tierra-leaf mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold text-tierra-leaf mb-2">{item.title}</h3>
                      <p className="text-4xl font-bold text-tierra-stone mb-4">{item.value}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h2 className="text-3xl font-bold text-tierra-stone mb-6 text-center">Testimonios de Impacto</h2>
              <div className="space-y-6">
                <blockquote className="italic text-gray-600 border-l-4 border-tierra-leaf pl-4">
                  "Gracias a los talleres de Tierra Sabia, ahora entiendo lo importante que es cuidar nuestro planeta.
                  ¡Incluso inicié un club de reciclaje en mi escuela!"
                  <footer className="text-right mt-2">- María, 12 años</footer>
                </blockquote>
                <blockquote className="italic text-gray-600 border-l-4 border-tierra-leaf pl-4">
                  "Aprender sobre agricultura orgánica me ha enseñado a valorar los alimentos saludables. Ahora ayudo a
                  mis padres a cultivar nuestro propio huerto en casa."
                  <footer className="text-right mt-2">- Carlos, 10 años</footer>
                </blockquote>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-tierra-stone mb-6">Únete a Nuestra Misión</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Tu apoyo nos permite seguir transformando las vidas de más niños y niñas, creando un futuro más
                brillante y sostenible para todos.
              </p>
              <Link href="/donar">
                <Button className="bg-tierra-leaf hover:bg-tierra-moss text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300">
                  Apoya Nuestros Programas
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

