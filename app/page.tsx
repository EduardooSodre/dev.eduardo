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
          <img
            className=" border-none "
            src="/perfil.png"
            alt="photo perfil Eduardo"
          />
        </div>
      </section>

      <section
        id="Services"
        className="services flex px-40 flex-col items-center py-10 justify-center w-full ">
        <h1 className="services text-4xl font-bold ">Services</h1>
        <p className="services w-full flex justify-center text-justify items-center text-lg opacity-60 mt-2 mb-10 ">
          Web development combines design, speed, and functionality to create
          exceptional experiences.
        </p>
        <CardsServices />
      </section>

      <section
        id="About-me"
        className="about-me w-full px-40 flex flex-col items-center py-10 ">
        <h1 className="text-4xl font-bold">About Me</h1>
        <h2 className="text-lg opacity-60 mt-2 mb-10">
          I am a Full Stack Developer with a passion for creating beautiful and
          functional user experiences.
        </h2>
        <div className=" flex space-x-4">
          <div className="imagem w-1/2">
            <img
              src="/perfil2.png"
              alt="photo perfil Eduardo corpo inteiro"
              className="opacity-55"></img>
          </div>
          <div className="text ps-24 w-1/2 mt-40">
            <p className=" text-lg opacity-70 mb-10 text-justify ">
              I am passionate about transforming ideas into impactful realities
              that truly connect people. With a blend of creativity, dedication,
              and a personal touch, I strive to bring out the best in every
              project I take on. My focus is on creating solutions that not only
              look great but also make a real difference, crafting meaningful
              experiences that leave a lasting impression. Every detail matters
              to me, from the initial concept to the final product, ensuring
              that the work reflects not just quality but also heart. Great
              projects and solutions are built on collaboration, understanding,
              and a genuine desire to inspire. Let’s create something
              extraordinary together.
            </p>
            <ButtonHireMe />
          </div>
        </div>
      </section>

      <section
        id="Portfolio"
        className="portfolio px-40 flex flex-col items-center py-10 ">
        <h1 className="text-4xl font-bold mb-10">Portfolio</h1>
        <Carrossel />
      </section>

      <section
        id="Contact-me"
        className="px-40 contact-me flex flex-col items-center py-10 ">
        <h1 className="text-4xl font-bold">Contact Me</h1>
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
