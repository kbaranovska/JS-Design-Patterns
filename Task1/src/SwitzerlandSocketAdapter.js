import SwitzerlandSocket from "./SwitzerlandSocket";

class SwitzerlandSocketAdapter {
    constructor() {
        this.adaptee = new SwitzerlandSocket();
    }

    plugIn() {
        return this.adaptee.plugIn();
    }
}

export default SwitzerlandSocketAdapter;