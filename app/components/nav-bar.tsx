
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
    { label: 'Projetos', href: '#Projetos' },
    { label: 'Fale comigo', href: '#Contact-me' },
  ];

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-neutral-900 text-white shadow-sm backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between">
        <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-emerald-400">eduardo.dev</h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 text-sm items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-emerald-300 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#Contact-me"
            className="ml-2 px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-600 transition-colors text-sm text-white font-semibold shadow-sm"
          >
            Fale comigo
          </a>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-neutral-900 px-6 pb-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-base border-b border-neutral-700 hover:text-emerald-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#Contact-me"
            className="block mt-4 px-4 py-3 rounded bg-emerald-500 hover:bg-emerald-600 text-center text-base text-white font-semibold"
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
