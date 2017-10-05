import Car from "./Car";
import Ship from "./Ship";
import Train from "./Train";

class LogisticsCompany {

    CreatePackage (transportType){
        var transport;

        if(transportType === "car"){
            transport = new Car();
        } else if(transportType === "ship"){
            transport = new Ship();
        }  else if(transportType === "train"){
            transport = new Train();
        } else {
            return `Unfortunately, we don't support transporting by ${transportType}`;    
        }

        return `Your package will be transported by ${transport.Type()}`;
    }
}

export default LogisticsCompany;

