import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="py-10 px-5 cursor-pointer  hover:scale-110 duration-300 ease-in-out">
          <img
            src={urlFor(image && image[0])}
            alt=""
            width={250}
            height={250}
            className="bg-[#ebebeb] rounded-2xl"
          />
          <p className="font-medium text-center">{name}</p>
          <p className="font-medium text-gray-800 text-center mt-2">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
