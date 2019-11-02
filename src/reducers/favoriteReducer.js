export const favoriteReducer = (state = [], action) => {
    console.log(action)
    switch(action.type) {
        case 'UNSAVE_ARTICLE' :
            const found = state.findIndex(article => article.id === action.article.id);
            console.log(found)
            console.log(state.slice(found, 1)) 
            case 'SAVE_ARTICLE' :
                console.log('wow')
            return [...state, action.article]
        default:
            return state;
    }
}