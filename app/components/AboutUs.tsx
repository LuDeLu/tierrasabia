import { Card, CardContent } from "./ui/card"
import { Heart, Globe, BookOpen, Users, Scale } from "lucide-react"

export default function AboutUs() {
  const values = [
    { name: "Empatía", icon: Heart, description: "Nos conectamos con las necesidades de los niños y la naturaleza." },
    {
      name: "Conciencia ambiental",
      icon: Globe,
      description: "Promovemos la comprensión y cuidado de nuestro planeta.",
    },
    {
      name: "Educación transformadora",
      icon: BookOpen,
      description: "Inspiramos cambios positivos a través del aprendizaje.",
    },
    { name: "Inclusión", icon: Users, description: "Valoramos y respetamos la diversidad en todas sus formas." },
    { name: "Justicia social", icon: Scale, description: "Trabajamos por la equidad y el bienestar de todos." },
  ]

  return (
    <section id="about" className="py-20 bg-tierra-sprout/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-tierra-stone mb-4">Nuestra Misión</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En Fundación Tierra Sabia, nos dedicamos a crear un futuro sostenible donde los niños y la naturaleza
            prosperen en armonía. Trabajamos incansablemente para implementar programas innovadores que combinen el
            bienestar infantil, la educación y la conciencia ambiental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-tierra-stone">Nuestra Historia</h3>
            <p className="text-gray-600">
              Fundada en 2010, Tierra Sabia nació de la visión de un grupo de educadores y ambientalistas apasionados.
              Comenzamos con pequeños proyectos locales y hemos crecido hasta impactar a miles de niños y comunidades en
              todo el país.
            </p>
            <p className="text-gray-600">
              A lo largo de los años, hemos desarrollado programas innovadores que integran la educación ambiental con
              el desarrollo infantil, creando experiencias transformadoras que inspiran a las nuevas generaciones a ser
              guardianes de la Tierra.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Niños plantando árboles"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-tierra-stone text-center mb-8">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <value.icon className="w-12 h-12 text-tierra-leaf mb-4" />
                  <h4 className="text-xl font-semibold text-tierra-stone mb-2">{value.name}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-tierra-stone mb-6">Nuestro Impacto</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-tierra-leaf mb-2">10,000+</p>
              <p className="text-gray-600">Niños beneficiados</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-tierra-leaf mb-2">100+</p>
              <p className="text-gray-600">Hectáreas reforestadas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-tierra-leaf mb-2">50+</p>
              <p className="text-gray-600">Comunidades impactadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

