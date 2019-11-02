export const selectNav = category => ({
    type: 'SELECT_NAV',
    category
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

export const setNewsData = (data, countryCode) => ({
    type: 'SET_DATA',
    data,
    countryCode
});

export const chooseCountry = chosenCountry => ({
    type: 'CHOOSE_COUNTRY',
    chosenCountry
});