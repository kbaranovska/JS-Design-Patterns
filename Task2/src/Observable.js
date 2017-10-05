class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(observer){
        if(!this.observers){
            this.observers = [];
        }

        this.observers.push(observer);
    }

    notify(){
        this.observers.forEach((observer) => {

            if(observer.bet >= 10){
                var betResult = observer.bet * 2;

                observer.update(`${observer.name} won ${betResult} $.`);
            } else {
                observer.update(`${observer.name} lose ${observer.bet} $.`);
            }
        });
    }
}

export default Observable;
