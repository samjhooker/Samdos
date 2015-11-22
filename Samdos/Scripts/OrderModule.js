var OrderModule = (function () {

    return {
        getOrders: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                // API url here
                url: "http://samdos.azurewebsites.net/api/Orders/",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        },

        getOrderById: function (id, callback) {

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://samdos.azurewebsites.net/api/Orders/" + id,
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });

        },

        addOrder: function (student, callback) {

            $.ajax({
                url: "http://samdos.azurewebsites.net/api/Orders/",
                type: "POST",
                data: student,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });

        },

        updateOrder: function (studentid, student, callback) {

            $.ajax({
                url: "http://samdos.azurewebsites.net/api/Orders/" + studentid,
                type: "PUT",
                data: student,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });
        },

        deleteOrder: function (studentid, callback) {

            $.ajax({
                type: "DELETE",
                dataType: "json",
                url: "http://samdos.azurewebsites.net/api/Orders/" + studentid,
                success: function (data) {
                    callback();
                }
            });
        }
    };

}());