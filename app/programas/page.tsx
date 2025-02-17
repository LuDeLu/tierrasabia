import Header from "../components/Header"
import Footer from "../components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import Link from "next/link"
import { Leaf, BookOpen, Users, Globe, Sprout, Heart } from "lucide-react"

export default function Programas() {
  const programas = [
    {
      title: "Educación Ambiental",
      description:
        "Talleres interactivos que enseñan a los niños sobre la importancia de la conservación y la sostenibilidad. Incluye actividades prácticas como identificación de especies, reciclaje creativo y experimentos ecológicos.",
      icon: BookOpen,
    },
    {
      title: "Huertos Escolares",
      description:
        "Creación de huertos en escuelas para enseñar sobre agricultura sostenible y nutrición. Los niños aprenden a cultivar sus propios alimentos, entender los ciclos naturales y la importancia de una alimentación saludable.",
      icon: Leaf,
    },
    {
      title: "Liderazgo Juvenil",
      description:
        "Programas que desarrollan habilidades de liderazgo y empoderan a los jóvenes para ser agentes de cambio. Incluye talleres de comunicación, resolución de problemas y gestión de proyectos comunitarios.",
      icon: Users,
    },
    {
      title: "Proyectos de Conservación",
      description:
        "Iniciativas prácticas de conservación que involucran a los niños en la protección de ecosistemas locales. Incluye actividades como reforestación, limpieza de playas y creación de hábitats para especies nativas.",
      icon: Globe,
    },
    {
      title: "Eco-Innovadores",
      description:
        "Un programa que fomenta la creatividad y la innovación para resolver problemas ambientales. Los niños aprenden sobre tecnologías verdes y desarrollan sus propios proyectos eco-amigables.",
      icon: Sprout,
    },
    {
      title: "Embajadores del Planeta",
      description:
        "Este programa forma a jóvenes para que se conviertan en voceros de la causa ambiental en sus comunidades. Aprenden habilidades de comunicación y organización de campañas de concientización.",
      icon: Heart,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-tierra-sprout/10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-tierra-stone mb-8 text-center">Nuestros Programas</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
              Diseñamos e implementamos programas innovadores que combinan la educación ambiental con el desarrollo
              integral de los niños, creando un impacto duradero en sus vidas y en el planeta.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {programas.map((programa, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <programa.icon className="w-12 h-12 text-tierra-leaf mb-4" />
                    <CardTitle className="text-2xl font-semibold text-tierra-stone">{programa.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{programa.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h2 className="text-3xl font-bold text-tierra-stone mb-6 text-center">Impacto de Nuestros Programas</h2>
              <ul className="space-y-4 max-w-2xl mx-auto">
                <li className="flex items-center">
                  <span className="text-tierra-leaf mr-2">✓</span>
                  Más del 90% de los niños participantes muestran una mejora significativa en su comprensión de temas
                  ambientales.
                </li>
                <li className="flex items-center">
                  <span className="text-tierra-leaf mr-2">✓</span>
                  El 80% de las escuelas con huertos escolares han visto una mejora en los hábitos alimenticios de sus
                  estudiantes.
                </li>
                <li className="flex items-center">
                  <span className="text-tierra-leaf mr-2">✓</span>
                  Los jóvenes líderes de nuestros programas han iniciado más de 50 proyectos comunitarios de impacto
                  ambiental.
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-tierra-stone mb-6">Apoya Nuestros Programas</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Tu contribución nos permite seguir desarrollando y expandiendo estos programas vitales, llegando a más
                niños y comunidades cada año.
              </p>
              <Link href="/donar">
                <Button className="bg-tierra-leaf hover:bg-tierra-moss text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300">
                  Haz una Donación
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

