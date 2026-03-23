import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <span className="text-xl font-bold text-black">P</span>
              </div>
              <span className="text-xl font-bold">Portfólio</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Criando experiências digitais incríveis que transformam o seu negócio e encantam usuários ao redor do mundo.
            </p>
            <div className="flex items-center gap-4">
              {['twitter', 'linkedin', 'github', 'dribbble'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500/20 hover:text-orange-500 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              {['Sobre nós', 'Projetos', 'Serviços', 'Contato'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Entre em contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>TODO: Definir o email único</li>
              <li>Contato - Gabriel Dias Ângelo: (83) 9311-8730</li>
              <li>Contato - Matheus Moreira Fermino: (11) 99477-0428</li>
              <li>Contato - Luiz Felipe do Nascimento Gomes: (83) 98886-3067</li>
              <li>João Pessoa, PB</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 Portfólio. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Desenvolvido por Luiz Felipe
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

