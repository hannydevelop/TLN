import axios from 'axios'

export const getProducts = ({ commit }) => {
  axios.get('http://localhost:3000/datas')
  .then(response => {
    commit('SET_PRODUCTS', response.data)
  })
}

export const getProduct = ({ commit }, productId) => {
  axios.get(`http://localhost:3000/datas/${productId}`)
  .then(response => {
    commit('SET_PRODUCT', response.data)
  })
}

export const getProjects = ({ commit }, projectsId) => {
  axios.get(`http://localhost:3000/datas/1/${projectsId}`)
    .then(response => {
      commit('SET_PROJECTS', response.data)
    })
}

export const getProfile = ({ commit }, profileId) => {
  axios.get(`http://localhost:3000/details/1/${profileId}`)
    .then(response => {
      commit('SET_PROFILE', response.data)
    })
}

export const getCategories = ({ commit }, categories) => {
  axios.get(`http://localhost:3000/datas/category/${categories}`)
    .then(response => {
      commit('SET_CATEGORY', response.data)
    })
}

export const addProductToCart = (context, {product, quantity}) => {
  context.commit('ADD_TO_CART', { product, quantity });
  axios.post('http://localhost:3000/cart', {
    _id: product._id,
    title: product.title,
    price: product.price,
    file: product.file,
    user: context.rootState.user,
    description: product.description,
    quantity: 1,
  })
}

export const getCartItems = ({ commit }, cartsId) => {
  axios.get(`http://localhost:3000/cart/1/${cartsId}`)
    .then(response => {
      commit('SET_CART', response.data)
    })
}

export const destroyToken = (context) => {
  if (context.getters.loggedIn) {
    return new Promise((resolve, reject) => {
      axios.post('/')
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
  return new Promise((resolve, reject) =>{
  axios.post('http://localhost:3000/users/login', {
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
    axios.post('http://localhost:3000/users/login', {
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
    axios.post('http://localhost:3000/users/login', {
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

