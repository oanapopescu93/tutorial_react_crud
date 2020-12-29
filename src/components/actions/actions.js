import {books} from '../constants/constants'

var book_list = books;

export const fetch_book = function() {
  return {
    type: "fetch_book",
    books: book_list
  }
}

export const delete_book = function(a) {	
  return {
    type: "delete_book",
    books: a
  }
}

export const add_book = function(my_book) {	
  return {
    type: "add_book",
    books:  my_book
  }
}

export const update_book = function(my_book) {	
  return {
    type: "update_book",
    books:  my_book
  }
}