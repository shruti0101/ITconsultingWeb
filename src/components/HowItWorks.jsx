import React from "react";
import { CheckCircle } from "lucide-react";

const HowItWorks = ({ content }) => {
  return (
    <section id="how-it-works" className="p-10 sm:p-16 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-green-900 animate-slide-up">How It Works</h2>

        {content ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in">
            {content.split(", ").map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center"
              >
                <div className="absolute -top-6 bg-green-600 text-white p-3 rounded-full shadow-lg">
                  <CheckCircle size={28} />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mt-6">{`Step ${index + 1}`}</h3>
                <p className="text-gray-700 mt-2">{step}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-32">
            <p className="text-xl font-semibold text-gray-600">Loading...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
