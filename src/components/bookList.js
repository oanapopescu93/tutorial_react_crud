import React, { useState } from 'react';

import {delete_book, add_book, update_book} from './actions/actions'
import {useDispatch} from 'react-redux'

import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'

import Form from 'react-bootstrap/Form'

function BookList(props) {	
	const emptyMessage = ["There are no books in this collection."];
	const book_list = show_books(props)
	
	const dispatch = useDispatch();	
	
	
	
	function show_books(props){		
		if(props.books==0){
			return emptyMessage;
		} else {
			//return emptyMessage;
			return props.books;
		}
	}

	function handleClick_delete(i) {
		const book_delete = dispatch(delete_book(i))
	}	
	
	
	function handleClick_modal(i, text) {
		setShow(true);
		setTimeout(function(){ 
			document.getElementById("modal_book").setAttribute('book_id', i);
			document.getElementById("modal_book").setAttribute('book_type', text);
			
			if(text == "update"){
				document.getElementById("modal_header").innerHTML = "Update element";
				document.getElementById("modal_submit").innerHTML = "Update book";
			} else if(text == "add"){
				document.getElementById("modal_header").innerHTML = "Add element";
				document.getElementById("modal_submit").innerHTML = "Add book";
			}
			
		}, 0);
	}
	
	function modal_submit() {
		var modal_type = document.getElementById("modal_book").getAttribute('book_type');
		
		var modal_title = document.getElementById("modal_title").value;
		var modal_author = document.getElementById("modal_author").value;
		var modal_id = parseInt(document.getElementById("modal_book").getAttribute('book_id'));
		var my_book = {id:modal_id, title: modal_title, author: modal_author};		
		if(modal_type == "update"){
			const book_update = dispatch(update_book(my_book));	
		} else {
			if(modal_type == "add"){
				const book_add = dispatch(add_book(my_book));	
			}
		}		
	}	
	
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	return(
		<div>
			<table className="bookList" id="bookList">
				<tbody>
					{			
						book_list.map(function(x, i){	
							return (
								<tr key={i} className="book_row">
									<td key={'title_'+i} className={"book"}>{x.title}</td>
									<td key={'author_'+i} className={"book"}>{x.author}</td>
									<td className={"book"}><button className="book_button" id={"book_button_"+i} onClick={() => handleClick_delete(i)}>Delete</button></td>
									<td className={"book"}><button className="book_button" id={"book_button_"+i} onClick={() => handleClick_modal(i, "update")}>Update</button></td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
			
			<button style={{marginTop: "10px"}} className="book_button" onClick={() => handleClick_modal(-1, "add")}>Add book</button>

			<Modal id="modal_book" show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
				<Modal.Header closeButton>
					<Modal.Title id="modal_header"></Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group>
							<Form.Label>Title</Form.Label>
							<Form.Control id="modal_title" type="text" placeholder="title" />
						</Form.Group>
						<Form.Group>
							<Form.Label>Author</Form.Label>
							<Form.Control id="modal_author" type="text" placeholder="author" />
						</Form.Group>
						<Button id="modal_submit" type="button" onClick={() => modal_submit()}></Button>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default BookList;
