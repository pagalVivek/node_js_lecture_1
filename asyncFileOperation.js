const fs = require('fs')
fs.readFile('./files/input.txt', 'utf-8', (error, data) => {
    console.log(data)

})
console.log('hello')
