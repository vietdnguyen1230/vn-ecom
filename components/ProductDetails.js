import React from "react";
import { useRouter } from "next/router";
const ProductDetails = () => {
  const router = useRouter();
  return (
    <div className="my-5">
      <div className="max-w justify-center my-10">
        <p className="text-center font-bold text-2xl text-gray-800 border-b-2 border-gray-800">
          How it Works
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        {/* Text Introducing Product First Section*/}
        <div className="order-2 md:order-1  px-10 place-content-center my-auto">
          <h2 className="text-2xl font-bold mt-5 text-gray-800">
            WHY DO I NEED THIS?
          </h2>
          <p className="my-5">
            If you&apos;re finding yourself waking up with congestion, having a
            hard time breathing at night or feel congested throughout the day,
            then you might benefit from a humidifier.
          </p>
          <p className="my-5">
            The Cleveland Clinic reports that dry air may cause problems
            including: dry eyes, Sore throat, dry nasal passages, bloody nose,
            make colds and flus worse, chapped skin and lips, itchy/dry skin,
            worsened asthma and allergy symptoms.
          </p>
          <p className="my-5">
            Keeping the air in your home from becoming too dry may help with
            these issues. Depending on where you live, controlling indoor
            humidity is not always easy. It is best to keep your home&apos;s
            humidity within an optimal range. The Environmental Protection
            Agency (EPA) recommends that you keep the air in your home between
            30 and 50 percent humidity.
          </p>
        </div>
        {/* Image  */}
        <div className="order-1 md:order-2">
          <img
            src="https://ae01.alicdn.com/kf/Hf3142c1e4ff84f3393e658ba31f0142f8.jpg"
            alt=""
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Second Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        {/* Text Introducing Product First Section*/}
        <div className="order-2 md:order-2  px-10 place-content-center my-auto">
          <h2 className="text-2xl font-bold mt-5 text-gray-800">
            DRY AIR RELIEF
          </h2>
          <p className="my-5">
            EurekaBreath™ Portable Air Humidifier quickly moisturizes the air so
            you can breathe comfortably and get more restful sleep.
          </p>
          <p className="my-5">
            Sleeping itself aids in repair, rejuvenation and maintenance of your
            immune system. Adding a humidifier in your bedroom can bolster the
            effects sleeping naturally provides.
          </p>
        </div>
        {/* Image  */}
        <div className="order-1 md:order-1">
          <img
            src="https://gd1.alicdn.com/imgextra/i3/3670011270/O1CN012CLaka1LFhkiBJ7sM_!!3670011270.jpg_400x400.jpg"
            alt=""
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Third Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="order-2 md:order-1  px-10 place-content-center my-auto">
          <h2 className="text-2xl font-bold mt-5 text-gray-800">
            BENEFITS OF HUMIDIFIERS
          </h2>
          <p className="my-5">
            Air that is not too dry may help you avoid colds and flu - Viral
            colds and flu can feel awful and can severely affect your sleep. In
            the winter months, they might seem to pass from person to person
            with no signs of slowing down. Thankfully, air at acceptable levels
            of humidity that is not too dry may lessen the infectivity of
            airborne viruses.
          </p>
          <p className="my-5">
            Higher humidity may help loosen congestion - Dry air may cause mucus
            to become dry and thick, which can result in clogged nasal passages.
          </p>
          <p className="my-5">
            In turn, this may lead to a stuffy nose, sore throat, and sinus
            pain. Humidifiers may help by adding moisture to the area, which
            might help break up phlegm in your nose and chest.
          </p>
        </div>
        {/* Image  */}
        <div className="order-1 md:order-2">
          <img
            src="https://i5.walmartimages.com/asr/b14e5c54-d6e6-4349-acc2-4ef99438b2d3.caba5a18d405f857b4f80b373c5adfb8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            alt=""
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Fourth Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        {/* Text Introducing Product First Section*/}
        <div className="order-2 md:order-2  px-10 place-content-center my-auto">
          <h2 className="text-2xl font-bold mt-5 text-gray-800">
            WHISPER-QUIET OPERATION
          </h2>
          <p className="my-5">
            Ultrasonic technology emits safe moisture and runs quietly (less
            than 26dB), as if you are sitting in a library.
          </p>
          <p className="my-5">
            Providing a peaceful environment whether you are working or
            sleeping.
          </p>
        </div>
        {/* Image  */}
        <div className="order-1 md:order-1">
          <img
            src="https://i5.walmartimages.com/asr/6038ca59-d27b-4a6b-b27e-f365e37719c4.739d725a7a1fc70473ac22272a28c8e8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            alt=""
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Fifth Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="order-2 md:order-1  px-10 place-content-center my-auto">
          <h2 className="text-2xl font-bold mt-5 text-gray-800">
            YEAR-ROUND COMFORT
          </h2>
          <p className="my-5">
            High and low-speed settings combined with 360° mist nozzle help you
            consistently balance and regulate the humidity in your home.
          </p>
          <p className="my-5">
            Tilt the mist to your face to keep the skin tender at all times. As
            well as year long relief from cold-like symptoms and sinus issues.
          </p>
          <p className="my-5"></p>
        </div>
        {/* Image  */}
        <div className="order-1 md:order-2">
          <img
            src="https://ae01.alicdn.com/kf/H1852b3f3cfd048d7845940ff9a205226Q/300ml-Humidifier-Mini-Portable-USB-Ultrasonic-Dazzle-Cup-Aroma-Diffuser-Cool-Mist-Maker-Air-Humidifier-Purifier.jpg_Q90.jpg_.webp"
            alt=""
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Sixth Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="order-2 md:order-2  px-10 place-content-center my-auto">
          <h2 className="text-2xl font-bold mt-5 text-gray-800">
            NIGHT LIGHT & AUTO SHUT-OFF
          </h2>
          <p className="my-5">
            7 soothing colors - it creates a peaceful ambiance so you enjoy a
            maximum relaxation and improve your sleeping quality. Set the mood
            and lighting with your choice of colors or turn off for total
            darkness.
          </p>
          <p className="my-5">
            While the automatic shut-off feature turns the humidifier off when
            water level is low or the water tank is removed.
          </p>
          <p className="my-5">
            Don&apos;t worry about dry running when you are sleeping or away,
            since its auto shut-off feature will provide better protection for
            you.
          </p>
        </div>
        {/* Image  */}
        <div className="order-1 md:order-1">
          <img
            src="https://gd2.alicdn.com/imgextra/i2/3670011270/O1CN01PiMnxP1LFhkjCEi7o_!!3670011270.jpg"
            alt=""
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Seventh Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="order-2 md:order-1  px-10 place-content-center my-auto">
          <h2 className="text-2xl font-bold mt-5 text-gray-800">
            TAKE IT ANYWHERE WITH YOU
          </h2>
          <p className="my-5">
            The portable and small design makes it easy for you to take
            anywhere. The USB Power Supply is compatible with any USB port
            ensuring it can be used in your bedroom, office, or car.
          </p>
          <p className="my-5">
            Effectively moisturize dry skin and help you reduce skin peeling
            anywhere and everywhere.
          </p>
          <p className="my-5"></p>
        </div>
        {/* Image  */}
        <div className="order-1 md:order-2">
          <img
            src="https://i5.walmartimages.com/asr/d352b2e4-8b3f-4976-addd-0537dcd90b35.64dd9a3c4002d141be9750d4f61dec6b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            alt=""
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Eighth Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="order-2 md:order-2  px-10 place-content-center my-auto">
          <h2 className="text-2xl font-bold mt-5 text-gray-800">EASY TO USE</h2>
          <p className="my-5">
            Simple one button control. You only need to press the power button 1
            second to control the mist modes. Press and hold the power button
            for 3 seconds to enable night light and colorful light action.
          </p>
          <p className="my-5">
            Two Mist Modes (Continuous and Intermittent) - The continuous mode
            runs for 4 hours and intermittent runs for 6 hours before shut-off.
          </p>
          <p className="my-5">
            The unit automatically power off when the water level is low, thus
            you don&apos;t have to worry about the humidifier being damaged in
            the absence of water.
          </p>
        </div>
        {/* Image  */}
        <div className="order-1 md:order-1">
          <img
            src="https://i5.walmartimages.com/asr/eb78c0bf-deb9-47ba-913e-e5a1e76fd461.80892c6345448f15e030235cad17f9a9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            alt=""
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Ninth Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="order-2 md:order-1  px-10 place-content-center my-auto">
          <h2 className="text-2xl font-bold mt-5 text-gray-800">
            HOW DO I USE IT?
          </h2>
          <p className="mt-5 mb-2">① Open the lid</p>
          <p className="my-2">② Add clean water to the tank</p>
          <p className="my-2"> ③ Connect the power</p>
          <p className="my-2"> ④ Press the button to turn on.</p>
          <p className="my-5">
            Please make sure the cotton core has soaked a few minutes before you
            turn it on.
          </p>
          <p className="my-5">
            <span className="text-gray-800 underline">Kind Reminder:</span> It
            is recommended to use clean tap water or mineral water. Please
            refrain to use pure water or distilled water which will cause water
            to accumulate in the mist outlet of the humidifier.
          </p>
          <p className="my-5"></p>
        </div>
        {/* Image  */}
        <div className="order-1 md:order-2">
          <img
            src="https://i5.walmartimages.com/asr/7238a031-e131-442c-a16a-69804626142c.81efe2245a4c63987db2ea238d61e941.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            alt=""
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Tenth Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="order-2 md:order-2  px-10 place-content-center my-auto">
          <h2 className="text-2xl font-bold mt-5 text-gray-800">
            WHAT ARE YOU WAITING FOR?
          </h2>
          <p className="my-5">
            Whether you&apos;re a small space dweller, have an arid desk
            situation going, or are looking for a good travel option.
            EurekaBreath™ Air Humidifier will offer the sweet relief you crave
            from dry air or your money back guaranteed.
          </p>
          <p className="my-5">
            “We bought this for my son who gets nighttime nosebleeds. It is a
            lovely little device perfect size for his bedside table yet quite
            powerful mist. The nightlight is so nice and soothing and the auto
            shut-off timer is absolutely perfect. It is quiet and peaceful. It
            has helped so much- no nosebleeds since we started using it. Also,
            the customer support is fabulous with detailed instructions and
            offers of support. This company truly cares about their customers.
            Thank you for this great product!”
          </p>
          <p className="my-5">Helen F. - London, United Kingdom</p>
          <button
            onClick={() => router.push("/product/air-humidifier")}
            className="bg-rose-300 rounded-full w-full my-5 md:w-[300px] font-medium mx-auto py-3 hover:bg-rose-100 hover:translate-y-[-5px] duration-500"
          >
            Buy Now
          </button>{" "}
        </div>
        {/* Image  */}
        <div className="order-1 md:order-1">
          <img
            src="https://gd4.alicdn.com/imgextra/i4/3670011270/O1CN01DrLwhq1LFhkplvpzl_!!3670011270.jpg"
            alt=""
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Eleventh Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-0">
        <div className="order-2 md:order-1  px-10 place-content-center my-auto">
          <h2 className="text-2xl font-bold mt-5 text-gray-800">
            LIMITED TIME ONLY
          </h2>
          <p className="my-5">
            At EurekaBreah™ we care about your experience with our products,
            pledging to replace your humidifiers at home should anything go
            wrong. We provide you with 1 year warranty from the day you receive
            the order.
          </p>
          <p className="my-5">
            For any reason you think the humidifier is not for you, send us a
            simple email at support@eurekabreath.com and we will solve your
            problem within 24 hours.
          </p>
          <p className="my-5"></p>
        </div>
        {/* Image  */}
        <div className="order-1 md:order-2">
          <img
            src="https://ae01.alicdn.com/kf/H491bfc773b6d4eee963307b7985b89c7O/Air-Humidifier-USB-Ultrasonic-Aromatherapy-Essential-Oil-Diffuser-Sprayer-Mist-Maker-Fogger-Aroma-Purifier-With-Light.jpg_Q90.jpg_.webp"
            alt=""
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
