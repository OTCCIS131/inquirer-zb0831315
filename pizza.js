var inquirer = require('inquirer')
const chalk = require('chalk')

console.log(chalk.blue('Welcome to JT','s Pizza Shop!'))
console.log(chalk.red('What would you like to order today?'))
let questions = [
    {
    message: "What size pizza would you like?",
    name:   "size",
    type: "choices",
    choices:["S", "M", "L"]
    }]
inquirer.prompt(questions).then(function (answers) 
{
    console.log(chalk.green(questions))
})