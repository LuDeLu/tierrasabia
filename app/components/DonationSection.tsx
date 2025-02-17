"use client"

import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Heart, Book, SproutIcon as Seedling } from "lucide-react"
import Link from "next/link"

export default function DonationSection() {
  const donationOptions = [
    {
      amount: 50,
      description: "Proporciona material educativo para 5 niños",
      icon: Book,
    },
    {
      amount: 100,
      description: "Planta 20 árboles en áreas escolares",
      icon: Seedling,
    },
    {
      amount: 200,
      description: "Financia un taller de educación ambiental para una clase",
      icon: Heart,
    },
  ]

  return (
    <section className="py-20 bg-tierra-sprout/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-tierra-stone mb-4">Tu Donación, Su Futuro</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada contribución, por pequeña que sea, tiene un impacto significativo en la vida de los niños y en la salud
            de nuestro planeta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {donationOptions.map((option, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-tierra-leaf">${option.amount}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <option.icon className="w-12 h-12 mx-auto mb-4 text-tierra-moss" />
                  <p className="text-gray-600">{option.description}</p>
                  <Button className="mt-6 bg-tierra-leaf hover:bg-tierra-moss text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300">
                    <Link href="/donar">Donar ${option.amount}</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg text-gray-600 mb-6">¿Prefieres donar una cantidad diferente?</p>
          <Button
            size="lg"
            className="bg-tierra-stone hover:bg-tierra-leaf text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
          >
            <Link href="/donar">Donación Personalizada</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

