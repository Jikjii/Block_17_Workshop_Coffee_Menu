const coffeeMenu = require('./index')

console.log(coffeeMenu)

// Print an array of all the drinks on menu

for (let i = 0; i < coffeeMenu.length; i++) {
    console.log(coffeeMenu[i].name)
}

// Print an array of all the drinks on the menu under 5 dollars

for (let i = 0; i < coffeeMenu.length; i++) {
    if (coffeeMenu[i].price <= 5) {
       console.log(coffeeMenu[i].name) 
    }
}

// Print an array of drinks that are priced at an even number on the menu

for (let i = 0; i < coffeeMenu.length; i++) {
    if (coffeeMenu[i].price % 2 == 0) {
        console.log(coffeeMenu[i].name)
    }
}

// Print the total if you were to order one of every drink

let totalPrice = 0;

for (let i = 0; i < coffeeMenu.length; i++) {
    totalPrice  += coffeeMenu[i].price;
}

console.log(totalPrice)

// Print an attay with all the drinks that are seasonal

let seasonalDrinks = []

for (let i = 0; i < coffeeMenu.length; i++) {
    if (coffeeMenu[i].seasonal === true) {
        seasonalDrinks.push(coffeeMenu[i])
    }
}

console.log(seasonalDrinks)

// Print all the seasonal frinks with the words "with imported beans"

for (let i = 0; i < coffeeMenu.length; i++) {
    if (coffeeMenu[i].seasonal === true) {
        console.log(coffeeMenu[i].name + " with imported beans")
    }
}