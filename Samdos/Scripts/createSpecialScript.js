

function backButtonPressed() {
    window.location.href = "specials.html";
}
function previewButtonPressed() {

    var specialsGrid = document.getElementById("specialsGoHere");

    var title = document.getElementById("titleTextField").value;
    var description = document.getElementById("descriptionTextField").value;
    var image = document.getElementById("imageTextField").value;


    //create a special item
    var specialItem = document.createElement("div");
    specialItem.className += "special-item";

    //create image for within item
    var image = document.createElement("img");
    image.className += "special-image";
    image.src = image;
    specialItem.appendChild(image);

    //create main body
    var body = document.createElement("div");
    body.className += "special-item-content";

    //create the stuff inside the body
    var header = document.createElement("h3");
    header.textContent = title;
    var text = document.createElement("p");
    text.textContent = description;

    var redeemButton = document.createElement("button");
    redeemButton.className += "btn btn-primary light-shadow";
    redeemButton.textContent = "Redeem Special";
    redeemButton.onclick = function () {};

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

function submitButtonPressed() {
    var title = document.getElementById("titleTextField").value;
    var description = document.getElementById("descriptionTextField").value;
    var image = document.getElementById("imageTextField").value;

    if (title == "" || description == "") {
        alert("Title and Description must be filled");
    } else {
        var newSpecial = {
            ID: 0,
            Title: title,
            Description: description,
            ImgURL: image
        }

        SpecialModule.addSpecial(newSpecial, function () {
            window.location.href = "specials.html";
        });
    }
}