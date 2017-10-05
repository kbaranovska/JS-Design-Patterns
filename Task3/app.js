import Person from "./src/Person";
import SkiingRent from "./src/SkiingRent";
import SkiResortTerminal from "./src/SkiResortTerminal";

document.addEventListener('DOMContentLoaded', function () {
    var persons = [
        new Person("Thomas Schultz", 175, 32, "male"),
        new Person("Beverly Gilbert", 169, 27, "female"),
        new Person("Nicholas Perkins", 183, 42, "male")
    ];

    var results = [];

    for (var person of persons) {
        var skiResortTerminal = new SkiResortTerminal();

        var orginizedRest = skiResortTerminal.OrginizeRest(person);

        var str = orginizedRest.skiingRentResult + " "
            + orginizedRest.ticketsOrderResult + " "
            + orginizedRest.appartmentRentResult;

        results.push(str);
    }


    results.forEach(function(element) {
        document.querySelector('#information').innerHTML += element + "</br>";
    });
}, false);