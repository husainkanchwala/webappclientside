 // Kanchwala, Husain    Account:  jadrn024
 // CS545, Fall 2017
 // Project 4

var proj4_data;

$(document).ready(function() {
   proj4_data = new Array();
   $.get('/perl/jadrn024/proj4/get_products.cgi', storeData);
});

function displayCart() {
   $('td[id^="p"]').each(function (i, el) {
     var pid = el.id.replace("p","#p");
     var tid = el.id.replace("p","#t");
     var qid = el.id.replace("p","#q");
     var sku = el.id.replace("p","");
     var total = parseFloat(findPrice(sku)*parseFloat($(qid).text())).toFixed(2);
     $(pid).text(findPrice(sku));    
     $(tid).text(total);
   });
} 

function findPrice(sku){
        for(var i=0; i < proj4_data.length; i++) {
           if(proj4_data[i][0]==sku)
            return proj4_data[i][6];
        }
}

function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
    displayCart();
    calculateGrandTotal();
}

function calculateGrandTotal(){
    calculateTotal();
    calculateShipping();
    calculateTax();
  	var grandTotal = 0.0;
  	grandTotal = parseFloat($('#tt').text()) + parseFloat($('#sp').text()) + parseFloat($('#tax').text());
    $("#gt").html(grandTotal.toFixed(2));
}

function calculateTotal(){
    var total = 0.0;
    $('.totalprice').each(function()
    {
        total += parseFloat($(this).text());
    }); 
    $("#tt").html(total.toFixed(2));    
}

function calculateShipping(){
    var shipping = 0.0;
    $('.totalprice').each(function()
    {
        shipping += parseFloat(2);
    }); 
    $("#sp").html(shipping.toFixed(2));        
}

function calculateTax(){
    var tax = 0.0;
    tax = parseFloat($('#tt').text())*8/100;
    $("#tax").html(tax.toFixed(2));        
}

function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;
}     
