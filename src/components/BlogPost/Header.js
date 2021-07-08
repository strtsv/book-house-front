import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-wide"
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
                        src="images/logo-default-254x238.png"
                        alt
                        width={254}
                        height={238}
                        srcSet="images/logo-default-254x238.png 2x"
                      />
                      <img
                        className="brand-logo-light"
                        src="images/logo-inverse-307x38.png"
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
                      <ul className="rd-menu rd-navbar-megamenu">
                        <li className="rd-megamenu-item">
                          <div className="rd-megamenu-title">Elements</div>
                          <div className="rd-megamenu-block">
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="typography.html"
                                >
                                  Typography
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="buttons.html"
                                >
                                  Buttons
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="forms.html"
                                >
                                  Forms
                                </a>
                              </li>
                            </ul>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="counters.html"
                                >
                                  Counters
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="icon-lists.html"
                                >
                                  Icon lists
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="search-results.html"
                                >
                                  Search results
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="rd-megamenu-item">
                          <div className="rd-megamenu-title">Pages</div>
                          <div className="rd-megamenu-block">
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="team.html"
                                >
                                  Team
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="404.html"
                                >
                                  404
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="coming-soon.html"
                                >
                                  Coming soon
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="privacy-policy.html"
                                >
                                  Privacy policy
                                </a>
                              </li>
                            </ul>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="contacts.html"
                                >
                                  Contacts
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
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
                      <a className="rd-nav-link" href="about-us.html">
                        About Us
                      </a>
                    </li>
                    <li className="rd-nav-item active">
                      <a className="rd-nav-link" href="blog.html">
                        Blog
                      </a>
                      {}
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="grid-blog.html">
                            Grid Blog
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="blog-post.html">
                            Blog Post
                          </a>
                        </li>
                      </ul>
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
