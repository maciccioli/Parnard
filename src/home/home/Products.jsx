import React, { useEffect } from "react";
import { scrollTo } from "../utils";
import Intro1 from "./sections/Intro1";
import TopBar from "./sections/TopBar1";
import Services1 from "./sections/Services1";
import Portfolio1 from "./sections/Portfolio1";
import Testimonial1 from "./sections/Testimonial1";
import CallToAction1 from "./sections/CallToAction1";
import Pricing1 from "./sections/Pricing1";
import Footer1 from "./sections/Footer1";

import AboutUs from "./sections/AboutUs";
import Categories from "./sections/Categories";
import Contact from "./sections/Contact";

import ProductsList from "src/home/sections/ProductsList";

const Products = () => {

  return (
    <div className="landing" sx={{ overflow: 'auto' }}>
      <TopBar />
      <ProductsList />
      <Footer1 />
    </div>
  );
};

export default Products;
