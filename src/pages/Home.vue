/* eslint-disable */
<template>
<body>
  <Headers/>
  <section id="hero">
    <img class="card-img-top" src="../assets/img/slide/slide-2.jpg" alt="Card image cap" />
    <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <!-- Slide 1 -->
        <div
          class="carousel-item active"
          style="background-image: url(assets/img/slide/slide-1.jpg)"
        >
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">
                Welcome to
                <span>TLN!</span>
              </h2>
              <p
                class="animate__animated animate__fadeInUp"
              >Talks recommended just for you, delivered right into your inbox</p>
              <br />
              <p>what intrests you?</p>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Science</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Technology</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Art</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Inspiration</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Spiritual growth</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Trending</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Business</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Health</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Nature</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Society</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Humanity</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Communication</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Environment</router-link>
              </button>
               <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Personal growth</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Development</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/contact">Design</router-link>
              </button>
              <br />
              <br />
              <a
                href="#about"
                class="btn-get-started animate__animated animate__fadeInUp scrollto"
              >Read More</a>
              <p>Already have an account? Sign in to view your inbox</p>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item" style="background-image: url(assets/img/slide/slide-2.jpg);">
          <div class="carousel-container">
            <div class="carousel-content animate__animated animate__fadeInUp">
              <h2>Lorem Ipsum Dolor</h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div class="text-center">
                <a href class="btn-get-started">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item" style="background-image: url(assets/img/slide/slide-3.jpg);">
          <div class="carousel-container">
            <div class="carousel-content animate__animated animate__fadeInUp">
              <h2>Sequi ea ut et est quaerat</h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div class="text-center">
                <a href class="btn-get-started">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
    </div>
  </section>
  <!-- End Hero -->

  <main id="main">
    <!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>
            <strong>Newest Articles</strong>
          </h2>
          <p>Read and our latest articles from the light group</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/img1.jpg"
                  alt="Card image cap"
                />
              </div>
              <div class="cardbody">
                <p>The power of the future</p>
                <button class="btn btn-danger">Read</button>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/img2.jpg"
                  alt="Card image cap"
                />
              </div>
              <div class="cardbody">
                <p>The power of the future</p>
                <button class="btn btn-danger">Read</button>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/img3.jpg"
                  alt="Card image cap"
                />
              </div>
              <div class="cardbody">
                <p>The power of the future</p>
                <button class="btn btn-danger">Read</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Section -->

    <!-- ======= About Us Section ======= -->
    <section id="about-us" class="about-us">
      <div class="container" data-aos="fade-up">
        <div class="row content">
          <div class="col-lg-6" data-aos="fade-right">
            <img src="../assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
            <h2>The Art Of Finding</h2>
            <p>
              Providing carrier mentorship and technology support for youths by educating the youths and teenagers 
              through content creation, trainings and empowerment programs is finding light!
            </p>
            <ul>
              <li>
                <i class="ri-check-double-line"></i> Finding light by education and mentoring
              </li>
              <li>
                <i class="ri-check-double-line"></i> Leading in human and capital development is light itself
              </li>
              <li>
                <i class="ri-check-double-line"></i> Good governance and ethical standard in leadership and politics through historical teaching and anti-corruption campaign is light
              </li>
            </ul>
          </div>
          <p class="font-italic">
            The Light Nigeria provides ethical standard in leadership, mentoring, education and politics through historical teaching, anti-corruption campaign and 
            Sustainable Development Goals (SDGs)
          </p>
        </div>
      </div>
    </section>
    <!-- End About Us Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>
            <strong>Trending</strong>
          </h2>
          <p>Laborum repudiandae omnis voluptatum consequatur mollitia ea est voluptas ut</p>
        </div>

        <div class="row">
          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
               <p class="small"><span class="badge badge-danger">Racisim</span></p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
               <p class="small"><span class="badge badge-danger">Pandemic</span></p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>
            <strong>Explore Playlist</strong>
          </h2>
          <p>Laborum repudiandae omnis voluptatum consequatur mollitia ea est voluptas ut</p>
        </div>

        <div class="row">
          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Section -->

    <!-- ======= About Us Section ======= -->
    <section id="about-us" class="about-us">
      <div class="container" data-aos="fade-up">
        <div class="row content">
          <div class="col-lg-6" data-aos="fade-right">
            <img src="../assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
            <h3><strong>HOW WE CAN BUILD BACK, TOGETHER, BETTER</strong></h3>
            <p>
              The five pillars of The Light Nigeria (TLN) is centered about leadership, mentorship and empowerment.
              Building back is nice, but building back together is better! Building back together is not possible with our core pillars
              TLN five core pillars include:
            </p>
            <ul>
              <li>
                <i class="ri-check-double-line"></i> Leadership
              </li>
              <li>
                <i class="ri-check-double-line"></i> Academics
              </li>
              <li>
                <i class="ri-check-double-line"></i> Tech-development
              </li>
              <li>
                <i class="ri-check-double-line"></i> Entertainment
              </li>
              <li>
                <i class="ri-check-double-line"></i> Ideas and Entrepreneurship development
              </li>
            </ul>
          </div>
          <p class="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
        </div>
      </div>
    </section>
    <!-- End About Us Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>
            <strong>Trending</strong>
          </h2>
          <p>Laborum repudiandae omnis voluptatum consequatur mollitia ea est voluptas ut</p>
        </div>

        <div class="row">
          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small"><span class="badge badge-danger">feed your curiosity</span></p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
               <p class="small"><span class="badge badge-danger">Editor's Note</span></p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="card h-100">
                <p class="small">Designed by:</p>
                <img
                  class="card-img-top"
                  src="../assets/img/portfolio/portfolio-3.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Section -->

    
  </main>
  <!-- End #main -->

  <footers/>
</body>
</template>

<script>
import Headers from "../components/Headers"
import footers from "../components/footers"
export default {
  components:{
    Headers,
    footers
  }
}
</script>
