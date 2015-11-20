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