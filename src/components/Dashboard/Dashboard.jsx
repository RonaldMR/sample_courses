import React from 'react'
//import PropTypes from 'prop-types'

import TopBar from './TopBar'
import Courses from './Courses'

const Dashboard = props => {
  const courses = [
    {
      id: '1',
      name: 'Course 1',
      price: 300,
      status: 'Live',
      earned: 30000,
      subscriptions: 10,
      views: 30,
      vacancies: 15
    },
    {
      id: '2',
      name: 'Course 1',
      price: 300,
      status: 'Saved',
      earned: 30000,
      subscriptions: 10,
      views: 30,
      vacancies: 15
    },
    {
      id: '3',
      name: 'Course 1',
      price: 300,
      status: 'Rejected',
      earned: 30000,
      subscriptions: 10,
      views: 30,
      vacancies: 15
    },
    {
      id: '4',
      name: 'Course 1',
      price: 300,
      status: 'Live',
      earned: 30000,
      subscriptions: 10,
      views: 30,
      vacancies: 15
    },
    {
      id: '5',
      name: 'Course 1',
      price: 300,
      status: 'Live',
      earned: 30000,
      subscriptions: 10,
      views: 30,
      vacancies: 15
    },
    {
      id: '6',
      name: 'Course 1',
      price: 300,
      status: 'Live',
      earned: 30000,
      subscriptions: 10,
      views: 30,
      vacancies: 15
    }
  ]

  return (
    <>
      <TopBar />
      <Courses items={courses} />
    </>
  )
}

Dashboard.propTypes = {}

export default Dashboard
