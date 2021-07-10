import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic context-dark text-center">
        <div className="container">
          <div className="row row-15 justify-content-lg-between">
            <div className="col-xl-4 order-3 order-xl-1 text-center text-xl-left">
              <p className="rights">
                <span>©  </span>
                <span className="copyright-year" />
                <span> </span>
                <span>Book House</span>
                <span>. </span>
                <span>All Rights reserved</span>
              </p>
            </div>
            <div className="col-xl-5 order-1 order-xl-2">
              <ul className="list-inline list-inline-lg">
                <li>
                  <a href="about-us.html">About us</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 order-2 order-xl-3 text-center text-xl-right">
              <a href="privacy-policy.html">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
