import { useRouter } from "next/router";
import React from "react";

const Introduction = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240x] mx-auto grid md:grid-cols-2">
        <img
          src="https://gd1.alicdn.com/imgextra/i1/2211771949634/O1CN01PPYsTE2L2QRt4lCZ1_!!2211771949634.jpg_400x400.jpg"
          alt="pink variation"
          className="mx-auto w-[500px]"
        />
        <div className="order-2  flex flex-col px-10 place-content-center my-auto mx-auto">
          <h2 className="text-2xl font-bold my-2 text-gray-800 text-center">
            Get Rid of Dryness and Enjoy Fragrant Air
          </h2>
          <p className="my-2">
            EurekaBreath™ Portable Air Humidifier is designed for the bedroom,
            office, living room and so on, brings you fresh and fragrant air at
            the lower noise level which is less than 26dB.
          </p>
          <p className="my-2">
            The power humidifying improves your sleep quality, moisturizes your
            skin, and alleviates the discomfort.
          </p>
          <button
            onClick={() => router.push("/product/air-humidifier")}
            className="bg-rose-300 rounded-full my-5 w-[200px] font-medium mx-auto py-3 hover:bg-rose-100 hover:translate-y-[-5px] duration-500"
          >
            Learn More
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
