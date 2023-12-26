// console.log("hello from node.js")
const readline = require('readline')
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


r1.question("Enter the numbers : ", (num1) => {
    r1.question("Enter second number : ", (num2) => {

        console.log(parseInt(num1) + parseInt(num2))
    })
    
})

r1.on('close', () => {
    console.log('finished')
    process.exit(0)
})



