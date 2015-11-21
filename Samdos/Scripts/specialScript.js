document.addEventListener("DOMContentLoaded", function () {
    console.log("special page loaded");
    loadTestimonials();
});


function loadTestimonials() {

    var specialsGrid = document.getElementById("specialsGoHere");

    SpecialModule.getSpecials(function (specialList) {
        setupSpecials(specialList);
    });

    function setupSpecials(specials) {

        console.log("finished pulling from the server");

        // Loop through list of testimonials
        for (i = 0; i < specials.length; i++) {

            //create a special item
            var specialItem = document.createElement("div");
            specialItem.className += "special-item";

            //create image for within item
            var image = document.createElement("img");
            image.className += "special-image";
            image.src = specials[i].ImgURL;
            specialItem.appendChild(image);

            //create main body
            var body = document.createElement("div");
            body.className += "special-item-content";

            //create the stuff inside the body
            var header = document.createElement("h3");
            header.textContent = specials[i].Title;
            var text = document.createElement("p");
            text.textContent = specials[i].Description;

            var redeemButton = document.createElement("button");
            redeemButton.className += "btn btn-primary light-shadow";
            redeemButton.textContent = "Redeem Special";
            redeemButton.onclick = function () {
                window.location.href = "order.html";
            };

            var deleteButton = document.createElement("button");
            deleteButton.className += "ghostButton";
            deleteButton.textContent = "x";
            deleteButton.onclick = function () { };




            body.appendChild(header);
            body.appendChild(text);
            body.appendChild(redeemButton);
            body.appendChild(deleteButton);


            specialItem.appendChild(body);

            specialsGrid.appendChild(specialItem);

        }
    }
}




function addSpecialButtonPressed() {

    console.log("submit button pressed");

    var password = prompt("Please enter your Samdo's staff password", "");
    if (password == "admin") {
        window.location.href = "createSpecial.html";
    }




    /*
    var name = document.getElementById("nameTextField").value;
    var comment = document.getElementById("commentTextField").value;

    if (name == "" || comment == "") {
        window.alert("Both name and Comment required to proceed");
    } else {
        //post that object
        var newTestamonial = {
            ID: Math.floor((Math.random() * 9999999) + 1),
            Name: name,
            Comment: comment,
            reply: "-"
        }

        TestimonialModule.addTestimonial(newTestamonial, function () {
            window.location.href = "testimonials.html";
        });

    }*/


}