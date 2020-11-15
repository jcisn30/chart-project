import * as type from '../types';

//jordan action
export function getJordanData(jordan) {
  return { 
    type: type.GET_JORDAN_DATA_REQUESTED,
  }
}

//kobe action
export function getKobeData(kobe) {
  return { 
    type: type.GET_KOBE_DATA_REQUESTED,
  }
}

//lebron action
export function getLebronData(lebron) {
  return { 
    type: type.GET_LEBRON_DATA_REQUESTED,
  }
}