"use client";
/* eslint-disable @next/next/no-img-element */
import Navbar from "./components/nav-bar";
import Forms from "./components/ui/form";
import { ButtonHireMe, ButtonHome } from "./components/ui/button";
import CardsServices from "./components/ui/cards";
import SocialMedia from "./components/ui/icons-links-social";
import Carrossel from "./components/ui/carousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="flex px-40 py-10 ">
        <div className="w-1/2 py-10">
          <p className="text-primary-foreground opacity-50">Hi I am</p>
          <p className="text-2xl font-bold text-secondary opacity-80">
            Eduardo Sodré
          </p>
          <h1 className="text-4xl mt-2 text-green-400 font-bold">
            Full Stack Developer
          </h1>
          <SocialMedia />

          <ButtonHome />
        </div>
        <div className="w-1/2 ">
          <img
            className="w-auto h-auto border-none backdrop-none"
            src="/perfil.png"
            alt="photo perfil Eduardo"
          />
        </div>
      </section>
      <section id="Services" className="flex flex-col items-center py-10 ">
        <h2 className="text-4xl font-bold">Services</h2>
        <p className="text-lg opacity-60 mt-2 mb-10">
          Web development combines design, speed, and functionality to create
          exceptional experiences.
        </p>
        <CardsServices />
      </section>
      <section
        id="About-me"
        className=" px-40 flex flex-col items-center py-10 ">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-lg opacity-60 mt-2 mb-10">
          I am a Full Stack Developer with a passion for creating beautiful and
          functional user experiences.
        </p>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <img
              src="/perfil2.png"
              alt="photo perfil Eduardo corpo inteiro"
              className="opacity-55"></img>
          </div>
          <div className="ps-24 w-1/2 mt-40">
            <p className=" text-lg opacity-70 mb-10 text-justify ">
              Sou apaixonado por transformar ideias em realidades impactantes
              que realmente conectam as pessoas. Com uma mistura de
              criatividade, dedicação e um toque pessoal, me esforço para trazer
              à tona o que há de melhor em cada projeto que assumo. Meu foco é
              criar soluções que não apenas parecem bons, mas fazem uma
              diferença real, criando experiências significativas que deixam uma
              impressão duradoura. Cada detalhe é importante para mim, desde o
              primeiro conceito até o produto final, garantindo que o trabalho
              reflita não apenas qualidade, mas também coração. que grandes
              projetos e soluções são construídos com base na colaboração,
              compreensão e um desejo genuíno de inspirar. Vamos criar algo
              extraordinário juntos.
            </p>
            <ButtonHireMe />
          </div>
        </div>
      </section>

      <section
        id="Portfolio"
        className=" px-40 flex flex-col items-center py-10 ">
        <h2 className="text-4xl font-bold mb-10">Portfolio</h2>
        <Carrossel />
      </section>

      <section id="Contact-me" className="flex flex-col items-center py-10 ">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-lg opacity-60 mt-2 mb-10">
          Let&rsquo;s connect! Reach out and let&rsquo;s bring your vision to
          life.
        </p>
        <Forms />
      </section>
    </>
  );
};
export default Home;
