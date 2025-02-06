import React from "react";
import { CheckCircle } from "lucide-react"; 

const WhyChooseUs = ({ content }) => {
  return (
    <section id="why-choose-us" className="p-12 bg-gradient-to-br from-blue-50 to-blue-100 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-green-800 animate-slide-up">
          Why Choose Us?
        </h2>

        {content ? (
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {content.split(", ").map((point, index) => (
              <li
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex items-center gap-4"
              >
                <CheckCircle size={28} className="text-green-600" />
                <p className="text-gray-700 font-semibold">{point}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex justify-center items-center h-32">
            <p className="text-xl font-semibold text-gray-600">Loading...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
