import Link from "next/link";
import CountryCard from "@/components/CountryCard";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import { countries } from "@/constant";

export default function CountriesPage() {
  return (
    <div className="bg-gray-100">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src="/usa.webp"
          alt="school"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4">
          <div className="flex-col md:flex-row flex items-center gap-4">
            <h1 className="text-4xl text-center font-bold mb-4 text-white">
              Countries
            </h1>
          </div>
          <div className="flex items-center gap-1 text-white">
            <Link href="/" className="flex items-center gap-1 font-medium">
              <HomeIcon className="w-5 h-5" />
              Home
            </Link>
            <ChevronRightIcon className="w-6 h-6" />
            Countries
          </div>
        </div>
      </div>
      <div className="container py-16 px-4 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {countries.map((country) => (
            <Link key={country.id} href={`/countries/${country.id}`}>
              <div>
                <CountryCard country={country} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
