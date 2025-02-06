import React from "react";
import { Briefcase, Code, Cloud, ShieldCheck, Smartphone, Rocket } from "lucide-react";

const serviceIcons = [
  <Briefcase size={32} className="text-green-600" />,
  <Code size={32} className="text-blue-600" />,
  <Cloud size={32} className="text-indigo-600" />,
  <ShieldCheck size={32} className="text-red-600" />,
  <Smartphone size={32} className="text-purple-600" />,
  <Rocket size={32} className="text-orange-600" />,
];

const Services = ({ content }) => {
  return (
    <section id="services" className="p-10 sm:p-16 bg-gradient-to-br from-white to-gray-100 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-green-900 animate-slide-up">Our Services</h2>

        {content ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in">
            {content.split(", ").map((service, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center border-t-4 border-green-500"
              >
                <div className="mb-4">{serviceIcons[index % serviceIcons.length]}</div>
                <h3 className="text-xl font-semibold text-gray-900">{service}</h3>
               
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

export default Services;
