import Data from "../products.json"

export default class product {
    _id
    _img
    _description
    _category
    _price
    _quantity

    constructor(Data) {
        this._id = Data._id;
        this._price = Data._price;
        this._img = Data._img;
        this._description = Data._description;
        this._category = Data._category;
        this._quantity = Data._quantity;
    }

    getID() {
        return this._id;
    }

    setId(value) {
        this._id = value;
    }

    getImg() {
        return this._img;
    }

    setImg(value) {
        this._img = value;
    }

    getDescription() {
        return this._description;
    }

    setDescription(value) {
        this._description = value;
    }

    getCategory() {
        return this._category;
    }

    setCategory(value) {
        this._category = value;
    }

    getPrice() {
        return this._price;
    }

    setPrice(value) {
        this._price = value;
    }

    render(){
        const product1 = document.createElement('div');
        product1.setAttribute("class", "product");
        product1.innerHTML = "<div><img/><div class='product-txt'><h1>Description</h1><h6>Price</h6><p>Category</p></div><div class='add-btn'><input placeholder='0'/><button>add</button></div>";

        product1.querySelector('h1').innerText = this.getDescription();
        product1.querySelector('p').innerText = this.getCategory();
        product1.querySelector('h6').innerText = this.getPrice();
        product1.querySelector('h6').innerText = this.getImg();

        document.getElementById('catalog').appendChild(product1);
    }


}
