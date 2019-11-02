export const countryReducer = (state = {}, action) => {
    switch(action.type) {
        case 'CHOOSE_COUNTRY':
            return action.chosenCountry
        default: 
            return state;
    }
}