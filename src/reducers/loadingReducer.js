export const loadingReducer = (state = false, action) => {
    switch(action.type) {
        case 'SET_LOADER':
            return action.bool;
        default:
            return state
    }
}