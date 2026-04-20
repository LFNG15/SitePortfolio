import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { CornerBrackets, SectionLabel } from '@/components/ui/corner-brackets'

type ContactItem = {
  name: string
  role: string
  platform: 'github' | 'instagram' | 'linkedin' | 'email'
  handle: string
  url: string
}

const contacts: ContactItem[] = [
  {
    name: 'Matheus Moreira Fermino',
    role: 'Desenvolvedor de Software | Editor de Vídeo',
    platform: 'github',
    handle: '@Decade-GitHub',
    url: 'https://github.com/Decade-GitHub',
  },
  {
    name: 'Gabriel Dias Ângelo',
    role: 'Editor de Vídeo | Designer Gráfico | Artista 3D',
    platform: 'instagram',
    handle: '@gabrieldylann',
    url: 'https://www.instagram.com/gabrieldylann/',
  },
  {
    name: 'Luiz Felipe do Nascimento Gomes',
    role: 'Desenvolvedor de Software',
    platform: 'github',
    handle: '@LFNG15',
    url: 'https://github.com/LFNG15',
  },
]

function PlatformIcon({ platform }: { platform: ContactItem['platform'] }) {
  if (platform === 'github') return <Github className="w-4 h-4" />
  if (platform === 'instagram') return <Instagram className="w-4 h-4" />
  if (platform === 'linkedin') return <Linkedin className="w-4 h-4" />
  return <Mail className="w-4 h-4" />
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 flex flex-col items-center">
          <SectionLabel color="#f97316" className="mb-6">Contato</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-[1.05] tracking-tight text-white">
            Conecte-se com o <span style={{ color: '#f97316' }}>time</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg max-w-xl leading-relaxed">
            Centralizamos aqui os principais perfis, onde você pode falar diretamente com cada profissional do estúdio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name + contact.platform}
              href={contact.url}
              target="_blank"
              rel="noreferrer"
              className="group relative border border-white/10 bg-white/[0.02] px-6 py-6 flex flex-col gap-4 hover:border-white/35 hover:bg-white/[0.04] transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <CornerBrackets color="rgba(255,255,255,0.6)" size={10} inset={-4} />
              <div className="flex items-start justify-between gap-3">
                <div className="w-10 h-10 border border-white/15 bg-black/40 flex items-center justify-center text-white/80 group-hover:text-orange-400 group-hover:border-orange-400/40 transition-colors">
                  <PlatformIcon platform={contact.platform} />
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white leading-tight mb-1">{contact.name}</p>
                <p className="text-xs text-white/50 leading-relaxed">{contact.role}</p>
              </div>
              <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/10">
                <span className="text-xs text-white/70 truncate font-medium">{contact.handle}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/35 group-hover:text-orange-400 transition-colors">
                  Ver Perfil
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}