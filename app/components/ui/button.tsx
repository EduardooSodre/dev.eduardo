import { Button } from "@/components/ui/button";

const ButtonHome = () => {
  return (
    <div>
      <Button className="mt-10 bg-green-400 hover:bg-white hover:text-green-400">
        <a
          href="https://wa.me/18996198597"
          target="_blank"
          rel="noopener noreferrer">
          Hire Me
        </a>
      </Button>
      <Button className="mx-5">Download CV</Button>
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
          Hire Me
        </a>
      </Button>
    </div>
  );
};

export { ButtonHireMe };
