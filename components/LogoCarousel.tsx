import { carousel } from "@/constant/data";
import React from "react";

const LogoCarousel = () => {
  return (
    <section className="bg-white">
      <div className="w-full overflow-hidden container py-8 px-4 md:px-12">
        <div className="carousel flex space-x-8 items-center animate-scroll">
          {/* Repeat the logo images to create an infinite scroll effect */}
          {carousel.map((logo, index) => (
            <img
            key={index}
              src={`/schools/${logo.img}`}
              alt={logo.name}
              className="h-10 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
