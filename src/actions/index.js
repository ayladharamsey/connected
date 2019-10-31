export const selectNav = category => {
    type: 'SELECT_NAV',
    category
}

export const saveArticle = articles => {
    type: 'SAVE_ARTICLE',
    articles
}

export const unsaveArticle = articles => {
    type: 'UNSAVE_ARTICLE',
    articles
}

export const readArticle = articles => {
    type: 'READ_ARTICLE',
    articles
}

export const unreadArticle = articles => {
    type:'UNREAD_ARTICLE',
    articles
}

export const updateLanguage = lang => {
    type: 'CHOOSE_LANGUAGE',
    lang
}

export const setLoader = bool => {
    type: 'SET_LOADER',
    bool
}

export const hasError = error => {
    type: 'HAS_ERROR',
    error
}

export const setNewsData = data => {
    type: 'SET_DATA',
    data
}