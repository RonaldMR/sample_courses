import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { filters } from '../../../store/modules'

import TopBar from './TopBar'

const { getCategory, getDate, getCategoryList } = filters.selectors
const { setCategory, setDate } = filters.actions

const mapStateToProps = state => ({
  category: getCategory(state),
  date: getDate(state),
  categoryList: getCategoryList(state)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { onCategoryChange: setCategory, onDateChange: setDate },
    dispatch
  )

const TopBarContainer = connect(mapStateToProps, mapDispatchToProps)(TopBar)

export default TopBarContainer
