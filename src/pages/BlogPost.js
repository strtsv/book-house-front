import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/BlogPost/Breadcrumbs";
import PostSingle from "../components/BlogPost/PostSingle";
import Comments from "../components/BlogPost/Comments";
import PostComment from "../components/BlogPost/PostComment";
import Footer from "../components/Footer";

const BlogPost = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <PostSingle />
      <Comments />
      <PostComment />
      <Footer />
    </div>
  );
};

export default BlogPost;
