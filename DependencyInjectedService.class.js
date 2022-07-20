export default class InjectedService {
    constructor(greeter) {
        this.randomId = Math.random();
        this.greeter = greeter;
    }

    useGreeter() {
        return this.greeter.greet("From dependency with id " + this.randomId);
    }
}