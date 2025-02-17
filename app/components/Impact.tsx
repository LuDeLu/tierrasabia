"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export default function Impact() {
  const [activeTab, setActiveTab] = useState("ambiental")

  const impacts = {
    ambiental: [
      { number: "100,000+", label: "Árboles plantados" },
      { number: "500", label: "Hectáreas regeneradas" },
      { number: "25", label: "Especies protegidas" },
    ],
    social: [
      { number: "15,000+", label: "Niños beneficiados" },
      { number: "50", label: "Comunidades impactadas" },
      { number: "200+", label: "Empleos generados" },
    ],
    educativo: [
      { number: "100", label: "Escuelas participantes" },
      { number: "1,000+", label: "Talleres realizados" },
      { number: "5,000+", label: "Horas de capacitación" },
    ],
  }

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Impacto</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transformando vidas y comunidades a través de acciones concretas y medibles
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg p-1 bg-background-dark">
            {Object.keys(impacts).map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                className={`relative px-6 py-2 capitalize ${activeTab === tab ? "text-white" : "text-gray-600"}`}
                onClick={() => setActiveTab(tab)}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-primary rounded-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {impacts[activeTab as keyof typeof impacts].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{item.number}</div>
                  <div className="text-gray-600">{item.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

