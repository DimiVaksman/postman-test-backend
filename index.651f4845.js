var BASE_URL="http://localhost:3000",newBook={tittle:"Test-JS",autor:"test-JS",genres:["test-JS"],ratting:10};function addBook(t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch("".concat(BASE_URL,"/books"),n).then((function(t){return t.json()}))}function updateBookById(t,n){var o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch("".concat(BASE_URL,"/books/").concat(n),o).then((function(t){return t.json()}))}function deletBook(t){var n="".concat(BASE_URL,"/books/").concat(t);return fetch(n,{method:"DELETE"}).then((function(t){return t.json()}))}
//# sourceMappingURL=index.651f4845.js.map
