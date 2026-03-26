'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { SuccessCasesSection } from '@/components/SuccessCasesSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SecondBanner } from '@/components/SecondBanner'
import { CTASection } from '@/components/CTASection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Portfolio() {
  const [pendingCategory, setPendingCategory] = useState<string | null>(null)

  const handleVerProjeto = (category: string) => {
    setPendingCategory(category)
    setTimeout(() => {
      document.getElementById('projects-content')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection onVerProjeto={handleVerProjeto} />
      <SuccessCasesSection />
      <ProjectsSection pendingCategory={pendingCategory} />
      <SecondBanner />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  )
}
