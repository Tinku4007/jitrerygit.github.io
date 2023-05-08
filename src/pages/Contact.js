import React from "react";
import "../style/Contact.css";
import UserInfoSlider from "../components/UserInfoSlider";

const Contact = () => {
  return (
    <>
      <section class="contact-banner-section">
        <div class="container">
          <h1>CONTACT US</h1>
        </div>
      </section>

      <section class="contact-page-content">
        <div class="container">
          <div class="inner-content-wraper">
            <div class="contact-heading-text we-hear">
              <h1>
                WE WANT
                <br />
                TO HEAR
                <br />
                FROM YOU!
              </h1>
            </div>
            <div class="contact-para-text we-hear">
              <p>
                At JitteryGit, we want to make sure you are 100% happy! Our
                company is passionate about children, families and learning,
                which is why it is so important to us to hear from our
                customers. Please feel free to reach out if you need assistance
                with one or our products, or even just to send a review or
                suggestion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-form-section">
        <div class="container">
          <div class="contact-us-form-text">
            <div class="contact-us-text contact-form">
              <div class="contact-heading">
                <h1>
                  CONTACT
                  <br />
                  INFORMATION
                </h1>
              </div>
              <div class="contact-para-infos">
                <div class="timimg-content">
                  <h4>OPERATION TIME</h4>
                  <p>MON – FRI</p>
                  <p>9:00 AM – 6:00 PM</p>
                </div>
                <div class="phone-number-text">
                  <h4>PHONE</h4>
                  <a href="tel:+1 (888) 503-0261">+1 (888) 503-0261</a>
                </div>
                <div class="email-text">
                  <h4>EMAIL</h4>
                  <a href="mailto:info@jitterygit.com">info@jitterygit.com</a>
                </div>
                <div class="address-text">
                  <h4>ADDRESS</h4>
                  <p>
                    19790 W Dixie Hwy
                    <br />
                    Suite 1131
                    <br />
                    Miami, FL 33180
                  </p>
                </div>
              </div>
            </div>
            <div class="contact-us-form contact-form">
              <p>
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="#">Privacy Policy</a> and{" "}
                <a href="#">Terms of Service</a> apply.
              </p>
              <div class="contact-form-feilds">
                <div class="field-row">
                  <input
                    type="text"
                    class="input-field"
                    placeholder="Your Name"
                  />
                </div>
                <div class="field-row">
                  <input
                    type="email"
                    class="input-field"
                    placeholder="Your Email"
                  />
                </div>
                <div class="field-row">
                  <input
                    type="tel"
                    class="input-field"
                    placeholder="Your Phone"
                  />
                </div>
                <div class="field-row">
                  <input
                    type="text"
                    class="input-field"
                    placeholder="Your Subject"
                  />
                </div>
                <div class="field-row">
                  <textarea
                    class="input-field-message"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div class="submit-btn">
                  <button>SUBMIT</button>
                </div>
                <p>
                  By submitting this form, you hereby agree that we may collect,
                  store and process your data that you provided.{" "}
                  <input type="checkbox" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="map-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10146.4699541573!2d-80.14700642647988!3d25.957581143893833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ac595bdf3a19%3A0x750314d1d9118165!2s19790%20W%20Dixie%20Hwy%2C%20Miami%2C%20FL%2033180%2C%20USA!5e0!3m2!1sen!2sin!4v1677836823274!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section class="trusted-by-millions">
        <div class="container">
          <div class="testomonial-content">
            <h1>TRUSTED BY MILLIONS</h1>
            <p>
              More than <strong>one million</strong> happy customers have
              trusted our products
              <br />
              and that is why they rate us as one of the best toy companies
              <br />
              across the biggest marketplaces.
            </p>
          </div>
          <div className="user-slider">
            <UserInfoSlider />
          </div>
        </div>
      </section>

      <section class="product-catalog-section">
        <div class="product-catalog-content">
          <div class="product-bg-img product-catalog"></div>
          <div class="inner-two-divs product-catalog">
            <div class="file-upload-div">
              <div class="pdf-file-icon">
                <img src="./images/176-1767423_png-file-svg-font-awesome-pdf-icon-png-removebg-preview.png" />
              </div>
              <div class="product-catalog-heading">
                <h1>
                  SIGN UP
                  <br />
                  TO RECEIVE OUR
                  <br />
                  PRODUCTS CATALOG
                </h1>
              </div>
              <div class="product-catalog-btn">
                <a href="#">SIGN UP NOW</a>
              </div>
            </div>
            <div class="shopping-div">
              <div class="dollybag-icon">
                <i class="fas fa-dolly-flatbed"></i>
              </div>
              <div class="product-catalog-heading">
                <h1>
                  ARE YOU LOOKING
                  <br />
                  FOR OUTSTANDING
                  <br />
                  PRODUCTS?
                </h1>
              </div>
              <div class="product-catalog-btn">
                <a href="#">WHOLESALE</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
