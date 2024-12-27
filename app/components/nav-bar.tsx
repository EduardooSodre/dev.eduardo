import Link from "next/link";
import { ButtonHireMe } from "./ui/button";
const Navbar = () => {
  return (
    <nav className="nav flex w-full justify-between px-40 py-4 text-primary-foreground ">
      <div className="flex gap-10 opacity-80">
        <Link href="/" className={"text-lg"}>
          Home
        </Link>
        <Link href="#Services" className={"text-lg"}>
          Services
        </Link>
        <Link href="#About-me" className={"text-lg"}>
          About me
        </Link>
        <Link href="#Portfolio" className={"text-lg"}>
          Portifolio
        </Link>
        <Link href="#Contact-me" className={"text-lg"}>
          Contact me
        </Link>
      </div>
      <ButtonHireMe />
    </nav>
  );
};

export default Navbar;
