var inquirer = require('inquirer')
const chalk = require('chalk')

class Pizza {
    constructor(size, sauce, toppings){
        this.size = size
        this.sauce = sauce
        this.toppings = toppings
    }
    describe(){
        return `This pizza is ${this.size} is, the sauce chosen is ${this.sauce}, and the toppings you picked are ${this.toppings}.`
    }
    takeorder(){

    }
}

const pizza = new Pizza(22, 'tomato', ['cheese, bacon, sausage'])
console.log(chalk.blue('Welcome to JT','s Pizza Shop!'))
console.log(chalk.red('What would you like to order today?'))
console.log(pizza.describe())