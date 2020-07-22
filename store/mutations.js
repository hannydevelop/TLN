
export const SET_PRODUCTS = (state, products) => {
  state.products = products
}

export const SET_PRODUCT = (state, product) => {
  state.product = product
}

export const SET_PROJECTS = (state, projects) => {
  state.projects = projects
}

export const SET_PROFILE = (state, profile) => {
  state.profile = profile
}

export const SET_CATEGORY = (state, categories) => {
  state.categories = categories
}

export const SET_CART = (state, cartItems) => {
  state.cart = cartItems
}

export const retrieveToken = (state, token) => {
  state.token = token
}

export const retrieveId = (state, id) => {
  state.user = id
}

export const retrieveUser = (state, id) => {
  state.name = id
}

export const destroyToken = (state) => {
  state.token = null
}

export const ADD_TO_CART = (state, { product, quantity, price }) => {
  state.cart.push({
    product,
    quantity,
    price
  })
}