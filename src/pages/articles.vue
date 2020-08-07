<template>
<!-- Blog section should contain a mixture of all blogs, if user clicks science, filter by science. -->
<body>
  <Headers />
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Blog</h2>
          <ol>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>Blog</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Breadcrumbs -->

   <!-- ======= Blog Section ======= -->
    <section id="blog" class="blog">
      <div class="container">
        <div class="sidebar" data-aos="fade-left">
          <bl />
        </div>
        <div class="section-title" data-aos="fade-up">
          <h2>
            <strong>ARTICLES</strong>
          </h2>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-4 col-sm-4 col-xs-6"
            data-aos="zoom-in"
            data-aos-delay="100"
            v-for="article in articles"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <!-- End blog entry -->
        <div class="blog-pagination">
          <ul class="justify-content-center">
            <li class="disabled">
              <i class="icofont-rounded-left"></i>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li class="active">
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">
                <i class="icofont-rounded-right"></i>
              </a>
            </li>
          </ul>
        </div>
    </section>
    <!-- End Blog Section -->
  </main>
  <!-- End #main -->

  <footers />
</body>
</template>

<script>
import axios from "axios";
import Headers from "../components/Headers";
import footers from "../components/footers";
import bl from "../components/bl";
export default {
  components: {
    Headers,
    footers,
    bl
  },
  data() {
    return {
      imageLink: "http://localhost:3000/"
    };
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    },
  },
  mounted() {
    this.$store.dispatch("getArticles");
  },
};
</script>