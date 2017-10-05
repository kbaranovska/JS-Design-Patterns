import Observer from "./Observer";

class Player {

    constructor(name, bet){
        this.name = name;
        this.bet = bet;
    }

    name(){
        return this.name;
    }

    setBet(bet){
        this.bet = bet;
    }

    getBet(){
        return this.bet;
    }

    update(betResult){
        console.log(betResult);
    }
}

export default Player;

