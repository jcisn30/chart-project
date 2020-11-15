import { combineReducers } from 'redux';
import jordan from './jordan';
import kobe from './kobe';
import lebron from './lebron';

//combine reducers
const rootReducer = combineReducers({
  jordan: jordan,
  kobe: kobe,
  lebron: lebron
});

export default rootReducer;