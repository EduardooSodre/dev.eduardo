/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Navbar from "./components/nav-bar/nav-bar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProfileForm } from "./components/ui/form";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="px-40 py-10 ">
        <p className="text-primary-foreground">Hi I am</p>
        <p className="text-2xl font-bold text-secondary ">Eduardo Sodré</p>
        <h1 className="text-4xl mt-2 text-green-400 font-bold">
          Full Stack Developer
        </h1>

        <div className="mt-10 flex space-x-4">
          <a href="https://www.instagram.com/eduardo.sodre_" className="group">
            <div className="w-10 h-10 rounded-full border border-gray-500 flex justify-center items-center hover:bg-gray-700 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-4 h-4 group-hover:scale-110 transition-transform"
              />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/eduardo-sodr%C3%A9-65bb30293/"
            className="group">
            <div className="w-10 h-10 rounded-full border border-gray-500 flex justify-center items-center hover:bg-gray-700 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-4 h-4 group-hover:scale-110 transition-transform"
              />
            </div>
          </a>

          <a href="https://github.com/EduardooSodre" className="group">
            <div className="w-10 h-10 rounded-full border border-gray-500 flex justify-center items-center hover:bg-gray-700 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                alt="GitHub"
                className="w-4 h-4 group-hover:scale-110 transition-transform"
              />
            </div>
          </a>

          <a href="https://www.behance.net/eduardosodr3" className="group">
            <div className="w-10 h-10 rounded-full border border-gray-500 flex justify-center items-center hover:bg-gray-700 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145799.png"
                alt="Behance"
                className="w-4 h-4 group-hover:scale-110 transition-transform"
              />
            </div>
          </a>
        </div>

        <Button className="mt-10 bg-green-400  hover:bg-white hover:text-green-400">
          <a
            href="https://wa.me/18996198597"
            target="_blank"
            rel="noopener noreferrer">
            Hire Me
          </a>
        </Button>

        <Button className="mx-5">Download CV</Button>
      </section>
      <section id="Services" className="flex flex-col items-center py-10 ">
        <h2 className="text-4xl font-bold">Services</h2>
        <p className="text-lg opacity-60 mt-2 mb-10">
          Web development combines design, speed, and functionality to create
          exceptional experiences.
        </p>

        <div className="flex-wrap mt-10 justify-between px-40 flex ">
          <div className="mb-8  max-w-xs p-6 bg-secondary-foreground rounded-lg flex flex-col items-center">
            <img
              src="/react.svg"
              alt="logo react"
              className="w-10 h-10 mx-auto"
            />
            <h5 className="mb-2 text-2xl font-semibold text-green-400">
              Need a help in Claim?
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
          </div>
          <div className=" mb-8 max-w-xs p-6 bg-secondary-foreground rounded-lg flex flex-col items-center">
            <img
              src="/react.svg"
              alt="logo react"
              className="w-10 h-10 mx-auto"
            />
            <h5 className="mb-2 text-2xl font-semibold text-green-400">
              Need a help in Claim?
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
          </div>
          <div className=" mb-8 max-w-xs p-6 bg-secondary-foreground rounded-lg flex flex-col items-center">
            <img
              src="/react.svg"
              alt="logo react"
              className="w-10 h-10 mx-auto"
            />
            <h5 className="mb-2 text-2xl font-semibold text-green-400">
              Need a help in Claim?
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
          </div>
          <div className=" mb-8 max-w-xs p-6 bg-secondary-foreground rounded-lg flex flex-col items-center">
            <img
              src="/react.svg"
              alt="logo react"
              className="w-10 h-10 mx-auto"
            />
            <h5 className="mb-2 text-2xl font-semibold text-green-400">
              Need a help in Claim?
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
          </div>
          <div className="mb-8 max-w-xs p-6 bg-secondary-foreground rounded-lg flex flex-col items-center">
            <img
              src="/react.svg"
              alt="logo react"
              className="w-10 h-10 mx-auto"
            />
            <h5 className="mb-2 text-2xl font-semibold text-green-400">
              Need a help in Claim?
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
          </div>
          <div className="mb-8 max-w-xs p-6 bg-secondary-foreground rounded-lg flex flex-col items-center">
            <img
              src="/react.svg"
              alt="logo react"
              className="w-10 h-10 mx-auto"
            />
            <h5 className="mb-2 text-2xl font-semibold text-green-400">
              Need a help in Claim?
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
          </div>
        </div>
      </section>
      <section id="Portfolio" className="py-10">
        <h2 className="text-2xl text-center mb-10">Portfolio</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src="/FinanceFlow.png" alt="imagem da FinanceFlow" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src="/A-Vision.png" alt="imagem da FinanceFlow" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src="/Capputeeno.png" alt="imagem da FinanceFlow" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src="/Taskhub.png" alt="imagem da FinanceFlow" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src="/AluraBooks.png" alt="imagem da FinanceFlow" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src="/Combo+Alura.png" alt="imagem da FinanceFlow" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      <ProfileForm />
    </>
  );
};
export default Home;
