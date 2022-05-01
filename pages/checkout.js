import React from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Checkout = () => {
  return (
    <div className="w-screen">
      <Nav />
      <Cart />
      <Footer />
    </div>
  );
};

export default Checkout;
