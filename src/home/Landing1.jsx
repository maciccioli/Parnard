import React, { useEffect } from "react";
import { scrollTo } from "../utils";
import Intro1 from "./sections/Intro1";
import TopBar from "./sections/TopBar1";
import Footer1 from "./sections/Footer1";

import AboutUs from "./sections/AboutUs";
import Categories from "./sections/Categories";
import Contact from "./sections/Contact";
import CompanyFeatures from "./sections/CompanyFeatures";
import IntegralSolutions from "./sections/IntegralSolutions";
import IndustrialSolutions from "./sections/IndustrialSolutions";
import Works from './sections/Works';

import Portfolio1 from "./sections/Portfolio1";

const Landing1 = () => {
  useEffect(() => {
    scrollTo("root");
  }, [scrollTo]);

  return (
    <div className="landing">
      <TopBar />
      <Intro1 />
      <AboutUs />
      <CompanyFeatures />
      <IntegralSolutions />
      <Categories />
      <Works />
      {/* <Portfolio1 /> */}
      <IndustrialSolutions />
      {/* <Services1 /> */}
      {/* <Testimonial1 />
      <CallToAction1 /> */}
      <Contact />
      <Footer1 />
    </div>
  );
};

export default Landing1;
