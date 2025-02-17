import Header from "../components/Header"
import Footer from "../components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import Link from "next/link"

export default function Historias() {
  const historias = [
    {
      title: "María: De estudiante a líder ambiental",
      content:
        "María, de 14 años, pasó de ser una estudiante tímida a una apasionada líder ambiental en su comunidad después de participar en nuestro programa de liderazgo juvenil. Ahora lidera campañas de reciclaje y ha inspirado a su escuela a adoptar prácticas más sostenibles.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "El huerto escolar que transformó una comunidad",
      content:
        "La escuela primaria de San Juan implementó nuestro programa de huertos escolares, lo que no solo mejoró la nutrición de los estudiantes, sino que también se convirtió en un proyecto comunitario que unió a todo el pueblo. Ahora, las familias están replicando el modelo en sus hogares.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Juan: Protegiendo las tortugas marinas",
      content:
        "Juan, de 10 años, inspirado por nuestros talleres de conservación, inició un proyecto para proteger los nidos de tortugas marinas en su playa local, involucrando a toda su comunidad. Su iniciativa ha logrado aumentar en un 30% la tasa de supervivencia de las crías de tortuga.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "La reforestación que revivió un río",
      content:
        "Un grupo de estudiantes de secundaria, guiados por nuestro programa de educación ambiental, lideró un proyecto de reforestación que ayudó a recuperar el caudal de un río local que se estaba secando. Después de plantar 5,000 árboles nativos, el río ha comenzado a fluir nuevamente.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Ana: La pequeña científica del clima",
      content:
        "Ana, de 12 años, se inspiró tanto en nuestro programa de Eco-Innovadores que creó su propia estación meteorológica casera. Ahora recolecta datos climáticos para su comunidad y educa a otros sobre el cambio climático.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "El club de reciclaje que revolucionó una escuela",
      content:
        "Inspirados por nuestros talleres, un grupo de estudiantes formó un club de reciclaje en su escuela. En solo un año, lograron reducir los residuos escolares en un 60% y recaudaron fondos para proyectos ambientales vendiendo artesanías hechas con materiales reciclados.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-tierra-sprout/10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-tierra-stone mb-8 text-center">Historias de Impacto</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
              Cada historia representa una vida transformada y un paso más hacia un futuro sostenible. Conoce cómo
              nuestros programas están haciendo una diferencia real en la vida de los niños y sus comunidades.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {historias.map((historia, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow overflow-hidden">
                  <img
                    src={historia.image || "/placeholder.svg"}
                    alt={historia.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-tierra-stone">{historia.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{historia.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h2 className="text-3xl font-bold text-tierra-stone mb-6 text-center">El Impacto de Tu Apoyo</h2>
              <p className="text-xl text-gray-600 mb-8 text-center">
                Estas historias son posibles gracias al generoso apoyo de personas como tú. Cada donación, sin importar
                su tamaño, contribuye a crear más historias de éxito y a formar una nueva generación de guardianes del
                planeta.
              </p>
              <div className="text-center">
                <Link href="/donar">
                  <Button className="bg-tierra-leaf hover:bg-tierra-moss text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300">
                    Haz tu Aporte Hoy
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

