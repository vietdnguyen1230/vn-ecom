import { useState } from "react";

const ProductInfo = ({ products }) => {
  console.log(products)
  return (
    <div className="w-full bg-white py-16 px-4 z-1">
      <div className="max-w-[1240x] mx-auto grid md:grid-cols-2">
        <img
          src="https://gd1.alicdn.com/imgextra/i1/2211771949634/O1CN01PPYsTE2L2QRt4lCZ1_!!2211771949634.jpg_400x400.jpg"
          alt="pink variation"
          className="mx-auto w-[500px]"
        />
        <div className="order-2 sm:order-2 px-10 place-content-center my-auto z-5">
          <h2 className="text-2xl font-bold mt-5 text-gray-800">
            EurekaBreath Air Humidifier
          </h2>
          <p className="py-4 font-semibold">
            ${products?.map((product) => product.price)}
          </p>
          <button
            onClick={() => router.push("/product")}
            className="bg-rose-300 rounded-full my-5 w-full font-medium mx-auto py-3 hover:bg-rose-100 hover:translate-y-[-5px] duration-500"
          >
            Add to Cart
          </button>{" "}
          <p className="my-5">
            This cool mist humidifier has a vivid colorful Cycling light setting
            creates a peaceful ambiance while delivering a soothing mist. It
            offers maximum relaxation for you. The night light could improve
            your sleeping quality.
          </p>
          <p className="my-5">
            Whether you&apos;re a small space-dweller, have an arid desk situation
            going, or are looking for a good travel option, EurekaBreath mini
            humidifier will offer the sweet relief you crave from dry air.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

const images = [
  {
    url: "https://gd4.alicdn.com/imgextra/i1/3670011270/O1CN019igJBR1LFhkiBMLaF_!!3670011270.jpg_400x400.jpg",
  },
  {
    url: "https://gd4.alicdn.com/imgextra/i4/3670011270/O1CN01RGDdK61LFhkjCJkAt_!!3670011270.jpg_400x400.jpg",
  },
  {
    url: "https://gd3.alicdn.com/imgextra/i1/3670011270/O1CN01b3LtK51LFhkjdc4eI_!!3670011270.jpg_400x400.jpg",
  },
];
