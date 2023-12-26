const fs = require('fs')


const textIn = fs.readFileSync('./files/input.txt', 'utf-8')
console.log(textIn)

let content = `hello , !! :-)\nMerry Christmas ! ohohohohoh !  \ninserted on -> ${new Date()}`
fs.writeFileSync('./files/output.txt', content)





