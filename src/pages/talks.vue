/* eslint-disable */
<template>
<body>
  <Headers />
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Create Media</h2>
          <ol>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>Media</li>
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
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <form @submit.prevent="sendFile" enctype="multipart/form-data">
              <div class="form-group col-md-12">
                <label for="exampleInputEmail">Media Title</label>
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
                <label for="inputTitle">Media Category</label>
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
                <label for="inputTitle">Media Section</label>
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
                  placeholder="Write Captivating Intro about media"
                  v-model="intro"
                />
              </div>
            </form>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <h3>Please Note</h3>
            <p>The Media Title field should contain the title of the media. The Media title should be brief and should contain not more than eighteen words, Media title can be written in uppercase or lowercase but must be alphabets.</p>
            <p>Media category should contain the category which you feel best fits the media to be published, to allow easy search from other users. To fill the Media category section, click on the drop-down to select a category which you think best fits this media.</p>
            <p>The Media section is important, to determine if Media is a series, or a single media. It is expected the user fills this section before submitting form.</p>
            The tag section helps users in searching for your media, please fill accordingly. The intro section should contain a brief introduction about your media. Tell us briefly with no more than sixty words and not less than fifty words, about your Media.
            The intro section should be filled properly, well indented and captivating as this would captivate the readers mind to read more. Media should be well edited before posting them, as when published medias can only be deleted and not edited.
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
            <div class="col-lg-6 uploadbtn">
              <br/>
              <button class="btn btn-warning" >
                <i class="icofont-download"></i>
                Publish Media
              </button>
            </div>
          </div>
          </form>
        </div>
        <br/><br/>
        <p class="font-italic">We will not fail to remove any media that does not adhere to our core pillars and aims.
          Every media that does not follow this guide stated above shall be removed.</p>
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
      section: "",
      errors: ""
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
        await axios.post("https://ugochimyapp.herokuapp.com/", formData, {
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