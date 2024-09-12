import { Explore_countries } from "@/constant/data";
import Link from "next/link";
import React from "react";



const ExploreCountries = () => {
  return (
    <section className="bg-gray-50">
      <div className="container py-12 px-4 md:px-12">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Explore countries
        </h2>

        {/* Country Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Explore_countries.map((country, index) => (
            <Link
              href={country.link}
              key={index}
              className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black hover:bg-blue-600 hover:bg-opacity-50 bg-opacity-30 flex justify-center items-center transition-all duration-500">
                <h3 className="text-white text-xl font-semibold">
                  {country.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCountries;
