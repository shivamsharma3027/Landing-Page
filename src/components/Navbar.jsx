import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home"); // ✅ Default Active Page

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-50 p-4 flex justify-between items-center z-50 shadow-md">
      {/* ✅ Brand Name */}
      <h1 className="text-2xl font-bold text-gray-800 tracking-wide">House of MarkTech</h1>

      {/* ✅ Navigation Links with Active Effect */}
      <ul className="flex space-x-8">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <li key={item} className="relative">
            <a
              href="#"
              className={`text-gray-700 font-medium transition-all duration-300 
                ${active === item ? "text-blue-600 text-lg font-semibold" : "hover:text-blue-500"}
              `}
              onClick={() => setActive(item)}
            >
              {item}
            </a>
            {/* 🔹 Active Underline Effect */}
            {active === item && (
              <span className="absolute left-0 bottom-[-18px] w-full h-[3px] bg-zinc-600 transition-all duration-300"></span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
