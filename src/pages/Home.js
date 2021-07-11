import React from "react";

import Header from "../components/Header";
import Tours from "../components/Home/Tours";
import Featured from "../components/Home/Featured";
import Join from "../components/Home/Join";
import Pricing from "../components/Home/Pricing";
import Clients from "../components/Home/Clients";
import GetinTouch from "../components/Home/GetinTouch";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Tours />
      <Featured />
      <Join />
      <Pricing />
      <Clients />
      <GetinTouch />
      <Footer />
    </div>
  );
};

export default Home;
