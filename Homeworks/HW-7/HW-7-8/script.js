class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = [
    new Cinderella("Оля", 19, 35),
    new Cinderella("Марія", 21, 36),
    new Cinderella("Ірина", 22, 37),
    new Cinderella("Катя", 20, 34),
    new Cinderella("Наталя", 23, 38),
    new Cinderella("Віка", 18, 33),
    new Cinderella("Юля", 25, 39),
    new Cinderella("Софія", 19, 36),
    new Cinderella("Аліна", 24, 37),
    new Cinderella("Дарина", 22, 35)
];
class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
let prince = new Prince("Андрій", 25, 36);

let chosenCinderella = null;
for (let cinderella of cinderellas) {
    if (cinderella.footSize === prince.foundShoe) {
        chosenCinderella = cinderella;
        break;
    }
}
console.log("Попелюшка з циклу:", chosenCinderella);

let foundCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.foundShoe);

console.log("Попелюшка з find:", foundCinderella);

