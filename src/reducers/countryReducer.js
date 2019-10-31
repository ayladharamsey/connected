export const countryReducer = (state = 'Select Country Here', action) => {
    switch(action.type) {
        case 'CHOOSE_COUNTRY':
            return action.chosenCountry;
        default: 
            return state;
    }
}