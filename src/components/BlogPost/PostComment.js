import React from "react";

class PostComment extends React.Component {
  render() {
    return (
      <section className="section section-md bg-default">
        <div className="container">
          <h6>Post a Comment</h6>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form className="rd-form rd-mailform form-boxed">
            <div className="row row-50">
              <div className="col-lg-4">
                <div className="form-wrap form-wrap-icon">
                  <div className="form-icon mdi mdi-account-outline" />
                  <input
                    className="form-input"
                    id="contact-name"
                    type="text"
                    name="name"
                    data-constraints="@Required"
                  />
                  <label className="form-label" htmlFor="contact-name">
                    Name
                  </label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-wrap form-wrap-icon">
                  <div className="form-icon mdi mdi-email-outline" />
                  <input
                    className="form-input"
                    id="contact-email"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label className="form-label" htmlFor="contact-email">
                    E-mail
                  </label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-wrap form-wrap-icon">
                  <div className="form-icon mdi mdi-phone" />
                  <input
                    className="form-input"
                    id="contact-phone"
                    type="text"
                    name="phone"
                    data-constraints="@Numeric"
                  />
                  <label className="form-label" htmlFor="contact-phone">
                    Phone
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-wrap form-wrap-icon">
                  <div className="form-icon mdi mdi-message-outline" />
                  <label className="form-label" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    className="form-input"
                    id="contact-message"
                    name="message"
                    data-constraints="@Required"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <button className="button button-default" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default PostComment;
