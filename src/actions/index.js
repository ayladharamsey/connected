export const selectNav = navName => ({
    type: 'SELECT_NAV',
    navName
});

export const flipFaveBool = (id, column) => ({
    type: 'FLIP_FAVE',
    id,
    column
});

export const saveArticle = article => ({
    type: 'SAVE_ARTICLE',
    article
});

export const unsaveArticle = article => ({
    type: 'UNSAVE_ARTICLE',
    article
});

export const readArticle = article => ({
    type: 'READ_ARTICLE',
    article
});

export const unreadArticle = article => ({
    type:'UNREAD_ARTICLE',
    article
});

export const updateLanguage = lang => ({
    type: 'CHOOSE_LANGUAGE',
    lang
});

export const setLoader = bool => ({
    type: 'SET_LOADER',
    bool
});

export const hasError = error => ({
    type: 'HAS_ERROR',
    error
});

export const setNewsData = (data) => ({
    type: 'SET_DATA',
    data
});

export const chooseCountry = chosenCountry => ({
    type: 'CHOOSE_COUNTRY',
    chosenCountry
});