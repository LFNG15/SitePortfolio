import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { successCases } from '@/app/portfolioData'

function StatCard({ stat, index, startAnimation }: { stat: typeof successCases[0]; index: number; startAnimation: boolean }) {
  return (
    <>
      {stat.url ? (
        <motion.a
          href={stat.url}
          target="_blank"
          rel="noreferrer"
          className="relative flex flex-row items-center gap-4 flex-1"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          whileHover={{ y: -2, scale: 1.01 }}
        >
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shrink-0">
            <img
              src={stat.imagem}
              alt={stat.nome}
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>
          <div className="relative z-10 flex flex-col justify-center flex-1">
            <span className="text-xs text-orange-300/80 font-semibold tracking-[0.18em] uppercase mb-1">
              Case {index + 1}
            </span>
            <p className="text-sm md:text-base font-semibold text-white mb-1">
              {stat.nome}
            </p>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              {stat.descrição}
            </p>
          </div>
        </motion.a>
      ) : (
        <motion.div
          className="relative flex flex-row items-center gap-4 flex-1"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          whileHover={{ y: -2, scale: 1.01 }}
        >
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shrink-0">
            <img
              src={stat.imagem}
              alt={stat.nome}
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>
          <div className="relative z-10 flex flex-col justify-center flex-1">
            <span className="text-xs text-orange-300/80 font-semibold tracking-[0.18em] uppercase mb-1">
              Case {index + 1}
            </span>
            <p className="text-sm md:text-base font-semibold text-white mb-1">
              {stat.nome}
            </p>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              {stat.descrição}
            </p>
          </div>
        </motion.div>
      )}
    </>
  )
}

export function SuccessCasesSection() {
  const [statsInView, setStatsInView] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStatsInView(true)
        })
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) observer.observe(statsRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="success-cases" ref={statsRef} className="relative min-h-screen flex flex-col py-12 md:py-16">
      <div className="container mx-auto px-6 flex-1 flex flex-col min-h-0 relative z-10">
        <div className="w-full max-w-7xl mx-auto h-full flex items-stretch">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 w-full min-h-[95vh] items-stretch">
            <motion.div
              className="lg:col-span-7 relative rounded-3xl overflow-hidden group h-full flex flex-col bg-[#1A1A1A]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative w-full h-56 md:h-64 shrink-0 overflow-hidden">
                <img
                  src="/segundoedit.gif"
                  alt="Banner de sucesso"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </div>
              <div className="relative z-10 px-8 py-4 md:px-10 md:py-6 flex flex-col justify-start flex-grow">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold uppercase tracking-wide text-orange-300 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                    Estúdio digital
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                    Edição e programação unidas para criar resultados reais
                  </h3>
                  <p className="text-gray-300 font-medium text-base md:text-lg">
                    Atuamos nos dois pilares mais importantes da tecnologia moderna: narrativa visual e desenvolvimento de software.
                  </p>
                </div>
                <p className="text-gray-400 text-sm md:text-base max-w-xl mb-4">
                  Combinamos edição profissional e código de alta performance para entregar produtos que escalam, performam bem e encantam usuários.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs md:text-sm text-gray-300">
                  <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm">
                    <p className="font-semibold mb-1 text-white">Edição & Motion</p>
                    <p className="text-gray-400">Vídeos, reels e animações com storytelling pensado para retenção.</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm">
                    <p className="font-semibold mb-1 text-white">Experiência Digital</p>
                    <p className="text-gray-400">Interfaces rápidas, responsivas e focadas na experiência do usuário.</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm">
                    <p className="font-semibold mb-1 text-white">Resultados Mensuráveis</p>
                    <p className="text-gray-400">Projetos guiados por métricas, conversão e crescimento real.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-5 flex flex-col gap-4 h-full">
              {successCases.map((stat, index) => (
                <StatCard key={stat.nome} stat={stat} index={index} startAnimation={statsInView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

