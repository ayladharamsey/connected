export const readReducer = (state = [], action) => {
    switch(action.type) {
        case 'UNREAD_ARTICLE' :
            const flippedArticles =  action.articles.map(article => action.isRead = !action.isRead);
            return flippedArticles.map(article => localStorage.removeItem(article));
        case 'READ_ARTICLE' :
            const flippedArticles =  action.articles.map(article => action.isRead = !action.isRead);
            return flippedArticles.map(article => localStorage.setItem( 'article', JSON.stringify(article)))
    }
}