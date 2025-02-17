"use client"

import { Button } from "./ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] pt-12 overflow-hidden bg-gradient-to-b from-tierra-sprout/10 to-white flex items-center">
      {/* Organic shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" fill="none">
          <path
            d="M-200,300 C100,200 400,400 700,300 C1000,200 1300,400 1600,300"
            className="text-tierra-sage/10"
            stroke="currentColor"
            strokeWidth="120"
          />
          <path
            d="M-200,400 C100,300 400,500 700,400 C1000,300 1300,500 1600,400"
            className="text-tierra-leaf/10"
            stroke="currentColor"
            strokeWidth="120"
          />
          <path
            d="M-200,500 C100,400 400,600 700,500 C1000,400 1300,600 1600,500"
            className="text-tierra-moss/10"
            stroke="currentColor"
            strokeWidth="120"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 pt-8">
          <div className="flex-1 text-center lg:text-left animate-fade-in-up" style={{ height: "500px" }}>
            <h1 className="text-4xl md:text-5xl font-bold text-tierra-stone mb-6 leading-tight">
              Transformando Vidas: <span className="text-tierra-leaf">Niños</span> y Naturaleza Creciendo Juntos
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Cada donación nutre el futuro de un niño y fortalece nuestro planeta. Únete a nosotros en la creación de
              un mundo donde los niños y la naturaleza prosperen en armonía.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-tierra-leaf hover:bg-tierra-moss text-white px-6 py-3 text-base rounded-md font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <Link href="/donar">Donar Ahora</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-tierra-leaf text-tierra-leaf hover:bg-tierra-leaf hover:text-white px-6 py-3 text-base rounded-md font-semibold transition-colors duration-300"
              >
                <Link href="/donar">Ver Nuestro Impacto</Link>
              </Button>
            </div>
          </div>

          {/* Interactive Nature Illustration */}
          <div className="flex-1 relative animate-fade-in">
            <div className="relative w-full aspect-square">
              {/* Tree layers with sway animation */}
              <div className="absolute inset-0 animate-leaf-sway" style={{ animationDelay: "0s" }}>
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path d="M100,10 C130,40 130,80 100,110 C70,80 70,40 100,10" className="fill-tierra-leaf" />
                </svg>
              </div>
              <div className="absolute inset-0 animate-leaf-sway" style={{ animationDelay: "0.2s" }}>
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path d="M100,30 C120,50 120,80 100,100 C80,80 80,50 100,30" className="fill-tierra-moss" />
                </svg>
              </div>
              <div className="absolute inset-0 animate-leaf-sway" style={{ animationDelay: "0.4s" }}>
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path d="M100,50 C110,60 110,80 100,90 C90,80 90,60 100,50" className="fill-tierra-sage" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats with Growing Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
          {[
            { number: "10,000+", label: "Niños Beneficiados" },
            { number: "50+", label: "Proyectos Educativos" },
            { number: "100+", label: "Hectáreas Reforestadas" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-tierra-leaf mb-2">{stat.number}</div>
              <div className="text-tierra-stone text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Organic shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0,120 C480,60 960,60 1440,120 L1440,140 L0,140 Z" className="fill-white" />
        </svg>
      </div>
    </section>
  )
}

