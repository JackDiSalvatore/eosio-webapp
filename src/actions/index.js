// import { ActionTypes } from 'const';


export const SetAccountAction = (accountInfo) => {
    console.log("Action fired")
    return {
        type: 'SET_ACCOUNT',
        payload: accountInfo,
    }
}