import { connect } from 'react-redux'

import { courses } from '../../../store/modules'

import Courses from './Courses'

const { getCourses } = courses.selectors

const mapStateToProps = state => ({
  items: getCourses(state)
})

const CoursesContainer = connect(mapStateToProps)(Courses)

export default CoursesContainer
