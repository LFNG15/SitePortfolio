import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navItems } from '@/app/portfolioData'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { scrollY } = useScroll()
  const headerBackground = useTransform(scrollY, [0, 100], ['transparent', 'rgba(10, 10, 10, 0.95)'])
  const headerOpacity = useTransform(scrollY, [0, 700], [1, 0])
  const headerY = useTransform(scrollY, [0, 700], [0, -120])

  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: headerBackground, opacity: headerOpacity, y: headerY }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <span className="text-xl font-bold text-black">L</span>
            </div>
            <span className="text-xl font-bold font-lumen">Lumen Connection</span>
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
          {/*<motion.button
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Fale conosco <ArrowRight className="w-4 h-4" />
          </motion.button>*/}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
  )
}

