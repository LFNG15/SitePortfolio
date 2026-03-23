import {
  TrendingUp,
  Award,
  Globe,
  Code2,
  Smartphone,
  Heart,
  Share2,
  Video
} from 'lucide-react'

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
    image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
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
    image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
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
    image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg',
  },
  {
    id: 4,
    title: 'Edição de Vídeo',
    category: 'Edição de Vídeo',
    description: 'Edição profissional com Adobe Premiere Pro, Adobe After Effects e Blender',
    stats: 'Projetos concluídos',
    color: '#3b82f6',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    icon: Video,
    image: '/segundoedit.gif',
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
    image: '/api/placeholder/1344/768',
  },
  {
    id: 6,
    title: 'Edição de Mídia Social',
    category: 'Edição de Mídia Social',
    description: 'Edição de vídeos para mídia social focado tanto em empresas e indivíduos.',
    stats: 'Projetos concluídos',
    color: '#ec4899',
    gradient: 'from-pink-500/20 to-rose-500/20',
    icon: Share2,
    image: '/api/placeholder/1344/768',
  },
]

export const successStats = [
  { value: 150, suffix: '+', label: 'Queridas Compras', icon: Code2, image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg' },
  { value: 98, suffix: '%', label: 'Satisfação dos clientes', icon: Award, image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg' },
  { value: 50, suffix: 'M+', label: 'Receita gerada', prefix: '$', icon: TrendingUp, image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg' },
  { value: 50, suffix: '+', label: 'Clientes globais', icon: Globe, image: '/754c7b4129faa5bd5d8e6b0ba629f459.jpg' },
]

export const successCases = [
  {
    imagem: '/Captura de tela 2026-03-13 161007.png',
    nome: 'Queridas Compras',
    descrição: 'Um site de vitrine online para diversas lojas regionais de João Pessoa, PB',
    url: 'https://queridas-compras-vitrine.vercel.app/',
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

export const categories = ['Todos', 'Desenvolvimento Web', 'Desenvolvimento de Software', 'Desenvolvimento Mobile', 'Edição de Vídeo', 'Design Gráfico, Branding e Identidade Visual', 'Edição de Mídia Social']

export const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Casos de sucesso', href: '#success-cases' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
]

