var BASE_URL="http://localhost:3000",newBook={tittle:"Test-JS",autor:"test-JS",genres:["test-JS"],ratting:10};function addBook(t){var o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch("".concat(BASE_URL,"/books"),o).then((function(t){return t.json()}))}
//# sourceMappingURL=index.6383a086.js.map
