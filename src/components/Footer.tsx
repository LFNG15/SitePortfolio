import { CornerBrackets } from '@/components/ui/corner-brackets'

export function Footer() {
  return (
    <footer className="py-10 sm:py-12 md:py-14 border-t border-white/10 bg-black">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-2 h-2 bg-white rotate-45" />
              <span className="text-lg font-semibold tracking-tight">Lumen Connection</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Estúdio digital que une engenharia de software e produção visual de alta fidelidade.
            </p>
          </div>
          <div className="hidden md:block" />
          <div>
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/40 mb-5">
              Entre em contato
            </p>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="break-all">
                <a
                  href="mailto:contato.lumenconnection@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  contato.lumenconnection@gmail.com
                </a>
              </li>
              <li>
                Lumen Connection —{' '}
                <a
                  href="https://wa.me/5583999614629"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (83) 99961-4629
                </a>
              </li>
              <li className="text-white/40 pt-1">João Pessoa, PB</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 md:mt-14 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-white/40 text-xs tracking-wider">© 2026 Lumen Connection. Todos os direitos reservados.</p>
          <a
            href="#contact"
            className="relative inline-flex items-center px-4 py-2 text-[10px] font-medium tracking-[0.25em] uppercase text-white/70 border border-white/10 hover:border-white/30 hover:text-white transition-colors"
          >
            <CornerBrackets color="rgba(255,255,255,0.4)" />
            Luiz Felipe · Matheus Moreira
          </a>
        </div>
      </div>
    </footer>
  )
}