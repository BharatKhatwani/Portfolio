import React from 'react';

import {motion} from 'framer-motion';
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0a3dde5a-f41c-4b97-82b9-e1579fc6ccfa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        // console.error("Error", data);
        setResult(data.message || "Submission failed");
      }
    } catch (error) {
      // console.error("Network error", error);
      setResult("Network error, please try again later.");
    }
  };

  return (
    <motion.section
     initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
     viewport={{ once: false, amount: 0.3 }}

        // className="relative z-10 text-center"
      id="contact"
      className="min-h-screen flex items-center justify-center flex-col px-4 py-16 scroll-mt-20"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-[#4EC3FF] text-center mb-4">
        Contact Me
      </h1>
      <div className="max-w-4xl w-full bg-opacity-80 rounded-xl p-8 md:p-12 shadow-lg flex justify-center">
        {/* Contact Form */}
        <div className="w-full md:w-3/4 lg:w-2/3">
          <form className="flex flex-col space-y-6" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4EC3FF]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4EC3FF]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#4EC3FF]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-[#4EC3FF] text-white rounded-xl hover:bg-[#1E90FF] transition duration-300"
            >
              Send Message
            </button>
          </form>
          {result && <p className="mt-4 text-center text-white">{result}</p>}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
