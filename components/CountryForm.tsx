"use client";
import React, { useState } from "react";

type SchoolProps = {
  school: string;
};

const CountryForm = ({ school }: SchoolProps) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    pnumber: "",
    eduqualification: "",
    state: "",
    studybudget: "",
    title: school,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
      const res = await fetch("/countries/api", {
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
          pnumber: "",
          eduqualification: "",
          state: "",
          studybudget: "",
          title: school,
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
    <div className="bg-white p-8 w-full md:w-auto shadow-md rounded-lg .container">
      <h2 className="text-2xl font-semibold mb-6">
        Learn more about studying Here
      </h2>

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
            Last Name <span className="text-red-700">*</span>
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
            htmlFor="eduqualification"
            className="block text-sm font-medium text-gray-700"
          >
            Highest Education Qualification{" "}
            <span className="text-red-700">*</span>
          </label>
          <select
            name="eduqualification"
            id="eduqualification"
            value={formData.eduqualification}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          >
            <option disabled value="">
              Select
            </option>
            <option value="O'level">O'level</option>
            <option value="OND">OND</option>
            <option value="HND">HND</option>
            <option value="Bsc">Bsc</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="eduqualification"
            className="block text-sm font-medium text-gray-700"
          >
            What State are you located? <span className="text-red-700">*</span>
          </label>
          <select
            name="state"
            id="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          >
            <option disabled value="">
              Select
            </option>
            <option value="Abia">Abia</option>
            <option value="Adamawa">Adamawa</option>
            <option value="Akwa Ibom">Akwa Ibom</option>
            <option value="Anambra">Anambra</option>
            <option value="Bauchi">Bauchi</option>
            <option value="Bayelsa">Bayelsa</option>
            <option value="Benue">Benue</option>
            <option value="Borno">Borno</option>
            <option value="Cross River">Cross River</option>
            <option value="Delta">Delta</option>
            <option value="Ebonyi">Ebonyi</option>
            <option value="Enugu">Enugu</option>
            <option value="Edo">Edo</option>
            <option value="Ekiti">Ekiti</option>
            <option value="FCT">FCT</option>
            <option value="Gombe">Gombe</option>
            <option value="Imo">Imo</option>
            <option value="Jigawa">Jigawa</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Kano">Kano</option>
            <option value="Katsina">Katsina</option>
            <option value="Kebbi">Kebbi</option>
            <option value="Kogi">Kogi</option>
            <option value="Kwara">Kwara</option>
            <option value="Lagos">Lagos</option>
            <option value="Nasarawa">Nasarawa</option>
            <option value="Niger">Niger</option>
            <option value="Ogun">Ogun</option>
            <option value="Ondo">Ondo</option>
            <option value="Osun">Osun</option>
            <option value="Oyo">Oyo</option>
            <option value="Plateau">Plateau</option>
            <option value="Rivers">Rivers</option>
            <option value="Sokoto">Sokoto</option>
            <option value="Taraba">Taraba</option>
            <option value="Yobe">Yobe</option>
            <option value="Zamfara">Zamfara</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="eduqualification"
            className="block text-sm font-medium text-gray-700"
          >
            Highest Education Qualification{" "}
            <span className="text-red-700">*</span>
          </label>
          <select
            name="studybudget"
            id="studybudget"
            value={formData.studybudget}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          >
            <option disabled value="">
              Select
            </option>
            <option value="$1 - $4,999">$1 - $4,999</option>
            <option value="$5,000 - $10,999">$5,000 - $10,999</option>
            <option value="$11,000 - $20,000">$11,000 - $20,000</option>
          </select>
        </div>
        <p>Contact me with more info</p>
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

export default CountryForm;
