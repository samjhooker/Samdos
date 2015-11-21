var SpecialModule = (function () {

    return {
        getSpecials: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                // API url here
                url: "http://samdos.azurewebsites.net/api/Specials/",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        },

        getSpecialById: function (id, callback) {

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://samdos.azurewebsites.net/api/Specials/" + id,
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });

        },

        addSpecial: function (student, callback) {

            $.ajax({
                url: "http://samdos.azurewebsites.net/api/Specials/",
                type: "POST",
                data: student,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });

        },

        updateSpecial: function (studentid, student, callback) {

            $.ajax({
                url: "http://samdos.azurewebsites.net/api/Specials/" + studentid,
                type: "PUT",
                data: student,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });
        },

        deleteSpecial: function (studentid, callback) {

            $.ajax({
                type: "DELETE",
                dataType: "json",
                url: "http://samdos.azurewebsites.net/api/Specials/" + studentid,
                success: function (data) {
                    callback();
                }
            });
        }
    };

}());