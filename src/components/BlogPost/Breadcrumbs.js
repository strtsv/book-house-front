import React from "react";

import i from "../../assets/images/breadcrumbs-bg-8.jpg";

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
          <div className="tag-small">News</div>
          <h3 className="breadcrumbs-custom-title-small">
            Top 10 Books to Read This Year
          </h3>
          <div className="breadcrumbs-date">May 10, 2020</div>
        </div>
      </section>
    );
  }
}

export default Breadcrumbs;
