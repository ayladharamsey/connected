export const favoriteReducer = (state = [], action) => {
    switch(action.type) {
        case 'UNSAVE_ARTICLE' :
            const unsavedArticles =  action.articles.map(article => action.isSaved = !action.isSaved);
            return unsavedArticles.map(article => localStorage.removeItem(article));
        case 'SAVE_ARTICLE' :
            const savedArticles =  action.articles.map(article => action.isSaved = !action.isSaved);
            return savedArticles.map(article => localStorage.setItem( 'article', JSON.stringify(article)))
        default:
            return state;
    }
}