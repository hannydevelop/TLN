/* eslint-disable */
import axios from 'axios'

export const destroyToken = (context) => {
  if (context.getters.loggedIn) {
    return new Promise((resolve, reject) => {
      axios.post('https://ugochimyapp.herokuapp.com/users/login')
        .then(response => {
          localStorage.removeItem('data')
          context.commit('destroyToken')
          resolve(response)
          //console.log(token)
        })
        .catch(error => {
          localStorage.removeItem('data')
          context.commit('destroyToken')
          reject(error)
        })
    })
  }
}

export const retrieveToken = (context, credentials) => {
  return new Promise((resolve, reject) => {
    axios.post('https://ugochimyapp.herokuapp.com/users/login', {
      email: credentials.email,
      password: credentials.password,
    })
      .then(response => {
        const token = response.data

        localStorage.setItem('data', token)
        context.commit('retrieveToken', token)
        resolve(response)
        //console.log(token)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}

export const retrieveId = (context, credentials) => {
  return new Promise((resolve, reject) => {
    axios.post('https://ugochimyapp.herokuapp.com/users/login', {
      email: credentials.email,
      password: credentials.password,
    })
      .then(response => {
        const id = response.data.payload._id
        localStorage.setItem('datass', id)
        context.commit('retrieveId', id)
        resolve(response)
        //console.log(token)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}

export const retrieveUser = (context, credentials) => {
  return new Promise((resolve, reject) => {
    axios.post('https://ugochimyapp.herokuapp.com/users/login', {
      email: credentials.email,
      password: credentials.password,
    })
      .then(response => {
        const id = response.data.payload.username
        localStorage.setItem('datas', id)
        context.commit('retrieveUser', id)
        resolve(response)
        //console.log(token)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}

export const getArticles = ({ commit }) => {
  axios.get('https://ugochimyapp.herokuapp.com/articles')
    .then(response => {
      commit('SET_ARTICLES', response.data)
    })
}

export const getComments = ({ commit }, commentsId) => {
  axios.get(`https://ugochimyapp.herokuapp.com/comments/1/${commentsId}`)
    .then(response => {
      commit('SET_COMMENTS', response.data)
    })
}

export const getArticle = ({ commit }, articleId) => {
  axios.get(`https://ugochimyapp.herokuapp.com/articles/${articleId}`)
    .then(response => {
      commit('SET_ARTICLE', response.data)
    })
}

export const getTalks = ({ commit }) => {
  axios.get('https://ugochimyapp.herokuapp.com/talks')
    .then(response => {
      commit('SET_TALKS', response.data)
    })
}

export const getCategories = ({ commit }, categories) => {
  axios.get(`https://ugochimyapp.herokuapp.com/articles/category/${categories}`)
    .then(response => {
      commit('SET_CATEGORY', response.data)
    })
}

export const getCategoriestalk = ({ commit }, categoriestalk) => {
  axios.get(`https://ugochimyapp.herokuapp.com/talks/category/${categoriestalk}`)
    .then(response => {
      commit('SET_CATEGORYTALK', response.data)
    })
}

export const getSection = ({ commit }, section) => {
  axios.get(`https://ugochimyapp.herokuapp.com/articles/section/${section}`)
    .then(response => {
      commit('SET_SECTION', response.data)
    })
}

export const getNanms = ({ commit }) => {
  axios.get('https://ugochimyapp.herokuapp.com/nanmsid')
    .then(response => {
      commit('SET_NANMS', response.data)
    })
}

export const getCourse = ({ commit }) => {
  axios.get('https://ugochimyapp.herokuapp.com/course')
    .then(response => {
      commit('SET_COURSE', response.data)
    })
}