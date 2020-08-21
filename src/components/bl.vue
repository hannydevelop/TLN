<template>
<section id="bl" class="bl">
  <div class="row">
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
      <h3 class="sidebar-title">Search</h3>
      <div class="sidebar-item search-form">
        <form action>
          <input type="text" />
          <button type="submit">
            <i class="icofont-search"></i>
          </button>
        </form>
      </div>
      <!-- End sidebar search formn-->
    </div>
    <!-- End sidebar categories-->

    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
      <h3 class="sidebar-title">Recent Posts</h3>
      <div class="sidebar-item recent-posts">
        <div class="post-item clearfix" v-for="article in articles.slice(0,3)" :key="article._id">
          <img :src="imageLink + article.file" alt class="img-fluid" />
          <h4>
            <router-link :to="{name: 'blog', params: {id: article._id}}">{{article.title}}</router-link>
          </h4>
          <time datetime="2020-01-01">Jan 1, 2020</time>
        </div>
      </div>
    </div>
    <!-- End sidebar recent posts-->
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
      <h3 class="sidebar-title">Tags</h3>
      <div class="sidebar-item tags">
        <ul>
          <li>
            <router-link :to="{name: 'category', params: {category: technology}}">Design</router-link>
          </li>
          <li>
            <router-link :to="{name: 'category', params: {category: innovation}}">IT</router-link>
          </li>
          <li>
            <router-link :to="{name: 'category', params: {category: business}}">Business</router-link>
          </li>
          <li>
            <router-link :to="{name: 'category', params: {category: educational}}">Developement</router-link>
          </li>
          <li>
            <router-link :to="{name: 'category', params: {category: spiritual}}">Lifestyle</router-link>
          </li>
          <li>
            <router-link :to="{name: 'category', params: {category: educational}}">Books</router-link>
          </li>
          <li>
            <router-link :to="{name: 'category', params: {category: educational}}">Courses</router-link>
          </li>
          <li>
            <router-link :to="{name: 'category', params: {category: art}}">Music</router-link>
          </li>
          <li>
            <router-link :to="{name: 'category', params: {category: spiritual}}">Inspirational</router-link>
          </li>
          <li>
            <router-link :to="{name: 'category', params: {category: science}}">Science</router-link>
          </li>
          <li>
            <router-link :to="{name: 'category', params: {category: science}}">Health Care</router-link>
          </li>
          <li>
            <router-link :to="{name: 'category', params: {category: technology}}">Technology</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- End sidebar tags-->
  </div>
</section>
</template>

<script>
/* eslint-disable */
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
      imageLink: "https://ugochimyapp.herokuapp.com/"
    };
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    }
  },
  mounted() {
    this.$store.dispatch("getArticles");
  }
};
</script>