"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
    pnumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSending(true); // Show "Sending..." message
    setStatus(""); // Clear any previous status messages

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          fname: "",
          lname: "",
          email: "",
          message: "",
          pnumber: "",
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }

    setIsSending(false); // Enable the button and hide "Sending..." message
  };

  return (
    <div className="bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

      <form method="get" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="fname"
            className="block text-sm font-medium text-gray-700"
          >
            First Name <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={formData.fname}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div>
          <label
            htmlFor="lname"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={formData.lname}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address <span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div>
          <label
            htmlFor="pnumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            name="pnumber"
            id="pnumber"
            value={formData.pnumber}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message <span className="text-red-700">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
        >
          {isSending ? <img src="/loader.svg" alt="loader" /> : "Send Message"}
        </button>
        {status && (
          <p
            className={`mt-4 ${
              status.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
