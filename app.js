'use strict'


// let loaf = {
//     flour: 300,
//     water: 210,
//     hydration: function() {
//         return (this.water / this.flour) * 100
//     }
// };

// // console.log(loaf.hydration());

// --- DRILL 2

let object = {
    foo: 25,
    bar: 7,
    fum: 'mike',
    quux: 'sayed',
    spam: 1,
};
    for (let key in object) {
        // console.log(key + ': ' + object[key]);
    };   

// DRILL 3

let food = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
}

// console.log(food.meals[3]);

// DRILL 4
let objArray = [
    {
    name: 'Sayed',
    jobTitle: 'Student',
    }, 
    {
    name: 'Vader',
    jobTitle: 'Sith',    
    },
    {
    name: 'John',
    jobTitle: 'Manager',
    }
];
// objArray.forEach(data => console.log(data.name + ': ' + data.jobTitle))
