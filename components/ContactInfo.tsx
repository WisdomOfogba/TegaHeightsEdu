import React from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/solid';

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Our Contact Information</h2>

      <div className="space-y-4">
        <div className="flex items-center">
          <LocationMarkerIcon className="h-6 w-6 text-blue-600 mr-2" />
          <p>10, Sanyaolu Street, Oregun, Ikeja, Lagos State</p>
        </div>
        <div className="flex items-center">
          <PhoneIcon className="h-6 w-6 text-blue-600 mr-2" />
          <p>(+234) 8163 65 7363</p>
        </div>
        <div className="flex items-center">
          <MailIcon className="h-6 w-6 text-blue-600 mr-2" />
          <p>proforreal@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
