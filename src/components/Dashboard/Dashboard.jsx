import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import TopBar from './TopBar'
import Courses from './Courses'

const Dashboard = ({ fetchFilters }) => {
  useEffect(() => {
    fetchFilters()
  }, [fetchFilters])

  return (
    <>
      <TopBar />
      <Courses />
    </>
  )
}

Dashboard.propTypes = {
  fetchFilters: PropTypes.func.isRequired
}

export default Dashboard
