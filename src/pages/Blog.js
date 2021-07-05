import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Blog/Breadcrumbs";
import Blurbminimal from "../components/Blog/Blurbminimal";
import PageFooter from "../components/Blog/PageFooter";

import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <Blurbminimal />
      <PageFooter />
      <Footer />
    </div>
  );
};

export default Blog;
