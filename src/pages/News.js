import React from "react";

import Header from "../components/Common/Header";
import Content from "../components/News/Content";
import Footer from "../components/Footer";

const t = "News";

const News = () => {
  return (
    <div className="page animated">
      <Header title={t} />
      <Content />
      <Footer />
    </div>
  );
};

export default News;
