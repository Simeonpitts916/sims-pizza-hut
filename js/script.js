
// bussiness logic //
class Pizza {
    constructor(size, toping){
        this.size= size;
        this.topping= topping;
        this.price=0;
    }
    addSize() {
        if (this.size == "small"){
            this.price += 6.99;
        } else if (this.size == "medium"){
            this.price+=8.49;
        } else if (this.size == "large"){
            this.price+=12.75;
        } else {
            console.error("this is not an option");
        }
    }
    addToppings () {
        if (this.topping == "pepperoni"){
            this.price +=2.99 ;
        } else if (this.topping == "pinapple"){
            this.price += 2.99;
        } else if (this.topping == "mushroom"){
            this.price += 2.49;
        } else {
            return false;
        }
    }
    
}

const myPizza = new Pizza('medium', ['cheese', 'pepperoni']);
myPizza.addSize();

console.log(myPizza.price)




// UI logic //

// window.addEventListener("load", function(){
//     this.document.querySelector("from#order-list").addEventListener("submit")
// });

// function OnSubmit(event){
//     event.preventDefault();
//     const orderListing = document.getElementById("OrderList");
//     orderListing.innerHTML="";
//     const Topping = document.querySelector("input[name='toping']:checked").value;
//     const Size = document.querySelector("input[name='size']:checked").value;
    
