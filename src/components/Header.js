import React from "react";
import $ from "jquery";
import { WOW } from "../assets/js/wow.js";

import "../assets/js/tmstickup.js";
import "../assets/js/jquery.ui.totop.my.js";
import "../assets/js/jquery.easing.1.3.js";

import i1 from "../assets/images/logo-default-254x238.png";
import i2 from "../assets/images/logo-inverse-307x38.png";

class Header extends React.Component {
  componentDidMount() {
    new WOW().init();
    $(".rd-navbar").TMStickUp({});
    $().UItoTop({
      easingType: "easeOutQuad",
      containerClass: "ui-to-top fa fa-angle-up",
    });
  }
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-wide rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src={i1}
                        alt
                        width={254}
                        height={238}
                        srcSet="images/logo-default-254x238.png 2x"
                      />
                      <img
                        className="brand-logo-light"
                        src={i2}
                        alt
                        width={307}
                        height={38}
                        srcSet="images/logo-inverse-307x38.png 2x"
                      />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-nav-wrap">
                  {}
                  <ul className="rd-navbar-nav">
                    <li className="rd-nav-item" data-xl-hidden="true">
                      <a className="rd-nav-link" href="services.html">
                        Services
                      </a>
                    </li>
                    <li className="rd-nav-item" data-xl-hidden="true">
                      <a className="rd-nav-link" href="#">
                        Pages
                      </a>
                      {}
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="books.html">
                        Books
                      </a>
                      {}
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="book-page.html">
                            Book Page
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="blog-post.html">
                        Blog post
                      </a>
                    </li>
                    <li className="rd-nav-item active">
                      <a className="rd-nav-link" href="blog.html">
                        Blog
                      </a>
                      {}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
