
// bussiness logic //
class Pizza {
    constructor(size, topping){
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

    getTotalPrice() {
        return this.price;
    }
    
}

// const myPizza = new Pizza("medium", "mushroom");
// myPizza.addSize();
// myPizza.addToppings();

// console.log("Total Price:", myPizza.getTotalPrice());




// UI logic //

    window.onload = function() {
        const form = document.querySelector("form");
        form.onsubmit = function(event) {
            event.preventDefault();
            let sizeInputValue = document.querySelector('input[name="size"]:checked').value;
            let toppingsInputValue = document.querySelector('input[name="topping"]:checked').value;

            const myPizza = new Pizza(sizeInputValue, toppingsInputValue);
            myPizza.addSize();
            myPizza.addToppings();
            let price = myPizza.getTotalPrice();

            document.getElementById("OrderListing").innerHTML
        };
    };


    
