import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Newsletter from "../components/Newsletter";
import ProductDetails from "../components/ProductDetails";
import ProductInfo from "../components/ProductInfo";
import Testimonials from "../components/Testimonials";
import Video from "../components/Video";
import { client } from "../lib/client";

const Product = ({ products }) => {
  return (
    <div>
      <Nav />
      <ProductInfo products={products} />
      <ProductDetails />
      <Video />
      <Newsletter />
      <Testimonials />
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};
export default Product;
