
function getCheckedRadio(radio_group) {
    for (var i = 0; i < radio_group.length; i++) {
        var button = radio_group[i];
        if (button.checked) {
            return button;
        }
    }
    return null;
}


function getSelectedCheckboxes(boxes) {
    var ingredients = "";
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].checked){
            ingredients += boxes[i].value + " ";
        }
    }
    return ingredients;
}

function submitButtonPressed() {

    var storeRadios = document.getElementsByName("radio1");
    var store = getCheckedRadio(storeRadios);
    if(store == null){
        alert("Store must be selected");
        return;
    }
    store = store.value;


    var name = document.getElementById("nameTextField").value;
    if (name == "") {
        alert("You must enter a name");
        return;
    }

    var phone = document.getElementById("phoneTextField").value;
    if (phone == "") {
        alert("You must enter a phone number");
        return;
    }

    var typeRadios = document.getElementsByName("radio");
    var type = getCheckedRadio(typeRadios);
    if(type == null){
        alert("type must be selected");
        return;
    }
    type = type.value;


    var ingredientCheckboxes = document.getElementsByName("checkbox");
    var ingredients = getSelectedCheckboxes(ingredientCheckboxes);


    var comment = document.getElementById("commentTextField").value;

    console.log("THE ORDER IS:\n" + name + phone + type + store + ingredients + comment);

    var order = {
        ID: 0,
        Store: store,
        Name: name,
        Phone: phone,
        Type: type,
        Ingredients: ingredients,
        Comments: comment
    }

    OrderModule.addOrder(order, function () {
        window.location.href = "orderPlaced.html";
    });

}