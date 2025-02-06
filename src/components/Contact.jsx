import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="p-10 sm:p-16 text-green-800 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 animate-slide-up">Get In Touch</h2>
      <p className="text-lg sm:text-xl mb-8 animate-fade-in">We’d love to hear from you! Fill out the form below.</p>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg animate-fade-in">
        {submitted ? (
          <div className="text-green-600 text-xl font-semibold">
            ✅ Your message has been sent successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 text-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 text-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 text-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-green-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
