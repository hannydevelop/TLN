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

    <div v-if="errors && errors.length">
      <div v-for="(error, i) of errors" :key="i">
        <b-alert show variant="danger" dismissible>{{error}}</b-alert>
      </div>
    </div>

    <!-- End Breadcrumbs -->
    <section id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <form @submit.prevent="sendFile" enctype="multipart/form-data">
              <div class="form-group col-md-12">
                <label for="exampleInputEmail">Article Title</label>
                <input
                  type="Text"
                  class="form-control"
                  name="exampleInputEmail"
                  id="exampleInputEmail"
                  placeholder="Article Title"
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
                  placeholder="Article Title"
                </select>
              </div>
              <div class="form-group col-md-12">
                <label for="inputTitle">Article Section</label>
                <select class="form-group col-md-12" v-model="section">
                  <option value="single">Single</option>
                  <option value="series">Series</option>
                </select>
              </div>
              <div class="form-group col-md-12">
                <label for="exampleInputPassword1">Tags</label>
                <input
                  type="Text"
                  class="form-control"
                  name="exampleInputPassword1"
                  id="exampleInputPassword1"
                  placeholder="Enter key words"
                  v-model="tags"
                />
              </div>
              <div class="form-group col-md-12">
                <label for="exampleInputPassword2">Intro</label>
                <input
                  type="email"
                  class="form-control"
                  name="exampleInputPassword2"
                  id="exampleInputPassword2"
                  placeholder="Write captivating Intro about Article"
                  v-model="intro"
                />
              </div>
            </form>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <h3>Please Note</h3>
            <p>The Article Title field should contain the title of the article. The Article title should be brief and should contain not more than eighteen words, Article title can be written in uppercase or lowercase but must be alphabets.</p>
            <p>Article category should contain the category which you feel best fits the article to be published, to allow easy search from other users. To fill the Article category section, click on the drop-down to select a category which you think best fits this article.</p>
            <p>The Article section is important, to determine if Article is a series, or a single article. It is expected the user fills this section before submitting form.</p>
            The tag section helps users in searching for your article, please fill accordingly. The intro section should contain a brief introduction about your article. Tell us briefly with no more than sixty words and not less than fifty words, about your Article.
            The intro section should be filled properly, well indented and captivating as this would captivate the readers mind to read more. Article should be well edited before posting them, as when published articles can only be deleted and not edited.
          </div>
        </div>
        <div class="col-lg-12">
          <form @submit.prevent="sendFile" enctype="multipart/form-data">
          <div class="row">
            <div class="col-lg-6">
              <br />
              <label for="file" class>Choose File to upload</label>
              <input type="file" ref="file" @change="selectFile" />
            </div>
            <div class="col-lg-6">
              <br/>
              <button class="btn btn-warning">
                <i class="icofont-download"></i>
                Publish Article
              </button>
            </div>
          </div>
          </form>
        </div><br/><br/>
        <p class="font-italic">We will not fail to remove any article that does not adhere to our core pillars and aims.
          Every article that does not follow this guide stated above shall be removed.</p>
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
      categories: "",
      tags: "",
      type: "",
      intro: "",
      file: "",
      section: "",
      errors: [],
    };
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    async sendFile() {
      if (this.title.length > 21) {
        this.errors.push("Title should have a maximum of twenty characters");
      } else if (this.intro.length > 70 || this.intro.length < 60) {
        this.errors.push(
          "Intro should have a minimum of 60 and a maximum of 70 characters"
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
        await axios.post("https://ugochimyapp.herokuapp.com/articles", formData, {
          params: {
            user: this.$store.state.user,
            username: this.$store.state.name,
          },
        });

        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>