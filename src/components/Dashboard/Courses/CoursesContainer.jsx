import { connect } from 'react-redux'

import { courses } from '../../../store/modules'

import Courses from './Courses'

const { getItems, getIsLoading } = courses.selectors

const mapStateToProps = state => ({
  items: getItems(state),
  isLoading: getIsLoading(state)
})

const CoursesContainer = connect(mapStateToProps)(Courses)

export default CoursesContainer
