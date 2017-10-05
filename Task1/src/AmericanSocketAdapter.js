import AmericanSocket from "./AmericanSocket";

class AmericanSocketAdapter {
    constructor() {
        this.adaptee = new AmericanSocket();
    }

    plugIn() {
        return this.adaptee.plugIn();
    }
}

export default AmericanSocketAdapter;