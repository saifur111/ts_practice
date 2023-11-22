"use strict";
// Class in ts
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing.`);
    }
}
const masrafi = new Player('Mashrafi Bin Mortoza', 40, "Bangladesh");
const sakib = new Player('Sakib Al Hasan', 38, "Bangladesh");
const koli = new Player('Virat Koli', 38, "India");
const players = [];
players.push(sakib);
players.push(masrafi);
players.push(koli);
console.log(sakib.name);
masrafi.play();
