var TestimonialModule = (function () {

    return {
        getTestimonials: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                // API url here
                url: "http://samdos.azurewebsites.net/api/Testimonials/",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        },

        getTestimonialById: function (id, callback) {

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://samdos.azurewebsites.net/api/Testimonials/" + id,
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });

        },

        addTestimonial: function (student, callback) {

            $.ajax({
                url: "http://samdos.azurewebsites.net/api/Testimonials/",
                type: "POST",
                data: student,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });

        },

        updateTestimonial: function (studentid, student, callback) {

            $.ajax({
                url: "http://samdos.azurewebsites.net/api/Testimonials/" + studentid,
                type: "PUT",
                data: student,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });
        },

        deleteTestimonial: function (studentid, callback) {

            $.ajax({
                type: "DELETE",
                dataType: "json",
                url: "http://samdos.azurewebsites.net/api/Testimonials/" + studentid,
                success: function (data) {
                    callback();
                }
            });
        }
    };

}());