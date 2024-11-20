class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const cinderellas = [
    new Cinderella('Cinderella1', 18, 35),
    new Cinderella('Cinderella2', 23, 37),
    new Cinderella('Cinderella3', 20, 36),
    new Cinderella('Cinderella4', 24, 38),
    new Cinderella('Cinderella5', 17, 38),
    new Cinderella('Cinderella6', 21, 36),
    new Cinderella('Cinderella7', 20, 39),
    new Cinderella('Cinderella8', 19, 38),
    new Cinderella('Cinderella9', 25, 36),
    new Cinderella('Cinderella10', 18, 37),

];
class Prince {
    constructor(name, age, footShoes) {
        this.name = name;
        this.age = age;
        this.footShoes = footShoes;
    }
}
const prince = new Prince ('Jon', 25, 35);
for (const cinderella of cinderellas) {
 if (cinderella.footSize === prince.footShoes) {
 prince.love = cinderella
 }
}
console.log(prince.love);

const cinderellaLove = cinderellas.find(cinderella => cinderella.footSize === prince.footShoes);
console.log(cinderellaLove);
