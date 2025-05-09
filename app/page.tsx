"use client";

import Navbar from "./components/nav-bar";
import Forms from "./components/ui/form";
import Carrossel from "./components/Portfolio";
import Services from "./components/Services";
import AboutMe from "./components/About-me";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

const Home = () => {
  return (
    <>
      {/* Navegação */}
      <Navbar />

      {/* Home */}
      <HomePage />

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
