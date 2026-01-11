# Site UUKA

Site institucional da UUKA, uma plataforma que impulsiona e empodera pessoas negras a serem protagonistas de suas carreiras, ocupando lugares de destaque.

## 🚀 Sobre o Projeto

O site UUKA é uma landing page moderna e responsiva desenvolvida com Next.js, apresentando informações sobre a organização, sua missão, visão, valores, metodologia, depoimentos, parcerias e contatos. O projeto utiliza Strapi como CMS (Content Management System) para gerenciamento de conteúdo e Supabase como banco de dados.

## 🛠️ Tecnologias

### Frontend
- **[Next.js 15](https://nextjs.org/)**
- **[React 19](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS 4](https://tailwindcss.com/)**
- **[shadcn/ui](https://ui.shadcn.com/)**
- **[Lucide React](https://lucide.dev/)**
- **[Embla Carousel](https://www.embla-carousel.com/)**
- **[Sonner](https://sonner.emilkowal.ski/)**

### Backend & Banco de Dados
- **[Strapi](https://strapi.io/)**
- **[Supabase](https://supabase.com/)**

### Ferramentas de Desenvolvimento
- **[ESLint](https://eslint.org/)**
- **[Prettier](https://prettier.io/)**
- **[Turbopack](https://turbo.build/pack)**

## 📁 Estrutura de Pastas

```
src/
├── app/                      # Next.js App Router
│   ├── _components/          # Componentes específicos da página
│   │   └── home-content.tsx  # Componente principal da página inicial
│   ├── globals.css           # Estilos globais
│   ├── layout.tsx            # Layout raiz da aplicação
│   └── page.tsx              # Página inicial (Server Component)
│
├── assets/                   # Arquivos estáticos
│   └── images/               # Imagens da aplicação
│
├── components/               # Componentes reutilizáveis
│   ├── Footer/               # Rodapé da aplicação
│   ├── Header/               # Cabeçalho e navegação
│   │   ├── desktop-menu.tsx  # Menu desktop
│   │   ├── header.tsx        # Componente principal do header
│   │   └── mobile-menu.tsx   # Menu mobile
│   └── ui/                   # Componentes base (shadcn/ui)
│       ├── button.tsx
│       ├── carousel.tsx
│       ├── collapsible.tsx
│       └── ...
│
├── connection/               # Configurações de conexão
│   └── api.ts                # Funções de fetch para Strapi
│
├── context/                  # Contexts React
│   └── page-loading-context.tsx  # Context para loading da página
│
├── lib/                      # Bibliotecas e utilitários
│   └── utils.ts              # Funções utilitárias
│
├── sections/                 # Seções da landing page
│   ├── About/                # Seção sobre
│   ├── Contact/              # Seção de contato
│   ├── Hero/                 # Hero section
│   ├── ImpactOverview/       # Visão geral de impacto
│   ├── Leadership/           # Seção de liderança
│   ├── MissionVisionValues/  # Missão, visão e valores
│   ├── Partnerships/         # Parcerias
│   ├── ScheduleMethodology/  # Cronograma e metodologia
│   ├── Supporters/           # Apoiadores
│   ├── Testimonials/         # Depoimentos
│   └── VirtuousCycleLeadership/  # Ciclo virtuoso
│
├── types/                    # Tipos TypeScript
│   └── strapi.ts             # Tipos do Strapi
│
└── utils/                    # Utilitários
    ├── error-message.tsx     # Componente de erro
    ├── percentage-counter.tsx    # Contador animado
    └── scroll-to-top-button.tsx  # Botão de scroll
```

## 🎨 Características

- ✅ **Server-Side Rendering (SSR)** - Melhor performance e SEO
- ✅ **Server Components** - Componentes renderizados no servidor
- ✅ **TypeScript** - Tipagem estática para maior segurança
- ✅ **Responsivo** - Design adaptável para todos os dispositivos
- ✅ **Acessível** - Componentes com foco em acessibilidade (shadcn/ui)
- ✅ **Performance** - Otimizações com Next.js Image, cache e lazy loading
- ✅ **Carrossel Interativo** - Galeria de imagens com autoplay
- ✅ **Loading States** - Feedback visual durante carregamento

## 🔌 Integração com Strapi

O projeto utiliza Strapi como CMS headless, permitindo que o conteúdo seja gerenciado através de uma interface administrativa. As principais entidades gerenciadas incluem:

- Header (navegação)
- Hero (imagens e textos hero)
- About (conteúdo sobre)
- Testimonials (depoimentos)
- Supporters (apoiadores)
- Contact (informações de contato)
- Partnerships (parceiros)
- Leadership (liderança)

## 🗄️ Banco de Dados

O projeto utiliza **Supabase** como plataforma de banco de dados PostgreSQL, que é usado pelo Strapi para armazenar o conteúdo gerenciado através do CMS.

## 📄 Licença

Este projeto é privado.

## 👨‍💻 Desenvolvido por

Desenvolvido por [Flavia Almeida](https://www.linkedin.com/in/flavia-dantas/)

