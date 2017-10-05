import AmericanSocketAdapter from "./src/AmericanSocketAdapter";
import ChineseSocketAdapter from "./src/ChineseSocketAdapter";
import SwitzerlandSocketAdapter from "./src/SwitzerlandSocketAdapter";
import Socket from "./src/Socket";

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('#adapterOptions').onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
    document.querySelector('#output').innerHTML = "";

    if(!event.target.value){
        alert("Please, select an adapter");
        return;
    }

    const adapters = {
        American: new AmericanSocketAdapter(),
        Chinese: new ChineseSocketAdapter(),
        Switzerland: new SwitzerlandSocketAdapter()
    };

    let socketAdapter = adapters[event.target.value];

    let socket = new Socket(socketAdapter);
    let socketSettings = socket.plugIn();
    
    document.querySelector('#output').innerHTML = socketSettings;
}