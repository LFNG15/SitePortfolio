import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react'
import { categories, sectionProjects as projects, ProjectItem } from '@/app/portfolioData'

const DEFAULT_BANNER = '/SecondBanner/VIDEO-BANNER.webm'

function ProjectCard({ project, index, onSaibaMais }: {
  project: typeof projects[0]
  index: number
  onSaibaMais: () => void
}) {
  const hasValidBanner = project.bannerImage && !project.bannerImage.startsWith('/api/placeholder')
  const bannerIsVideo = hasValidBanner && (project.bannerImage.endsWith('.webm') || project.bannerImage.endsWith('.mp4'))
  const mediaSrc = hasValidBanner ? project.bannerImage : project.image

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl cursor-pointer group h-[380px] w-full"
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
        />
      ) : (
        <img
          src={mediaSrc}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      <div className="relative z-10 h-full flex flex-col justify-end p-5">
        <div className="mb-2">
          <span
            className="inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider"
            style={{ backgroundColor: project.color, color: '#000' }}
          >
            {project.category}
          </span>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-1 leading-tight text-white drop-shadow-md">
            {project.title}
          </h3>
          <p className="text-gray-300 text-xs line-clamp-2">
            {project.description}
          </p>
        </div>
        <motion.button
          className="w-full py-2.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold flex items-center justify-center gap-2 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSaibaMais}
        >
          Saiba mais <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  )
}

function ItemCard({ item, index }: { item: ProjectItem; index: number }) {
  const isVideo = item.image.endsWith('.webm') || item.image.endsWith('.mp4')

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl group h-[280px] w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {isVideo ? (
        <video
          src={item.image}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end p-5">
        <h4 className="text-white font-bold mb-1 leading-tight">{item.title}</h4>
        <p className="text-gray-300 text-xs line-clamp-2 mb-3">{item.description}</p>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-400 hover:text-orange-300 transition-colors"
          >
            Ver projeto <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  )
}

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
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${DEFAULT_BANNER})` }}
              />
            )}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 via-[#000000]/50 to-[#000000]" />
        </div>
        <motion.div className="absolute inset-0 bg-[#000000] z-[1]" style={{ opacity: bannerDimming }} />
        <div className="relative z-10 h-full w-full flex flex-col justify-end items-center px-6 pb-16">
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

      <section id="projects-content" className="pt-5 pb-24 relative bg-black">
        <div className="flex justify-center mb-7">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-orange-500/10 text-orange-500 border border-orange-500/20">
            Serviços
          </span>
        </div>
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
                onClick={() => { setActiveCategory(category); setActiveSubcategory('Todos') }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
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
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: -3 }}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Todos os serviços
                  </motion.button>
                  <span className="text-gray-700">|</span>
                  <span
                    className="text-sm font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${activeProject.color}20`, color: activeProject.color }}
                  >
                    {activeProject.title}
                  </span>
                </div>
                {hasSubcategories && (
                  <div className="flex flex-wrap gap-2 max-w-6xl mx-auto mb-8">
                    {subcategories.map((sub) => (
                      <motion.button
                        key={sub}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                          activeSubcategory === sub
                            ? 'text-black'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                        }`}
                        style={activeSubcategory === sub ? { backgroundColor: activeProject.color } : {}}
                        onClick={() => setActiveSubcategory(sub)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {sub}
                      </motion.button>
                    ))}
                  </div>
                )}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSubcategory}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
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
                <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto" layout>
                  <AnimatePresence mode="popLayout">
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProjectCard
                          project={project}
                          index={index}
                          onSaibaMais={() => { setActiveCategory(project.category); setActiveSubcategory('Todos') }}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  className="text-center mt-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
