export const countryReducer = (state = {}, action) => {
    switch(action.type) {
        case 'CHOOSE_COUNTRY':
            return action.chosenCountries;
        default: 
            return state;
    }
}