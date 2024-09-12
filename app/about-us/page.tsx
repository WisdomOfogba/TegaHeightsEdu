import React from 'react';

const AboutUs = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className=" bg-gray-100 py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            We are committed to providing the best educational consultancy services for students looking to study abroad. 
            Our experienced team offers guidance on selecting the right university, preparing your application, and assisting with visa applications. 
            Our goal is to help students achieve their academic dreams and succeed globally.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Our expertise spans across countries like the United States, Canada, the United Kingdom, and Australia. We believe that education has the power to transform lives, 
            and we are passionate about guiding students through this journey.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-4 border border-gray-300 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p>We operate with honesty and transparency in all our dealings to ensure our clients trust us every step of the way.</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p>We go above and beyond to deliver top-tier service, ensuring students are placed in institutions that match their ambitions.</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Commitment</h3>
              <p>Our team is dedicated to supporting each student on their unique educational path from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl text-white font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">We are here to help you achieve your study abroad goals. Reach out to us today for a free consultation with our experienced team!</p>
          <a href="/contact-us" className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-md font-semibold transition">
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
