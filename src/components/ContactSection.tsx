import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'

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
  if (platform === 'github') return <Github className="w-5 h-5" />
  if (platform === 'instagram') return <Instagram className="w-5 h-5" />
  if (platform === 'linkedin') return <Linkedin className="w-5 h-5" />
  return <Mail className="w-5 h-5" />
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300 mb-4">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Conecte-se com o <span className="text-gradient">time</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Centralizamos aqui os principais perfis, onde você pode falar diretamente com cada profissional do estúdio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name + contact.platform}
              href={contact.url}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl border border-white/10 bg-white/5 px-5 py-5 flex flex-col gap-3 hover:border-orange-500/60 hover:bg-white/10 transition-all"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-orange-400">
                    <PlatformIcon platform={contact.platform} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">{contact.name}</p>
                    <p className="text-xs text-gray-400">{contact.role}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 text-xs text-gray-400">
                <span className="truncate">{contact.handle}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500 group-hover:text-orange-400 transition-colors">
                  Ver perfil
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

