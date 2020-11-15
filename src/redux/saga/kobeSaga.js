import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

//api url for kobes best season stats
const apiUrl = `https://www.balldontlie.io/api/v1/season_averages?season=2002&player_ids[]=1043`;

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




//kobe Saga: will be fired on Get_KOB_DATA_REQUESTED actions
function* fetchKobeData(action) {
   try {
      const kobe = yield call(getApi);
      yield put({type: 'GET_KOBE_DATA_SUCCESS', kobe:kobe});
   } catch (e) {
      yield put({type: 'GET_KOBE_DATA_FAILED', message: e.message});
   }
}


/*
  Starts fetchKobeData on each dispatched `GET_DATA_REQUESTED` action.
  Allows concurrent fetches of data.
*/
function* kobeSaga() {
   yield takeEvery('GET_KOBE_DATA_REQUESTED', fetchKobeData);
}

export default kobeSaga;