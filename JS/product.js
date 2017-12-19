 // Kanchwala, Husain    Account:  jadrn024
 // CS545, Fall 2017
 // Project 4

var cart = new shopping_cart("jadrn024");

$(document).ready( function() {
    $( "#menu" ).menu();
    $( "#menu" ).menu({
     items: "> :not(.ui-widget-header)"
    });
    $( ".controlgroup" ).controlgroup();
    updateDisplay();       
 });

function addcartdisplay(id){
     if(!isExist(id)){
       cart.add(id,"1");
       $("#d"+id).html("Added to cart")
       updateDisplay();
    }else{
       $("#d"+id).html("Already in cart")     
    }
}

function isExist(id){
    var cartArray = cart.getCartArray();
    for(i=0 ; i<cartArray.length ; i++){
        if(cartArray[i][0]==id)
            return true;
    }
    return false;
}

function updateDisplay() {
     $('#count').text(cart.size());     
 } 





