export const favoriteReducer = (state = [], action) => {
    switch(action.type) {
        case 'UNSAVE_ARTICLE' :
            const found =  state.findIndex(article => article.id === action.article.id);
            return state.slice(found, 1); 
        case 'SAVE_ARTICLE' :
            return [...state, action.article]
        default:
            return state;
    }
}