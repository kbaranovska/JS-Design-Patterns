import Game from "./src/Game";
import Player from "./src/Player";

document.addEventListener('DOMContentLoaded',function() {
    BookmakerCompany();
},false);

function BookmakerCompany() {
    FootbalGame();

    console.log("");

    HorseRacingGame();
}

function FootbalGame(){
    var footbalGame = new Game("Football");
    
    var JhonPlayer = new Player("Jhon");
    var DylanPlayer = new Player("Dylan");
    var SarahPlayer = new Player("Sarah");

    footbalGame.register(JhonPlayer);
    footbalGame.register(DylanPlayer);

    footbalGame.makeABet(JhonPlayer, "20");
    footbalGame.makeABet(DylanPlayer, "5");

    footbalGame.register(SarahPlayer);
    footbalGame.makeABet(SarahPlayer, "35");
    
    footbalGame.finished();
}

function HorseRacingGame(){
    var horseRacingGame = new Game("Horse Racing");
    
    var AnnPlayer = new Player("Ann");
    horseRacingGame.register(AnnPlayer);
    horseRacingGame.makeABet(AnnPlayer, "200");

    var KolynPlayer = new Player("Kolyn");
    horseRacingGame.register(KolynPlayer);
    horseRacingGame.makeABet(KolynPlayer, "8");

    var ChrisPlayer = new Player("Chris");
    horseRacingGame.register(ChrisPlayer);
    horseRacingGame.makeABet(ChrisPlayer, "100");
    
    horseRacingGame.finished();
}