import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function HowToHelp() {
  return (
    <section id="help" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-trust-primary mb-12">Cómo Ayudar</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-trust-light p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-trust-primary">Donaciones</h3>
            <p className="text-gray-700 mb-6">
              Su apoyo financiero es fundamental para el éxito de nuestros programas. Cada donación, sin importar su
              tamaño, tiene un impacto significativo en la vida de los niños y en la salud de nuestro planeta.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-trust-primary hover:bg-trust-secondary text-white transition-colors"
            >
              Donar Ahora
            </Button>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-trust-primary">Voluntariado</h3>
            <p className="text-gray-700 mb-6">
              Únase a nuestro equipo de voluntarios dedicados y contribuya directamente a nuestros proyectos. Su tiempo
              y habilidades son invaluables para nuestra misión.
            </p>
            <form className="space-y-4">
              <Input type="text" placeholder="Nombre" className="bg-white" />
              <Input type="email" placeholder="Correo Electrónico" className="bg-white" />
              <Textarea placeholder="¿Cómo le gustaría ayudar?" className="bg-white" />
              <Button
                type="submit"
                className="w-full bg-trust-secondary hover:bg-trust-primary text-white transition-colors"
              >
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

