import React from "react";

const ContactForm = () => {
  return (
    <div className="mx-auto px-4 mt-10">
      <div className="font-bold text-2xl text-center my-5 text-gray-800">
        Contact Us
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 pt-5">
        {/* Left */}
        <div className="place-content-center my-auto px-10">
          <h1 className="font-bold text-gray-800">
            We strive to provide the best service possible with every contact.
          </h1>
          <p className="mt-5">
            We operate in an industry built on trust. This can only be achieved
            through communication and experienced support - from the first
            contact.
          </p>
          <p className="font-bold mt-5">Get in touch</p>
          <p className="my-5">
            If you have any questions or need help, please feel out the form. We
            do our best to respond within 1 business days.
          </p>
        </div>

        {/* Right */}
        <div className="w-full md:max-w-full mx-auto px-10">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <form method="POST">
              <label className="block mb-6">
                <span className="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-2
          "
                  placeholder="Enter Full Name"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-2
          "
                  placeholder="Enter Email"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Message</span>
                <textarea
                  name="message"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-2
          "
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  className="
            h-10
            px-5
            text-white
            bg-rose-300
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-rose-200
            w-full
          "
                >
                  Contact Us
                </button>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
