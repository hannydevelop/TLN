
<template>
<body>
  <Headers />
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Publish Course</h2>
          <ol>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>Course</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Breadcrumbs -->

    <section id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <form @submit.prevent="sendFile">
              <div class="form-group col-md-12">
                <label for="exampleInputEmail">Course Title</label>
                <input
                  type="Text"
                  class="form-control"
                  name="exampleInputEmail"
                  id="exampleInputEmail"
                  placeholder="Course Title"
                  v-model="title"
                />
              </div>
              <div class="form-group col-md-12">
                <label for="exampleInputEmail">Intro</label>
                <input
                  type="Text"
                  class="form-control"
                  name="exampleInputEmail"
                  id="exampleInputEmail"
                  placeholder="Write brief Intro about course"
                  v-model="intro"
                />
              </div>
              <div class="form-group col-md-12">
                <label for="exampleInputEmail">Cost</label>
                <input
                  type="Text"
                  class="form-control"
                  name="exampleInputEmail"
                  id="exampleInputEmail"
                  placeholder="Price of course"
                  v-model="cost"
                />
              </div><br/>
              <div>
                <button class="btn btn-warning">
                  <i class="icofont-download"></i>
                  Publish Course
                </button>
              </div>
            </form>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
           <h3>Please Note</h3>
            <p>The Course Title field should contain the title of the course. The Course title should be brief and should contain not more than eighteen words, Course title can be written in uppercase or lowercase but must be alphabets.</p>
            <p>The intro section should contain a brief introduction about the Course.
            The intro section should be filled properly, well indented and captivating as this would captivate the readers mind to read more. </p>
            The cost section should contain the price of the course, if it is a free course it should be stated clearly in this section.
          </div>
        </div>
      </div>
    </section>
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
export default {
  components: {
    Headers,
    footers,
  },
  data() {
    return {
      title: "",
      intro: "",
      cost: "",
    };
  },
  methods: {
    async sendFile() {
      await axios.post(
        "https://ugochimyapp.herokuapp.com/course",
        {
          title: this.title,
          intro: this.intro,
          cost: this.cost
        },
        {
          params: {
            posted_by: this.$store.state.name,
          },
        }
      );
      this.$router.push({ name: "educational" });
    },
  },
};
</script>