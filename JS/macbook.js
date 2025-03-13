import computer from './computer.js';

class macBook extends computer{
    constructor(name,company){
        super(name);
        this.company = company;
    }
    logIn(){
        console.log("You are logged into MacBook " + this.name);
    }
}
export default macBook