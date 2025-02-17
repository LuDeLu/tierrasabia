"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Menu, X, Home } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center justify-center">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Fundación Tierra Sabia
              </span>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Home className="h-5 w-5" />
                <span className="sr-only">Volver al inicio</span>
              </Button>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/nuestro-impacto" className="text-gray-600 hover:text-primary transition-colors">
              Nuestro Impacto
            </Link>
            <Link href="/impacto-en-ninos" className="text-gray-600 hover:text-tierra-leaf transition-colors">
              Impacto en Niños
            </Link>
            <Link href="/programas" className="text-gray-600 hover:text-primary transition-colors">
              Programas
            </Link>
            <Link href="/historias" className="text-gray-600 hover:text-primary transition-colors">
              Historias
            </Link>
            <Button className="bg-tierra-leaf hover:bg-tierra-moss text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg">
              <Link href="/donar">Donar ahora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
                <span className="sr-only">Volver al inicio</span>
              </Button>
            </Link>
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="/nuestro-impacto"
                className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nuestro Impacto
              </Link>
              <Link
                href="/impacto-en-ninos"
                className="text-gray-600 hover:text-tierra-leaf transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Impacto en Niños
              </Link>
              <Link
                href="/programas"
                className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Programas
              </Link>
              <Link
                href="/historias"
                className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Historias
              </Link>
              <div className="space-y-2 p-4">
                <Button className="w-full bg-tierra-leaf hover:bg-tierra-moss text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg">
                  <Link href="/donar">Donar ahora</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

