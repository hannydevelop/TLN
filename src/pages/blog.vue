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
    <section id="blog" class="blog" v-if="article">
      <div class="container">
        <div class="sidebar" data-aos="fade-left">
          <bl/>
        </div>
        <!-- End sidebar-->
        <!-- ======= Blog Section ======= -->
        <section id="blog" class="blog">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 entries">
                <article class="entry entry-single" data-aos="fade-up">
                  <div class="entry-img">
                  </div>

                  <h2 class="entry-title">
                    {{article.title}}
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
                    <p>
                      Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                      Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                    </p>

                    <p>Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.</p>

                    <blockquote>
                      <i class="icofont-quote-left quote-left"></i>
                      <p>{{article.intro}}</p>
                      <i class="las la-quote-right quote-right"></i>
                      <i class="icofont-quote-right quote-right"></i>
                    </blockquote>

                    <p>
                      Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
                      Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque.
                      Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
                    </p>

                    <h3>Et quae iure vel ut odit alias.</h3>
                    <p>
                      Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                      Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
                      Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.
                    </p>

                    <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                    <p>
                      Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
                      Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
                    </p>
                    <p>Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.</p>
                  </div>

                  <div class="entry-footer clearfix">
                    <div class="float-left">

                      <i class="icofont-tags"></i>
                      <ul class="tags">
                        <li>
                          <a href="#">Creative</a>
                        </li>
                        <li>
                          <a href="#">Tips</a>
                        </li>
                        <li>
                          <a href="#">Marketing</a>
                        </li>
                      </ul>
                    </div>

                    <div class="float-right share">
                      <a href title="Share on Twitter">
                        <i class="icofont-twitter"></i>
                      </a>
                      <a href title="Share on Facebook">
                        <i class="icofont-facebook"></i>
                      </a>
                      <a href title="Share on Instagram">
                        <i class="icofont-instagram"></i>
                      </a>
                    </div>
                  </div>
                </article>
                <!-- End blog entry -->

                <div class="blog-author clearfix" data-aos="fade-up">
                  <h4>Jane Smith</h4>
                  <div class="social-links">
                    <a href="https://twitters.com/#">
                      <i class="icofont-twitter"></i>
                    </a>
                    <a href="https://facebook.com/#">
                      <i class="icofont-facebook"></i>
                    </a>
                    <a href="https://instagram.com/#">
                      <i class="icofont-instagram"></i>
                    </a>
                  </div>
                  <p>Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.</p>
                </div>
                <!-- End blog author bio -->

                <div class="blog-comments" data-aos="fade-up">
                  <h4 class="comments-count">Comments</h4>

                  <div id="comment-1" class="comment clearfix" v-for="comment in comments" :key="comment._id">
                    <h5>
                      <a href>{{comment.name}}</a>
                      <a href="#" class="reply">
                        <i class="icofont-reply"></i> Reply
                      </a>
                    </h5>
                    <time datetime="2020-01-01">{{comment.date}}</time>
                    <p>
                      {{comment.comment}}
                    </p>
                  </div>
                  <!-- End comment #1 -->

                  <div class="reply-form">
                    <h4>Leave a Reply</h4>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <form @submit.prevent="Addcomment(article)">
                      <div class="row">
                        <div class="col-md-6 form-group">
                          <input
                            name="name"
                            type="text"
                            class="form-control"
                            placeholder="Your Name*"
                            v-model="name"
                          />
                        </div>
                        <div class="col-md-6 form-group">
                          <input
                            name="email"
                            type="text"
                            class="form-control"
                            placeholder="Your Email*"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col form-group">
                          <input
                            name="website"
                            type="text"
                            class="form-control"
                            placeholder="Your Website"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col form-group">
                          <textarea name="comment" class="form-control" placeholder="Your Comment*" v-model="comment"></textarea>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">Post Comment</button>
                    </form>
                  </div>
                </div>
                <!-- End blog comments -->
              </div>
              <!-- End blog entries list -->
            </div>
            <!-- End blog comments -->
          </div>
          <!-- End blog entries list -->
        </section>
      </div>

      <!-- End container-->
    </section>
    <!-- End Blog Section -->
  </main>
  <!-- End #main -->

  <footers />
</body>
</template>

<script>
/* eslint-disable */
import Headers from "../components/Headers";
import footers from "../components/footers";
import bl from "../components/bl"
import axios from "axios"
export default {
  components: {
    Headers,
    footers,
    bl
  },
  props: ["id"],
  data() {
    return {
      imageLink: "https://ugochimyapp.herokuapp.com/",
      comment: "",
      name: ""
    };
  },
  computed: {
    article() {
      return this.$store.state.article;
    },
    comments() {
      return this.$store.state.comments;
    }
  },
  mounted() {
    this.$store.dispatch("getArticle", this.id);
    this.$store.dispatch("getComments", this.id);
  },
  methods:{
    async Addcomment(article){
      await axios.post("https://ugochimyapp.herokuapp.com/comments",{
        comment: this.comment,
        name: this.name
      },
      {
        params:{
          user: this.$store.state.user,
          article: this.id
        }
      }
      )  
    }
  }
};
</script>