export const SetChainInfoAction = (chainInfo) => {
    // console.log("Action fired")
    return {
        type: 'SET_CHAIN_INFO',
        payload: chainInfo,
    }
}