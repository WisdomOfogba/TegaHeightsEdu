// components/MobileNav.tsx

import { Nav } from "@/constant/data";
import { ArrowCircleRightIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleNav} className="p-2 ml-4 text-white md:hidden z-50">
        {isOpen ? <XIcon className="w-8 h-8 text-white" /> : <MenuIcon  className="w-8 h-8 text-gray-900"/>}
      </button>
      <div>
        <div
          className={`fixed top-0 right-0 w-full h-full bg-gray-800 bg-opacity-75 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:hidden`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="flex flex-col items-center justify-center h-full space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {Nav.map((nav) => (
              <Link
                key={nav.key}
                href={nav.link}
                className="text-white text-2xl font-black flex gap-2 items-center"
                onClick={() => setIsOpen(false)}
              >
                {nav.name}
                <ArrowCircleRightIcon className="w-6 h-6"/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
