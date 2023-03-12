                                            // C - POST
                                            // R - GET
                                            // U - PATCH
                                            // D - DELETE

// ------------------------------------------ R - GET

const BASE_URL = 'http://localhost:3000';


// function fetchBooks (){
// return fetch(`${BASE_URL}/books`)
// .then(response => response.json())
// .then(console.log);
// }

// function fetchBooksById(bookId){
//     return fetch(`${BASE_URL}/books/${bookId}`)
// .then(response => response.json())
// .then(console.log);
// }

// fetchBooks()
// fetchBooksById(2)




// ------------------------------------------ C - POST

const newBook = {
    tittle: "Test-JS",
    autor: "test-JS",
    genres: ['test-JS'],
    ratting: 10
}





function addBook(book){
const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(book),
 }
   return fetch(`${BASE_URL}/books`, options).then(res => res.json())
}

// addBook({
//     tittle: "all about JS",
//     autor: "Author:JS",
//     genres: ['coding'],
//     ratting: 10
// }).then(renderBook)
// addBook({
//     tittle: "all about CSS",
//     autor: "Author:CSS",
//     genres: ['coding'],
//     ratting: 9
// }).then(renderBook)


// function renderBook(book){
//     console.log('ready to work')
//     console.log(book)
// }




// ------------------------------------------ U - PATCH


