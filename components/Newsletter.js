import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white bg-gray-800 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Sign Up To Our Newsletter
          </h1>
          <p className="text-rose-300">And get additional 15% off today.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-rose-300 text-black rounded-md font-medium w-[200px] ml-4 my-6 px-7 py-3 hover:bg-rose-100 hover:translate-y-[-5px] duration-500">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
