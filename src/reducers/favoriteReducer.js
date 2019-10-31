export const favoriteReducer = (state = [], action) => {
    switch(action.type) {
        case 'UNSAVE_ARTICLE' :
            const flippedArticles =  action.articles.map(article => action.isSaved = !action.isSaved);
            return flippedArticles.map(article => localStorage.removeItem(article));
        case 'SAVE_ARTICLE' :
            const flippedArticles =  action.articles.map(article => action.isSaved = !action.isSaved);
            return flippedArticles.map(article => localStorage.setItem( 'article', JSON.stringify(article)))
    }
}