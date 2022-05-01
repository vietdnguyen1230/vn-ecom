import React, { useEffect, useRef, useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

const Cart = () => {
  const router = useRouter();
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  console.log(cartItems);

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="p-5">
      <div className="flex items-center">
        <h1 className="text-gray-800 text-4xl pr-5">Shopping Cart</h1>
        <div>
          <p className="text-2xl text-rose-300">({totalQuantities} items)</p>
        </div>
      </div>

      {/* No item in cart */}
      {cartItems.length < 1 && (
        <div className="flex flex-col items-center mt-20">
          <ShoppingBagIcon className="w-20" />
          <h3>Your shopping bag is empty</h3>
          <button
            className="mx-2 bg-rose-300 rounded-lg my-5 w-[250px] font-medium md:mx-auto py-3 hover:bg-rose-100 hover:translate-y-[-5px] duration-500"
            onClick={() => router.push("/product/air-humidifier")}
          >
            Continue Shopping
          </button>
        </div>
      )}

      {/* Have item in cart */}
      <div className="w-full mx-auto text-center flex flex-col py-10">
        {cartItems.length >= 1 &&
          cartItems.map((item) => (
            <div
              className="flex flex-col items-center space-between"
              key={item._id}
            >
              <img
                src={urlFor(item?.image[0])}
                className="cart-product-image"
              />
              <div className="flex space-between my-5">
                <div className="pr-5 text-2xl text-gray-800">{item.name}</div>
                <div className="text-2xl text-gray-800">${item.price}</div>
              </div>
              <div>
                <p className="p-2 flex">
                  <span
                    className="p-2 m-1 border border-gray-800 cursor-pointer"
                    onClick={() => toggleCartItemQuanitity(item._id, "dec")}
                  >
                    <MinusIcon className="w-5" />
                  </span>
                  <span className="p-2 m-1 border border-gray-800 cursor-pointer w-[100px] text-center">
                    {item.quantity}
                  </span>
                  <span
                    className="p-2 m-1 border border-gray-800 cursor-pointer"
                    onClick={() => toggleCartItemQuanitity(item._id, "inc")}
                  >
                    <PlusIcon className="w-5" />
                  </span>
                </p>
              </div>
              <button
                type="button"
                className="text-rose-300 font-semibold cursor-pointer hover:text-rose-200"
                onClick={() => onRemove(item)}
              >
                Remove Item
              </button>
            </div>
          ))}
      </div>
      {cartItems.length >= 1 && (
        <div className="w-full mx-auto text-center flex flex-col">
          <div className="flex justify-center space-x-10 items-center">
            <h3>Subtotal:</h3>
            <h3>${totalPrice}</h3>
          </div>
          <div className="btn-container">
            <button
              type="button"
              className="bg-rose-300 rounded-full my-5 w-[300px] font-medium mx-auto py-3 hover:bg-rose-100 hover:translate-y-[-5px] duration-500"
              onClick={handleCheckout}
            >
              Pay with Stripe
            </button>
          </div>
        </div>
      )}

      <div className="w-full" ref={cartRef}></div>
    </div>
  );
};

export default Cart;
