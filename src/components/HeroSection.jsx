import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-white text-center px-4 sm:px-10 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/12/hero-bg-4.jpg")`,
      }}
    >
    
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-slide-up tracking-wide leading-tight">
          Empowering Businesses with{" "}
          <span className="text-green-500">IT Solutions</span>
        </h1>
        <p className="text-md sm:text-lg md:text-xl mb-6 text-gray-300 animate-fade-in-delay">
          We provide top-notch IT consulting services to help you scale and succeed.
        </p>
        <a
          href="#contact"
          className="bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-lg uppercase tracking-wider shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
