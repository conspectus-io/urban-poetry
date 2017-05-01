const $ = require('jquery');

$(document).ready(function() {
    $("body").on("click", function() {
        $("#text-output").html("Test is Working...");
    });
    
    // $.ajax({
    //     url: "metaphorpsum.com/sentences/4",
    //     success: function (data) {
    //         console.log(data);
    //     }
    // });
});
