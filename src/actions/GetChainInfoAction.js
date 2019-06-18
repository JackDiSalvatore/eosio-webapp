export const GetChainInfoAction = (chainInfo) => {
    console.log("Action fired")
    return {
        type: 'GET_CHAIN_INFO',
        payload: chainInfo,
    }
}