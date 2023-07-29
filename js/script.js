
// bussiness logic //
class Pizza {
    cunstructor(size, toping){
        this.size= size;
        this.topping= topping;
    }
}

const pizza1 = new Pizza("");

pizza1.topping.forEach(function(element) {
    switch (element){
        case ("mushrooms"):
        case ("pinapple"):
        case ("pepperoni"):
            total += .50
    } 
});

let mainCost = 0;

switch (pizza1.size){
    case "small":
        mainCost = 6.99;
        break;
    case "medium":
        mainCost = 8.49;
        break;
    case "large":
        mainCost = 10.29;
        break;d
}

// UI logic //

window.addEventListener("load", function(){
    this.document.querySelector("from#order-list").addEventListener("submit")
});

function OnSubmit(event){
    event.preventDefault();
    const orderListing = document.getElementById("OrderList");
    orderListing.innerHTML="";
    const Topping = document.querySelector("input[name='toping']:checked").value;
    const Size = document.querySelector("input[name='size']:checked").value;
    


    
}
