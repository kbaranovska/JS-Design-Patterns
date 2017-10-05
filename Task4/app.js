import LogisticsCompany from "./src/LogisticsCompany";

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#transportOptions').onchange=changeEventHandler;
}, false);


function changeEventHandler(event) {

    if(!event.target.value){
        alert("Please, select transport method.");
        document.querySelector('#information').innerHTML = "";
        return;
    } else {
        var logisticsCompany = new LogisticsCompany();

        var createdPackage = logisticsCompany.CreatePackage(event.target.value);
        document.querySelector('#information').innerHTML = createdPackage;
    }

}