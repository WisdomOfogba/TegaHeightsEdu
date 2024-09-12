import React from "react";

const MapComponent = () => {
  return (
    <div className="relative w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
      <iframe
        className="my-0 mx-auto w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3555034033416!2d3.361493373864427!3d6.602667693391233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92493335f211%3A0xc1a5fbd49480ebdb!2s10%20Sanyaolu%20Street%2C%20Oregun%2C%20Ikeja%20101233%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1725705940563!5m2!1sen!2sus"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
