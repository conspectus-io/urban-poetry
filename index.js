$(document).ready(function () {

    let mymessage = "hello world";

    $("button").click(function () {
        $(".message").html(mymessage);
        // $("#outputBox").html("\"" + $("#exclamation").val() + "!\" he shouted " + $("#adverb").val() + " as he leaped into his convertible " + $("#noun").val() + " and zoomed off with his " + $("#adjective").val() + " wife.");
    });
});