const $ = require('jquery');


function getData() {
    $(function () {
        $("body").on("click", function() {
            $("body").prepend("<p>working test example...</p>");
        }
        $.ajax({
            url: "metaphorpsum.com/sentences/4",
            success: function (data) {
                console.log(data);
            }
        });
    })
}

getData();
