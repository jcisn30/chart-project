import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

//api url for jordans best season stats
const apiUrl = `https://www.balldontlie.io/api/v1/season_averages?season=1990&player_ids[]=2931`;

//fetch apiUrl JSON data
function getApi() {
  return fetch(apiUrl,  {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  }).then(response => response.json())
   
    .catch((error) => {throw error})
}



// Jordan Saga will be fired on Get_JORDAN_DATA_REQUESTED actions
function* fetchJordanData(action) {
   try {
      const jordan = yield call(getApi);
      yield put({type: 'GET_JORDAN_DATA_SUCCESS', jordan:jordan});
   } catch (e) {
      yield put({type: 'GET_JORDAN_DATA_FAILED', message: e.message});
   }
}



/*
  Starts fetchJordanData on each dispatched `GET_JORDAN_DATA_REQUESTED` action.
  Allows concurrent fetches of data.
*/
function* jordanSaga() {
   yield takeEvery('GET_JORDAN_DATA_REQUESTED', fetchJordanData);
   
}

export default jordanSaga;
