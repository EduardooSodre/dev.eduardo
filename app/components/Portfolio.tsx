"use client"

import { useState, useRef, useEffect } from "react"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiAngular,
  SiOpenai,
  SiShadcnui,
  SiStripe,
  SiClerk,
  SiGoogleauthenticator,
  SiCloudflare,
  SiGoogletranslate,
  SiAuth0,
  SiPaypal,
  SiMercadopago,
  SiPix,
  SiRedis,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si"
import { FiExternalLink } from "react-icons/fi"
import { TbBrandCloudflare } from "react-icons/tb"
import { MdEmail } from "react-icons/md"
import Link from "next/link"
import Image from "next/image"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const projects = [
  // featured / newly requested projects first
  {
    title: "A Rafa Criou",
    description: "Loja e-commerce de venda de artes digitais em pdf.",
    tech: [
      { icon: <SiNextdotjs key="next-rafa" />, name: "Next.js" },
      { icon: <SiTypescript key="typescript-rafa" />, name: "TypeScript" },
      { icon: <SiTailwindcss key="tailwind-rafa" />, name: "Tailwind CSS" },
      { icon: <SiShadcnui key="Shadcnui" />, name: "Shadcn UI" },
      { icon: <SiAuth0 key="auth" />, name: "AUTH_SECRET" },
      { icon: <SiPostgresql key="neon" />, name: "Neon" },
      { icon: <SiCloudflare key="cloudinary" />, name: "Cloudinary" },
      { icon: <TbBrandCloudflare key="r2" />, name: "Cloudflare R2" },
      { icon: <SiGoogletranslate key="google" />, name: "Google" },
      { icon: <SiGoogletranslate key="deepl" />, name: "DeepL" },
      { icon: <SiRedis key="upstash" />, name: "Upstash Redis" },
      { icon: <MdEmail key="onesignal" />, name: "OneSignal" },
      { icon: <SiStripe key="stripe" />, name: "Stripe" },
      { icon: <SiPaypal key="paypal" />, name: "PayPal" },
      { icon: <SiMercadopago key="mercadopago" />, name: "Mercado Pago" },
      { icon: <SiPix key="pix" />, name: "Pix" },
    ],
    link: "https://arafacriou.com.br/",
    image: "/projects/a-rafa-criou.png",
  },
  {
    title: "Zarife",
    description: "Loja de moda com layout elegante e foco em experiência visual.",
    tech: [
      { icon: <SiNextdotjs key="next-zarife" />, name: "Next.js" },
      { icon: <SiTypescript key="typescript-zarife" />, name: "TypeScript" },
      { icon: <SiTailwindcss key="tailwind-zarife" />, name: "Tailwind CSS" },
      { icon: <SiShadcnui key="Shadcnui" />, name: "Shadcn UI" },
      { icon: <SiPostgresql key="neon" />, name: "Neon" },
      { icon: <SiCloudflare key="cloudinary" />, name: "Cloudinary" },
      { icon: <SiClerk key="clerk" />, name: "Clerk" },
      { icon: <SiStripe key="stripe" />, name: "Stripe" },
      { icon: <SiPaypal key="paypal" />, name: "PayPal" },
    ],
    link: "https://zarife.vercel.app",
    image: "/projects/zarife.png",
  },
  {
    title: "Autyro",
    description: "Saas - Portal e painel administrativo para listagem de veículos (marketplace automotivo).",
    tech: [
      { icon: <SiNextdotjs key="next-autyro" />, name: "Next.js" },
      { icon: <SiTypescript key="typescript-autyro" />, name: "TypeScript" },
      { icon: <SiTailwindcss key="tailwind-autyro" />, name: "Tailwind CSS" },
      { icon: <SiShadcnui key="Shadcnui" />, name: "Shadcn UI" },
      { icon: <SiClerk key="clerk" />, name: "Clerk" },
      { icon: <SiPostgresql key="neon" />, name: "Neon" },
      { icon: <SiCloudflare key="cloudinary" />, name: "Cloudinary" },
      { icon: <SiOpenai key="openAi" />, name: "OpenAI" },
      { icon: <SiStripe key="stripe" />, name: "Stripe" },

    ],
    link: "https://autyro.vercel.app",
    image: "/projects/autyro.png",
  },
  {
    title: "Aquanize",
    description: "Sistema de gestão para piscineiros — site institucional com visual premium.",
    tech: [
      { icon: <SiNextdotjs key="next-aquanize" />, name: "Next.js" },
      { icon: <SiTailwindcss key="tailwind-aquanize" />, name: "Tailwind CSS" },
    ],
    link: "https://aquanize.com.br",
    image: "/projects/aquanize.png",
  },
  {
    title: "CompanyClean Piscinas",
    description: "Site institucional para serviços de limpeza e manutenção de piscinas.",
    tech: [
      { icon: <SiNextdotjs key="next-clean" />, name: "Next.js" },
      { icon: <SiTailwindcss key="tailwind-clean" />, name: "Tailwind CSS" },
      { icon: <SiShadcnui key="Shadcnui" />, name: "Shadcn UI" },
      { icon: <SiCloudflare key="cloudinary" />, name: "Cloudinary" },
    ],
    link: "https://www.companycleanpiscinas.com.br",
    image: "/projects/companyclean.png",
  },

  // other projects
  {
    title: "Pet Shop Dev",
    description: "Site de petshop com design responsivo, animações.",
    tech: [
      { icon: <SiNextdotjs key="next" />, name: "Next.js" },
      { icon: <SiTailwindcss key="tailwind" />, name: "Tailwind CSS" },
    ],
    link: "https://petshop-rho-olive.vercel.app",
    image: "/petshop.png",
  },
  {
    title: "Finance Growth",
    description: "Aplicativo de finanças pessoais com autenticação, dashboard e gráficos interativos.",
    tech: [
      { icon: <SiNextdotjs key="next" />, name: "Next.js" },
      { icon: <SiTailwindcss key="tailwind" />, name: "Tailwind CSS" },
      { icon: <SiOpenai key="openAi" />, name: "OpenAI" },
      { icon: <SiShadcnui key="Shadcnui" />, name: "Shadcn UI" },
      { icon: <SiStripe key="stripe" />, name: "Stripe" },
      { icon: <SiClerk key="clerk" />, name: "Clerk" },
    ],
    link: "https://finance-growth.vercel.app",
    image: "/FinanceFlow.png",
  },
  {
    title: "Task Hub",
    description: "Meu site que permite que você anote e organize suas tarefas de forma eficiente, sejam elas públicas ou privadas.",
    tech: [
      { icon: <SiNextdotjs key="next" />, name: "Next.js" },
      { icon: <SiCss3 key="CssModules" />, name: "CSS Modules" },
      { icon: <SiGoogleauthenticator key="AuthGoogle" />, name: "Google Auth" },
    ],
    link: "https://task-hub-phi.vercel.app",
    image: "/TaskHub.png",
  },
  {
    title: "A Vision",
    description: "Site de uma empresa de tecnologia com design responsivo.",
    tech: [
      { icon: <SiAngular key="angular" />, name: "Angular" },
      { icon: <SiCss3 key="css3" />, name: "CSS3" },
    ],
    link: "#",
    image: "/A-Vision.png",
  },
  {
    title: "Motors Dev",
    description: "E-commerce de veículos com CRUD de anúncios integrado a um CMS.",
    tech: [
      { icon: <SiNextdotjs key="next" />, name: "Next.js" },
      { icon: <SiSass key="sass" />, name: "Sass" },
    ],
    link: "https://motorsdev.vercel.app",
    image: "/motors-dev.png",
  },
  {
    title: "Repositório Git",
    description: "Repositório Git onde pode colocar seu repositório e ver informações sobre o Git e GitHub.",
    tech: [
      { icon: <SiJavascript key="js" />, name: "JavaScript" },
    ],
    link: "https://repositorio-github-mu.vercel.app",
    image: "/repositorio-git.png",
  },
  {
    title: "Jogo do Número Secreto",
    description: "Jogo simples de adivinhação de número, desenvolvido com HTML, CSS e JavaScript.",
    tech: [
      { icon: <SiHtml5 key="html" />, name: "HTML5" },
      { icon: <SiCss3 key="css" />, name: "CSS3" },
      { icon: <SiJavascript key="js" />, name: "JavaScript" },
    ],
    link: "https://jogo-do-mumero-secreto.vercel.app",
    image: "/jogo-numero-secreto.png",
  },
  {
    title: "AluraBooks",
    description: "Site de livros com design responsivo, animações.",
    tech: [
      { icon: <SiNextdotjs key="next" />, name: "Next.js" },
      { icon: <SiNodedotjs key="node" />, name: "Node.js" },
      { icon: <SiTailwindcss key="tailwind" />, name: "Tailwind CSS" },
    ],
    link: "https://alurabook-three-gamma.vercel.app",
    image: "/AluraBooks.png",
  },
  {
    title: "Aluraplus",
    description:
      "Site desenvolvido no curso da Alura",
    tech: [
      { icon: <SiNextdotjs key="next" />, name: "Next.js" },
      { icon: <SiTailwindcss key="tailwind" />, name: "Tailwind CSS" },
    ],
    link: "https://dev-eduardo-phi.vercel.app",
    image: "/Combo+Alura.png",
  },
  {
    title: "Site loja de roupas",
    description: "Site de loja de roupas web.",
    tech: [
      { icon: <SiNextdotjs key="next" />, name: "Next.js" },
      { icon: <SiCss3 key="css3" />, name: "CSS3" },
    ],
    link: "https://capputeeno-opal.vercel.app",
    image: "/Capputeeno.png",
  },



]

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1)
  const portfolioRef = useRef<HTMLElement | null>(null)
  const projectsPerPage = 9
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

  // Change page
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  // Scroll into view when page changes (but avoid scrolling on initial mount)
  const mounted = useRef(false)
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }

    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [currentPage])

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = []

    // Always show first page
    pageNumbers.push(
      <PaginationItem key={1}>
        <PaginationLink
          isActive={currentPage === 1}
          onClick={() => goToPage(1)}
        >
          1
        </PaginationLink>
      </PaginationItem>,
    )

    // Show ellipsis if needed
    if (currentPage > 3) {
      pageNumbers.push(
        <PaginationItem key="ellipsis-1">
          <PaginationEllipsis />
        </PaginationItem>,
      )
    }

    // Show current page and adjacent pages
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 1 || i === totalPages) continue // Skip first and last page as they're always shown

      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={currentPage === i}
            onClick={() => goToPage(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      pageNumbers.push(
        <PaginationItem key="ellipsis-2">
          <PaginationEllipsis />
        </PaginationItem>,
      )
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      pageNumbers.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            isActive={currentPage === totalPages}
            onClick={() => goToPage(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    return pageNumbers
  }

  return (
    <section id="Projetos" ref={portfolioRef} className="py-20 bg-neutral-900 text-white px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Projetos</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Projetos recentes e representativos do meu trabalho: interfaces acessíveis, performance e atenção ao detalhe. Clique em qualquer cartão para abrir o projeto.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((proj, idx) => (
            <article
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay={(idx % projectsPerPage) * 80}
              data-aos-once="true"
              key={idx}
              className="group card-tilt relative bg-gradient-to-br from-neutral-900/60 to-neutral-800/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform-gpu hover:-translate-y-3 hover:scale-[1.02] motion-safe:duration-500 flex flex-col h-full"
            >
              <div className="relative h-48 sm:h-56 w-full bg-neutral-700 flex-shrink-0">
                <Image
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  src={proj.image || '/projects/placeholder.png'}
                  alt={`Imagem do projeto ${proj.title}`}
                  className="object-cover"
                  loading="lazy"
                />
                {/* Soft gradient overlay for depth and to handle transparent images */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 to-transparent mix-blend-overlay" />
                <div className="card-shine absolute inset-0 pointer-events-none" />
                {/* Card accent dot */}
                <div className="absolute bottom-3 left-3 w-10 h-4 rounded-full opacity-90 bg-gradient-to-r from-emerald-400 to-cyan-400" />
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${proj.title} em nova aba`}
                  className="absolute top-3 right-3 inline-flex items-center gap-2 bg-black/50 text-white text-sm rounded-full px-3 py-1 opacity-90 hover:opacity-100"
                >
                  Abrir
                  <FiExternalLink />
                </a>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">{proj.title}</h3>
                </div>
                <p className="text-sm md:text-base text-gray-300 mt-2 mb-4">{proj.description}</p>

                <TooltipProvider>
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-lg text-gray-400">
                    {proj.tech.map((tech, i) => (
                      <Tooltip key={i}>
                        <TooltipTrigger asChild>
                          <span className="opacity-90 cursor-help">{tech.icon}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{tech.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>

                <div className="mt-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <Link
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-emerald-500 hover:to-cyan-600 text-white px-4 py-2 rounded-md text-sm shadow-md transition-all duration-300 transform-gpu hover:-translate-y-1"
                    >
                      Ver projeto
                      <FiExternalLink className="ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>

                    {/* Show development status for specific projects */}
                    <span className="text-xs text-gray-400 hidden sm:inline">
                      {['Zarife', 'A Vision'].includes(proj.title) ? 'Desenvolvimento' : 'Ao vivo'}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => {
                    if (currentPage > 1) goToPage(currentPage - 1)
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {getPageNumbers()}

              <PaginationItem>
                <PaginationNext
                  onClick={() => {
                    if (currentPage < totalPages) goToPage(currentPage + 1)
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  )
}
