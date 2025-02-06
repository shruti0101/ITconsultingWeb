import React from "react";

const About = ({ content }) => {
  return (
    <section id="about" className="relative py-16 bg-gradient-to-r from-green-100 to-blue-200 text-slate-700 text-center overflow-hidden">
    
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
    
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 animate-slide-up">
          About <span className="text-yellow-400">Us</span>
        </h2>

     
        <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 sm:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto animate-fade-in">
          <p className="text-lg sm:text-xl font-medium text-gray-700 leading-relaxed">
            {content || "Loading..."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
