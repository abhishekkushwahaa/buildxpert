"use client";

import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import { Menu, X, DollarSign, Info, Book, Grid } from "lucide-react";

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10 pl-10 pr-10 bg-transparent shadow-md">
      <aside className="flex items-center gap-2">
        <span className="text-2xl font-bold cursor-pointer text-white">
          BuildXpert.
        </span>
      </aside>

      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href="#pricing" className="hover:text-[#B8FDDF]">
            Pricing
          </Link>
          <Link href="#about" className="hover:text-[#B8FDDF]">
            About
          </Link>
          <Link href="#features" className="hover:text-[#B8FDDF]">
            Features
          </Link>
          <Link href="#docs" className="hover:text-[#B8FDDF]">
            Documentation
          </Link>
        </ul>
      </nav>

      <button
        className="md:hidden block z-20 text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-primary-foreground shadow-md md:hidden flex flex-col items-center py-4 gap-4 z-50 overflow-y-auto max-h-[80vh]">
          <Link
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-white hover:text-[#B8FDDF] pointer-events-auto"
          >
            <DollarSign size={20} /> Pricing
          </Link>
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-white hover:text-[#B8FDDF] pointer-events-auto"
          >
            <Info size={20} /> About
          </Link>
          <Link
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-white hover:text-[#B8FDDF] pointer-events-auto"
          >
            <Grid size={20} /> Features
          </Link>
          <Link
            href="#docs"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-white hover:text-[#B8FDDF] pointer-events-auto"
          >
            <Book size={20} /> Documentation
          </Link>
        </div>
      )}

      <aside className="flex gap-2 items-center">
        <Link
          href="/agency"
          className="bg-primary text-black p-2 px-4 rounded-md hover:bg-primary/90"
        >
          Agency
        </Link>
        <UserButton />
      </aside>
    </div>
  );
};

export default Navigation;
