import React from "react";

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="200">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2
          style={{ fontFamily: "FreshMango" }}
          className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-400"
        >
          Kontakta mig
        </h2>
        <form action="#" className="space-y-8">
          <div>
            <label
              for="email"
              className="block mb-2 text-xl font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2,5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-xl font-medium text-white"
            >
              Meddelande
            </label>
            <textarea
              rows="6"
              id="message"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2,5"
              required
            />
          </div>
          <button className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 hover:shadow-[0_0_40px_rgba(13,148,136,0.7)] rounded-full text-lg">
            Skicka meddelande
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
