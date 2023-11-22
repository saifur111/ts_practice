// Class in ts

class Player{
    name : string;
    age:number;
    country : string;
    constructor (n:string,a:number,c:string){
        this.name= n;
        this.age =a;
        this.country=c;

    }
    play(){
         console.log(`${this.name} from ${this.country} is playing.`)
    }
}

const masrafi = new Player('Mashrafi',40,"Bangladesh");
const sakib = new Player('Sakib',38,"Bangladesh");
const koli = new Player('Virat Koli',38,"India");

const players:Player[]=[];
players.push(sakib);
players.push(masrafi);
players.push(koli);
console.log(sakib.name);
masrafi.play();