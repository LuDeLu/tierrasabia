import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Home } from "lucide-react"
import { Button } from "./ui/button"

export default function Footer() {
  return (
    <footer className="bg-tierra-stone text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Fundación Tierra Sabia</h3>
            <p className="mb-4">Construyendo un futuro sostenible para los niños y el planeta.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-tierra-sprout transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-tierra-sprout transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="hover:text-tierra-sprout transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="hover:text-tierra-sprout transition-colors">
                <Youtube size={24} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-tierra-sprout transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tierra-sprout transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tierra-sprout transition-colors">
                  Programas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tierra-sprout transition-colors">
                  Donar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-tierra-sprout transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contáctanos</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a href="mailto:info@tierrasabia.org" className="hover:text-tierra-sprout transition-colors">
                  info@tierrasabia.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                <a href="tel:+123456789" className="hover:text-tierra-sprout transition-colors">
                  +1 (234) 567-89
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>123 Calle Eco, Ciudad Verde, País</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Boletín Informativo</h4>
            <p className="mb-4">Suscríbete para recibir noticias y actualizaciones.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-tierra-leaf hover:bg-tierra-moss px-4 py-2 rounded-r-md transition-colors"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-center space-y-4">
          <p>&copy; {new Date().getFullYear()} Fundación Tierra Sabia. Todos los derechos reservados.</p>
          <Link href="/">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <Home className="w-4 h-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}

