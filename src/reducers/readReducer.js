export const readReducer = (state = [], action) => {
    switch(action.type) {
        case 'UNREAD_ARTICLE' :
            const found =  state.findIndex(article => article.id === action.article.id);
            return state.splice(found, 1); 
        case 'READ_ARTICLE' :
            return [...state, action.article]
        default:
            return state;
    }
}