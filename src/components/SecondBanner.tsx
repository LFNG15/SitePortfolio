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
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div className="absolute inset-0 scale-110" style={{ filter: banner2Blur }}>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/SecondBanner/segundoedit.webm"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 via-[#000000]/50 to-[#000000]" />
      </div>
      <motion.div className="absolute inset-0 bg-[#000000] z-[1]" style={{ opacity: banner2Dimming }} />
    </section>
  )
}

