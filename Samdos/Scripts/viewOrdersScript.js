document.addEventListener("DOMContentLoaded", function () {
    console.log("orders page loaded");
    loadOrders();
});



function loadOrders() {

    var ordersTable = document.getElementById("ordersGoHere");

    OrderModule.getOrders(function (orderList) {
        setupOrders(orderList);
    });

    function setupOrders(orders) {

        console.log("finished pulling from the server");

        // Loop through list of testimonials
        for (i = 0; i < orders.length; i++) {



            // Create row
            var row = document.createElement('tr');
            row.setAttribute("data-id", orders[i].ID);

            var store = document.createElement('td');
            store.innerHTML = orders[i].Store;
            row.appendChild(store);

            var type = document.createElement('td');
            type.innerHTML = orders[i].Type;
            row.appendChild(type);

            var ingredients = document.createElement('td');
            ingredients.innerHTML = orders[i].Ingredients;
            row.appendChild(ingredients);

            var comments = document.createElement('td');
            comments.innerHTML = orders[i].Comments;
            row.appendChild(comments);

            var name = document.createElement('td');
            name.innerHTML = orders[i].Name;
            row.appendChild(name);

            var phone = document.createElement('td');
            phone.innerHTML = orders[i].Phone;
            row.appendChild(phone);

            var done = document.createElement('td');
            done.id = row.getAttribute("data-id");
            var btn = document.createElement("BUTTON");        // Create a <button> element
            btn.className += "hackerButton"
            var t = document.createTextNode("delete");       // Create a text node
            btn.appendChild(t);
            btn.onclick = function (event) {
                var id = event.target.parentNode.id;

                var password = prompt("Please enter your Samdo's staff password", "");
                if (password == "admin") {
                    //delete post
                    OrderModule.deleteOrder(id, function () {
                        window.location.href = "viewOrders.html";
                    });
                }
            };
            done.appendChild(btn);
            row.appendChild(done);

            ordersTable.appendChild(row);




            // Create columns
            /*
            var staffCol = document.createElement('td');
            staffCol.id = row.getAttribute("data-id");
            var btn = document.createElement("BUTTON");        // Create a <button> element
            btn.className += "hackerButton"
            var t = document.createTextNode("delete");       // Create a text node
            btn.appendChild(t);
            btn.onclick = function (event) {
                var id = event.target.parentNode.id;

                var password = prompt("Please enter your Samdo's staff password", "");
                if (password == "admin") {
                    //delete post
                    TestimonialModule.deleteTestimonial(id, function () {
                        window.location.href = "testimonials.html";
                    });
                }
            };
            staffCol.appendChild(btn);

            var btn2 = document.createElement("BUTTON");        // Create a <button> element
            var t2 = document.createTextNode("reply");       // Create a text node
            btn2.appendChild(t2);
            btn2.className += "hackerButton"
            btn2.onclick = function (event) {

                var id = event.target.parentNode.id;
                var password = prompt("Please enter your Samdo's staff password", "");
                if (password == "admin") {


                    //get post first
                    TestimonialModule.getTestimonialById(id, function (data) {
                        var reply = prompt("Please enter your Reply", "");
                        var newTestamonial = {
                            ID: data.ID,
                            Name: data.Name,
                            Comment: data.Comment,
                            reply: reply
                        }

                        TestimonialModule.updateTestimonial(id, newTestamonial, function () {
                            window.location.href = "testimonials.html";
                        });
                    });
                }
            };
            staffCol.appendChild(btn2);


            row.appendChild(staffCol);


            var nameCol = document.createElement('td');
            nameCol.innerHTML = testimonials[i].Name;
            row.appendChild(nameCol);

            var commentCol = document.createElement('td');
            commentCol.innerHTML = testimonials[i].Comment;
            row.appendChild(commentCol);

            var replyCol = document.createElement('td');
            replyCol.innerHTML = testimonials[i].Reply;
            row.appendChild(replyCol);

            // Add newly created row to the table
            testimonialTable.appendChild(row);
            */
        }
    }
}