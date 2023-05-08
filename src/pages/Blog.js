import React from "react";
import "../style/Blog.css";
const Blog = () => {
  return (
    <>
      {/* <div class="blog-page"> */}
      <section class="blog-page-banner">
        <div class="container">
          <div class="banner-images-dino-kid">
            <img src="./images/jg-blog-header-bg-dino.png" class="dino-img" />
            <img src="./images/jg-blog-header-bg-kid.png" class="kid-img" />
          </div>
        </div>
      </section>

      <section class="blog-filter-product">
        <div class="button_tab">
          <div class="buttons">
            <div class="tab-nav">
              <input
                type="checkbox"
                name="checkboxG1"
                id="checkboxG1"
                class="css-checkbox checkbox_check checkbox-1"
                value="tab-1"
              />
              <label for="checkboxG1" class="css-label">
                BIRHTHDAY
              </label>
              <span class="checkmark"></span>
            </div>

            <div class="tab-nav">
              <input
                type="checkbox"
                name="checkboxG2"
                id="checkboxG2"
                class="css-checkbox checkbox_check checkbox-2"
                value="tab-2"
              />
              <label for="checkboxG2" class="css-label">
                DINO TOYS
              </label>
              <span class="checkmark"></span>
            </div>

            <div class="tab-nav">
              <input
                type="checkbox"
                name="checkboxG3"
                id="checkboxG3"
                class="css-checkbox checkbox_check"
                value="tab-3"
              />
              <label for="checkboxG3" class="css-label">
                ROBOTS
              </label>
              <span class="checkmark"></span>
            </div>

            <div class="tab-nav">
              <input
                type="checkbox"
                name="checkboxG4"
                id="checkboxG4"
                class="css-checkbox checkbox_check"
                value="tab-4"
              />
              <label for="checkboxG4" class="css-label">
                STEM TOYS
              </label>
              <span class="checkmark"></span>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="contents">
            <div class="blog-card blog-card-1 tab-1">
              <div class="blog-card-img">
                <a href="#" class="post-thumbnail">
                  <img src="./images/Mermaid-Birthday-Party-pinata-1536x931.webp" />
                </a>
                <a href="#" class="tag birthday-tag">
                  BIRTHDAY
                </a>
              </div>
              <div class="blog-card-body">
                <div class="blog-card-date">
                  <p>30 Aug, 2022</p>
                </div>
                <div class="blog-card-heading">
                  <a href="#">
                    <h1>
                      AMAZE HER FRIENDS WITH MERMAID PARTY SUPPLIES FOR THE BEST
                      BIRTHDAY PARTY IN TOWN
                    </h1>
                  </a>
                </div>
                <div class="blog-card-content">
                  <p>
                    If you’re looking for magical little mermaid birthday party
                    ideas, we’ve got some fabulous ones here.
                  </p>
                </div>
                <div class="read-more-btn">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>

            <div class="blog-card blog-card-2 tab-2">
              <div class="blog-card-img">
                <a href="#" class="post-thumbnail">
                  <img src="./images/christmas-toys-for-toddlers-1536x1069.webp" />
                </a>
                <a href="#" class="tag dino-tag">
                  DINO TOYS
                </a>
              </div>
              <div class="blog-card-body">
                <div class="blog-card-date">
                  <p>03 Sep, 2022</p>
                </div>
                <div class="blog-card-heading">
                  <a href="#">
                    <h1>
                      THE TOP RATED DINOSAUR TOYS FOR TODDLERS FOR THE HOLIDAYS
                      2022
                    </h1>
                  </a>
                </div>
                <div class="blog-card-content">
                  <p>
                    Dinosaur toys for boys and girls are a genuine favorite. As
                    a near-universal rule, kids love dinosaurs – if you weren’t
                    obsessed with dinosaurs as a kid, you almost...
                  </p>
                </div>
                <div class="read-more-btn">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>

            <div class="blog-card blog-card-2 tab-4">
              <div class="blog-card-img">
                <a href="#" class="post-thumbnail">
                  <img src="./images/christmas-toys-for-toddlers-1536x1069.webp" />
                </a>
                <a href="#" class="tag dino-tag">
                  STEM TOYS
                </a>
              </div>
              <div class="blog-card-body">
                <div class="blog-card-date">
                  <p>03 Sep, 2022</p>
                </div>
                <div class="blog-card-heading">
                  <a href="#">
                    <h1>
                      THE TOP RATED DINOSAUR TOYS FOR TODDLERS FOR THE HOLIDAYS
                      2022
                    </h1>
                  </a>
                </div>
                <div class="blog-card-content">
                  <p>
                    Dinosaur toys for boys and girls are a genuine favorite. As
                    a near-universal rule, kids love dinosaurs – if you weren’t
                    obsessed with dinosaurs as a kid, you almost...
                  </p>
                </div>
                <div class="read-more-btn">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>

            <div class="blog-card blog-card-1 tab-1">
              <div class="blog-card-img">
                <a href="#" class="post-thumbnail">
                  <img src="./images/Mermaid-Birthday-Party-pinata-1536x931.webp" />
                </a>
                <a href="#" class="tag birthday-tag">
                  BIRTHDAY
                </a>
              </div>
              <div class="blog-card-body">
                <div class="blog-card-date">
                  <p>30 Aug, 2022</p>
                </div>
                <div class="blog-card-heading">
                  <a href="#">
                    <h1>
                      AMAZE HER FRIENDS WITH MERMAID PARTY SUPPLIES FOR THE BEST
                      BIRTHDAY PARTY IN TOWN
                    </h1>
                  </a>
                </div>
                <div class="blog-card-content">
                  <p>
                    If you’re looking for magical little mermaid birthday party
                    ideas, we’ve got some fabulous ones here.
                  </p>
                </div>
                <div class="read-more-btn">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>

            <div class="blog-card blog-card-2 tab-3">
              <div class="blog-card-img">
                <a href="#" class="post-thumbnail">
                  <img src="./images/christmas-toys-for-toddlers-1536x1069.webp" />
                </a>
                <a href="#" class="tag dino-tag">
                  ROBOTS
                </a>
              </div>
              <div class="blog-card-body">
                <div class="blog-card-date">
                  <p>03 Sep, 2022</p>
                </div>
                <div class="blog-card-heading">
                  <a href="#">
                    <h1>
                      THE TOP RATED DINOSAUR TOYS FOR TODDLERS FOR THE HOLIDAYS
                      2022
                    </h1>
                  </a>
                </div>
                <div class="blog-card-content">
                  <p>
                    Dinosaur toys for boys and girls are a genuine favorite. As
                    a near-universal rule, kids love dinosaurs – if you weren’t
                    obsessed with dinosaurs as a kid, you almost...
                  </p>
                </div>
                <div class="read-more-btn">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>

            <div class="blog-card blog-card-2 tab-4">
              <div class="blog-card-img">
                <a href="#" class="post-thumbnail">
                  <img src="./images/christmas-toys-for-toddlers-1536x1069.webp" />
                </a>
                <a href="#" class="tag dino-tag">
                  STEM TOYS
                </a>
              </div>
              <div class="blog-card-body">
                <div class="blog-card-date">
                  <p>03 Sep, 2022</p>
                </div>
                <div class="blog-card-heading">
                  <a href="#">
                    <h1>
                      THE TOP RATED DINOSAUR TOYS FOR TODDLERS FOR THE HOLIDAYS
                      2022
                    </h1>
                  </a>
                </div>
                <div class="blog-card-content">
                  <p>
                    Dinosaur toys for boys and girls are a genuine favorite. As
                    a near-universal rule, kids love dinosaurs – if you weren’t
                    obsessed with dinosaurs as a kid, you almost...
                  </p>
                </div>
                <div class="read-more-btn">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>

            <div class="blog-card blog-card-2 tab-3">
              <div class="blog-card-img">
                <a href="#" class="post-thumbnail">
                  <img src="./images/christmas-toys-for-toddlers-1536x1069.webp" />
                </a>
                <a href="#" class="tag dino-tag">
                  ROBOTS
                </a>
              </div>
              <div class="blog-card-body">
                <div class="blog-card-date">
                  <p>03 Sep, 2022</p>
                </div>
                <div class="blog-card-heading">
                  <a href="#">
                    <h1>
                      THE TOP RATED DINOSAUR TOYS FOR TODDLERS FOR THE HOLIDAYS
                      2022
                    </h1>
                  </a>
                </div>
                <div class="blog-card-content">
                  <p>
                    Dinosaur toys for boys and girls are a genuine favorite. As
                    a near-universal rule, kids love dinosaurs – if you weren’t
                    obsessed with dinosaurs as a kid, you almost...
                  </p>
                </div>
                <div class="read-more-btn">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>

            <div class="blog-card blog-card-2 tab-2">
              <div class="blog-card-img">
                <a href="#" class="post-thumbnail">
                  <img src="./images/christmas-toys-for-toddlers-1536x1069.webp" />
                </a>
                <a href="#" class="tag dino-tag">
                  DINO TOYS
                </a>
              </div>
              <div class="blog-card-body">
                <div class="blog-card-date">
                  <p>03 Sep, 2022</p>
                </div>
                <div class="blog-card-heading">
                  <a href="#">
                    <h1>
                      THE TOP RATED DINOSAUR TOYS FOR TODDLERS FOR THE HOLIDAYS
                      2022
                    </h1>
                  </a>
                </div>
                <div class="blog-card-content">
                  <p>
                    Dinosaur toys for boys and girls are a genuine favorite. As
                    a near-universal rule, kids love dinosaurs – if you weren’t
                    obsessed with dinosaurs as a kid, you almost...
                  </p>
                </div>
                <div class="read-more-btn">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>

            <div class="blog-card blog-card-2 tab-4">
              <div class="blog-card-img">
                <a href="#" class="post-thumbnail">
                  <img src="./images/christmas-toys-for-toddlers-1536x1069.webp" />
                </a>
                <a href="#" class="tag dino-tag">
                  STEM TOYS
                </a>
              </div>
              <div class="blog-card-body">
                <div class="blog-card-date">
                  <p>03 Sep, 2022</p>
                </div>
                <div class="blog-card-heading">
                  <a href="#">
                    <h1>
                      THE TOP RATED DINOSAUR TOYS FOR TODDLERS FOR THE HOLIDAYS
                      2022
                    </h1>
                  </a>
                </div>
                <div class="blog-card-content">
                  <p>
                    Dinosaur toys for boys and girls are a genuine favorite. As
                    a near-universal rule, kids love dinosaurs – if you weren’t
                    obsessed with dinosaurs as a kid, you almost...
                  </p>
                </div>
                <div class="read-more-btn">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>

            <div class="blog-card blog-card-1 tab-1">
              <div class="blog-card-img">
                <a href="#" class="post-thumbnail">
                  <img src="./images/Mermaid-Birthday-Party-pinata-1536x931.webp" />
                </a>
                <a href="#" class="tag birthday-tag">
                  BIRTHDAY
                </a>
              </div>
              <div class="blog-card-body">
                <div class="blog-card-date">
                  <p>30 Aug, 2022</p>
                </div>
                <div class="blog-card-heading">
                  <a href="#">
                    <h1>
                      AMAZE HER FRIENDS WITH MERMAID PARTY SUPPLIES FOR THE BEST
                      BIRTHDAY PARTY IN TOWN
                    </h1>
                  </a>
                </div>
                <div class="blog-card-content">
                  <p>
                    If you’re looking for magical little mermaid birthday party
                    ideas, we’ve got some fabulous ones here.
                  </p>
                </div>
                <div class="read-more-btn">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>

            <div class="blog-card blog-card-2 tab-2">
              <div class="blog-card-img">
                <a href="#" class="post-thumbnail">
                  <img src="./images/christmas-toys-for-toddlers-1536x1069.webp" />
                </a>
                <a href="#" class="tag dino-tag">
                  DINO TOYS
                </a>
              </div>
              <div class="blog-card-body">
                <div class="blog-card-date">
                  <p>03 Sep, 2022</p>
                </div>
                <div class="blog-card-heading">
                  <a href="#">
                    <h1>
                      THE TOP RATED DINOSAUR TOYS FOR TODDLERS FOR THE HOLIDAYS
                      2022
                    </h1>
                  </a>
                </div>
                <div class="blog-card-content">
                  <p>
                    Dinosaur toys for boys and girls are a genuine favorite. As
                    a near-universal rule, kids love dinosaurs – if you weren’t
                    obsessed with dinosaurs as a kid, you almost...
                  </p>
                </div>
                <div class="read-more-btn">
                  <a href="#">READ MORE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
