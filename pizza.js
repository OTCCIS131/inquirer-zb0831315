var inquirer = require('inquirer')
const chalk = require('chalk')

console.log(chalk.blue('Welcome to My Super Aawesome Pizza Co.!'))
console.log(chalk.red('What would you like to order today?'))
let questions = [
    {
        type: 'list',
        name: 'size',
        message: 'What size pizza would you like?',
        choices: ['Small', 'Medium', 'Large'],
        filter: function (val)
        {
            return val.toLowerCase()
        }
    },
    {
        type: 'rawlist',
        name: 'sauces',
        message: 'What kind of sauce would you like on your pizza?',
        choices: ['Tomato', 'Alfredo', 'Marinana']
    },
    {
        type: 'checkbox',
        name: 'toppings',
        message: 'What toppings would you like on your pizza?',
        choices: ['Pepperoni', 'Cheese', 'Bacon', 'Sausage'] 
    },
    {
        type: 'confrim',
        name: 'isOrderCorrect',
        message: 'Is this order correct?',
        default: false
    }]
inquirer.prompt(questions).then(function (answers) 
{
    console.log(chalk.bgMagenta('\nOrder receipt:'))
    console.log(chalk.cyan(JSON.stringify(answers, null, '  ')))
})