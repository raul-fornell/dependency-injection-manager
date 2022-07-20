export default class GreeterService {
    
    constructor(salutation) {
        this.salutation = salutation;
    }

    greet(name) {
        return this.salutation + " " + name;
    }
}