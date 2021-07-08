import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="pre-footer-classic bg-gray-700 context-dark">
        <div className="container">
          <div className="row row-30 justify-content-lg-between">
            <div className="col-sm-6 col-lg-3 col-xl-3">
              <h5>Our Address</h5>
              <ul className="list list-sm">
                <li>
                  <p>1418 Riverwood Drive,</p>
                </li>
                <li>
                  <p>Suite 3845 Cottonwood,</p>
                </li>
                <li>
                  <p>CA 96022</p>
                </li>
                <li>
                  <p>United States</p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <h5>Contacts</h5>
              <dl className="list-terms-custom">
                <dt>Ph.</dt>
                <dd>
                  <a className="link-default" href="tel:#">
                    1-300-123-1234
                  </a>
                </dd>
              </dl>
              <dl className="list-terms-custom">
                <dt>Mail.</dt>
                <dd>
                  <a className="link-default" href="mailto:#">
                    Info@demolionk.org
                  </a>
                </dd>
              </dl>
              <ul className="list-inline list-inline-sm">
                <li>
                  <a
                    className="icon icon-sm icon-gray-filled icon-circle mdi mdi-facebook"
                    href="#"
                  />
                </li>
                <li>
                  <a
                    className="icon icon-sm icon-gray-filled icon-circle mdi mdi-instagram"
                    href="#"
                  />
                </li>
                <li>
                  <a
                    className="icon icon-sm icon-gray-filled icon-circle mdi mdi-behance"
                    href="#"
                  />
                </li>
                <li>
                  <a
                    className="icon icon-sm icon-gray-filled icon-circle mdi mdi-twitter"
                    href="#"
                  />
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5>Newsletter</h5>
              <form
                className="rd-form rd-mailform"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="form-wrap form-wrap-icon">
                  <div className="form-icon mdi mdi-email-outline" />
                  <input
                    className="form-input"
                    id="footer-email"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label className="form-label" htmlFor="footer-email">
                    E-mail
                  </label>
                </div>
                <div className="button-wrap">
                  <button
                    className="button button-primary button-xs"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
