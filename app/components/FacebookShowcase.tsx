"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "./ui/card"
import { Facebook } from "lucide-react"

// This is a mock function to simulate fetching Facebook posts
// In a real application, you would use the Facebook Graph API
const fetchFacebookPosts = async () => {
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: "1",
      content:
        "¡Increíble día en nuestro taller de jardinería para niños! Gracias a todos los pequeños jardineros que participaron. 🌱👧👦 #TierraSabia #EducaciónAmbiental",
      likes: 120,
      comments: 15,
      shares: 8,
      date: "2023-06-15",
    },
    {
      id: "2",
      content:
        "Hoy celebramos el Día Mundial del Medio Ambiente con una jornada de limpieza en nuestra comunidad. ¡Juntos podemos hacer la diferencia! 🌍♻️ #DíaMundialDelMedioAmbiente #TierraSabia",
      likes: 85,
      comments: 10,
      shares: 12,
      date: "2023-06-05",
    },
    {
      id: "3",
      content:
        "Nuestro programa de educación ambiental llegó a su 50ª escuela este mes. ¡Estamos formando a la próxima generación de defensores del planeta! 🏫🌿 #EducaciónAmbiental #TierraSabia",
      likes: 150,
      comments: 20,
      shares: 25,
      date: "2023-05-28",
    },
  ]
}

export default function FacebookShowcase() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFacebookPosts().then((fetchedPosts) => {
      setPosts(fetchedPosts)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div className="text-center py-8">Cargando publicaciones de Facebook...</div>
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-tierra-stone mb-8 flex items-center">
          <Facebook className="mr-2 text-[#1877F2]" size={32} />
          Nuestras Últimas Publicaciones en Facebook
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{post.likes} Me gusta</span>
                  <span>{post.comments} Comentarios</span>
                  <span>{post.shares} Compartidos</span>
                </div>
                <div className="mt-4 text-right">
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://www.facebook.com/profile.php?id=61571575051495"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1877F2] text-white px-6 py-2 rounded-md hover:bg-[#166FE5] transition-colors"
          >
            Visitar nuestra página de Facebook
          </a>
        </div>
      </div>
    </section>
  )
}

