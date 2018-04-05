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

function createCharacter(name, nickname, race, origin, attack, defence, weapon) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defence,
        weapon,
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

const Gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
const Bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1)
const Aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8)
const Frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2)
const Legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
const Arwen = createCharacter('Arwen Undomeil', 'arwen', 'Half-Elf', 'Rivendell', 6, 6)
let characters = [Gandalf, Bilbo, Aragorn, Frodo, Legolas, Arwen];

const foundCharacter = characters.find(key => key.nickname === 'aragorn')
// console.log(foundCharacter.describe())
// console.log(characters.filter(key => key.race === 'Hobbit'))
// console.log(characters.filter(key => key.attack > 5))
// Gandalf.weapon = 'wizard staff'

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];

  function findOne(arr, query) {
      for(const hero of arr) {
          let assumeMatch = true
          for (let key in query) {
            if (query[key] !== hero[key]) {
                assumeMatch = false
                break;
            }
        }
        if (!assumeMatch) continue;
        return hero;
    }
    return null;
  }

  const Database = {
    store: {
      heroes: [
        { id: 1, name: 'Captain America', squad: 'Avengers' },
        { id: 2, name: 'Iron Man', squad: 'Avengers' },
        { id: 3, name: 'Spiderman', squad: 'Avengers' },
        { id: 4, name: 'Superman', squad: 'Justice League' },
        { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
        { id: 6, name: 'Aquaman', squad: 'Justice League' },
        { id: 7, name: 'Hulk', squad: 'Avengers' },
      ]
    },
    findOne: function(query) {
        for(const hero of this.store.heroes) {
            let assumeMatch = true
            for (let key in query) {
              if (query[key] !== hero[key]) {
                  assumeMatch = false
                  break;
              }
          }
          if (!assumeMatch) continue;
          return hero;
      }
      return null;
    }
  };
  console.log(Database.findOne({id: 5, squad: 'Justice League'}))