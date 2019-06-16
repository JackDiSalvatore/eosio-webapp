import { combineReducers } from 'redux';
import InfoReducer from './InfoReducer';

export default combineReducers({
  info: InfoReducer,
})