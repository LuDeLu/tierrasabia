import { Card, CardContent } from "./ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "La Fundación Tierra Sabia ha transformado nuestra comunidad. Sus programas han empoderado a nuestros niños y nos han enseñado prácticas sostenibles que están mejorando nuestras vidas.",
      author: "María Rodríguez",
      role: "Líder Comunitaria",
    },
    {
      quote:
        "Como donante, estoy impresionado por la transparencia y el impacto medible de la Fundación. Cada informe muestra claramente cómo nuestras contribuciones están haciendo una diferencia real.",
      author: "Carlos Mendoza",
      role: "Empresario y Donante",
    },
    {
      quote:
        "Los programas educativos de la Fundación han abierto un mundo de posibilidades para nuestros estudiantes. Están aprendiendo habilidades cruciales para el futuro mientras desarrollan una profunda conexión con la naturaleza.",
      author: "Ana Gómez",
      role: "Directora de Escuela",
    },
  ]

  return (
    <section className="py-20 bg-trust-light">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-trust-primary mb-12">Testimonios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-trust-primary font-semibold">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

