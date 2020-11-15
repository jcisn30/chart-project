import { all } from 'redux-saga/effects'
import jordanSaga from './jordanSaga'
import kobeSaga from './kobeSaga'
import lebronSaga from './lebronSaga'

//create rootSaga so multiple sagas can be created and called
export default function* rootSaga() {
  yield all([
    jordanSaga(),
    kobeSaga(),
    lebronSaga()
  ])
}