import React from "react";
import Navbar from "./Navbar"; // ✅ Import Navbar component

function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white">
      {/* ✅ Include Navbar */}
      <Navbar />

      {/* Background Video */}
      <video preload="none" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="https://videos.pexels.com/video-files/30877713/13203000_2560_1440_30fps.mp4" type="video/mp4" />
      </video>

      {/* Hero Content */}
      <div className="relative z-10 bg-black/50 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Platform</h1>
        <p className="mt-4 text-lg">Your one-stop solution for all services.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
