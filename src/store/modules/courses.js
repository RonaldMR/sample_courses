const NAME = 'courses'

const actionTypes = {
  SET: `${NAME}/SET`
}

const actions = {
  set: items => ({
    type: actionTypes.SET,
    payload: items
  })
}

export const initialState = {
  items: [
    {
      id: '1',
      name: 'Course 1',
      price: 300,
      status: 'Live',
      earned: 30000,
      subscriptions: 10,
      views: 30,
      vacancies: 15,
      category: '1'
    },
    {
      id: '2',
      name: 'Course 2',
      price: 300,
      status: 'Saved',
      earned: 30000,
      subscriptions: 10,
      views: 30,
      vacancies: 15,
      category: '2'
    },
    {
      id: '3',
      name: 'Course 3',
      price: 300,
      status: 'Rejected',
      earned: 30000,
      subscriptions: 10,
      views: 30,
      vacancies: 15,
      category: '3'
    },
    {
      id: '4',
      name: 'Course 4',
      price: 300,
      status: 'Live',
      earned: 30000,
      subscriptions: 10,
      views: 30,
      vacancies: 15,
      category: '3'
    },
    {
      id: '5',
      name: 'Course 5',
      price: 300,
      status: 'Live',
      earned: 30000,
      subscriptions: 10,
      views: 30,
      vacancies: 15,
      category: '3'
    },
    {
      id: '6',
      name: 'Course 6',
      price: 300,
      status: 'Live',
      earned: 30000,
      subscriptions: 10,
      views: 30,
      vacancies: 15,
      category: '2'
    }
  ]
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET:
      return { ...state, items: payload }
    default:
      return state
  }
}

const getItems = state => state[NAME].items

const selectors = {
  getCourses: getItems
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
