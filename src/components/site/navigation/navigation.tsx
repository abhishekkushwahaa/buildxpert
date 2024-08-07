import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10 pl-10 pr-10">
      <aside className="flex items-center gap-2">
        <span className="text-2xl font-bold cursor-pointer"> BuildXpert.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"} className="hover:text-[#B8FDDF]">
            Pricing
          </Link>
          <Link href={"#"} className="hover:text-[#B8FDDF]">
            About
          </Link>
          <Link href={"#"} className="hover:text-[#B8FDDF]">
            Documentation
          </Link>
          <Link href={"#"} className="hover:text-[#B8FDDF]">
            Features
          </Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href={"/agency"}
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
