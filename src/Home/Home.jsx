import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Content from "./Content";
import Footer from "../Shared/Footer/Footer";
import Services from "./Services/Services";
import Reviews from "./Reviews/Reviews";
import FAQ from "./FAQ/FAQ";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <Content />
      <Services />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
