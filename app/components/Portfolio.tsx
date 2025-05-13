"use client"

import { useState } from "react"
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
  const projectsPerPage = 6
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

  // Change page
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Remove the scrolling behavior to keep the page position static
  }

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = []

    // Always show first page
    pageNumbers.push(
      <PaginationItem key={1}>
        <PaginationLink
          href="#"
          isActive={currentPage === 1}
          onClick={(e) => {
            e.preventDefault()
            goToPage(1)
          }}
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
            href="#"
            isActive={currentPage === i}
            onClick={(e) => {
              e.preventDefault()
              goToPage(i)
            }}
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
            href="#"
            isActive={currentPage === totalPages}
            onClick={(e) => {
              e.preventDefault()
              goToPage(totalPages)
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    return pageNumbers
  }

  return (
    <section id="portfolio" className="py-20 bg-neutral-900 text-white px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Portfólio</h2>
        <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          Alguns dos projetos que desenvolvi com foco em performance, usabilidade e boas práticas de código.
        </p>

        <div

          className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {currentProjects.map((proj, idx) => (
            <div
              data-aos="flip-left"
              key={idx}
              className="bg-neutral-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <Image
                width={500}
                height={500}
                src={proj.image || "/placeholder.svg"}
                alt={`Imagem do projeto ${proj.title}`}
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-green-400 mb-2">{proj.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{proj.description}</p>
                <div className="flex items-center gap-3 text-lg text-gray-400 mb-4">
                  {proj.tech.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
                <Link href={proj.link} target="_blank" rel="noopener noreferrer" className="text-sm text-green-500 hover:underline">
                  Ver projeto ↗
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage > 1) goToPage(currentPage - 1)
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {getPageNumbers()}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
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
