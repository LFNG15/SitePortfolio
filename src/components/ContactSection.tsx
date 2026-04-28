import { motion } from 'framer-motion'
import { Phone, ArrowUpRight, User } from 'lucide-react'
import { CornerBrackets, SectionLabel } from '@/components/ui/corner-brackets'

type TeamMember = {
  name: string
  role: string
}

const team: TeamMember[] = [
  {
    name: 'Matheus Moreira Fermino',
    role: 'Desenvolvedor de Software | Editor de Vídeo',
  },
  {
    name: 'Gabriel Dias Ângelo',
    role: 'Editor de Vídeo | Designer Gráfico | Artista 3D',
  },
  {
    name: 'Luiz Felipe do Nascimento Gomes',
    role: 'Desenvolvedor de Software',
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 flex flex-col items-center">
          <SectionLabel color="#f97316" className="mb-6">Contato</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-[1.05] tracking-tight text-white">
            Fale com a <span style={{ color: '#f97316' }}>Lumen Connection</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg max-w-xl leading-relaxed">
            O canal direto com o estúdio. Conheça a equipe abaixo e entre em contato pelo nosso canal oficial para discutir seu projeto.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <motion.a
            href="https://wa.me/5583999614629"
            target="_blank"
            rel="noreferrer"
            className="group relative border border-white/10 bg-white/[0.02] px-8 py-8 flex flex-col gap-5 hover:border-white/35 hover:bg-white/[0.04] transition-colors"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <CornerBrackets color="rgba(255,255,255,0.6)" size={10} inset={-4} />
            <div className="flex items-start justify-between gap-3">
              <div className="w-12 h-12 border border-white/15 bg-black/40 flex items-center justify-center text-white/80 group-hover:text-orange-400 group-hover:border-orange-400/40 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-base font-semibold text-white leading-tight mb-1">Lumen Connection</p>
              <p className="text-xs text-white/50 leading-relaxed">Estúdio de Engenharia Digital e Produção Visual</p>
            </div>
            <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/10">
              <span className="text-sm text-white/80 truncate font-medium">+55 83 99961-4629</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/35 group-hover:text-orange-400 transition-colors">
                Falar Agora
              </span>
            </div>
          </motion.a>
        </div>

        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/40 mb-6 text-center">
            Conheça a Equipe
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group relative border border-white/10 bg-white/[0.02] px-6 py-6 flex flex-col gap-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <CornerBrackets color="rgba(255,255,255,0.6)" size={10} inset={-4} />
                <div className="w-10 h-10 border border-white/15 bg-black/40 flex items-center justify-center text-white/80">
                  <User className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white leading-tight mb-1">{member.name}</p>
                  <p className="text-xs text-white/50 leading-relaxed">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
