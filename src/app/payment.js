import CartLine from "./cartLine.js";

export default class Payment extends CartLine {
    constructor(){
        super();
        this.cartArr = new Array.of(CartLine);
    }

}