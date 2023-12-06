import React from "react";
import SigninButton from "./SigninButton";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex px-4 justify-between h-[60px] text-purple-500 py-2 fixed top-0 z-100 w-screen left-0 gap-4 bg-white shadow-md">
      <Link href="/leaderboard" className="flex items-center text-xl w-[50%] font-bold gap-2">
      <Image src="/icons/chess.png" height={500} width={500} className="h-full w-auto"/>
      <h3 className="">Chess Rating</h3>
      </Link>
      <SigninButton />
    
    </header>
  );
};

export default Navbar;
