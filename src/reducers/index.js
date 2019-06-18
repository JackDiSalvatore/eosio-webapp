import { combineReducers } from 'redux';
import AccountInfoReducer from './AccountInfoReducer';

export default combineReducers({
  accountInfo: AccountInfoReducer,
})