const initialState = 'https://public.eosinfra.io'
  
  
export default function(state = initialState, action) {

switch(action.type) {
    case 'SET_ENDPOINT': {
    // console.log(action)
    // return Object.assign({}, state, action.payload)
    return action.payload
    }
    default: {
    break
    }
}

return state;

}