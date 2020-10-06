import { combineReducers } from 'redux'
import { courses, filters } from './modules'

export default combineReducers({
  [filters.namespace]: filters.reducer,
  [courses.namespace]: courses.reducer
})
