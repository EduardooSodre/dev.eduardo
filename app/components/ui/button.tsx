import { Button } from "@/components/ui/button";

const ButtonHome = () => {
  return (
    <div className="flex gap-4 mt-6">
      <Button className="buttonhome px-6 py-2 bg-green-500 text-white rounded hover:bg-white hover:text-green-400 transition">
        <a
          href="https://wa.me/18996198597"
          target="_blank"
          rel="noopener noreferrer">
          Fale comigo
        </a>
      </Button>
      <Button className="buttonhome px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition">
        <a
          href="/Eduardo_Sodre_Desenvolvedor_Frontend_Nextjs.pdf"
          download
          className="text-inherit no-underline"
        >
          Download CV
        </a>
      </Button>
    </div>
  );
};

export { ButtonHome };

const ButtonHireMe = () => {
  return (
    <div>
      <Button className="button-nav px-8 bg-green-400 hover:bg-white hover:text-green-400">
        <a
          href="https://wa.me/18996198597"
          target="_blank"
          rel="noopener noreferrer">
          Fale comigo
        </a>
      </Button>
    </div>
  );
};

export { ButtonHireMe };
