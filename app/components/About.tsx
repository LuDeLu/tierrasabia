import { Card, CardContent } from "./ui/card"

export default function About() {
  const values = [
    { name: "Integridad", icon: "⚖️" },
    { name: "Innovación", icon: "💡" },
    { name: "Colaboración", icon: "🤝" },
    { name: "Sostenibilidad", icon: "🌱" },
    { name: "Empoderamiento", icon: "💪" },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-trust-primary mb-12">Sobre Nosotros</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-trust-secondary">Nuestra Misión</h3>
            <p className="text-gray-700 mb-6">
              En Fundación Tierra Sabia, nos dedicamos a crear un futuro sostenible para los niños y el planeta.
              Trabajamos incansablemente para implementar programas innovadores que combinen el bienestar infantil, la
              educación y la conciencia ambiental.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-trust-secondary">Nuestros Valores</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="bg-trust-light hover:shadow-md transition-shadow">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <span className="text-3xl mb-2">{value.icon}</span>
                    <span className="text-trust-primary font-semibold">{value.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="bg-trust-light p-6 sm:p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-trust-primary">Nuestro Impacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-trust-accent text-2xl mr-2">✔️</span>
                <span className="text-gray-700">
                  Más de 10,000 niños beneficiados por nuestros programas educativos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-trust-accent text-2xl mr-2">✔️</span>
                <span className="text-gray-700">
                  100 hectáreas de tierra regenerada a través de prácticas agroecológicas
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-trust-accent text-2xl mr-2">✔️</span>
                <span className="text-gray-700">50 comunidades empoderadas con conocimientos en sostenibilidad</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

