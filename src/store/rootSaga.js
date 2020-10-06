import { all } from 'redux-saga/effects'
import { filtersSaga } from './sagas'

export default function* rootSaga() {
  yield all([...filtersSaga])
}
