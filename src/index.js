import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import allReducers from './components/reducers'

const store = createStore(
	allReducers,
	composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(  
	<BrowserRouter>
		<Provider store={store}>
			<App></App>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
serviceWorker.unregister();
