"use client";

import Navbar from "./components/nav-bar";
import Forms from "./components/ui/form";
import Carrossel from "./components/Portfolio";
import Services from "./components/Services";
// import AboutMe from "./components/About-me";
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
      <section id="Services" className="w-full py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Services />
        </div>
      </section>

      {/* Sobre mim */}
      {/* <section id="About-me" className="w-full py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AboutMe />
        </div>
      </section> */}

      {/* Meus projetos */}
      <div className="w-full py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Carrossel />
        </div>
      </div>

      {/* Formulário */}
      <section id="Contact-me" className="w-full py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Forms />
        </div>
      </section>

      {/* Rodapé */}
      <Footer />
    </>
  );
};
export default Home;
