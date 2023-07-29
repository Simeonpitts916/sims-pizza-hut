Discribe: pizza()

test: when we add the size of pizza it will give you the price
code:addSize() {
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
Output: total price: 6.99

test: add the ptoppings of the pizza and find the prise
code: addToppings () {
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
Output: total price: 2.49

test: add both of the small and pepperoni and get the price.
code: const pizza1 = new Pizza("small", "pepperoni");
pizza1.addSize();
pizza1.addToppings();
console.log("Total Price:", pizza1.getTotalPrice());
Output: total price: 10.98

test: add both of the medium and pineapple and get the price.
code:const pizza2 = new Pizza("medium", "pineapple");
pizza2.addSize();
pizza2.addToppings();
console.log("Total Price:", pizza2.getTotalPrice());  
Output: total price: 10.98

test: add both of the extra-large and sausage and get a arre.
code: const pizza4 = new Pizza("extra-large", "sausage");
pizza4.addSize(); // Output: "this is not an option"
pizza4.addToppings(); // Output: false
console.log("Total Price:", pizza4.getTotalPrice()); // Output: Total Price: 0 (no valid size or topping)

Output: Total Price: 0 (no valid size or topping)