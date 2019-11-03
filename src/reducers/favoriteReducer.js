export const favoriteReducer = (state = [], action) => {
    console.log('original', state)
    switch(action.type) {
        case 'UNSAVE_ARTICLE' :
            let found =  state.find(article => article.id === action.article.id);
            found.isSavedForLater = false;
            return state.splice(found.id, 1); 
        case 'SAVE_ARTICLE' :
            action.article.isSavedForLater = true;
            return [...state, action.article]
        default:
            return state;
    }
}