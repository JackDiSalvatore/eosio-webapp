// import { ActionTypes } from 'const';


export const SetUserAction = (accountInfo) => {
    console.log("Action fired")
    return {
        type: 'SET_USER',
        payload: accountInfo,
    }
}