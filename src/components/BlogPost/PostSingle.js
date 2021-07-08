import React from "react";

import i1 from "../../assets/images/blog-post-1-702x397.jpg";
import i2 from "../../assets/images/post-small-2-325x220.jpg";
import i3 from "../../assets/images/post-small-1-325x220.jpg";

class PostSingle extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default">
        <div className="container">
          <div className="row row-50 justify-content-center">
            <div className="col-md-7 col-lg-8">
              <div className="post-single-wrap">
                <div className="post-single-item post-single-content">
                  <h5 className="title">Our Top 10 Book Rating of 2020</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum velit esse cillum
                    dolore.
                  </p>
                  <img src={i1} alt width={702} height={397} />
                  <h5 className="title">How Trends Change</h5>
                  <p>
                    Est primus quadra, cesaris. Abnoba castus canis est. Est
                    flavum mons, cesaris. Raptus adgium callide attrahendams
                    cursus est. Boreass tolerare! Amicitia cresceres, tanquam
                    talis coordinatae. Est brevis abnoba, cesaris. Zeta de
                    azureus deus, imperium tabes! Potus solite ducunt ad gratis
                    armarium. Peritus historia absolute dignuss lactea est.
                    Nocere satis ducunt ad audax exemplar. Lixa de clemens
                    nomen, pugna danista! Cum elevatus trabem, omnes lubaes
                    promissio noster, altus uriaes.
                  </p>
                  <article className="quote-simple">
                    <div className="quote-simple-body">
                      <q className="text-primary">
                        Morbi tristique senectus et netus et malesuada fames ac
                        turpis egestas. Vestibulum tortor.
                      </q>
                    </div>
                    <div className="quote-simple-footer">
                      <cite className="heading-5 quote-simple-cite">
                        Jane Smith
                      </cite>
                      <span className="quote-simple-description">Client</span>
                    </div>
                  </article>
                  <p>
                    Nunquam perdere humani generis. Contencios volare, tanquam
                    fortis lactea. Grandis messor superbe talems pes est.
                    Amicitias favere, tanquam lotus cannabis. Sunt detriuses
                    talem clemens, lotus compateres. Parma de castus domus,
                    carpseris victrix! Cum ionicis tormento trabem, omnes
                    exemplares manifestum fidelis, dexter medicinaes.
                  </p>
                  <ul className="list-tags">
                    <li>
                      <a className="tag" href="#">
                        Books
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
                  </ul>
                  <div className="divider divider-1" />
                  <div className="box-inline">
                    <div className="box-item">
                      <p className="small-text font-weight-sbold">
                        Share this project
                      </p>
                    </div>
                    <div className="box-item">
                      <ul className="list-inline list-inline-sm social-list-black">
                        <li>
                          <a
                            className="icon icon-sm icon-bordered link-default mdi mdi-facebook"
                            href="#"
                          />
                        </li>
                        <li>
                          <a
                            className="icon icon-sm icon-bordered link-default mdi mdi-instagram"
                            href="#"
                          />
                        </li>
                        <li>
                          <a
                            className="icon icon-sm icon-bordered link-default mdi mdi-behance"
                            href="#"
                          />
                        </li>
                        <li>
                          <a
                            className="icon icon-sm icon-bordered link-default mdi mdi-twitter"
                            href="#"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="post-single-item">
                  <h6>Related posts</h6>
                  <div className="row row-40 offset-custom-1">
                    <div className="col-md-6">
                      <div className="post-classic-small">
                        <div className="media-wrap">
                          <div className="tag">News</div>
                          <a href="blog-post.html">
                            <img src={i2} alt width={325} height={220} />
                          </a>
                          <a className="title" href="blog-post.html">
                            15 Talented & Trending Authors
                          </a>
                        </div>
                        <div className="time">May 10, 2020</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="post-classic-small">
                        <div className="media-wrap">
                          <div className="tag">News</div>
                          <a href="blog-post.html">
                            <img src={i3} alt width={325} height={220} />
                          </a>
                          <a className="title" href="blog-post.html">
                            The Role of Libraries in Society
                          </a>
                        </div>
                        <div className="time">May 10, 2020</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 inset-xl-0">
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

export default PostSingle;
