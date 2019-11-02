export const favoriteReducer = (state = [], action) => {
    switch(action.type) {
        case 'UNSAVE_ARTICLE' :
            return localStorage.removeItem(action.article)
            case 'SAVE_ARTICLE' :
                return state.push(action.article)
                // return localStorage.setItem( 'article', JSON.stringify(action.article))
        default:
            return state;
    }
}