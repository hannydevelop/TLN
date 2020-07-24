
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

export const SET_ARTICLES = (state, articles) => {
  state.articles = articles
}

export const SET_COMMENTS = (state, comments) => {
  state.comments = comments
}

export const SET_TALKS = (state, talks) => {
  state.talks = talks
}

export const SET_ARTICLE = (state, article) => {
  state.article = article
}

export const SET_CATEGORY = (state, categories) => {
  state.categories = categories
}

export const SET_CATEGORYTALK = (state, categoriestalk) => {
  state.categoriestalk = categoriestalk
}

export const SET_SECTION = (state, section) => {
  state.section = section
}