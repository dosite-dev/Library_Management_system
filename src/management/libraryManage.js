 const {booksDatabase}= require("../db/library");
 //----------Add new books in the database--------------------------------

 const add = (newbook) =>{
    newbook.id= (booksDatabase.length)+1;
    booksDatabase.push(newbook);
    console.log("----------Add new books in the database--------------------------------");
    console.log(newbook);
 }
 //----------Display all books--------------------------------

 const display = () =>{
    console.log("----------Display all books--------------------------------");
    console.log(booksDatabase);
 }
 //----------Remove all books--------------------------------
 const remove = (id) =>{
    var booksExists ={};
    booksExists = booksDatabase.find(booksExists => booksExists.id === id);
    if(!booksExists){
        console.log("book not exists");

    }
    else{
        var remainingBooks = [];
        remainingBooks = booksDatabase.filter(booksExists => booksExists.id!== id);
        console.log("book removed");
        console.log("-----remove book");
        console.log(remainingBooks);
    }
}

 const update = (id,key,value) =>{ 
    var booksExists ={};
    booksExists = booksDatabase.find(booksExists => booksExists.id === id);
    if(!booksExists){
        console.log("book not exists");
    
 }
 else{
    booksExists[key] = value;
    console.log("book updated");
    console.log(booksExists);
 }
}
 module.exports = {
    add,
    display,
    remove,
    update,
};