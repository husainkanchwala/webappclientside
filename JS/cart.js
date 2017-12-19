 // Kanchwala, Husain    Account:  jadrn024
 // CS545, Fall 2017
 // Project 4
var cart = new shopping_cart("jadrn024");
var proj4_data;

$(document).ready(function() {
   proj4_data = new Array();
   $.get('/perl/jadrn024/proj4/get_products.cgi', storeData);
   $( "#dialog-modal" ).dialog({
            height: 600,
            width: 1000,
            modal: true,
            autoOpen: false
    });
    
    $("#formbutton").on("click",function(event) {
         if(!validateForm() || !validateValue() ){
            event.preventDefault();
        }
    });

    $('#ordernow').on('click', function($e) {       
           $("#dialog-modal").dialog('open');
    });                 

});

function displayCart() {
        var cartArray = cart.getCartArray();
        var toWrite = " <table border='1'>"
            toWrite += "<thead>"
            toWrite += "<tr>"
            toWrite +="<th>Product</th>"
            toWrite += "<th>SKU ID</th>"
            toWrite +="<th>Price</th>"
            toWrite +="<th>Quantity</th>"
            toWrite +="<th>Total</th>"
            toWrite +="<th>Remove</th>"
            toWrite +="</tr>"
            toWrite +="</thead>"
            toWrite +="<tbody>"
        for(i=0; i < cartArray.length; i++) {
            toWrite +="<tr>"
            toWrite +="<td ><img src='/~jadrn000/PROJ4_IMAGES/"+cartArray[i][0]+".jpg' title='product' alt='product'src='' height='100' width='100'></td>"
            toWrite +="<td >"+cartArray[i][0]+"</td>"
            toWrite +="<td ><span id='p"+cartArray[i][0]+"''>"+findPrice(cartArray[i][0])+"</span></td>"
            toWrite +="<td ><input id='q"+cartArray[i][0]+"' type='number' name='quantity' min='1' value='"+cartArray[i][1]+"'/></td>"
            toWrite +="<td ><span id='ot"+cartArray[i][0]+"' class='totalprice'>"+parseFloat(findPrice(cartArray[i][0])*cartArray[i][1]).toFixed(2)+"</span></td>"            
            toWrite +="<td ><a href = '' id = 'r"+cartArray[i][0]+"' onclick = 'deleteCart(this.id)'>Remove</a></td>"
            toWrite +="</tr>"
            }
            toWrite +="</tbody>"
            toWrite +="</table>"
            if(cartArray.length==0){
            toWrite +="<div style='text-align: center'><p >Please select atleast one item to checkout</p></div>"
            document.getElementById("ordernow").disabled = true;
            }
        $('#cartsummary').html(toWrite); 
        $('input[id^="q"]').change(function(event) {
           calculateCart(event.target.id);
           calculateGrandTotal();
           cart.setQuantity(event.target.id.replace("q",""),$(event.target.id.replace("q","#q")).val());
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
    var cartArray = cart.getCartArray();
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

function calculateCart(qId) {
	var quanitytId=qId.replace("q","#q"); 
    var priceId=qId.replace("q","#p"); 
    var orderTId=qId.replace("q","#ot"); 
    var price = parseFloat($(priceId).text()),
        qty = parseInt($(quanitytId).val()),
        ext = parseFloat(price * qty);
    $(orderTId).html(ext.toFixed(2));
}

function deleteCart(sid){
    cart.delete(sid.replace("r",""));
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

function FillBilling(f){
   if(f.billingtoo.checked == true) {
         f.name.value = f.bname.value;
         f.lname.value = f.blname.value;
         f.address1.value = f.baddress1.value;
         f.address2.value = f.baddress2.value;
         f.city.value = f.bcity.value;
         f.state.value = f.bstate.value;
         f.zip.value = f.bzip.value;
         f.phone.value = f.bphone.value;

   }
    if(f.billingtoo.checked == false) {
         f.name.value = '';
         f.lname.value = '';
         f.address1.value = '';
         f.address2.value = '';
         f.city.value = '';
         f.state.value = '';
         f.zip.value = '';
         f.phone.value = '';
  }
}

function validateValue(){
    var validated="true";
    var regNumber = /^\d+$/;
    $("#error").html("");
    
    if(!regNumber.test($("#phone").val())){
        validated="false";
       $("#error").html("Contact number must be numeric");     
    }

    if(!regNumber.test($("#bphone").val())){
         validated="false";
        $("#error").html("Contact number must be numeric");     
     }
   
    if(!regNumber.test($("#bCCN").val())){
         validated="false";
        $("#error").html("Credit Card number must be numeric");     
     }

  if(validated=="false"){
      return false;
  }else{
      return true;
  }

}

function validateForm(){
    var validated="true";
    var regNumber = /^\d+$/;
    $("#error").html("");
    if($("#bname").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#baddress1").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#bcity").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#bstate").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#bzip").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#bphone").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#bCCT").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#bCCN").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#bCCE").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#name").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#address1").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#city").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#state").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#zip").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else if($("#phone").val()==""){
        validated="false";
       $("#error").html("All the fields are mandatory");
    }else{}
    
    if(!regNumber.test($("#phone").val())){
        validated="false";
       $("#error").html("Contact number must be numeric");     
    }

    if(!regNumber.test($("#bphone").val())){
         validated="false";
        $("#error").html("Contact number must be numeric");     
     }
   
    if(!regNumber.test($("#bCCN").val())){
         validated="false";
        $("#error").html("Credit Card number must be numeric");     
     }

    if(validated=="false"){
        return false;
    }else{
        return true;
    }
}
