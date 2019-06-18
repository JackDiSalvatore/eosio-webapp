// import { ActionTypes } from 'const';


export const UserAction = (accountInfo) => {
    console.log("Action fired")
    return {
        type: 'SET_USER',
        payload: accountInfo,
    }
}