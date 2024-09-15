"use client";
import { notFound, useParams } from "next/navigation";
import { countries, schools } from "@/constant";
import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import About from "@/components/About";
import WhyStudyHere from "@/components/WhyStudyHere";
import CountryForm from "@/components/CountryForm";

export default function CountryDetails() {
  const { country: countryCode } = useParams(); 

  const country = countries.find((c) => c.id === countryCode);

  if (!country) {
    return notFound();
  }

  return (
    <div className="bg-gray-100">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={country.bg}
          alt="school"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4">
          <div className="flex-col md:flex-row flex items-center gap-4">
            <h1 className="text-4xl text-center font-bold mb-4 text-white">
              Study in {country.name}
            </h1>
          </div>
          <div className="flex items-center gap-1 text-white">
            <Link href="/" className="flex items-center gap-1 font-medium">
              <HomeIcon className="w-5 h-5" />
              Home
            </Link>
            <ChevronRightIcon className="w-6 h-6" />
            <Link href="/countries" className="font-medium">
              Countries
            </Link>
            <ChevronRightIcon className="w-6 h-6" />
            {country.name}
          </div>
        </div>
      </div>
      <div className="container py-16 px-4 md:px-12">
        <div className="w-full flex flex-col gap-8 md:flex-row items-center md:items-start mb-8">
          <div className="md:w-3/4 flex flex-col items-center gap-8">
            {country.about && <About about={country.about} />}
            {country.whyc && <WhyStudyHere whyc={country.whyc} />}
          </div>
          <CountryForm school={country.name} />
        </div>
        {country.schools && <h2 className="text-2xl font-bold mb-8">Study in these Schools</h2>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {country.schools?.map((schoolName) => {
            const school = schools.find((s) => s.name === schoolName);
            return (
              <Link key={school?.id} href={`/schools/${school?.id}`}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden pb-10 h-72 flex flex-col justify-between">
                  <img
                    src={school?.bg}
                    alt={schoolName}
                    className="w-full h-40 object-cover"
                  />
                  <h2 className="text-xl font-semibold mb-2 px-4">
                    Study in {schoolName}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
