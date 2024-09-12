// components/Testimonials.js

import { testimonials } from "@/constant/data";
import Image from "next/image";

const Testimonials = () => {

  return (
    <section className="bg-blue-600">
      <div className="container px-4 md:px-12 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white text-4xl mb-10">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-lg">
                <p className="text-gray-800 italic mb-4">
                  "{testimonial.message}"
                </p>
                <div className="flex items-center space-x-4 mt-6">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      layout="fill"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
