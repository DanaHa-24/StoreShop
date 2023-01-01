export default class CartLine {
    _lineId
    _amount
    _item

    constructor(Data) {
        this._lineId =0;
        this._amount =0;
        this._item =Data;
    }

    get lineId() {
        return this._lineId;
    }

    set lineId(value) {
        this._lineId = value;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }

    get item() {
        return this._item;
    }

    set item(value) {
        this._item = value;
    }
}