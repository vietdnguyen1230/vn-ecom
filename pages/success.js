import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center place-content-center">
        <p className="pt-10">
          <ShoppingBagIcon className="w-10" />
        </p>
        <h2 className="my-3">Thank you for your order!</h2>
        <p className="my-3">Check your email inbox for the receipt.</p>
        <p className="my-3">
          If you have any questions, please email
          <a href="mailto:eurekaberath@support.com">
            {" "}
            eurekaberath@support.com
          </a>
        </p>
        <Link href="/">
          <button
            type="button"
            className="mx-2 my-3 bg-gray-800 text-white rounded-lg max-w-5xl p-3 font-medium md:mx-auto py-3 hover:bg-gray-600 hover:translate-y-[-5px] duration-500"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
