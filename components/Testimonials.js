import React from "react";

const ProductTestimonials = () => {
  return (
    <div className="pt-16 white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">
          What does our customers say
        </h2>
        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8 hover:scale-105 duration-300 shadow-md">
            <div className="h-full flex flex-col justify-center space-y-4">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <p className="text-gray-600 md:text-xl">
                {" "}
                <span className="font-serif">&quot;</span>Perfect for my small
                office! I noticed a difference immediately. Picture for size
                reference, it&apos;s small but mighty. The reservoir is large enough
                to last my entire 8 hrs on interval. It turns off after 6 hours
                but is back up and running with two quick button pushes.
                <span className="font-serif">&quot;</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">Jane </h6>
                <span className="text-xs text-gray-500"> Designer</span>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8 hover:scale-105 duration-300 shadow-md">
            <img
              className="w-20 h-20 mx-auto rounded-full"
              src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-gray-600">
                {" "}
                <span className="font-serif">&quot;</span>It has greatly improved the
                air quality at my desk at work. It&apos;s very quiet, and I can
                breathe through my nose again!
                <span className="font-serif">&quot;</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">John</h6>
                <span className="text-xs text-gray-500">Engineer</span>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8 hover:scale-105 duration-300 shadow-md">
            <img
              className="w-20 h-20 mx-auto rounded-full"
              src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-gray-600">
                {" "}
                <span className="font-serif">&quot;</span>The item is small and very
                clean looking. It puts out a good amount of mist for its size!
                You can hear it misting, it&apos;s like a whisper so it doesn&apos;t
                bother me. I place it next to my money tree and i can already
                see so much new growth.
                <span className="font-serif">&quot;</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">Alex</h6>
                <span className="text-xs text-gray-500">Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTestimonials;
