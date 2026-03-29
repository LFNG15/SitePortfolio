'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { successCases } from '@/app/portfolioData'
import { X, ExternalLink, Play } from 'lucide-react'

const isYoutubeCaseStat = (stat: typeof successCases[0]) =>
  !!stat.url?.includes('youtube.com')

const sharedMotionProps = (index: number) => ({
  className: 'relative flex flex-row items-center gap-4 flex-1',
  initial: { opacity: 0, x: 24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay: index * 0.08 },
  whileHover: { y: -2, scale: 1.01 },
})

function YoutubeModal({ stat, onClose }: { stat: typeof successCases[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          className="relative z-10 w-full max-w-2xl rounded-3xl overflow-hidden bg-[#1A1A1A] border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 border border-white/10 text-gray-400 hover:text-white hover:bg-black/80 transition-colors"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
          <a
            href={stat.url}
            target="_blank"
            rel="noreferrer"
            className="block relative group"
          >
            <div className="relative w-full aspect-video overflow-hidden">
              <img
                src={stat.imagem}
                alt={stat.nome}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-red-600 text-white font-semibold shadow-lg">
                  <Play size={20} fill="white" />
                  <span>Assistir no YouTube</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent pointer-events-none" />
            </div>
          </a>
          <div className="px-7 py-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-semibold uppercase tracking-wide text-red-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Edição de Vídeo · YouTube
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
              {stat.nome}
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              O vídeo do canal <span className="text-white font-semibold">Universo Nerdístico Studios</span> foi
              realizado através de um trabalho de edição profissional utilizando o{' '}
              <span className="text-white font-semibold">Adobe Premiere Pro</span>, com um estilo de edição
              altamente dinâmico pensado estrategicamente para entreter e prender a atenção dos inscritos
              do canal do início ao fim.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={stat.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors text-sm"
              >
                <Play size={16} fill="white" />
                Assistir no YouTube
              </a>
              <button
                onClick={onClose}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-semibold transition-colors text-sm"
              >
                <X size={16} />
                Fechar
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function StatCardInner({ stat, index }: { stat: typeof successCases[0]; index: number }) {
  return (
    <>
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
    </>
  )
}

function StatCard({
  stat,
  index,
  onOpenModal,
}: {
  stat: typeof successCases[0]
  index: number
  onOpenModal: (stat: typeof successCases[0]) => void
}) {
  const isYoutubeCase = isYoutubeCaseStat(stat)

  if (isYoutubeCase) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        whileHover={{ y: -2, scale: 1.01 }}
        className="relative flex flex-row items-center gap-4 flex-1"
      >
        <button
          type="button"
          onClick={() => onOpenModal(stat)}
          className="relative flex flex-row items-center gap-4 flex-1 cursor-pointer text-left bg-transparent border-0 p-0 w-full"
        >
          <StatCardInner stat={stat} index={index} />
        </button>
      </motion.div>
    )
  }

  if (stat.url) {
    return (
      <motion.a href={stat.url} target="_blank" rel="noreferrer" {...sharedMotionProps(index)}>
        <StatCardInner stat={stat} index={index} />
      </motion.a>
    )
  }

  return (
    <motion.div {...sharedMotionProps(index)}>
      <StatCardInner stat={stat} index={index} />
    </motion.div>
  )
}

export function SuccessCasesSection() {
  const [modalCase, setModalCase] = useState<typeof successCases[0] | null>(null)

  return (
    <section id="success-cases" className="relative min-h-screen flex flex-col py-12 md:py-16">
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
                  src="/BannerSuccessCasesSection/banner_code_edit.jpeg"
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
                    Edição e programação unidas para criar resultados reais!
                  </h3>
                  <p className="text-gray-300 font-medium text-base md:text-lg">
                    Atuamos nos dois pilares mais importantes da tecnologia moderna: Narrativas visuais e desenvolvimento de software.
                  </p>
                </div>
                <p className="text-gray-400 text-sm md:text-base max-w-xl mb-4">
                  Combinamos edição profissional e código limpo para entregar produtos que escalam e encantam usuários.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs md:text-sm text-gray-300">
                  <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm">
                    <p className="font-semibold mb-1 text-white">Edição & Motion</p>
                    <p className="text-gray-400">Vídeos, Reels e animações com storytelling pensado para retenção.</p>
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
                <StatCard key={stat.nome} stat={stat} index={index} onOpenModal={setModalCase} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalCase && (
        <YoutubeModal stat={modalCase} onClose={() => setModalCase(null)} />
      )}
    </section>
  )
}
