import { Button } from "@/components/ui/button";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between px-40 py-4 text-primary-foreground opacity-70">
      <div className="flex gap-10">
        <Link href="/" className={"text-lg"}>
          Home
        </Link>
        <Link href="#Services" className={"text-lg"}>
          Services
        </Link>
        <Link href="#About me" className={"text-lg"}>
          About me
        </Link>
        <Link href="#Portfolio" className={"text-lg"}>
          Portifolio
        </Link>
        <Link href="#Contact-me" className={"text-lg"}>
          Contact me
        </Link>
      </div>
      <Button className="px-8 bg-green-400 hover:bg-white hover:text-green-400">
        <a
          href="https://wa.me/18996198597"
          target="_blank"
          rel="noopener noreferrer">
          Hire Me
        </a>
      </Button>
    </nav>
  );
};

export default Navbar;
