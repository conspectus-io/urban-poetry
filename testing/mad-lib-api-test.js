const $ = require('jquery');

$(function () {
    $("body").on("click", function() {
        $("body").prepend("<p>working test example...</p>");
    });
    
    $.ajax({
        url: "metaphorpsum.com/sentences/4",
        success: function (data) {
            console.log(data);
        }
    });
});
