import React, { useEffect, useState } from "react";
import { StarIcon, MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { client, urlFor } from "../../lib/client";
import Nav from "../../components/Nav";
import ProductDetails from "../../components/ProductDetails";
import Video from "../../components/Video";
import Newsletter from "../../components/Newsletter";
import ProductTestimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";
import { useStateContext } from "../../context/StateContext";
import { useRouter } from "next/router";

const ProductItems = ({ product }) => {
  const router = useRouter();
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decreaseQuantity, increaseQuantity, quantity, onAdd } =
    useStateContext();

  const handleBuyNow = () => {
    onAdd(product, quantity);

    router.push("/checkout");
  };
  return (
    <div className="w-full">
      <Nav />

      {/* First Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left */}
        <div className="order-1 flex flex-col px-10 place-content-center my-auto mx-auto">
          <div className="mx-auto w-[500px]">
            <img src={urlFor(image && image[index])} alt="" />
          </div>
          <div className="flex gap-2 mt-3 items-start">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index
                    ? "w-[70px] h-[70px] cursor-pointer border border-rose-300"
                    : "w-[70px] h-[70px] cursor-pointer"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="order-2  flex flex-col px-10 place-content-center my-auto mx-auto">
          <div>
            <h1 className="text-2xl font-bold mt-5 text-gray-800">{name}</h1>
            <div className="flex my-3">
              <StarIcon className="w-5 text-rose-300" />
              <StarIcon className="w-5 text-rose-300" />
              <StarIcon className="w-5 text-rose-300" />
              <StarIcon className="w-5 text-rose-300" />
              <StarIcon className="w-5 text-rose-300" />
              <p className="pl-2">(87)</p>
            </div>
          </div>
          <h4 className="font-bold text-gray-800 my-2">Details:</h4>
          <p className="my-2">{details}</p>
          <p className="font-bold text-gray-800 my-2 pt-3">${price}</p>
          <div className="font-bold text-gray-800 my-3 flex items-center">
            <h3>Quantity:</h3>
            <p className="p-2 flex">
              <span
                className="p-2 m-1 border border-gray-800 cursor-pointer"
                onClick={decreaseQuantity}
              >
                <MinusIcon className="w-5" />
              </span>
              <span className="p-2 m-1 border border-gray-800 cursor-pointer w-[100px] text-center">
                {quantity}
              </span>
              <span
                className="p-2 m-1 border border-gray-800 cursor-pointer"
                onClick={increaseQuantity}
              >
                <PlusIcon className="w-5" />
              </span>
            </p>
          </div>
          <div className="flex md:flex-col">
            <button
              type="button"
              className="mx-2 bg-rose-300 rounded-lg my-5 md:my-2 w-full font-medium md:mx-auto py-3 hover:bg-rose-100 hover:translate-y-[-5px] duration-500"
              onClick={() => onAdd(product, quantity)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="mx-2 bg-gray-800 text-white rounded-lg my-5 md:my-2 w-full font-medium md:mx-auto py-3 hover:bg-gray-600 hover:translate-y-[-5px] duration-500"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <ProductDetails />
      <Video />
      <Newsletter />
      <ProductTestimonials />
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  return {
    props: { product },
  };
};

export default ProductItems;
