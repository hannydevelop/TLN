<template>
<body>
  <Headers />
  <section id="hero" >
     <img class="card-img-top" src="../assets/img/slide/slide-2.jpg" alt="Card image cap" />
    <div class="card-img-top">
      <b-carousel
        id="carousel-fade"
        class="card-img-top"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        ref="myCarousel"
        
      >
        <b-carousel-slide class="card-img-top" caption="First slide"  img-src="../assets/img/slide/slide-2.jpg" ></b-carousel-slide>
        <b-carousel-slide class="slide-img-top" caption="Second Slide"  img-src="../assets/img/slide/slide-1.jpg"></b-carousel-slide>
        <b-carousel-slide class="slide-img-top" caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
      </b-carousel>
    </div>

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
              <p class="animate__animated animate__fadeInLeft">what intrests you?</p>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link to="/NANMS_ID">Educational</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link :to="{name: 'category', params: {category: science}}">Science</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link :to="{name: 'category', params: {category: technology}}">Technology</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link :to="{name: 'category', params: {category: art}}">Art</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link :to="{name: 'category', params: {category: spiritual}}">Inspirational</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link
                  :to="{name: 'category', params: {category: spiritual}}"
                >Spiritual growth</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link :to="{name: 'category', params: {category: trending}}">Trending</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link :to="{name: 'category', params: {category: business}}">Business</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link :to="{name: 'category', params: {category: science}}">Health</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link :to="{name: 'category', params: {category: science}}">Nature</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link :to="{name: 'category', params: {category: technology}}">Society</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link :to="{name: 'category', params: {category: art}}">Humanity</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link :to="{name: 'category', params: {category: innovation}}">Communication</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link :to="{name: 'category', params: {category: art}}">Environment</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link
                  :to="{name: 'category', params: {category: educational}}"
                >Personal Growth</router-link>
              </button>
              <button type="button" class="btn btn-default btn-rounded">
                <router-link :to="{name: 'category', params: {category: educational}}">Development</router-link>
              </button>
              <br />
              <br />
              <a
                href="/about"
                class="btn-get-started animate__animated animate__fadeInUp scrollto"
              >Read More</a>
              <p>
                Already have an account?
                <a href="/login">Sign in</a> to publish an article
              </p>
            </div>
          </div>
        </div>
      </div>

      <a class="carousel-control-prev" role="button">
        <span
          class="carousel-control-prev-icon icofont-simple-left"
          aria-hidden="true"
          @click="prev()"
        ></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" role="button">
        <span
          class="carousel-control-next-icon icofont-simple-right"
          aria-hidden="true"
          @click="next()"
        ></span>
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
          <h2 class="animate__animated animate__fadeInLeft">
            <strong>Newest Articles</strong>
          </h2>
          <p>Read and our latest articles from the light group</p>
        </div>

        <div class="row">
          <div
            class="col-lg-4 col-md-4 col-sm-4 col-6 animate__animated animate__fadeInLeft"
            data-aos="zoom-in"
            data-aos-delay="100"
            v-for="article in articles.slice(0,3)"
            :key="article._id"
          >
            <div class="icon-box iconbox-blue">
              <div class="cardbody">
                <img class="card-img-top" :src="imageLink + article.file" alt="Card image cap" />
                <p>{{article.title}}</p>
                <button class="btn btn-primary">Read</button>
                <div v-if="access">
                  <button class="btn btn-danger">Delete</button>
                </div>
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
          <div class="col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-right">
            <img src="../assets/img/slide/slide-2.jpg" class="img-fluid animate__animated animate__fadeInLeft" alt />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
            <h2 class="animate__animated animate__fadeInRight">The Art Of Finding</h2>
            <p class="animate__animated animate__fadeInRight">
              Providing carrier mentorship and technology support for youths by educating the youths and teenagers
              through content creation, trainings and empowerment programs is finding light!
            </p>
            <ul class="animate__animated animate__fadeInLeft">
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

    <!-- ======= Trending Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2 class="animate__animated animate__fadeInLeft">
            <strong>Trending</strong>
          </h2>
          <p>Explore from our list of trending and most recent talks from our science library that would brighten your day</p>
        </div>

        <div class="row">
          <div
            class="col-lg-4 col-md-4 col-sm-4 col-6 animate__animated animate__fadeInUp"
            data-aos="zoom-in"
            data-aos-delay="100"
            v-for="article in carts.slice(0,3)"
            :key="article._id"
          >
            <div class="icon-box iconbox-blue">
              <div class="cardbody">
                <img class="card-img-top" :src="imageLink + article.file" alt="Card image cap" />
                <p>{{article.title}}</p>
                <button class="btn btn-primary">Read</button>
                <div v-if="access">
                  <button class="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Trending Section -->

    <!-- ======= About Us Section ======= -->
    <section id="about-us" class="about-us">
      <div class="container" data-aos="fade-up">
        <div class="row content">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-right">
            <img src="../assets/img/slide/slide-1.jpg" class="img-fluid animate__animated animate__fadeInLeft" alt />
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 pt-4 pt-lg-0" data-aos="fade-left">
            <h3 class="animate__animated animate__fadeInRight">
              <strong>HOW WE CAN BUILD BACK, TOGETHER, BETTER</strong>
            </h3>
            <p class="animate__animated animate__fadeInRight">
              The five pillars of The Light Nigeria (TLN) is centered about leadership, mentorship and empowerment.
              Building back is nice, but building back together is better! Building back together is not possible with our core pillars
              TLN five core pillars include:
            </p>
            <ul class="animate__animated animate__fadeInDown">
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
          <p
            class="font-italic"
          >Building is essential to the mind and soul of humans! While building, we uplift and encourage others too. Building is never complete without the five pillars of TLN.</p>
        </div>
      </div>
    </section>
    <!-- End About Us Section -->

    <!-- ======= Blog Section ======= -->
    <section id="blog" class="blog">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>
            <strong>EXPLORE PLAYLIST</strong>
          </h2>
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-4 col-6"
            data-aos="zoom-in"
            data-aos-delay="100"
            v-for="article in articles.slice(0,4)"
            :key="article._id"
          >
            <div class="icon-box iconbox-blue">
              <div class="cardbody">
                <img class="card-img-top" :src="imageLink + article.file" alt="Card image cap" />
                <h2 class="entry-title">
                  <router-link :to="{name: 'blog', params: {id: article._id}}">{{article.title}}</router-link>
                </h2>

                <div class="entry-meta">
                  <ul>
                    <li class="d-flex align-items-center">
                      <i class="icofont-user"></i>
                      <a href="blog-single.html">{{article.username}}</a>
                    </li>
                    <li class="d-flex align-items-center">
                      <i class="icofont-wall-clock"></i>
                      <a href="blog-single.html">
                        <time datetime="2020-01-01">Jan 1, 2020</time>
                      </a>
                    </li>
                    <li class="d-flex align-items-center">
                      <i class="icofont-comment"></i>
                      <a href="blog-single.html">12 Comments</a>
                    </li>
                  </ul>
                </div>
                <div class="entry-content">
                  <p>{{article.intro}}</p>
                  <div class="read-more">
                    <router-link :to="{name: 'blog', params: {id: article._id}}">Read More</router-link>
                    <div v-if="access">
                      <button class="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-4 col-sm-4 col-6"
            data-aos="zoom-in"
            data-aos-delay="100"
            v-for="talk in talks.slice(0,3)"
            :key="talk._id"
          >
            <div class="forTalks">
              <div class="icon-box">
                <div class="cardbody">
                  <h2 class="entry-title">
                    <router-link :to="{name: 'blog', params: {id:talk._id}}">{{talk.title}}</router-link>
                  </h2>

                  <div class="entry-meta">
                    <ul>
                      <li class="d-flex align-items-center">
                        <i class="icofont-user"></i>
                        <a href="blog-single.html">{{talk.username}}</a>
                      </li>
                      <li class="d-flex align-items-center">
                        <i class="icofont-wall-clock"></i>
                        <a href="blog-single.html">
                          <time datetime="2020-01-01">Jan 1, 2020</time>
                        </a>
                      </li>
                      <li class="d-flex align-items-center">
                        <i class="icofont-comment"></i>
                        <a href="blog-single.html">12 Comments</a>
                      </li>
                    </ul>
                  </div>
                  <div class="entry-content">
                    <p>{{talk.intro}}</p>
                    <div class="read-more">
                      <router-link :to="{name: 'blog', params: {id: talk._id}}">Read More</router-link>
                      <div v-if="access">
                        <button class="btn btn-danger">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End blog entry -->
      </div>
    </section>
  </main>
  <!-- End #main -->

  <footers />
</body>
</template>

<script>
/* eslint-disable */
import Headers from "../components/Headers";
import footers from "../components/footers";
export default {
  components: {
    Headers,
    footers,
  },
  data() {
    return {
      science: "science",
      technology: "technology",
      art: "art",
      innovation: "innovation",
      trending: "trending",
      business: "business",
      spiritual: "spiritual",
      educational: "educational",
      imageLink: "https://ugochimyapp.herokuapp.com/",
      access: true,
    };
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    },
    talks() {
      return this.$store.state.talks;
    },
    carts() {
      return this.$store.state.categories;
    },
  },
  mounted() {
    this.$store.dispatch("getArticles");
    this.$store.dispatch("getTalks");
    this.$store.dispatch("getCategories", this.science);
  },
  prev() {
    this.$refs.myCarousel.prev();
  },
  next() {
    this.$refs.myCarousel.next();
  },
};
</script>

<style>
.slide-img-top{
    width: 100%;
  height: 100vh;
}
</style>