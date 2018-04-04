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
    boss: 'John',
    }, 
    {
    name: 'Vader',
    jobTitle: 'Sith',
    boss: 'Mike',    
    },
    {
    name: 'John',
    jobTitle: 'Manager',
    }
];
// objArray.forEach(data => console.log(data.name + ': ' + data.jobTitle))

// objArray.forEach(data => {
//     if (!data.boss) {
//         console.log(`${data.jobTitle} ${data.name} doesn't report to anybody.`)
//     } else {
//         console.log(`${data.jobTitle} ${data.name} reports to ${data.boss}.`);
//     }
// });

function decode(word) {
    let cypher = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    }
    for (let key in cypher) {
        if (word[0] === key) {
            return (word[cypher[key]])
        }
    }
}

function decodedWords(words) {
    let splitWords = words.split(' ');
    let decoded = []
    splitWords.forEach(word => {
        if (decode(word) === undefined) {
            decoded.push(' ')
        }
        decoded.push(decode(word))
    });
    console.log(decoded.join(''))
}
// decodedWords('craft block argon meter bells brown croon droop');

function createCharacter(name, nickname, race, origin, attack, defence) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defence,
        describe: function() {
            return `${this.name} is a ${this.race} from ${this.origin}.`
        },
        evaluateFight: function(character) {
            let x = this.attack - character.defence;
            let y = this.defence - character.attack;
            if (y < 0) {
                y = 0
            } 
            return `Your opponent takes ${x} damage and you receive ${y} damage`
        }
    }
}

const Gandalf = createCharacter('Gandalf the White', 'gandalf', 'wizard', 'Middle Earth', 10, 6);
let characters = 