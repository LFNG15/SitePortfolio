'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTASection({ onVerPortfolio }: { onVerPortfolio?: () => void }) {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-orange-500/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10" />

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Pronto para o seu próximo{' '}
            <span className="text-gradient">sucesso</span>?
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Transformamos sua visão em realidade de uma identidade visual marcante a um sistema digital completo. Conectamos ideias a resultados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Iniciar um projeto <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.button
              onClick={onVerPortfolio}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-gray-300 font-semibold text-lg hover:bg-white/5 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver portfólio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}