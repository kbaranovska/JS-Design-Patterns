import Observable from "./Observable";
import Player from "./Player";

class Game {
    constructor(name) {
        this.name = name;
        this.observable = new Observable();
    }

    name(){
        return this.name;
    }

    register(player){
        console.log(`${player.name} registred to the ${this.name}.`);
        this.observable.subscribe(player);
    }

    makeABet(player, bet){
        player.setBet(bet);

        console.log(`${player.name} made a bet ${bet}$ to the ${this.name}.`);

        this.observable[player] = {player, bet};
    }

    finished(){
        console.log(`${this.name} game was finished.`);

        this.observable.notify();
    }
}

export default Game;
