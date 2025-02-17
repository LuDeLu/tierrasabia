import { Button } from "./ui/button"

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para hacer la diferencia?</h2>
          <p className="text-xl text-white/90 mb-8">
            Cada contribución cuenta. Únete a nuestra comunidad de changemakers y ayuda a construir un futuro más verde
            y justo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
              Iniciar una campaña
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 px-8">
              Hacer una donación
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

