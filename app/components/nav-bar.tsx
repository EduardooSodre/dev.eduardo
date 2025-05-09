
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/#Home' },
    { label: 'Serviços', href: '#Services' },
    { label: 'Sobre mim', href: '#About-me' },
    { label: 'Portfólio', href: '#Portfolio' },
    { label: 'Fale comigo', href: '#Contact-me' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-neutral-900 text-white shadow-sm">
      <div className="max-w-8xl mx-auto px-4 md:px-10 lg:px-20 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide text-green-400">Eduardo.dev</h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 text-sm items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-green-400 transition"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#Contact-me"
            className="ml-4 px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition text-sm text-white font-semibold"
          >
            Fale comigo
          </a>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-neutral-900 px-6 pb-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm border-b border-neutral-700 hover:text-green-400 transition"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#Contact-me"
            className="block mt-4 px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-center text-sm text-white font-semibold"
            onClick={() => setOpen(false)}
          >
            Fale comigo
          </a>
        </div>
      )}
    </header>
  );
}

// import Link from "next/link";
// import { ButtonHireMe } from "./ui/button";

// const Navbar = () => {
//   return (
//     <nav className="nav flex w-full justify-between px-40 py-4 text-primary-foreground ">
//       <div className=" nav-link flex gap-10 opacity-80">
//         <Link href="/#" className={"text-lg link"}>
//           Home
//         </Link>
//         <Link href="#Services" className={"text-lg link"}>
//           Serviços
//         </Link>
//         <Link href="#About-me" className={"text-lg link"}>
//           Sobre mim
//         </Link>
//         <Link href="#Portfolio" className={"text-lg link"}>
//           Portfólio
//         </Link>
//         <Link href="#Contact-me" className={"text-lg link"}>
//           Fale comigo
//         </Link>
//       </div>
//       <ButtonHireMe />
//     </nav>
//   );
// };

// export default Navbar;
