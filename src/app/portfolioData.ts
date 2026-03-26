import {
  Code2,
  Smartphone,
  Heart,
  Video,
  Palette
} from 'lucide-react'

export type ProjectItem = {
  id: number
  title: string
  description: string
  image: string
  url?: string
}

export const projects = [
  {
    id: 1,
    title: 'Desenvolvimento Web',
    category: 'Desenvolvimento Web',
    description: 'Trabalhamos com linguagens e frameworks como JavaScript, React, Python, Java, C#, Next.js, Tailwind, HTML, CSS, e muito mais',
    stats: 'Projetos concluídos',
    color: '#f97316',
    gradient: 'from-orange-500/20 to-amber-500/20',
    icon: Code2,
    image: '/',
    bannerImage: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
    items: [
      {
        id: 1,
        title: 'Queridas Compras',
        description: 'Site de vitrine online para diversas lojas regionais de João Pessoa, PB',
        image: '/successCases/QueridasComprasCase1.png',
        url: 'https://queridascompras.com.br/',
      },
      {
        id: 2,
        title: 'TODO: Projeto Web 2',
        description: 'Em breve',
        image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
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
    image: '/',
    bannerImage: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
    items: [
      {
        id: 1,
        title: 'TODO: Projeto de Software 1',
        description: 'Em breve',
        image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
      },
      {
        id: 2,
        title: 'TODO: Projeto de Software 2',
        description: 'Em breve',
        image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
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
    image: '/',
    bannerImage: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
    items: [
      {
        id: 1,
        title: 'TODO: App Mobile 1',
        description: 'Em breve',
        image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
      },
      {
        id: 2,
        title: 'TODO: App Mobile 2',
        description: 'Em breve',
        image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
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
    image: '/',
    bannerImage: '/ProjectsSection/LogoQCMotionDesign.webm',
    items: [
      {
        id: 1,
        title: 'TODO: Projeto de Edição 1',
        description: 'Em breve',
        image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
      },
      {
        id: 2,
        title: 'TODO: Projeto de Edição 2',
        description: 'Em breve',
        image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
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
    image: '/',
    bannerImage: '/',
    items: [
      {
        id: 1,
        title: 'TODO: Projeto de Design 1',
        description: 'Em breve',
        image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
      },
      {
        id: 2,
        title: 'TODO: Projeto de Design 2',
        description: 'Em breve',
        image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
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
    bannerImage: '/',
    showInHero: false,
    items: [
      {
        id: 1,
        title: '"Um Novo Dia"',
        description: 'Homem-Aranha Inspirado em The Amazing Spider-Man N° 345 vs Boomerang',
        image: 'projects/Posters/Homem-Aranha_Inspirado_em_The_Amazing_Spider-Man_N_345_vs_Boomerang.png',
        url: 'https://www.instagram.com/p/DWKfZoNlGZJ/'
      },
      {
        id: 2,
        title: 'Poster feito por Gabriel Dias',
        description: 'SPIDER-MAN: Brand New Day',
        image: 'projects/Posters/SPIDER-MAN_Brand_New_Day.png',
        url: 'https://www.instagram.com/p/DNHN7y3tMFn/'
      },
    ] as ProjectItem[],
  },
]

export const heroProjects = projects.filter((p) => p.showInHero !== false)

export const successCases = [
  {
    imagem: 'successCases/QueridasComprasCase1.png',
    nome: 'Queridas Compras',
    descrição: 'Um site de vitrine online para diversas lojas regionais de João Pessoa, PB',
    url: 'https://queridascompras.com.br/',
  },
  {
    imagem: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
    nome: 'TODO: 1 projeto de edição',
    descrição: 'Clientes satisfeitos com as melhores ofertas e experiências de compra.',
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

export const categories = ['Todos', 'Desenvolvimento Web', 'Desenvolvimento de Software', 'Desenvolvimento Mobile', 'Edição de Vídeo e Mídia Social', 'Design Gráfico, Branding e Identidade Visual', 'Posters']

export const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Casos de sucesso', href: '#success-cases' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
]
