'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const pillars = [
  {
    word: 'Lumen',
    subtitle: 'O nosso DNA criativo',
    body: 'É o brilho da ideia inicial, a precisão de uma renderização 3D e a estética que torna uma marca inesquecível. Entendemos que o design é o que traz clareza ao mundo digital.',
    accent: '#f97316',
    gradient: 'from-orange-500/10 to-amber-500/5',
    border: 'border-orange-500/20',
    number: '01',
  },
  {
    word: 'Connection',
    subtitle: 'A nossa base técnica',
    body: 'Inspirados pela filosofia de construir pontes onde antes havia isolamento, unimos programação, branding e audiovisual para criar ecossistemas que funcionam. Não entregamos apenas arquivos; entregamos infraestruturas que conectam sua marca ao público final.',
    accent: '#3b82f6',
    gradient: 'from-blue-500/10 to-cyan-500/5',
    border: 'border-blue-500/20',
    number: '02',
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const lineScale = useTransform(scrollYProgress, [0.1, 0.6], [0, 1])

  return (
    <section id="about" ref={sectionRef} className="relative py-3 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-orange-500/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-6">
            Sobre nós
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Lumen</span>
            <span className="text-gradient"> Connection</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Um coletivo de desenvolvedores, artistas 3D e estrategistas visuais.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">

          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-orange-500 via-blue-500 to-transparent origin-top"
              style={{ scaleY: lineScale, height: '100%' }}
            />
          </div>

          <div className="space-y-16 md:space-y-0">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.word}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className={`flex-1 rounded-2xl border ${pillar.border} bg-gradient-to-br ${pillar.gradient} p-8 md:p-10 backdrop-blur-sm`}>
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-7xl font-bold opacity-10 leading-none" style={{ color: pillar.accent }}>
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: pillar.accent }}>
                    {pillar.word}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full border-2 flex-shrink-0 z-10"
                  style={{ borderColor: pillar.accent, backgroundColor: '#0a0a0a', boxShadow: `0 0 12px ${pillar.accent}60` }}
                />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-28 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10" />
          <blockquote className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed italic">
            "Nossa missão é simples:{' '}
            <span className="text-gradient font-semibold not-italic">iluminar conceitos</span>{' '}
            e{' '}
            <span className="text-white font-semibold not-italic">conectar realidades.</span>"
          </blockquote>
          <p className="mt-6 text-gray-500 text-sm tracking-widest uppercase">
            — Lumen Connection
          </p>
        </motion.div>

      </div>
    </section>
  )
}
