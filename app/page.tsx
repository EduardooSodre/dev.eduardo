"use client";

import Navbar from "./components/nav-bar";
import Forms from "./components/ui/form";
import { ButtonHome } from "./components/ui/button";
import SocialMedia from "./components/ui/icons-links-social";
import Carrossel from "./components/Portfolio";
import Services from "./components/Services";
import AboutMe from "./components/AboltMe";
import Image from "next/image";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Home */}
      <section className="home w-full flex px-40 py-10 ">
        <div className="w-full py-10">
          <p className="text-primary-foreground opacity-50">Hi I am</p>
          <p className="text-2xl font-bold text-secondary opacity-80">
            Eduardo Sodré
          </p>
          <h1 className="text-4xl mt-2 text-green-400 font-bold">
            Full Stack Developer
          </h1>
          <div className=" social">
            <SocialMedia />
          </div>
          <ButtonHome />
        </div>
        <div className="w-1/2 perfil ">
          <Image
            width={500}
            height={500}
            className="rounded-xl object-cover shadow-lg"
            src="/perfil.png"
            alt="photo perfil Eduardo"
            loading="lazy"
          />
        </div>
      </section>

      {/* Pagina de Serviços */}
      <section
        id="Services"
        className="services flex px-40 flex-col items-center py-10 justify-center w-full ">
        <Services />
      </section>

      {/* Sobre mim */}
      <section
        id="About-me"
        className="about-me w-full px-40 flex flex-col items-center py-10 ">
        <AboutMe />

      </section >

      {/* Meus projetos */}
      <section
        id="Portfolio"
        className="portfolio px-40 flex flex-col items-center py-10 ">
        <Carrossel />
      </section>

      {/* Formulário */}
      <section
        id="Contact-me"
        className="px-40 contact-me flex flex-col items-center py-10 ">
        <Forms />
      </section>

      {/* Rodapé */}
      <Footer />
    </>
  );
};
export default Home;
