import SchoolCard from "@/components/SchoolCard";
import { schools } from "@/constant";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function SchoolsPage() {
  return (
    <div className="bg-gray-100">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src="/bcu.webp"
          alt="school"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4">
          <div className="flex-col md:flex-row flex items-center gap-4">
            <h1 className="text-4xl text-center font-bold mb-4 text-white">
              Where will you like Study
            </h1>
          </div>
          <div className="flex items-center gap-1 text-white">
            <Link href="/" className="flex items-center gap-1 font-medium">
              <HomeIcon className="w-5 h-5" />
              Home
            </Link>
            <ChevronRightIcon className="w-6 h-6" />
            Schools
          </div>
        </div>
      </div>
      <div className="container py-16 px-4 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {schools.map((school) => (
            <Link key={school.id} href={`/schools/${school.id}`}>
              <div>
                <SchoolCard school={school} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
