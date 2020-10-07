const NAME = 'courses'

const actionTypes = {
  SET: `${NAME}/SET`,
  SET_IS_LOADING: `${NAME}/SET_IS_LOADING`
}

const actions = {
  set: items => ({
    type: actionTypes.SET,
    payload: items
  }),
  setIsLoading: isLoading => ({
    type: actionTypes.SET_IS_LOADING,
    payload: isLoading
  })
}

export const initialState = {
  items: [],
  isLoading: false
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET:
      return { ...state, items: payload }
    case actionTypes.SET_IS_LOADING:
      return { ...state, isLoading: payload }
    default:
      return state
  }
}

const getItems = state => state[NAME].items
const getIsLoading = state => state[NAME].isLoading

const selectors = {
  getItems,
  getIsLoading
}

const courses = {
  namespace: NAME,
  initialState,
  actionTypes,
  actions,
  reducer,
  selectors
}

export default courses
