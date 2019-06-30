export const SetdelbandAction = (delband) => {
    // console.log("Action fired")
    return {
        type: 'SET_DELBAND',
        payload: delband,
    }
}