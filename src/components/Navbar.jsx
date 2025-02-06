import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); 
  };

  return (
    <nav className="bg-grey-700 text-white  shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
       <img src="https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/12/fintech-logo.svg"></img>
      
        <button className="lg:hidden block text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

     
        <div className={`lg:flex space-x-6   ${menuOpen ? "block absolute top-20 left-0 p-6 bg-gray-900 w-full text-center py-4" : "hidden"}`}>
          <button onClick={() => scrollToSection("about")} className="hover:text-gray-300 transition block py-2">About</button>
          <button onClick={() => scrollToSection("services")} className="hover:text-gray-300 transition block py-2">Services</button>
          <button onClick={() => scrollToSection("why-choose-us")} className="hover:text-gray-300 transition block py-2">Why Us</button>
          <button onClick={() => scrollToSection("how-it-works")} className="hover:text-gray-300 transition block py-2">How It Works</button>
          <button onClick={() => scrollToSection("testimonials")} className="hover:text-gray-300 transition block py-2">Testimonials</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-gray-300 transition block py-2">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
