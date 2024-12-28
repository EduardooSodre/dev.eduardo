import Link from "next/link";
import { ButtonHireMe } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="nav flex w-full justify-between px-40 py-4 text-primary-foreground ">
      <div className=" nav-link flex gap-10 opacity-80">
        <Link href="/" className={"text-lg link"}>
          Home
        </Link>
        <Link href="#Services" className={"text-lg link"}>
          Services
        </Link>
        <Link href="#About-me" className={"text-lg link"}>
          About me
        </Link>
        <Link href="#Portfolio" className={"text-lg link"}>
          Portifolio
        </Link>
        <Link href="#Contact-me" className={"text-lg link"}>
          Contact me
        </Link>
      </div>
      <ButtonHireMe />
    </nav>
  );
};

export default Navbar;
