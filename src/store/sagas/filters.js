import { select, takeLatest, put, call } from 'redux-saga/effects'

import { courses, filters } from '../modules'

const COURSES_DATA = [
  {
    id: '1',
    name: 'Course 1',
    price: 300,
    status: 'Live',
    earned: 30000,
    subscriptions: 10,
    views: 30,
    vacancies: 15,
    category: '1',
    date: new Date(2020, 9, 5)
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
    category: '2',
    date: new Date(2020, 9, 6)
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
    category: '3',
    date: new Date(2020, 9, 6)
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
    category: '3',
    date: new Date(2020, 9, 6)
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
    category: '3',
    date: new Date(2020, 9, 7)
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
    category: '2',
    date: new Date(2020, 9, 5)
  }
]

const CATEGORY_LIST_DATA = [
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

export function* applyFilters() {
  const category = yield select(filters.selectors.getCategory)
  const date = yield select(filters.selectors.getDate)

  const sleep = delay => new Promise(resolve => setTimeout(resolve, delay))

  yield put(courses.actions.setIsLoading(true))

  yield call(sleep, 2000)

  const filteredCourseList = COURSES_DATA.filter(course => {
    if (date.toDateString() !== course.date.toDateString()) {
      return false
    }

    return category ? course.category === category : true
  })

  yield put(courses.actions.set(filteredCourseList))

  yield put(courses.actions.setIsLoading(false))
}

export function* fetchFilters() {
  yield put(filters.actions.setCategoryList(CATEGORY_LIST_DATA))
  yield call(applyFilters)
}

const filtersSaga = [
  takeLatest(filters.actionTypes.SET_CATEGORY, applyFilters),
  takeLatest(filters.actionTypes.SET_DATE, applyFilters),
  takeLatest(filters.actionTypes.FETCH_FILTERS, fetchFilters)
]

export default filtersSaga
