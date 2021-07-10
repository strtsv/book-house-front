import React from "react";

import i1 from "../../assets/images/post-1-701x399.jpg";
import i2 from "../../assets/images/post-2-701x399.jpg";
import i3 from "../../assets/images/post-3-701x399.jpg";
import i4 from "../../assets/images/post-4-701x399.jpg";

class Blurbminimal extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default">
        <div className="container">
          <div className="row row-50 justify-content-center">
            <div className="col-md-7 col-lg-8 post-classic-wrap">
              <div className="post-classic">
                <div className="media-wrap">
                  <div className="tag">News</div>
                  <a href="blog-post.html">
                    <img src={i1} alt width={701} height={399} />
                  </a>
                </div>
                <h5 className="title">
                  <a href="blog-post.html">Top 10 Books to Read This Year</a>
                </h5>
                <p className="exeption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation{" "}
                </p>
                <div className="time">May 10, 2020</div>
              </div>
              <div className="post-classic">
                <div className="media-wrap">
                  <div className="tag">News</div>
                  <a href="blog-post.html">
                    <img src={i2} alt width={701} height={399} />
                  </a>
                </div>
                <h5 className="title">
                  <a href="blog-post.html">15 Talented & Trending Authors</a>
                </h5>
                <p className="exeption">
                  Camerarius, magnum cliniass cito imperium de festus, salvus
                  diatria. Fraticinidas sunt rationes de peritus poeta. Cur
                  torquis crescere? Domesticus, teres habitios etiam contactus
                  de fortis, bi-color advena.{" "}
                </p>
                <div className="time">May 10, 2020</div>
              </div>
              <div className="post-classic">
                <div className="media-wrap">
                  <div className="tag">News</div>
                  <a href="blog-post.html">
                    <img src={i3} alt width={701} height={399} />
                  </a>
                </div>
                <h5 className="title">
                  <a href="blog-post.html">The Role of Libraries in Society</a>
                </h5>
                <p className="exeption">
                  Domina faveres, tanquam teres mensa. Sunt imberes experientia
                  domesticus, fidelis boreases. Ecce, gluten! Spatiis velum!
                  Fraticinida germanus homo est. Nobilis, noster cottas
                  inciviliter contactus de regius, camerarius repressor.{" "}
                </p>
                <div className="time">May 10, 2020</div>
              </div>
              <div className="post-classic">
                <div className="media-wrap">
                  <div className="tag">News</div>
                  <a href="blog-post.html">
                    <img src={i4} alt width={701} height={399} />
                  </a>
                </div>
                <h5 className="title">
                  <a href="blog-post.html">Upcoming BookHouse Events</a>
                </h5>
                <p className="exeption">
                  A falsis, fiscina gratis lixa. Ubi est brevis genetrix?
                  Hibridas cadunt in flavum caelos! Fiscinas unda! Primus, audax
                  amicitias sensim demitto de fatalis, superbus diatria.{" "}
                </p>
                <div className="time">May 10, 2020</div>
              </div>
              <div className="pagination-wrap">
                {}
                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li className="page-item page-item-control disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span className="icon" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item page-item-control">
                      <a className="page-link" href="#" aria-label="Next">
                        <span className="icon" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="aside-wrap">
                <div className="aside-item">
                  <form
                    className="rd-search rd-search-form"
                    action="search-results.html"
                    method="GET"
                  >
                    <div className="form-wrap">
                      <label className="form-label" htmlFor="search-form-input">
                        Search
                      </label>
                      <input
                        className="form-input"
                        id="search-form-input"
                        type="text"
                        name="s"
                        autoComplete="off"
                      />
                    </div>
                    <button
                      className="rd-search-form-submit linearicons-magnifier"
                      type="submit"
                    />
                  </form>
                </div>
                <div className="aside-item">
                  <h6>Tags</h6>
                  <ul className="list-tags">
                    <li>
                      <a className="tag" href="#">
                        Tips
                      </a>
                    </li>
                    <li>
                      <a className="tag" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="tag" href="#">
                        News
                      </a>
                    </li>
                    <li>
                      <a className="tag" href="#">
                        Library
                      </a>
                    </li>
                    <li>
                      <a className="tag" href="#">
                        Books
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="aside-item">
                  <h6>Categories</h6>
                  <ul className="list-categories">
                    <li>
                      <a className="link-default" href="#">
                        News
                      </a>
                      <div className="number">(3)</div>
                    </li>
                    <li>
                      <a className="link-default" href="#">
                        Books
                      </a>
                      <div className="number">(9)</div>
                    </li>
                    <li>
                      <a className="link-default" href="#">
                        Tips
                      </a>
                      <div className="number">(5)</div>
                    </li>
                  </ul>
                </div>
                <div className="aside-item">
                  <h6>Recent posts</h6>
                  <div className="post-minimal">
                    <div className="title">
                      <a href="blog-post.html">
                        Top 10 Books and Publications to Read This Year
                      </a>
                    </div>
                    <div className="time">May 10, 2020</div>
                  </div>
                  <div className="post-minimal">
                    <div className="title">
                      <a href="blog-post.html">
                        15 Talented & Trending Authors You Should Know About
                      </a>
                    </div>
                    <div className="time">May 10, 2020</div>
                  </div>
                  <div className="post-minimal">
                    <div className="title">
                      <a href="blog-post.html">
                        The Role of Libraries in the Modern Society
                      </a>
                    </div>
                    <div className="time">May 10, 2020</div>
                  </div>
                </div>
                <div className="aside-item">
                  <h6 className="text-spacing-0">
                    Subscribe to Our Newsletter
                  </h6>
                  <form
                    className="aside-form rd-form form-sm rd-mailform"
                    data-form-output="form-output-global"
                    data-form-type="contact"
                    method="post"
                    action="bat/rd-mailform.php"
                  >
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="user-email"
                        type="email"
                        name="email"
                        data-constraints="@Required"
                      />
                      <label className="form-label" htmlFor="user-email">
                        Enter your email
                      </label>
                    </div>
                    <div className="button-wrap group-md">
                      <button className="button button-default" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blurbminimal;
