const booksDatabase = require("./management/libraryManage");
const {add,display,remove,update}=booksDatabase;

//----------Add new books in the database--------------------------------
const addBook = {
    title: 'John Legend',
    author: 'john author',
    year: 1998
}
add(addBook);
//----------Display all books--------------------------------
display();
//---remove books--------------------------------
remove(2);
//--------------------------------update books--------------------------------
update(3,"title","Flyer's book");