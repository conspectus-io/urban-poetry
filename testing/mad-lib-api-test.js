var $ = require('../node_modules/jquery/dist/jquery.js');

$(document).ready(function() {
    $("#getMessage").on("click", function() {
        $(".message").html("Test is Working...");
    });
});

// $.ajax({
//     url: "metaphorpsum.com/sentences/4",
//     success: function (data) {
//         console.log(data);
//     }
// });
