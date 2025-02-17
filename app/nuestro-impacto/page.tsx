import Header from "../components/Header"
import Footer from "../components/Footer"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import Link from "next/link"
import { BarChart, Users, TreesIcon as Tree, Globe } from "lucide-react"

export default function NuestroImpacto() {
  const impactData = [
    {
      title: "Niños Beneficiados",
      value: "10,000+",
      description: "Niños que han participado en nuestros programas educativos",
      icon: Users,
    },
    {
      title: "Árboles Plantados",
      value: "50,000+",
      description: "Árboles nativos plantados en proyectos de reforestación",
      icon: Tree,
    },
    {
      title: "Comunidades Impactadas",
      value: "100+",
      description: "Comunidades rurales beneficiadas por nuestros proyectos",
      icon: Globe,
    },
    {
      title: "Hectáreas Regeneradas",
      value: "500+",
      description: "Tierras recuperadas mediante prácticas agroecológicas",
      icon: BarChart,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-tierra-sprout/10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-tierra-stone mb-8 text-center">Nuestro Impacto</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
              En Fundación Tierra Sabia, nos enorgullece el impacto positivo que hemos logrado en la vida de los niños y
              en nuestro planeta. Cada número representa una vida transformada y un paso más hacia un futuro sostenible.
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
            <div className="text-center">
              <h2 className="text-3xl font-bold text-tierra-stone mb-6">Nuestros Objetivos para el Futuro</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Continuamos trabajando arduamente para expandir nuestro impacto. Nuestros objetivos para los próximos 5
                años incluyen:
              </p>
              <ul className="text-left max-w-2xl mx-auto mb-12 space-y-4">
                <li className="flex items-center">
                  <span className="text-tierra-leaf mr-2">✓</span>
                  Beneficiar a 50,000 niños más a través de nuestros programas educativos
                </li>
                <li className="flex items-center">
                  <span className="text-tierra-leaf mr-2">✓</span>
                  Plantar 1 millón de árboles nativos en áreas degradadas
                </li>
                <li className="flex items-center">
                  <span className="text-tierra-leaf mr-2">✓</span>
                  Expandir nuestros programas a 500 comunidades adicionales
                </li>
                <li className="flex items-center">
                  <span className="text-tierra-leaf mr-2">✓</span>
                  Regenerar 2,000 hectáreas de tierra mediante prácticas agroecológicas
                </li>
              </ul>
              <Link href="/donar">
                <Button className="bg-tierra-leaf hover:bg-tierra-moss text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300">
                  Apoya Nuestro Impacto
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

