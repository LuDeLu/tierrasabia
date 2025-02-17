"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { ShoppingCartIcon as PayPal, CreditCard, BanknoteIcon as Bank, Copy } from "lucide-react"

export default function Donar() {
  const [donationAmount, setDonationAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("mercadopago")

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar la donación
    if (paymentMethod === "mercadopago") {
      // Redirigir a Mercado Pago con el monto seleccionado
      window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${donationAmount}`
    } else {
      alert(`Gracias por tu donación de $${donationAmount} a través de ${paymentMethod}`)
    }
  }

  const mercadoPagoOptions = [
    { amount: 500, prefId: "123456789" },
    { amount: 1000, prefId: "234567890" },
    { amount: 2000, prefId: "345678901" },
    { amount: 5000, prefId: "456789012" },
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("¡Copiado al portapapeles!")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-tierra-sprout/10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-tierra-stone mb-8 text-center">Haz una Donación</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
              Tu generosidad ayuda a crear un futuro más verde y justo para los niños y el planeta. Cada donación, sin
              importar su tamaño, hace una diferencia significativa.
            </p>

            {/* Mercado Pago Section */}
            <div className="mb-12 bg-[#3498DB] text-white rounded-lg overflow-hidden">
              <div className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-6">
                  ¡Ahora podés colaborar con nosotros a través de Mercado Pago!
                </h2>
                <div className="bg-white/10 rounded-lg p-6 max-w-2xl mx-auto">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                    <div className="text-left">
                      <p className="font-semibold">ALIAS:</p>
                      <p className="text-lg">tierra.sabia.mp</p>
                    </div>
                    <Button
                      variant="secondary"
                      onClick={() => copyToClipboard("tierra.sabia.mp")}
                      className="bg-white/20 hover:bg-white/30"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copiar
                    </Button>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-left">
                      <p className="font-semibold">CVU:</p>
                      <p className="text-lg">0000003100090624409608</p>
                    </div>
                    <Button
                      variant="secondary"
                      onClick={() => copyToClipboard("0000003100090624409608")}
                      className="bg-white/20 hover:bg-white/30"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copiar
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 p-6">
                <div className="flex flex-wrap justify-center gap-4">
                  {mercadoPagoOptions.map((option) => (
                    <a
                      key={option.amount}
                      href={`https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${option.prefId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-white hover:bg-white/90 text-[#3498DB]">Donar ${option.amount}</Button>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Payment Methods */}
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-tierra-stone">Otras Formas de Donar</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDonate} className="space-y-6">
                  <div>
                    <Label htmlFor="amount">Monto de la donación ($)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Ingresa el monto"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label>Método de pago</Label>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="flex flex-col space-y-2 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="flex items-center">
                          <PayPal className="w-6 h-6 mr-2" />
                          PayPal
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="creditcard" id="creditcard" />
                        <Label htmlFor="creditcard" className="flex items-center">
                          <CreditCard className="w-6 h-6 mr-2" />
                          Tarjeta de Crédito
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="banktransfer" id="banktransfer" />
                        <Label htmlFor="banktransfer" className="flex items-center">
                          <Bank className="w-6 h-6 mr-2" />
                          Transferencia Bancaria
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Button type="submit" className="w-full bg-tierra-leaf hover:bg-tierra-moss text-white">
                    Donar Ahora
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

