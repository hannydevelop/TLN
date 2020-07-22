<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <!-- Uncomment below if you prefer to use an image logo -->
      <a href="/home" class="logo">
        <img src="../assets/img/clients/tln edit.jpg" alt class="img-fluid" />
      </a>

      <h6 class="logo mr-auto">
        <router-link to="/about">
          <span>Lighting</span>
          <strong>Up</strong>
          <span>Ideas</span>
        </router-link>
      </h6>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active">
            <router-link to="/home">Home</router-link>
          </li>

          <li>
            <router-link to="/about">About</router-link>
          </li>

          <li class="drop-down">
            <router-link to="/blog">Blog</router-link>
            <ul>
              <li><router-link :to="{name: 'category', params: {category: science}}">Science</router-link></li>
              <li><router-link :to="{name: 'category', params: {category: technology}}">Technology</router-link></li>
              <li><router-link :to="{name: 'category', params: {category: art}}">Art</router-link></li>
              <li><router-link :to="{name: 'category', params: {category: innovation}}">Innovation</router-link></li>
              <li><router-link :to="{name: 'category', params: {category: trending}}">Trending</router-link></li>
              <li><router-link :to="{name: 'category', params: {category: business}}">Business</router-link></li>
              <li><router-link :to="{name: 'category', params: {category: spiritual}}">Spiritual</router-link></li>
              <li><router-link :to="{name: 'category', params: {category: educational}}">Educational</router-link></li>
            </ul>
          </li>

          <li class="drop-down">
            <a href>Discover</a>
            <ul>
              <li>
              <router-link to="/home">Talks</router-link>
              </li>
              <li>
                <router-link to="/home">Series</router-link>
              </li>
            </ul>
          </li>
          <li class="drop-down">
            <a href>Participate</a>
            <ul>
              <li>
                <a href="about.html">Norminate</a>
              </li>
              <li>
                <a href="team.html">Organize Talks</a>
              </li>
              <li>
                <router-link to="/articles">Post Article</router-link>
              </li>
              <li>
                <router-link to="/Talks">Post Talks</router-link>
              </li>
            </ul>
          </li>

          <li v-if="!loggedIn">
            <a href="/login">Login</a>
          </li>
          <li v-if="loggedIn">
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
      <!-- .nav-menu -->

      <div class="header-social-links">
        <a href="#" class="twitter">
          <i class="icofont-twitter"></i>
        </a>
        <a href="#" class="facebook">
          <i class="icofont-facebook"></i>
        </a>
        <a href="#" class="instagram">
          <i class="icofont-instagram"></i>
        </a>
        <a href="#" class="linkedin">
          <i class="icofont-linkedin"></i>
        </a>
      </div>
    </div>
  </header>
  <!-- End Header -->

  <!-- ======= Hero Section ======= -->
</template>

<script>
export default {
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
      section: "section",
      talks:"talks"
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>