"use client";
import { Nav } from "@/constant/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SearchPopup from "@/components/SearchPopup";
import MobileNav from "./MobileNav";
import { SearchIcon } from "@heroicons/react/solid";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white w-full sticky top-0 left-0 z-40">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-12">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={100} height={39.3} />
        </Link>
        <div className="flex items-center ">
          <div className="flex items-center gap-4">
            <ul className="hidden md:flex gap-4 items-center ">
              {Nav.map((nav) => (
                <li title={nav.key} key={nav.key}>
                  <Link className={`${pathname === nav.link ? "font-bold text-blue-600" : "font-normal hover:font-bold transition-all duration-300"}`} href={nav.link}>{nav.name}</Link>
                </li>
              ))}
            </ul>
            <div className="">
              <button
                onClick={openPopup}
                className="px-2 py-1 bg-gray-800  text-white rounded-md"
                title="search"
              >
                <SearchIcon className="h-6 w-6 text-white" />
              </button>
              <SearchPopup isOpen={isPopupOpen} open={openPopup} onClose={closePopup} />
            </div>
          </div>
          <MobileNav/>
        </div>
      </div>
    </nav>
  );
};

export default Header;
