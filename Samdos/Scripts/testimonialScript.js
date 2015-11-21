document.addEventListener("DOMContentLoaded", function () {
    console.log("testimonial page loaded");
    loadTestimonials();
});


function loadTestimonials() {

    var testimonialTable = document.getElementById("testimonialsGoHere");

    TestimonialModule.getTestimonials(function (testimonialList) {
        setupTestimonials(testimonialList);
    });

    function setupTestimonials(testimonials) {

        console.log("finished pulling from the server");

        // Loop through list of testimonials
        for (i = 0; i < testimonials.length; i++) {

            

            // Create row
            var row = document.createElement('tr');
            row.setAttribute("data-id", testimonials[i].ID);


            // Create columns

            var staffCol = document.createElement('td');
            staffCol.id = row.getAttribute("data-id");
            var btn = document.createElement("BUTTON");        // Create a <button> element
            btn.className += "hackerButton"
            var t = document.createTextNode("delete");       // Create a text node
            btn.appendChild(t);   
            btn.onclick = function (event) {
                var id = event.target.parentNode.id;
                
                var password = prompt("Please enter your Samdo's staff password", "");
                if(password == "admin"){
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
                            ID:data.ID,
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
        }
    }
}




function submitTestimonialButtonPressed() {

    console.log("submit button pressed");

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

    }

    
}