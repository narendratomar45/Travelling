import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroImage from "./HeroImage";
import Welcome from "./Welcome";
import IndianDestinations from "./IndianDestinations";
import EnquiryForm from "./EnquiryForm";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroImage />
      <Welcome />
      <IndianDestinations />
      <Gallery />
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Home;
