import Product from "./prod";
import Data from "../products.json"

export class Catalog extends Product {
    _productsArray
    constructor(Data){
        super();
        let length = Data.product.length;
        this._productsArray = new Array(length);
        for(let i = 0; i < length; i++){
            this._productsArray[i] = new Product(Data.product[i]);
        }
        document.getElementById('num-of-products').innerText = "Showing" + length.toString(10) + " items";
        console.log(this);

    }

    get ProductsArray() {
        return this._productsArray;
    }

    set ProductsArray(value) {
        this._productsArray = value;
    }

    static showCatalog(_productArray){
        const container = document.getElementById('catalog-container');
        for(let i = 0; i < _productArray.length; i++){
            let div = document.createElement("div");
            div.innerHTML = 'Name: ' + _productArray[i]._description + ' '+ 'Price: ' + + _productArray[i]._price + ' ' + _productArray[i]._img;
            container.appendChild(div);
        }
    }
}