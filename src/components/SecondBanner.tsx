import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { useRef } from 'react'

export function SecondBanner() {
  const banner2Ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress: banner2ScrollProgress } = useScroll({ target: banner2Ref, offset: ['start start', 'end start'] })
  const banner2Dimming = useTransform(banner2ScrollProgress, [0, 0.6], [0, 1])
  const banner2BlurAmount = useTransform(banner2ScrollProgress, [0, 0.5], [0, 16])
  const banner2Blur = useMotionTemplate`blur(${banner2BlurAmount}px)`

  return (
    <section id="banner-2" ref={banner2Ref} className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: 'url(/WhatsApp%20Video%202026-02-16%20at%202.20.26%20PM.gif)', filter: banner2Blur }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </div>
      <motion.div className="absolute inset-0 bg-[#0a0a0a] z-[1]" style={{ opacity: banner2Dimming }} />
    </section>
  )
}

