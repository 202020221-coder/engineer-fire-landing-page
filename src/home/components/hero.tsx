import { Button } from '@/shared/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-secondary/90 py-20 sm:py-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-white">Protección Profesional Contra Incendios</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Seguridad Integral Para Tu Negocio
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Soluciones avanzadas de prevención y respuesta ante incendios. Con más de 20 años de experiencia, protegemos lo que es importante para ti.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              Solicitar Consulta <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 text-white hover:bg-primary/10"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
