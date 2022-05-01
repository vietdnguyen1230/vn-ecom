import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { client } from "../lib/client";
import AllProducts from "../components/AllProducts";

const index = ({ products }) => {
  console.log(products);
  return (
    <div>
      <Nav />
      <Hero />
      <Introduction />
      <AllProducts products={products} />
      <Newsletter />
      <ContactForm />
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

export default index;
