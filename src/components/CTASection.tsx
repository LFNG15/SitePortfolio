import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/10" />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%)' }}
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)' }}
          animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Pronto para criar seu próximo <span className="text-gradient">SUCESSO</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Vamos colaborar e transformar sua visão em uma obra-prima digital que se destaca no cenário competitivo atual.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Iniciar um projeto <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

