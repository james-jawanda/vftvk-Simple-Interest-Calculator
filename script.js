function compute()
{

 var p = document.getElementById("principal").value;

    if(  p <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
 var  p = document.getElementById("principal").value;
 var   r = document.getElementById("rate").value;
 var   n = document.getElementById("years").value;
 var  i = (p*r*n)/100;

 var   dateNow = new Date();
 var   yearNow = parseInt(dateNow.getFullYear()) + parseInt(n);
    
 var   resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "$<span class='highlight'>" + p + "</span>"  + ", <br> at an interest rate of " + "<span class='highlight'>" + r + "</span>" + "%" + "<br> You will receive an amount of " + "$<span class='highlight'>" + i + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>" + ".";
}

function SliderValue()
{

var    slider = document.getElementById("rate");
var    output = document.getElementById("rate_display");
output.innerHTML = slider.value;
slider.oninput = function() {
output.innerHTML = this.value;
}
}