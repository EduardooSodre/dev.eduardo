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
} from "react-icons/si"
import { FiExternalLink } from "react-icons/fi"
import Link from "next/link"
import Image from "next/image"
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
    title: "Aquanize",
    description: "Sistema de gestão para piscineiros — site institucional com visual premium.",
    tech: [<SiNextdotjs key="next-aquanize" />, <SiTailwindcss key="tailwind-aquanize" />],
    link: "https://aquanize.com.br",
    image: "/projects/aquanize.png",
  },
  {
    title: "Autyro",
    description: "Saas - Portal e painel administrativo para listagem de veículos (marketplace automotivo).",
    tech: [<SiNextdotjs key="next-autyro" />, <SiSass key="sass-autyro" />],
    link: "https://autyro.vercel.app",
    image: "/projects/autyro.png",
  },
  {
    title: "CompanyClean Piscinas",
    description: "Site institucional para serviços de limpeza e manutenção de piscinas.",
    tech: [<SiNextdotjs key="next-clean" />, <SiTailwindcss key="tailwind-clean" />],
    link: "https://www.companycleanpiscinas.com.br",
    image: "/projects/companyclean.png",
  },
  {
    title: "A Rafa Criou",
    description: "Loja e-commerce de venda de artes digitais em pdf.",
    tech: [<SiNextdotjs key="next-rafa" />, <SiTailwindcss key="tailwind-rafa" />],
    link: "https://a-rafa-criou.vercel.app",
    image: "/projects/a-rafa-criou.png",
  },
  {
    title: "Zarife",
    description: "Loja de moda com layout elegante e foco em experiência visual.",
    tech: [<SiNextdotjs key="next-zarife" />, <SiCss3 key="css-zarife" />],
    link: "https://zarife.vercel.app",
    image: "/projects/zarife.png",
  },

  // other projects
  {
    title: "Pet Shop Dev",
    description: "Site de petshop com design responsivo, animações.",
    tech: [<SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />],
    link: "https://petshop-rho-olive.vercel.app",
    image: "/petshop.png",
  },
  {
    title: "Finance Growth",
    description: "Aplicativo de finanças pessoais com autenticação, dashboard e gráficos interativos.",
    tech: [<SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />, <SiOpenai key="openAi" />, <SiShadcnui key="Shadcnui" />, <SiStripe key="stripe" />, <SiClerk key="clerk" />],
    link: "https://finance-growth.vercel.app",
    image: "/FinanceFlow.png",
  },
  {
    title: "Task Hub",
    description: "Meu site que permite que você anote e organize suas tarefas de forma eficiente, sejam elas públicas ou privadas.",
    tech: [<SiNextdotjs key="next" />, <SiCss3 key="CssModules" />, <SiGoogleauthenticator key="AuthGoogle" />],
    link: "https://task-hub-phi.vercel.app",
    image: "/TaskHub.png",
  },
  {
    title: "A Vision",
    description: "Site de uma empresa de tecnologia com design responsivo.",
    tech: [<SiAngular key="angular" />, <SiCss3 key="css3" />],
    link: "#",
    image: "/A-Vision.png",
  },
  {
    title: "Motors Dev",
    description: "E-commerce de veículos com CRUD de anúncios integrado a um CMS.",
    tech: [<SiNextdotjs key="next" />, <SiSass key="sass" />],
    link: "https://motorsdev.vercel.app",
    image: "/motors-dev.png",
  },
  {
    title: "Repositório Git",
    description: "Repositório Git onde pode colocar seu repositório e ver informações sobre o Git e GitHub.",
    tech: [<SiJavascript key="js" />],
    link: "https://repositorio-github-mu.vercel.app",
    image: "/repositorio-git.png",
  },
  {
    title: "Jogo do Número Secreto",
    description: "Jogo simples de adivinhação de número, desenvolvido com HTML, CSS e JavaScript.",
    tech: [<SiHtml5 key="html" />, <SiCss3 key="css" />, <SiJavascript key="js" />],
    link: "https://jogo-do-mumero-secreto.vercel.app",
    image: "/jogo-numero-secreto.png",
  },
  {
    title: "AluraBooks",
    description: "Site de livros com design responsivo, animações.",
    tech: [<SiNextdotjs key="next" />, <SiNodedotjs key="node" />, <SiTailwindcss key="tailwind" />],
    link: "https://alurabook-three-gamma.vercel.app",
    image: "/AluraBooks.png",
  },
  {
    title: "Aluraplus",
    description:
      "Site desenvolvido no curso da Alura",
    tech: [<SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />],
    link: "https://dev-eduardo-phi.vercel.app",
    image: "/Combo+Alura.png",
  },
  {
    title: "Site loja de roupas",
    description: "Site de loja de roupas web.",
    tech: [<SiNextdotjs key="next" />, <SiCss3 key="css3" />],
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
    <section id="portfolio" ref={portfolioRef} className="py-20 bg-neutral-900 text-white px-6 sm:px-10 lg:px-24">
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
              data-aos-once="true"
              key={idx}
              className="group bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl motion-safe:transform hover:motion-safe:-translate-y-1 transition duration-300 flex flex-col h-full"
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

                <div className="flex flex-wrap items-center gap-3 mb-4 text-lg text-gray-400">
                  {proj.tech.map((icon, i) => (
                    <span key={i} className="opacity-90">{icon}</span>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <Link
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm shadow-sm transition-colors"
                    >
                      Ver projeto
                      <FiExternalLink />
                    </Link>

                    {/* Show development status for specific projects */}
                    <span className="text-xs text-gray-400 hidden sm:inline">
                      {['Zarife', 'A Rafa Criou', 'A Vision'].includes(proj.title) ? 'Desenvolvimento' : 'Ao vivo'}
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
