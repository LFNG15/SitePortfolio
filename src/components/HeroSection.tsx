import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { heroProjects as projects } from '@/app/portfolioData'

function HeroSlide({ project, isActive, onVerProjeto }: { project: typeof projects[0]; isActive: boolean; onVerProjeto: () => void }) {
  const isPresentation = Boolean((project as any).ctaHref)
  const ctaLabel: string = (project as any).ctaLabel ?? 'Ver projeto'
  const ctaHref: string | undefined = (project as any).ctaHref
  const subtitle: string | undefined = (project as any).subtitle

  return (
    <motion.div className="absolute inset-0" initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.1 }} transition={{ duration: 0.8, ease: 'easeInOut' }}>
      {project.image && !project.image.startsWith('/') && (
        <>
          <div className="absolute inset-0 z-0">
            <img src={project.image} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 z-[1] bg-black/50 bg-gradient-to-br from-black/60 to-transparent" aria-hidden />
        </>
      )}
      <div className={`absolute inset-0 z-[1] bg-gradient-to-br ${project.gradient} ${project.image && !project.image.startsWith('/') ? 'opacity-30' : ''}`} />

      {isPresentation && (
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 30% 55%, ${project.color}22 0%, transparent 70%),
                         radial-gradient(ellipse 30% 40% at 20% 60%, ${project.color}15 0%, transparent 60%)`,
          }}
        />
      )}

      <div className="absolute inset-0 overflow-hidden z-[1]">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full opacity-30"
          style={{ background: `radial-gradient(circle, ${project.color}40 0%, transparent 70%)` }}
          animate={isActive ? { scale: [1, 1.2, 1], rotate: [0, 180, 360] } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border"
                style={{ borderColor: `${project.color}50`, backgroundColor: `${project.color}15`, color: project.color }}
              >
                {project.category}
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={isPresentation ? { color: '#ffffff' } : undefined}
            >
              {project.title}
            </motion.h2>

            {subtitle && (
              <motion.p
                className="text-sm md:text-base font-medium tracking-widest uppercase mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isActive ? 0.6 : 0, y: isActive ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{ color: project.color }}
              >
                {subtitle}
              </motion.p>
            )}

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {ctaHref ? (
                <motion.a
                  href={ctaHref}
                  className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black transition-all duration-300"
                  style={{ backgroundColor: project.color }}
                  whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${project.color}60` }}
                  whileTap={{ scale: 0.98 }}
                >
                  {ctaLabel} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              ) : (
                <motion.button
                  className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black transition-all duration-300"
                  style={{ backgroundColor: project.color }}
                  whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${project.color}60` }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onVerProjeto}
                >
                  {ctaLabel} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function HeroSection({
  onVerProjeto,
  onSlideChange,
}: {
  onVerProjeto: (category: string) => void
  onSlideChange?: (index: number) => void
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)

  const { scrollY } = useScroll()
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1])
  const carouselDarken = useTransform(scrollY, [0, 700], [0, 1])
  const carouselDarkenSmooth = useSpring(carouselDarken, { stiffness: 400, damping: 40 })

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => {
      const threshold = typeof window !== 'undefined' ? window.innerHeight * 0.45 : 400
      setIsCarouselPaused(y > threshold)
    })
    return unsubscribe
  }, [scrollY])

  useEffect(() => {
    onSlideChange?.(currentSlide)
  }, [currentSlide, onSlideChange])

  useEffect(() => {
    if (isCarouselPaused) return
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % projects.length), 8500)
    return () => clearInterval(timer)
  }, [isCarouselPaused])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projects.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/download/hero-2.png)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </motion.div>
      <div className="relative h-full z-0">
        <AnimatePresence mode="wait">
          {projects.map((project, index) => currentSlide === index && (
            <HeroSlide key={project.id} project={project} isActive={currentSlide === index} onVerProjeto={() => onVerProjeto(project.category)} />
          ))}
        </AnimatePresence>
      </div>
      <motion.div className="absolute inset-0 bg-[#0a0a0a] pointer-events-none z-10" style={{ opacity: carouselDarkenSmooth }} />
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  className="group relative h-1 rounded-full overflow-hidden transition-all duration-300"
                  style={{
                    width: currentSlide === index ? '60px' : '40px',
                    backgroundColor: currentSlide === index ? project.color : 'rgba(255,255,255,0.2)',
                  }}
                  onClick={() => setCurrentSlide(index)}
                >
                  {currentSlide === index && (
                    <div
                      className="absolute inset-y-0 left-0 bg-white/30"
                      style={{
                        animationName: 'carousel-progress',
                        animationDuration: '10s',
                        animationTimingFunction: 'linear',
                        animationFillMode: 'forwards',
                        animationPlayState: isCarouselPaused ? 'paused' : 'running',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                onClick={() => setIsCarouselPaused((p) => !p)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isCarouselPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
              </motion.button>
              <motion.button
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-orange-500"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

