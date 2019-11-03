export const readReducer = (state = [], action) => {
    switch(action.type) {
        case 'UNREAD_ARTICLE' :
            const found =  state.find(article => article.id === action.article.id);
            found.isRead = false;
            return state.splice(found.id, 1); 
        case 'READ_ARTICLE' :
            action.article.isRead = true;
            return [...state, action.article]
        default:
            return state;
    }
}