import Image from "next/image";
import { ButtonHireMe } from "./ui/button";

export default function AboutMe() {
    return (
        <section
            id="sobre"
            className="py-20 text-white px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Imagem - escondida no mobile */}
                <div
                    data-aos="zoom-out-up"
                    className="hidden md:block w-full md:w-1/2">
                    <Image
                        width={500}
                        height={500}
                        src="/perfil2.png"
                        alt="Foto de Eduardo Sodré"
                        className="rounded-xl object-cover shadow-lg"
                        loading="lazy" />
                </div>

                {/* Texto */}
                <div
                    data-aos="zoom-out-left"
                    className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Sobre mim</h2>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base  mb-6 ">
                        Sou desenvolvedor front-end com foco em criar experiências digitais simples, funcionais e com propósito. Tenho formação pela Alura e Rocketseat, onde desenvolvi habilidades com Next.js, React, Node.js e outras tecnologias modernas.
                        <br />
                        Gosto de transformar ideias em projetos reais, com atenção ao detalhe, boa estrutura de código e foco total em quem vai usar. Acredito que tecnologia deve ser clara, acessível e construída em equipe.
                    </p>

                    <ButtonHireMe />
                </div>
            </div>
        </section >
    );
}
