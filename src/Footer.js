import React, { Component } from 'react';
import './Footer.css';


class Footer {
  constructor() {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Footer 2</title>
          <link rel="stylesheet" href="./Footer2.css" />
          <script
            src="https://kit.fontawesome.com/66aa7c98b3.js"
            crossorigin="anonymous"
          ></script>
        </head>
        <body>
          <div className="footer">
            <div className="heading">
              <h2>ABCDEF<sup>&trade;</sup></h2>
            </div>
            <div className="content">
              <div className="services">
                <h4>Services</h4>
                <p><a href="#">App developmen</a></p>
                <p><a href="#">Web development</a></p>
                <p><a href="#">DevOps</a></p>
                <p><a href="#">Web designing</a></p>
              </div>
              <div className="social-media">
                <h4>Social</h4>
                <p>
                  <a href="https://www.linkedin.com/in/sanket-bodke-995b5b205/"
                  ><i className="fab fa-linkedin"></i> Linkedin</a>
                </p>
                <p>
                  <a href="https://twitter.com/Sanket46171296"
                  ><i className="fab fa-twitter"></i> Twitter</a>
                </p>
                <p>
                  <a href="https://github.com/sanketbodke"
                  ><i className="fab fa-github"></i> Github</a>
                </p>
                <p>
                  <a href="https://codepen.io/sanketbodke"
                  ><i className="fab fa-codepen"></i> Codepen</a>
                </p>
                <p>
                  <a href="https://www.instagram.com/imsanketbodke/?hl=en"
                  ><i className="fab fa-instagram"></i> Instagram</a>
                </p>
              </div>
              <div className="links">
                <h4>Quick links</h4>
                <p><a href="#">Home</a></p>
                <p><a href="#">About</a></p>
                <p><a href="#">Blogs</a></p>
                <p><a href="#">Contact</a></p>
              </div>
              <div className="details">
                <h4 className="address">Address</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Cupiditate, qui!
                </p>
                <h4 className="mobile">Mobile</h4>
                <p><a href="#">+9112233445</a></p>
                <h4 className="mail">Email</h4>
                <p><a href="#">abcdef@gmail.com</a></p>
              </div>
            </div>
            <footer>
              <hr />
              &copy; 2021 ABCDEF Technologies Pvt. Ltd.
            </footer>
          </div>
        </body>
      </html>

    );
  }
  render;
};
export default Footer;