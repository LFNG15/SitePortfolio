import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/app/portfolioData'
import { CornerBrackets } from '@/components/ui/corner-brackets'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { scrollY } = useScroll()
  const headerBackground = useTransform(scrollY, [0, 100], ['transparent', 'rgba(10, 10, 10, 0.95)'])
  const headerOpacity = useTransform(scrollY, [0, 700], [1, 0])
  const headerY = useTransform(scrollY, [0, 700], [0, -120])

  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: headerBackground, opacity: headerOpacity, y: headerY }}>
      <div className="container mx-auto px-5 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 sm:gap-2.5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-white rotate-45" />
            <span className="text-base sm:text-lg font-semibold tracking-tight">Lumen Connection</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-9">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-xs font-medium tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <motion.a
            href="#contact"
            className="relative hidden md:inline-flex items-center px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase text-white/90 border border-white/15 hover:border-white/40 hover:bg-white/5 transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CornerBrackets />
            Fale Conosco
          </motion.a>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="relative mt-3 inline-flex items-center justify-center px-5 py-3 text-xs font-medium tracking-[0.15em] uppercase text-white/90 border border-white/15"
                onClick={() => setIsMenuOpen(false)}
              >
                <CornerBrackets />
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}