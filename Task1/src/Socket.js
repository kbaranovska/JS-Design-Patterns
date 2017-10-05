class Socket {
    constructor(adapter){
        this.adapter = adapter;
    }

    plugIn() {
        return this.adapter.plugIn();
    }
}

export default Socket;