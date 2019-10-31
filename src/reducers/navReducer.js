export const navReducer = (state = 'feed', action) => {
    switch(action.type) {
        case 'SELECT_NAV' :
            return action.category;
        default :
            return state
    }
}