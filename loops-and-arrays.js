// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in bovenstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]

const names = ["Henk", "Piet", "Fred", "Joop"];
console.log(names);

for (let index = 0; index < names.length; index++) {
    names[index] = names[index] + "je";
}
console.log(names);


// ==========================================
// Opdracht 2
// Schrijf een script dat ieder getal in bovenstaande array met 3 vermenigvuldigd.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];

const numbers = [2, 4, 5, 29, 38];
console.log(numbers);

for (let multiply = 0; multiply < numbers.length; multiply++) {
    numbers[multiply] = numbers[multiply] * 3;
}
console.log(numbers);


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(squares) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(squares) geeft: [27000, 8, 512, 13824, 1331];

const squares = [30, 2, 8, 24, 11];
console.log(squares);

for (let volume = 0; volume < squares.length; volume++) {
    squares[volume] = squares[volume] * squares[volume] * squares[volume];
}

console.log(squares);

//test