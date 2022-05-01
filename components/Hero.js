import { useRouter } from "next/router";
import React from "react";
import Typed from "react-typed";
const Hero = () => {
  const router = useRouter();
  return (
    <div>
      <div className="max-w-[800px] my-[-200px] sm:my-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="font-bold p-2 text-2xl">Enjoy The Fresh Air </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-4">
          Eureka<span className="text-rose-300">Breath</span> Portable Air
          Humidifier
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl text-rose-300">
            Simply
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl pl-2"
            strings={["Refreshing"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button
          onClick={() => router.push("/product/air-humidifier")}
          className="bg-rose-300 rounded-full my-5 w-[200px] font-medium mx-auto py-3 hover:bg-rose-100 hover:translate-y-[-5px] duration-500"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
