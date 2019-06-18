import { combineReducers } from 'redux';
import AccountInfoReducer from './AccountInfoReducer';
import ChainInfoReducer from './ChainInfoReducer';

export default combineReducers({
  chainInfo: ChainInfoReducer,
  accountInfo: AccountInfoReducer,
})