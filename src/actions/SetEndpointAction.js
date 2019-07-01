export const SetEndpointAction = (endpoint) => {
    // console.log("Action fired")
    return {
        type: 'SET_ENDPOINT',
        payload: endpoint,
    }
}