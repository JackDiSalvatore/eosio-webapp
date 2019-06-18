import { combineReducers } from 'redux';
import AccountInfoReducer from './AccountInfoReducer';
import ChainInfoReducer from './ChainInfoReducer';
import REXBalanceReducer from './REXBalanceReducer';

export default combineReducers({
  chainInfo: ChainInfoReducer,
  accountInfo: AccountInfoReducer,
  rexBalance: REXBalanceReducer,
})