export const chooseArticleReducer = (state = [], action) => {
    switch(action.type) {
        case 'CHOOSE_ARTICLE':
            let country = action.data[action.column]
            let article = country[action.id];
            return article
        default:
            return state
    }
}
