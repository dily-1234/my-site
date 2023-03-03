import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-full h-20 z-10 fixed bg-black text-white">
      <div className="flex justify-between items-center h-full px-4">
        <Link href="/">
          <h1 className="cursor-pointer text-3xl uppercase font-bold">
            Dilkash
          </h1>
        </Link>
        <div className="flex space-x-4">
          <Link href="/about">
            <h1 className="hover:text-gray-400">About</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
