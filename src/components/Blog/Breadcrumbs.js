import React from "react";

import i from "../../assets/images/breadcrumbs-bg-7.jpg";

class Breadcrumbs extends React.Component {
  render() {
    return (
      <section
        className="breadcrumbs-custom bg-image context-dark"
        style={{
          backgroundImage: "url(" + i + ")",
        }}
      >
        <div className="container">
          <h2 className="breadcrumbs-custom-title">Classic Blog</h2>
          <div className="breadcrumbs-custom-subtitle">
            Read our latest posts
          </div>
        </div>
      </section>
    );
  }
}

export default Breadcrumbs;
