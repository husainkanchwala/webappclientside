#!/usr/bin/perl 
# Kanchwala, Husain    Account:  jadrn024
# CS545, Fall 2017
# Project 4   

use CGI;
use CGI::Session;
use CGI::Carp qw (fatalsToBrowser);
use Time::Piece;
use POSIX 'strftime';
use DBI;

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "proj4";
my $username = "jadrn024";
my $password = "bottom";
my $database_source = "dbi:mysql:$database:$host:$port";
my $q = new CGI;
my $cookie_sid = $q->cookie('jadrn024');

my $name = "";
my $lname = "";
my $address1 = "";
my $address2 = "";
my $city = "";
my $zip = "";
my $state = "";
my $phone = "";

$name = $q->param("name");
$lname = $q->param("lname");
$address1 = $q->param("address1");
$address2 = $q->param("address2");
$city = $q->param("city");
$zip = $q->param("zip");
$state = $q->param("state");
$phone = $q->param("phone");
my $date = strftime '%Y%m%d', localtime;

my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';
@rows = split('\|\|',$cookie_sid);
foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);
     my $query = "Insert into sales (date,sku,quantity) ";
     $query .= "VALUES ($date,'$sku','$qty')";
	     $dbh->do($query);
} 
$dbh->disconnect();

my $cookie = $q->cookie (
                -name    => 'jadrn024',
                -value   => '',
                -path    => '/',
                -expires => '-1d'
 );

$q->header(-cookie => $cookie);

print <<EOF;
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
       <head>
       <title>Bertha's Deluxe Candies</title>
       <script type="text/javascript" src="/jquery/jquery.js"></script>
       <script src="/~jadrn024/proj4/JS/placeorder.js"></script>
       <link rel="stylesheet" href="/~jadrn024/proj4/CSS/placeorder.css" />
      </head>
      <body>
        <ul class="tab">
          <li><a href="/~jadrn024/proj4/index.html" class="tablinks">Home</a></li>
          <li><a href="/~jadrn024/proj4/product.html" class="tablinks">Products</a></li>
          <li><a href="/~jadrn024/proj4/cart.html" class="tablinks">Order Online</a></li>
          <li><a href="/~jadrn024/proj4/about.html" class="tablinks">About Us</a></li>
          <li><a href="/~jadrn024/proj4/contact.html" class="tablinks">Contact</a></li>
        </ul>
        <h1>Congratulations your order is placed below is the shipping address and order details</h1> 
        <div class="_left" id = "cartsummary">
         <table border="1">
           <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
           </thead>
         <tbody>
EOF
         foreach $row (@rows) {
            ($sku, $qty) = split('\|',$row);
print "<tr id='productinfo'>";
print "<td ><img title='product' alt='product' src='/~jadrn000/PROJ4_IMAGES/$sku' height='100' width='100'></td>";
print "<td ><span >$sku</span></td>";
print "<td id=q$sku>$qty</td>";
print "<td id=p$sku>0</td>";
print "<td id=t$sku class='totalprice'>0</td>";
print "</tr>";
          }
print "</tbody>";
print "</table>";
print "<div class='content'>";
print "<p>Name : $name $lname</p>";
print "<p>Address : $address1 $address2 $city $state</p>";
print "<p>Zip : $zip</p>";
print "<p>Phone : $phone</p>";
print "</div>";
print "</div>";
print "<div class='_right'>";
print "<div><span>Total :</span><span id='tt'></span></div>";
print "<div><span>Shipping :</span><span id='sp'></span></div>";
print "<div><span>Tax :</span><span id='tax'></span></div>";
print "<div><span>Grand Total :</span><span id='gt'></span></div>";
print "</div>";
print "</body>";
print "</html>";
 