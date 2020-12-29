const booksReducer = (state = 0, action) => {
	console.log("oana00", state, action);
	switch(action.type){
		case "fetch_book":	
			state = action.books;		
			return action.books
		case "delete_book":			
			var remaining_books = [];
			for(var i in state){
				if(i != action.books){
					remaining_books.push(state[i]);
				}
			}
			return remaining_books
		case "add_book":
			var remaining_books = [];
			for(var i in state){				
					remaining_books.push(state[i]);
			}
			action.books.id = state[state.length-1].id + 1;
			remaining_books.push(action.books);
			return remaining_books
		case "update_book":
			var remaining_books = [];
			for(var i in state){
					if(i == action.books.id){
						remaining_books.push(action.books);
					} else {
						remaining_books.push(state[i]);
					}
					
			}
			return remaining_books
		default: 
			return state;
	}
}

export default booksReducer;