import {combineReducers} from 'redux';
import booksReducer from './books';

const allReducers = combineReducers({
	books: booksReducer
});

export default allReducers;