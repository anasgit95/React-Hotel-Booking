import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRouter from './routes'
import * as serviceWorker from './views/serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createStore
} from 'redux';
import allReducer from './reducers'
import {
    Provider
} from 'react-redux'
const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render( <
        Provider store = {
            store
        } >
        <
        MainRouter / > < /Provider> , document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();