import { Card, CardContent, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { Heart, Share2 } from "lucide-react"

export default function FeaturedCampaigns() {
  const campaigns = [
    {
      title: "Huerto Escolar Sostenible",
      description: "Ayúdanos a crear un huerto escolar que alimentará a 200 niños y enseñará prácticas sostenibles.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 15000,
      goal: 25000,
      supporters: 123,
    },
    {
      title: "Reforestación Comunitaria",
      description: "Proyecto de reforestación que busca plantar 5,000 árboles nativos con la comunidad local.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 8500,
      goal: 12000,
      supporters: 89,
    },
    {
      title: "Educación Ambiental",
      description: "Programa educativo que llevará talleres de consciencia ambiental a 10 escuelas rurales.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 12000,
      goal: 20000,
      supporters: 156,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Campañas Destacadas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre proyectos inspiradores que están transformando comunidades y el medio ambiente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={campaign.image || "/placeholder.svg"}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-colors">
                    <Heart size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-colors">
                    <Share2 size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>

              <CardHeader className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{campaign.title}</h3>
                <p className="text-gray-600">{campaign.description}</p>
              </CardHeader>

              <CardContent className="p-6 pt-0">
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>${campaign.raised.toLocaleString()} recaudados</span>
                    <span>de ${campaign.goal.toLocaleString()}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{campaign.supporters} donadores</span>
                  <Button className="bg-primary hover:bg-primary-dark text-white">Donar</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            Ver todas las campañas
          </Button>
        </div>
      </div>
    </section>
  )
}

