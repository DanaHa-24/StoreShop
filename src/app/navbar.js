export default class navbar {
    constructor(){
    }

    static render = () => {
    }

    static ShowCart(){
        let isShowing = false;
        document.getElementById('side-bar-cart').style.display = "none";
        let cartBtn = document.getElementById('cart-btn');
        cartBtn.addEventListener('click', () =>{
            if(isShowing){
                document.getElementById('side-bar-cart').style.display = "none";
                isShowing = false;
            }
            else{
                document.getElementById('side-bar-cart').style.display = "";
                isShowing = true;
            }
        })
    }

}