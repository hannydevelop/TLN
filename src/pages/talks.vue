/* eslint-disable */
<template>
<body>
  <Headers />
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Create Article</h2>
          <ol>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>Article</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Breadcrumbs -->

    <div v-if="errors && errors.length">
      <div v-for="(error, i) of errors" :key="i">
        <b-alert show variant="danger" dismissible>{{error}}</b-alert>
      </div>
    </div>

    <section id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <form @submit.prevent="sendFile" enctype="multipart/form-data">
              <div class="form-group col-md-12">
                <label for="exampleInputEmail">Article Title</label>
                <input
                  type="Text"
                  class="form-control"
                  name="exampleInputEmail"
                  id="exampleInputEmail"
                  placeholder="Describe Feature of design"
                  v-model="title"
                />
              </div>
              <div class="form-group col-md-12">
                <label for="inputTitle">Article Category</label>
                <select class="form-group col-md-12" v-model="categories">
                  <option value="science">Science</option>
                  <option value="technology">Technology</option>
                  <option value="art">Art</option>
                  <option value="spiritual">Spiritual</option>
                  <option value="business">Business</option>
                  <option value="educational">Educational</option>
                  <option value="innovation">Innovation</option>
                  <option value="trending">Trending</option>
                </select>
              </div>
              <div class="form-group col-md-12">
                <label for="inputTitle">Article Section</label>
                <select class="form-group col-md-12" v-model="section">
                  <option value="single">Single</option>
                  <option value="series">Series</option>
                  <option value="talks">Talks</option>
                </select>
              </div>
              <div class="form-group col-md-12">
                <label for="exampleInputPassword1">Tags</label>
                <input
                  type="Text"
                  class="form-control"
                  name="exampleInputPassword1"
                  id="exampleInputPassword1"
                  placeholder="Enter key words Design"
                  v-model="tags"
                />
              </div>
              <div class="form-group col-md-12">
                <label for="inputTitle">Article type</label>
                <select class="form-group col-md-12" v-model="type">
                  <option value="marine Designs">Audio</option>
                  <option value="mechanical Designs">video</option>
                  <option value="Electrical Designs">Script</option>
                </select>
              </div>
              <div class="form-group col-md-12">
                <label for="exampleInputPassword2">Intro</label>
                <input
                  type="email"
                  class="form-control"
                  name="exampleInputPassword2"
                  id="exampleInputPassword2"
                  placeholder="List materials available for download"
                  v-model="intro"
                />
              </div>
            </form>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h3>Please Note</h3>
            <p>Downloadable materials should carry a list of every material available to the buyer on purchase, it is neccessary that these materials are stated clearly to avoid negative reviews from unsatisfied customers.</p>
            <p>Tags are keywords which users will use to search for products in any category of their choice, it is essential that you fill out tag area properly to optimize SEO. Tags should be seperated with a comma.</p>
            <p>Introduce your product to prospective buyers in no more than 8 words, the use of keywords should be optimized.</p>Design Feature should contain r ridiculus mus. Nullam id dolor id nibh ultricies vehicula. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <form @submit.prevent="sendFile" enctype="multipart/form-data">
              <br />
              <div class="page-title">
                <h3 class="breadcrumb-header">File Upload</h3>
              </div>
              <div id="services">
                <div class="icon-box iconbox-blue">
                  <div class="col-md-9">
                    <div class="panel panel-white"></div>
                  </div>
                </div>
              </div>
              <label for="file" class>upload file</label>
              <input type="file" ref="file" @change="selectFile" />
              <button class="btn btn-primary">send</button>
            </form>
          </div>
          <div class="col-lg-6">
            <p>Drop zone</p>
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
import axios from "axios";
import Headers from "../components/Headers";
import footers from "../components/footers";
export default {
  components: {
    Headers,
    footers
  },
  data() {
    return {
      title: "",
      categories: "",
      tags: "",
      type: "",
      intro: "",
      file: "",
      section: ""
    };
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    async sendFile() {
      if (this.title.length > 21) {
        this.errors.push("Title should have a maximum of eight words");
      } else if (this.intro.length > 50 || this.intro.length < 40) {
        this.errors.push(
          "Intro should have a minimum of 40 and a maximum of 50 letters"
        );
      } else {
        const formData = new FormData();
        formData.append("file", this.file);
        formData.append("title", this.title);
        formData.append("categories", this.categories);
        formData.append("tags", this.tags);
        formData.append("type", this.type);
        formData.append("intro", this.intro);
        formData.append("section", this.section);
        await axios.post("https://ugochimyapp.herokuapp.com/talks", formData, {
          params: {
            user: this.$store.state.user,
            username: this.$store.state.name
          }
        });

        this.$router.push({ name: "Home" });
      }
    }
  }
};
</script>
