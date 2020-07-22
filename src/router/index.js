import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import article from '../pages/article'
import blogs from '../pages/blogs'
import talks from '../pages/talks'
import register from '../pages/register'
import Login from '../pages/Login'
import blog from '../pages/blog'
import category from '../pages/category'
import logout from '@/components/logout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/blog',
      name: 'blogs',
      component: blogs
    },
    {
      path: '/blog/:category',
      name: 'category',
      component: category,
      props: true
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: blog,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: '/Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles',
      name: 'article',
      component: article,
    },
    {
      path: '/talks',
      name: 'talks',
      component: talks,
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout,
    },
  ]
})