const initialState = 
    [
        {
            from: 'eos',
            to: 'ac.eos',
            net_weight: '0.0200 EOS',
            cpu_weight: '0.0200 EOS',
        }
    ]
  
  
export default function(state = initialState, action) {
  
    switch(action.type) {
      case 'SET_DELBAND': {
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