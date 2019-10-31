export const countryReducer = (state = {}, action) => {
    console.log('action', action)
    switch(action.type) {
        case 'CHOOSE_COUNTRY':
            return action;
        default: 
            return state;
    }
}