import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

//api url for lerbons best season stats
const apiUrl = `https://www.balldontlie.io/api/v1/season_averages?season=2007&player_ids[]=237`;

//fetch apiUrl JSON data
function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  }).then(response => response.json())
      
    .catch((error) => {throw error})
}




//lebron Saga: will be fired on Get_LEBRON_DATA_REQUESTED actions
function* fetchLebronData(action) {
   try {
      const lebron = yield call(getApi);
      yield put({type: 'GET_LEBRON_DATA_SUCCESS', lebron:lebron});
   } catch (e) {
      yield put({type: 'GET_LEBRON_DATA_FAILED', message: e.message});
   }
}


/*
  Starts fetchLebronData on each dispatched `GET_DATA_REQUESTED` action.
  Allows concurrent fetches of data.
*/
function* lebronSaga() {
   yield takeEvery('GET_LEBRON_DATA_REQUESTED', fetchLebronData);
}

export default lebronSaga;