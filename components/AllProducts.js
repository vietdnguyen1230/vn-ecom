import React from "react";
import Product from "./Product";

const AllProducts = ({ products }) => {
  return (
    <div className="py-20">
      <h1 className="text-2xl text-center text-gray-800 font-bold">
        Best Selling Products
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mt-5 w-full mb-5">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
