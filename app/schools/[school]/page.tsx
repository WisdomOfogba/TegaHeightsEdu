"use client";
import { notFound, useParams } from "next/navigation";
import { schools } from "@/constant";
import SchoolForm from "@/components/SchoolForm";
import FeaturedProgrammes from "@/components/FeaturedPrograms";
import WhyStudyHere from "@/components/WhyStudyHere";
import About from "@/components/About";
import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";

export default function SchoolDetails() {
  const { school: schoolId } = useParams(); // Use useParams to get the route parameter

  const school = schools.find((s) => s.id === schoolId);

  if (!school) {
    return notFound();
  }

  return (
    <div className="bg-gray-100">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={school.bg}
          alt="school"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4">
          <div className="flex-col md:flex-row flex items-center gap-4">
            <h1 className="text-4xl text-center font-bold mb-4 text-white">
              {school.name}
            </h1>
          </div>
          <div className="flex items-center gap-1 text-white">
            <Link href="/" className="flex items-center gap-1 font-medium">
              <HomeIcon className="w-5 h-5" />
              Home
            </Link>
            <ChevronRightIcon className="w-6 h-6" />
            <Link href="/schools" className="font-medium">
              Schools
            </Link>
            <ChevronRightIcon className="w-6 h-6" />
            {school.name}
          </div>
        </div>
      </div>
      <div className="container p-4 md:p-12">
        <div className="w-full flex flex-col gap-8 md:flex-row items-center md:items-start">
          <div className="md:w-3/4 flex flex-col items-center gap-8">
            {school.about && <About about={school.about} />}
            {school.why && <WhyStudyHere why={school.why} />}
            {school.feature && <FeaturedProgrammes feature={school.feature} />}
          </div>
          <SchoolForm school={school.name} />
        </div>
      </div>
    </div>
  );
}
