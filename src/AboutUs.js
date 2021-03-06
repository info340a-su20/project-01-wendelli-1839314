import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="flex-container pg1-about">
          <div className="row info">
            <div className="col-20 col-md-20 col-xl-auto d-flex">
              <section className="flex-item-4">
                <img
                  className="rounded-circle profile"
                  src={`${process.env.PUBLIC_URL}/wendell.jpg`}
                  alt="people"
                />
                <h2 className="name">Wendell Li</h2>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/wendellli99/"
                  role="button"
                  aria-label="LinkedIn">
                  <img
                    alt="LinkedIn"
                    src={`${process.env.PUBLIC_URL}/icons/linkedin.jpg`}
                    className="contact"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/profile.php?id=100005237762480/"
                  role="button"
                  aria-label="Facebook">
                  <img
                    alt="Facebook"
                    src={`${process.env.PUBLIC_URL}/icons/facebook.jpg`}
                    className="contact"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:wendelli@uw.edu"
                  role="button"
                  aria-label="E-mail">
                  <img
                    alt="E-mail"
                    src={`${process.env.PUBLIC_URL}/icons/email.jpg`}
                    className="contact"
                  />
                </a>
                <ul className="list">
                  <li>UI/UX Designer</li>
                  <li>iOS App Game Developer</li>
                  <li>Student at the University of Washington</li>
                  <li>Class of 2022</li>
                </ul>
              </section>
            </div>
            <div className="col-20 col-md-20 col-xl-auto d-flex">
              <section className="flex-item-5">
                <img
                  className="rounded-circle profile"
                  src={`${process.env.PUBLIC_URL}/george.jpeg`}
                  alt="people"
                />
                <h2 className="name">George Gu</h2>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/george-gu-1b4451161/"
                  role="button"
                  aria-label="LinkedIn">
                  <img
                    alt="LinkedIn"
                    src={`${process.env.PUBLIC_URL}/icons/linkedin.jpg`}
                    className="contact"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/liuyinqi.gu"
                  role="button"
                  aria-label="Facebook">
                  <img
                    alt="Facebook"
                    src={`${process.env.PUBLIC_URL}/icons/facebook.jpg`}
                    className="contact"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:georgegu@uw.edu"
                  role="button"
                  aria-label="E-mail">
                  <img
                    alt="E-mail"
                    src={`${process.env.PUBLIC_URL}/icons/email.jpg`}
                    className="contact"
                  />
                </a>
                <ul className="list">
                  <li>UI/UX Designer</li>
                  <li>Front-end Web Developer</li>
                  <li>Student at the University of Washington</li>
                  <li>Class of 2021</li>
                </ul>
              </section>
            </div>
            <div className="col-20 col-md-20 col-xl-auto d-flex">
              <section className="flex-item-6">
                <img
                  className="rounded-circle profile"
                  src={`${process.env.PUBLIC_URL}/celia.jpg`}
                  alt="people"
                />
                <h2 className="name">Zexin Lyu</h2>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/zexin-lyu-5399201a6/"
                  role="button"
                  aria-label="LinkedIn">
                  <img
                    alt="LinkedIn"
                    src={`${process.env.PUBLIC_URL}/icons/linkedin.jpg`}
                    className="contact"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/profile.php?id=100005598017451"
                  role="button"
                  aria-label="Facebook">
                  <img
                    alt="Facebook"
                    src={`${process.env.PUBLIC_URL}/icons/facebook.jpg`}
                    className="contact"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:zexinl@uw.edu"
                  role="button"
                  aria-label="E-mail">
                  <img
                    alt="E-mail"
                    src={`${process.env.PUBLIC_URL}/icons/email.jpg`}
                    className="contact"
                  />
                </a>
                <ul className="list">
                  <li>UI/UX Designer</li>
                  <li>Educational App Development</li>
                  <li>Student at the University of Washington</li>
                  <li>Class of 2021</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
