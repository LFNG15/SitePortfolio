import { useRef, useState, useEffect, useCallback, memo } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react'
import { categories, sectionProjects as projects, ProjectItem } from '@/app/portfolioData'
import { CornerBrackets, SectionLabel } from '@/components/ui/corner-brackets'

const DEFAULT_BANNER = '/videos/banners/video-banner.webm'

const ProjectCard = memo(function ProjectCard({ project, index, onSaibaMais }: {
  project: typeof projects[0]
  index: number
  onSaibaMais: () => void
}) {
  const hasValidBanner = project.bannerImage && !project.bannerImage.startsWith('/api/placeholder')
  const bannerIsVideo = hasValidBanner && (project.bannerImage.endsWith('.webm') || project.bannerImage.endsWith('.mp4'))
  const mediaSrc = hasValidBanner ? project.bannerImage : project.image

  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer group h-[300px] sm:h-[340px] md:h-[380px] w-full border border-white/10 hover:border-white/25 transition-colors"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {bannerIsVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={mediaSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
        />
      ) : (
        <img
          src={mediaSrc}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
      <div className="relative z-10 h-full flex flex-col justify-end p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-px w-6" style={{ backgroundColor: project.color }} />
          <span
            className="text-[10px] font-medium tracking-[0.25em] uppercase"
            style={{ color: project.color }}
          >
            {project.category}
          </span>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-1.5 leading-tight tracking-tight text-white">
            {project.title}
          </h3>
          <p className="text-white/60 text-xs line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
        <motion.button
          className="relative w-full py-2.5 border border-white/20 text-xs font-medium tracking-wide flex items-center justify-center gap-2 text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all"
          whileTap={{ scale: 0.98 }}
          onClick={onSaibaMais}
        >
          <CornerBrackets />
          Saiba mais <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  )
})

const ItemCard = memo(function ItemCard({ item, index }: { item: ProjectItem; index: number }) {
  const hasMedia = !!item.image && item.image !== '/'
  const isVideo = hasMedia && (item.image.endsWith('.webm') || item.image.endsWith('.mp4'))

  return (
    <motion.div
      className="relative overflow-hidden group h-[240px] sm:h-[260px] md:h-[280px] w-full border border-white/10 hover:border-white/25 transition-colors"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {hasMedia && (
        isVideo ? (
          <video
            src={item.image}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            disablePictureInPicture
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className={`relative z-10 h-full flex flex-col p-5 ${hasMedia ? 'justify-end' : 'justify-center items-center text-center'}`}>
        <h4 className="text-white font-semibold mb-1.5 leading-tight tracking-tight">{item.title}</h4>
        <p className="text-white/60 text-xs line-clamp-2 mb-3 leading-relaxed">{item.description}</p>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.2em] uppercase text-orange-400 hover:text-orange-300 transition-colors"
          >
            Ver projeto <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  )
})

export function ProjectsSection({ pendingCategory, viewAllTrigger }: { pendingCategory?: string | null; viewAllTrigger?: number }) {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [activeSubcategory, setActiveSubcategory] = useState('Todos')
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (pendingCategory) { setActiveCategory(pendingCategory); setActiveSubcategory('Todos') }
  }, [pendingCategory])

  useEffect(() => {
    if (viewAllTrigger && viewAllTrigger > 0) { setActiveCategory('Todos'); setActiveSubcategory('Todos') }
  }, [viewAllTrigger])

  const { scrollYProgress: bannerScrollProgress } = useScroll({ target: bannerRef, offset: ['start start', 'end start'] })
  const bannerDimming = useTransform(bannerScrollProgress, [0, 0.6], [0, 1])
  const bannerBlurAmount = useTransform(bannerScrollProgress, [0, 0.5], [0, 16])
  const bannerBlur = useMotionTemplate`blur(${bannerBlurAmount}px)`

  const isDetailView = activeCategory !== 'Todos'
  const activeProject = projects.find((p) => p.category === activeCategory)

  const subcategories = activeProject
    ? ['Todos', ...Array.from(new Set(activeProject.items.filter((i) => i.subcategory).map((i) => i.subcategory as string)))]
    : []
  const hasSubcategories = subcategories.length > 1

  const visibleItems = activeProject
    ? activeSubcategory === 'Todos'
      ? activeProject.items
      : activeProject.items.filter((i) => i.subcategory === activeSubcategory)
    : []

  const bannerIsVideo = DEFAULT_BANNER.endsWith('.webm') || DEFAULT_BANNER.endsWith('.mp4')

  const handleSaibaMais = useCallback((category: string) => {
    setActiveCategory(category)
    setActiveSubcategory('Todos')
  }, [])

  return (
    <>
      <section id="projects" ref={bannerRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div className="absolute inset-0 scale-110" style={{ filter: bannerBlur }}>
            {bannerIsVideo ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={DEFAULT_BANNER}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                disablePictureInPicture
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${DEFAULT_BANNER})` }}
              />
            )}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/75 via-[#000000]/50 to-[#000000]" />
        </div>
        <motion.div className="absolute inset-0 bg-[#000000] z-[1]" style={{ opacity: bannerDimming }} />
        <div className="relative z-10 h-full w-full flex flex-col justify-end items-center px-5 sm:px-6 pb-14 sm:pb-20">
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel color="#f97316" className="mb-4 sm:mb-5">Portfólio</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 leading-[1.05] tracking-tight text-white">
              Criado no <span style={{ color: '#f97316' }}>Blender</span>
            </h2>
            <p className="text-white/55 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore nosso portfólio diverso de soluções inovadoras criadas com precisão e criatividade.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="projects-content" className="pt-10 pb-16 sm:pt-12 sm:pb-20 md:pt-14 md:pb-24 relative bg-black">
        <div className="flex justify-center mb-6 sm:mb-8">
          <SectionLabel color="#f97316">Serviços</SectionLabel>
        </div>
        <div className="container mx-auto px-5 sm:px-6">
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => {
              const active = activeCategory === category
              return (
                <motion.button
                  key={category}
                  className={`relative px-3 sm:px-5 py-2 text-[10px] sm:text-xs font-medium tracking-[0.12em] uppercase transition-all duration-300 ${
                    active
                      ? 'bg-white text-black'
                      : 'border border-white/15 text-white/70 hover:border-white/35 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => { setActiveCategory(category); setActiveSubcategory('Todos') }}
                  whileTap={{ scale: 0.97 }}
                >
                  {!active && <CornerBrackets />}
                  {category}
                </motion.button>
              )
            })}
          </motion.div>
          <AnimatePresence mode="wait">
            {isDetailView && activeProject ? (
              <motion.div
                key={`detail-${activeCategory}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-6 flex items-center gap-4 max-w-6xl mx-auto">
                  <motion.button
                    onClick={() => { setActiveCategory('Todos'); setActiveSubcategory('Todos') }}
                    className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
                    whileHover={{ x: -3 }}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Todos os serviços
                  </motion.button>
                  <span className="text-white/15">|</span>
                  <div className="flex items-center gap-2">
                    <span className="h-px w-6" style={{ backgroundColor: activeProject.color }} />
                    <span
                      className="text-[11px] font-medium tracking-[0.2em] uppercase"
                      style={{ color: activeProject.color }}
                    >
                      {activeProject.title}
                    </span>
                  </div>
                </div>
                {hasSubcategories && (
                  <div className="flex flex-wrap gap-2 max-w-6xl mx-auto mb-8">
                    {subcategories.map((sub) => {
                      const active = activeSubcategory === sub
                      return (
                        <motion.button
                          key={sub}
                          className={`relative px-4 py-1.5 text-[10px] font-medium tracking-[0.18em] uppercase transition-all duration-300 ${
                            active
                              ? 'text-black'
                              : 'border border-white/15 text-white/55 hover:border-white/35 hover:text-white hover:bg-white/5'
                          }`}
                          style={active ? { backgroundColor: activeProject.color } : {}}
                          onClick={() => setActiveSubcategory(sub)}
                          whileTap={{ scale: 0.97 }}
                        >
                          {!active && <CornerBrackets />}
                          {sub}
                        </motion.button>
                      )
                    })}
                  </div>
                )}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSubcategory}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
                  >
                    {visibleItems.map((item, index) => (
                      <ItemCard key={item.id} item={item} index={index} />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
              >
                <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto" layout>
                  <AnimatePresence mode="popLayout">
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProjectCard
                          project={project}
                          index={index}
                          onSaibaMais={() => handleSaibaMais(project.category)}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}