import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { filters } from '../../store/modules'

import Dashboard from './Dashboard'

const { fetchFilters } = filters.actions

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchFilters }, dispatch)

const DashboardContainer = connect(null, mapDispatchToProps)(Dashboard)

export default DashboardContainer
