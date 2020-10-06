const NAME = 'filters'

const actionTypes = {
  SET_CATEGORY: `${NAME}/SET_CATEGORY`,
  SET_DATE: `${NAME}/SET_DATE`
}

const actions = {
  setCategory: category => ({
    type: actionTypes.SET_CATEGORY,
    payload: { category }
  }),
  setDate: date => ({
    type: actionTypes.SET_DATE,
    payload: { date }
  })
}

export const initialState = {
  category: '',
  date: new Date(),
  categoryList: [
    {
      id: '1',
      category: '.NET'
    },
    {
      id: '2',
      category: 'JS'
    },
    {
      id: '3',
      category: 'PYTHON'
    }
  ]
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CATEGORY:
      return { ...state, category: payload.category }
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
