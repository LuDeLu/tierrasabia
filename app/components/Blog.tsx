import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Button } from "./ui/button"

export default function Blog() {
  const posts = [
    {
      title: "El impacto de la agroecología en comunidades rurales",
      excerpt: "Descubre cómo nuestros programas están transformando vidas y ecosistemas.",
      date: "15 Mayo, 2023",
      color: "bg-kid-green",
    },
    {
      title: "Educación ambiental: formando líderes del mañana",
      excerpt: "Cómo estamos inspirando a la próxima generación de defensores del medio ambiente.",
      date: "2 Junio, 2023",
      color: "bg-kid-blue",
    },
    {
      title: "Historias de éxito: el viaje de María",
      excerpt: "La inspiradora historia de una niña que pasó de estudiante a mentora en nuestra fundación.",
      date: "20 Junio, 2023",
      color: "bg-kid-yellow",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-kid-purple bg-opacity-10">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center text-kid-purple mb-12">Blog y Noticias</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow overflow-hidden">
              <div className={`h-2 ${post.color}`}></div>
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-semibold text-kid-blue mb-2">{post.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500 mb-4">{post.date}</CardDescription>
                <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-kid-purple hover:bg-kid-blue text-white transition-colors">Ver Más Artículos</Button>
        </div>
      </div>
    </section>
  )
}

