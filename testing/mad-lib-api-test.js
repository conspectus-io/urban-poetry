const $ = require('jquery');


function getData() {
    $(function () {
        $.ajax({
            url: "metaphorpsum.com/sentences/4",
            success: function (data) {
                console.log(data);
            }
        });
    })
}

getData();
