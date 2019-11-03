import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from '../src/containers/App/App';
import * as serviceWorker from './serviceWorker';
import { submitState, storeState } from './localStorage' 

const store = createStore(rootReducer, submitState(), composeWithDevTools());

store.subscribe(() => {
    storeState({
        data: store.getState().newsDataReducer,
        favorites: store.getState().favoriteReducer,
        completed: store.getState().readReducer
    })
})

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
