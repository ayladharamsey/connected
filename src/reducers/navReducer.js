export const navReducer = (state = '', action) => {
    switch(action.type) {
        case 'SELECT_NAV' :
            return action.category;
        default :
            return state
    }
}