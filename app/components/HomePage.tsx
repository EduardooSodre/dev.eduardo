// components/Home.tsx

import Image from 'next/image';
import SocialMedia from './ui/icons-links-social';
import { ButtonHome } from './ui/button';

export default function HomePage() {
    return (
        <section id='Home' className="home flex flex-col-reverse md:flex-row items-center px-6 sm:px-12 lg:px-40 py-20 bg-neutral-900 text-white">
            <div data-aos="fade-down-right" className="w-full md:w-1/2">
                <p className="text-sm text-gray-400">Olá, me chamo</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Eduardo Sodré</h2>
                <h1 className="text-2xl sm:text-3xl font-bold text-green-400 mt-1">
                    Desenvolvedor Full Stack
                </h1>
                <p className="text-gray-400 max-w-md mt-4 text-sm">
                    Foco em criar soluções práticas com tecnologia moderna, entregando interfaces bem feitas e funcionais. Tenho experiência com React, Next.js, Node.js e outras tecnologias do ecossistema TypeScript.
                </p>
                <div className="mt-4 social">
                    <SocialMedia />
                </div>
                <ButtonHome />
            </div>

            <div data-aos="fade-down-left" className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
                <Image
                    width={420}
                    height={420}
                    src="/perfil.png"
                    alt="Eduardo Sodré"
                    className="perfil rounded-xl object-cover shadow-xl"
                    loading="lazy"
                />
            </div>
        </section>
    );
}
