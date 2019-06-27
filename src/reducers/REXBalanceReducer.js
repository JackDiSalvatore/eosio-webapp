
const initialState = {
  version: 0,
  owner: 'eosio',
  vote_stake: '880.1797 EOS',
  rex_balance: '8799320.5007 REX',
  matured_rex: 0,
  rex_maturities: [{
      first: '2019-05-06T00:00:00',
      second: '87993205007'
    }
  ]
}


export default function(state = initialState, action) {

  switch(action.type) {
    case 'SET_REX_BALANCE': {
      // console.log(action)
      // return Object.assign({}, state, action.payload)
      return action.payload
    }
  }

  return state;

}