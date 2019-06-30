import { combineReducers } from 'redux';
import AccountInfoReducer from './AccountInfoReducer';
import delbandReducer from './delbandReducer';
import ChainInfoReducer from './ChainInfoReducer';
import REXBalanceReducer from './REXBalanceReducer';

export default combineReducers({
  chainInfo: ChainInfoReducer,
  accountInfo: AccountInfoReducer,
  rexBalance: REXBalanceReducer,
  delband: delbandReducer,
})