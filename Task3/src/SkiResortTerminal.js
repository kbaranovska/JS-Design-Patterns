import Person from "./Person";
import SkiingRent from "./SkiingRent";
import TicketsOffice from "./TicketsOffice";
import AppartmentRent from "./AppartmentRent";

class SkiResortTerminal {

    OrginizeRest (person){
        var skiingRent = new SkiingRent();
        var skiingRentResult = skiingRent.RentEquipment(person);
        
        var ticketsOffice = new TicketsOffice();
        var ticketsOrderResult = ticketsOffice.BuySkiLiftTicket(person);

        var appartmentRent = new AppartmentRent();
        var appartmentRentResult = appartmentRent.RentAppartment(person);

        return {skiingRentResult, ticketsOrderResult, appartmentRentResult};
    }
}

export default SkiResortTerminal;

