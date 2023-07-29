
// bussiness logic //
function Pizza(size, topping,) {
    this.size = size;
    this.topping = topping;
}

this.topping.forEach(function(element) {
    switch (element){
        case ("mushrooms"):
        case ("pinapple"):
        case ("pepperoni"):
            total += .50
    } 
});

Pizza.prototype.totalcost = function() {
    let total = 0.00;
    if (this.size === "small"){
        return $2 
    } else if (this.size === "medium"){
        return $3
    } else (this.size === "large");{
        return $4
    }
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
