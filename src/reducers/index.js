import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { favoriteReducer } from './favoriteReducer';
import { langReducer } from './langReducer';
import { loadingReducer } from './loadingReducer';
import { navReducer } from './navReducer';
import { readReducer } from './readReducer';
import { newsDataReducer } from './newsDataReducer';
import { countryReducer } from './countryReducer'

const rootReducer = combineReducers({
    errorReducer,
    favoriteReducer,
    langReducer,
    loadingReducer,
    navReducer,
    readReducer,
    newsDataReducer,
    countryReducer
})

export default rootReducer;