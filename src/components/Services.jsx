import React from "react";
import { FaCode, FaMobileAlt, FaSearch } from "react-icons/fa"; // Icons for better UI

function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "We build high-performing, scalable, and secure websites using modern technologies like React, Next.js, and Node.js.",
      icon: <FaCode className="text-blue-600 text-5xl mb-4" />,
    },
    {
      title: "App Development",
      desc: "Get user-friendly and optimized mobile applications for iOS and Android with seamless performance.",
      icon: <FaMobileAlt className="text-green-600 text-5xl mb-4" />,
    },
    {
      title: "SEO Optimization",
      desc: "Improve your search engine rankings and increase visibility with our SEO and digital marketing strategies.",
      icon: <FaSearch className="text-yellow-500 text-5xl mb-4" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 bg-white shadow-xl rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold mt-4 text-gray-900">{service.title}</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
