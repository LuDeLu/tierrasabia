import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"

export default function Programs() {
  const programs = [
    {
      title: "Educación para el Futuro",
      description: "Programas educativos innovadores que preparan a los niños para los desafíos del mañana.",
      icon: "📚",
      color: "bg-trust-primary",
    },
    {
      title: "Agroecología Sostenible",
      description: "Capacitación en prácticas agrícolas sostenibles para comunidades rurales.",
      icon: "🌱",
      color: "bg-trust-secondary",
    },
    {
      title: "Conservación Ambiental",
      description: "Iniciativas de protección y restauración de ecosistemas locales.",
      icon: "🌳",
      color: "bg-trust-accent",
    },
  ]

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-trust-primary mb-12">Nuestros Programas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className={`${program.color} text-white rounded-t-lg`}>
                <CardTitle className="text-2xl sm:text-3xl font-semibold flex items-center justify-center h-20">
                  <span className="text-4xl sm:text-5xl mr-2">{program.icon}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-trust-primary">{program.title}</h3>
                <CardDescription className="text-gray-600">{program.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

