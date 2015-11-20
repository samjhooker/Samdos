﻿document.addEventListener("DOMContentLoaded", function () {
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
            var btn = document.createElement("BUTTON");        // Create a <button> element
            var t = document.createTextNode("delete");       // Create a text node
            btn.appendChild(t);   
            btn.onclick = function() {
                var password = prompt("Please enter your Samdo's staff password", "");
                if(password == "admin"){
                    //delete post
                    TestimonialModule.deleteTestimonial(row.getAttribute("data-id"), function () {
                        window.location.href = "testimonials.html";
                    });
                }
            };
            staffCol.appendChild(btn);
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