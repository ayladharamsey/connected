export const readReducer = (state = [], action) => {
    switch(action.type) {
        case 'UNREAD_ARTICLE' :
            const found =  state.find(article => article.id === action.article.id);
            found.isRead = !found.isRead;
            return state.splice(found, 1); 
        case 'READ_ARTICLE' :
            action.article.isRead = !action.article.isRead
            return [...state, action.article]
        default:
            return state;
    }
}