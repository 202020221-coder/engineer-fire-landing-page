'use client'

import { useState } from 'react'
import { Card } from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Textarea } from '@/shared/components/ui/textarea'
import { Lightbulb, CheckCircle } from 'lucide-react'

export default function CustomService({ onAddToCart }) {
  const [formData, setFormData] = useState({
    serviceName: '',
    description: '',
    estimatedBudget: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.serviceName && formData.description) {
      // Agregar servicio personalizado al carrito
      onAddToCart({
        name: `Servicio Personalizado: ${formData.serviceName}`,
        price: formData.estimatedBudget ? parseFloat(formData.estimatedBudget) : 0,
        type: 'custom_service',
        description: formData.description,
      })

      setSubmitted(true)
      setFormData({
        serviceName: '',
        description: '',
        estimatedBudget: '',
      })

      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-secondary mb-2">Personaliza tus Servicios</h3>
          <p className="text-muted-foreground">
            ¿No encuentras lo que buscas? Solicita un servicio personalizado a tu medida
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
          <div>
            <p className="font-semibold text-green-900">Solicitud enviada</p>
            <p className="text-sm text-green-700">Tu servicio personalizado ha sido agregado. Nos contactaremos pronto.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Nombre del Servicio
            </label>
            <Input
              type="text"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              placeholder="Ej: Inspección de Rutas de Evacuación"
              className="border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Descripción del Servicio
            </label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Cuéntanos qué necesitas específicamente. Incluye detalles como ubicación, cantidad de personal, horarios, etc."
              className="border-gray-300 min-h-[100px]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Presupuesto Estimado (Opcional)
            </label>
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold mr-2">$</span>
              <Input
                type="number"
                name="estimatedBudget"
                value={formData.estimatedBudget}
                onChange={handleChange}
                placeholder="0.00"
                className="border-gray-300"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2"
          >
            Solicitar Servicio Personalizado
          </Button>
        </form>
      )}
    </Card>
  )
}
