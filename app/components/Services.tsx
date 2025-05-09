// components/Services.tsx
import { ReactNode } from 'react';
import { SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiTypescript, SiFigma } from 'react-icons/si';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: ServiceCardProps[] = [
  {
    icon: <SiReact className="text-sky-400 text-3xl" />,
    title: 'Interfaces modernas com React',
    description: 'Criação de interfaces dinâmicas, responsivas e fáceis de usar, com foco em experiência do usuário e performance.'
  },
  {
    icon: <SiNextdotjs className="text-white text-3xl" />,
    title: 'Aplicações otimizadas com Next.js',
    description: 'Desenvolvimento de SPAs e SSRs com roteamento inteligente, SEO avançado e deploy na Vercel.'
  },
  {
    icon: <SiNodedotjs className="text-green-500 text-3xl" />,
    title: 'Back-end leve e eficiente com Node.js',
    description: 'Criação de APIs REST, autenticação, integração com bancos de dados e lógica de negócio com Express.'
  },
  {
    icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
    title: 'Estilo rápido e consistente com Tailwind',
    description: 'Layouts modernos, responsivos e altamente customizáveis com produtividade e padronização no CSS.'
  },
  {
    icon: <SiTypescript className="text-blue-500 text-3xl" />,
    title: 'Código seguro e escalável com TypeScript',
    description: 'Aplicações com tipagem forte, reduzindo bugs e facilitando a manutenção e evolução do projeto.'
  },
  {
    icon: <SiFigma className="text-pink-400 text-3xl" />,
    title: 'Interfaces que fazem sentido',
    description: 'Design funcional e centrado no usuário. Crio telas que unem clareza visual com lógica de navegação fluida.'
  }
];

export default function Services() {
  return (
    <section className="py-20  text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Serviços</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Com foco em performance, design e usabilidade, desenvolvo soluções web modernas e escaláveis.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              data-aos="flip-down"
              key={index}
              className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
