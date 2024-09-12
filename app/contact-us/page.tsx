import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import MapComponent from "@/components/MapComponent";
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen container py-12 px-4 md:px-12">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Feel free to reach out to us by filling out the form below or
            contacting us directly.
          </p>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Map and Contact Info */}
          <div className="space-y-8">
            <MapComponent />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
