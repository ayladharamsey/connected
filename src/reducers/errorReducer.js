export const errorReducer = (state ='', action) => {
    switch(action.type) {
        case 'SET_LOADER':
            return action.bool;
        default: 
            return state;
    }
}