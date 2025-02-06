import React, { useEffect, useState } from "react";

const Testimonials = ({ content }) => {
  const testimonials = content ? content.split(", ") : [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="p-8 sm:p-12 bg-blue-100 text-center overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-green-800 animate-slide-up">What Our Clients Say</h2>

      <div className="relative max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg animate-fade-in">
        <p className="text-lg sm:text-xl italic text-gray-700">"{testimonials[index]}"</p>
      </div>

     
    </section>
  );
};

export default Testimonials;
