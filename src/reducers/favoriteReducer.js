export const favoriteReducer = (state = [], action) => {
    switch(action.type) {
        case 'UNSAVE_ARTICLE' :
            const found =  state.findIndex(article => article.id === action.article.id);
            found.isSavedForLater = false;
            return state.splice(found, 1); 
        case 'SAVE_ARTICLE' :
            action.article.isSavedForLater = true;
            return [...state, action.article]
        default:
            return state;
    }
}