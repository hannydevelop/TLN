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
            <strong>NANMS ID Cards</strong>
          </h2>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-4 col-sm-4 col-6"
            data-aos="zoom-in"
            data-aos-delay="100"
            v-for="ids in nanms"
            :key="ids._id"
          >
            <div class="icon-box iconbox-blue">
              <div class="cardbody">
                <img class="card-img-top" :src="imageLink + ids.file" alt="Card image cap" />
                <h2 class="entry-title">
                  <router-link :to="{name: 'blog', params: {id: ids._id}}">{{ids.full_name}}</router-link>
                </h2>

                <div class="entry-meta">
                  <ul>
                    <li class="d-flex align-items-center">
                      <i class="icofont-wall-clock"></i>
                      <a href="blog-single.html">
                        <time datetime="2020-01-01">Jan 1, 2020</time>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="entry-content">
                  <div class="read-more">
                    <button class="btn btn-danger" @click="download(ids)">
                      <i class="icofont-download"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="section-title" data-aos="fade-up">
            <h2>
              <strong>Courses</strong>
            </h2>
          </div>
          <div
            class="col-lg-4 col-md-4 col-sm-4 col-6"
            data-aos="zoom-in"
            data-aos-delay="100"
            v-for="course in courses"
            :key="course._id"
          >
            <p>{{course.title}}</p>
            <p>{{course.intro}}</p>
            <p>{{course.cost}}</p>
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
      </div>
    </section>
    <!-- End Blog Section -->

    <!-- End Blog Section -->
  </main>
  <!-- End #main -->

  <footers />
</body>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import Headers from "../components/Headers";
import footers from "../components/footers";
import bl from "../components/bl";
export default {
  components: {
    Headers,
    footers,
    bl,
  },
  data() {
    return {
      imageLink: "https://ugochimyapp.herokuapp.com/",
    };
  },
  computed: {
    nanms() {
      return this.$store.state.nanms;
    },
    courses() {
      return this.$store.state.course;
    },
  },
  mounted() {
    this.$store.dispatch("getNanms");
    this.$store.dispatch("getCourse");
  },
  methods: {
    download(ids) {
      axios({
        url: `https://ugochimyapp.herokuapp.com/${ids.file}`,
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", "file.jpg");
          document.body.appendChild(fileLink);

          fileLink.click();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    },
  },
};
</script>