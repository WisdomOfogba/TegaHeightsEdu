import { Footer_Abroad, Footer_Icon, Footer_More } from "@/constant/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800  text-white py-8">
      {/* Main Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-12">
        {/* Study Abroad Section */}
        <div>
          <h3 className="font-bold text-white text-lg mb-4">STUDY ABROAD</h3>
          <ul className="space-y-2">
            {Footer_Abroad.map((fa) => (
              <li className="hover:text-yellow-500" key={fa.id}>
                <Link href={fa.link}>{fa.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More Information Section */}
        <div>
          <h3 className="font-bold text-white text-lg mb-4">
            MORE INFORMATION
          </h3>
          <ul className="space-y-2">
            {Footer_More.map((fm) => (
              <li className="hover:text-yellow-500" key={fm.id}>
                <Link href={fm.link}>{fm.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 py-4 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-12">
          {/* Left Section */}
          <Link href="/">
            <Image src="/logo-black.svg" alt="logo" width={100} height={39.3} />
          </Link>
          <p className="text-sm text-gray-200">© TegaHeights Edu Ltd</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {Footer_Icon.map((fi) => (
              <a key={fi.id} href={fi.link} className="bg-gray-700 p-2 hover:bg-gray-800 transition-all rounded-md">
                <Image
                  src={fi.img}
                  alt={fi.id}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
