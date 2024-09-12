import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-12">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Study abroad, <br /> 
            <span className="text-blue-600">made easy</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Whether you’re after an undergraduate or a postgraduate degree, 
            our network of partner universities, and experienced counsellors, 
            ensure you get into a school designed to maximize your talent and resources.
          </p>
          <Link href="/schools" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700">
            VIEW SCHOOLS
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="/bg-1.jpg"
            alt="Students studying"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
