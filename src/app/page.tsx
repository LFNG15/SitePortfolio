'use client'

import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { SuccessCasesSection } from '@/components/SuccessCasesSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SecondBanner } from '@/components/SecondBanner'
import { CTASection } from '@/components/CTASection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <SuccessCasesSection />
      <ProjectsSection />
      <SecondBanner />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  )
}
