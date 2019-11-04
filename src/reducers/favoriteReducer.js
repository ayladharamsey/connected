export const favoriteReducer = (state = [], action) => {
    switch(action.type) {
        case 'UNSAVE_ARTICLE' :
            let found =  state.find(article => article.id === action.article.id);
            found.isSavedForLater= !found.isSavedForLater 
            return state.splice(found.id, 1); 
        case 'SAVE_ARTICLE' :
            action.article.isSavedForLater = !action.article.isSavedForLater
            return [...state, action.article]
        default:
            return state;
    }
}