'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion'
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X, 
  TrendingUp, 
  Users, 
  Award, 
  Globe,
  ExternalLink,
  Play,
  Pause,
  Code2,
  Smartphone,
  BarChart3,
  Heart,
  Share2
} from 'lucide-react'

// Dados dos projetos
const projects = [
  {
    id: 1,
    title: 'Plataforma de E-commerce',
    category: 'Desenvolvimento Web',
    description: 'Uma solução de e-commerce full stack com recomendações impulsionadas por IA.',
    stats: 'US$ 2M+ em receita gerada',
    color: '#f97316',
    gradient: 'from-orange-500/20 to-amber-500/20',
    icon: TrendingUp,
    image: '/WhatsApp%20Video%202026-02-16%20at%202.20.26%20PM.gif',
  },
  {
    id: 2,
    title: 'Aplicativo Mobile FinTech',
    category: 'Desenvolvimento Mobile',
    description: 'Aplicativo bancário seguro com autenticação biométrica.',
    stats: '500K+ downloads',
    color: '#22c55e',
    gradient: 'from-green-500/20 to-emerald-500/20',
    icon: Smartphone,
    image: '/api/placeholder/1344/768',
  },
  {
    id: 3,
    title: 'Dashboard de Analytics com IA',
    category: 'Visualização de Dados',
    description: 'Plataforma de inteligência de negócios em tempo real com análises preditivas.',
    stats: '99,9% de disponibilidade',
    color: '#3b82f6',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    icon: BarChart3,
    image: '/api/placeholder/1344/768',
  },
  {
    id: 4,
    title: 'Portal de Saúde',
    category: 'Full Stack',
    description: 'Sistema de gestão de pacientes compatível com HIPAA e telemedicina.',
    stats: '10K+ usuários diários',
    color: '#a855f7',
    gradient: 'from-purple-500/20 to-violet-500/20',
    icon: Heart,
    image: '/api/placeholder/1344/768',
  },
  {
    id: 5,
    title: 'Plataforma de Mídia Social',
    category: 'Tecnologia Social',
    description: 'Plataforma orientada à comunidade com mensagens em tempo real.',
    stats: '1M+ conexões',
    color: '#ec4899',
    gradient: 'from-pink-500/20 to-rose-500/20',
    icon: Share2,
    image: '/api/placeholder/1344/768',
  },
]

const successStats = [
  { value: 150, suffix: '+', label: 'Queridas Compras', icon: Code2, image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg' },
  { value: 98, suffix: '%', label: 'Satisfação dos clientes', icon: Award, image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg' },
  { value: 50, suffix: 'M+', label: 'Receita gerada', prefix: '$', icon: TrendingUp, image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg' },
  { value: 50, suffix: '+', label: 'Clientes globais', icon: Globe, image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg' },
]

const successCases = [
  {
    imagem: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
    nome: 'Queridas Compras',
    descrição: 'Clientes satisfeitos com as melhores ofertas e experiências de compra.',
  },
  {
    imagem: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
    nome: 'Queridas Compras',
    descrição: 'Clientes satisfeitos com as melhores ofertas e experiências de compra.',
  },
  {
    imagem: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
    nome: 'Queridas Compras',
    descrição: 'Clientes satisfeitos com as melhores ofertas e experiências de compra.',
  },
  {
    imagem: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
    nome: 'Queridas Compras',
    descrição: 'Clientes satisfeitos com as melhores ofertas e experiências de compra.',
  },
]

const categories = ['Todos', 'Desenvolvimento Web', 'Desenvolvimento Mobile', 'Visualização de Dados', 'Full Stack', 'Tecnologia Social']

const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Casos de sucesso', href: '#success-cases' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
]

function useCounter(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number, animationFrame: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) animationFrame = requestAnimationFrame(animate)
    }
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start])
  return count
}

function AnimatedCounter({ value, suffix = '', prefix = '', start = false }: { value: number; suffix?: string; prefix?: string; start?: boolean }) {
  const count = useCounter(value, 2500, start)
  return <span className="tabular-nums">{prefix}{count}{suffix}</span>
}

function HeroSlide({ project, isActive }: { project: typeof projects[0]; isActive: boolean }) {
  return (
    <motion.div className="absolute inset-0" initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.1 }} transition={{ duration: 0.8, ease: 'easeInOut' }}>
      {project.image && !project.image.startsWith('/api/placeholder') && (<><div className="absolute inset-0 z-0"><img src={project.image} alt="" className="w-full h-full object-cover" /></div><div className="absolute inset-0 z-[1] bg-black/50 bg-gradient-to-br from-black/60 to-transparent" aria-hidden /></>)}
      <div className={`absolute inset-0 z-[1] bg-gradient-to-br ${project.gradient} ${project.image && !project.image.startsWith('/api/placeholder') ? 'opacity-30' : ''}`} />
      <div className="absolute inset-0 overflow-hidden z-[1]"><motion.div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full opacity-30" style={{ background: `radial-gradient(circle, ${project.color}40 0%, transparent 70%)` }} animate={isActive ? { scale: [1, 1.2, 1], rotate: [0, 180, 360] } : {}} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} /></div>
      <div className="relative z-10 h-full flex items-center"><div className="container mx-auto px-6 lg:px-12"><div className="max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-4"><span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border" style={{ borderColor: `${project.color}50`, backgroundColor: `${project.color}15`, color: project.color }}>{project.category}</span></motion.div>
        <motion.h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" initial={{ opacity: 0, y: 40 }} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }} transition={{ duration: 0.6, delay: 0.3 }}>{project.title}</motion.h2>
        <motion.p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }} transition={{ duration: 0.6, delay: 0.4 }}>{project.description}</motion.p>
        <motion.div className="flex flex-wrap items-center gap-6" initial={{ opacity: 0, y: 40 }} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }} transition={{ duration: 0.6, delay: 0.5 }}>
          <motion.button
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black transition-all duration-300"
            style={{ backgroundColor: project.color }}
            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${project.color}60` }}
            whileTap={{ scale: 0.98 }}
          >
            Ver projeto <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div></div></div>
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div className="relative overflow-hidden rounded-2xl cursor-pointer group h-[380px] w-full" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
      <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      <div className="relative z-10 h-full flex flex-col justify-end p-5">
        <div className="mb-2"><span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider" style={{ backgroundColor: project.color, color: '#000' }}>{project.category}</span></div>
        <div className="mb-4"><h3 className="text-lg font-bold mb-1 leading-tight text-white drop-shadow-md">{project.title}</h3><p className="text-gray-300 text-xs line-clamp-2">{project.description}</p></div>
        <motion.button
          className="w-full py-2.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold flex items-center justify-center gap-2 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Saiba mais <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  )
}

// StatCard - Stretched to fill height (usando successCases)
function StatCard({ stat, index, startAnimation }: { stat: typeof successCases[0]; index: number; startAnimation: boolean }) {
  return (
    <motion.div
      className="relative flex flex-row items-center gap-4 flex-1"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -2, scale: 1.01 }}
    >
      {/* Image Left as square card */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shrink-0">
        <img
          src={stat.imagem}
          alt={stat.nome}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      {/* Text Right - clean, sem background/borda */}
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
  )
}

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [statsInView, setStatsInView] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const bannerRef = useRef<HTMLDivElement>(null)
  const banner2Ref = useRef<HTMLDivElement>(null)
  
  const { scrollY } = useScroll()
  const headerBackground = useTransform(scrollY, [0, 100], ['transparent', 'rgba(10, 10, 10, 0.95)'])
  const headerOpacity = useTransform(scrollY, [0, 700], [1, 0])
  const headerY = useTransform(scrollY, [0, 700], [0, -120])
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1])
  const carouselDarken = useTransform(scrollY, [0, 700], [0, 1])
  const carouselDarkenSmooth = useSpring(carouselDarken, { stiffness: 400, damping: 40 })

  const { scrollYProgress: bannerScrollProgress } = useScroll({ target: bannerRef, offset: ["start start", "end start"] })
  const bannerDimming = useTransform(bannerScrollProgress, [0, 0.6], [0, 1])
  const bannerBlurAmount = useTransform(bannerScrollProgress, [0, 0.5], [0, 16])
  const bannerBlur = useMotionTemplate`blur(${bannerBlurAmount}px)`

  const { scrollYProgress: banner2ScrollProgress } = useScroll({ target: banner2Ref, offset: ["start start", "end start"] })
  const banner2Dimming = useTransform(banner2ScrollProgress, [0, 0.6], [0, 1])
  const banner2BlurAmount = useTransform(banner2ScrollProgress, [0, 0.5], [0, 16])
  const banner2Blur = useMotionTemplate`blur(${banner2BlurAmount}px)`
  
  useEffect(() => { if (isCarouselPaused) return; const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % projects.length), 7500); return () => clearInterval(timer) }, [isCarouselPaused])
  useEffect(() => { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setStatsInView(true) }) }, { threshold: 0.3 }); if (statsRef.current) observer.observe(statsRef.current); return () => observer.disconnect() }, [])
  
  const filteredProjects = selectedCategory === 'Todos' ? projects : projects.filter(p => p.category === selectedCategory)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projects.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <motion.header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: headerBackground, opacity: headerOpacity, y: headerY }}>
        <div className="container mx-auto px-6 py-4"><div className="flex items-center justify-between">
          <motion.div className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <span className="text-xl font-bold text-black">P</span>
            </div>
            <span className="text-xl font-bold">Portfólio</span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
          <motion.button
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Fale conosco <ArrowRight className="w-4 h-4" />
          </motion.button>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div></div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold">
                  Fale conosco <ArrowRight className="w-4 h-4" />
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Carousel */}
      <section id="home" ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/download/hero-2.png)' }} /><div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" /></motion.div>
        <div className="relative h-full z-0"><AnimatePresence mode="wait">{projects.map((project, index) => currentSlide === index && <HeroSlide key={project.id} project={project} isActive={currentSlide === index} />)}</AnimatePresence></div>
        <motion.div className="absolute inset-0 bg-[#0a0a0a] pointer-events-none z-10" style={{ opacity: carouselDarkenSmooth }} />
        <div className="absolute bottom-8 left-0 right-0 z-20"><div className="container mx-auto px-6"><div className="flex items-center justify-between">
          <div className="flex items-center gap-3">{projects.map((project, index) => (<button key={project.id} className="group relative h-1 rounded-full overflow-hidden transition-all duration-300" style={{ width: currentSlide === index ? '60px' : '40px', backgroundColor: currentSlide === index ? project.color : 'rgba(255,255,255,0.2)' }} onClick={() => setCurrentSlide(index)}>{currentSlide === index && <motion.div className="absolute inset-y-0 left-0 bg-white/30" initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 7, ease: 'linear' }} />}</button>))}</div>
          <div className="flex items-center gap-2"><motion.button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" onClick={() => setIsCarouselPaused((p) => !p)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>{isCarouselPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}</motion.button><motion.button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" onClick={prevSlide} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><ChevronLeft className="w-5 h-5" /></motion.button><motion.button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" onClick={nextSlide} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><ChevronRight className="w-5 h-5" /></motion.button></div>
        </div></div></div>
        <motion.div className="absolute bottom-24 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"><motion.div className="w-1.5 h-3 rounded-full bg-orange-500" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} /></div></motion.div>
      </section>

      {/* Success Stats Section - Centered & Stretched Vertically */}
      <section id="success-cases" ref={statsRef} className="relative min-h-screen flex flex-col py-12 md:py-16">
        <div className="container mx-auto px-6 flex-1 flex flex-col min-h-0 relative z-10">
          <div className="w-full max-w-7xl mx-auto h-full flex items-stretch">
            {/* Forced Height Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 w-full min-h-[95vh] items-stretch">
              
              {/* Large Card */}
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

              {/* Right Column - Stretched Cards */}
              <div className="lg:col-span-5 flex flex-col gap-4 h-full">
                {successCases.map((stat, index) => (
                  <StatCard key={stat.nome} stat={stat} index={index} startAnimation={statsInView} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner 1 */}
      <section id="projects" ref={bannerRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0"><motion.div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: 'url(/WhatsApp%20Video%202026-02-16%20at%202.20.26%20PM.gif)', filter: bannerBlur }} /><div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" /></div>
        <motion.div className="absolute inset-0 bg-[#0a0a0a] z-[1]" style={{ opacity: bannerDimming }} />
        <div className="relative z-10 h-full w-full flex flex-col justify-end items-center pb-24 md:pb-32 px-6">
          <motion.div
            className="text-center max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-4">
              Portfólio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Criado no <span className="text-gradient">Blender</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore nosso portfólio diverso de soluções inovadoras criadas com precisão e criatividade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 relative bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div className="flex flex-wrap justify-center gap-3 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{categories.map((category) => (<motion.button key={category} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'}`} onClick={() => setSelectedCategory(category)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{category}</motion.button>))}</motion.div>
          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto" layout><AnimatePresence mode="popLayout">{filteredProjects.map((project, index) => (<motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}><ProjectCard project={project} index={index} /></motion.div>))}</AnimatePresence></motion.div>
          <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-orange-500/50 text-orange-500 font-semibold hover:bg-orange-500/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver todos os projetos <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Banner 2 */}
      <section id="banner-2" ref={banner2Ref} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0"><motion.div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: 'url(/WhatsApp%20Video%202026-02-16%20at%202.20.26%20PM.gif)', filter: banner2Blur }} /><div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" /></div>
        <motion.div className="absolute inset-0 bg-[#0a0a0a] z-[1]" style={{ opacity: banner2Dimming }} />
      </section>

      {/* CTA Section */}
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
              <motion.button
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5" /> Assistir apresentação
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                  <span className="text-xl font-bold text-black">P</span>
                </div>
                <span className="text-xl font-bold">Portfólio</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Criando experiências digitais excepcionais que transformam negócios e encantam usuários ao redor do mundo.
              </p>
              <div className="flex items-center gap-4">
                {['twitter', 'linkedin', 'github', 'dribbble'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500/20 hover:text-orange-500 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links rápidos</h4>
              <ul className="space-y-2">
                {['Sobre nós', 'Projetos', 'Serviços', 'Contato'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Entre em contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>falta definir o email</li>
                <li>falta definir o telefone</li>
                <li>João Pessoa, PB</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2026 Portfólio. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">
                Política de privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}