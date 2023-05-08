import React from "react";
import "../style/About.css";
import UserInfoSlider from "../components/UserInfoSlider";

const About = () => {
  return (
    <>
      <section class="banner-section">
        <div class="container">
          <h1>
            OPEN A WORLD
            <br />
            OF IMAGINATION
          </h1>
        </div>
      </section>

      <section class="high-quilaty-content-section">
        <div class="container">
          <div class="inner-content-wraper">
            <div class="heading-div high-quality">
              <h1>
                WE MAKE
                <br />
                HIGH QUALITY
                <br />
                CREATIVE TOYS
              </h1>
            </div>
            <div class="para-info-div high-quality">
              <p>
                We are passionate about kids and about creating new and
                innovative ways for them to learn and explore. With every new
                JitteryGit toy that your child opens, they are opening a new
                world of excitement and creativity. Our focus is on finding the
                perfect unity of fun and education. Our toys are designed by
                combining STEM, story-telling, and hands-on dynamic fun and
                learning. We know how important children are, so we take great
                pride in our products. Our mission has always been to provide
                high quality toys for kids that are affordable for parents,
                because every child deserves the opportunity to enjoy learning!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="learing-section">
        <div class="container">
          <div class="full-img-learing">
            <img src="./images/learn-jitterygit.webp" />
          </div>
        </div>
      </section>

      <section class="our-brand-scetion">
        <div class="container">
          <div class="our-brands">
            <div class="brand-title">
              <h1>OUR BRANDS</h1>
            </div>
            <div class="brand-flex-div top-border-line">
              <div class="brand-content robotryx">
                <div class="inner-img-text">
                  <img src="./images/icon-robotryx-black.webp" />
                  <h2>ROBOTRYX</h2>
                </div>
                <div class="brand-text-area">
                  <p>
                    A world of endless possibilities and imagination, full of
                    transforming robots, each with 3 unique assembly options!
                    Come meet the Robotryx Guardians: five valiant robots on a
                    mission to come together to form an unstoppable mega-robot
                    named Garantron. The Robotryx robots were created around a
                    STEM learning model to make play time a time to grow!
                  </p>
                </div>
                <div class="goto-robotry-btn goto-btn">
                  <a href="#">GO TO ROBOTRYX</a>
                </div>
              </div>
              <div class="brand-content dinomaniacs">
                <img src="./images/robotryx-about-us-600x400.webp" />
              </div>
            </div>

            <div class="brand-flex-div dino-div-about">
              <div class="brand-content babies-single">
                <img src="./images/dino-about-us-450x375.jpg" />
              </div>
              <div class="brand-content babies">
                <div class="inner-img-text">
                  <img src="./images/logo-dinomaniacs.webp" />
                  <h2>DINOMANIACS</h2>
                </div>
                <div class="brand-text-area">
                  <p>
                    Welcome to Dinoland, a world of adventure and excitement,
                    where dinosaurs still walk among us! Build your own dino
                    outpost, and interact with different species of dinosaurs,
                    learning about their habitats, what they ate, and how they
                    existed in the prehistoric times. Dinomaniacs is designed to
                    spark a child’s creativity as they play with these hands-on
                    toys.
                  </p>
                </div>
                <div class="goto-robotry-btn goto-btn">
                  <a href="#">GO TO DINOMANIACS</a>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default About;
