import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { favoriteReducer } from './favoriteReducer';
import { langReducer } from './langReducer';
import { loadingReducer } from './loadingReducer';
import { navReducer } from './navReducer';
import { readReducer } from './readReducer';

const rootReducer = combineReducers({
    errorReducer,
    favoriteReducer,
    langReducer,
    loadingReducer,
    navReducer,
    readReducer
})

export default rootReducer;