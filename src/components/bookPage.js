import React from 'react';
import {connect} from 'react-redux'
import BookList from './bookList'

function BookPage(props) {		
	return (
		<div className="bookPage">   
			<h1>Book List</h1>
			<BookList books={props.books}></BookList>
		</div>
	);
}

function mapStateToProps(state){
	return{
		books: state.books
	}
}

export default connect(mapStateToProps)(BookPage);
