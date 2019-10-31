export const readReducer = (state = [], action) => {
    switch(action.type) {
        case 'UNREAD_ARTICLE' :
            const unreadArticles =  action.articles.map(article => action.isRead = !action.isRead);
            return unreadArticles.map(article => localStorage.removeItem(article));
        case 'READ_ARTICLE' :
            const readArticles =  action.articles.map(article => action.isRead = !action.isRead);
            return readArticles.map(article => localStorage.setItem( 'article', JSON.stringify(article)))
    }
}