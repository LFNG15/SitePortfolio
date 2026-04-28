'use client'

import { useState, memo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { successCases } from '@/app/portfolioData'
import { X, Play, ExternalLink } from 'lucide-react'
import { CornerBrackets, SectionLabel } from '@/components/ui/corner-brackets'

const isYoutubeCaseStat = (stat: typeof successCases[0]) =>
  !!stat.url?.includes('youtube.com')

const sharedMotionProps = (index: number) => ({
  className: 'relative flex flex-row items-center gap-4 flex-1 border border-white/10 bg-white/[0.02] p-4 hover:border-white/25 hover:bg-white/[0.04] transition-colors',
  initial: { opacity: 0, x: 24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay: index * 0.08 },
})

function CaseModal({ stat, onClose }: { stat: typeof successCases[0]; onClose: () => void }) {
  const isYoutube = isYoutubeCaseStat(stat)
  const labelText = isYoutube ? 'Edição · YouTube' : 'Desenvolvimento · Web'
  const labelColor = isYoutube ? '#f87171' : '#f97316'
  const ctaText = isYoutube ? 'Assistir no YouTube' : 'Visitar Site'
  const ctaIcon = isYoutube ? <Play size={14} fill="black" /> : <ExternalLink size={14} />
  const hoverCtaText = isYoutube ? 'Assistir no YouTube' : 'Visitar Site'
  const hoverCtaBg = isYoutube ? 'bg-red-600' : 'bg-orange-500'
  const hoverCtaIcon = isYoutube ? <Play size={18} fill="white" /> : <ExternalLink size={18} />

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
        <motion.div
          className="relative z-10 w-full max-w-2xl overflow-hidden bg-[#0f0f0f] border border-white/10"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          <CornerBrackets color="rgba(255,255,255,0.7)" size={14} inset={-6} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 border border-white/15 bg-black/60 text-white/70 hover:text-white hover:border-white/40 transition-colors flex items-center justify-center"
            aria-label="Fechar"
          >
            <X size={16} />
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
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`flex items-center gap-3 px-6 py-3 ${hoverCtaBg} text-white font-medium text-sm shadow-lg`}>
                  {hoverCtaIcon}
                  <span>{hoverCtaText}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent pointer-events-none" />
            </div>
          </a>
          <div className="px-7 py-6">
            <div className="mb-4">
              <SectionLabel color={labelColor}>{labelText}</SectionLabel>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 leading-tight tracking-tight">
              {stat.nome}
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
              {isYoutube ? (
                <>
                  O vídeo do canal <span className="text-white font-medium">Universo Nerdístico Studios</span> foi
                  realizado através de um trabalho de edição profissional utilizando o{' '}
                  <span className="text-white font-medium">Adobe Premiere Pro</span>, com um estilo de edição
                  altamente dinâmico pensado estrategicamente para entreter e prender a atenção dos inscritos
                  do canal do início ao fim.
                </>
              ) : (
                <>
                  O <span className="text-white font-medium">Queridas Compras</span> é um site de vitrine online
                  desenvolvido em <span className="text-white font-medium">Next.js</span>, criado para conectar
                  diversas lojas regionais de João Pessoa, PB com seus clientes, oferecendo uma experiência de
                  navegação rápida, responsiva e otimizada.
                </>
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={stat.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
              >
                {ctaIcon}
                {ctaText}
              </a>
              <button
                onClick={onClose}
                className="relative inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/15 text-white/80 text-sm font-medium tracking-wide hover:border-white/35 hover:bg-white/5 transition-colors"
              >
                <CornerBrackets />
                <X size={14} />
                Fechar
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const StatCardInner = memo(function StatCardInner({ stat, index }: { stat: typeof successCases[0]; index: number }) {
  const hasImage = !!stat.imagem && stat.imagem !== '/'

  if (!hasImage) {
    return (
      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 min-w-0 py-2">
        <span className="text-[10px] text-orange-300/80 font-medium tracking-[0.25em] uppercase mb-1.5">
          Case {String(index + 1).padStart(2, '0')}
        </span>
        <p className="text-sm md:text-base font-semibold text-white mb-1">
          {stat.nome}
        </p>
        <p className="text-white/55 text-xs md:text-sm leading-relaxed">
          {stat.descrição}
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="relative w-20 h-20 md:w-24 md:h-24 overflow-hidden border border-white/10 bg-black/40 shrink-0">
        <img
          src={stat.imagem}
          alt={stat.nome}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center flex-1 min-w-0">
        <span className="text-[10px] text-orange-300/80 font-medium tracking-[0.25em] uppercase mb-1.5">
          Case {String(index + 1).padStart(2, '0')}
        </span>
        <p className="text-sm md:text-base font-semibold text-white mb-1 truncate">
          {stat.nome}
        </p>
        <p className="text-white/55 text-xs md:text-sm leading-relaxed">
          {stat.descrição}
        </p>
      </div>
    </>
  )
})

const StatCard = memo(function StatCard({
  stat,
  index,
  onOpenModal,
}: {
  stat: typeof successCases[0]
  index: number
  onOpenModal: (stat: typeof successCases[0]) => void
}) {
  if (stat.url) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        className="relative flex flex-row items-center gap-4 flex-1 border border-white/10 bg-white/[0.02] p-4 hover:border-white/25 hover:bg-white/[0.04] transition-colors"
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

  return (
    <motion.div {...sharedMotionProps(index)}>
      <StatCardInner stat={stat} index={index} />
    </motion.div>
  )
})

export function SuccessCasesSection() {
  const [modalCase, setModalCase] = useState<typeof successCases[0] | null>(null)
  const handleOpenModal = useCallback((stat: typeof successCases[0]) => setModalCase(stat), [])
  const handleCloseModal = useCallback(() => setModalCase(null), [])

  return (
    <section id="success-cases" className="relative lg:min-h-screen flex flex-col py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-5 sm:px-6 flex-1 flex flex-col min-h-0 relative z-10">
        <div className="w-full max-w-7xl mx-auto h-full flex items-stretch">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 w-full lg:min-h-[95vh] items-stretch">
            <motion.div
              className="lg:col-span-7 relative overflow-hidden group h-full flex flex-col bg-white/[0.02] border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CornerBrackets color="rgba(255,255,255,0.6)" size={14} inset={-6} />
              <div className="relative w-full h-56 md:h-64 shrink-0 overflow-hidden">
                <img
                  src="/success-cases/banner-code-edit.jpeg"
                  alt="Banner de sucesso"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
              </div>
              <div className="relative z-10 px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 flex flex-col justify-start flex-grow">
                <div className="mb-4 sm:mb-5">
                  <SectionLabel color="#f97316">Estúdio Digital</SectionLabel>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 sm:mb-4 leading-[1.1] tracking-tight">
                  Edição e programação unidas para criar resultados reais.
                </h3>
                <p className="text-white/65 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                  Atuamos nos dois pilares mais importantes da tecnologia moderna: narrativas visuais e desenvolvimento de software.
                </p>
                <p className="text-white/50 text-xs sm:text-sm md:text-base max-w-xl mb-5 sm:mb-6">
                  Combinamos edição profissional e código limpo para entregar produtos que escalam e encantam usuários.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs md:text-sm">
                  {[
                    { title: 'Edição & Motion', body: 'Vídeos, Reels e animações com storytelling pensado para retenção.' },
                    { title: 'Experiência Digital', body: 'Interfaces rápidas, responsivas e focadas na experiência do usuário.' },
                    { title: 'Resultados Mensuráveis', body: 'Projetos guiados por métricas, conversão e crescimento real.' },
                  ].map((card) => (
                    <div key={card.title} className="relative border border-white/10 bg-white/[0.03] px-4 py-3">
                      <p className="font-semibold mb-1 text-white">{card.title}</p>
                      <p className="text-white/55">{card.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-5 flex flex-col gap-4 h-full">
              {successCases.map((stat, index) => (
                <StatCard key={`${stat.nome}-${index}`} stat={stat} index={index} onOpenModal={handleOpenModal} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalCase && (
        <CaseModal stat={modalCase} onClose={handleCloseModal} />
      )}
    </section>
  )
}