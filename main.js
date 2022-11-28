function GetInfo(){
    var lname = document.getElementById('lname').value
    var fname = document.getElementById('fname').value
    document.getElementById('result1').innerHTML = "Thank you," + " " + "<b>" + fname + " " + lname + "</b>" + ". "+ "<br/>" + "Enjoy your Meal!!" + "<br/>" + "================================";

    var top1 = 50;
    var top2 = 60;
    var top3 = 40;

    var topcheck1 = document.getElementById('toppings1');
    var topcheck2 = document.getElementById('toppings2');
    var topcheck3 = document.getElementById('toppings3');
    var sample;
    var quantity;


   
    

var getquant = document.getElementById('quantitymo').value;
    document.getElementById('bilang').innerHTML = "Pizza Qty " + " " + "x" + getquant;


    if (topcheck1.checked) {
    document.getElementById('total').innerHTML = "Toppings: Ham and Cheese" + " " + top1 + "</br>" + "================================";
    sample = top1;
    }
    if (topcheck2.checked) {
    document.getElementById('total').innerHTML =  "Toppings: Double Cheese" + " " + top2 + "</br>" + "================================";
    sample = top2;

    }
    if (topcheck3.checked) {
    document.getElementById('total').innerHTML =  "Toppings: Pepperonni" + " " + top3 + "</br>" + "================================";
    sample = top3;

    }
    if (topcheck1.checked && topcheck2.checked)  {
    document.getElementById('total').innerHTML = "Toppings: Ham and Cheese" + " " + top1 + " " + "</br>" + "</br>"+ "Toppings: Double Cheese" + " " + top2 + "</br>" + "================================";
    sample = top1 + top2;

    }
    if (topcheck2.checked && topcheck3.checked)  {
    document.getElementById('total').innerHTML =  "Toppings: Double Cheese" + " " + top2 + " " + "</br>" + "</br>"+ "Toppings: Pepperonni" + " " +  top3 + "</br>" + "================================";
    sample = top2 + top3;
    }
    if (topcheck1.checked && topcheck3.checked)  {
    document.getElementById('total').innerHTML = "Toppings: Ham and Cheese" + " " + top1 + " " + "</br>" + "</br>"+ "Toppings: Pepperonni" + " " +   top3 + "</br>" + "================================";
    sample = top1 + top3;
    }
    if (topcheck1.checked && topcheck2.checked && topcheck3.checked)  {
    document.getElementById('total').innerHTML = "Toppings: Ham and Cheese" + " " + top1 + " " + "</br>" + "</br>"+ "Toppings: Double Cheese" + " " + top2 + "</br>" + "</br>" + "Toppings: Pepperonni" + " " + top3 + "</br>" + "================================";
    sample = top1 + top2 + top3;
    }

    var x = 120;
    var y = 150;
    var z = 200;

    var num1 = x; 
    var num2 = y; 
    var num3 = z; 


    // variable ng quantity
    var num4 = document.getElementById('quantitymo').value;




    // statement for quantity * sizes
    if(document.getElementById('size1').checked) {
    document.getElementById('result2').innerHTML = "Pizza Size: Small" + " "  + num1 * num4;
    quantity =  num1 * num4;
    }
    if(document.getElementById('size2').checked) {
    document.getElementById('result2').innerHTML = "Pizza Size: Large" + " "  + num2 * num4;
    quantity = num2 * num4;

    }
    if(document.getElementById('size3').checked) {
    document.getElementById('result2').innerHTML = "Pizza Size: Extra Large" + " "  + num3 * num4;
    quantity = num3 * num4;
    }
    if(num4 == 0) {
    document.getElementById('result2').innerHTML = "Please fill Up Quantity";
    document.getElementById('result1').style.display = "none";


    } 
    // var una = document.getElementById('total').innerHTML
    // var dalawa = document.getElementById('result2').innerHTML


    var total = sample + quantity

    document.getElementById('final').innerHTML = "Total: " + total


    }
   