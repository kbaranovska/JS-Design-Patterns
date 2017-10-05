import ChineseSocket from "./ChineseSocket";

class ChineseSocketAdapter {
    constructor() {
        this.adaptee = new ChineseSocket();
    }

    plugIn() {
        return this.adaptee.plugIn();
    }
}

export default ChineseSocketAdapter;