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
            <li>NANMS ID</li>
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
                <label for="exampleInputEmail">Bearer's Full name</label>
                <input
                  type="Text"
                  class="form-control"
                  name="exampleInputEmail"
                  id="exampleInputEmail"
                  placeholder="Describe Feature of design"
                  v-model="full_name"
                />
              </div>
            </form>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <h3>Please Note</h3>
            <p>Downloadable materials should carry a list of every material available to the buyer on purchase, it is neccessary that these materials are stated clearly to avoid negative reviews from unsatisfied customers.</p>
            <p>Tags are keywords which users will use to search for products in any category of their choice, it is essential that you fill out tag area properly to optimize SEO. Tags should be seperated with a comma.</p>
            <p>Introduce your product to prospective buyers in no more than 8 words, the use of keywords should be optimized.</p>Design Feature should contain r ridiculus mus. Nullam id dolor id nibh ultricies vehicula. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
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
                Publish ID
              </button>
            </div>
          </div>
          </form>
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
    footers
  },
  data() {
    return {
      full_name: "",
      file: ""
    };
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    async sendFile() {
        const formData = new FormData();
        formData.append("file", this.file);
        formData.append("full_name", this.full_name);
        await axios.post("https://ugochimyapp.herokuapp.com/nanmsid", formData, {
          params: {
            published_by: this.$store.state.name
          }
        });
        this.$router.push({ name: "educational" });
    }
  }
};
</script>