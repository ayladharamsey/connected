export const langReducer = (state = 'en', action) => {
    switch(action.type) {
        case 'CHOOSE_LANGUAGE': 
            return action.lang
        default: 
            return state
    }
}