export const newsDataReducer = (state = [], action) => {
    console.log(state, action)
    switch(action.type) {
        case 'SET_DATA':
            return action.data
        case 'FLIP_FAVE':
            let country = state[action.column]
            return country.map(fave => {
                return fave.id === action.id ? {...fave, isSavedForLater: !fave.isFavorited} : fave;
            })
        default:
            return state
    }
}
