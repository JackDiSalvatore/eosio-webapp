
const initialState = {
  chain_id: "DISCONNECTED",
}


export default function(state = initialState, action) {

  switch(action.type) {
    case 'SET_CHAIN_INFO': {
      console.log(action)
      // return Object.assign({}, state, action.payload)
      return action.payload
    }
  }

  return state;

}