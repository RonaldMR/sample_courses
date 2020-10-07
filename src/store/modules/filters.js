const NAME = 'filters'

const actionTypes = {
  SET_CATEGORY: `${NAME}/SET_CATEGORY`,
  SET_CATEGORY_LIST: `${NAME}/SET_CATEGORY_LIST`,
  SET_DATE: `${NAME}/SET_DATE`,
  FETCH_FILTERS: `${NAME}/FETCH_FILTERS`
}

const actions = {
  setCategory: category => ({
    type: actionTypes.SET_CATEGORY,
    payload: { category }
  }),
  setCategoryList: categoryList => ({
    type: actionTypes.SET_CATEGORY_LIST,
    payload: { categoryList }
  }),
  setDate: date => ({
    type: actionTypes.SET_DATE,
    payload: { date }
  }),
  fetchFilters: () => ({
    type: actionTypes.FETCH_FILTERS
  })
}

export const initialState = {
  category: '',
  date: new Date(),
  categoryList: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CATEGORY:
      return { ...state, category: payload.category }
    case actionTypes.SET_CATEGORY_LIST:
      return { ...state, categoryList: payload.categoryList }
    case actionTypes.SET_DATE:
      return { ...state, date: payload.date }
    default:
      return state
  }
}

const getCategory = state => state[NAME].category
const getDate = state => state[NAME].date
const getCategoryList = state => state[NAME].categoryList

const selectors = {
  getCategory,
  getDate,
  getCategoryList
}

const filters = {
  namespace: NAME,
  initialState,
  actionTypes,
  actions,
  reducer,
  selectors
}

export default filters
