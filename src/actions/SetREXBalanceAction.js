export const SetREXBalanceAction = (rexBalance) => {
    // console.log("Action fired")
    return {
        type: 'SET_REX_BALANCE',
        payload: rexBalance,
    }
}