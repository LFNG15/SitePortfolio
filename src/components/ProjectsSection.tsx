import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { categories, projects } from '@/app/portfolioData'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl cursor-pointer group h-[380px] w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
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
        >
          Saiba mais <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const bannerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: bannerScrollProgress } = useScroll({ target: bannerRef, offset: ['start start', 'end start'] })
  const bannerDimming = useTransform(bannerScrollProgress, [0, 0.6], [0, 1])
  const bannerBlurAmount = useTransform(bannerScrollProgress, [0, 0.5], [0, 16])
  const bannerBlur = useMotionTemplate`blur(${bannerBlurAmount}px)`

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter((p) => p.category === selectedCategory)

  return (
    <>
      <section id="projects" ref={bannerRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: 'url(/WhatsApp%20Video%202026-02-16%20at%202.20.26%20PM.gif)', filter: bannerBlur }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
        </div>
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

      <section className="py-24 relative bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto" layout>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} index={index} />
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
    </>
  )
}

