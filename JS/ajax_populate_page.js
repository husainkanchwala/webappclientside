 // Kanchwala, Husain    Account:  jadrn024
 // CS545, Fall 2017
 // Project 4

var proj4_data;

$(document).ready(function() {
    proj4_data = new Array();
    $.get('/perl/jadrn024/proj4/get_products.cgi', storeData);

    var cart = new shopping_cart("jadrn024");
    
    $('#dark').on('click', function() {
        tmpString = "";
        tmpString += "<div style='text-align: center;'><h>Dark Chocolates</h></div>";
        for(var i=0; i < proj4_data.length; i++) {
            console.log(proj4_data[i][1])
            if(proj4_data[i][1] == "Dark chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++){
                    if(j!=proj4_data[i].length-3 && j!=proj4_data[i].length-2)
                    tmpString += proj4_data[i][j] + "<br />";
                    if(j==proj4_data[i].length-2)
                    tmpString += "Price : " + proj4_data[i][j] + "<br />";     
                }
                tmpString += "<input type='button' class='buy' id='addButton' value='Add To Cart'"+
                " name=" + proj4_data[i][0]+" onclick='addcartdisplay(this.name)' />";
            tmpString += "<span id='d"+proj4_data[i][0]+"'></span><br /><hr />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
        
    $('#nuts').on('click', function() {   
        tmpString = "";
        tmpString += "<div style='text-align: center;'><h>Nuts and Chews</h></div>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {  
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";                     
                for(var j=0; j < proj4_data[i].length; j++){
                    if(j!=proj4_data[i].length-3 && j!=proj4_data[i].length-2)
                    tmpString += proj4_data[i][j] + "<br />";
                    if(j==proj4_data[i].length-2)
                    tmpString += "Price : " + proj4_data[i][j] + "<br />";     
                }
                tmpString += "<input type='button' class='buy' id='addButton' value='Add To Cart'"+
                " name=" + proj4_data[i][0]+" onclick='addcartdisplay(this.name)' />";
               tmpString += "<span id='d"+proj4_data[i][0]+"'></span><br /><hr />";                
                }
           }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
        
    $('#brittle').on('click', function() {
        tmpString = "";
        tmpString += "<div style='text-align: center;'><h>Brittles and Toffies</h></div>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++){
                    if(j!=proj4_data[i].length-3 && j!=proj4_data[i].length-2)
                    tmpString += proj4_data[i][j] + "<br />";
                    if(j==proj4_data[i].length-2)
                    tmpString += "Price : " + proj4_data[i][j] + "<br />";     
                }
                tmpString += "<input type='button' class='buy' id='addButton' value='Add To Cart'"+
                " name=" + proj4_data[i][0]+" onclick='addcartdisplay(this.name)' />";
               tmpString += "<span id='d"+proj4_data[i][0]+"'></span><br /><hr />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });

    $('#milk').on('click', function() {
     tmpString = "";
     tmpString += "<div style='text-align: center;'><h>Milk Chocolate</h></div>";
      for(var i=0; i < proj4_data.length; i++) {
          if(proj4_data[i][1] == "Milk chocolate") {
              tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                  proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                  " width=\"200px\"  /><br />";
                for(var j=0; j < proj4_data[i].length; j++){
                    if(j!=proj4_data[i].length-3 && j!=proj4_data[i].length-2)
                    tmpString += proj4_data[i][j] + "<br />";
                    if(j==proj4_data[i].length-2)
                    tmpString += "Price : " + proj4_data[i][j] + "<br />";     
                }
                tmpString += "<input type='button' class='buy' id='addButton' value='Add To Cart'"+
                " name=" + proj4_data[i][0]+" onclick='addcartdisplay(this.name)' />";
               tmpString += "<span id='d"+proj4_data[i][0]+"'></span><br /><hr />";                
             }
         }
    var handle = document.getElementById('content');
    handle.innerHTML = tmpString;
        });

    $('#Truffles').on('click', function() {
     tmpString = "";
     tmpString += "<div style='text-align: center;'><h>Truffles</h></div>";
      for(var i=0; i < proj4_data.length; i++) {
          if(proj4_data[i][1] == "Truffles") {
              tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                  proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                  " width=\"200px\"  /><br />";
                for(var j=0; j < proj4_data[i].length; j++){
                    if(j!=proj4_data[i].length-3 && j!=proj4_data[i].length-2)
                    tmpString += proj4_data[i][j] + "<br />";
                    if(j==proj4_data[i].length-2)
                    tmpString += "Price : " + proj4_data[i][j] + "<br />";     
                }
                tmpString += "<input type='button' class='buy' id='addButton' value='Add To Cart'"+
                " name=" + proj4_data[i][0]+" onclick='addcartdisplay(this.name)' />";
               tmpString += "<span id='d"+proj4_data[i][0]+"'></span><br /><hr />";                
             }
         }
    var handle = document.getElementById('content');
    handle.innerHTML = tmpString;
        });

    $('#gifts').on('click', function() {
     tmpString = "";
     tmpString += "<div style='text-align: center;'><h>Gifts</h></div>";
      for(var i=0; i < proj4_data.length; i++) {
          if(proj4_data[i][1] == "Gifts") {
              tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                  proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                  " width=\"200px\"  /><br />";
                for(var j=0; j < proj4_data[i].length; j++){
                    if(j!=proj4_data[i].length-3 && j!=proj4_data[i].length-2)
                    tmpString += proj4_data[i][j] + "<br />";
                    if(j==proj4_data[i].length-2)
                    tmpString += "Price : " + proj4_data[i][j] + "<br />";     
                }
                tmpString += "<input type='button' class='buy' id='addButton' value='Add To Cart'"+
                " name=" + proj4_data[i][0]+" onclick='addcartdisplay(this.name)' />";
               tmpString += "<span id='d"+proj4_data[i][0]+"'></span><br /><hr />";                
             }
         }
    var handle = document.getElementById('content');
    handle.innerHTML = tmpString;
        });

    $('#holiday').on('click', function() {
     tmpString = "";
     tmpString += "<div style='text-align: center;'><h>Holiday Assortments</h></div>";
      for(var i=0; i < proj4_data.length; i++) {
          if(proj4_data[i][1] == "Holiday assortments") {
              tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                  proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                  " width=\"200px\"  /><br />";
                for(var j=0; j < proj4_data[i].length; j++){
                    if(j!=proj4_data[i].length-3 && j!=proj4_data[i].length-2)
                    tmpString += proj4_data[i][j] + "<br />";
                    if(j==proj4_data[i].length-2)
                    tmpString += "Price : " + proj4_data[i][j] + "<br />";     
                }
                tmpString += "<input type='button' class='buy' id='addButton' value='Add To Cart'"+
                " name=" + proj4_data[i][0]+" onclick='addcartdisplay(this.name)' />";
               tmpString += "<span id='d"+proj4_data[i][0]+"'></span><br /><hr />";                
             }
         }
    var handle = document.getElementById('content');
    handle.innerHTML = tmpString;
        });
        
    $(document).on('click', ".buy", function() {  
        $(this).next().fadeIn(50).fadeOut(2000);
        });                      

});    

    
function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
     $('#milk').click();    
}

// from http://www.webmasterworld.com/forum91/3262.htm            
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
