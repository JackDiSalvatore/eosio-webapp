import { combineReducers } from 'redux';
import AccountInfoReducer from './AccountInfoReducer';
import delbandReducer from './delbandReducer';
import ChainInfoReducer from './ChainInfoReducer';
import EndpointReducer from './EndpointReducer';
import REXBalanceReducer from './REXBalanceReducer';

export default combineReducers({
  endpoint: EndpointReducer,
  chainInfo: ChainInfoReducer,
  accountInfo: AccountInfoReducer,
  rexBalance: REXBalanceReducer,
  delband: delbandReducer,
})