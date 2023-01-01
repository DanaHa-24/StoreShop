import cartLine from "./cartLine.js"
export class Cart extends CartLine {
    _total
    _items
    _totalItems

    constructor(){
        super();
        this._items = new Array.of(cartLine);
        this._total = 0;
        this._totalItems = 0;
    }

    get total() {
        return this._total;
    }

    get totalItems() {
        return this._totalItems;
    }

    set total(value) {
        this._total = value;
    }

    set totalItems(value) {
        this._totalItems = value;
    }
}