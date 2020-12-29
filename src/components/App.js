import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'

import './css/style.css';
import BookPage from './bookPage';
import ContactPage from './contactPage';

import {fetch_book} from './actions/actions'
import {useDispatch} from 'react-redux'

function App() {
	const dispatch = useDispatch();	
	const book_list = dispatch(fetch_book())
	
  return (
    <div className="container">   
	<div className="row">
		<div className="col-sm-12 app_link">
			<Link to="/">Books</Link>
			<Link to="/contact">Contact</Link>
		</div>
	</div>
		
		
		<Switch>
			<Route path="/contact">
				<ContactPage></ContactPage>
			</Route>
			<Route path="/">
				<BookPage></BookPage>
			</Route>
			
		</Switch>
    </div>
  );
}

export default App;
