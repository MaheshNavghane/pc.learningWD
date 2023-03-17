
let chalk = require('chalk')
let figlet = require('figlet')

console.log(chalk.blue('Hello its blue'))
console.log(chalk.red('Hello its blue'))
console.log(chalk.bgYellowBright('Hello its blue'))
console.log(chalk.bold('Hello its blue'))
console.log(chalk.bgBlue('Hello its blue'))

console.log(figlet.textSync('Hello world'))

console.log(chalk.blue(figlet.textSync("Mahesh")))


console.log(chalk.magenta(figlet.textSync('ROAR')))

console.log(chalk.green(figlet.textSync('Spring boot v2.2.3')))
