
document.addEventListener("DOMContentLoaded", function () {

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");

    button1.style.backgroundColor = "red";
    
});


function button1Pressed() {
    if (button1 == null || button1.style.backgroundColor == "red") { //checks for page load and not already selected
        console.log("button1null or already pressed")
        return false;
    }
    console.log("button1pressed")
    button1.style.backgroundColor = "red";
    button2.style.backgroundColor = "#FFA000";
    button3.style.backgroundColor = "#FFA000";
    button4.style.backgroundColor = "#FFA000";
    
    document.getElementById("iframe").innerHTML = "<iframe class='myiFrame' src='welcome.html' width='100%' height='100%' frameborder='0' scrolling='no'>Dammit Internet Explorer. Try Chrome or Safari or Firefox or Opera or literally anything but IE.</iframe>";
  

}

function button2Pressed() {
    if (button2 == null || button2.style.backgroundColor == "red") { //checks for page load and not already selected
        console.log("button1null or already pressed")
        return false;
    }
    console.log("button1pressed")
    button2.style.backgroundColor = "red";
    button1.style.backgroundColor = "#FFA000";
    button3.style.backgroundColor = "#FFA000";
    button4.style.backgroundColor = "#FFA000";

    document.getElementById("iframe").innerHTML = "<iframe class='myiFrame' src='specials.html' width='100%' height='100%' frameborder='0' scrolling='no'>Dammit Internet Explorer. Try Chrome or Safari or Firefox or Opera or literally anything but IE.</iframe>";


}

function button3Pressed() {
    if (button3 == null || button3.style.backgroundColor == "red") { //checks for page load and not already selected
        console.log("button1null or already pressed")
        return false;
    }
    console.log("button1pressed")
    button3.style.backgroundColor = "red";
    button1.style.backgroundColor = "#FFA000";
    button2.style.backgroundColor = "#FFA000";
    button4.style.backgroundColor = "#FFA000";

    document.getElementById("iframe").innerHTML = "<iframe class='myiFrame' src='order.html' width='100%' height='100%' frameborder='0' scrolling='no'>Dammit Internet Explorer. Try Chrome or Safari or Firefox or Opera or literally anything but IE.</iframe>";


}


function button4Pressed() {
    if (button4 == null || button4.style.backgroundColor == "red") { //checks for page load and not already selected
        console.log("button1null or already pressed")
        return false;
    }
    console.log("button1pressed")
    button4.style.backgroundColor = "red";
    button1.style.backgroundColor = "#FFA000";
    button2.style.backgroundColor = "#FFA000";
    button3.style.backgroundColor = "#FFA000";

    document.getElementById("iframe").innerHTML = "<iframe class='myiFrame' src='testimonials.html' width='100%' height='100%' frameborder='0' scrolling='no'>Dammit Internet Explorer. Try Chrome or Safari or Firefox or Opera or literally anything but IE.</iframe>";


}