import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
      
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 shadow-xl rounded-lg border border-gray-200"
      >
        {/* Name Input */}
        <div className="relative mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-4 top-4 text-gray-400 text-lg">👤</span>
        </div>

        {/* Email Input */}
        <div className="relative mb-6">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-4 top-4 text-gray-400 text-lg">📧</span>
        </div>

        {/* Message Input */}
        <div className="relative mb-6">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <span className="absolute left-4 top-4 text-gray-400 text-lg">📝</span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          📩 Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
