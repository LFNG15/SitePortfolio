import {
  Code2,
  Smartphone,
  Heart,
  Video,
  Palette,
  Box,
  Sparkles,
  Zap
} from 'lucide-react'

export type ProjectItem = {
  id: number
  title: string
  description: string
  image: string
  url?: string
  subcategory?: string
}

export type HeroSlideExtra = {
  ctaLabel?: string
  ctaHref?: string
  subtitle?: string
}

export const projects = [
  {
    id: 9,
    title: 'Lumen Connection',
    category: 'Estúdio',
    description: 'O elo vital entre engenharia digital e estética visual. Da luz que ilumina ideias ao conceitos que conecta mundos.',
    subtitle: 'Engenharia de Software · Produção Digital de Alta Fidelidade',
    stats: '',
    color: '#e8c84a',
    gradient: 'from-yellow-900/50 to-stone-950/80',
    icon: Zap,
    image: '/photo-1484689228555-fd6bc1b28b7e.avif',
    bannerImage: '/photo-1484689228555-fd6bc1b28b7e.avif',
    showInHero: true,
    heroOnly: true,
    ctaLabel: 'Conheça o Estúdio',
    ctaHref: '#about',
    items: [] as ProjectItem[],
  },
  {
    id: 1,
    title: 'Desenvolvimento Web',
    category: 'Desenvolvimento Web',
    description: 'Trabalhamos com linguagens e frameworks como JavaScript, React, Python, Java, C#, Next.js, Tailwind, HTML, CSS, e muito mais',
    stats: 'Projetos concluídos',
    color: '#f97316',
    gradient: 'from-orange-500/20 to-amber-500/20',
    icon: Code2,
    image: '/nitish-meena-RbbdzZBKRDY-unsplash.jpg',
    bannerImage: '/projects/Capas/web_development.jpeg',
    items: [
      {
        id: 1,
        title: 'Queridas Compras',
        description: 'Site de vitrine online desenvolvido em Next.js para diversas lojas regionais de João Pessoa, PB',
        image: '/successCases/QueridasComprasCase1.png',
        url: 'https://queridascompras.com.br/',
        subcategory: 'Next.js'
      },
      {
        id: 2,
        title: 'TODO: Projeto Web 2',
        description: 'Em breve',
        image: '/',
      },
    ] as ProjectItem[],
  },
  {
    id: 2,
    title: 'Desenvolvimento de Software',
    category: 'Desenvolvimento de Software',
    description: 'Desenvolvimento nativo com Rust, C++, WinUI e Razor',
    stats: 'Projetos concluídos',
    color: '#eab308',
    gradient: 'from-yellow-500/20 to-amber-400/20',
    icon: Code2,
    image: '/joe-mcdaniel-KhhOAsE5M6Y-unsplash.jpg',
    bannerImage: '/projects/Capas/software_development.jpeg',
    items: [
      {
        id: 1,
        title: 'Vinil Player',
        description: 'O Reprodutor da Música Desktop Open Source desenvolvido em C++ com Qt 6, com player de áudio em formato Opus',
        url:'https://github.com/LFNG15/vinil-player',
        image: '/projects/Projeto de Software/VinilPlayer.jpeg',
        subcategory: 'C++'
      },
      {
        id: 2,
        title: 'TODO: Projeto de Software 2',
        description: 'Em breve',
        image: '/',
      },
    ] as ProjectItem[],
  },
  {
    id: 3,
    title: 'Desenvolvimento Mobile',
    category: 'Desenvolvimento Mobile',
    description: 'Criação rápida usando frameworks como Flutter, React Native e Kotlin',
    stats: 'Projetos concluídos',
    color: '#22c55e',
    gradient: 'from-green-500/20 to-emerald-500/20',
    icon: Smartphone,
    image: '/jonatan-pie-EvKBHBGgaUo-unsplash.jpg',
    bannerImage: '/projects/Capas/mobile_development.jpeg',
    items: [
      {
        id: 1,
        title: 'TODO: App Mobile 1',
        description: 'Em breve',
        image: '/',
      },
      {
        id: 2,
        title: 'TODO: App Mobile 2',
        description: 'Em breve',
        image: '/',
      },
    ] as ProjectItem[],
  },
  {
    id: 4,
    title: 'Edição de Vídeo e Mídia Social',
    category: 'Edição de Vídeo e Mídia Social',
    description: 'Edição profissional de vídeos com Adobe Premiere Pro, After Effects e Blender — incluindo conteúdo para YouTube, reels, stories e outras mídias sociais',
    stats: 'Projetos concluídos',
    color: '#3b82f6',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    icon: Video,
    image: '/alex-fxrwJGMCz_g-unsplash.jpg',
    bannerImage: '/projects/Capas/VIDEOEDITOR2.jpeg',
    items: [
      {
        id: 1,
        title: '"CRIEI UMA ANIMAÇÃO DE HOMEM-ARANHA: UM NOVO DIA NO BLENDER 3D"',
        description: 'O vídeo do canal Universo Nerdístico Studios foi realizado através do Adobe Premiere Pro, com um estilo de edição altamente dinâmico',
        image: 'projects/Edição de Vídeo e Mídia Social/VideoEdicao.jpeg',
        url:"https://www.youtube.com/watch?v=7WwPkAa9kZQ",
        subcategory: 'Adobe Premiere Pro'
      },
      {
        id: 2,
        title: 'TODO: Projeto de Edição 2',
        description: 'Em breve',
        image: '/',
      },
    ] as ProjectItem[],
  },
  {
    id: 5,
    title: 'Design Gráfico, Branding e Identidade Visual',
    category: 'Design Gráfico, Branding e Identidade Visual',
    description: 'Design de logos, banners, cartões de visitas e outros materiais gráficos para empresas e indivíduos',
    stats: 'Projetos concluídos',
    color: '#a855f7',
    gradient: 'from-purple-500/20 to-violet-500/20',
    icon: Heart,
    image: '/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg',
    bannerImage: '/projects/Capas/DESIGN2.jpeg',
    items: [
      {
        id: 1,
        title: 'Logo Queridas Compras (QC) Motion Design',
        description: 'Feito em Adobe After Effects',
        image: '/projects/Design Gráfico, Branding e Identidade Visual/LogoQCMotionDesign.webm',
        subcategory: 'Motion Graphics/Design'
      },
      {
        id: 2,
        title: 'TODO: Projeto de Design 2',
        description: 'Em breve',
        image: '/',
      },
    ] as ProjectItem[],
  },
  {
    id: 6,
    title: 'Posters',
    category: 'Posters',
    description: 'Criação de posters artísticos e ilustrações digitais com identidade visual marcante',
    stats: 'Projetos concluídos',
    color: '#f43f5e',
    gradient: 'from-rose-500/20 to-pink-500/20',
    icon: Palette,
    image: '/',
    bannerImage: '/projects/Capas/POSTERS.jpeg',
    showInHero: false,
    items: [
      {
        id: 1,
        title: '"Um Novo Dia"',
        description: 'Homem-Aranha Inspirado em The Amazing Spider-Man N° 345 vs Boomerang',
        image: 'projects/Posters/Homem-Aranha_Inspirado_em_The_Amazing_Spider-Man_N_345_vs_Boomerang.png',
        url: 'https://www.instagram.com/p/DWKfZoNlGZJ/',
        subcategory: 'Homem-Aranha',
      },
      {
        id: 2,
        title: 'Poster feito por Gabriel Dias',
        description: 'SPIDER-MAN: Brand New Day',
        image: 'projects/Posters/SPIDER-MAN_Brand_New_Day.png',
        url: 'https://www.instagram.com/p/DNHN7y3tMFn/',
        subcategory: 'Homem-Aranha',
      },
      {
        id: 3,
        title: '"Recomeço"',
        description: 'Homem-Aranha: Um Novo Dia - 30 de julho 🎬',
        image: 'projects/Posters/Recomeço.jpeg',
        url: 'https://www.instagram.com/p/DWVBuLqlD6y/?igsh=MW11YTgzdHVqYTNkcA==',
        subcategory: 'Homem-Aranha',
      },
    ] as ProjectItem[],
  },
  {
    id: 7,
    title: 'Modelagem 3D',
    category: 'Modelagem 3D',
    description: 'Modelagem, texturização e renderização 3D com Blender, incluindo personagens, cenários e objetos',
    stats: 'Projetos concluídos',
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-sky-500/20',
    icon: Box,
    image: '/',
    bannerImage: '/projects/Capas/BLENDER3D.jpeg',
    showInHero: true,
    items: [
      {
        id: 1,
        title: 'TODO: Projeto 3D 1',
        description: 'Em breve',
        image: '/',
      },
      {
        id: 2,
        title: 'TODO: Projeto 3D 2',
        description: 'Em breve',
        image: '/',
      },
    ] as ProjectItem[],
  },
  {
    id: 8,
    title: 'Edição de VFX',
    category: 'Edição de VFX',
    description: 'Criação de efeitos visuais com After Effects, Blender e outras ferramentas profissionais de VFX',
    stats: 'Projetos concluídos',
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-yellow-400/20',
    icon: Sparkles,
    image: '/',
    bannerImage: '/projects/Capas/VFX.jpeg',
    showInHero: true,
    items: [
      {
        id: 1,
        title: 'TODO: Projeto VFX 1',
        description: 'Em breve',
        image: '/',
      },
      {
        id: 2,
        title: 'TODO: Projeto VFX 2',
        description: 'Em breve',
        image: '/',
      },
    ] as ProjectItem[],
  },

]

export const heroProjects = projects.filter((p) => p.showInHero !== false)
export const sectionProjects = projects.filter((p) => !(p as any).heroOnly)

export const successCases = [
  {
    imagem: 'successCases/QueridasComprasCase1.png',
    nome: 'Queridas Compras',
    descrição: 'Um site de vitrine online para diversas lojas regionais de João Pessoa, PB',
    url: 'https://queridascompras.com.br/',
  },
  {
    imagem: 'successCases/VideoEdicaoCase2.jpeg',
    nome: 'Edição do vídeo em canal do youtube "Universo Nerdístico Studios"',
    descrição: 'Vídeo "CRIEI UMA ANIMAÇÃO DE HOMEM-ARANHA: UM NOVO DIA NO BLENDER 3D" editado por nós',
    url: 'https://www.youtube.com/watch?v=7WwPkAa9kZQ'
  },
  {
    imagem: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
    nome: 'TODO: 1 projeto de design gráfico, branding e identidade visual',
    descrição: 'Clientes satisfeitos com as melhores ofertas e experiências de compra.',
  },
  {
    imagem: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
    nome: 'TODO: 1 projeto extra de programação (talvez o WMF?)',
    descrição: 'Clientes satisfeitos com as melhores ofertas e experiências de compra.',
  },
]

export const categories = ['Todos', 'Desenvolvimento Web', 'Desenvolvimento de Software', 'Desenvolvimento Mobile', 'Edição de Vídeo e Mídia Social', 'Design Gráfico, Branding e Identidade Visual', 'Posters', 'Modelagem 3D', 'Edição de VFX']

export const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Casos de sucesso', href: '#success-cases' },
  { label: 'Projetos', href: '#projects' },
  //{ label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
]
